---
layout: article.njk
title: Membaca dan Menulis File dengan Python
category: tutorial
image: /img/membaca-menulis-file-python.jpg
permalink: /2019/10/membaca-menulis-file-python/
---

Saat Anda ingin menyimpan data, Anda bisa menggunakan [variabel](https://belajarpython.com/tutorial/variabel-python). Tapi "masa hidup" variabel hanyalah selama program tersebut berjalan — data variabel dihapus saat program berhenti.

Bagaimana jika Anda ingin menyimpan sesuatu selama jangka yang lebih panjang, sehingga bahkan setelah Anda mematikan komputer Anda, datanya tidak terhapus? Sehingga Anda bisa mengakses lagi datanya lain hari?

Anda bisa menggunakan *files* (atau, sebagaimana sebagian orang menerjemahkannya, berkas).

Berbeda dengan variabel yang datanya disimpan di memori utama (*main memory*), *files* (atau berkas) berurusan dengan memori sekunder (*secondary memory*). Data tidak hanya bakal tetap disimpan setelah komputer dimatikan dan bisa diakses lagi setelah komputer kembali dinyalakan, tetapi juga bisa disalin ke USB dan dipindahkan ke komputer lain.

## Text files
File ada berbagai jenis, contohnya file biner (*binary file*), tapi tutorial ini bakal membicarakan file berisi teks (*text files*).

Jika sebuah string terdiri dari rentetan karakter, maka sebuah text file terdiri dari rentetan baris (*line*). Baris-baris tersebut dipisahkan oleh sebuah *special character*, `\n`, yang disebut *newline*.

Jika Anda menge-`print` sebuah variabel string yang mengandung karakter newline `\n`, Python bakal menginterpretasikan karakter tersebut sebagai sebuah perintah untuk menge-`print` sisa string setelahnya di baris baru.

Sebagai contoh, `print('Selamat\npagi')` bakal menghasilkan output:
```
Selamat
pagi
```
Sedangkan `print('selam\nat pagi')` bakal menghasilkan:
```
selam
at pagi
```

## Membuka file
Untuk membuka sebuah file, perintah bisa diberikan agar Python berkomunikasi dengan sistem operasi komputer dan meminta filenya.

Dalam contoh berikut, file `helloworld.txt` berada di folder yang sama dengan program Python tersebut.

`fread = open('helloworld.txt')`

Sistem operasi bakal kemudian mencari file yang dimaksud menurut alamat file yang telah diberikan, yaitu `helloworld.txt`.

Jika file-nya ada dan Anda memiliki izin (*permission*) untuk membuka file tersebut, maka sistem komputer bakal mengembalikan apa yang namanya adalah sebuah *file handle*, yang dalam contoh di atas disimpan di dalam variabel `fread`.

Jika file yang diminta tidak ada, akan terjadi *error*.

```
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IOError: [Errno 2] No such file or directory: 'tidakada.txt'
```

Karena `open()` tidak membaca langsung seluruh file, `open()` selalu memerlukan waktu yang sama tidak peduli besar file yang dibuka.

Menggunakan [input()](https://belajarpython.com/tutorial/file-io-python), Anda bisa memberikan pengguna program kemampuan untuk memasukkan nama file sendiri.

```
fname = input('File yang ingin dibuka: ')
fread = open(fname)
```

Tapi bagaimana jika pengguna meminta file yang tidak ada? 

```
Traceback (most recent call last):
  File "q.py", line 2, in <module>
    fread = open(fname)
FileNotFoundError: [Errno 2] No such file or directory: 'aa'
```

Anda bisa menggunakan [exception](https://belajarpython.com/tutorial/exception-python) agar program tidak langsung error dan berhenti saat pengguna memasukkan input tidak valid.

```
fname = input('File yang ingin dibuka: ')
try:
    fread = open(fname)
except:
    print('File yang diminta tidak ada.')
```

## Membaca file yang sudah ada

*File handle* tidak berisi data file. Jika Anda menjalankan `print(fread)`, Anda bakal mendapatkan `<open file 'helloworld.txt', mode 'r' at 0x7f20c47dd540>` atau variasinya sebagai output.

Tapi Anda bisa menggunakannya untuk membaca file baris demi baris dengan bantuan [loop](https://belajarpython.com/tutorial/loop-python) `for`.

Sebagai contoh, program di bawah ini menghitung jumlah baris (termasuk baris kosong) yang ada di dalam file [chairil-anwar-aku.txt](https://gist.github.com/amuritna/90ddfa39e707db74cf6ad8faae2beed5).

```
fread = open('chairil-anwar-aku.txt')

count = 0
for line in fread:
    count += 1

print(count)
```

Outputnya adalah `19`.

Anda bisa mengecek isi tiap baris dengan memperlakukan `line` sebagai sebuah variabel berisi string yang memiliki sebuah karakter `\n` di ujung belakangnya.

Program di atas bisa dimodifikasi sehingga yang dihitung hanyalah baris yang *tidak* kosong (`.strip()` menghapus semua karakter spasi dan `\n` di kiri-kanan string):

```
fread = open('chairil-anwar-aku.txt')

count = 0
for line in fread:
    if len(line.strip()) > 0 :
        count += 1

print(count)
```

Outputnya adalah `13`.

## Membuat dan menulis file baru
Untuk membuat sebuah file, gunakan `open()`, tapi kali ini dengan dengan `'w'` sebagai parameter kedua.

`fwrite = open('filebaru.txt', 'w')`

Jika file tersebut belum ada, maka bakal dibuat sebuah file baru. Jika sudah ada, maka file yang lama bakal dihapus.

Metode `.write()` menambahkan data ke ujung akhir file.

`fwrite.write('Baris baru!\n')`

Sebagai contoh, program berikut bakal menghasilkan file [output-angka-segitiga.txt](https://gist.github.com/amuritna/b03a2d4532fd8fd254945036ea299e6b).

```
fwrite = open('output-angka-segitiga.txt', 'w')

n = 1
for i in range(2, 50):
    n += i
    fwrite.write(str(n) + '\n')

fwrite.close()
```

Pastikan untuk menambahkan `.close()` ke akhir setelah selesai menulis ke file.

## File sebagai input/output

File sangat membantu jika Anda mesti berurusan dengan data input atau output dalam jumlah yang banyak dan repot jika mesti di-`input()` atau di-`print()` satu-persatu.

Sebagai contoh terakhir, program berikut menghasilkan [output_daftar-provinsi.txt](https://gist.github.com/amuritna/f1217628865dad591431f13d9626aa2a) jika diberikan input [daftar-provinsi.txt](https://gist.github.com/amuritna/c00f6c34e80d19381761d85bc0dcd0d9).

```
while True:
    fname = input('Nama file input: ')

    try:
        fread = open(fname)
        break
    except:
        print('Tidak dapat menemukan file yang dimaksud, tolong cek lagi.\nNama file input: ')

nama = []
for line in fread:
    nama.append(line.strip())

nama = sorted(nama)

fwrite = open('output_' + fname, 'w')

for item in nama:
    fwrite.write(item + '\n')

fwrite.close()
```

---
> *penulis: Emmanuella Rumanti [https://github.com/amuritna](https://github.com/amuritna)*
