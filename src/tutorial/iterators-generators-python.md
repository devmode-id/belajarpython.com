---
layout: tutorial.njk
title: Iterators & Generators Python
order: 30
permalink: /tutorial/iterators-generators-python/
---

<img src="/img/tutorial/30-belajar-iterators-generators-python.webp" alt="Belajar Iterators Generators Python" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

Dalam dunia Python, Iterators dan Generators adalah kunci efisiensi memori. Mereka memungkinkan Anda untuk memproses data dalam jumlah besar (bahkan tak terbatas) tanpa harus memuat semuanya ke dalam RAM sekaligus.

Bayangkan Anda ingin membaca buku tebal. Iterator memungkinkan Anda membaca halaman per halaman (hanya memuat satu halaman ke memori), alih-alih mencoba menghafal buku setebal 1000 halaman sekaligus.

### 1. Iterators

Iterator adalah objek yang mengandung jumlah nilai yang dapat dihitung. Iterator dapat diiterasi, yang berarti Anda dapat melintasi semua nilai.

Secara teknis, di Python, iterator adalah objek yang mengimplementasikan protokol iterator, yang terdiri dari metode `__iter__()` dan `__next__()`.

#### Contoh Membuat Iterator
Mari kita buat iterator sederhana yang mengembalikan angka dari 1 sampai batas tertentu.

```python
class AngkaSaya:
    def __init__(self, batas):
        self.batas = batas
        self.angka = 1

    def __iter__(self):
        return self

    def __next__(self):
        if self.angka <= self.batas:
            x = self.angka
            self.angka += 1
            return x
        else:
            raise StopIteration

kelaskuu = AngkaSaya(3)
iteratorku = iter(kelaskuu)

print(next(iteratorku)) # Output: 1
print(next(iteratorku)) # Output: 2
print(next(iteratorku)) # Output: 3
# print(next(iteratorku)) # Akan error StopIteration
```

Saat Anda menggunakan loop `for`, Python secara otomatis menangani `__iter__()` dan exception `StopIteration`.

```python
for x in AngkaSaya(3):
    print(x)
```

### 2. Generators

Generator adalah cara sederhana untuk membuat iterator. Alih-alih menulis class yang panjang dengan `__iter__()` dan `__next__()`, Anda cukup mendefinisikan fungsi biasa dan menggunakan kata kunci `yield` di mana Anda ingin mengembalikan data.

Setiap kali `yield` dipanggil, fungsi akan "berhenti sementara" (pause), menyimpan semua variabelnya, dan melanjutkan dari titik tersebut saat dipanggil lagi.

#### Contoh Generator Sederhana
```python
def generator_angka(batas):
    angka = 1
    while angka <= batas:
        yield angka
        angka += 1

gen = generator_angka(3)
# Generator juga adalah iterator!
print(next(gen)) # 1
print(next(gen)) # 2
print(next(gen)) # 3
```

#### Keunggulan Generator: Efisiensi Memori
Bayangkan Anda perlu memproses 1 juta angka.

**Menggunakan List (Memakan Memori):**
```python
def ambil_list():
    hasil = []
    for i in range(1000000):
        hasil.append(i)
    return hasil

# Ini akan memakan memori sekitar 40MB+ untuk list integer
```

**Menggunakan Generator (Hemat Memori):**
```python
def ambil_generator():
    for i in range(1000000):
        yield i

# Ini hampir tidak memakan memori tambahan, karena angka dihasilkan satu per satu saat diminta.
```

### 3. Generator Expression

Mirip dengan *List Comprehension*, tetapi menggunakan tanda kurung biasa `()`. Ini menghasilkan generator object, bukan list.

```python
# List Comprehension (Membuat list penuh di memori)
kuadrat_list = [x**2 for x in range(10)]
print(kuadrat_list) # [0, 1, 4, ..., 81]

# Generator Expression (Lazy evaluation)
kuadrat_gen = (x**2 for x in range(10))
print(kuadrat_gen) # <generator object ...>

# Untuk melihat isinya, harus diiterasi
for i in kuadrat_gen:
    print(i, end=" ")
```

### 4. Studi Kasus: Membaca File Besar
Jika Anda harus memproses file log server berukuran 10GB.

**Salah (Jangan lakukan ini):**
```python
def baca_file_salah(nama_file):
    file = open(nama_file)
    isi = file.read() # BAHAYA! Akan memuat seluruh 10GB ke RAM.
    return isi.split("\n")
```

**Benar (Gunakan Generator):**
```python
def baca_ file_benar(nama_file):
    for baris in open(nama_file):
        yield baris

# Kita bisa loop file 10GB tanpa masalah memori
for baris in baca_file_benar("server.log"):
    if "ERROR" in baris:
        print(baris)
```

### Kesimpulan
- **Iterator**: Objek yang bisa diiterasi (`__next__`).
- **Generator**: Fungsi yang menghasilkan (`yield`) nilai satu per satu (lazy evaluation).
- Gunakan Generator saat bekerja dengan dataset besar atau stream data tak terbatas.

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/iterators-generators-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/decorator-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Decorators & Closures</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/context-managers-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Context Managers</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
