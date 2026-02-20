---
layout: tutorial.njk
title: F-String Python
order: 26
permalink: /tutorial/f-string-python/
---

F-String (formatted string literals) adalah cara modern dan paling efisien untuk memformat string di Python. Diperkenalkan di Python 3.6, f-string menjadi standar de facto untuk string formatting karena sintaksnya yang bersih dan performa yang lebih baik.

### Sintaks Dasar F-String

F-string dimulai dengan huruf `f` atau `F` sebelum tanda kutip, dan ekspresi Python ditulis di dalam kurung kurawal `{}`:

```python
nama = "Budi"
umur = 25

# Menggunakan f-string
print(f"Halo, nama saya {nama} dan umur saya {umur} tahun")
# Output: Halo, nama saya Budi dan umur saya 25 tahun

# Bisa juga dengan huruf F kapital
print(F"Selamat datang, {nama}!")
```

### Perbandingan dengan Metode Lama

Sebelum f-string, ada beberapa cara untuk memformat string:

```python
nama = "Andi"
nilai = 95.5

# Cara lama 1: Concatenation (+)
print("Nama: " + nama + ", Nilai: " + str(nilai))

# Cara lama 2: % formatting
print("Nama: %s, Nilai: %.1f" % (nama, nilai))

# Cara lama 3: .format()
print("Nama: {}, Nilai: {}".format(nama, nilai))

# Cara modern: f-string (RECOMMENDED)
print(f"Nama: {nama}, Nilai: {nilai}")
```

F-string lebih mudah dibaca dan lebih cepat dieksekusi!

### Ekspresi dalam F-String

F-string bisa mengevaluasi ekspresi Python apapun di dalam kurung kurawal:

```python
# Operasi matematika
a = 10
b = 5
print(f"Penjumlahan: {a + b}")       # Output: Penjumlahan: 15
print(f"Perkalian: {a * b}")         # Output: Perkalian: 50
print(f"Pembagian: {a / b:.2f}")     # Output: Pembagian: 2.00

# Memanggil method
nama = "python"
print(f"Uppercase: {nama.upper()}")  # Output: Uppercase: PYTHON
print(f"Capitalize: {nama.capitalize()}")  # Output: Capitalize: Python

# Memanggil fungsi
import math
print(f"Akar 16: {math.sqrt(16)}")   # Output: Akar 16: 4.0

# List dan indexing
buah = ["apel", "jeruk", "mangga"]
print(f"Buah pertama: {buah[0]}")    # Output: Buah pertama: apel
```

### Format Angka

F-string memiliki format specifier yang powerful untuk mengatur tampilan angka:

```python
# Format desimal
pi = 3.14159265359
print(f"Pi: {pi:.2f}")           # Output: Pi: 3.14
print(f"Pi: {pi:.4f}")           # Output: Pi: 3.1416

# Format ribuan dengan separator
populasi = 1500000
print(f"Populasi: {populasi:,}")       # Output: Populasi: 1,500,000
print(f"Populasi: {populasi:_}")       # Output: Populasi: 1_500_000

# Format persentase
rasio = 0.756
print(f"Persentase: {rasio:.1%}")      # Output: Persentase: 75.6%

# Format lebar minimum
angka = 42
print(f"Angka: {angka:5}")       # Output: Angka:    42 (lebar 5)
print(f"Angka: {angka:05}")      # Output: Angka: 00042 (padding zero)

# Format binary, octal, hexadecimal
num = 255
print(f"Binary: {num:b}")        # Output: Binary: 11111111
print(f"Octal: {num:o}")         # Output: Octal: 377
print(f"Hex: {num:x}")           # Output: Hex: ff
print(f"Hex (uppercase): {num:X}")  # Output: Hex (uppercase): FF
```

### Format Alignment (Perataan)

```python
teks = "Python"

# Rata kiri (default)
print(f"{teks:<15}")     # Output: "Python         "

# Rata kanan
print(f"{teks:>15}")     # Output: "         Python"

# Rata tengah
print(f"{teks:^15}")     # Output: "    Python     "

# Dengan karakter pengisi
print(f"{teks:*^15}")    # Output: "****Python*****"
print(f"{teks:-<15}")    # Output: "Python---------"
```

### F-String dengan Dictionary

```python
mahasiswa = {
    "nama": "Siti",
    "nim": "12345",
    "ipk": 3.85
}

print(f"Nama: {mahasiswa['nama']}, IPK: {mahasiswa['ipk']}")
# Output: Nama: Siti, IPK: 3.85
```

### Debugging dengan F-String (Python 3.8+)

Fitur `=` specifier sangat berguna untuk debugging:

```python
x = 10
y = 20

# Cara lama
print(f"x = {x}, y = {y}")

# Cara baru dengan = (Python 3.8+)
print(f"{x=}, {y=}")              # Output: x=10, y=20
print(f"{x + y=}")                # Output: x + y=30
print(f"{x * 2=}")                # Output: x * 2=20
```

### Multiline F-String

```python
nama = "Andi"
pekerjaan = "Developer"
kota = "Jakarta"

# Menggunakan triple quotes
bio = f"""
Profil Pengguna
===============
Nama      : {nama}
Pekerjaan : {pekerjaan}
Kota      : {kota}
"""

print(bio)
```

### Escape Kurung Kurawal

Jika ingin menampilkan kurung kurawal literal, gunakan double bracket:

{% raw %}
```python
print(f"Ini kurung kurawal: {{}}")    # Output: Ini kurung kurawal: {}
print(f"Set Python: {{{1, 2, 3}}}")   # Output: Set Python: {1, 2, 3}
```
{% endraw %}

### Contoh Praktis

```python
# Membuat tabel sederhana
produk = [
    ("Laptop", 15000000),
    ("Mouse", 250000),
    ("Keyboard", 750000),
]

print(f"{'Produk':<15}{'Harga':>15}")
print("-" * 30)
for nama, harga in produk:
    print(f"{nama:<15}{harga:>15,}")

# Output:
# Produk                  Harga
# ------------------------------
# Laptop            15,000,000
# Mouse                250,000
# Keyboard             750,000
```

---

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/f-string-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/virtual-environment-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Virtual Environment</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/list-comprehension-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">List Comprehension</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
