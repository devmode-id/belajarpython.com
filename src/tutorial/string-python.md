---
layout: tutorial.njk
title: String Python
order: 12
permalink: /tutorial/string-python/
---

<img src="/img/tutorial/12-tipe-data-string-python.webp" alt="Tipe Data String Python" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

String adalah jenis yang paling populer di bahasa pemrograman. Kita bisa membuatnya hanya dengan melampirkan karakter dalam tanda kutip. Python memperlakukan tanda kutip tunggal sama dengan tanda kutip ganda. Membuat string semudah memberi nilai pada sebuah variabel.

Dibawah ini adalah contoh sederhana dari sebuah string pada bahasa pemrograman Python.

```python
print("Hello World")
```

### Mengakses Nilai dalam String

Python tidak menggunakan tipe karakter titik koma ; Ini diperlakukan sebagai string dengan panjang satu, sehingga juga dianggap sebagai substring.

Untuk mengakses substring, gunakan tanda kurung siku untuk mengiris beserta indeks atau indeks untuk mendapatkan substring Anda. Sebagai contoh :

```python
name = 'John Doe'
message = "John Doe belajar bahasa python di Belajarpython"

print("name[0]:", name[0])
print("message[1:4]:", message[1:4])
```

Bila kode diatas dieksekusi, maka akan menghasilkan hasil sebagai berikut :

`name[0]: J`
`message[1:4]: ohn `

### Mengupdate String

Anda dapat "memperbarui" string yang ada dengan (kembali) menugaskan variabel ke string lain. Nilai baru dapat dikaitkan dengan nilai sebelumnya atau ke string yang sama sekali berbeda sama sekali. Sebagai contoh

```python
message = 'Hello World'
print ("Updated String :- ", message[:6] + 'Python')
```

Bila kode diatas dieksekusi, maka akan menghasilkan hasil sebagai berikut :

`Updated String :- Hello Python`

### Escape Characters / Karakter Escape Python

Dibawah ini adalah tabel dari daftar karakter escape atau karakter non-printable yang dapat diwakili/ditulis dengan awalan notasi backslash.

| Notasi Backslash | Karakter Hexadecimal | Penjelasan                                                      |
| ---------------- | -------------------- | --------------------------------------------------------------- |
| `\a `            | `0x07 `              | Bell atau alert                                                 |
| `\b `            | `0x08 `              | Backspace                                                       |
| `\cx `           |                      | Control-x                                                       |
| `\C-x `          |                      | Control-x                                                       |
| `\e `            | `0x1b `              | Escape                                                          |
| `\f `            | `0x0c `              | Formfeed                                                        |
| `\M-\C-x `       |                      | Meta-Control-x                                                  |
| `\n `            | `0x0a `              | Newline                                                         |
| `\nnn `          |                      | Octal notation, dimana n berada di range 0.7                    |
| `\r `            | `0x0d `              | Carriage return                                                 |
| `\s `            | `0x20 `              | Space                                                           |
| `\t `            | `0x09 `              | Tab                                                             |
| `\v `            | `0x0b `              | Vertical tab                                                    |
| `\x `            |                      | Character x                                                     |
| `\xnn `          |                      | Notasi Hexadecimal, dimana n berada di range 0.9, a.f, atau A.F |

### Operator Spesial String Python

Asumsikan variabel string adalah 'Belajar' dan variabel b adalah 'Python', lalu dibawah ini adalah operator yang bisa dipakai pada kedua string di variabel tersebut. `a = "Belajar"` `b = "Python"`

Berikut adalah daftar operator spesial string pada Python :

| Operator  | Contoh Penjelasan                                             | Penjelasan                                                                                                                                                                                                                                                                             |
| --------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `+ `      | `a + b `                                                      | akan menghasilkan BelajarPython Concatenation - Menambahkan nilai pada kedua sisi operator                                                                                                                                                                                             |
| `* `      | `a*2`                                                         | akan menghasilkan BelajarBelajar Pengulangan - Membuat string baru, menggabungkan beberapa salinan dari string yang sama                                                                                                                                                               |
| ` []`     | `a[1]`                                                        | akan menghasilkan e Slice - Memberikan karakter dari indeks yang diberikan                                                                                                                                                                                                             |
| `[ : ]`   | `a[1:4]`                                                      | akan menghasilkan ela Range Slice - Memberikan karakter dari kisaran yang diberikan                                                                                                                                                                                                    |
| `in`      | `B in a `                                                     | akan menghasilkan 1 Keanggotaan - Mengembalikan nilai true jika ada karakter dalam string yang diberikan                                                                                                                                                                               |
| ` not in` | ` Z not in a`                                                 | akan menghasilkan 1 Keanggotaan - Mengembalikan nilai true jika karakter tidak ada dalam string yang diberikan                                                                                                                                                                         |
| `r/R `    | `print r'\n' prints \n dan print R'\n'prints \n Raw String -` | Menekan arti aktual karakter Escape. Sintaks untuk string mentah sama persis dengan string biasa kecuali operator string mentah, huruf "r", yang mendahului tanda petik. "R" bisa berupa huruf kecil (r) atau huruf besar (R) dan harus ditempatkan tepat sebelum tanda kutip pertama. |
| `%`       |                                                               | Format - Melakukan format String                                                                                                                                                                                                                                                       |

### Operator Format String Python

Salah satu fitur Python yang paling keren adalah format string operator %. Operator ini unik untuk string dan membuat paket memiliki fungsi dari keluarga printf C () C.
berikut adalah contoh sederhananya : `print ("My name is %s and weight is %d kg!" % ('Zara', 21)) `

Berikut adalah daftar lengkap simbol yang bisa digunakan bersamaan dengan % :

| Operator | Penjelasan                                       |
| -------- | ------------------------------------------------ |
| `%c`     | character                                        |
| `%s`     | Konversi string melalui str () sebelum memformat |
| `%i`     | Dianggap sebagai bilangan bulat desimal          |
| `%d`     | Dianggap sebagai bilangan bulat desimal          |
| `%u`     | Unsigned decimal integer                         |
| `%o`     | Bilangan bulat oktal                             |
| `%x`     | Bilangan bulat heksadesimal (huruf kecil)        |
| `%X`     | Bilangan bulat heksadesimal (huruf besar)        |
| `%e`     | Notasi eksponensial (dengan huruf kecil 'e')     |
| `%E`     | Notasi eksponensial (dengan huruf besar 'E')     |
| `%f`     | Bilangan real floating point                     |
| `%g`     | Yang lebih pendek dari% f dan% e                 |
| `%G`     | Lebih pendek dari% f dan% E                      |

### Triple Quote Python

Python triple quotes digunakan dengan membiarkan string untuk ditulis dalam beberapa baris, termasuk kata kerja NEWLINEs, TABs, dan karakter khusus lainnya.
Sintaks untuk triple quotes terdiri dari tiga tanda kutip tunggal atau ganda ditulis berturut-turut :
Berikut adalah contohnya :

```python
kutipantiga = """this is a long string that is made up of
several lines and non-printable characters such as
TAB ( \t ) and they will show up that way when displayed.
NEWLINEs within the string, whether explicitly given like
this within the brackets [ \n ], or just a NEWLINE within
the variable assignment will also show up.
"""
print (kutipantiga)
```

### String Unicode Python

Pada Python 3, semua string diwakili dalam Unicode. Sedangkan pada Python 2 disimpan secara internal sebagai 8-bit ASCII, maka diperlukanlampiran 'u' untuk membuatnya menjadi Unicode. Tetapi hal ini tidak lagi diperlukan sekarang. :

Metode String Built-in

Python menyertakan metode built-in berikut untuk memanipulasi string

| Metode                                         | Penjelasan                                                                                                                                                                                 |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `capitalize()`                                 | Meng-kapitalkan huruf pertama string                                                                                                                                                       |
| `center(width, fillchar)`                      | Mengembalikan string yang dilapisi dengan fillchar dengan string asli yang dipusatkan pada total width kolom.                                                                              |
| `count(str, beg = 0,end = len(string))`        | Menghitung berapa kali str yang terjadi dalam string atau dalam substring string jika memulai indeks beg dan end index end diberikan.                                                      |
| `decode(encoding = 'UTF-8',errors = 'strict')` | Dekode string menggunakan codec yang terdaftar untuk pengkodean. Encoding default ke pengkodean string default.                                                                            |
| `encode(encoding = 'UTF-8',errors = 'strict')` | Mengembalikan versi string yang dikodekan string; Pada kesalahan, default adalah menaikkan ValueError kecuali jika kesalahan diberikan dengan 'ignore' atau 'replace'.                     |
| `endswith(suffix, beg = 0, end = len(string))` | Menentukan apakah string atau substring string (jika memulai indeks memohon dan mengakhiri akhir indeks diberikan) berakhir dengan akhiran; Mengembalikan nilai true jika benar dan salah. |
| `expandtabs(tabsize = 8)`                      | Memperluas tab dalam string ke banyak ruang; Default ke 8 spasi per tab jika tabsize tidak tersedia.                                                                                       |
| `find(str, beg = 0 end = len(string))`         | Tentukan jika str terjadi dalam string atau dalam substring string jika memulai indeks beg dan end index end diberikan return index jika ditemukan dan -1 sebaliknya.                      |
| `index(str, beg = 0, end = len(string))`       | Sama seperti find (), namun menimbulkan pengecualian jika str tidak ditemukan.                                                                                                             |
| `isalnum()`                                    | Mengembalikan true jika string memiliki minimal 1 karakter dan semua karakternya alfanumerik dan false sebaliknya.                                                                         |
| `isalpha()`                                    | Mengembalikan true jika string memiliki minimal 1 karakter dan semua karakter adalah abjad dan false sebaliknya.                                                                           |
| `isdigit()`                                    | Mengembalikan true jika string hanya berisi digit dan false sebaliknya.                                                                                                                    |
| `islower()`                                    | Mengembalikan true jika string memiliki setidaknya 1 karakter casing dan semua karakter casing dalam huruf kecil dan false sebaliknya.                                                     |
| `isnumeric()`                                  | Mengembalikan true jika string unicode hanya berisi karakter numerik dan false sebaliknya.                                                                                                 |
| `isspace()`                                    | Mengembalikan true jika string hanya berisi karakter spasi dan false sebaliknya.                                                                                                           |
| `istitle()`                                    | Mengembalikan true jika string benar "titlecased" dan false sebaliknya.                                                                                                                    |
| `isupper()`                                    | Mengembalikan true jika string memiliki setidaknya satu karakter casing dan semua karakter casing ada dalam huruf besar dan false sebaliknya.                                              |
| `join(seq)`                                    | Merges (concatenates) representasi string elemen dalam urutan seq menjadi string, dengan string pemisah.                                                                                   |
| `len(string)`                                  | Mengembalikan panjang string                                                                                                                                                               |
| `ljust(width[, fillchar])`                     | Mengembalikan string berlapis ruang dengan string asli dibiarkan dibenarkan ke kolom lebar total.                                                                                          |
| `lower()`                                      | Mengonversi semua huruf besar dalam bentuk string menjadi huruf kecil.                                                                                                                     |
| `lstrip()`                                     | Menghapus semua spasi utama dalam string.                                                                                                                                                  |
| `maketrans()`                                  | Mengembalikan tabel terjemahan untuk digunakan dalam fungsi terjemahan.                                                                                                                    |
| `max(str)`                                     | Mengembalikan karakter alfabetik dari string str.                                                                                                                                          |
| `min(str)`                                     | Mengembalikan min karakter abjad dari string str.                                                                                                                                          |
| `replace(old, new [, max])`                    | Menggantikan semua kemunculan lama dalam string dengan kejadian baru atau paling maksimal jika max diberikan.                                                                              |
| `rfind(str, beg = 0,end = len(string))`        | Sama seperti find (), tapi cari mundur dalam string.                                                                                                                                       |
| `rindex( str, beg = 0, end = len(string))`     | Sama seperti index (), tapi cari mundur dalam string.                                                                                                                                      |
| `rjust(width,[, fillchar])`                    | Mengembalikan string berlapis ruang dengan senar asli benar-dibenarkan untuk total kolom lebar.                                                                                            |
| `rstrip()`                                     | Menghapus semua spasi spasi string.                                                                                                                                                        |
| `split(str="", num=string.count(str))`         | Membagi string sesuai dengan pemisah str (ruang jika tidak disediakan) dan mengembalikan daftar substring; Terpecah menjadi paling banyak substring jika diberikan.                        |
| `splitlines( num=string.count('\n')) `         | Membagi string sama sekali (atau num) NEWLINEs dan mengembalikan daftar setiap baris dengan NEWLINEs dihapus.                                                                              |
| `startswith(str, beg=0,end=len(string)`        | Determines if string or a substring of string (if starting index beg and ending index end are given) starts with substring str; returns true if so and false otherwise.                    |
| `strip([chars])`                               | Lakukan kedua lstrip () dan rstrip () pada string                                                                                                                                          |
| `swapcase()`                                   | Kasus invers untuk semua huruf dalam string.                                                                                                                                               |
| `title()`                                      | Mengembalikan versi string "titlecased", yaitu, semua kata diawali dengan huruf besar dan sisanya huruf kecil.                                                                             |
| `translate(table, deletechars="") `            | Menerjemahkan string sesuai dengan tabel terjemahan str (256 karakter), menghapus string del.                                                                                              |
| `upper()`                                      | Mengonversi huruf kecil dalam bentuk string ke huruf besar.                                                                                                                                |
| `zfill (width)`                                | Mengembalikan string asli yang tertinggal dengan angka nol ke total karakter lebar; Dimaksudkan untuk angka, zfill () mempertahankan tanda apapun yang diberikan (kurang satu nol).        |
| `isdecimal()`                                  | Mengembalikan nilai true jika string unicode hanya berisi karakter desimal dan false sebaliknya.                                                                                           |

---

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/string-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>  

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/number-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Number Python</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/list-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">List Python</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
