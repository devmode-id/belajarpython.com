---
layout: article.njk
title: "Dasar Cybersecurity dengan Python: Scanning Port Sederhana"
date: 2026-01-03
category: SECURITY
image: /img/belajar-dasar-cybersecurity-hacking-keamanan-website-port.webp
permalink: /2026/01/dasar-cybersecurity-python-port-scanning/
---

Python tidak hanya populer untuk Data Science dan Web Development, tetapi juga merupakan bahasa yang sangat *powerful* di dunia **Cybersecurity** dan **Ethical Hacking**. Salah satu teknik dasar dalam keamanan jaringan yang wajib diketahui adalah **Port Scanning**.

Dalam artikel ini, kita akan belajar cara membuat *Port Scanner* sederhana menggunakan Python. Alat ini berguna untuk memeriksa port mana saja yang terbuka pada sebuah server atau komputer target.

## Apa itu Port Scanning?

Port scanning adalah proses memeriksa port pada alamat IP tertentu untuk mengetahui layanan apa yang sedang berjalan. 
*   **Administrator Jaringan** menggunakannya untuk memastikan keamanan dan menutup port yang tidak perlu.
*   **Penyerang (Hacker)** menggunakannya untuk mencari celah masuk (vulnerability) pada sistem target.

> **Peringatan Keras:** Gunakan ilmu ini hanya untuk tujuan edukasi, riset keamanan, atau pada jaringan milik Anda sendiri. Melakukan scanning pada jaringan orang lain tanpa izin adalah tindakan ilegal.

## Persiapan

Kita tidak perlu menginstall library tambahan karena kita akan menggunakan library bawaan Python bernama `socket`. Library ini menyediakan antarmuka untuk komunikasi jaringan tingkat rendah.

## Membuat Port Scanner Sederhana

Buatlah file baru bernama `port_scanner.py` dan tulis kode berikut:

```python
import socket
import sys
from datetime import datetime

# Mendefinisikan target
# Bisa menggunakan IP (misal: 127.0.0.1) atau domain (misal: scanme.nmap.org)
target_input = "127.0.0.1" 

# Menerjemahkan hostname ke IPv4
try:
    target = socket.gethostbyname(target_input)
except socket.gaierror:
    print("Hostname tidak dapat diselesaikan.")
    sys.exit()

print("-" * 50)
print(f"Sedang memindai target: {target}")
print(f"Waktu mulai: {datetime.now()}")
print("-" * 50)

try:
    # Melakukan scan pada port 1 sampai 100 (bisa diubah range-nya)
    for port in range(1, 101):
        # Membuat socket object
        # AF_INET: IPv4
        # SOCK_STREAM: TCP
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        
        # Set timeout agar tidak menunggu terlalu lama jika port tertutup
        s.settimeout(0.5) 
        
        # Mencoba koneksi ke port
        # connect_ex mengembalikan 0 jika berhasil, dan error code jika gagal
        result = s.connect_ex((target, port))
        
        if result == 0:
            print(f"Port {port}: TERBUKA")
            
        # Menutup koneksi
        s.close()
        
except KeyboardInterrupt:
    print("\nScan dihentikan oleh pengguna.")
    sys.exit()
except socket.error:
    print("\nTidak dapat terhubung ke server.")
    sys.exit()

print("-" * 50)
print("Scan selesai.")
```

## Penjelasan Kode

1.  **Import Module**:
    *   `socket`: Inti dari komunikasi jaringan.
    *   `sys`: Untuk menangani input sistem dan exit.
    *   `datetime`: Untuk mencatat waktu scan.

2.  **Menentukan Target**:
    *   `socket.gethostbyname()` mengubah nama domain menjadi alamat IP yang bisa dipahami komputer.

3.  **Looping Port**:
    *   Kita menggunakan `range(1, 101)` untuk memindai port 1 hingga 100. Anda bisa memperluasnya hingga 65535 (total port TCP), namun akan memakan waktu lebih lama.

4.  **Socket Object**:
    *   `socket.AF_INET` menentukan kita menggunakan IPv4.
    *   `socket.SOCK_STREAM` menentukan kita menggunakan protokol TCP.

5.  **Koneksi**:
    *   `s.connect_ex((target, port))` adalah metode yang mencoba melakukan koneksi. Berbeda dengan `connect()` yang akan *raise error* jika gagal, `connect_ex()` mengembalikan angka. Angka **0** berarti sukses (port terbuka).

6.  **Error Handling**:
    *   `KeyboardInterrupt`: Menangani jika pengguna menekan `Ctrl+C` untuk menghentikan program.
    *   `socket.error`: Menangani jika terjadi masalah koneksi umum.

## Mengapa Port Terbuka Berbahaya?

Port yang terbuka ibarat pintu rumah yang tidak terkunci. Jika di balik port tersebut berjalan layanan yang memiliki celah keamanan (bug) atau konfigurasi yang lemah (misal password default), penyerang bisa masuk dan mengambil alih sistem.

Sebagai praktisi keamanan siber, tugas Anda adalah menemukan port-port ini dan memastikan layanan yang berjalan di belakangnya aman, atau menutupnya jika tidak diperlukan.

## Langkah Selanjutnya

Ini adalah teknik *Reconnaissance* (pengumpulan informasi) yang sangat dasar. Untuk pengembangan lebih lanjut, Anda bisa mempelajari:
*   **Nmap**: Tools scanning paling populer di dunia (bisa dijalankan lewat Python dengan `python-nmap`).
*   **Banner Grabbing**: Mengambil informasi versi aplikasi yang berjalan di port tertentu.
*   **Multithreading**: Mempercepat proses scanning dengan menjalankan banyak scan sekaligus.
