---
layout: tutorial.njk
title: Virtual Environments (venv) Python
order: 27
permalink: /tutorial/virtual-environment-python/
---

<img src="/img/tutorial/27-tutorial-virtual-environtment-python.webp" alt="Tutorial Virtual Environment Python" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

Virtual Environment adalah sebuah ruang kerja terisolasi yang memungkinkan Anda menginstal pustaka (libraries) khusus untuk satu proyek tanpa mengganggu proyek lainnya. Bayangkan ini seperti memiliki beberapa kotak peralatan yang berbeda untuk setiap jenis pekerjaan rumah yang berbeda.

Bagi pemula, Virtual Environment sangat penting karena seringkali satu proyek membutuhkan versi paket yang berbeda dengan proyek lainnya. Tanpa lingkungan virtual, Anda berisiko merusak program yang sudah berjalan karena menginstal paket baru. Dengan menggunakan virtual environment, sistem komputer Anda tetap bersih dan setiap proyek hanya memiliki akses ke peralatan yang benar-benar membutuhkannya.



Ada beberapa cara untuk membuat Virtual Environment di Python. Mari kita bahas yang paling umum dan yang terbaru.

### Menggunakan Modul Bawaan: venv

Python sudah dilengkapi dengan modul `venv`. Ini adalah cara paling umum dan standar.

#### 1. Cara Membuat venv

Buka terminal atau command prompt di direktori proyek Anda, lalu jalankan:

```bash
# Windows
python -m venv myenv

# macOS / Linux
python3 -m venv myenv
```
`myenv` adalah nama folder yang akan berisi lingkungan virtual Anda.

#### 2. Cara Mengaktifkan venv

Setelah dibuat, Anda harus mengaktifkannya:

```bash
# Windows
myenv\Scripts\activate

# macOS / Linux
source myenv/bin/activate
```
Setelah aktif, Anda akan melihat nama `(myenv)` di depan prompt terminal Anda.

#### 3. Cara Menonaktifkan

Untuk keluar dari lingkungan virtual, cukup ketik:
```bash
deactivate
```

---

### Opsi Modern: uv dari Astral

Jika Anda ingin sesuatu yang jauh lebih cepat dan modern, **uv** adalah pilihan terbaik saat ini. `uv` adalah pengelola paket dan lingkungan Python yang ditulis dalam bahasa Rust, yang kecepatannya 10x hingga 100x lebih cepat daripada alat tradisional.

#### 1. Instalasi uv
Jika Anda belum punya, instal terlebih dahulu (menggunakan pip atau installer resmi):
```bash
pip install uv
```

#### 2. Membuat dan Menggunakan Environment dengan uv
`uv` membuat pengelolaan environment menjadi sangat otomatis:

```bash
# Membuat environment
uv venv

# Mengaktifkan (sama seperti venv biasa)
.venv\Scripts\activate # Windows
source .venv/bin/activate # macOS/Linux

# Menginstal paket dengan sangat cepat
uv pip install requests
```

Salah satu kelebihan `uv` adalah kemampuannya mengelola versi Python itu sendiri tanpa perlu menginstal manual dari website Python.

### Pentingnya di Dunia Kerja

Di dunia kerja profesional, Virtual Environment bukan lagi sebuah pilihan, melainkan sebuah standar wajib. Saat bekerja dalam tim besar atau mengelola sistem di server *cloud*, Anda harus memastikan bahwa aplikasi yang Anda buat memiliki daftar dependensi yang jelas dan tidak bentrok dengan aplikasi lain. Ini memastikan prinsip *reproducibility*, di mana rekan kerja Anda bisa menjalankan kode yang sama persis dengan hasil yang sama di komputer mereka.

Selain itu, Virtual Environment memudahkan proses *deployment*. Saat aplikasi siap dikirim ke server produksi, Anda cukup memberikan daftar paket (biasanya dalam file `requirements.txt`) yang ada di dalam lingkungan virtual tersebut. Tanpa alat ini, memindahkan kode dari komputer pengembang ke server akan menjadi mimpi buruk teknis yang penuh dengan error akibat perbedaan versi library.

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/virtual-environment-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/json-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">JSON Data Python</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/pip-package-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Pip &amp; Package</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
