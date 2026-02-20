---
layout: tutorial.njk
title: Set Python
order: 32
permalink: /tutorial/set-python/
---

Set adalah tipe data koleksi di Python yang menyimpan kumpulan elemen unik dan tidak berurutan. Set sangat efisien untuk operasi keanggotaan (membership testing), menghilangkan duplikat, dan operasi matematis seperti union, intersection, dan difference.

### Membuat Set

```python
# Menggunakan kurung kurawal
buah = {"apel", "jeruk", "mangga"}
print(buah)  # {'apel', 'jeruk', 'mangga'}

# Menggunakan set() constructor
angka = set([1, 2, 3, 4, 5])
print(angka)  # {1, 2, 3, 4, 5}

# Set kosong (HARUS pakai set(), bukan {})
kosong = set()
print(kosong)  # set()
print(type(kosong))  # <class 'set'>

# {} membuat dictionary, bukan set!
bukan_set = {}
print(type(bukan_set))  # <class 'dict'>
```

### Karakteristik Set

```python
# 1. Elemen unik (tidak ada duplikat)
angka = {1, 2, 2, 3, 3, 3, 4}
print(angka)  # {1, 2, 3, 4}

# 2. Tidak berurutan (unordered)
huruf = {"c", "a", "b"}
print(huruf)  # Urutan bisa berbeda setiap kali

# 3. Tidak bisa diakses dengan index
# huruf[0]  # Error! TypeError

# 4. Elemen harus hashable (immutable)
valid = {1, "hello", (1, 2)}  # OK
# invalid = {1, [1, 2]}  # Error! List tidak hashable
```

### Menambah dan Menghapus Elemen

```python
buah = {"apel", "jeruk"}

# Menambah satu elemen
buah.add("mangga")
print(buah)  # {'apel', 'jeruk', 'mangga'}

# Menambah beberapa elemen
buah.update(["pisang", "anggur"])
print(buah)  # {'apel', 'jeruk', 'mangga', 'pisang', 'anggur'}

# Menghapus elemen (error jika tidak ada)
buah.remove("apel")
print(buah)

# Menghapus elemen (tidak error jika tidak ada)
buah.discard("durian")  # Tidak ada error
print(buah)

# Menghapus elemen random
item = buah.pop()
print(f"Dihapus: {item}")

# Menghapus semua elemen
buah.clear()
print(buah)  # set()
```

### Operasi Keanggotaan

Set sangat cepat untuk cek keanggotaan (O(1) complexity):

```python
angka = {1, 2, 3, 4, 5}

# Cek apakah ada dalam set
print(3 in angka)      # True
print(10 in angka)     # False
print(10 not in angka) # True

# Perbandingan dengan list untuk data besar
# Set: O(1) - sangat cepat
# List: O(n) - lambat untuk data besar
```

### Operasi Matematis

#### Union (Gabungan)

Menggabungkan semua elemen dari kedua set:

```python
A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

# Menggunakan operator |
gabungan = A | B
print(gabungan)  # {1, 2, 3, 4, 5, 6}

# Menggunakan method
gabungan = A.union(B)
print(gabungan)  # {1, 2, 3, 4, 5, 6}
```

#### Intersection (Irisan)

Elemen yang ada di kedua set:

```python
A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

# Menggunakan operator &
irisan = A & B
print(irisan)  # {3, 4}

# Menggunakan method
irisan = A.intersection(B)
print(irisan)  # {3, 4}
```

#### Difference (Selisih)

Elemen yang ada di set pertama tapi tidak di set kedua:

```python
A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

# A - B: Elemen di A yang tidak ada di B
selisih = A - B
print(selisih)  # {1, 2}

# B - A: Elemen di B yang tidak ada di A
selisih = B - A
print(selisih)  # {5, 6}

# Menggunakan method
selisih = A.difference(B)
print(selisih)  # {1, 2}
```

#### Symmetric Difference

Elemen yang ada di salah satu set, tapi tidak keduanya:

```python
A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

# Menggunakan operator ^
sym_diff = A ^ B
print(sym_diff)  # {1, 2, 5, 6}

# Menggunakan method
sym_diff = A.symmetric_difference(B)
print(sym_diff)  # {1, 2, 5, 6}
```

### Subset dan Superset

```python
A = {1, 2}
B = {1, 2, 3, 4, 5}

# A adalah subset dari B (semua elemen A ada di B)
print(A.issubset(B))    # True
print(A <= B)           # True
print(A < B)            # True (proper subset)

# B adalah superset dari A (B mengandung semua elemen A)
print(B.issuperset(A))  # True
print(B >= A)           # True
print(B > A)            # True (proper superset)

# Cek apakah tidak ada elemen yang sama
C = {10, 20, 30}
print(A.isdisjoint(C))  # True (tidak ada irisan)
print(A.isdisjoint(B))  # False (ada irisan)
```

### Update Operations

Operasi yang mengubah set secara langsung:

```python
A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

# Update dengan union
A_copy = A.copy()
A_copy |= B
print(A_copy)  # {1, 2, 3, 4, 5, 6}

# Update dengan intersection
A_copy = A.copy()
A_copy &= B
print(A_copy)  # {3, 4}

# Update dengan difference
A_copy = A.copy()
A_copy -= B
print(A_copy)  # {1, 2}

# Atau menggunakan methods
A_copy = A.copy()
A_copy.update(B)  # Union
A_copy.intersection_update(B)  # Intersection
A_copy.difference_update(B)  # Difference
```

### Frozenset (Immutable Set)

Frozenset adalah versi immutable dari set:

```python
# Membuat frozenset
fs = frozenset([1, 2, 3, 4])
print(fs)  # frozenset({1, 2, 3, 4})

# Tidak bisa dimodifikasi
# fs.add(5)  # Error! AttributeError

# Bisa digunakan sebagai key dictionary atau elemen set lain
my_dict = {fs: "value"}
print(my_dict)

# Operasi matematis tetap bisa dilakukan
fs2 = frozenset([3, 4, 5])
print(fs | fs2)  # frozenset({1, 2, 3, 4, 5})
print(fs & fs2)  # frozenset({3, 4})
```

### Set Comprehension

```python
# Set comprehension mirip list comprehension
kuadrat = {x**2 for x in range(10)}
print(kuadrat)  # {0, 1, 4, 9, 16, 25, 36, 49, 64, 81}

# Dengan kondisi
genap = {x for x in range(20) if x % 2 == 0}
print(genap)  # {0, 2, 4, 6, 8, 10, 12, 14, 16, 18}

# Dari string (karakter unik)
kata = "mississippi"
huruf_unik = {c for c in kata}
print(huruf_unik)  # {'m', 'i', 's', 'p'}
```

### Contoh Praktis

```python
# 1. Menghilangkan duplikat
data = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
unik = list(set(data))
print(unik)  # [1, 2, 3, 4]

# 2. Cek apakah list punya duplikat
def punya_duplikat(lst):
    return len(lst) != len(set(lst))

print(punya_duplikat([1, 2, 3]))    # False
print(punya_duplikat([1, 2, 2, 3])) # True

# 3. Cari elemen yang sama dari dua list
list1 = [1, 2, 3, 4, 5]
list2 = [4, 5, 6, 7, 8]
sama = set(list1) & set(list2)
print(sama)  # {4, 5}

# 4. Cari elemen yang berbeda
beda = set(list1) ^ set(list2)
print(beda)  # {1, 2, 3, 6, 7, 8}

# 5. Filter data unik dengan kondisi
transaksi = [100, 200, 100, 300, 200, 400, 100]
besar = {t for t in transaksi if t > 150}
print(besar)  # {200, 300, 400}

# 6. Validasi input
valid_options = {"ya", "tidak", "mungkin"}
user_input = "ya"
if user_input.lower() in valid_options:
    print("Input valid!")

# 7. Tag system
post1_tags = {"python", "programming", "tutorial"}
post2_tags = {"python", "web", "flask"}
post3_tags = {"javascript", "web", "react"}

# Posts dengan tag python
python_posts = [post1_tags, post2_tags]  # Cek manual

# Tag yang umum antara post1 dan post2
common = post1_tags & post2_tags
print(common)  # {'python'}

# Semua tag unik
all_tags = post1_tags | post2_tags | post3_tags
print(all_tags)  # {'python', 'programming', 'tutorial', 'web', 'flask', 'javascript', 'react'}
```

### Performa Set vs List

```python
import time

# Buat data besar
data_list = list(range(1000000))
data_set = set(data_list)

# Cek keanggotaan dalam list
start = time.time()
result = 999999 in data_list
print(f"List: {time.time() - start:.6f} detik")

# Cek keanggotaan dalam set
start = time.time()
result = 999999 in data_set
print(f"Set: {time.time() - start:.6f} detik")

# Set jauh lebih cepat untuk membership testing!
```

### Kapan Menggunakan Set?

✅ **Gunakan set ketika:**
- Perlu menyimpan elemen unik
- Sering melakukan membership testing
- Perlu operasi matematika (union, intersection)
- Ingin menghilangkan duplikat dari list

❌ **Jangan gunakan set ketika:**
- Perlu menjaga urutan elemen (gunakan list atau dict)
- Perlu akses dengan index
- Elemen tidak hashable (list, dict)

---

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/set-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/lambda-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Lambda Python</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/apa-itu-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Kembali ke Awal</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
