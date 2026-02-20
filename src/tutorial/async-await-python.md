---
layout: tutorial.njk
title: Async Await Python
order: 34
permalink: /tutorial/async-await-python/
---

<img src="/img/tutorial/34-async-await-python-tutorial.webp" alt="Tutorial Async Await Python - Asynchronous Programming asyncio" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

Asynchronous programming dengan `async/await` adalah paradigma pemrograman yang memungkinkan Anda menjalankan operasi secara non-blocking. Ini sangat berguna untuk aplikasi yang melakukan banyak operasi I/O seperti request HTTP, akses database, atau pembacaan file.

### Mengapa Asynchronous?

Dalam pemrograman synchronous tradisional:

```python
# Synchronous - menunggu satu per satu
hasil1 = ambil_data_dari_api()      # Tunggu 2 detik
hasil2 = ambil_data_dari_database() # Tunggu 2 detik
hasil3 = baca_file_besar()          # Tunggu 2 detik
# Total: 6 detik
```

Dengan asynchronous:

```python
# Asynchronous - berjalan bersamaan
hasil1, hasil2, hasil3 = await asyncio.gather(
    ambil_data_dari_api(),
    ambil_data_dari_database(),
    baca_file_besar()
)
# Total: ~2 detik (paralel)
```

### Konsep Dasar

#### Coroutine

Fungsi yang didefinisikan dengan `async def` disebut coroutine:

```python
import asyncio

# Ini adalah coroutine
async def salam():
    print("Halo!")
    return "Selesai"

# Menjalankan coroutine
asyncio.run(salam())
```

#### await

`await` digunakan untuk menunggu hasil dari coroutine atau operasi async:

```python
import asyncio

async def proses_lama():
    print("Mulai proses...")
    await asyncio.sleep(2)  # Simulasi operasi async
    print("Proses selesai!")
    return "Hasil"

async def main():
    hasil = await proses_lama()
    print(f"Mendapat: {hasil}")

asyncio.run(main())
```

### Menjalankan Coroutine

Ada beberapa cara menjalankan coroutine:

```python
import asyncio

async def hello():
    await asyncio.sleep(1)
    return "Hello!"

# Cara 1: asyncio.run() - untuk script standalone
if __name__ == "__main__":
    hasil = asyncio.run(hello())
    print(hasil)

# Cara 2: await - dari dalam coroutine lain
async def main():
    hasil = await hello()
    print(hasil)
```

### Menjalankan Tasks Secara Bersamaan

#### asyncio.gather()

Menjalankan beberapa coroutine secara bersamaan:

```python
import asyncio

async def download_file(nama: str, durasi: int) -> str:
    print(f"Mulai download {nama}...")
    await asyncio.sleep(durasi)
    print(f"Selesai download {nama}")
    return f"{nama} downloaded"

async def main():
    # Jalankan semua secara bersamaan
    hasil = await asyncio.gather(
        download_file("file1.txt", 2),
        download_file("file2.txt", 3),
        download_file("file3.txt", 1),
    )
    print(f"Semua hasil: {hasil}")

asyncio.run(main())
# Output:
# Mulai download file1.txt...
# Mulai download file2.txt...
# Mulai download file3.txt...
# Selesai download file3.txt (setelah 1 detik)
# Selesai download file1.txt (setelah 2 detik)
# Selesai download file2.txt (setelah 3 detik)
# Total waktu: ~3 detik (bukan 6 detik)
```

Perhatikan urutan outputnya! Meskipun kita memulai download `file1` (2 detik) dan `file2` (3 detik) terlebih dahulu, `file3` (1 detik) selesai paling awal. Ini membuktikan bahwa ketiga tugas tersebut benar-benar berjalan secara bersamaan (tidak saling menunggu). Jika ini dijalankan secara synchronous, total waktu akan menjadi 2+3+1 = 6 detik.

#### asyncio.create_task()

Membuat task yang berjalan di background:

```python
import asyncio

async def background_task():
    while True:
        print("Background task berjalan...")
        await asyncio.sleep(1)

async def main():
    # Buat task (tidak langsung dijalankan)
    task = asyncio.create_task(background_task())
    
    # Lakukan hal lain
    await asyncio.sleep(3)
    
    # Cancel task
    task.cancel()
    print("Task dibatalkan")

asyncio.run(main())
```

Dalam contoh di atas, fungsi `background_task` berjalan di latar belakang tanpa menghentikan eksekusi kode utama. Kita menggunakan `create_task` untuk menjadwalkannya, lalu `sleep(3)` di `main` memberikan waktu bagi task tersebut untuk berjalan beberapa kali sebelum akhirnya kita batalkan (cancel).

### Async Context Manager

Untuk resource management dengan async:

```python
import asyncio

class AsyncDatabaseConnection:
    async def __aenter__(self):
        print("Membuka koneksi database...")
        await asyncio.sleep(1)
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        print("Menutup koneksi database...")
        await asyncio.sleep(0.5)
    
    async def query(self, sql: str) -> list:
        await asyncio.sleep(0.5)
        return ["hasil1", "hasil2"]

async def main():
    async with AsyncDatabaseConnection() as db:
        hasil = await db.query("SELECT * FROM users")
        print(f"Query result: {hasil}")

asyncio.run(main())
```

Kode di atas mendemonstrasikan cara membuat objek yang bisa digunakan dengan `async with`. Metode `__aenter__` dipanggil saat masuk blok, dan `__aexit__` saat keluar. Ini sangat berguna untuk mengelola koneksi database atau sesi jaringan yang memerlukan proses *setup* dan *teardown* secara asynchronous.

### Async Iterator

Untuk iterasi async:

```python
import asyncio

class AsyncCounter:
    def __init__(self, max_count: int):
        self.max_count = max_count
        self.current = 0
    
    def __aiter__(self):
        return self
    
    async def __anext__(self):
        if self.current >= self.max_count:
            raise StopAsyncIteration
        await asyncio.sleep(0.5)
        self.current += 1
        return self.current

async def main():
    async for num in AsyncCounter(5):
        print(f"Count: {num}")

asyncio.run(main())
```

### Async Generator

```python
import asyncio

async def async_range(start: int, stop: int):
    for i in range(start, stop):
        await asyncio.sleep(0.5)
        yield i

async def main():
    async for num in async_range(1, 5):
        print(num)

asyncio.run(main())
```

### Contoh Praktis: Async HTTP Requests

Menggunakan library `aiohttp` untuk HTTP requests async:

```python
import asyncio
import aiohttp

async def fetch_url(session: aiohttp.ClientSession, url: str) -> dict:
    async with session.get(url) as response:
        return await response.json()

async def main():
    urls = [
        "https://api.github.com/users/python",
        "https://api.github.com/users/django",
        "https://api.github.com/users/fastapi",
    ]
    
    async with aiohttp.ClientSession() as session:
        # Fetch semua URL secara bersamaan
        tasks = [fetch_url(session, url) for url in urls]
        results = await asyncio.gather(*tasks)
        
        for result in results:
            print(f"User: {result.get('login')}")

# Install dulu: pip install aiohttp
asyncio.run(main())
```

Di sini kita menggunakan `aiohttp` (karena `requests` biasa tidak support async). Kita membuat satu `ClientSession` untuk efisiensi, lalu membuat daftar tugas (`tasks`) untuk setiap URL. `asyncio.gather(*tasks)` kemudian mengeksekusi semua request tersebut sekaligus. Bayangkan jika Anda harus mengambil data dari 100 URL; cara ini akan jauh lebih cepat daripada mengambilnya satu per satu.

### Timeout dan Error Handling

```python
import asyncio

async def operasi_lama():
    await asyncio.sleep(10)
    return "Selesai"

async def main():
    try:
        # Set timeout 2 detik
        hasil = await asyncio.wait_for(operasi_lama(), timeout=2.0)
        print(hasil)
    except asyncio.TimeoutError:
        print("Operasi timeout!")

asyncio.run(main())
```

### Semaphore untuk Rate Limiting

Membatasi jumlah operasi bersamaan:

```python
import asyncio

async def download(semaphore: asyncio.Semaphore, url: str):
    async with semaphore:  # Hanya N request bersamaan
        print(f"Downloading {url}...")
        await asyncio.sleep(2)
        print(f"Finished {url}")
        return url

async def main():
    # Maksimal 3 download bersamaan
    semaphore = asyncio.Semaphore(3)
    
    urls = [f"file_{i}.txt" for i in range(10)]
    tasks = [download(semaphore, url) for url in urls]
    
    await asyncio.gather(*tasks)

asyncio.run(main())
```

Semaphore bertindak seperti penjaga pintu. Di contoh ini, kita punya 10 file yang ingin didownload, tapi `semaphore(3)` hanya mengizinkan 3 download berjalan bersamaan. Segera setelah satu selesai, yang lain baru boleh masuk. Ini sangat penting agar server tujuan tidak memblokir IP kita karena terlalu banyak request dalam satu waktu.

### Best Practices

1. **Gunakan async untuk I/O bound operations** - HTTP requests, database, file I/O
2. **Jangan gunakan untuk CPU bound** - Gunakan multiprocessing untuk kalkulasi berat
3. **Selalu await coroutine** - Jangan lupa await, atau coroutine tidak akan berjalan
4. **Gunakan asyncio.gather() untuk paralel** - Lebih efisien dari await berturut-turut
5. **Handle exceptions dengan baik** - Gunakan try/except dalam coroutine

```python
# ❌ Salah - Sequential
async def main():
    a = await task_a()  # Tunggu
    b = await task_b()  # Tunggu
    c = await task_c()  # Tunggu

# ✅ Benar - Parallel
async def main():
    a, b, c = await asyncio.gather(
        task_a(),
        task_b(),
        task_c()
    )
```

### Kapan Menggunakan Async?

✅ **Gunakan async ketika:**
- Banyak I/O operations (HTTP, database, files)
- Web servers (FastAPI, aiohttp)
- Web scraping banyak halaman
- Chat applications
- Real-time data processing

❌ **Jangan gunakan async ketika:**
- CPU intensive tasks (gunakan multiprocessing)
- Operasi sederhana tanpa I/O wait
- Script kecil yang tidak perlu concurrency

---

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/async-await-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/multithreading-multiprocessing-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Multithreading</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/design-patterns-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Design Patterns</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
