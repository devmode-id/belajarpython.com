---
layout: tutorial.njk
title: Deploying Apps dengan Docker & Kubernetes
order: 45
permalink: /tutorial/deploying-docker-kubernetes-python/
---

<img src="/img/tutorial/45-deploying-apps-python.png" alt="Deploying Apps dengan Docker dan Kubernetes" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

Pernahkah Anda mendengar kalimat **"Tapi ini jalan di laptop saya!"** saat aplikasi Anda error di server produksi?

Masalah ini diselesaikan oleh **Containerization**. Docker membungkus aplikasi Anda beserta semua dependensinya (library Python, OS settings, environment variables) ke dalam satu wadah ("container") yang bisa berjalan **di mana saja** — laptop, server, atau cloud.

---

## 🐳 Apa itu Docker?

Docker adalah platform untuk membangun, menjalankan, dan mendistribusikan **container**. Container mirip dengan virtual machine (VM), tapi jauh lebih ringan karena berbagi kernel OS host.

| Aspek | Virtual Machine | Docker Container |
|-------|-----------------|------------------|
| **Ukuran** | GB (termasuk OS) | MB (hanya app + deps) |
| **Startup** | Menit | Detik |
| **Resource** | Berat | Sangat ringan |
| **Isolasi** | Penuh (OS sendiri) | Proses level |
| **Use Case** | Legacy apps, different OS | Modern apps, microservices |

---

## 📦 Container Image

**Image** adalah blueprint/template untuk membuat container. Mirip seperti class di OOP — Image adalah class, Container adalah instance/object-nya.

### Dockerfile

Dockerfile adalah resep untuk membangun image. Setiap instruksi menciptakan layer baru.
 
```bash
# Gunakan base image Python resmi (alpine = versi ringan)
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1

# Set direktori kerja
WORKDIR /app

# Install dependencies sistem (jika diperlukan)
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Copy dan install Python dependencies terlebih dahulu (untuk caching)
COPY requirements.txt .
RUN pip install --upgrade pip && \
    pip install -r requirements.txt

# Copy seluruh kode aplikasi
COPY . .

# Buat user non-root untuk keamanan
RUN adduser --disabled-password --gecos '' appuser && \
    chown -R appuser:appuser /app
USER appuser

# Expose port
EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8000/health || exit 1

# Command untuk menjalankan aplikasi
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
``` 

### Multi-Stage Build (Optimasi)

Untuk image yang lebih kecil, gunakan multi-stage build:
 
```bash
# Stage 1: Build
FROM python:3.11-slim AS builder

WORKDIR /app

COPY requirements.txt .
RUN pip install --user --no-cache-dir -r requirements.txt

# Stage 2: Production
FROM python:3.11-slim

WORKDIR /app

# Copy installed packages dari builder stage
COPY --from=builder /root/.local /root/.local
ENV PATH=/root/.local/bin:$PATH

COPY . .

EXPOSE 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
``` 

---

## 🔨 Build & Run Container

### Build Image

```bash
# Build image dengan nama dan tag
docker build -t myapp:1.0.0 .

# Lihat daftar images
docker images
```

### Run Container

```bash
# Run container dari image
docker run -d \
    --name myapp-container \
    -p 8000:8000 \
    -e DATABASE_URL="postgresql://user:pass@host/db" \
    -v $(pwd)/logs:/app/logs \
    myapp:1.0.0

# Cek container yang berjalan
docker ps

# Lihat logs
docker logs -f myapp-container

# Masuk ke dalam container
docker exec -it myapp-container bash

# Stop dan hapus container
docker stop myapp-container
docker rm myapp-container
```

---

## 🎼 Docker Compose

Untuk aplikasi dengan **multiple services** (database, Redis, dll), gunakan Docker Compose:

{% raw %}
```yaml
# docker-compose.yml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/myapp
      - REDIS_URL=redis://redis:6379
      - SECRET_KEY=${SECRET_KEY}
    volumes:
      - ./app:/app/app  # Hot reload untuk development
      - static_volume:/app/static
    depends_on:
      db:
        condition: service_healthy
      redis:
        condition: service_started
    restart: unless-stopped

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=myapp
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    ports:
      - "5432:5432"
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 5s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - static_volume:/app/static
      - ./certs:/etc/nginx/certs
    depends_on:
      - web

  celery:
    build: .
    command: celery -A app.celery worker --loglevel=info
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/myapp
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis

volumes:
  postgres_data:
  redis_data:
  static_volume:
```
{% endraw %}

### Menjalankan Docker Compose

```bash
# Start semua services (background)
docker-compose up -d

# Lihat status
docker-compose ps

# Lihat logs semua services
docker-compose logs -f

# Lihat logs service tertentu
docker-compose logs -f web

# Stop semua services
docker-compose down

# Stop dan hapus volumes (HATI-HATI: data hilang!)
docker-compose down -v

# Rebuild images
docker-compose build --no-cache
```

---

## 🏭 Container Registry

Untuk deployment ke production, Anda perlu menyimpan image di **Container Registry**:

| Registry | Keterangan |
|----------|------------|
| **Docker Hub** | Default, gratis untuk public images |
| **GitHub Container Registry (ghcr.io)** | Terintegrasi dengan GitHub Actions |
| **Google Container Registry (gcr.io)** | Untuk Google Cloud |
| **Amazon ECR** | Untuk AWS |
| **Azure Container Registry** | Untuk Azure |

### Push ke Docker Hub

```bash
# Login ke Docker Hub
docker login

# Tag image
docker tag myapp:1.0.0 username/myapp:1.0.0

# Push ke registry
docker push username/myapp:1.0.0
```

### Push ke GitHub Container Registry

```bash
# Login dengan Personal Access Token
echo $GITHUB_TOKEN | docker login ghcr.io -u USERNAME --password-stdin

# Tag image
docker tag myapp:1.0.0 ghcr.io/username/myapp:1.0.0

# Push
docker push ghcr.io/username/myapp:1.0.0
```

---

## ☸️ Kubernetes (K8s)

Jika Docker adalah **kapal pengangkut kontainer**, maka Kubernetes adalah **nahkoda pelabuhan** yang mengatur ribuan kapal tersebut.

Kubernetes (K8s) adalah sistem **orchestration** untuk mengelola container dalam skala besar. Jika Anda punya 100 container aplikasi yang harus berjalan di 10 server berbeda, K8s yang akan mengaturnya.

### Fitur Utama K8s

| Fitur | Deskripsi |
|-------|-----------|
| **Load Balancing** | Membagi trafik ke beberapa container |
| **Self-healing** | Restart otomatis jika container crash |
| **Horizontal Scaling** | Tambah/kurangi container sesuai load |
| **Rolling Updates** | Deploy versi baru tanpa downtime |
| **Secret Management** | Kelola credentials dengan aman |
| **Service Discovery** | Container bisa saling menemukan |

### Komponen Utama K8s

```
┌──────────────────────────────────────────────────────────┐
│                    Kubernetes Cluster                     │
│  ┌────────────────────────────────────────────────────┐  │
│  │                    Control Plane                    │  │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────────────┐   │  │
│  │  │API Server│ │Scheduler │ │Controller Manager│   │  │
│  │  └──────────┘ └──────────┘ └──────────────────┘   │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │                   Worker Nodes                      │  │
│  │  ┌────────────────┐  ┌────────────────┐            │  │
│  │  │     Node 1     │  │     Node 2     │            │  │
│  │  │  ┌──────────┐  │  │  ┌──────────┐  │            │  │
│  │  │  │   Pod    │  │  │  │   Pod    │  │            │  │
│  │  │  │[Container]│ │  │  │[Container]│ │            │  │
│  │  │  └──────────┘  │  │  └──────────┘  │            │  │
│  │  │  ┌──────────┐  │  │  ┌──────────┐  │            │  │
│  │  │  │   Pod    │  │  │  │   Pod    │  │            │  │
│  │  │  │[Container]│ │  │  │[Container]│ │            │  │
│  │  │  └──────────┘  │  │  └──────────┘  │            │  │
│  │  └────────────────┘  └────────────────┘            │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

---

## 📄 Kubernetes Manifests

Kubernetes menggunakan file YAML untuk mendefinisikan resources.

### 1. Deployment

Deployment mengontrol bagaimana Pod di-deploy dan di-scale:

{% raw %}
```yaml
# k8s/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-deployment
  labels:
    app: myapp
spec:
  replicas: 3  # Jalankan 3 replicas
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: ghcr.io/username/myapp:1.0.0
        ports:
        - containerPort: 8000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: myapp-secrets
              key: database-url
        - name: ENV
          value: "production"
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 8000
          initialDelaySeconds: 10
          periodSeconds: 30
        readinessProbe:
          httpGet:
            path: /health
            port: 8000
          initialDelaySeconds: 5
          periodSeconds: 10
      imagePullSecrets:
      - name: ghcr-secret
```
{% endraw %}

### 2. Service

Service mengekspos Deployment dan melakukan load balancing:

```yaml
# k8s/service.yaml
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  type: ClusterIP  # Internal only
  selector:
    app: myapp
  ports:
  - protocol: TCP
    port: 80
    targetPort: 8000
---
# Load Balancer (untuk cloud providers)
apiVersion: v1
kind: Service
metadata:
  name: myapp-loadbalancer
spec:
  type: LoadBalancer
  selector:
    app: myapp
  ports:
  - protocol: TCP
    port: 80
    targetPort: 8000
```

### 3. Ingress

Ingress mengatur routing HTTP/HTTPS dari luar cluster:

```yaml
# k8s/ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: myapp-ingress
  annotations:
    kubernetes.io/ingress.class: nginx
    cert-manager.io/cluster-issuer: letsencrypt-prod
spec:
  tls:
  - hosts:
    - api.myapp.com
    secretName: myapp-tls
  rules:
  - host: api.myapp.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: myapp-service
            port:
              number: 80
```

### 4. ConfigMap & Secrets

{% raw %}
```yaml
# k8s/configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: myapp-config
data:
  APP_NAME: "My Awesome App"
  LOG_LEVEL: "INFO"
  ALLOWED_HOSTS: "api.myapp.com,www.myapp.com"
---
# k8s/secrets.yaml (values harus base64 encoded)
apiVersion: v1
kind: Secret
metadata:
  name: myapp-secrets
type: Opaque
data:
  database-url: cG9zdGdyZXNxbDovL3VzZXI6cGFzc0Bob3N0L2Ri  # base64 encoded
  secret-key: c3VwZXItc2VjcmV0LWtleQ==
```
{% endraw %}

### 5. Horizontal Pod Autoscaler

```yaml
# k8s/hpa.yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: myapp-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp-deployment
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
```

---

## 🚀 Deploy ke Kubernetes

### Local Development dengan Minikube

```bash
# Install Minikube (untuk local development)
# Windows: choco install minikube
# Mac: brew install minikube

# Start cluster
minikube start

# Apply manifests
kubectl apply -f k8s/

# Cek status
kubectl get pods
kubectl get services
kubectl get deployments

# Lihat logs
kubectl logs -f deployment/myapp-deployment

# Port forward untuk testing
kubectl port-forward service/myapp-service 8080:80

# Masuk ke pod
kubectl exec -it <pod-name> -- bash
```

### Managed Kubernetes (Production)

| Provider | Service Name | Kelebihan |
|----------|--------------|-----------|
| **Google Cloud** | GKE | Integrasi terbaik, autopilot mode |
| **AWS** | EKS | Ekosistem AWS lengkap |
| **Azure** | AKS | Integrasi dengan Azure DevOps |
| **DigitalOcean** | DOKS | Murah, simple |
| **Linode** | LKE | Affordable, developer-friendly |

---

## 🔄 CI/CD Pipeline

Otomatisasi build dan deploy dengan GitHub Actions:

{% raw %}
```yaml
# .github/workflows/deploy.yml
name: Build and Deploy

on:
  push:
    branches: [main]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  build-and-push:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
    
    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v3
    
    - name: Login to GitHub Container Registry
      uses: docker/login-action@v3
      with:
        registry: ${{ env.REGISTRY }}
        username: ${{ github.actor }}
        password: ${{ secrets.GITHUB_TOKEN }}
    
    - name: Extract metadata
      id: meta
      uses: docker/metadata-action@v5
      with:
        images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
        tags: |
          type=sha,prefix=
          type=raw,value=latest,enable=${{ github.ref == 'refs/heads/main' }}
    
    - name: Build and push
      uses: docker/build-push-action@v5
      with:
        context: .
        push: true
        tags: ${{ steps.meta.outputs.tags }}
        labels: ${{ steps.meta.outputs.labels }}
        cache-from: type=gha
        cache-to: type=gha,mode=max

  deploy:
    needs: build-and-push
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
    
    - name: Set up kubectl
      uses: azure/setup-kubectl@v3
    
    - name: Configure kubectl
      run: |
        mkdir -p ~/.kube
        echo "${{ secrets.KUBECONFIG }}" | base64 -d > ~/.kube/config
    
    - name: Update deployment
      run: |
        kubectl set image deployment/myapp-deployment \
          myapp=${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}
    
    - name: Wait for rollout
      run: |
        kubectl rollout status deployment/myapp-deployment --timeout=300s
```
{% endraw %}

---

## 🛡️ Best Practices Production

### Docker Best Practices

| Practice | Alasan |
|----------|--------|
| Gunakan image spesifik (bukan `latest`) | Reproducibility |
| Multi-stage build | Image lebih kecil |
| Run as non-root user | Keamanan |
| Use `.dockerignore` | Build lebih cepat |
| Scan vulnerabilities | `docker scan myapp:latest` |
| Pin dependency versions | Avoid breaking changes |

### Kubernetes Best Practices

| Practice | Alasan |
|----------|--------|
| Set resource limits | Hindari noisy neighbors |
| Use liveness/readiness probes | Self-healing |
| Gunakan namespaces | Isolasi environment |
| Implement network policies | Zero trust security |
| Use secrets management | Jangan hardcode credentials |
| Enable RBAC | Principle of least privilege |

---

## 🧰 Tools Tambahan yang Berguna

| Tool | Fungsi |
|------|--------|
| **Helm** | Package manager untuk K8s (charts) |
| **ArgoCD** | GitOps continuous delivery |
| **Lens** | GUI untuk manage K8s clusters |
| **k9s** | TUI dashboard untuk K8s |
| **Prometheus + Grafana** | Monitoring & visualization |
| **Jaeger** | Distributed tracing |

---

## 📚 Kesimpulan

### Kapan Pakai Apa?

| Skala | Rekomendasi |
|-------|-------------|
| **Development/Testing** | Docker + Docker Compose |
| **Small Production** | Docker Compose + VPS (Railway, Render) |
| **Medium Production** | Managed K8s (GKE, EKS, DOKS) |
| **Enterprise** | Self-managed K8s + Advanced DevOps |

### Learning Path

1. **Mulai dengan Docker** — build image, run container
2. **Pelajari Docker Compose** — multi-container apps
3. **Pahami konsep K8s** — pods, deployments, services
4. **Praktik dengan Minikube** — local K8s cluster
5. **Deploy ke Managed K8s** — GKE, EKS, atau DOKS
6. **Implementasi CI/CD** — GitHub Actions, GitLab CI
7. **Advanced Topics** — Helm, Istio, GitOps

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/deploying-docker-kubernetes-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/microservices-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Microservices</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/devops-ci-cd-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">DevOps & CI/CD</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
