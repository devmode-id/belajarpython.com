---
layout: tutorial.njk
title: Memory Management Python
order: 37
permalink: /tutorial/memory-management-python/
---

<img src="/img/tutorial/37-memory-handling-python.webp" alt="Tutorial Memory Management Python - Heap Stack dan Garbage Collection" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

Salah satu alasan Python begitu populer adalah karena pengembang tidak perlu memusingkan manajemen memori secara manual seperti di C atau C++. Python menangani alokasi dan dealokasi memori secara otomatis.

Namun, memahami bagaimana Python mengelola memori di balik layar sangat penting untuk menulis kode yang efisien, terutama saat menangani data dalam jumlah besar.

### 1. Heap dan Stack

Python menggunakan dua jenis memori:
- **Stack Memory**: Digunakan untuk eksekusi fungsi statis dan variabel lokal.
- **Heap Memory**: Semua objek dan instance Python (seperti integer, list, class) disimpan di sini. Ini bersifat privat dan dikelola oleh Python Memory Manager.

### 2. Reference Counting

Strategi utama Python dalam manajemen memori adalah **Reference Counting**.

Setiap objek di Python memiliki "penghitung referensi" (reference counts). Angka ini menunjukkan berapa banyak variabel yang merujuk ke objek tersebut.

- Saat objek dibuat atau direferensikan (`a = objek`), count bertambah (+1).
- Saat referensi dihapus (`del a`) atau keluar dari scope, count berkurang (-1).
- Saat count mencapai 0, memori objek tersebut langsung dibebaskan.

```python
import sys

a = []
# Get ref count (biasanya lebih tinggi dari perkiraan karena argumen sys.getrefcount sendiri juga referensi sementara)
print(sys.getrefcount(a)) 

b = a
print(sys.getrefcount(a)) # Bertambah

del b
print(sys.getrefcount(a)) # Berkurang
```

### 3. Garbage Collection (GC)

Reference counting punya satu kelemahan fatal: **Circular References** (Referensi Berputar).

```python
a = []
b = []
a.append(b)
b.append(a) # Circular reference
```

Jika `a` dan `b` dihapus, reference count mereka tidak akan pernah jadi 0 karena mereka saling menunjuk. Di sinilah **Garbage Collector (GC)** berperan.

GC Python adalah mekanisme terpisah yang berjalan secara periodik untuk mendeteksi dan membersihkan "sampah" circular references ini.

Anda bisa mengontrol GC secara manual menggunakan modul `gc`:

```python
import gc

# Paksa jalankan garbage collection
gc.collect()

# Matikan garbage collection otomatis
gc.disable()
```
*Tips: Jarang sekali Anda perlu menyentuh modul `gc` kecuali untuk optimasi tingkat tinggi.*

### 4. Tips Menghemat Memori

1. **Gunakan Generator**: Seperti dibahas di tutorial sebelumnya, generator tidak memuat semua data ke RAM.
2. **Gunakan `__slots__` di Class**: Jika Anda membuat jutaan instance class kecil, `__slots__` bisa menghemat RAM secara signifikan dengan menonaktifkan `__dict__` dinamis per instance.

```python
class HematMemori:
    __slots__ = ['nama', 'umur'] # Hanya boleh punya atribut ini
    def __init__(self, nama, umur):
        self.nama = nama
        self.umur = umur
```

3. **Hati-hati dengan Global Variables**: Objek global tidak akan pernah dihapus sampai program berhenti, kecuali dihapus manual.

### Kesimpulan
- Python menggunakan **Reference Counting** sebagai metode utama.
- **Garbage Collector** bertugas membersihkan circular references.
- Anda bisa menulis kode Python yang "memory-efficient" dengan memahami cara kerjanya.

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/memory-management-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/unit-testing-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Unit Testing</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/data-analytics-pandas-numpy-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Data Analytics</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
