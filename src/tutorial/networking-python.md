---
layout: tutorial.njk
title: Networking Python
order: 23
permalink: /tutorial/networking-python/
---

<img src="/img/tutorial/23-tutorial-networking-python.webp" alt="Tutorial Networking Python" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

Python menyediakan dua tingkat akses ke layanan jaringan. Pada tingkat rendah, Anda dapat mengakses dukungan soket dasar dalam sistem operasi yang mendasarinya, yang memungkinkan Anda untuk mengimplementasikan klien dan server untuk kedua protokol berorientasi koneksi dan tanpa sambungan.

Python juga memiliki pustaka yang menyediakan akses tingkat lebih tinggi ke protokol jaringan tingkat aplikasi tertentu, seperti FTP, HTTP, dan seterusnya.

Bab ini memberi Anda pemahaman tentang konsep paling terkenal dalam Networking - Socket Programming.

### Apa itu Socket?

Soket adalah titik akhir dari saluran komunikasi dua arah. Soket dapat berkomunikasi dalam suatu proses, antara proses pada mesin yang sama, atau antara proses di berbagai benua.

Soket dapat diimplementasikan melalui sejumlah jenis saluran yang berbeda: soket domain Unix, TCP, UDP, dan sebagainya. Pustaka socket menyediakan kelas khusus untuk menangani transportasi umum serta antarmuka umum untuk menangani sisanya.

### Modul Socket

Untuk membuat soket, Anda harus menggunakan fungsi socket.socket () yang tersedia dalam modul soket, yang memiliki sintaks umum

`s = socket.socket (socket_family, socket_type, protocol=0)`

### Server Socket Method

| Method     | Penjelasan                                                                                |
| ---------- | ----------------------------------------------------------------------------------------- |
| s.bind()   | This method binds address (hostname, port number pair) to socket.                         |
| s.listen() | This method sets up and start TCP listener.                                               |
| s.accept() | This passively accept TCP client connection, waiting until connection arrives (blocking). |

### Client Socket Method

| Method      | Penjelasan                                            |
| ----------- | ----------------------------------------------------- |
| s.connect() | This method actively initiates TCP server connection. |

## General Method Socket

| Method               | Penjelasan                        |
| -------------------- | --------------------------------- |
| s.recv()             | This method receives TCP message  |
| s.send()             | This method transmits TCP message |
| s.recvfrom()         | This method receives UDP message  |
| s.sendto()           | This method transmits UDP message |
| s.close()            | This method closes socket         |
| socket.gethostname() | Returns the hostname.             |

```python
#!/usr/bin/python # This is server.py file

import socket # Import socket module

s = socket.socket() # Create a socket object
host = socket.gethostname() # Get local machine name
port = 12345 # Reserve a port for your service.
s.bind((host, port)) # Bind to the port

s.listen(5) # Now wait for client connection.
while True:
c, addr = s.accept() # Establish connection with client.
print 'Got connection from', addr
c.send('Thank you for connecting')
c.close() # Close the connection
```

### Server Sederhana

Untuk menulis server Internet, kami menggunakan fungsi soket yang tersedia di modul soket untuk membuat objek soket. Objek soket kemudian digunakan untuk memanggil fungsi lain untuk menyiapkan server soket.

Sekarang sebut `bind(hostname,port)` berfungsi untuk menentukan port untuk layanan Anda pada host yang diberikan.

Selanjutnya, panggil metode penerimaan objek yang dikembalikan. Metode ini menunggu sampai klien terhubung ke port yang Anda tentukan, dan kemudian mengembalikan objek koneksi yang mewakili koneksi ke klien itu.

### Client Sederhana

Mari kita menulis program klien yang sangat sederhana yang membuka koneksi ke port yang diberikan 12345 dan host yang diberikan. Ini sangat sederhana untuk membuat klien soket menggunakan fungsi modul soket Python.

Socket.connect (hosname, port) membuka koneksi TCP ke hostname pada port. Setelah Anda memiliki soket terbuka, Anda dapat membaca darinya seperti objek IO apa pun. Setelah selesai, jangan lupa untuk menutupnya, karena Anda akan menutup file.

Kode berikut adalah klien yang sangat sederhana yang terhubung ke host dan port yang diberikan, membaca data yang tersedia dari soket, dan kemudian keluar

```python
#!/usr/bin/python # This is client.py file

import socket # Import socket module

s = socket.socket() # Create a socket object
host = socket.gethostname() # Get local machine name
port = 12345 # Reserve a port for your service.

s.connect((host, port))
print s.recv(1024)
s.close # Close the socket when done
```

Sekarang jalankan server.py ini di latar belakang dan kemudian jalankan di atas client.py untuk melihat hasilnya.

##### Jalankan server.

`python server.py &`

Setelah server berjalan lanjutkan

##### Jalankan client:

`python client.py`

Hasilnya akan seperti ini :
`Got connection from ('127.0.0.1', 48437)`
`Thank you for connecting`

### Modul Internet pada Python

Berikut tabel daftar beberapa modul penting dalam pemrograman Jaringan / Internet Python.

| Protocol | Common function    | Port No | Python module              |
| -------- | ------------------ | ------- | -------------------------- |
| HTTP     | Web pages          | 80      | httplib, urllib, xmlrpclib |
| NNTP     | Usenet news        | 119     | nntplib                    |
| FTP      | Transfer file      | 20      | ftplib, urllib             |
| SMTP     | Mengirim email     | 25      | smtplib                    |
| POP3     | Fetching email     | 110     | poplib                     |
| IMAP4    | Fetching email     | 143     | imaplib                    |
| Telnet   | Command lines      | 23      | telnetlib                  |
| Gopher   | Document transfers | 70      | gopherlib, urllib          |

---

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/networking-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/akses-database-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Akses Database Python</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/pengembangan-web-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Pengembangan Web Python</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
