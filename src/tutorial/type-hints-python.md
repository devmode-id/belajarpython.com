---
layout: tutorial.njk
title: Type Hints Python
order: 29
permalink: /tutorial/type-hints-python/
---

Type Hints (anotasi tipe) adalah fitur Python yang memungkinkan Anda menentukan tipe data yang diharapkan untuk variabel, parameter fungsi, dan nilai kembalian. Diperkenalkan di Python 3.5, type hints menjadi semakin penting untuk pengembangan Python modern.

### Mengapa Menggunakan Type Hints?

Type hints memberikan banyak keuntungan:

- **Dokumentasi yang lebih baik** - Kode menjadi self-documenting
- **Error detection** - IDE dan tools dapat mendeteksi bug sebelum runtime
- **Autocomplete lebih akurat** - IDE bisa memberikan saran yang lebih baik
- **Maintainability** - Memudahkan pemahaman kode oleh developer lain
- **Refactoring lebih aman** - Perubahan kode lebih mudah divalidasi

**Penting:** Type hints di Python bersifat opsional dan tidak mempengaruhi runtime. Python tetap dynamically typed.

### Sintaks Dasar

```python
# Anotasi variabel
nama: str = "Budi"
umur: int = 25
tinggi: float = 175.5
aktif: bool = True

# Anotasi parameter dan return type fungsi
def sapa(nama: str) -> str:
    return f"Halo, {nama}!"

def tambah(a: int, b: int) -> int:
    return a + b

# Fungsi tanpa return value
def cetak_info(pesan: str) -> None:
    print(pesan)
```

### Tipe Data Dasar

```python
# Tipe primitif
x: int = 10
y: float = 3.14
z: str = "hello"
flag: bool = True
data: bytes = b"hello"

# None type
result: None = None
```

### Collection Types

Untuk tipe koleksi, gunakan modul `typing` (Python < 3.9) atau built-in types (Python 3.9+):

```python
# Python 3.9+ (recommended)
angka: list[int] = [1, 2, 3]
nama_umur: dict[str, int] = {"Andi": 25, "Budi": 30}
koordinat: tuple[float, float] = (3.14, 2.71)
unik: set[str] = {"apel", "jeruk"}

# Python 3.5 - 3.8 (gunakan typing)
from typing import List, Dict, Tuple, Set

angka: List[int] = [1, 2, 3]
nama_umur: Dict[str, int] = {"Andi": 25}
koordinat: Tuple[float, float] = (3.14, 2.71)
unik: Set[str] = {"apel", "jeruk"}
```

### Optional dan Union

Untuk nilai yang bisa None atau multiple types:

```python
from typing import Optional, Union

# Optional - bisa None atau tipe tertentu
def cari_user(id: int) -> Optional[str]:
    if id == 1:
        return "Andi"
    return None

# Union - bisa salah satu dari beberapa tipe
def proses(data: Union[str, int]) -> str:
    return str(data)

# Python 3.10+ syntax (recommended)
def cari_user(id: int) -> str | None:
    if id == 1:
        return "Andi"
    return None

def proses(data: str | int) -> str:
    return str(data)
```

### Callable (Fungsi sebagai Parameter)

```python
from typing import Callable

# Fungsi yang menerima fungsi lain sebagai parameter
def apply_twice(func: Callable[[int], int], value: int) -> int:
    return func(func(value))

def double(x: int) -> int:
    return x * 2

result = apply_twice(double, 5)  # 20

# Callable dengan multiple arguments
def operasi(func: Callable[[int, int], int], a: int, b: int) -> int:
    return func(a, b)
```

### Any Type

Ketika tipe bisa apa saja:

```python
from typing import Any

def proses_apapun(data: Any) -> Any:
    return data
```

### Type Aliases

Buat alias untuk tipe yang kompleks:

```python
from typing import TypeAlias

# Type alias
UserId: TypeAlias = int
UserData: TypeAlias = dict[str, str | int]

def get_user(user_id: UserId) -> UserData:
    return {"nama": "Andi", "umur": 25}

# Untuk tipe yang lebih kompleks
Matrix: TypeAlias = list[list[float]]

def transpose(matrix: Matrix) -> Matrix:
    return [[row[i] for row in matrix] for i in range(len(matrix[0]))]
```

### Generic Types

Untuk fungsi yang bekerja dengan berbagai tipe:

```python
from typing import TypeVar

T = TypeVar('T')

def first_element(items: list[T]) -> T:
    return items[0]

# Bisa digunakan dengan list tipe apapun
angka = first_element([1, 2, 3])        # int
kata = first_element(["a", "b", "c"])   # str
```

### Literal Types

Untuk nilai yang harus spesifik:

```python
from typing import Literal

def set_status(status: Literal["active", "inactive", "pending"]) -> None:
    print(f"Status: {status}")

set_status("active")    # OK
set_status("unknown")   # Type error (terdeteksi oleh type checker)

# Berguna untuk opsi terbatas
Mode = Literal["read", "write", "append"]

def open_file(path: str, mode: Mode) -> None:
    pass
```

### TypedDict

Untuk dictionary dengan struktur yang tetap:

```python
from typing import TypedDict

class User(TypedDict):
    nama: str
    umur: int
    email: str

def create_user(data: User) -> None:
    print(f"Creating user: {data['nama']}")

# Type checker akan memvalidasi struktur
user: User = {
    "nama": "Andi",
    "umur": 25,
    "email": "andi@example.com"
}
```

### Anotasi untuk Class

```python
class Mahasiswa:
    nama: str
    nim: str
    ipk: float
    
    def __init__(self, nama: str, nim: str) -> None:
        self.nama = nama
        self.nim = nim
        self.ipk = 0.0
    
    def set_ipk(self, ipk: float) -> None:
        self.ipk = ipk
    
    def get_info(self) -> str:
        return f"{self.nama} ({self.nim}): IPK {self.ipk}"
```

### Dataclasses dengan Type Hints

```python
from dataclasses import dataclass

@dataclass
class Produk:
    nama: str
    harga: float
    stok: int = 0
    
    def total_nilai(self) -> float:
        return self.harga * self.stok

produk = Produk("Laptop", 15000000, 10)
print(produk.total_nilai())  # 150000000
```

### Tools untuk Type Checking

Type hints tidak diperiksa saat runtime. Gunakan tools berikut:

#### 1. mypy

```bash
pip install mypy
mypy script.py
```

#### 2. pyright (VS Code Pylance)

Sudah terintegrasi dengan VS Code melalui extension Pylance.

#### 3. pytype (Google)

```bash
pip install pytype
pytype script.py
```

### Contoh Lengkap

```python
from dataclasses import dataclass
from typing import Optional

@dataclass
class Alamat:
    jalan: str
    kota: str
    kode_pos: str

@dataclass  
class Karyawan:
    nama: str
    email: str
    gaji: float
    alamat: Optional[Alamat] = None
    
    def info_lengkap(self) -> str:
        info = f"{self.nama} - {self.email}"
        if self.alamat:
            info += f" ({self.alamat.kota})"
        return info

def hitung_total_gaji(karyawan_list: list[Karyawan]) -> float:
    return sum(k.gaji for k in karyawan_list)

def cari_karyawan(
    karyawan_list: list[Karyawan], 
    nama: str
) -> Karyawan | None:
    for k in karyawan_list:
        if k.nama.lower() == nama.lower():
            return k
    return None

# Penggunaan
alamat = Alamat("Jl. Sudirman", "Jakarta", "12190")
k1 = Karyawan("Andi", "andi@email.com", 10000000, alamat)
k2 = Karyawan("Budi", "budi@email.com", 12000000)

semua = [k1, k2]
print(hitung_total_gaji(semua))  # 22000000
```

---

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/type-hints-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/decorator-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Decorator Python</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/async-await-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Async/Await Python</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
