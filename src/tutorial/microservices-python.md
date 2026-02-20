---
layout: tutorial.njk
title: Microservices dengan Python
order: 44
permalink: /tutorial/microservices-python/
---

<img src="/img/tutorial/44-microservices-python.png" alt="Microservices dengan Python" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

Dahulu, aplikasi dibangun sebagai satu kesatuan raksasa (**Monolith**). Jika satu bagian rusak, seluruh aplikasi bisa mati. Jika ingin update satu fitur kecil, seluruh aplikasi harus di-deploy ulang.

**Microservices** memecahkan masalah ini dengan memecah aplikasi menjadi layanan-layanan kecil yang **independen**. Setiap layanan menjalankan prosesnya sendiri dan berkomunikasi melalui mekanisme ringan, biasanya HTTP API atau Message Queue.

---

## 🏗️ Monolith vs Microservices

| Aspek | Monolith | Microservices |
|-------|----------|---------------|
| **Deployment** | Semua sekaligus | Deploy per service |
| **Scaling** | Scale seluruh app | Scale service tertentu saja |
| **Teknologi** | Satu stack | Bisa beda-beda (Polyglot) |
| **Kegagalan** | Satu error = semua down | Service lain tetap jalan |
| **Kompleksitas** | Mudah di awal | Kompleks tapi terstruktur |
| **Cocok untuk** | MVP, startup awal | Sistem besar, tim banyak |

---

## ✨ Karakteristik Microservices

1. **Single Responsibility**: Setiap service hanya fokus pada satu domain bisnis
2. **Independen**: Bisa di-deploy, di-update, dan di-scale secara terpisah
3. **Terdesentralisasi**: Setiap service boleh menggunakan teknologi/database yang berbeda
4. **Resilien**: Kegagalan satu service tidak mematikan sistem secara keseluruhan
5. **Observable**: Mudah di-monitor dan di-debug dengan logging terpusat

---

## 🐍 Python untuk Microservices

Python sangat cocok untuk microservices karena:

| Framework | Keunggulan | Use Case |
|-----------|------------|----------|
| **FastAPI** | Async, auto-docs, type hints | REST API, high-performance |
| **Flask** | Minimalis, fleksibel | Simple services, internal tools |
| **Nameko** | RPC, message queues | Event-driven architecture |
| **gRPC** | Binary protocol, super cepat | Inter-service communication |

---

## 🛒 Contoh Arsitektur: Toko Online

Alih-alih satu kode besar, kita membagi aplikasi menjadi beberapa service:

```
┌─────────────────────────────────────────────────────────────┐
│                        API Gateway                           │
│                  (Kong / Nginx / Traefik)                   │
└──────────┬──────────────────┬──────────────────┬────────────┘
           │                  │                  │
           ▼                  ▼                  ▼
┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐
│   User Service   │ │ Product Service  │ │  Order Service   │
│   FastAPI :8001  │ │  FastAPI :8002   │ │  FastAPI :8003   │
│                  │ │                  │ │                  │
│  └── PostgreSQL  │ │  └── MongoDB     │ │  └── PostgreSQL  │
└────────┬─────────┘ └────────┬─────────┘ └────────┬─────────┘
         │                    │                    │
         └────────────────────┼────────────────────┘
                              │
                   ┌──────────▼──────────┐
                   │    Message Queue    │
                   │      (RabbitMQ)     │
                   └──────────┬──────────┘
                              │
                   ┌──────────▼──────────┐
                   │ Notification Service│
                   │    (Email, SMS)     │
                   └─────────────────────┘
```

---

## 📦 Implementasi: User Service

Mari buat **User Service** menggunakan FastAPI:

### Struktur Folder

```
user-service/
├── app/
│   ├── __init__.py
│   ├── main.py          # Entry point FastAPI
│   ├── config.py        # Konfigurasi
│   ├── models.py        # Database models
│   ├── schemas.py       # Pydantic schemas
│   ├── crud.py          # Database operations
│   └── routers/
│       ├── __init__.py
│       └── users.py     # User endpoints
├── requirements.txt
├── Dockerfile
└── docker-compose.yml
```

### Main Application

```python
# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import users
from .config import settings

app = FastAPI(
    title="User Service",
    description="Microservice untuk manajemen user",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(users.router, prefix="/users", tags=["Users"])

@app.get("/health")
async def health_check():
    """Health check endpoint untuk Kubernetes/Docker"""
    return {"status": "healthy", "service": "user-service"}
```

### User Models & Schemas

```python
# app/models.py
from sqlalchemy import Column, Integer, String, DateTime, Boolean
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True)
    username = Column(String(100), unique=True, index=True)
    hashed_password = Column(String(255))
    full_name = Column(String(200))
    is_active = Column(Boolean, default=True)
    is_verified = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
```

```python
# app/schemas.py
from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

class UserCreate(BaseModel):
    email: EmailStr
    username: str
    password: str
    full_name: str

class UserResponse(BaseModel):
    id: int
    email: str
    username: str
    full_name: str
    is_active: bool
    is_verified: bool
    created_at: datetime
    
    class Config:
        from_attributes = True

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
```

### User Router/Endpoints

```python
# app/routers/users.py
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from .. import crud, schemas
from ..database import get_db

router = APIRouter()

@router.post("/register", response_model=schemas.UserResponse, status_code=201)
async def register_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    """Registrasi user baru"""
    # Cek apakah email sudah terdaftar
    existing_user = crud.get_user_by_email(db, user.email)
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email sudah terdaftar"
        )
    
    # Buat user baru
    return crud.create_user(db, user)


@router.get("/{user_id}", response_model=schemas.UserResponse)
async def get_user(user_id: int, db: Session = Depends(get_db)):
    """Ambil data user berdasarkan ID"""
    user = crud.get_user(db, user_id)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User tidak ditemukan"
        )
    return user


@router.get("/", response_model=List[schemas.UserResponse])
async def list_users(skip: int = 0, limit: int = 50, db: Session = Depends(get_db)):
    """Daftar semua user dengan pagination"""
    return crud.get_users(db, skip=skip, limit=limit)


@router.post("/login", response_model=schemas.TokenResponse)
async def login(credentials: schemas.UserLogin, db: Session = Depends(get_db)):
    """Login dan dapatkan JWT token"""
    user = crud.authenticate_user(db, credentials.email, credentials.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Email atau password salah"
        )
    
    access_token = crud.create_access_token(data={"sub": str(user.id)})
    return {"access_token": access_token}
```

---

## 📦 Implementasi: Product Service

Contoh service yang berbeda - menggunakan **MongoDB**:

```python
# product-service/app/main.py
from fastapi import FastAPI, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel
from typing import List, Optional
from bson import ObjectId

app = FastAPI(title="Product Service")

# MongoDB connection
client = AsyncIOMotorClient("mongodb://localhost:27017")
db = client.tokoonline
products_collection = db.products


class Product(BaseModel):
    name: str
    description: str
    price: float
    stock: int
    category: str
    image_url: Optional[str] = None


class ProductResponse(Product):
    id: str


@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "product-service"}


@app.get("/products", response_model=List[ProductResponse])
async def get_products(
    skip: int = 0, 
    limit: int = 20,
    category: Optional[str] = None
):
    """Ambil daftar produk dengan filter opsional"""
    query = {}
    if category:
        query["category"] = category
    
    cursor = products_collection.find(query).skip(skip).limit(limit)
    products = []
    
    async for product in cursor:
        product["id"] = str(product["_id"])
        del product["_id"]
        products.append(ProductResponse(**product))
    
    return products


@app.get("/products/{product_id}", response_model=ProductResponse)
async def get_product(product_id: str):
    """Ambil detail produk"""
    product = await products_collection.find_one({"_id": ObjectId(product_id)})
    if not product:
        raise HTTPException(status_code=404, detail="Produk tidak ditemukan")
    
    product["id"] = str(product["_id"])
    del product["_id"]
    return ProductResponse(**product)


@app.post("/products", response_model=ProductResponse, status_code=201)
async def create_product(product: Product):
    """Buat produk baru"""
    result = await products_collection.insert_one(product.dict())
    
    created = await products_collection.find_one({"_id": result.inserted_id})
    created["id"] = str(created["_id"])
    del created["_id"]
    
    return ProductResponse(**created)


@app.put("/products/{product_id}/stock")
async def update_stock(product_id: str, quantity: int):
    """Update stok produk (dipanggil oleh Order Service)"""
    result = await products_collection.update_one(
        {"_id": ObjectId(product_id)},
        {"$inc": {"stock": quantity}}
    )
    
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Produk tidak ditemukan")
    
    return {"message": "Stok berhasil diupdate"}
```

---

## 🔗 Komunikasi Antar Service

### 1. Synchronous (HTTP Request)

Order Service perlu data user? Ia akan "menelpon" User Service:

```python
# order-service/app/services/user_client.py
import httpx
from typing import Optional
from ..config import settings

class UserServiceClient:
    """Client untuk komunikasi dengan User Service"""
    
    def __init__(self):
        self.base_url = settings.USER_SERVICE_URL  # http://user-service:8001
    
    async def get_user(self, user_id: int) -> Optional[dict]:
        """Ambil data user dari User Service"""
        async with httpx.AsyncClient() as client:
            try:
                response = await client.get(
                    f"{self.base_url}/users/{user_id}",
                    timeout=5.0  # Timeout 5 detik
                )
                response.raise_for_status()
                return response.json()
            except httpx.RequestError as e:
                # Log error dan return None (graceful degradation)
                print(f"Error calling User Service: {e}")
                return None
    
    async def verify_token(self, token: str) -> Optional[dict]:
        """Verifikasi JWT token"""
        async with httpx.AsyncClient() as client:
            try:
                response = await client.post(
                    f"{self.base_url}/users/verify",
                    headers={"Authorization": f"Bearer {token}"}
                )
                response.raise_for_status()
                return response.json()
            except httpx.HTTPStatusError:
                return None


# Penggunaan di Order Service
user_client = UserServiceClient()

@app.post("/orders")
async def create_order(order: OrderCreate, token: str = Depends(oauth2_scheme)):
    # Verifikasi user
    user = await user_client.verify_token(token)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid token")
    
    # Proses order...
```

### 2. Asynchronous (Message Queue)

Untuk operasi yang tidak perlu response langsung (seperti kirim email), gunakan **Message Queue**:

```python
# notification-service/app/main.py
import pika
import json
from fastapi import FastAPI, BackgroundTasks

app = FastAPI(title="Notification Service")

# RabbitMQ connection
connection = pika.BlockingConnection(
    pika.ConnectionParameters('rabbitmq')
)
channel = connection.channel()
channel.queue_declare(queue='notifications', durable=True)


def send_email(to: str, subject: str, body: str):
    """Fungsi untuk kirim email (bisa pakai SendGrid, Mailgun, dll)"""
    print(f"Sending email to {to}: {subject}")
    # Implementasi kirim email sebenarnya
    pass


def callback(ch, method, properties, body):
    """Callback saat ada message baru di queue"""
    message = json.loads(body)
    
    if message["type"] == "welcome_email":
        send_email(
            to=message["email"],
            subject="Selamat Datang di Toko Online!",
            body=f"Halo {message['name']}, terima kasih telah bergabung!"
        )
    elif message["type"] == "order_confirmation":
        send_email(
            to=message["email"],
            subject=f"Konfirmasi Order #{message['order_id']}",
            body=f"Order Anda sedang diproses. Total: Rp {message['total']:,}"
        )
    
    ch.basic_ack(delivery_tag=method.delivery_tag)


# Start consuming messages
channel.basic_consume(queue='notifications', on_message_callback=callback)


@app.on_event("startup")
async def startup():
    import threading
    thread = threading.Thread(target=channel.start_consuming)
    thread.daemon = True
    thread.start()
```

```python
# user-service: Kirim message ke queue setelah registrasi
import pika
import json

def publish_notification(message: dict):
    """Publish message ke RabbitMQ"""
    connection = pika.BlockingConnection(
        pika.ConnectionParameters('rabbitmq')
    )
    channel = connection.channel()
    
    channel.basic_publish(
        exchange='',
        routing_key='notifications',
        body=json.dumps(message),
        properties=pika.BasicProperties(delivery_mode=2)  # Persistent
    )
    
    connection.close()


# Di endpoint register
@router.post("/register")
async def register_user(user: UserCreate, db: Session = Depends(get_db)):
    new_user = crud.create_user(db, user)
    
    # Kirim welcome email via message queue (async)
    publish_notification({
        "type": "welcome_email",
        "email": new_user.email,
        "name": new_user.full_name
    })
    
    return new_user
```

---

## 🐳 Multi-Service dengan Docker Compose

Jalankan semua service sekaligus:

```yaml
# docker-compose.yml
version: '3.8'

services:
  # API Gateway
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - user-service
      - product-service
      - order-service

  # User Service
  user-service:
    build: ./user-service
    ports:
      - "8001:8000"
    environment:
      - DATABASE_URL=postgresql://user:password@postgres-user:5432/userdb
      - JWT_SECRET=your-secret-key
    depends_on:
      - postgres-user
      - rabbitmq

  # Product Service
  product-service:
    build: ./product-service
    ports:
      - "8002:8000"
    environment:
      - MONGODB_URL=mongodb://mongodb:27017/products
    depends_on:
      - mongodb

  # Order Service
  order-service:
    build: ./order-service
    ports:
      - "8003:8000"
    environment:
      - DATABASE_URL=postgresql://user:password@postgres-order:5432/orderdb
      - USER_SERVICE_URL=http://user-service:8000
      - PRODUCT_SERVICE_URL=http://product-service:8000
    depends_on:
      - postgres-order
      - rabbitmq

  # Notification Service
  notification-service:
    build: ./notification-service
    environment:
      - RABBITMQ_URL=amqp://rabbitmq:5672
    depends_on:
      - rabbitmq

  # Databases
  postgres-user:
    image: postgres:15
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=userdb
    volumes:
      - postgres-user-data:/var/lib/postgresql/data

  postgres-order:
    image: postgres:15
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=orderdb
    volumes:
      - postgres-order-data:/var/lib/postgresql/data

  mongodb:
    image: mongo:6
    volumes:
      - mongodb-data:/data/db

  # Message Queue
  rabbitmq:
    image: rabbitmq:3-management
    ports:
      - "15672:15672"  # Management UI
    environment:
      - RABBITMQ_DEFAULT_USER=admin
      - RABBITMQ_DEFAULT_PASS=admin

volumes:
  postgres-user-data:
  postgres-order-data:
  mongodb-data:
```

Jalankan dengan:

```bash
docker-compose up -d
```

---

## 🌐 API Gateway dengan Nginx

```bash
# nginx.conf
events {
    worker_connections 1024;
}

http {
    upstream user_service {
        server user-service:8000;
    }
    
    upstream product_service {
        server product-service:8000;
    }
    
    upstream order_service {
        server order-service:8000;
    }

    server {
        listen 80;
        
        # User Service
        location /api/users {
            proxy_pass http://user_service/users;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
        }
        
        # Product Service
        location /api/products {
            proxy_pass http://product_service/products;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
        }
        
        # Order Service
        location /api/orders {
            proxy_pass http://order_service/orders;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
        }
        
        # Health checks
        location /health/user {
            proxy_pass http://user_service/health;
        }
        
        location /health/product {
            proxy_pass http://product_service/health;
        }
        
        location /health/order {
            proxy_pass http://order_service/health;
        }
    }

---

## ⚠️ Tantangan Microservices

> *"With great power comes great responsibility."*

| Challenge | Solusi |
|-----------|--------|
| **Distributed Tracing** | Jaeger, Zipkin, atau OpenTelemetry |
| **Logging Terpusat** | ELK Stack (Elasticsearch, Logstash, Kibana) |
| **Service Discovery** | Consul, Eureka, atau Kubernetes DNS |
| **Circuit Breaker** | Library seperti `tenacity` atau `pybreaker` |
| **Data Consistency** | Saga Pattern, Event Sourcing |
| **API Versioning** | URL versioning (`/v1/users`) atau header |

### Contoh Circuit Breaker

```python
from tenacity import retry, stop_after_attempt, wait_exponential

@retry(
    stop=stop_after_attempt(3),
    wait=wait_exponential(multiplier=1, min=4, max=10)
)
async def call_user_service(user_id: int):
    """Retry otomatis jika User Service error"""
    async with httpx.AsyncClient() as client:
        response = await client.get(f"http://user-service:8000/users/{user_id}")
        response.raise_for_status()
        return response.json()
```

---

## 📊 Monitoring dengan Prometheus & Grafana

Tambahkan metrics endpoint di setiap service:

```python
# app/main.py
from prometheus_fastapi_instrumentator import Instrumentator

app = FastAPI(title="User Service")

# Auto-instrument dengan Prometheus metrics
Instrumentator().instrument(app).expose(app)
```

---

## 📚 Kesimpulan

Microservices adalah arsitektur pilihan untuk **sistem skala besar** seperti Netflix, Uber, atau Tokopedia. Namun untuk **startup tahap awal**, Monolith seringkali lebih efisien.

### Kapan Harus Pakai Microservices?

✅ **Gunakan Microservices jika:**
- Tim development > 10 orang
- Butuh scale bagian tertentu saja
- Services perlu teknologi berbeda
- Downtime satu fitur tidak boleh mempengaruhi fitur lain

❌ **Tetap Pakai Monolith jika:**
- Tim kecil (< 5 developer)
- Produk masih MVP/eksperimen
- Tidak ada kebutuhan scale berbeda
- Ingin development lebih cepat

### Tips Migrasi

1. **Mulai dengan Monolith** — kemudian pecah sesuai kebutuhan
2. **Strangler Fig Pattern** — migrasi bertahap, bukan big bang
3. **Start with Database per Service** — ini yang paling penting
4. **Invest in DevOps** — CI/CD, monitoring, logging harus matang dulu

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/microservices-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/fullstack-django-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Fullstack Web App</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/deploying-docker-kubernetes-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Deploying Apps</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
