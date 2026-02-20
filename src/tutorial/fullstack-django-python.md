---
layout: tutorial.njk
title: Fullstack Web App dengan Django
order: 43
permalink: /tutorial/fullstack-django-python/
---

<img src="/img/tutorial/43-fullstack-django-python.png" alt="Fullstack Web App dengan Django" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

Jika Anda ingin membangun aplikasi web yang kompleks dan kaya fitur (seperti E-commerce, CMS, atau Sosial Media) dengan cepat, **Django** adalah jawabannya.

Django adalah framework **"batteries-included"**. Artinya, ia sudah menyediakan semua yang Anda butuhkan: otentikasi user, panel admin, ORM (database), form handling, dan keamanan. Anda tidak perlu merakit roda dari awal.

---

## 🏗️ Konsep MVT (Model-View-Template)

Django menggunakan pola desain **MVT** yang berbeda dari MVC tradisional:

| Komponen | Fungsi | Contoh |
|----------|--------|--------|
| **Model** | Struktur data & database | Class `Artikel`, `User`, `Product` |
| **View** | Logika bisnis & request handling | Fungsi `daftar_artikel()`, `detail_produk()` |
| **Template** | Tampilan HTML | File `.html` dengan Django Template Language |

> **Catatan:** Django sendiri yang berperan sebagai "Controller" di balik layar, menangani routing URL ke View yang tepat.

---

## ⚡ Memulai Proyek Django

### 1. Persiapan Environment

Selalu gunakan **virtual environment** untuk isolasi dependensi proyek:

```bash
# Buat folder proyek
mkdir toko_online && cd toko_online

# Buat virtual environment
python -m venv venv

# Aktivasi (Windows)
venv\Scripts\activate

# Aktivasi (Linux/Mac)
source venv/bin/activate

# Install Django
pip install django
```

### 2. Inisialisasi Proyek

```bash
# Buat proyek Django
django-admin startproject config .

# Buat aplikasi (modul)
python manage.py startapp produk
python manage.py startapp akun
```

### 3. Struktur Folder Proyek

Setelah perintah di atas, struktur folder Anda akan seperti ini:

```
toko_online/
├── config/                 # Folder konfigurasi proyek
│   ├── __init__.py
│   ├── settings.py         # Pengaturan database, apps, dll
│   ├── urls.py             # URL routing utama
│   ├── asgi.py
│   └── wsgi.py             # Entry point untuk deployment
├── produk/                 # Aplikasi produk
│   ├── migrations/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── tests.py
│   └── views.py
├── akun/                   # Aplikasi akun
├── templates/              # Folder template HTML (buat manual)
├── static/                 # CSS, JS, gambar (buat manual)
├── manage.py
└── requirements.txt
```

### 4. Daftarkan Aplikasi

Edit `config/settings.py`:

```python
# config/settings.py
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # Aplikasi custom
    'produk',
    'akun',
]

# Konfigurasi Templates
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],  # Tambahkan ini
        'APP_DIRS': True,
        # ...
    },
]

# Static files
STATIC_URL = '/static/'
STATICFILES_DIRS = [BASE_DIR / 'static']  # Folder static development
```

---

## 📦 Model (Database Layer)

Di Django, Anda mendefinisikan tabel database sebagai **class Python**. Ini disebut ORM (Object-Relational Mapping).

### Contoh Model E-commerce

```python
# produk/models.py
from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify

class Kategori(models.Model):
    nama = models.CharField(max_length=100)
    deskripsi = models.TextField(blank=True)
    
    class Meta:
        verbose_name_plural = "Kategori"
    
    def __str__(self):
        return self.nama


class Produk(models.Model):
    nama = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)
    deskripsi = models.TextField()
    harga = models.DecimalField(max_digits=12, decimal_places=0)
    stok = models.PositiveIntegerField(default=0)
    gambar = models.ImageField(upload_to='produk/', blank=True)
    kategori = models.ForeignKey(Kategori, on_delete=models.CASCADE, related_name='produk')
    dibuat = models.DateTimeField(auto_now_add=True)
    diupdate = models.DateTimeField(auto_now=True)
    aktif = models.BooleanField(default=True)
    
    class Meta:
        ordering = ['-dibuat']
        verbose_name_plural = "Produk"
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.nama)
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.nama
    
    @property
    def harga_format(self):
        return f"Rp {self.harga:,.0f}"


class Review(models.Model):
    RATING_CHOICES = [(i, str(i)) for i in range(1, 6)]
    
    produk = models.ForeignKey(Produk, on_delete=models.CASCADE, related_name='reviews')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField(choices=RATING_CHOICES)
    komentar = models.TextField()
    dibuat = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        unique_together = ['produk', 'user']  # Satu user hanya bisa review sekali per produk
    
    def __str__(self):
        return f"{self.user.username} - {self.produk.nama}"
```

### Menjalankan Migrasi

Setelah membuat/mengubah model, jalankan migrasi:

```bash
# Buat file migrasi
python manage.py makemigrations

# Terapkan ke database
python manage.py migrate

# Buat superuser untuk admin
python manage.py createsuperuser
```

---

## 🎛️ Admin Panel (Fitur Killer Django)

Hanya dengan mendaftarkan model, Django memberikan **dashboard admin yang siap pakai** untuk mengelola data (CRUD).

```python
# produk/admin.py
from django.contrib import admin
from .models import Kategori, Produk, Review

@admin.register(Kategori)
class KategoriAdmin(admin.ModelAdmin):
    list_display = ['nama', 'deskripsi']
    search_fields = ['nama']


@admin.register(Produk)
class ProdukAdmin(admin.ModelAdmin):
    list_display = ['nama', 'kategori', 'harga_format', 'stok', 'aktif', 'dibuat']
    list_filter = ['kategori', 'aktif', 'dibuat']
    search_fields = ['nama', 'deskripsi']
    prepopulated_fields = {'slug': ('nama',)}
    list_editable = ['aktif', 'stok']
    date_hierarchy = 'dibuat'
    list_per_page = 20


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ['produk', 'user', 'rating', 'dibuat']
    list_filter = ['rating', 'dibuat']
```

Buka `/admin`, login dengan superuser, dan **boom!** Anda punya CMS instan dengan fitur search, filter, dan pagination.

---

## 🛣️ URL Routing

Django menggunakan sistem routing yang jelas dan terstruktur.

### URL Utama Proyek

```python
# config/urls.py
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('produk.urls')),  # Include URL dari app produk
    path('akun/', include('akun.urls')),
]

# Serve media files saat development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```

### URL Aplikasi Produk

```python
# produk/urls.py
from django.urls import path
from . import views

app_name = 'produk'  # Namespace untuk URL

urlpatterns = [
    path('', views.home, name='home'),
    path('produk/', views.daftar_produk, name='daftar_produk'),
    path('produk/<slug:slug>/', views.detail_produk, name='detail_produk'),
    path('kategori/<int:kategori_id>/', views.produk_by_kategori, name='produk_by_kategori'),
    path('cari/', views.cari_produk, name='cari_produk'),
]
```

---

## 👁️ View (Business Logic)

View adalah tempat logika bisnis aplikasi Anda. Ada dua cara menulis View di Django: **Function-Based Views (FBV)** dan **Class-Based Views (CBV)**.

### Function-Based Views

```python
# produk/views.py
from django.shortcuts import render, get_object_or_404
from django.core.paginator import Paginator
from django.db.models import Q, Avg
from .models import Produk, Kategori

def home(request):
    """Halaman utama dengan produk unggulan"""
    produk_terbaru = Produk.objects.filter(aktif=True)[:8]
    kategori_list = Kategori.objects.all()
    
    context = {
        'produk_terbaru': produk_terbaru,
        'kategori_list': kategori_list,
    }
    return render(request, 'produk/home.html', context)


def daftar_produk(request):
    """Daftar semua produk dengan pagination"""
    produk_list = Produk.objects.filter(aktif=True)
    
    # Pagination: 12 produk per halaman
    paginator = Paginator(produk_list, 12)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    
    return render(request, 'produk/daftar_produk.html', {'page_obj': page_obj})


def detail_produk(request, slug):
    """Detail produk dengan rating dan review"""
    produk = get_object_or_404(Produk, slug=slug, aktif=True)
    reviews = produk.reviews.all()[:5]
    rating_avg = produk.reviews.aggregate(avg=Avg('rating'))['avg']
    produk_terkait = Produk.objects.filter(
        kategori=produk.kategori, aktif=True
    ).exclude(id=produk.id)[:4]
    
    context = {
        'produk': produk,
        'reviews': reviews,
        'rating_avg': rating_avg or 0,
        'produk_terkait': produk_terkait,
    }
    return render(request, 'produk/detail_produk.html', context)


def cari_produk(request):
    """Pencarian produk dengan multiple fields"""
    query = request.GET.get('q', '')
    produk_list = Produk.objects.filter(aktif=True)
    
    if query:
        produk_list = produk_list.filter(
            Q(nama__icontains=query) |
            Q(deskripsi__icontains=query) |
            Q(kategori__nama__icontains=query)
        )
    
    return render(request, 'produk/cari.html', {
        'produk_list': produk_list,
        'query': query,
    })
```

### Class-Based Views (Lebih Reusable)

```python
# produk/views.py (alternatif dengan CBV)
from django.views.generic import ListView, DetailView
from .models import Produk

class ProdukListView(ListView):
    model = Produk
    template_name = 'produk/daftar_produk.html'
    context_object_name = 'produk_list'
    paginate_by = 12
    
    def get_queryset(self):
        return Produk.objects.filter(aktif=True)


class ProdukDetailView(DetailView):
    model = Produk
    template_name = 'produk/detail_produk.html'
    context_object_name = 'produk'
    slug_url_kwarg = 'slug'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['produk_terkait'] = Produk.objects.filter(
            kategori=self.object.kategori,
            aktif=True
        ).exclude(id=self.object.id)[:4]
        return context
```

---

## 🎨 Template (HTML dengan Django Template Language)

Django Template Language (DTL) memungkinkan Anda menyisipkan logika Python ke dalam HTML.

### Base Template

{% raw %}
```html
<!-- templates/base.html -->
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{% block title %}Toko Online{% endblock %}</title>
    {% load static %}
    <link rel="stylesheet" href="{% static 'css/style.css' %}">
</head>
<body>
    <header>
        <nav>
            <a href="{% url 'produk:home' %}">Home</a>
            <a href="{% url 'produk:daftar_produk' %}">Produk</a>
            <form action="{% url 'produk:cari_produk' %}" method="get">
                <input type="text" name="q" placeholder="Cari produk...">
                <button type="submit">Cari</button>
            </form>
            {% if user.is_authenticated %}
                <a href="{% url 'akun:profil' %}">{{ user.username }}</a>
                <a href="{% url 'akun:logout' %}">Logout</a>
            {% else %}
                <a href="{% url 'akun:login' %}">Login</a>
                <a href="{% url 'akun:register' %}">Daftar</a>
            {% endif %}
        </nav>
    </header>
    
    <main>
        {% if messages %}
            {% for message in messages %}
                <div class="alert alert-{{ message.tags }}">{{ message }}</div>
            {% endfor %}
        {% endif %}
        
        {% block content %}{% endblock %}
    </main>
    
    <footer>
        <p>&copy; 2024 Toko Online. All rights reserved.</p>
    </footer>
    
    <script src="{% static 'js/main.js' %}"></script>
</body>
</html>
```
{% endraw %}

### Template Daftar Produk

{% raw %}
```html
<!-- templates/produk/daftar_produk.html -->
{% extends 'base.html' %}
{% load static %}

{% block title %}Daftar Produk - Toko Online{% endblock %}

{% block content %}
<div class="container">
    <h1>Daftar Produk</h1>
    
    <div class="produk-grid">
        {% for produk in page_obj %}
            <div class="produk-card">
                {% if produk.gambar %}
                    <img src="{{ produk.gambar.url }}" alt="{{ produk.nama }}">
                {% else %}
                    <img src="{% static 'img/no-image.png' %}" alt="No Image">
                {% endif %}
                
                <h3><a href="{% url 'produk:detail_produk' produk.slug %}">{{ produk.nama }}</a></h3>
                <p class="kategori">{{ produk.kategori.nama }}</p>
                <p class="harga">{{ produk.harga_format }}</p>
                
                {% if produk.stok > 0 %}
                    <span class="badge in-stock">Stok: {{ produk.stok }}</span>
                {% else %}
                    <span class="badge out-of-stock">Habis</span>
                {% endif %}
            </div>
        {% empty %}
            <p>Tidak ada produk yang ditemukan.</p>
        {% endfor %}
    </div>
    
    <!-- Pagination -->
    {% if page_obj.has_other_pages %}
        <nav class="pagination">
            {% if page_obj.has_previous %}
                <a href="?page=1">&laquo; Pertama</a>
                <a href="?page={{ page_obj.previous_page_number }}">Sebelumnya</a>
            {% endif %}
            
            <span>Halaman {{ page_obj.number }} dari {{ page_obj.paginator.num_pages }}</span>
            
            {% if page_obj.has_next %}
                <a href="?page={{ page_obj.next_page_number }}">Selanjutnya</a>
                <a href="?page={{ page_obj.paginator.num_pages }}">Terakhir &raquo;</a>
            {% endif %}
        </nav>
    {% endif %}
</div>
{% endblock %}
```
{% endraw %}

---

## 📝 Form Handling

Django menyediakan sistem form yang powerful untuk validasi dan keamanan (CSRF protection).

```python
# produk/forms.py
from django import forms
from .models import Review

class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ['rating', 'komentar']
        widgets = {
            'rating': forms.RadioSelect(),
            'komentar': forms.Textarea(attrs={
                'rows': 4,
                'placeholder': 'Tulis pengalaman Anda dengan produk ini...'
            }),
        }
```

```python
# produk/views.py
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .forms import ReviewForm

@login_required
def tambah_review(request, slug):
    produk = get_object_or_404(Produk, slug=slug)
    
    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            review = form.save(commit=False)
            review.produk = produk
            review.user = request.user
            review.save()
            messages.success(request, 'Review berhasil ditambahkan!')
            return redirect('produk:detail_produk', slug=slug)
    else:
        form = ReviewForm()
    
    return render(request, 'produk/tambah_review.html', {'form': form, 'produk': produk})
```

---

## 🔐 Authentication

Django menyediakan sistem autentikasi lengkap out-of-the-box.

```python
# akun/views.py
from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib import messages

def register_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, 'Registrasi berhasil!')
            return redirect('produk:home')
    else:
        form = UserCreationForm()
    return render(request, 'akun/register.html', {'form': form})


def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            next_url = request.GET.get('next', 'produk:home')
            return redirect(next_url)
    else:
        form = AuthenticationForm()
    return render(request, 'akun/login.html', {'form': form})


def logout_view(request):
    logout(request)
    messages.info(request, 'Anda telah logout.')
    return redirect('produk:home')
```

---

## 🚀 Production Ready Checklist

Sebelum deploy ke production, pastikan checklist berikut:

```python
# config/settings.py (production)

# JANGAN lupa ganti ini!
DEBUG = False
SECRET_KEY = os.environ.get('SECRET_KEY')
ALLOWED_HOSTS = ['yourdomain.com', 'www.yourdomain.com']

# Database production (contoh: PostgreSQL)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.environ.get('DB_NAME'),
        'USER': os.environ.get('DB_USER'),
        'PASSWORD': os.environ.get('DB_PASSWORD'),
        'HOST': os.environ.get('DB_HOST'),
        'PORT': '5432',
    }
}

# Security settings
SECURE_SSL_REDIRECT = True
SECURE_HSTS_SECONDS = 31536000
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
CSRF_COOKIE_SECURE = True
SESSION_COOKIE_SECURE = True

# Static files (WhiteNoise untuk serve static files)
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',  # Tambahkan ini
    # ...
]
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
```

### Install Dependensi Production

```bash
pip install gunicorn psycopg2-binary whitenoise
pip freeze > requirements.txt
```

---

## 💡 Mengapa Django?

| Aspek | Kelebihan |
|-------|-----------|
| **Keamanan** | Perlindungan otomatis dari SQL Injection, XSS, CSRF, Clickjacking |
| **Skalabilitas** | Digunakan oleh Instagram, Pinterest, Spotify, Disqus |
| **Produktivitas** | Admin panel instan, ORM lengkap, authentication siap pakai |
| **Komunitas** | 77k+ stars GitHub, ribuan packages (DRF, Wagtail, Celery) |
| **Dokumentasi** | Salah satu dokumentasi terbaik di ekosistem Python |

---

## 📚 Kesimpulan

Django adalah pilihan tepat untuk **startup dan perusahaan** yang ingin bergerak cepat ("*The web framework for perfectionists with deadlines*"). 

Meskipun kurva belajarnya lebih curam daripada Flask/FastAPI, produktivitas yang ditawarkannya **tak tertandingi** untuk membangun aplikasi kompleks seperti E-commerce, CMS, Dashboard, dan Social Media Platform.

**Tips Belajar:**
1. Mulai dengan proyek kecil (blog, todo list)
2. Pahami MVT pattern dengan baik
3. Eksplorasi Django Admin
4. Pelajari Django REST Framework untuk API
5. Praktik deployment ke Railway, Render, atau DigitalOcean

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/fullstack-django-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/restful-api-fastapi-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">RESTful APIs</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/microservices-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Microservices</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
