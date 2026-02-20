---
layout: tutorial.njk
title: Unit Testing Python
order: 36
permalink: /tutorial/unit-testing-python/
---

<img src="/img/tutorial/36-panduan-unit-testing-python.webp" alt="Panduan Unit Testing dan Mocking Python - unittest dan pytest" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

Unit Testing adalah metode pengujian perangkat lunak di mana unit-unit individu dari kode sumber (seperti fungsi, metode, atau class) diuji untuk menentukan apakah mereka berfungsi dengan benar.

"Tapi kode saya sudah jalan!" 
Mungkin jalan sekarang, tapi bagaimana jika 6 bulan lagi Anda mengubah satu baris kode dan merusak fitur lainnya? Unit test adalah jaring pengaman Anda.

Di Python, ada dua framework testing utama: `unittest` (bawaan) dan `pytest` (pihak ketiga, tapi sangat populer).

### 1. Menggunakan `unittest` (Bawaan)

`unittest` terinspirasi dari JUnit (Java). Ia menggunakan pendekatan berbasis Class.

Misalkan kita punya fungsi sederhana:
```python
# hitung.py
def tambah(x, y):
    return x + y

def bagi(x, y):
    if y == 0:
        raise ValueError("Tidak bisa bagi nol")
    return x / y
```

Kita buat file test-nya:
```python
# test_hitung.py
import unittest
from hitung import tambah, bagi

class TestHitung(unittest.TestCase):
    
    def test_tambah(self):
        self.assertEqual(tambah(3, 4), 7)
        self.assertEqual(tambah(-1, 1), 0)
        
    def test_bagi(self):
        self.assertEqual(bagi(10, 2), 5)
        
        # Test exception
        with self.assertRaises(ValueError):
            bagi(10, 0)

if __name__ == '__main__':
    unittest.main()
```

Jalankan dengan: `python test_hitung.py`

### 2. Menggunakan `pytest` (Rekomendasi Modern)

`pytest` jauh lebih ringkas, powerful, dan "Pythonic". Ia menggunakan fungsi biasa (bukan class) dan keyword `assert` standar.

Instalasi:
```bash
pip install pytest
```

Menulis test dengan pytest:
```python
# test_hitung_pytest.py
import pytest
from hitung import tambah, bagi

def test_tambah():
    assert tambah(3, 4) == 7
    assert tambah(-1, 1) == 0

def test_bagi():
    assert bagi(10, 2) == 5

def test_bagi_nol():
    with pytest.raises(ValueError):
        bagi(10, 0)
```

Jalankan dengan cukup mengetik: `pytest` di terminal. Pytest akan otomatis mencari file yang diawali `test_`.

### 3. Konsep Mocking

Mocking adalah teknik mengganti bagian dari sistem yang sedang diuji dengan objek tiruan (mock objects). Ini berguna ketika kode Anda bergantung pada sistem luar seperti API, Database, atau File System.

Contoh: Kita ingin menguji fungsi yang melakukan request API, tapi kita tidak ingin benar-benar melakukan request (karena lama dan butuh internet).

Menggunakan `unittest.mock`:

```python
from unittest.mock import Mock, patch
import requests

# Fungsi yang mau diuji
def ambil_data_user(url):
    resp = requests.get(url)
    if resp.status_code == 200:
        return resp.json()
    return None

# Test dengan Mock
@patch('requests.get')
def test_ambil_data_user(mock_get):
    # Setup mock
    mock_response = Mock()
    mock_response.status_code = 200
    mock_response.json.return_value = {"id": 1, "name": "Budi"}
    
    # Masukkan mock response ke mock_get
    mock_get.return_value = mock_response
    
    # Jalankan fungsi
    hasil = ambil_data_user("http://fakeurl.com")
    
    # Assert
    assert hasil["name"] == "Budi"
    # Pastikan requests.get benar-benar dipanggil dengan URL yang benar
    mock_get.assert_called_with("http://fakeurl.com")
```

### 4. Code Coverage

Seberapa banyak kode Anda yang sudah dites? Coverage tool bisa memberitahu Anda baris mana yang belum tersentuh oleh test.

Install:
```bash
pip install pytest-cov
```

Jalankan:
```bash
pytest --cov=my_project
```

### Kesimpulan
- **Unit Test** wajib untuk aplikasi serius.
- **pytest** lebih disukai karena sintaksnya yang bersih.
- **Mocking** digunakan untuk mengisolasi unit dari dependensi eksternal.
- Biasakan menulis test sebelum kode (TDD - Test Driven Development) atau minimal bersamaan dengan kode.

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/unit-testing-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/design-patterns-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Design Patterns</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/memory-management-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Memory Management</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
