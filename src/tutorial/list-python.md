---
layout: tutorial.njk
title: List Python
order: 13
permalink: /tutorial/list-python/
---

<img src="/img/tutorial/13-tipe-data-list-python.webp" alt="Tipe Data List Python" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

Dalam bahasa pemrograman Python, struktur data yang paling dasar adalah urutan atau lists. Setiap elemen-elemen berurutan akan diberi nomor posisi atau indeksnya. Indeks pertama dalam list adalah nol, indeks kedua adalah satu dan seterusnya.

Python memiliki enam jenis urutan built-in, namun yang paling umum adalah list dan tuple. Ada beberapa hal yang dapat Anda lakukan dengan semua jenis list. Operasi ini meliputi pengindeksan, pengiris, penambahan, perbanyak, dan pengecekan keanggotaan. Selain itu, Python memiliki fungsi built-in untuk menemukan panjang list dan untuk menemukan elemen terbesar dan terkecilnya.

### Membuat List Python

List adalah tipe data yang paling serbaguna yang tersedia dalam bahasa Python, yang dapat ditulis sebagai daftar nilai yang dipisahkan koma (item) antara tanda kurung siku. Hal penting tentang daftar adalah item dalam list tidak boleh sama jenisnya.

Membuat list sangat sederhana, tinggal memasukkan berbagai nilai yang dipisahkan koma di antara tanda kurung siku. Dibawah ini adalah contoh sederhana pembuatan list dalam bahasa Python.

```python
#Contoh sederhana pembuatan list pada bahasa pemrograman python
list1 = ['kimia', 'fisika', 1993, 2017]
list2 = [1, 2, 3, 4, 5 ]
list3 = ["a", "b", "c", "d"]
```

### Akses Nilai Dalam List Python

Untuk mengakses nilai dalam list python, gunakan tanda kurung siku untuk mengiris beserta indeks atau indeks untuk mendapatkan nilai yang tersedia pada indeks tersebut.

Berikut adalah contoh cara mengakses nilai di dalam list python :

```python
#Cara mengakses nilai di dalam list Python

list1 = ['fisika', 'kimia', 1993, 2017]
list2 = [1, 2, 3, 4, 5, 6, 7 ]

print ("list1[0]: ", list1[0])
print ("list2[1:5]: ", list2[1:5])
```

Setelah Anda mengeksekusi kode diatas, hasilnya akan seperti dibawah ini :

`list1[0]: fisika`
`list2[1:5]: [2, 3, 4, 5]`

### Update Nilai Dalam List Python

Anda dapat memperbarui satu atau beberapa nilai di dalam list dengan memberikan potongan di sisi kiri operator penugasan, dan Anda dapat menambahkan nilai ke dalam list dengan metode append (). Sebagai contoh :

```python
list = ['fisika', 'kimia', 1993, 2017]
print ("Nilai ada pada index 2 : ", list[2])

list[2] = 2001
print ("Nilai baru ada pada index 2 : ", list[2])
```

### Hapus Nilai Dalam List Python

Untuk menghapus nilai di dalam list python, Anda dapat menggunakan salah satu pernyataan del jika Anda tahu persis elemen yang Anda hapus. Anda dapat menggunakan metode remove() jika Anda tidak tahu persis item mana yang akan dihapus. Sebagai contoh :

```python
#Contoh cara menghapus nilai pada list python

list = ['fisika', 'kimia', 1993, 2017]

print (list)
del list[2]
print ("Setelah dihapus nilai pada index 2 : ", list)
```

### Operasi Dasar Pada List Python

List Python merespons operator + dan \* seperti string; Itu artinya penggabungan dan pengulangan di sini juga berlaku, kecuali hasilnya adalah list baru, bukan sebuah String.

Sebenarnya, list merespons semua operasi urutan umum yang kami gunakan pada String di bab sebelumnya. Dibawah ini adalah tabel daftar operasi dasar pada list python.

| Python Expression                        | Hasil                                  | Penjelasan    |
| ---------------------------------------- | -------------------------------------- | ------------- |
| `len([1, 2, 3, 4])`                      | `4`                                    | Length        |
| `[1, 2, 3] + [4, 5, 6]`                  | `[1, 2, 3, 4, 5, 6]`                   | Concatenation |
| `['Halo!'] * 4`                          | `['Halo!', 'Halo!', 'Halo!', 'Halo!']` | Repetition    |
| `2 in [1, 2, 3]`                         | ` True`                                | Membership    |
| `for x in [1,2,3] : print (x,end = ' ')` | `1 2 3`                                | Iteration     |

### Indexing, Slicing dan Matrix Pada List Python

Karena list adalah urutan, pengindeksan dan pengiris bekerja dengan cara yang sama untuk list seperti yang mereka lakukan untuk String.

Dengan asumsi input berikut :

`L = ['C++'', 'Java', 'Python']`

| Python Expression | Hasil                | Penjelasan                 |
| ----------------- | -------------------- | -------------------------- |
| `L[2]`            | `'Python'`           | Offset mulai dari nol      |
| `L[-2]`           | `'Java'`             | Negatif: hitung dari kanan |
| `[1:]`            | `['Java', 'Python']` | Slicing mengambil bagian   |

### Method dan Fungsi Build-in Pada List Python

Python menyertakan fungsi built-in sebagai berikut :

| Python Function        | Penjelasan                                      |
| ---------------------- | ----------------------------------------------- |
| `cmp(list1, list2) # ` | Tidak lagi tersedia dengan Python 3             |
| `len(list) `           | Memberikan total panjang list.                  |
| `max(list) `           | Mengembalikan item dari list dengan nilai maks. |
| `min(list) `           | Mengembalikan item dari list dengan nilai min.  |
| `list(seq) `           | Mengubah tuple menjadi list.                    |

Python menyertakan methods built-in sebagai berikut

| Python Methods             | Penjelasan                                                    |
| -------------------------- | ------------------------------------------------------------- |
| `list.append(obj) `        | Menambahkan objek obj ke list                                 |
| `list.count(obj) `         | Jumlah pengembalian berapa kali obj terjadi dalam list        |
| `list.extend(seq) `        | Tambahkan isi seq ke list                                     |
| `list.index(obj) `         | Mengembalikan indeks terendah dalam list yang muncul obj      |
| `list.insert(index, obj) ` | Sisipkan objek obj ke dalam list di indeks offset             |
| `list.pop(obj = list[-1])` | Menghapus dan mengembalikan objek atau obj terakhir dari list |
| `list.remove(obj) `        | Removes object obj from list                                  |
| `list.reverse() `          | Membalik list objek di tempat                                 |
| `list.sort([func]) `       | Urutkan objek list, gunakan compare func jika diberikan       |

---

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/list-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/string-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">String Python</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/tuple-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Tuple Python</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
