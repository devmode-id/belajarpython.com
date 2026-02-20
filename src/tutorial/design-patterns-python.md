---
layout: tutorial.njk
title: Design Patterns Python
order: 35
permalink: /tutorial/design-patterns-python/
---

<img src="/img/tutorial/35-belajar-design-patterns-python.webp" alt="Tutorial Design Patterns Python - Singleton Factory Observer Strategy" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

Design Patterns adalah solusi umum yang dapat digunakan ulang untuk masalah yang sering muncul dalam perancangan perangkat lunak.  Ini bukan kode jadi, melainkan *template* atau panduan cara menyelesaikan masalah.

Di Python, Design Patterns seringkali lebih mudah diimplementasikan (atau bahkan sudah ada secara built-in) dibandingkan bahasa lain seperti Java atau C++.

### 1. Singleton Pattern

Tujuannya: Memastikan sebuah class hanya memiliki satu instance.
Contoh penggunaan: Koneksi database, konfigurasi aplikasi.

```python
class Singleton:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            print("Membuat instance baru...")
            cls._instance = super(Singleton, cls).__new__(cls)
        return cls._instance

s1 = Singleton()
s2 = Singleton()

print(s1 is s2) # True
```

Alternatif Pythonic menggunakan Decorator:

```python
def singleton(cls):
    instances = {}
    def get_instance(*args, **kwargs):
        if cls not in instances:
            instances[cls] = cls(*args, **kwargs)
        return instances[cls]
    return get_instance

@singleton
class Database:
    pass
```

### 2. Factory Pattern

Tujuannya: Membuat objek tanpa menentukan kelas logika yang tepat dari objek yang akan dibuat.
Contoh penggunaan: Plugin system, serialisasi data berbagai format (JSON, XML).

```python
class Dog:
    def speak(self):
        return "Woof!"

class Cat:
    def speak(self):
        return "Meow!"

def get_pet(pet="dog"):
    """The Factory Method"""
    pets = dict(dog=Dog(), cat=Cat())
    return pets[pet]

d = get_pet("dog")
print(d.speak())

c = get_pet("cat")
print(c.speak())
```

### 3. Observer Pattern (Pub-Sub)

Tujuannya: Mendefinisikan ketergantungan one-to-many, sehingga ketika satu objek berubah, semua dependensinya diberitahu.
Contoh penggunaan: Event handling, sistem notifikasi.

```python
class Subject:
    def __init__(self):
        self._observers = []

    def attach(self, observer):
        self._observers.append(observer)

    def notify(self, message):
        for observer in self._observers:
            observer.update(message)

class Observer:
    def update(self, message):
        raise NotImplementedError

class EmailNotifier(Observer):
    def update(self, message):
        print(f"Mengirim Email: {message}")

class SMSNotifier(Observer):
    def update(self, message):
        print(f"Mengirim SMS: {message}")

# Usage
subject = Subject()
subject.attach(EmailNotifier())
subject.attach(SMSNotifier())

subject.notify("Server Down!")
# Output:
# Mengirim Email: Server Down!
# Mengirim SMS: Server Down!
```

### 4. Strategy Pattern

Tujuannya: Mendefinisikan keluarga algoritma, membungkus masing-masing, dan membuatnya dapat dipertukarkan.
Contoh penggunaan: Sorting strategy, Diskon belanja, Payment gateway.

```python
from typing import Callable

class PaymentProcessor:
    def __init__(self, strategy: Callable[[int], None]):
        self.strategy = strategy
    
    def pay(self, amount):
        self.strategy(amount)

# Strategies
def pay_by_cc(amount):
    print(f"Membayar {amount} dengan Credit Card")

def pay_by_paypal(amount):
    print(f"Membayar {amount} dengan PayPal")

# Runtime selection
cart = PaymentProcessor(pay_by_cc)
cart.pay(100)

cart = PaymentProcessor(pay_by_paypal)
cart.pay(100)
```

Dalam Python, karena fungsi adalah first-class object, Strategy Pattern seringkali cukup dengan *passing functions* seperti di atas, tanpa perlu membuat class interface yang rumit.

### 5. Decorator Pattern

Seperti yang sudah dibahas di tutorial sebelumnya, pola ini memungkinkan penambahan perilaku ke objek secara dinamis. Python memiliki dukungan *built-in* untuk pola ini dengan sintaks `@`.

### Kesimpulan
- **Singleton**: Satu instance saja.
- **Factory**: Pembuatan objek dinamis.
- **Observer**: Notifikasi event ke banyak subscriber.
- **Strategy**: Menukar algoritma saat runtime.
- Pelajari pola ini agar kode Anda lebih modular dan *maintainable*, tapi ingat: jangan over-engineer!

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/design-patterns-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/async-await-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Async Await</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/unit-testing-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Unit Testing</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
