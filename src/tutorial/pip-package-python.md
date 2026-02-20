---
layout: tutorial.njk
title: Pip & Package Management Python
order: 28
permalink: /tutorial/pip-package-python/
---

<img src="/img/tutorial/28-cara-pip-di-python.webp" alt="Cara Pip di Python" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

Pip adalah pengelola paket (package manager) standar untuk Python. Bayangkan Pip seperti "Toko Aplikasi" (App Store atau Play Store) khusus untuk bahasa pemrograman Python, di mana Anda bisa mengunduh dan menginstal ribuan modul tambahan yang dibuat oleh komunitas Python di seluruh dunia.

Bagi pemula, Pip adalah pintu gerbang menuju kehebatan Python. Misalnya, jika Anda ingin membuat grafik yang indah, melakukan analisis data yang rumit, atau bahkan membuat situs web, Anda tidak perlu menulis semuanya dari nol. Anda cukup menggunakan Pip untuk menginstal "paket" yang sudah jadi, dan Anda bisa langsung fokus membangun aplikasi Anda.

### Apa itu Package?

Package atau Paket berisi semua file yang Anda butuhkan untuk suatu modul. Modul adalah pustaka kode Python yang dapat Anda sertakan dalam proyek Anda.

### Memeriksa apakah Pip sudah terinstal

Pip biasanya sudah terinstal bersamaan dengan Python. Untuk memeriksa apakah pip sudah terinstal, jalankan perintah berikut di terminal:

```bash
pip --version
```

### Menginstal Paket

Menginstal paket sangatlah mudah. Cukup gunakan perintah `install` diikuti nama paketnya. Contoh kita akan menginstal paket populer bernama `requests`:

```bash
pip install requests
```

### Menggunakan Paket

Setelah paket terinstal, Anda dapat menggunakannya di kode Python Anda dengan perintah `import`:

```python
import requests

x = requests.get('https://belajarpython.com')
print(x.status_code)
```

### Melihat Daftar Paket yang Terinstal

Gunakan perintah `list` untuk melihat semua paket yang sudah ada di sistem atau environment Anda:

```bash
pip list
```

### Menghapus Paket

Jika Anda tidak lagi membutuhkan suatu paket, Anda dapat menghapusnya:

```bash
pip uninstall requests
```

### Mencari Paket di PyPI

Semua paket Python dikelola secara terpusat di situs [PyPI (Python Package Index)](https://pypi.org/). Anda bisa mencari ribuan paket bermanfaat di sana sebelum menginstalnya menggunakan Pip.

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/pip-package-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/virtual-environment-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Virtual Environment</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/decorator-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Decorators & Closures</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
