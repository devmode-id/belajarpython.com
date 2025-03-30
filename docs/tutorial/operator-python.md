---
layout: tutorial
title: Operator Python
order: 8
---

Operator adalah konstruksi yang dapat memanipulasi nilai dari operan.

Sebagai contoh operasi 3 + 2 = 5. Disini `3` dan `2` adalah operan dan `+` adalah operator.

Bahasa pemrograman Python mendukung berbagai macam operator, diantaranya :

- [Operator Aritmatika (Arithmetic Operators)](#operator-aritmatika)
- [Operator Perbandingan (Comparison (Relational) Operators)](#operator-perbandingan)
- [Operator Penugasan (Assignment Operators)](#operator-penugasan)
- [Operator Logika (Logical Operators)](#operator-logika)
- [Operator Bitwise (Bitwise Operators)](#operator-bitwise)
- [Operator Keanggotaan (Membership Operators)](#operator-keanggotaan)
- [Operator Identitas (Identity Operators)](#operator-identitas)

### Operator Aritmatika <a name="operator-aritmatika"></a>

| Operator             | Contoh        | Penjelasan                                                                                                 |
| -------------------- | ------------- | ---------------------------------------------------------------------------------------------------------- |
| Penjumlahan `+`      | `1 + 3 = 4`   | Menjumlahkan nilai dari masing-masing operan atau bilangan                                                 |
| Pengurangan `-`      | `4 - 1 = 3`   | Mengurangi nilai operan di sebelah kiri menggunakan operan di sebelah kanan                                |
| Perkalian `*`        | `2 * 4 = 8`   | Mengalikan operan/bilangan                                                                                 |
| Pembagian `/`        | `10 / 5 = 2`  | Untuk membagi operan di sebelah kiri menggunakan operan di sebelah kanan                                   |
| Sisa Bagi `%`        | `11 % 2 = 1`  | Mendapatkan sisa pembagian dari operan di sebelah kiri operator ketika dibagi oleh operan di sebelah kanan |
| Pangkat `**`         | `8 ** 2 = 64` | Memangkatkan operan disebelah kiri operator dengan operan di sebelah kanan operator                        |
| Pembagian Bulat `//` | `10 // 3 = 3` | Sama seperti pembagian. Hanya saja angka dibelakang koma dihilangkan                                       |

Dibawah ini adalah contoh penggunaan Operator Aritmatika dalam bahasa pemrograman Python

```python
#OPERATOR ARITMATIKA

#Penjumlahan
print(13 + 2)
apel = 7
jeruk = 9
buah = apel + jeruk #
print(buah)

#Pengurangan
hutang = 10000
bayar = 5000
sisaHutang = hutang - bayar
print("Sisa hutang Anda adalah ", sisaHutang)

#Perkalian
panjang = 15
lebar = 8
luas = panjang * lebar
print(luas)

#Pembagian
kue = 16
anak = 4
kuePerAnak = kue / anak
print("Setiap anak akan mendapatkan bagian kue sebanyak ", kuePerAnak)

#Sisa Bagi / Modulus
bilangan1 = 14
bilangan2 = 5
hasil = bilangan1 % bilangan2
print("Sisa bagi dari bilangan ", bilangan1, " dan ", bilangan2, " adalah ", hasil)

#Pangkat
bilangan3 = 8
bilangan4 = 2
hasilPangkat = bilangan3 ** bilangan4
print(hasilPangkat)

#Pembagian Bulat
print(10//3)
#10 dibagi 3 adalah 3.3333. Karena dibulatkan maka akan menghasilkan nilai 3
```

### Operator Perbandingan <a name="operator-perbandingan"></a>

Operator perbandingan (comparison operators) digunakan untuk membandingkan suatu nilai dari masing-masing operan.

| Operator                          | Contoh   | Penjelasan                                                                                                       |
| --------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| Sama dengan `==`                  | `1 == 1` | bernilai True Jika masing-masing operan memiliki nilai yang sama, maka kondisi bernilai benar atau True.         |
| Tidak sama dengan `!=`            | `2 != 2` | bernilai False Akan menghasilkan nilai kebalikan dari kondisi sebenarnya.                                        |
| Lebih besar dari `>`              | `5 > 3`  | bernilai True Jika nilai operan kiri lebih besar dari nilai operan kanan, maka kondisi menjadi benar.            |
| Lebih kecil dari `<`              | `5 < 3`  | bernilai True Jika nilai operan kiri lebih kecil dari nilai operan kanan, maka kondisi menjadi benar.            |
| Lebih besar atau sama dengan `>=` | `5 >= 3` | bernilai True Jika nilai operan kiri lebih besar dari nilai operan kanan, atau sama, maka kondisi menjadi benar. |
| Lebih kecil atau sama dengan `<=` | `5 <= 3` | bernilai True Jika nilai operan kiri lebih kecil dari nilai operan kanan, atau sama, maka kondisi menjadi benar. |

Dibawah ini adalah contoh penggunaan Operator Aritmatika dalam bahasa pemrograman Python

```python
# SAMA DENGAN
print(1 == 1) # Hasilnya akan bernilai True karena satu sama dengan satu
print(1 == 2) # Hasilnya akan bernilai False karena satu tidak sama dengan dua

# TIDAK SAMA DENGAN
print(2 != 2) # Hasilnya akan bernilai False karena dua seharusnya sama dengan dua
print(2 != 3) # Hasilnya akan bernilai True karena dua tidak sama dengan tiga

# LEBIH BESAR DARI
print(5 > 3) # Hasilnya akan bernilai True karena lima lebih besar dari tiga

# LEBIH KECIL DARI
print(5 < 3) # Hasilnya akan bernilai False karena lima tidak lebih besar dari tiga

# LEBIH BESAR DARI SAMA DENGAN
print(5 >= 3) # Hasilnya akan bernilai True karena lima lebih besar dari sama dengan tiga

# LEBIH KECIL DARI SAMA DENGAN
print(5 <= 3) # Hasilnya akan bernilai False karena lima tidak lebih besar dari sama dengan tiga
```

### Operator Penugasan <a name="operator-penugasan"></a>

Operator penugasan digunakan untuk memberikan atau memodifikasi nilai ke dalam sebuah variabel.

| Operator                          | Contoh    | Penjelasan                                                                                                                                   |
| --------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Sama dengan `=`                   | `a = 1`   | Memberikan nilai di kanan ke dalam variabel yang berada di sebelah kiri.                                                                     |
| Tambah sama dengan `+=`           | `a += 2`  | Memberikan nilai variabel dengan nilai variabel itu sendiri ditambah dengan nilai di sebelah kanan.                                          |
| Kurang sama dengan `-=`           | `a -= 2`  | Memberikan nilai variabel dengan nilai variabel itu sendiri dikurangi dengan nilai di sebelah kanan.                                         |
| Kali sama dengan `*=`             | `a *= 2`  | Memberikan nilai variabel dengan nilai variabel itu sendiri dikali dengan nilai di sebelah kanan.                                            |
| Bagi sama dengan `/=`             | `a /= 4`  | Memberikan nilai variabel dengan nilai variabel itu sendiri dibagi dengan nilai di sebelah kanan.                                            |
| Sisa bagi sama dengan `%=`        | `a %= 3`  | Memberikan nilai variabel dengan nilai variabel itu sendiri dibagi dengan nilai di sebelah kanan. Yang diambil nantinya adalah sisa baginya. |
| Pangkat sama dengan `**=`         | `a **= 3` | Memberikan nilai variabel dengan nilai variabel itu sendiri dipangkatkan dengan nilai di sebelah kanan.                                      |
| Pembagian bulat sama dengan `//=` | `a //= 3` | Membagi bulat operan sebelah kiri operator dengan operan sebelah kanan operator kemudian hasilnya diisikan ke operan sebelah kiri.           |

### Prioritas Eksekusi Operator di Python

Dari semua operator diatas, masing-masing mempunyai urutan prioritas yang nantinya prioritas pertama akan dilakukan paling pertama, begitu seterusnya sampai dengan prioritas terakhir.

| Operator                          | Keterangan               |
| --------------------------------- | ------------------------ |
| `**`                              | Aritmatika               |
| `~, +, -`                         | Bitwise                  |
| `*, /, %, //`                     | Aritmatika               |
| `+, -`                            | Aritmatika               |
| `>>, <<`                          | Bitwise                  |
| `&`                               | Bitwise                  |
| `^`                               | Bitwise                  |
| `<=, <, >, >=`                    | Perbandingan             |
| `<> , ==, !=`                     | Perbandingan             |
| `=, %=, /=, //=, -=, +=, *=, **=` | Penugasan                |
| `is, is not`                      | Identitas                |
| `in, not in`                      | Membership (Keanggotaan) |
| `not, or, and`                    | Logika                   |

---

> [Edit tutorial ini](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/tutorial/operator-python.md)

<div class="mt-8 inline justify-between gap-x-4 md:flex">
  <div class="flex justify-center mb-4 md:mb-0">
    <a href="/tutorial/variabel-python" class="text-primary-300 hover:text-primary-300 order-2 flex h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-8 text-base hover:no-underline md:order-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Variabel Python</span>
    </a>
  </div>
  <div class="order-1 flex justify-center">
    <a href="/tutorial/kondisi-if-else-python" class="order-1 flex h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-8 text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:order-2">
      <span class="-mt-0.5">Kondisi Python</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
