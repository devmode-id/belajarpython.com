---
layout: tutorial.njk
title: List Comprehension Python
order: 27
permalink: /tutorial/list-comprehension-python/
---

List Comprehension adalah cara singkat dan elegan untuk membuat list baru berdasarkan list yang sudah ada. Ini adalah salah satu fitur paling pythonic yang membuat kode lebih bersih dan mudah dibaca.

### Sintaks Dasar

```python
# Sintaks: [ekspresi for item in iterable]

# Cara biasa dengan loop
angka_kuadrat = []
for x in range(5):
    angka_kuadrat.append(x ** 2)
print(angka_kuadrat)  # [0, 1, 4, 9, 16]

# Dengan list comprehension (lebih singkat!)
angka_kuadrat = [x ** 2 for x in range(5)]
print(angka_kuadrat)  # [0, 1, 4, 9, 16]
```

### Dengan Kondisi (if)

Anda bisa menambahkan kondisi untuk memfilter elemen:

```python
# Sintaks: [ekspresi for item in iterable if kondisi]

# Hanya angka genap
angka_genap = [x for x in range(10) if x % 2 == 0]
print(angka_genap)  # [0, 2, 4, 6, 8]

# Hanya angka positif dari sebuah list
data = [-5, 3, -2, 8, -1, 7]
positif = [x for x in data if x > 0]
print(positif)  # [3, 8, 7]

# Filter string yang dimulai dengan huruf tertentu
buah = ["apel", "jeruk", "anggur", "mangga", "alpukat"]
buah_a = [b for b in buah if b.startswith("a")]
print(buah_a)  # ['apel', 'anggur', 'alpukat']
```

### Dengan if-else

Untuk menggunakan if-else, letakkan sebelum `for`:

```python
# Sintaks: [ekspresi_if if kondisi else ekspresi_else for item in iterable]

# Ganti angka negatif dengan 0
angka = [-3, 5, -1, 8, -2, 6]
hasil = [x if x > 0 else 0 for x in angka]
print(hasil)  # [0, 5, 0, 8, 0, 6]

# Labeli genap/ganjil
label = ["genap" if x % 2 == 0 else "ganjil" for x in range(5)]
print(label)  # ['genap', 'ganjil', 'genap', 'ganjil', 'genap']
```

### Nested List Comprehension

Untuk memproses list bersarang (nested list):

```python
# Flatten nested list
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [angka for baris in matrix for angka in baris]
print(flat)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Membuat matrix dengan list comprehension
matrix = [[j for j in range(3)] for i in range(3)]
print(matrix)  # [[0, 1, 2], [0, 1, 2], [0, 1, 2]]

# Matrix perkalian
matrix_kali = [[i * j for j in range(1, 4)] for i in range(1, 4)]
print(matrix_kali)  # [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
```

### Dengan Fungsi

```python
# Menggunakan fungsi dalam list comprehension
kata = ["hello", "world", "python"]
uppercase = [k.upper() for k in kata]
print(uppercase)  # ['HELLO', 'WORLD', 'PYTHON']

# Menggunakan fungsi kustom
def kuadrat(n):
    return n ** 2

hasil = [kuadrat(x) for x in range(5)]
print(hasil)  # [0, 1, 4, 9, 16]

# Menggunakan lambda
hasil = [(lambda x: x ** 2)(x) for x in range(5)]
print(hasil)  # [0, 1, 4, 9, 16]
```

### Dictionary Comprehension

Konsep yang sama bisa diterapkan untuk dictionary:

```python
# Sintaks: {key: value for item in iterable}

# Membuat dictionary dari list
nama = ["Andi", "Budi", "Citra"]
panjang = {n: len(n) for n in nama}
print(panjang)  # {'Andi': 4, 'Budi': 4, 'Citra': 5}

# Dictionary dengan kondisi
angka = range(1, 6)
kuadrat = {x: x**2 for x in angka if x % 2 == 1}
print(kuadrat)  # {1: 1, 3: 9, 5: 25}

# Membalik key-value
original = {"a": 1, "b": 2, "c": 3}
terbalik = {v: k for k, v in original.items()}
print(terbalik)  # {1: 'a', 2: 'b', 3: 'c'}
```

### Set Comprehension

Sama seperti list, tapi menghasilkan set (tanpa duplikat):

```python
# Sintaks: {ekspresi for item in iterable}

# Set dari list dengan duplikat
angka = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
unik = {x for x in angka}
print(unik)  # {1, 2, 3, 4}

# Set dengan kondisi
genap_unik = {x for x in range(20) if x % 2 == 0}
print(genap_unik)  # {0, 2, 4, 6, 8, 10, 12, 14, 16, 18}
```

### Generator Expression

Mirip list comprehension tapi menggunakan tanda kurung () dan lebih hemat memori:

```python
# Generator expression (lazy evaluation)
gen = (x ** 2 for x in range(1000000))
print(gen)  # <generator object ...>

# Hanya menghitung saat diperlukan
print(next(gen))  # 0
print(next(gen))  # 1
print(sum(gen))   # Jumlah sisanya

# Berguna untuk data besar
# List: menyimpan semua di memori
# Generator: menghitung satu per satu
```

### Contoh Praktis

```python
# 1. Membersihkan data
data_kotor = ["  Andi  ", "BUDI", "citra  ", "  DENI"]
data_bersih = [nama.strip().title() for nama in data_kotor]
print(data_bersih)  # ['Andi', 'Budi', 'Citra', 'Deni']

# 2. Ekstrak ekstensi file
files = ["doc.pdf", "image.png", "data.csv", "script.py"]
ekstensi = [f.split(".")[-1] for f in files]
print(ekstensi)  # ['pdf', 'png', 'csv', 'py']

# 3. Filter dan transform sekaligus
nilai = [45, 78, 92, 56, 88, 34, 95]
lulus = [f"Nilai: {n} (Lulus)" for n in nilai if n >= 60]
print(lulus)  # ['Nilai: 78 (Lulus)', 'Nilai: 92 (Lulus)', ...]

# 4. Zip dua list
nama = ["Andi", "Budi", "Citra"]
umur = [25, 30, 28]
gabungan = {n: u for n, u in zip(nama, umur)}
print(gabungan)  # {'Andi': 25, 'Budi': 30, 'Citra': 28}

# 5. Membuat lookup table
huruf = "abcdefghij"
posisi = {h: i for i, h in enumerate(huruf, start=1)}
print(posisi)  # {'a': 1, 'b': 2, 'c': 3, ...}
```

### Kapan Menggunakan List Comprehension?

✅ **Gunakan** list comprehension ketika:
- Membuat list baru dari transformasi sederhana
- Memfilter elemen dari list
- Kode menjadi lebih mudah dibaca

❌ **Hindari** list comprehension ketika:
- Logika terlalu kompleks (lebih dari 2 kondisi)
- Membutuhkan multiple statements
- Mengorbankan keterbacaan kode

```python
# Terlalu kompleks - gunakan loop biasa
# HINDARI:
hasil = [func(x) if cond1(x) else other(x) for x in data if cond2(x) and cond3(x)]

# LEBIH BAIK:
hasil = []
for x in data:
    if cond2(x) and cond3(x):
        if cond1(x):
            hasil.append(func(x))
        else:
            hasil.append(other(x))
```

---

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/list-comprehension-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/f-string-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">F-String Python</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/decorator-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Decorator Python</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
