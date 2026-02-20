---
layout: tutorial.njk
title: Number Python
order: 11
permalink: /tutorial/number-python/
---

<img src="/img/tutorial/11-tipe-data-number-pada-python.webp" alt="Tipe Data Number Python - Int, Float, Complex" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

Number adalah tipe data Python yang menyimpan nilai numerik. Number adalah tipe data yang tidak berubah. Ini berarti, mengubah nilai dari sejumlah tipe data akan menghasilkan objek yang baru dialokasikan.

Objek Number dibuat saat Anda memberikan nilai pada-nya. Sebagai contoh : `angkaPertama = 1`
`angkaKedua = 33 `

Python mendukung beberapa tipe data Number diantaranya :

- Int
- Float
- Complex

Berikut ini adalah beberapa contoh dari Tipe data Number pada Python :

| Int      | Float         | Complex      |
| -------- | ------------- | ------------ |
| `20 `    | `0.1 `        | `3.14j `     |
| `300 `   | `1.20 `       | `35.j `      |
| `-13 `   | `-41.2 `      | `3.12e-12j ` |
| `020 `   | `32.23+e123 ` | `.873j `     |
| `-0103 ` | `-92. `       | `-.123+0J `  |
| `-0x212` | `-32.52e10 `  | `3e+123J `   |
| `0x56 `  | `60.2-E13 `   | `4.31e-4j `  |

### Konversi Tipe Data Number Python

Pada Python Anda bisa mengkonversi tipe data dengan menggunakan fungsi. Dibawah ini adalah beberapa fungsi untuk mengkonversi tipe data number Python.

- `int(x)`
  untuk meng-konversi x menjadi integer.
- `float(x)`
  untuk meng-konversi x menjadi floating point number.
- `complex(x)`
  untuk meng-konversi x menjadi complex number dengan real part x dan imaginary part zero.
- `complex(x, y)`
  untuk meng-konversi x dan y menjadi complex number dengan real part x dan imaginary part y.

### Fungsi Matematika Python

Pada bahasa pemrograman Python terdapat fungsi untuk melakukan perhitungan matematis, berikut adalah daftarnya :

| Nama         | Penggunaan        | Penjelasan                                                                                                                                                |
| ------------ | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Absolute     | `abs(x)`          | Nilai absolut dari x:(positive) jarak antara x and 0.                                                                                                     |
| Ceiling      | `ceil(x)`         | Ceiling dari x: integer terkecil yang lebih besar dari x.                                                                                                 |
| Eksponen     | `exp(x)`          | Nilai eksponen dari x: ex                                                                                                                                 |
| Fabs         | `fabs(x)`         | Nilai absolut dari x.                                                                                                                                     |
| Floor        | `floor(x)`        | Nilai dasar dari x: integer terbesar yang tidak lebih besar dari x.                                                                                       |
| Log          | `log(x)`          | Logaritma dari x, untuk x > 0.                                                                                                                            |
| Log 10       | `log10(x)`        | Basis 10 logaritma dari x, untuk x > 0.                                                                                                                   |
| Max          | `max(x1, x2,...)` | Argumen terbesar: Nilai terdekat dengan tak terhingga positif                                                                                             |
| Min          | `min(x1, x2,...)` | Argumen terkecil: nilai yang paling mendekati tak berhingga negatif.                                                                                      |
| Modf         | `modf(x)`         | Bagian pecahan dan bilangan bulat dari x dalam tupel dua item. Kedua bagian memiliki tanda yang sama dengan x. Bagian integer dikembalikan sebagai float. |
| Pow          | `pow(x, y)`       | Nilai x \*\* y.                                                                                                                                           |
| Round        | `round(x [,n])`   | X dibulatkan menjadi n digit dari titik desimal. Putaran Python jauh dari nol sebagai tie-breaker: round (0.5) adalah 1.0 dan round (-0.5) adalah -1.0.   |
| Akar Kuadrat | `sqrt(x)`         | Akar kuadrat x untuk x> 0.                                                                                                                                |

### Fungsi Nomor Acak Python

Nomor acak digunakan untuk aplikasi permainan, simulasi, pengujian, keamanan, dan privasi. Python mencakup fungsi berikut yang umum digunakan. Berikut adalah daftarnya :

| Nama      | Penggunaan                          | Penjelasan                                                                                                                                                            |
| --------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Choice    | `choice(seq)`                       | Item acak dari list, tuple, atau string.                                                                                                                              |
| RandRange | `randrange ([start,] stop [,step])` | Elemen yang dipilih secara acak dari jangkauan (start, stop, step).                                                                                                   |
| Random    | `random()`                          | A random float r, sehingga 0 kurang dari atau sama dengan r dan r kurang dari 1                                                                                       |
| Seed      | `seed([x])`                         | Menetapkan nilai awal integer yang digunakan dalam menghasilkan bilangan acak. Panggil fungsi ini sebelum memanggil fungsi modul acak lainnya. Tidak ada pengembalian |
| Shuffle   | `shuffle(lst)`                      | Mengacak daftar dari daftar di tempat. Tidak ada pengembalian                                                                                                         |
| Floor     | `floor(x)`                          | The floor of x: the largest integer not greater than x.                                                                                                               |
| Uniform   | `uniform(x, y)`                     | Sebuah float acak r, sedemikian rupa sehingga x kurang dari atau sama dengan r dan r kurang dari y.                                                                   |

### Fungsi Trigonometri Python

Python mencakup fungsi berikut yang melakukan perhitungan trigonometri. Berikut adalah daftarnya :

| Nama    | Penggunaan Penjelasan | Penjelasan                                        |
| ------- | --------------------- | ------------------------------------------------- |
| Acos    | `acos(x)`             | Kembalikan kosinus x, di radian.                  |
| Asin    | `asin(x)`             | Kembalikan busur sinus x, dalam radian.           |
| Atan    | `atan(x)`             | Kembalikan busur singgung x, di radian.           |
| Atan 2  | `atan2(y, x)`         | Kembali atan (y / x), di radian.                  |
| Kosinus | `cos(x)`              | Kembalikan kosinus x radian.                      |
| Hypot   | `hypot(x, y)`         | Kembalikan norma Euclidean, sqrt (x _ x + y _ y). |
| Sin     | `sin(x)`              | Kembalikan sinus dari x radian.                   |
| Tan     | `tan(x)`              | Kembalikan tangen x radian.                       |
| Derajat | `degrees(x)`          | Mengonversi sudut x dari radian ke derajat.       |
| Radian  | `radians(x)`          | Mengonversi sudut x dari derajat ke radian.       |

### Konstanta Matematika Python

Modul ini juga mendefinisikan dua konstanta matematika. Berikut adalah daftarnya :

| Nama | Penggunaan | Penjelasan              |
| ---- | ---------- | ----------------------- |
| Pi   | `pi`       | Konstanta Pi matematika |
| e    | `e`        | Konstanta e matematika  |

### Contoh Penggunaan Number Python

Berikut adalah contoh implementasi kode Python untuk tipe data number:

```python
import math
import random

# Definisi variabel dengan tipe data number
x = 10      # int
y = 10.5    # float
z = 1j      # complex

print("Nilai x:", x, "Tipe:", type(x))
print("Nilai y:", y, "Tipe:", type(y))
print("Nilai z:", z, "Tipe:", type(z))

# Konversi tipe data
a = float(x)  # convert int to float
b = int(y)    # convert float to int
c = complex(x)# convert int to complex

print("\n--- Hasil Konversi ---")
print("Int ke Float:", a)
print("Float ke Int:", b)
print("Int ke Complex:", c)

# Penggunaan fungsi matematika
print("\n--- Fungsi Matematika ---")
print("Nilai absolut -7.25:", abs(-7.25))
print("Pangkat 4^3:", pow(4, 3))
print("Akar kuadrat 64:", math.sqrt(64))
print("Ceiling 1.4:", math.ceil(1.4))
print("Floor 1.4:", math.floor(1.4))
print("Nilai PI:", math.pi)

# Penggunaan fungsi random
print("\n--- Fungsi Random ---")
print("Angka acak 1-100:", random.randrange(1, 100))
print("Pilihan acak:", random.choice(['Apel', 'Jeruk', 'Mangga']))
```

---

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/number-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/loop-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Loop Python</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/string-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">String Python</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
