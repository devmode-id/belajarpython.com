---
layout: tutorial.njk
title: Multithreading & Multiprocessing Python
order: 33
permalink: /tutorial/multithreading-multiprocessing-python/
---

<img src="/img/tutorial/33-multithreading.webp" alt="Tutorial Multithreading vs Multiprocessing Python - Parallelism dan Concurrency" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

Dalam komputasi modern, kita sering mendengar istilah *parallelism* dan *concurrency*. Di Python, ada dua cara utama untuk melakukan banyak hal "sekaligus": **Multithreading** dan **Multiprocessing**.

Pemilihan antara keduanya sangat bergantung pada jenis tugas yang Anda kerjakan: apakah **I/O Bound** atau **CPU Bound**.

### 1. I/O Bound vs CPU Bound

- **I/O Bound**: Program menghabiskan sebagian besar waktunya menunggu input/output (misalnya: request jaringan, membaca file disk, query database). CPU sering menganggur.
- **CPU Bound**: Program menghabiskan waktunya untuk melakukan perhitungan matematika atau pemrosesan data yang berat. CPU bekerja 100%.

### 2. Multithreading (Untuk I/O Bound)

Threading menggunakan thread di dalam satu proses yang sama. Thread berbagi memori yang sama.

Namun, Python (CPython) memiliki **GIL (Global Interpreter Lock)**, yang mencegah dua thread Python mengeksekusi bytecode secara bersamaan di satu core CPU. Jadi, Multithreading di Python **tidak** membuat kode CPU-bound lebih cepat (malah bisa lebih lambat karena overhead).

Tapi, Multithreading **sangat cepat** untuk I/O Bound karena saat satu thread menunggu (misal nunggu respons web), thread lain bisa berjalan.

```python
import threading
import time

def unduh_halaman(url):
    print(f"Mulai mengunduh {url}...")
    time.sleep(2) # Simulasi delay jaringan
    print(f"Selesai mengunduh {url}")

start = time.time()

threads = []
urls = ["web1", "web2", "web3"]

for url in urls:
    t = threading.Thread(target=unduh_halaman, args=(url,))
    threads.append(t)
    t.start()

# Tunggu semua thread selesai
for t in threads:
    t.join()

end = time.time()
print(f"Total waktu: {end - start:.2f} detik")
# Output sekitar 2 detik, bukan 6 detik!
```

### 3. Multiprocessing (Untuk CPU Bound)

Multiprocessing membuat proses Python baru yang terpisah. Setiap proses memiliki Python interpreter dan ruang memorinya sendiri. Ini membypasses GIL, sehingga bisa menggunakan multi-core CPU secara maksimal.

Gunakan ini untuk tugas komputasi berat.

```python
import multiprocessing
import time

def hitung_kuadrat_berat(angka):
    print(f"Proses {angka} mulai...")
    hasil = sum(i * i for i in range(10**7)) # Perhitungan berat
    print(f"Proses {angka} selesai.")
    return hasil

if __name__ == "__main__":
    start = time.time()
    
    # Membuat 2 proses berjalan paralel di core CPU berbeda
    p1 = multiprocessing.Process(target=hitung_kuadrat_berat, args=(1,))
    p2 = multiprocessing.Process(target=hitung_kuadrat_berat, args=(2,))
    
    p1.start()
    p2.start()
    
    p1.join()
    p2.join()
    
    end = time.time()
    print(f"Total waktu: {end - start:.2f} detik")
```

*Catatan: Anda harus melindungi kode utama dengan `if __name__ == "__main__":` saat menggunakan multiprocessing di Windows.*

### 4. Concurrent Futures (Cara Modern)

Python menyediakan modul `concurrent.futures` yang memberikan interface lebih tinggi dan mudah untuk Threading dan Multiprocessing.

```python
from concurrent.futures import ThreadPoolExecutor
import time

def tugas(n):
    time.sleep(1)
    return f"Tugas {n} selesai"

start = time.time()

with ThreadPoolExecutor(max_workers=3) as executor:
    results = executor.map(tugas, [1, 2, 3])
    
    for result in results:
        print(result)

print(f"Waktu: {time.time() - start:.2f} detik")
```
Ganti `ThreadPoolExecutor` dengan `ProcessPoolExecutor` jika ingin beralih ke multiprocessing.

### Kesimpulan

| Fitur | Multithreading | Multiprocessing |
| :--- | :--- | :--- |
| **Memori** | Berbagi memori (Shared) | Memori terpisah (Isolated) |
| **Overhead** | Rendah | Tinggi (butuh waktu start) |
| **Cocok untuk** | I/O Bound (Network, File) | CPU Bound (Math, Data Processing) |
| **GIL** | Terkena dampak GIL | Bebas dari GIL |

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/multithreading-multiprocessing-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/metaprogramming-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Metaprogramming</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/async-await-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Async Await</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
