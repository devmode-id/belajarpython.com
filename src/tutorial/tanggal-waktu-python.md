---
layout: tutorial.njk
title: Tanggal & Waktu Python
order: 16
permalink: /tutorial/tanggal-waktu-python/
---

<img src="/img/tutorial/16-tipe-data-tanggal-waktu-time-python.webp" alt="Tanggal dan Waktu (Date Time) Python" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

Program Python dapat menangani tanggal dan waktu dengan beberapa cara. Konversi antara format tanggal adalah tugas umum untuk komputer. Modul waktu dan kalender Python melacak tanggal dan waktu.

### Apa itu Tick?

Interval waktu adalah bilangan floating-point dalam satuan detik. Instansi tertentu dalam waktu dinyatakan dalam hitungan detik sejak pukul 12:00 1 Januari 1970.

Dibawah ini adalah contoh penggunanaya.

```python
import time  # Digunakan untuk meng-import modul time

ticks = time.time()
print("Berjalan sejak 12:00am, January 1, 1970:", ticks)

```

### Apa itu TimeTuple Python?

Banyak fungsi waktu Python menangani waktu sebagai tuple dari 9 nomor, seperti yang terdapat pada tabel di bawah ini.

| Index | Field             | Value                                     |
| ----- | ----------------- | ----------------------------------------- |
| 0     | 4-digit year      | 2008                                      |
| 1     | Bulan             | 1 sampai 12                               |
| 2     | Hari              | 1 sampai 31                               |
| 3     | Jam               | 0 sampai 23                               |
| 4     | Menit             | 0 sampai 59                               |
| 5     | Detik             | 0 sampai 61                               |
| 6     | Hari dalam Minggu | 0 sampai 6 (0 adalah Senin)               |
| 7     | Hari dalam Bulan  | 1 sampai 366                              |
| 8     | Daylight savings  | -1, 0, 1, -1 means library determines DST |

Tuple di atas setara dengan struktur struct_time. Struktur ini memiliki atribut berikut

| Index | Atribut     | Value                                     |
| ----- | ----------- | ----------------------------------------- |
| 0     | `tm_year`   | 2008                                      |
| 1     | `tm_mon `   | 1 sampai 12                               |
| 2     | `tm_mday`   | 1 sampai 31                               |
| 3     | `tm_hour`   | 0 sampai 23                               |
| 4     | `tm_min `   | 0 sampai 59                               |
| 5     | `tm_sec `   | 0 sampai 61                               |
| 6     | `tm_wday`   | 0 sampai 6 (0 adalah Senin)               |
| 7     | `tm_yday`   | 1 sampai 366                              |
| 8     | ` tm_isdst` | -1, 0, 1, -1 means library determines DST |

### Mendapatkan Waktu Saat Ini

Untuk menerjemahkan waktu instan dari satu detik sejak nilai floating-point ke waktu menjadi tupel waktu, lewati nilai floating-point ke fungsi (mis., Localtime) yang mengembalikan waktu tupel dengan semua sembilan item valid.

```python
import time

localtime = time.localtime(time.time())
print("Waktu lokal saat ini:", localtime)

```

### Mendapatkan Waktu yang berformat

Anda dapat memformat kapan saja sesuai kebutuhan Anda, namun metode sederhana untuk mendapatkan waktu dalam format yang mudah dibaca adalah asctime ()

```python
import time

localtime = time.localtime(time.time())
print("Waktu lokal saat ini:", localtime)

```

### Mendapatkan kalender dalam sebulan

Modul kalender memberikan berbagai macam metode untuk dimainkan dengan kalender tahunan dan bulanan. Di sini, kami mencetak kalender untuk bulan tertentu (Jan 2008)

```python
import calendar

cal = calendar.month(2008, 1)
print("Dibawah ini adalah kalender:")
print(cal)

```

### Modul time pada Python

Ada modul waktu populer yang tersedia dengan Python yang menyediakan fungsi untuk bekerja dengan waktu dan untuk mengkonversi antara representasi. Dibawah ini adalah tabel dari modul time pada python yang ada.

| Fungsi Python                                   | Penjelasan                                                                                                                                                                                                                                                |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `time.altzone`                                  | Diimbangi zona waktu DST lokal, dalam detik di sebelah barat UTC, jika seseorang didefinisikan. Ini negatif jika zona waktu DST lokal berada di sebelah timur UTC (seperti di Eropa Barat, termasuk Inggris). Gunakan saja ini jika siang hari tidak nol. |
| `time.asctime([tupletime])`                     | Menerima time-tupel dan mengembalikan string 24-karakter yang dapat dibaca seperti 'Tue Dec 11 18:07:14 2008'.                                                                                                                                            |
| `time.clock() `                                 | Mengembalikan waktu CPU saat ini sebagai jumlah floating-point detik. Untuk mengukur biaya komputasi dari berbagai pendekatan, nilai time.clock lebih bermanfaat daripada time.time ().                                                                   |
| `time.ctime([secs]) `                           | Seperti asctime (localtime (detik)) dan tanpa argumen seperti asctime ()                                                                                                                                                                                  |
| `time.gmtime([secs]) `                          | Menerima instan yang diungkapkan dalam hitungan detik sejak zaman dan mengembalikan waktu tuple t dengan waktu UTC. Catatan: t.tm_isdst selalu 0                                                                                                          |
| `time.localtime([secs]) `                       | Menerima instan yang dinyatakan dalam hitungan detik sejak zaman dan mengembalikan waktu tuple t dengan waktu setempat (t.tm_isdst adalah 0 atau 1, tergantung pada apakah DST berlaku seketika oleh peraturan lokal).                                    |
| `time.mktime(tupletime) `                       | Menerima instan dinyatakan sebagai time-tuple di waktu setempat dan mengembalikan nilai floating-point dengan instan yang dinyatakan dalam hitungan detik sejak zaman.                                                                                    |
| `time.sleep(secs) `                             | Menangguhkan panggilan untuk beberapa detik.                                                                                                                                                                                                              |
| `time.strftime(fmt[,tupletime])`                | Menerima instan dinyatakan sebagai tupel waktu di waktu lokal dan mengembalikan sebuah string yang mewakili instan seperti yang ditentukan oleh string fmt.                                                                                               |
| `time.strptime(str,fmt='%a %b %d %H:%M:%S %Y')` | Parses str sesuai dengan format string fmt dan mengembalikan format instant-tuple.                                                                                                                                                                        |
| `time.time() `                                  | Mengembalikan waktu saat ini secara instan, jumlah detik mengambang beberapa detik sejak zaman itu.                                                                                                                                                       |
| `time.tzset() `                                 | Mengatur ulang aturan konversi waktu yang digunakan oleh rutinitas perpustakaan. Variabel lingkungan TZ menentukan bagaimana hal ini dilakukan.                                                                                                           |

Ada dua atribut penting yang tersedia dengan modul waktu:

| Method Python    | Penjelasan                                                                                                                                          |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| ` time.timezone` | Atribut time.timezone adalah offset dalam detik zona waktu lokal (tanpa DST) dari UTC (> 0 di Amerika; <= 0 di sebagian besar Eropa, Asia, Afrika). |
| `time.tzname `   | Atribut time.tzname adalah sepasang string yang bergantung pada lokal, yang merupakan nama zona waktu lokal tanpa dan dengan DST.                   |

### Modul calendar pada Python

Modul kalender menyimpan fungsi yang berhubungan dengan kalender, termasuk fungsi untuk mencetak kalender teks untuk bulan atau tahun tertentu.

Secara default, kalender mengambil hari Senin sebagai hari pertama dalam minggu dan minggu sebagai yang terakhir. Untuk mengubah ini, fungsi call calendar.setfirstweekday ().

Berikut adalah daftar fungsi yang tersedia dengan modul kalender:

| Fungsi Python                          | Penjelasan                                                                                                                                                                                                                                                            |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `calendar.calendar(year,w=2,l=1,c=6)`  | Mengembalikan string multiline dengan kalender untuk tahun tahun yang diformat menjadi tiga kolom yang dipisahkan oleh ruang c. W adalah lebar karakter setiap tanggal; Setiap baris memiliki panjang 21 _ w + 18 + 2 _ c. L adalah jumlah baris untuk setiap minggu. |
| `calendar.firstweekday( ) `            | Mengembalikan pengaturan saat ini untuk hari kerja yang dimulai setiap minggu. Secara default, saat kalender pertama kali diimpor, ini adalah 0, yang berarti Senin.                                                                                                  |
| `calendar.isleap(year) `               | Pengembalian True jika tahun adalah tahun kabisat; Jika tidak, False                                                                                                                                                                                                  |
| `calendar.leapdays(y1,y2) `            | Mengembalikan jumlah lompatan hari dalam tahun-tahun dalam rentang (y1, y2).                                                                                                                                                                                          |
| `calendar.month(year,month,w=2,l=1) `  | Mengembalikan string multiline dengan kalender untuk bulan bulan tahun, satu baris per minggu ditambah dua baris header. W adalah lebar karakter setiap tanggal; Setiap baris memiliki panjang 7 \* w + 6. L adalah jumlah baris untuk setiap minggu.                 |
| `calendar.monthcalendar(year,month)`   | Mengembalikan daftar daftar int. Setiap sublist menunjukkan seminggu. Hari di luar bulan bulan tahun diatur ke 0; Hari dalam bulan ditetapkan ke hari ke bulan, 1 dan ke atas.                                                                                        |
| `calendar.monthrange(year,month)`      | Mengembalikan dua bilangan bulat. Yang pertama adalah kode hari kerja untuk hari pertama bulan bulan di tahun; Yang kedua adalah jumlah hari dalam sebulan. Kode hari kerja adalah 0 (Senin) sampai 6 (Minggu); Angka bulan adalah 1 sampai 12.                       |
| `calendar.prcal(year,w=2,l=1,c=6)`     | Seperti kalender cetak.calendar (tahun, w, l, c).                                                                                                                                                                                                                     |
| `calendar.prmonth(year,month,w=2,l=1)` | Seperti kalender cetak. Bulan (tahun, bulan, w, l).                                                                                                                                                                                                                   |
| `calendar.setfirstweekday(weekday)`    | Mengatur hari pertama setiap minggu sampai hari kerja kode hari kerja. Kode hari kerja adalah 0 (Senin) sampai 6 (Minggu).                                                                                                                                            |
| `calendar.timegm(tupletime) `          | Kebalikan dari time.gmtime: menerima waktu instan dalam bentuk tupel waktu dan mengembalikan detik yang sama seperti jumlah floating-point dalam hitungan detik sejak zaman.                                                                                          |
| `calendar.weekday(year,month,day)`     | Mengembalikan kode hari kerja untuk tanggal yang ditentukan. Kode hari kerja adalah 0 (Senin) sampai 6 (Minggu); Bulan adalah 1 (Januari) sampai 12 (Desember).                                                                                                       |

---

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/tanggal-waktu-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/dictionary-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Dictionary Python</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/fungsi-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Fungsi Python</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
