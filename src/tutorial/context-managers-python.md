---
layout: tutorial.njk
title: Context Managers Python
order: 31
permalink: /tutorial/context-managers-python/
---

<img src="/img/tutorial/31-context-manager-python.webp" alt="Context Manager Python" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

Context Managers adalah fitur Python yang sangat elegan untuk mengelola resource. Mereka memastikan resource (seperti file, koneksi network, atau database) dibuka dan ditutup dengan benar, bahkan jika terjadi error di tengah proses.

Pernahkah Anda lupa menutup file setelah membukanya? Di Python, hal ini bisa dihindari dengan mudah menggunakan keyword `with`.

### 1. Keyword `with`

Cara paling umum menggunakan Context Manager adalah dengan statement `with`.

**Tanpa Context Manager (Risiko Leak!):**
```python
file = open("data.txt", "w")
try:
    file.write("Halo Dunia")
finally:
    file.close() # Kita harus manual menutupnya
```

**Dengan Context Manager (Aman & Bersih):**
```python
with open("data.txt", "w") as file:
    file.write("Halo Dunia")

# File otomatis tertutup di sini, bahkan jika ada error saat penulisan.
```

### 2. Membuat Context Manager Sendiri

Anda dapat membuat Context Manager sendiri dengan membuat class yang memiliki metode `__enter__` dan `__exit__`.

`__enter__`: Dijalankan saat memasuki blok `with`. Nilai return-nya diberikan ke variabel `as ...`.
`__exit__`: Dijalankan saat keluar dari blok `with` (selesai normal atau error).

#### Contoh: Pengelola Koneksi Database (Simulasi)

```python
class KelolaDB:
    def __init__(self, nama_db):
        self.nama_db = nama_db

    def __enter__(self):
        print(f"--> Membuka koneksi ke {self.nama_db}")
        return self # Objek ini akan menjadi variabel 'db'

    def query(self, sql):
        print(f"Menjalankan query: {sql}")

    def __exit__(self, exc_type, exc_value, traceback):
        print(f"<-- Menutup koneksi ke {self.nama_db}")
        # Jika ada error, exc_type tidak None
        if exc_type:
            print(f"Error terjadi: {exc_value}")
        # Return True jika ingin menekan error (supaya program tidak crash)
        # Return False (default) jika ingin error tetap naik (raise)

# Penggunaan
with KelolaDB("users_db") as db:
    db.query("SELECT * FROM users")
    
# Output:
# --> Membuka koneksi ke users_db
# Menjalankan query: SELECT * FROM users
# <-- Menutup koneksi ke users_db
```

### 3. Menggunakan `contextlib`

Python menyediakan modul `contextlib` yang memudahkan pembuatan context manager menggunakan generator dan decorator `@contextmanager`. Ini lebih ringkas daripada membuat class.

```python
from contextlib import contextmanager

@contextmanager
def buka_file_saya(nama):
    try:
        print("Membuka file...")
        f = open(nama, "w")
        yield f
    finally:
        print("Menutup file...")
        f.close()

# Penggunaan
with buka_file_saya("test.txt") as f:
    f.write("Tes 123")
```

Kode sebelum `yield` adalah `__enter__`, dan kode di blok `finally` adalah `__exit__`.

### 4. Contoh Praktis: Mengukur Waktu Eksekusi

Kita bisa membuat context manager untuk mengukur berapa lama sebuah blok kode berjalan.

```python
import time
from contextlib import contextmanager

@contextmanager
def timer():
    start = time.time()
    yield
    end = time.time()
    print(f"Waktu eksekusi: {end - start:.4f} detik")

with timer():
    # Simulasi proses berat
    time.sleep(1)
    x = sum(range(1000000))

# Output: Waktu eksekusi: 1.0xxx detik
```

### Kesimpulan
- Gunakan `with` sebisa mungkin saat bekerja dengan file atau koneksi.
- Implementasikan `__enter__` dan `__exit__` untuk membuat resource management sendiri.
- Gunakan `@contextmanager` untuk cara yang lebih fungsional dan ringkas.

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/context-managers-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/iterators-generators-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Iterators & Generators</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/metaprogramming-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Metaprogramming</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
