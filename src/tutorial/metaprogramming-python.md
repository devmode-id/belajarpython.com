---
layout: tutorial.njk
title: Metaprogramming Python
order: 32
permalink: /tutorial/metaprogramming-python/
---

<img src="/img/tutorial/32-metaprogramming.webp" alt="Tutorial Metaprogramming Python - Membuat Class Secara Dinamis" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

Metaprogramming adalah konsep di mana kode program dapat memanipulasi kode lainnya (seperti fungsi atau class) pada saat runtime. Singkatnya: **kode yang menulis kode**.

Di Python, ini adalah topik yang sangat dalam dan kompleks, tetapi sangat *powerful* jika digunakan dengan bijak. Salah satu fitur utama metaprogramming di Python adalah **Metaclass**.

### 1. Apa itu Class?
Sebelum memahami metaclass, ingat bahwa di Python, **Class juga adalah sebuah Objek**. Saat Anda mendefinisikan `class`, Python mengeksekusinya dan membuat sebuah objek class di memori.

```python
class ObjectCreator:
    pass

my_obj = ObjectCreator()
print(my_obj) # Instance dari ObjectCreator

print(ObjectCreator) # ObjectCreator sendiri adalah objek!
```

Karena Class adalah objek, maka:
- Anda bisa menyimpannya dalam variabel.
- Mengirimnya sebagai argumen.
- Menambah atribut ke dalamnya secara dinamis.

### 2. Fungsi `type()` yang Ajaib

Biasanya kita menggunakan `type()` untuk mengecek tipe data.
```python
print(type(1)) # <class 'int'>
```

Tapi, `type()` juga bisa digunakan untuk **membuat class secara dinamis**.

Syntax: `type(name, bases, attrs)`
*   `name`: Nama class (string).
*   `bases`: Tuple parent class (untuk inheritance).
*   `attrs`: Dictionary atribut dan metode class.

```python
# Cara Biasa
class Monyet:
    def makan(self):
        print("Makan pisang")

# Cara Metaprogramming (Sama persis!)
def fungsi_makan(self):
    print("Makan pisang")

MonyetDinamis = type('MonyetDinamis', (), {'makan': fungsi_makan})

m = MonyetDinamis()
m.makan() # Output: Makan pisang
```

### 3. Metaclass

Metaclass adalah "pabrik" yang membuat Class.
- **Objek** adalah instance dari **Class**.
- **Class** adalah instance dari **Metaclass**.

Secara default, metaclass untuk semua kelas di Python adalah `type`.

```python
class MyClass:
    pass

print(type(MyClass)) # <class 'type'>
```

#### Membuat Custom Metaclass
Anda bisa membuat metaclass sendiri untuk mengontrol bagaimana sebuah class dibuat. Ini sering digunakan untuk memvalidasi atribut class atau membuat API yang ketat (seperti di Django Models).

Untuk membuat metaclass, warisi dari `type`. Kita gunakan argumen `metaclass=` di definisi class.

**Contoh: Memaksa semua nama atribut class menjadi Uppercase**

```python
class UpperAttrMeta(type):
    # __new__ dipanggil sebelum __init__
    def __new__(upperattr_metaclass, future_class_name, 
                future_class_parents, future_class_attr):
        
        # Buat dictionary atribut baru dengan kunci uppercase
        uppercase_attr = {}
        for name, val in future_class_attr.items():
            if not name.startswith('__'): # Jangan ubah magic methods
                uppercase_attr[name.upper()] = val
            else:
                uppercase_attr[name] = val
        
        # Panggil type.__new__ untuk membuat class
        return type(future_class_name, future_class_parents, uppercase_attr)

# Menggunakan Metaclass
class Foo(metaclass=UpperAttrMeta):
    bar = 'bip'

print(hasattr(Foo, 'bar')) # False (karena diubah jadi BAR)
print(hasattr(Foo, 'BAR')) # True
print(Foo.BAR) # 'bip'
```

### 4. Kapan Menggunakan Metaclass?
Jawabannya: **Hampir tidak pernah**, kecuali Anda membuat framework.

> "Metaclasses are deeper magic than 99% of users should ever worry about. If you wonder whether you need them, you don't." - Tim Peters (Python Guru)

Namun, memahaminya memberikan wawasan mendalam tentang bagaimana Python bekerja di balik layar.

### Kesimpulan
- **type()** bisa membuat class secara dinamis.
- **Metaclass** adalah class dari sebuah Class.
- Digunakan untuk memodifikasi pembuatan Class secara otomatis.

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/metaprogramming-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/context-managers-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Context Managers</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/multithreading-multiprocessing-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Multithreading</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
