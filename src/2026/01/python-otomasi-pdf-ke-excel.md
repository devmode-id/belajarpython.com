---
layout: article.njk
title: "Panduan Menggunakan Python untuk Otomasi Input Data dari PDF ke Excel"
date: 2026-01-22
category: Tutorial
image: /img/python-otomasi-pdf-ke-excel.png
permalink: /2026/01/python-otomasi-pdf-ke-excel/
---

Pekerjaan menyalin data dari laporan PDF ke Excel secara manual adalah salah satu tugas yang paling membosankan dan rentan kesalahan. Beruntungnya, dengan Python, kita bisa mengotomatisasi proses ini hanya dalam beberapa baris kode.

Dalam panduan ini, kita akan belajar cara mengekstrak data tabel dari file PDF dan menyimpannya secara rapi ke dalam file Excel (.xlsx) menggunakan library `pdfplumber` dan `pandas`.

## Persiapan: Install Library yang Dibutuhkan

Kita membutuhkan dua library utama:
1.  **pdfplumber**: Untuk mengekstrak teks dan tabel dari PDF dengan akurat.
2.  **pandas**: Untuk mengolah data tabel dan mengekspornya ke Excel.
3.  **openpyxl**: Driver yang digunakan pandas untuk menulis file Excel.

Buka terminal atau command prompt Anda, lalu jalankan perintah berikut:

```bash
pip install pdfplumber pandas openpyxl
```

## Studi Kasus: Laporan Penualan

Bayangkan Anda memiliki file PDF bernama `laporan_penualan.pdf` yang berisi tabel transaksi penjualan. Kita ingin mengambil data tersebut dan menjadikannya file Excel agar bisa dianalisis lebih lanjut.

## Langkah 1: Membaca PDF dengan pdfplumber

Buat file baru bernama `otomasi_pdf.py` dan tulis kode berikut untuk membuka PDF:

```python
import pdfplumber
import pandas as pd

file_pdf = "laporan_penualan.pdf"

# Membuka file PDF
with pdfplumber.open(file_pdf) as pdf:
    # Mengambil halaman pertama
    halaman = pdf.pages[0]
    
    # Mengekstrak tabel dari halaman tersebut
    tabel = halaman.extract_table()
    
    # Menampilkan hasil ekstraksi mentah
    for baris in tabel[:5]: # Tampilkan 5 baris pertama
        print(baris)
```

Fungsi `extract_table()` akan mengembalikan data dalam bentuk *list of lists* (daftar di dalam daftar), di mana setiap daftar mewakili satu baris dalam tabel.

## Langkah 2: Membersihkan Data dengan Pandas

Hasil ekstraksi biasanya masih mentah. Kita perlu merapikannya dan mengonversinya menjadi DataFrame pandas.

```python
# Membuat DataFrame dari hasil ekstraksi tabel
# Anggap baris pertama (index 0) adalah header kolom
df = pd.DataFrame(tabel[1:], columns=tabel[0])

# Menampilkan 5 data teratas
print("\nDataFrame Hasil:")
print(df.head())

# (Opsional) Membersihkan data
# Misalnya, menghapus baris yang kosong atau mengubah tipe data
# df['Harga'] = pd.to_numeric(df['Harga'])
```

## Langkah 3: Menyimpan ke Excel

Langkah terakhir adalah menyimpan DataFrame yang sudah rapi ke dalam file Excel.

```python
output_excel = "laporan_penualan_hasil.xlsx"

# Menyimpan ke Excel tanpa menyertakan index
df.to_excel(output_excel, index=False)

print(f"\nSukses! Data telah disimpan ke {output_excel}")
```

## Kode Lengkap

Berikut adalah kode lengkap yang sudah digabungkan:

```python
import pdfplumber
import pandas as pd

def pdf_ke_excel(pdf_path, excel_path):
    print(f"Sedang memproses {pdf_path}...")
    
    data_tabel = []
    
    with pdfplumber.open(pdf_path) as pdf:
        for i, halaman in enumerate(pdf.pages):
            # Ekstrak tabel dari setiap halaman
            tabel = halaman.extract_table()
            
            if tabel:
                # Jika halaman pertama, ambil header
                if i == 0:
                    data_tabel.extend(tabel)
                else:
                    # Untuk halaman selanjutnya, lewati header jika tabelnya bersambung
                    # (Tergantung format PDF, kadang header muncul di tiap halaman)
                    data_tabel.extend(tabel[1:]) 
    
    if data_tabel:
        # Konversi ke DataFrame
        df = pd.DataFrame(data_tabel[1:], columns=data_tabel[0])
        
        # Simpan ke Excel
        df.to_excel(excel_path, index=False)
        print(f"Berhasil! Data tersimpan di {excel_path}")
    else:
        print("Tidak ada tabel yang ditemukan dalam PDF.")

# Jalankan fungsi
pdf_ke_excel("laporan_penualan.pdf", "hasil_otomasi.xlsx")
```

## Kesimpulan

Dengan skrip sederhana ini, Anda bisa menghemat berjam-jam waktu kerja manual. Teknik ini sangat berguna untuk:
*   Rekapitulasi faktur atau invoice.
*   Input data laporan bulanan.
*   Migrasi data dari arsip lama.

Otomasi adalah salah satu *skill* paling berharga di dunia kerja saat ini. Selamat mencoba!
