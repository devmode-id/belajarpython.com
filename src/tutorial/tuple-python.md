---
layout: tutorial.njk
title: Tuple Python
order: 14
permalink: /tutorial/tuple-python/
---

<img src="/img/tutorial/14-tipe-data-tuple-python.webp" alt="Tipe Data Tuple Python" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

Sebuah tupel adalah urutan objek Python yang tidak berubah. Tupel adalah urutan, seperti daftar. Perbedaan utama antara tupel dan daftarnya adalah bahwa tupel tidak dapat diubah tidak seperti List Python. Tupel menggunakan tanda kurung, sedangkan List Python menggunakan tanda kurung siku.

Membuat tuple semudah memasukkan nilai-nilai yang dipisahkan koma. Secara opsional, Anda dapat memasukkan nilai-nilai yang dipisahkan koma ini di antara tanda kurung juga. Sebagai contoh :

```python
#Contoh sederhana pembuatan tuple pada bahasa pemrograman python

tup1 = ('fisika', 'kimia', 1993, 2017)
tup2 = (1, 2, 3, 4, 5 )
tup3 = "a", "b", "c", "d"
```

Tupel kosong ditulis sebagai dua tanda kurung yang tidak berisi apa-apa, contohnya : tup1 = ();
Untuk menulis tupel yang berisi satu nilai, Anda harus memasukkan koma, meskipun hanya ada satu nilai, contohnya : tup1 = (50,)
Seperti indeks String, indeks tuple mulai dari 0, dan mereka dapat diiris, digabungkan, dan seterusnya

### Akses Nilai Dalam Tuple Python

Untuk mengakses nilai dalam tupel, gunakan tanda kurung siku untuk mengiris beserta indeks atau indeks untuk mendapatkan nilai yang tersedia pada indeks tersebut. Sebagai contoh :

```python
#Cara mengakses nilai tuple

tup1 = ('fisika', 'kimia', 1993, 2017)
tup2 = (1, 2, 3, 4, 5, 6, 7 )

print ("tup1[0]: ", tup1[0])
print ("tup2[1:5]: ", tup2[1:5])
```

Setelah Anda mengeksekusi kode diatas, hasilnya akan seperti dibawah ini :

`tup1[0]: fisika`
`tup2[1:5]: (2, 3, 4, 5)`

### Update Nilai Dalam Tuple Python

Tuple tidak berubah, yang berarti Anda tidak dapat memperbarui atau mengubah nilai elemen tupel. Anda dapat mengambil bagian dari tupel yang ada untuk membuat tupel baru seperti ditunjukkan oleh contoh berikut.

```python
tup1 = (12, 34.56)
tup2 = ('abc', 'xyz')

# Aksi seperti dibawah ini tidak bisa dilakukan pada tuple python

# Karena memang nilai pada tuple python tidak bisa diubah

# tup1[0] = 100;

# Jadi, buatlah tuple baru sebagai berikut

tup3 = tup1 + tup2
print (tup3)
```

### Hapus Nilai Dalam Tuple Python

Menghapus elemen tuple individual tidak mungkin dilakukan. Tentu saja, tidak ada yang salah dengan menggabungkan tupel lain dengan unsur-unsur yang tidak diinginkan dibuang.

Untuk secara eksplisit menghapus keseluruhan tuple, cukup gunakan del statement. Sebagai contoh

```python
tup = ('fisika', 'kimia', 1993, 2017)
print(tup)

# hapus tuple dengan statement del

del tup

# lalu buat kembali tuple yang baru dengan elemen yang diinginkan

tup = ('Bahasa', 'Literasi', 2020)
print("Setelah menghapus tuple :", tup)
```

### Operasi Dasar Pada Tuple Python

Tupel merespons operator + dan \* sama seperti String; Mereka berarti penggabungan dan pengulangan di sini juga berlaku, kecuali hasilnya adalah tupel baru, bukan string.

Sebenarnya, Tuple merespons semua operasi urutan umum yang kami gunakan pada String di bab sebelumnya. Dibawah ini adalah tabel daftar operasi dasar pada Tuple python

| Python Expression                         | Hasil                                  | Penjelasan    |
| ----------------------------------------- | -------------------------------------- | ------------- |
| `len((1, 2, 3))`                          | `3`                                    | Length        |
| `(1, 2, 3) + (4, 5, 6) `                  | `(1, 2, 3, 4, 5, 6)`                   | Concatenation |
| `('Halo!',) \* 4`                         | `('Halo!', 'Halo!', 'Halo!', 'Halo!')` | Repetition    |
| `3 in (1, 2, 3)`                          | `True`                                 | Membership    |
| `for x in (1,2,3) : print (x, end = ' ')` | `1 2 3`                                | Iteration     |

### Indexing, Slicing dan Matrix Pada Tuple Python

Karena tupel adalah urutan, pengindeksan dan pengiris bekerja dengan cara yang sama untuk tupel seperti pada String, dengan asumsi masukan berikut

Dengan asumsi input berikut : `T = ('C++', 'Java', 'Python')`

| Python Expression | Hasil                | Penjelasan                 |
| ----------------- | -------------------- | -------------------------- |
| `T[2]`            | `'Python'`           | Offset mulai dari nol      |
| `T[-2]`           | `'Java'`             | Negatif: hitung dari kanan |
| `T[1:]`           | `('Java', 'Python')` | Slicing mengambil bagian   |

### Fungsi Build-in Pada Tuple Python

Python menyertakan fungsi built-in sebagai berikut

| Python Function       | Penjelasan                                       |
| --------------------- | ------------------------------------------------ |
| `cmp(tuple1, tuple2)` | # Tidak lagi tersedia dengan Python 3            |
| `len(tuple)`          | Memberikan total panjang tuple.                  |
| `max(tuple)`          | Mengembalikan item dari tuple dengan nilai maks. |
| `min(tuple)`          | Mengembalikan item dari tuple dengan nilai min.  |
| `tuple(seq)`          | Mengubah seq menjadi tuple.                      |

---

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/tuple-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/list-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">List Python</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/dictionary-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Dictionary Python</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
