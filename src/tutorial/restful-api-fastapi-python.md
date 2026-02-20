---
layout: tutorial.njk
title: Membuat RESTful APIs dengan FastAPI - Tutorial Lengkap
description: Pelajari cara membuat High-Performance API dengan Python FastAPI. Tutorial lengkap dari dasar routing, path parameter, validasi Pydantic, hingga dokumentasi otomatis.
order: 42
permalink: /tutorial/restful-api-fastapi-python/
---

<img src="/img/tutorial/42-restful-api-fastapi-python.png" alt="Membuat RESTful APIs dengan FastAPI Tutorial" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

Dalam pengembangan web modern, **API** (Application Programming Interface) adalah jembatan vital yang menghubungkan frontend (React, Vue, Mobile App) dengan backend (Server & Database).

Python memiliki banyak framework API, tetapi **FastAPI** adalah bintang yang paling bersinar saat ini. Sesuai namanya, ia **sangat cepat** (setara dengan NodeJS dan Go), modern, dan memiliki fitur dokumentasi otomatis yang luar biasa.

### Mengapa FastAPI?
*   🚀 **Performa Tinggi**: Dibangun di atas Starlette dan Pydantic.
*   ⚡ **Cepat Di-coding**: Meningkatkan kecepatan pengembangan hingga 200%-300%.
*   🐛 **Lebih Sedikit Bug**: Mengurangi sekitar 40% bug yang disebabkan oleh kesalahan manusia (developer).
*   📝 **Dokumentasi Otomatis**: Swagger UI & ReDoc langsung tersedia.

Dalam tutorial ini, kita akan:
1.  Memahami konsep RESTful API.
2.  Instalasi dan Persiapan Lingkungan.
3.  Membuat API dengan operasi **CRUD** (Create, Read, Update, Delete).
4.  Validasi data otomatis dengan Pydantic.
5.  Melihat dokumentasi API yang *auto-generated*.

---

## Apa itu RESTful API?

REST (Representational State Transfer) adalah gaya arsitektur komunikasi web. API RESTful menggunakan metode HTTP standar (Verbs) untuk berinteraksi dengan resource:

| Method HTTP | Fungsi | Analogi SQL | Deskripsi |
|-------------|--------|-------------|-----------|
| **GET** | Read | SELECT | Mengambil data dari server. |
| **POST** | Create | INSERT | Mengirim data baru ke server. |
| **PUT** | Update | UPDATE | Memperbarui data yang sudah ada (secara keseluruhan). |
| **DELETE** | Delete | DELETE | Menghapus data dari server. |

Data biasanya dikirim dan diterima dalam format **JSON** (JavaScript Object Notation), yang mudah dibaca manusia dan mesin.

---

## 1. Persiapan Lingkungan (Untuk Lokal)

Jika Anda mengikuti tutorial ini di komputer sendiri (bukan di simulator browser kami), Anda perlu menginstal FastAPI dan server ASGI:

```bash
pip install fastapi "uvicorn[standard]"
```

*   **FastAPI**: Framework untuk membangun API.
*   **Uvicorn**: Web server ASGI (Asynchronous Server Gateway Interface) untuk menjalankan FastAPI.

---

## 2. Hello World: API Pertama Anda

FastAPI sangat minimalis. Mari buat file `main.py` pertama kita.

### Kode Dasar

```python
from fastapi import FastAPI

# 1. Inisialisasi Aplikasi
app = FastAPI()

# 2. Definisi Route (Endpoint)
@app.get("/")
async def read_root():
    return {"message": "Hello World", "status": "running"}
```

### Menjalankan Server
Jalankan perintah berikut di terminal:
```bash
uvicorn main:app --reload
```
Server akan aktif di `http://127.0.0.1:8000`. Jika Anda membukanya di browser, Anda akan melihat respons JSON:
`{"message": "Hello World", "status": "running"}`

> **Catatan:** Kami menggunakan `async def` karena FastAPI mendukung *asynchronous code* secara native, yang membuatnya sangat efisien menangani banyak request sekaligus.

---

## 3. Path Parameters & Type Hints

Bagaimana jika kita ingin mengambil data spesifik, misalnya detail produk berdasarkan ID? Kita gunakan **Path Parameters**.

```python
@app.get("/items/{item_id}")
async def read_item(item_id: int):
    # Type hint 'int' otomatis memvalidasi input!
    return {"item_id": item_id, "name": f"Barang ke-{item_id}"}
```

FastAPI cerdas:
*   Jika user mengakses `/items/5`, `item_id` akan dibaca sebagai integer `5`.
*   Jika user mengakses `/items/foo`, FastAPI otomatis memberikan error validasi: `"value is not a valid integer"`. Anda tidak perlu menulis kode validasi manual!

---

## 4. Query Parameters

Query parameters adalah key-value yang ada di URL setelah tanda `?`, misalnya `?skip=0&limit=10`. Parameter fungsi yang *bukan* path parameter otomatis dianggap sebagai query parameter.

```python
@app.get("/items/")
async def read_items(skip: int = 0, limit: int = 10):
    fake_items_db = [{"item_name": "Foo"}, {"item_name": "Bar"}, {"item_name": "Baz"}]
    return fake_items_db[skip : skip + limit]
```
URL akses: `http://127.0.0.1:8000/items/?skip=1&limit=1`

---

## 5. Request Body & Pydantic (POST)

Untuk mengirim data (misalnya menambah produk baru), kita menggunakan method **POST**. Kita butuh validasi agar data yang dikirim user sesuai format. Di sinilah **Pydantic** bersinar.

```python
from pydantic import BaseModel
from typing import Optional

# Definisi Model Data (Schema)
class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None

@app.post("/items/")
async def create_item(item: Item):
    item_dict = item.dict()
    if item.tax:
        price_with_tax = item.price + item.tax
        item_dict.update({"price_with_tax": price_with_tax})
    return item_dict
```

FastAPI akan:
1.  Membaca body request sebagai JSON.
2.  Mengonversi tipe data (misal string "10.5" ke float 10.5).
3.  Memvalidasi data (apakah field wajib ada?).
4.  Memberikan error detail jika validasi gagal.

---

## 6. Update (PUT) & Delete (DELETE)

Melengkapi operasi CRUD, berikut cara update dan delete:

```python
# Update data
@app.put("/items/{item_id}")
async def update_item(item_id: int, item: Item):
    return {"item_id": item_id, "updated_data": item}

# Delete data
@app.delete("/items/{item_id}")
async def delete_item(item_id: int):
    return {"status": "deleted", "item_id": item_id}
```

---

## 7. Dokumentasi Otomatis (Swagger UI)

Salah satu fitur terbaik FastAPI adalah dokumentasi yang dibuat otomatis. Tanpa perlu plugin tambahan, cukup buka:

*   **Swagger UI**: `http://127.0.0.1:8000/docs` - UI interaktif untuk mencoba API Anda.
*   **ReDoc**: `http://127.0.0.1:8000/redoc` - Dokumentasi statis yang cantik.

Ini sangat membantu komunikasi antara Backend dan Frontend developer.

---

## Struktur Project Besar

Untuk project serius, kode tidak boleh ditumpuk di satu file `main.py` saja. Kita harus memecahnya menggunakan **APIRouter** agar lebih modular dan mudah dikelola.

### Contoh Struktur Folder
```text
my-project/
├── main.py          # Entry point aplikasi
└── routers/         # Folder untuk menyimpan route
    ├── __init__.py
    ├── items.py     # Endpoint khusus barang
    └── users.py     # Endpoint khusus user
```

### 1. File `routers/items.py`
Buat file untuk menangani logika items:
```python
from fastapi import APIRouter

router = APIRouter()

@router.get("/items/")
async def read_items():
    return [{"name": "Item A"}, {"name": "Item B"}]
```

### 2. File `main.py`
Panggil router tersebut di aplikasi utama:
```python
from fastapi import FastAPI
from routers import items

app = FastAPI()

app.include_router(items.router)

@app.get("/")
async def root():
    return {"message": "Aplikasi Berjalan"}
```

Dengan cara ini, aplikasi Anda bisa tumbuh besar tanpa menjadi "spaghetti code"!

---

## Kesimpulan

FastAPI adalah revolusi di dunia Python backend. Ia menggabungkan kecepatan eksekusi (async), kecepatan coding (type hints + autocompletion), dan fitur modern (OpenAPI standard).

**Kelebihan utama:**
- 🚀 **Performa Tinggi**: Berbasis Starlette dan Pydantic.
- 📝 **Dokumentasi Otomatis**: Swagger UI & ReDoc langsung tersedia.
- 🛡️ **Tipe Data Aman**: Bug berkurang drastis berkat Type Hints.

Siap membangun API Anda sendiri? Mulai dengan project kecil, dan rasakan nikmatnya menggunakan FastAPI!

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/restful-api-fastapi-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/cybersecurity-ethical-hacking-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Cybersecurity</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/fullstack-django-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Fullstack App</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
