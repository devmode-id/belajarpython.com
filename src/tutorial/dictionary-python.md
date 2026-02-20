---
layout: tutorial.njk
title: Dictionary Python
order: 15
permalink: /tutorial/dictionary-python/
---

<img src="/img/tutorial/15-tipe-data-dictionary-python.webp" alt="Tipe Data Dictionary Python" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

Dictionary Python berbeda dengan List ataupun Tuple. Karena setiap urutanya berisi key dan value. Setiap key dipisahkan dari value-nya oleh titik dua (:), item dipisahkan oleh koma, dan semuanya tertutup dalam kurung kurawal. Dictionary kosong tanpa barang ditulis hanya dengan dua kurung kurawal, seperti ini: {}.

Nilai kamus bisa berupa tipe apa pun, namun key harus berupa tipe data yang tidak berubah seperti string, angka, atau tupel.

### Akses Nilai Dalam Dictionary Python

Untuk mengakses elemen Dictionary, Anda dapat menggunakan tanda kurung siku yang sudah dikenal bersama dengan key untuk mendapatkan nilainya. Berikut adalah contoh sederhananya :

```python
#Contoh cara membuat Dictionary pada Python

dict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}
print ("dict['Name']: ", dict['Name'])
print ("dict['Age']: ", dict['Age'])
```

### Update Nilai Dalam Dictionary Python

Anda dapat memperbarui Dictionary dengan menambahkan entri baru atau pasangan nilai kunci, memodifikasi entri yang ada, atau menghapus entri yang ada seperti ditunjukkan pada contoh sederhana yang diberikan di bawah ini.

```python
#Update dictionary python

dict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}
dict['Age'] = 8; # Mengubah entri yang sudah ada
dict['School'] = "DPS School" # Menambah entri baru

print ("dict['Age']: ", dict['Age'])
print ("dict['School']: ", dict['School'])
```

### Hapus Elemen Dictionary Python

Anda dapat menghapus elemen Dictionary individual atau menghapus keseluruhan isi Dictionary. Anda juga dapat menghapus seluruh Dictionary dalam satu operasi.

Untuk menghapus seluruh Dictionary secara eksplisit, cukup gunakan del statement. Berikut adalah contoh sederhana :

```python
#Contoh cara menghapus pada Dictionary Python

dict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}

del dict['Name'] # hapus entri dengan key 'Name'
dict.clear() # hapus semua entri di dict
del dict # hapus dictionary yang sudah ada

print ("dict['Age']: ", dict['Age'])
print ("dict['School']: ", dict['School'])
```

### Fungsi Build-in Pada Dictionary Python

Python menyertakan fungsi built-in sebagai berikut :

| Fungsi Python        | Penjelasan                                                                                                                        |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ` cmp(dict1, dict2)` | Membandingkan unsur keduanya.                                                                                                     |
| `len(dict)`          | Memberikan panjang total Dictionary. Ini sama dengan jumlah item dalam Dictionary.                                                |
| `str(dict) `         | Menghasilkan representasi string yang dapat dicetak dari Dictionary                                                               |
| `type(variable)`     | Mengembalikan tipe variabel yang lulus. Jika variabel yang dilewatkan adalah Dictionary, maka akan mengembalikan tipe Dictionary. |

### Method Build-in Pada Dictionary Python

Python menyertakan method built-in sebagai berikut :

| Method Python                         | Penjelasan                                                                                |
| ------------------------------------- | ----------------------------------------------------------------------------------------- |
| `dict.clear() `                       | Menghapus semua elemen Dictionary                                                         |
| `dict.copy() `                        | Mengembalikan salinan Dictionary                                                          |
| `dict.fromkeys() `                    | Buat Dictionary baru dengan kunci dari seq dan nilai yang disetel ke nilai.               |
| `dict.get(key, default=None) `        | For key, nilai pengembalian atau default jika tombol tidak ada dalam Dictionary           |
| `dict.has_key(key) `                  | Mengembalikan true jika key dalam Dictionary, false sebaliknya                            |
| `dict.items() `                       | Mengembalikan daftar dari pasangan tuple dictionary (key, value)                          |
| `dict.keys() `                        | Mengembalikan daftar key dictionary                                                       |
| ` dict.setdefault(key, default=None)` | Mirip dengan get (), tapi akan mengatur dict [key] = default jika kunci belum ada di dict |
| `dict.update(dict2) `                 | Menambahkan pasangan kunci kata kunci dict2 ke dict                                       |
| `dict.values() `                      | Mengembalikan daftar nilai dictionary                                                     |

---

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/dictionary-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/tuple-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Tuple Python</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/tanggal-waktu-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Tanggal &amp; Waktu Python</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
