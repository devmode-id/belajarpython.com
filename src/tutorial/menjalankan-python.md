---
layout: tutorial.njk
title: Menjalankan Python
order: 3
permalink: /tutorial/menjalankan-python/
---

<img src="/img/tutorial/3-panduan-cepat-menjalankan-python.webp" alt="Cara Menjalankan Python" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

Untuk menjalankan Python ada banyak cara yang bisa dilakukan. Anda bisa menggunakan _shell_, terminal atau menggunakan [IDE (Integrated Development Environment)](http://www.belajarpython.com/2015/05/integrated-development-environment-ide.html). Di bawah ini adalah langkah-langkah menjalankan Python dengan cara yang paling mudah.

> **Catatan**: Anda juga bisa langsung menjalankan dan mengedit kode Python di setiap cuplikan (_snippet_) yang ada di website ini secara interaktif! Klik tombol "Run" pada setiap blok kode.

### Linux

1. Buka terminal <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>T</kbd>
2. Ketik python maka Anda akan masuk ke Python shell.
3. Tuliskan script Python Anda, contoh: `print("Selamat datang di Python")`. jika sudah tekan tombol <kbd>ENTER</kbd>, dan script Python akan dijalankan/eksekusi.
4. Untuk keluar dari Python shell ketik `exit()`

_atau_

1. Gunakan teks editor, misalnya gedit.
2. Buat file baru, dan ketikan script python Anda, contoh: `print("Selamat datang di Python")`.
3. Save As dengan ekstensi `.py` (contoh: `cetak.py`).
4. Jalankan file dengan menggunakan Terminal.
5. Buka terminal <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>T</kbd>.
6. Masuk ke direktori dimana file Python Anda disimpan (contoh: `cd /Users/admin/Desktop/`).
7. Jalankan script Python dengan menggunakan python diikuti dengan nama file (contoh: `python cetak.py`).
8. Script Python Anda akan dieksekusi/dijalankan.

### Windows

#### Menggunakan Shell

1. Buka IDLE (python shell di windows), Anda bisa mencarinya di tombol <kbd>START</kbd>.
2. Tuliskan script Python Anda, contoh: `print("Selamat datang di Python")`. jika sudah tekan tombol <kbd>ENTER</kbd>, dan script Python akan dijalankan/eksekusi.

![Python Shell Windows](/img/menjalankan-python-windows.png 'Python Shell Windows')

3. Untuk keluar dari Python shell ketik `exit()`

#### Menggunakan Script Editor

1. Untuk menjalankan script yang disimpan dalam file, buka IDLE (python shell di windows), Anda bisa mencarinya di tombol <kbd>START</kbd>.
2. Klik menu `File - New File`
3. Tulis script Python pada window yang muncul, contoh:

```python
print("Belajar Python")
print("di belajarpython.com")
```

4. Simpan script lewat menu `File - Save`
5. Jalankan program dengan klik menu `Run - Run Module`

![Python Editor Windows](/img/menjalankan-python-windows-editor.png 'Python Editor Windows')

### Mac OS

1. Buka terminal.
2. Ketik python maka Anda akan masuk ke Python shell.
3. Tuliskan script Python Anda, contoh: `print("Selamat datang di Python")`. jika sudah tekan tombol <kbd>ENTER</kbd>, dan script Python akan dijalankan/eksekusi.
4. Untuk keluar dari Python shell ketik `exit()`

_atau_

1. Gunakan teks editor.
2. Buat file baru, dan ketikan script python Anda, contoh: `print("Selamat datang di Python")`.
3. Save As dengan ekstensi `.py` (contoh: `cetak.py`).
4. Jalankan file dengan menggunakan Terminal.
5. Buka terminal <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>T</kbd>
6. Masuk ke direktori dimana file Python Anda disimpan (contoh: `cd /Users/admin/Desktop/`).
7. Jalankan script Python dengan menggunakan python diikuti dengan nama file (contoh: `python cetak.py`).
8. Script Python Anda akan dieksekusi/dijalankan.

---

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/menjalankan-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/instalasi-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Instalasi Python</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/hello-world-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Hello World Python</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
