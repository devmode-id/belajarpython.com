---
layout: tutorial.njk
title: Lambda Python
order: 31
permalink: /tutorial/lambda-python/
---

Lambda adalah cara singkat untuk membuat fungsi anonim (fungsi tanpa nama) di Python. Lambda sangat berguna untuk operasi sederhana yang hanya perlu digunakan sekali, terutama sebagai argumen untuk fungsi seperti `map()`, `filter()`, dan `sorted()`.

### Sintaks Dasar

```python
# Sintaks: lambda arguments: expression

# Fungsi biasa
def kuadrat(x):
    return x ** 2

# Equivalent lambda
kuadrat = lambda x: x ** 2

print(kuadrat(5))  # Output: 25
```

Lambda hanya bisa berisi satu ekspresi dan otomatis mengembalikan hasilnya.

### Lambda dengan Beberapa Argumen

```python
# Satu argumen
double = lambda x: x * 2
print(double(5))  # 10

# Dua argumen
tambah = lambda a, b: a + b
print(tambah(3, 5))  # 8

# Tiga argumen
volume = lambda p, l, t: p * l * t
print(volume(2, 3, 4))  # 24

# Tanpa argumen
random_greeting = lambda: "Halo!"
print(random_greeting())  # Halo!
```

### Lambda dengan Default Arguments

```python
# Default argument
power = lambda x, n=2: x ** n
print(power(3))     # 9 (pangkat 2)
print(power(3, 3))  # 27 (pangkat 3)

# Multiple defaults
sapa = lambda nama, formal=False: f"Selamat Pagi, {nama}" if formal else f"Hai, {nama}!"
print(sapa("Budi"))            # Hai, Budi!
print(sapa("Budi", formal=True))  # Selamat Pagi, Budi
```

### Lambda dengan Conditional Expression

```python
# Ternary dalam lambda
cek_genap = lambda x: "Genap" if x % 2 == 0 else "Ganjil"
print(cek_genap(4))  # Genap
print(cek_genap(7))  # Ganjil

# Multiple conditions
nilai_huruf = lambda n: "A" if n >= 90 else "B" if n >= 80 else "C" if n >= 70 else "D"
print(nilai_huruf(95))  # A
print(nilai_huruf(75))  # C
```

### Lambda dengan Built-in Functions

#### map() - Transformasi setiap elemen

```python
angka = [1, 2, 3, 4, 5]

# Kuadratkan setiap angka
kuadrat = list(map(lambda x: x ** 2, angka))
print(kuadrat)  # [1, 4, 9, 16, 25]

# Konversi ke string
str_angka = list(map(lambda x: str(x), angka))
print(str_angka)  # ['1', '2', '3', '4', '5']

# Map dengan dua list
list1 = [1, 2, 3]
list2 = [4, 5, 6]
jumlah = list(map(lambda x, y: x + y, list1, list2))
print(jumlah)  # [5, 7, 9]
```

#### filter() - Filter elemen berdasarkan kondisi

```python
angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Filter angka genap
genap = list(filter(lambda x: x % 2 == 0, angka))
print(genap)  # [2, 4, 6, 8, 10]

# Filter angka lebih dari 5
besar = list(filter(lambda x: x > 5, angka))
print(besar)  # [6, 7, 8, 9, 10]

# Filter string kosong
kata = ["hello", "", "world", "", "python"]
non_empty = list(filter(lambda x: x, kata))
print(non_empty)  # ['hello', 'world', 'python']
```

#### sorted() - Sorting dengan custom key

```python
# Sort berdasarkan nilai absolut
angka = [-5, 2, -3, 1, -4]
urut = sorted(angka, key=lambda x: abs(x))
print(urut)  # [1, 2, -3, -4, -5]

# Sort list of tuples
siswa = [("Andi", 85), ("Budi", 92), ("Citra", 78)]
by_nilai = sorted(siswa, key=lambda x: x[1], reverse=True)
print(by_nilai)  # [('Budi', 92), ('Andi', 85), ('Citra', 78)]

# Sort list of dictionaries
data = [
    {"nama": "Andi", "umur": 25},
    {"nama": "Budi", "umur": 20},
    {"nama": "Citra", "umur": 30}
]
by_umur = sorted(data, key=lambda x: x["umur"])
print(by_umur)
# [{'nama': 'Budi', 'umur': 20}, {'nama': 'Andi', 'umur': 25}, {'nama': 'Citra', 'umur': 30}]

# Sort string by length
kata = ["python", "go", "javascript", "c"]
by_length = sorted(kata, key=lambda x: len(x))
print(by_length)  # ['c', 'go', 'python', 'javascript']
```

#### reduce() - Agregasi menjadi satu nilai

```python
from functools import reduce

angka = [1, 2, 3, 4, 5]

# Sum semua angka
total = reduce(lambda x, y: x + y, angka)
print(total)  # 15

# Perkalian semua angka
product = reduce(lambda x, y: x * y, angka)
print(product)  # 120

# Cari maksimum
maksimum = reduce(lambda x, y: x if x > y else y, angka)
print(maksimum)  # 5
```

### Lambda dalam Data Structures

```python
# Dictionary of functions
operasi = {
    "tambah": lambda x, y: x + y,
    "kurang": lambda x, y: x - y,
    "kali": lambda x, y: x * y,
    "bagi": lambda x, y: x / y if y != 0 else "Error"
}

print(operasi["tambah"](10, 5))  # 15
print(operasi["kali"](10, 5))    # 50

# List of lambdas
transformasi = [
    lambda x: x * 2,
    lambda x: x ** 2,
    lambda x: x + 10
]

angka = 5
for t in transformasi:
    print(t(angka))  # 10, 25, 15
```

### Immediately Invoked Lambda

Lambda yang langsung dijalankan:

```python
# IIFE (Immediately Invoked Function Expression)
hasil = (lambda x, y: x + y)(3, 5)
print(hasil)  # 8

# Berguna untuk operasi one-time
data = (lambda: {"config": "value", "debug": True})()
print(data)  # {'config': 'value', 'debug': True}
```

### Lambda vs Fungsi Biasa

| Aspek | Lambda | def Function |
|-------|--------|--------------|
| Nama | Anonim | Harus punya nama |
| Baris | Satu ekspresi | Multiple statements |
| Readability | Untuk operasi simpel | Untuk logika kompleks |
| Docstring | Tidak bisa | Bisa |
| Type hints | Tidak bisa | Bisa |

```python
# Kapan menggunakan lambda
data = [1, 2, 3, 4, 5]
hasil = list(map(lambda x: x * 2, data))  # ✅ Simpel, sekali pakai

# Kapan menggunakan def
def hitung_pajak(gaji, tunjangan=0, potongan=0):
    """
    Menghitung pajak penghasilan.
    
    Args:
        gaji: Gaji pokok
        tunjangan: Total tunjangan
        potongan: Total potongan
        
    Returns:
        Nilai pajak yang harus dibayar
    """
    penghasilan_kena_pajak = gaji + tunjangan - potongan
    if penghasilan_kena_pajak <= 50000000:
        return penghasilan_kena_pajak * 0.05
    elif penghasilan_kena_pajak <= 250000000:
        return penghasilan_kena_pajak * 0.15
    else:
        return penghasilan_kena_pajak * 0.25
```

### Contoh Praktis

```python
# 1. Sorting complex data
produk = [
    {"nama": "Laptop", "harga": 15000000, "rating": 4.5},
    {"nama": "Mouse", "harga": 250000, "rating": 4.8},
    {"nama": "Keyboard", "harga": 750000, "rating": 4.2}
]

# Sort by harga (ascending)
by_harga = sorted(produk, key=lambda p: p["harga"])

# Sort by rating (descending)
by_rating = sorted(produk, key=lambda p: p["rating"], reverse=True)

# 2. Data transformation pipeline
data = ["  Hello  ", "WORLD", "  python  "]
cleaned = list(map(lambda s: s.strip().lower(), data))
print(cleaned)  # ['hello', 'world', 'python']

# 3. Event handlers (pseudo-code)
button_actions = {
    "save": lambda: print("Saving..."),
    "delete": lambda: print("Deleting..."),
    "export": lambda: print("Exporting...")
}

action = "save"
button_actions[action]()  # Saving...
```

### Tips dan Best Practices

1. **Gunakan lambda untuk operasi sederhana** - Jika lebih dari satu baris logika, gunakan `def`
2. **Jangan berlebihan** - Kode harus tetap mudah dibaca
3. **Hindari nested lambda** - Sulit dibaca dan di-debug
4. **Pertimbangkan list comprehension** - Sering lebih readable dari map+lambda

```python
# Lambda + map
hasil = list(map(lambda x: x * 2, data))

# List comprehension (lebih pythonic)
hasil = [x * 2 for x in data]
```

---

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/lambda-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/async-await-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Async/Await Python</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/set-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Set Python</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
