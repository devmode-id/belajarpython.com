---
layout: tutorial.njk
title: Tipe Data Python
order: 6
permalink: /tutorial/tipe-data-python/
---

<img src="/img/tutorial/6-tipe-data-pada-python.webp" alt="Tipe Data pada Python" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

Tipe data adalah suatu media atau memori pada komputer yang digunakan untuk menampung informasi.

Python sendiri mempunyai tipe data yang cukup unik bila kita bandingkan dengan bahasa pemrograman yang lain.

Berikut adalah tipe data dari bahasa pemrograman Python :

| Tipe Data   | Contoh                   | Penjelasan                                                                           |
| ----------- | ------------------------ | ------------------------------------------------------------------------------------ |
| Boolean     | `True` atau `False`      | Menyatakan benar `True` yang bernilai `1`, atau salah `False` yang bernilai `0`      |
| String      | `"Ayo belajar Python"`   | Menyatakan karakter/kalimat bisa berupa huruf angka, dll (diapit tanda `"` atau `'`) |
| Integer     | `25` atau `1209`         | Menyatakan bilangan bulat                                                            |
| Float       | `3.14` atau `0.99`       | Menyatakan bilangan yang mempunyai koma                                              |
| Hexadecimal | `0x9a` atau `0x1d3`      | Menyatakan bilangan dalam format heksa (bilangan berbasis 16)                        |
| Complex     | `1 + 5j `                | Menyatakan pasangan angka real dan imajiner                                          |
| List        | `['xyz', 786, 2.23]`     | Data untaian yang menyimpan berbagai tipe data dan isinya bisa diubah-ubah           |
| Tuple       | `('xyz', 768, 2.23)`     | Data untaian yang menyimpan berbagai tipe data tapi isinya tidak bisa diubah         |
| Set         | `{'apel', 'jeruk'}`      | Kumpulan data unik yang tidak berurutan dan tidak bisa memiliki duplikat             |
| Dictionary  | `{'nama': 'adi','id':2}` | Data untaian yang menyimpan berbagai tipe data berupa pasangan penunjuk dan nilai    |

Untuk mencoba berbagai macam tipe data, silahkan coba script Python dibawah ini.

```python
#tipe data Boolean
print(True)

#tipe data String
print("Ayo belajar Python")
print('Belajar Python Sangat Mudah')

#tipe data Integer
print(20)

#tipe data Float
print(3.14)

#tipe data Hexadecimal
print(0x9a)

#tipe data Complex
print(5j)

#tipe data List
print([1,2,3,4,5])
print(["satu", "dua", "tiga"])

#tipe data Tuple
print((1,2,3,4,5))
print(("satu", "dua", "tiga"))

#tipe data Set
print({1,2,3,4,5})
print({"apel", "jeruk", "mangga"})

#tipe data Dictionary
print({"nama":"Budi", 'umur':20})
#tipe data Dictionary dimasukan ke dalam variabel biodata
biodata = {"nama":"Andi", 'umur':21} #proses inisialisasi variabel biodata
print(biodata) #proses pencetakan variabel biodata yang berisi tipe data Dictionary
print(type(biodata)) #fungsi untuk mengecek jenis tipe data. akan tampil <class 'dict'> yang berarti dict adalah tipe data dictionary
```

---

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/tipe-data-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/komentar-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Komentar Python</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/variabel-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Variabel Python</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
