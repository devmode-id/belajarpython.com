---
layout: tutorial
title: Exception Python
order: 20
---

Python menyediakan dua fitur yang sangat penting untuk menangani kesalahan tak terduga dalam program Python Anda dan menambahkan kemampuan debugging di dalamnya.

- Exception Handling
- Assertions
  Exception adalah sebuah peristiwa, yang terjadi selama pelaksanaan program yang mengganggu aliran normal instruksi program. Secara umum, ketika skrip Python menemukan situasi yang tidak dapat diatasi, hal itu menimbulkan pengecualian. Exception adalah objek Python yang mewakili kesalahan.

Ketika skrip Python menimbulkan Exception, ia harus menangani Exception begitu saja sehingga berhenti dan berhenti.

### Standard Exceptions

| Nama                  | Penjelasan                                                                                                                                                 |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Exception`           | Kelas dasar untuk semua pengecualian / exception                                                                                                           |
| `StopIteration `      | Dibesarkan ketika metode (iterator) berikutnya dari iterator tidak mengarah ke objek apa pun.                                                              |
| `SystemExit `         | Dibesarkan oleh fungsi sys.exit ().                                                                                                                        |
| `StandardError `      | Kelas dasar untuk semua pengecualian built-in kecuali StopIteration dan SystemExit.                                                                        |
| `ArithmeticError `    | Kelas dasar untuk semua kesalahan yang terjadi untuk perhitungan numerik.                                                                                  |
| `OverflowError `      | Dibesarkan saat perhitungan melebihi batas maksimum untuk tipe numerik.                                                                                    |
| `FloatingPointError`  | Dibesarkan saat perhitungan floating point gagal.                                                                                                          |
| `ZeroDivisonError `   | Dibesarkan saat pembagian atau modulo nol dilakukan untuk semua tipe numerik.                                                                              |
| `AssertionError`      | Dibesarkan jika terjadi kegagalan pernyataan Assert.                                                                                                       |
| `AttributeError`      | Dibesarkan jika terjadi kegagalan referensi atribut atau penugasan.                                                                                        |
| `EOFError`            | Dibesarkan bila tidak ada input dari fungsi raw_input () atau input () dan akhir file tercapai.                                                            |
| `ImportError `        | Dibesarkan saat sebuah pernyataan impor gagal.                                                                                                             |
| `KeyboardInterrupt `  | Dibesarkan saat pengguna menyela eksekusi program, biasanya dengan menekan Ctrl + c.                                                                       |
| `LookupError`         | Kelas dasar untuk semua kesalahan pencarian.                                                                                                               |
| `IndexError `         | Dibesarkan saat sebuah indeks tidak ditemukan secara berurutan.                                                                                            |
| `KeyError `           | Dibesarkan saat kunci yang ditentukan tidak ditemukan dalam kamus.                                                                                         |
| `NameError`           | Dibesarkan saat pengenal tidak ditemukan di namespace lokal atau global.                                                                                   |
| `UnboundLocalError`   | Dibesarkan saat mencoba mengakses variabel lokal dalam suatu fungsi atau metode namun tidak ada nilai yang ditugaskan padanya.                             |
| `EnvironmentError`    | Kelas dasar untuk semua pengecualian yang terjadi di luar lingkungan Python.                                                                               |
| `IOError`             | Dibesarkan saat operasi input / output gagal, seperti pernyataan cetak atau fungsi open () saat mencoba membuka file yang tidak ada.                       |
| `OSError`             | Dibangkitkan untuk kesalahan terkait sistem operasi.                                                                                                       |
| `SyntaxError`         | Dibesarkan saat ada kesalahan dengan sintaks Python.                                                                                                       |
| `IndentationError`    | Dibesarkan saat indentasi tidak ditentukan dengan benar.                                                                                                   |
| `SystemError`         | Dibesarkan saat penafsir menemukan masalah internal, namun bila kesalahan ini ditemui juru bahasa Python tidak keluar.                                     |
| `SystemExit `         | Dibesarkan saat juru bahasa Python berhenti dengan menggunakan fungsi sys.exit (). Jika tidak ditangani dalam kode, menyebabkan penafsir untuk keluar.     |
| `TypeError`           | Dibesarkan saat operasi atau fungsi dicoba yang tidak valid untuk tipe data yang ditentukan.                                                               |
| `ValueError`          | Dibesarkan ketika fungsi bawaan untuk tipe data memiliki jenis argumen yang valid, namun argumen tersebut memiliki nilai yang tidak valid yang ditentukan. |
| `RuntimeError`        | Dibesarkan saat kesalahan yang dihasilkan tidak termasuk dalam kategori apa pun.                                                                           |
| `NotImplementedError` | Dibesarkan ketika metode abstrak yang perlu diimplementasikan di kelas warisan sebenarnya tidak dilaksanakan.                                              |

---

```
Contoh Penggunaan:
try:
  angka = 10
  print("Angka nya adalah" + angka)
except TypeError as error:
  ...
```

> [Edit tutorial ini](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/tutorial/exception-python.md)

<div class="mt-8 inline justify-between gap-x-4 md:flex">
  <div class="flex justify-center mb-4 md:mb-0">
    <a href="/tutorial/file-io-python" class="text-primary-300 hover:text-primary-300 order-2 flex h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-8 text-base hover:no-underline md:order-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">File I/O Python</span>
    </a>
  </div>
  <div class="order-1 flex justify-center">
    <a href="/tutorial/object-class-python" class="order-1 flex h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-8 text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:order-2">
      <span class="-mt-0.5">Object &amp; Class Python</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
