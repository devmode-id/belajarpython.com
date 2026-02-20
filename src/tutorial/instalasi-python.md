---
layout: tutorial.njk
title: Instalasi Python
order: 2
permalink: /tutorial/instalasi-python/
---

<img src="/img/tutorial/2-panduan-cepat-instalasi-python-windows-linux-mac.webp" alt="Panduan Instalasi Python" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

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

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/instalasi-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/apa-itu-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Pengertian Python</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/menjalankan-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Menjalankan Python</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
