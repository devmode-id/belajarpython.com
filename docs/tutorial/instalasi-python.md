---
layout: tutorial
title: Instalasi Python
order: 2
---

Sebelum Anda menggunakan Python, Anda harus menginstalnya terlebih dahulu di sistem operasi komputer Anda. Saat ini Python memiliki versi stabil terbaru yaitu Python **3.13**. Disini kita akan belajar bahasa pemrograman Python menggunakan versi terbaru tersebut.

Cara menginstal python sangat mudah, ikuti panduan dibawah ini. Dibawah adalah panduan cara instal python di platform Linux, Windows dan Mac OS.

### Linux

1. Buka browser, kunjungi [halaman download Python](https://www.python.org/downloads/source/)
2. Download versi terbaru Python berbentuk file zip untuk Unix/Linux
3. Ekstrak file zip yang baru saja di download
4. Edit file Modules/Setup jika Anda ingin kostumisasi Python
5. Jalankan `./configure` script
6. `make`
7. `make install`

Langkah ini akan menginstal Python di lokasi standar `/usr/local/bin` dan library di `/usr/local/lib/pythonXX` dimana `XX` adalah versi terbaru Python yang anda gunakan.

> Untuk beberapa distro (distribution store) dari sistem operasi linux sudah terinstal Python di dalamnya. Jadi Anda tidak perlu menginstalnya lagi.

### Windows

1. Buka browser, kunjungi [halaman download Python untuk Windows](https://www.python.org/downloads/windows/)
2. Download installer Python 3.13 (pilih versi 64-bit untuk Windows)
3. Buka (klik 2x) file installer python yang baru saja di download
4. Ikuti langkah instalasi sampai selesai

### Mac OS

1. Buka browser, kunjungi [halaman download Python untuk Mac](https://www.python.org/downloads/macos/)
2. Download versi terbaru Python untuk Macintosh
3. Buka file yang baru saja di download
4. Ikuti langkah instalasi sampai selesai

---

> [Edit tutorial ini](https://github.com/belajarpythoncom/belajarpython.com/blob/master/docs/tutorial/instalasi-python.md)

<div class="mt-8 inline justify-between gap-x-4 md:flex">
  <div class="flex justify-center mb-4 md:mb-0">
    <a href="/tutorial/apa-itu-python" class="text-primary-300 hover:text-primary-300 order-2 flex h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-8 text-base hover:no-underline md:order-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Pengertian Python</span>
    </a>
  </div>
  <div class="order-1 flex justify-center">
    <a href="/tutorial/menjalankan-python" class="order-1 flex h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-8 text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:order-2">
      <span class="-mt-0.5">Menjalankan Python</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
