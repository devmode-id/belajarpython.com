---
layout: tutorial.njk
title: Kondisi Python
order: 9
permalink: /tutorial/kondisi-if-else-python/
---

<img src="/img/tutorial/9-kondisi-if-else-python.webp" alt="Kondisi If Else Python" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

### Kondisi If

Pengambilan keputusan (kondisi if) digunakan untuk mengantisipasi kondisi yang terjadi saat jalanya program dan menentukan tindakan apa yang akan diambil sesuai dengan kondisi.

Pada python ada beberapa statement/kondisi diantaranya adalah `if`, `else` dan `elif` Kondisi `if` digunakan untuk mengeksekusi kode jika kondisi bernilai benar `True`.

Jika kondisi bernilai salah `False` maka statement/kondisi `if` tidak akan di-eksekusi.

Dibawah ini adalah contoh penggunaan kondisi if pada Python

```python
#Kondisi if adalah kondisi yang akan dieksekusi oleh program jika bernilai benar atau TRUE

nilai = 9

#jika kondisi benar/TRUE maka program akan mengeksekusi perintah dibawahnya
if(nilai > 7):
    print("Sembilan Lebih Besar Dari Angka Tujuh") # Kondisi Benar, Dieksekusi

#jika kondisi salah/FALSE maka program tidak akan mengeksekusi perintah dibawahnya
if(nilai > 10):
    print("Sembilan Lebih Besar Dari Angka Sepuluh") # Kondisi Salah, Maka tidak tereksekusi
```

Dari contoh diatas, jika program dijalankan maka akan mencetak string `"Sembilan Lebih Besar Dari Angka Tujuh"` sebanyak 1 kali yaitu pada if pertama. Di if kedua statement bernilai salah, jadi perintah `print("Sembilan Lebih Besar Dari Angka Sepuluh")` tidak akan dieksekusi.

### Kondisi If Else

Pengambilan keputusan (kondisi if else) tidak hanya digunakan untuk menentukan tindakan apa yang akan diambil sesuai dengan kondisi, tetapi juga digunakan untuk menentukan tindakan apa yang akan diambil/dijalankan jika kondisi tidak sesuai.

Pada python ada beberapa statement/kondisi diantaranya adalah if, else dan elif Kondisi if digunakan untuk mengeksekusi kode jika kondisi bernilai benar.

Kondisi if else adalah kondisi dimana jika pernyataan benar `True` maka kode dalam if akan dieksekusi, tetapi jika bernilai salah `False` maka akan mengeksekusi kode di dalam else.

Dibawah ini adalah contoh penggunaan kondisi if else pada Python

```python
# Kondisi if else adalah jika kondisi bernilai TRUE maka akan dieksekusi pada if,
# tetapi jika bernilai FALSE maka akan dieksekusi kode pada else

nilai = 3
# Jika pernyataan pada if bernilai TRUE maka if akan dieksekusi,
# tetapi jika FALSE kode pada else yang akan dieksekusi.
if(nilai > 7):
    print("Selamat Anda Lulus")
else:
    print("Maaf Anda Tidak Lulus")
```

Pada contoh diatas, jika program dijalankan maka akan mencetak string `"Maaf Anda Tidak Lulus"` karena pernyataan pada if bernilai `False`

### Kondisi Elif

Pengambilan keputusan (kondisi if elif) merupakan lanjutan/percabangan logika dari "kondisi if". Dengan elif kita bisa membuat kode program yang akan menyeleksi beberapa kemungkinan yang bisa terjadi. Hampir sama dengan kondisi "else", bedanya kondisi "elif" bisa banyak dan tidak hanya satu.

Dibawah ini adalah contoh penggunaan kondisi elif pada Python

```python
#Contoh penggunaan kondisi elif

hari_ini = "Minggu"

if(hari_ini == "Senin"):
    print("Saya akan kuliah")
elif(hari_ini == "Selasa"):
    print("Saya akan kuliah")
elif(hari_ini == "Rabu"):
    print("Saya akan kuliah")
elif(hari_ini == "Kamis"):
    print("Saya akan kuliah")
elif(hari_ini == "Jumat"):
    print("Saya akan kuliah")
elif(hari_ini == "Sabtu"):
    print("Saya akan kuliah")
elif(hari_ini == "Minggu"):
    print("Saya akan libur")
```

Pada contoh diatas, jika program dijalankan maka akan mencetak string `"Saya akan libur"`.

### Match Case (Python 3.10+)

Mulai Python 3.10, tersedia fitur **Structural Pattern Matching** dengan `match-case` yang mirip dengan `switch-case` di bahasa pemrograman lain. Ini sangat berguna untuk menggantikan rangkaian `elif` yang panjang.

```python
# Contoh penggunaan match-case (Python 3.10+)

hari_ini = "Minggu"

match hari_ini:
    case "Senin" | "Selasa" | "Rabu" | "Kamis" | "Jumat":
        print("Saya akan kuliah")
    case "Sabtu":
        print("Saya akan mengerjakan tugas")
    case "Minggu":
        print("Saya akan libur")
    case _:
        print("Hari tidak valid")
```

Pattern matching juga bisa digunakan untuk mencocokkan struktur data yang lebih kompleks:

```python
# Match dengan struktur data
def proses_command(command):
    match command.split():
        case ["quit"]:
            print("Keluar dari program")
        case ["hello", nama]:
            print(f"Halo, {nama}!")
        case ["tambah", x, y]:
            print(f"Hasil: {int(x) + int(y)}")
        case _:
            print("Command tidak dikenal")

proses_command("hello Budi")  # Output: Halo, Budi!
proses_command("tambah 5 3")  # Output: Hasil: 8
```

### Ternary Operator (Kondisi Satu Baris)

Python juga mendukung penulisan kondisi dalam satu baris yang disebut ternary operator atau conditional expression:

```python
# Ternary operator
umur = 20
status = "Dewasa" if umur >= 18 else "Anak-anak"
print(status)  # Output: Dewasa

# Contoh lain
nilai = 85
hasil = "Lulus" if nilai >= 60 else "Tidak Lulus"
print(hasil)  # Output: Lulus
```

---

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/kondisi-if-else-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/operator-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Operator Python</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/loop-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Loop Python</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
