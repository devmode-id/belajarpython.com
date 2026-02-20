---
layout: tutorial-data-analytics.njk
title: Data Analytics dengan Pandas & NumPy - Tutorial Lengkap Dasar Sampai Advance
description: Pelajari Data Analytics dengan Python menggunakan NumPy dan Pandas. Tutorial lengkap dari dasar sampai advance dengan contoh kode praktis, handling missing data, groupby, merge, visualisasi, dan studi kasus nyata.
order: 38
permalink: /tutorial/data-analytics-pandas-numpy-python/
---

<img src="/img/tutorial/38-data-analytics-pandas-numpy.png" alt="Data Analytics dengan Pandas & NumPy Python Tutorial" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

Data adalah minyak baru. Di era digital ini, kemampuan untuk mengolah, menganalisis, dan mengambil wawasan dari data adalah keterampilan yang sangat berharga. Python, dengan ekosistemnya yang kaya, telah menjadi bahasa pemrograman *de facto* untuk Data Science dan Data Analytics.

Dua pustaka (library) yang menjadi fondasi utama dalam analisis data dengan Python adalah **NumPy** dan **Pandas**. Hampir semua pekerjaan data analytics di Python memanfaatkan kedua library ini sebagai pondasi utama.

Dalam tutorial ini, kita akan mempelajari:
- Konsep dasar hingga advance NumPy dan Pandas
- Teknik manipulasi dan transformasi data
- Handling missing values (data kosong)
- Operasi groupby dan agregasi
- Menggabungkan data dengan merge dan concat
- Tips performa untuk data besar
- Studi kasus analisis data nyata

---

## Apa itu NumPy dan Pandas?

### 1. NumPy (Numerical Python)

NumPy adalah pustaka dasar untuk **komputasi ilmiah** di Python. Ia menyediakan dukungan untuk array multidimensi (seperti matriks) yang besar, beserta koleksi fungsi matematika tingkat tinggi untuk mengoperasikan array ini.

**Keunggulan NumPy:**
- ⚡ **Kecepatan tinggi** - operasi hingga 50x lebih cepat dari list Python biasa
- 💾 **Efisiensi memori** - menggunakan memori lebih sedikit
- 🔢 **Broadcasting** - operasi aritmatika antar array berbeda ukuran
- 📊 **Vectorization** - operasi tanpa loop eksplisit

### 2. Pandas (Python Data Analysis Library)

Dibangun di atas NumPy, Pandas menawarkan struktur data dan alat analisis data yang mudah digunakan, fleksibel, dan ekspresif. 

**Struktur data utama Pandas:**
- **Series**: Array 1 dimensi dengan label (index)
- **DataFrame**: Tabel 2 dimensi dengan baris dan kolom berlabel

DataFrame memungkinkan Anda menyimpan dan memanipulasi data tabular (seperti spreadsheet Excel atau tabel SQL) dengan sangat mudah.

---

## Instalasi

Sebelum memulai, pastikan Anda sudah menginstal NumPy dan Pandas. Anda bisa menginstalnya menggunakan `pip`:

```bash
pip install numpy pandas
```

Atau menggunakan conda (jika Anda menggunakan Anaconda):

```bash
conda install numpy pandas
```

**Verifikasi instalasi:**

```python
import numpy as np
import pandas as pd

print(f"NumPy version: {np.__version__}")
print(f"Pandas version: {pd.__version__}")
```

---

## Menggunakan NumPy

Langkah pertama adalah mengimpor pustaka ini. Kebiasaan umum (convention) di komunitas Python adalah menyingkatnya menjadi `np`.

```python
import numpy as np
```

### Membuat Array

Perbedaan utama antara list Python biasa dan array NumPy adalah array NumPy harus berisi data dengan **tipe yang sama** (homogen), yang membuatnya jauh lebih cepat untuk operasi matematika.

```python
# Membuat array dari list
arr = np.array([1, 2, 3, 4, 5])
print(arr)
# Output: [1 2 3 4 5]

# Membuat array 2 dimensi (matriks)
matriks = np.array([[1, 2, 3], [4, 5, 6]])
print(matriks)
# Output:
# [[1 2 3]
#  [4 5 6]]
```

### Tipe Data (dtype) dalam NumPy

Setiap array NumPy memiliki tipe data tertentu. Memahami dtype penting untuk optimasi memori.

```python
# Array dengan tipe data spesifik
arr_float = np.array([1.0, 2.0, 3.0], dtype=np.float32)
arr_int = np.array([1, 2, 3], dtype=np.int64)

print(f"Float array dtype: {arr_float.dtype}")  # float32
print(f"Int array dtype: {arr_int.dtype}")      # int64

# Konversi tipe data
arr_converted = arr_int.astype(np.float64)
print(f"Converted dtype: {arr_converted.dtype}")  # float64
```

**Tipe data NumPy yang umum:**
| Dtype | Deskripsi |
|-------|-----------|
| `int32`, `int64` | Integer 32/64-bit |
| `float32`, `float64` | Float presisi tunggal/ganda |
| `bool` | Boolean (True/False) |
| `str` | String |

### Dimensi dan Bentuk Array (shape)

Memahami dimensi array sangat penting dalam data analytics.

```python
# Array 1D
arr_1d = np.array([1, 2, 3, 4, 5])
print(f"Shape: {arr_1d.shape}")      # (5,)
print(f"Dimensi: {arr_1d.ndim}")     # 1

# Array 2D
arr_2d = np.array([[1, 2, 3], [4, 5, 6]])
print(f"Shape: {arr_2d.shape}")      # (2, 3) -> 2 baris, 3 kolom
print(f"Dimensi: {arr_2d.ndim}")     # 2

# Array 3D
arr_3d = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
print(f"Shape: {arr_3d.shape}")      # (2, 2, 2)
print(f"Dimensi: {arr_3d.ndim}")     # 3
```

### Reshape: Mengubah Bentuk Array

```python
arr = np.array([1, 2, 3, 4, 5, 6])

# Reshape menjadi 2x3
reshaped = arr.reshape(2, 3)
print(reshaped)
# Output:
# [[1 2 3]
#  [4 5 6]]

# Reshape menjadi 3x2
reshaped_2 = arr.reshape(3, 2)
print(reshaped_2)
# Output:
# [[1 2]
#  [3 4]
#  [5 6]]

# Gunakan -1 untuk ukuran otomatis
reshaped_3 = arr.reshape(2, -1)  # Otomatis menjadi (2, 3)
print(reshaped_3.shape)  # (2, 3)
```

### Membuat Array Khusus

```python
# Array berisi nol
zeros = np.zeros((3, 4))
print(zeros)

# Array berisi satu
ones = np.ones((2, 3))
print(ones)

# Array dengan nilai tertentu
full = np.full((2, 2), 7)
print(full)
# Output:
# [[7 7]
#  [7 7]]

# Matriks identitas
identity = np.eye(3)
print(identity)

# Array dengan range
range_arr = np.arange(0, 10, 2)  # Start, stop, step
print(range_arr)  # [0 2 4 6 8]

# Array dengan nilai linear space
linspace_arr = np.linspace(0, 1, 5)  # 5 nilai antara 0 dan 1
print(linspace_arr)  # [0.   0.25 0.5  0.75 1.  ]

# Array random
random_arr = np.random.rand(3, 3)  # Nilai 0-1
random_int = np.random.randint(0, 100, size=(3, 3))  # Integer 0-99
```

### Operasi Matematika

Anda bisa melakukan operasi matematika langsung pada seluruh elemen array tanpa loop (vectorization).

```python
arr = np.array([1, 2, 3])

# Operasi aritmatika
print(arr + 10)  # [11 12 13]
print(arr * 2)   # [2 4 6]
print(arr ** 2)  # [1 4 9]

# Operasi antar array
arr2 = np.array([10, 20, 30])
print(arr + arr2)  # [11 22 33]
print(arr * arr2)  # [10 40 90]
```

### Fungsi Agregasi NumPy

Fungsi agregasi sangat penting untuk analisis statistik.

```python
data = np.array([23, 45, 12, 67, 34, 89, 21])

print(f"Sum: {np.sum(data)}")           # 291
print(f"Mean: {np.mean(data)}")         # 41.57
print(f"Median: {np.median(data)}")     # 34.0
print(f"Std Dev: {np.std(data)}")       # 25.04
print(f"Variance: {np.var(data)}")      # 627.10
print(f"Min: {np.min(data)}")           # 12
print(f"Max: {np.max(data)}")           # 89
print(f"Argmin: {np.argmin(data)}")     # 2 (indeks nilai min)
print(f"Argmax: {np.argmax(data)}")     # 5 (indeks nilai max)

# Operasi kumulatif
print(f"Cumsum: {np.cumsum(data)}")     # [ 23  68  80 147 181 270 291]
print(f"Cumprod: {np.cumprod(data[:4])}")  # [23, 1035, 12420, 832140]
```

### Operasi pada Array 2D (Matrix)

```python
matrix = np.array([[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9]])

# Agregasi per sumbu (axis)
print(f"Sum per kolom: {np.sum(matrix, axis=0)}")  # [12 15 18]
print(f"Sum per baris: {np.sum(matrix, axis=1)}")  # [ 6 15 24]

print(f"Mean per kolom: {np.mean(matrix, axis=0)}")  # [4. 5. 6.]
print(f"Max per baris: {np.max(matrix, axis=1)}")    # [3 6 9]
```

### Broadcasting

Broadcasting memungkinkan operasi antar array dengan ukuran berbeda.

```python
# Array 2D + scalar
matrix = np.array([[1, 2, 3], [4, 5, 6]])
print(matrix + 10)
# Output:
# [[11 12 13]
#  [14 15 16]]

# Array 2D + Array 1D
row_vector = np.array([10, 20, 30])
print(matrix + row_vector)
# Output:
# [[11 22 33]
#  [14 25 36]]
```

---

## Menggunakan Pandas

Mari mengimpor Pandas, biasanya disingkat sebagai `pd`.

```python
import pandas as pd
```

### Series: Array 1 Dimensi dengan Label

```python
# Membuat Series dari list
s = pd.Series([10, 20, 30, 40])
print(s)
# Output:
# 0    10
# 1    20
# 2    30
# 3    40
# dtype: int64

# Series dengan index custom
s_custom = pd.Series([10, 20, 30], index=['a', 'b', 'c'])
print(s_custom)
# Output:
# a    10
# b    20
# c    30
# dtype: int64

# Akses nilai
print(s_custom['b'])  # 20
print(s_custom[['a', 'c']])  # Series dengan nilai a dan c
```

### DataFrame: Jantungnya Pandas

DataFrame adalah tabel data yang terdiri dari baris dan kolom. Anda bisa membayangkannya seperti lembar kerja di Excel.

Mari kita buat DataFrame sederhana dari dictionary:

```python
data = {
    'Nama': ['Budi', 'Siti', 'Agus', 'Dewi'],
    'Usia': [25, 30, 22, 28],
    'Pekerjaan': ['Programmer', 'Data Analyst', 'Desainer', 'Marketer'],
    'Gaji': [8000000, 12000000, 7000000, 9000000]
}

df = pd.DataFrame(data)
print(df)
```

Output:
```
   Nama  Usia     Pekerjaan      Gaji
0  Budi    25    Programmer   8000000
1  Siti    30  Data Analyst  12000000
2  Agus    22      Desainer   7000000
3  Dewi    28      Marketer   9000000
```

### Membaca Data dari File

Dalam praktiknya, Anda jarang membuat DataFrame secara manual. Biasanya Anda akan memuat data dari file eksternal.

```python
# Membaca file CSV
df = pd.read_csv('data_penjualan.csv')

# Membaca file Excel
df = pd.read_excel('data_penjualan.xlsx')

# Membaca dengan parameter tambahan
df = pd.read_csv('data.csv', 
                 sep=';',           # Separator
                 encoding='utf-8',  # Encoding
                 skiprows=1,        # Skip baris pertama
                 na_values=['NA', 'null'],  # Nilai yang dianggap NaN
                 parse_dates=['tanggal'])   # Parse kolom sebagai datetime

# Membaca dari URL
df = pd.read_csv('https://example.com/data.csv')

# Membaca file JSON
df = pd.read_json('data.json')
```

### Eksplorasi Data Awal (EDA)

Setelah data dimuat, hal pertama yang harus dilakukan adalah memahaminya. Ini disebut **Exploratory Data Analysis (EDA)**.

```python
# Melihat 5 baris pertama
print(df.head())

# Melihat 5 baris terakhir
print(df.tail())

# Melihat n baris pertama
print(df.head(10))
```

**`df.info()` - Informasi tentang DataFrame:**

```python
df.info()
# Output:
# <class 'pandas.core.frame.DataFrame'>
# RangeIndex: 4 entries, 0 to 3
# Data columns (total 4 columns):
#  #   Column     Non-Null Count  Dtype 
# ---  ------     --------------  ----- 
#  0   Nama       4 non-null      object
#  1   Usia       4 non-null      int64 
#  2   Pekerjaan  4 non-null      object
#  3   Gaji       4 non-null      int64 
# dtypes: int64(2), object(2)
```

**`df.describe()` - Statistik Deskriptif:**

```python
print(df.describe())
# Output:
#             Usia          Gaji
# count   4.000000  4.000000e+00
# mean   26.250000  9.000000e+06
# std     3.593976  2.160247e+06
# min    22.000000  7.000000e+06
# 25%    24.250000  7.750000e+06
# 50%    26.500000  8.500000e+06
# 75%    28.500000  9.750000e+06
# max    30.000000  1.200000e+07

# Include semua kolom (termasuk object)
print(df.describe(include='all'))
```

**Informasi lainnya:**

```python
# Dimensi DataFrame (baris, kolom)
print(df.shape)  # (4, 4)

# Nama kolom
print(df.columns)  # Index(['Nama', 'Usia', 'Pekerjaan', 'Gaji'], dtype='object')

# Tipe data setiap kolom
print(df.dtypes)

# Jumlah nilai unik per kolom
print(df.nunique())

# Nilai unik dalam kolom
print(df['Pekerjaan'].unique())

# Frekuensi nilai
print(df['Pekerjaan'].value_counts())
```

### Seleksi dan Filter Data

Salah satu kekuatan utama Pandas adalah kemampuannya "mengiris" (slice) dan menyaring data.

**1. Memilih Kolom**

```python
# Mengambil satu kolom (mengembalikan Series)
nama = df['Nama']

# Mengambil beberapa kolom (mengembalikan DataFrame)
subset = df[['Nama', 'Usia']]

# Menggunakan notasi titik (hanya untuk nama kolom tanpa spasi)
nama = df.Nama
```

**2. Filter Baris (Boolean Indexing)**

```python
# Filter dengan satu kondisi
diatas_25 = df[df['Usia'] > 25]
print(diatas_25)

# Filter dengan beberapa kondisi (gunakan & untuk AND, | untuk OR)
filter_multi = df[(df['Usia'] > 25) & (df['Gaji'] > 8000000)]
print(filter_multi)

# Filter menggunakan isin()
pekerjaan_tertentu = df[df['Pekerjaan'].isin(['Programmer', 'Data Analyst'])]

# Filter menggunakan str methods
nama_b = df[df['Nama'].str.startswith('B')]
```

**3. Menggunakan `loc` dan `iloc`**

```python
# loc: Seleksi berdasarkan Label (nama baris/kolom)
print(df.loc[0, 'Pekerjaan'])  # 'Programmer'
print(df.loc[0:2, ['Nama', 'Usia']])  # Baris 0-2, kolom Nama dan Usia

# iloc: Seleksi berdasarkan Posisi (indeks integer)
print(df.iloc[0, 2])  # Baris pertama, kolom ketiga
print(df.iloc[0:2, 0:2])  # 2 baris pertama, 2 kolom pertama

# Kombinasi dengan kondisi
df.loc[df['Usia'] > 25, 'Kategori'] = 'Senior'
```

**4. Query Method (alternatif yang lebih readable)**

```python
# Filter menggunakan query() - lebih mudah dibaca
result = df.query('Usia > 25 and Gaji > 8000000')
print(result)

# Dengan variabel
min_usia = 25
result = df.query('Usia > @min_usia')
```

---

## Handling Missing Values (Data Kosong)

Dalam data real, sering kali ada nilai yang hilang (missing values). Pandas menyediakan berbagai cara untuk menanganinya.

```python
import numpy as np

# Membuat DataFrame dengan missing values
data = {
    'Nama': ['Ali', 'Budi', 'Cici', None, 'Euis'],
    'Usia': [25, np.nan, 30, 28, np.nan],
    'Gaji': [5000000, 6000000, np.nan, 7000000, 8000000]
}
df = pd.DataFrame(data)
print(df)
```

### Mengecek Missing Values

```python
# Cek apakah ada missing values
print(df.isnull())        # DataFrame boolean
print(df.isnull().sum())  # Jumlah missing per kolom
print(df.isnull().sum().sum())  # Total missing values

# Persentase missing values per kolom
print(df.isnull().mean() * 100)
```

### Menghapus Missing Values

```python
# Hapus baris yang memiliki missing value
df_dropped = df.dropna()

# Hapus baris yang semua nilainya NaN
df_dropped = df.dropna(how='all')

# Hapus baris berdasarkan kolom tertentu
df_dropped = df.dropna(subset=['Nama', 'Gaji'])

# Hapus kolom yang memiliki missing value
df_dropped = df.dropna(axis=1)
```

### Mengisi Missing Values

```python
# Isi dengan nilai tetap
df_filled = df.fillna(0)

# Isi dengan nilai berbeda per kolom
df_filled = df.fillna({
    'Nama': 'Unknown',
    'Usia': df['Usia'].mean(),
    'Gaji': df['Gaji'].median()
})

# Forward fill (isi dengan nilai sebelumnya)
df_filled = df.fillna(method='ffill')

# Backward fill (isi dengan nilai sesudahnya)
df_filled = df.fillna(method='bfill')

# Interpolasi (untuk data numerik berurutan)
df_filled = df.interpolate()
```

---

## GroupBy: Agregasi Data

GroupBy adalah salah satu fitur paling powerful di Pandas untuk analisis data.

```python
# Data penjualan
data = {
    'Produk': ['A', 'B', 'A', 'B', 'A', 'B'],
    'Wilayah': ['Jakarta', 'Jakarta', 'Bandung', 'Bandung', 'Jakarta', 'Bandung'],
    'Penjualan': [100, 150, 200, 120, 180, 90],
    'Kuantitas': [10, 15, 20, 12, 18, 9]
}
df = pd.DataFrame(data)
print(df)
```

### Agregasi Sederhana

```python
# Group berdasarkan satu kolom
grouped = df.groupby('Produk')

# Hitung total penjualan per produk
print(grouped['Penjualan'].sum())
# Output:
# Produk
# A    480
# B    360
# Name: Penjualan, dtype: int64

# Beberapa fungsi agregasi sekaligus
print(grouped['Penjualan'].agg(['sum', 'mean', 'max', 'min', 'count']))
```

### Group berdasarkan Multiple Columns

```python
# Group berdasarkan dua kolom
grouped_multi = df.groupby(['Produk', 'Wilayah'])
print(grouped_multi['Penjualan'].sum())
# Output:
# Produk  Wilayah
# A       Bandung    200
#         Jakarta    280
# B       Bandung    210
#         Jakarta    150
# Name: Penjualan, dtype: int64
```

### Agregasi dengan Named Functions

```python
# Agregasi dengan nama kolom custom
result = df.groupby('Produk').agg(
    Total_Penjualan=('Penjualan', 'sum'),
    Rata_rata_Penjualan=('Penjualan', 'mean'),
    Total_Kuantitas=('Kuantitas', 'sum')
).reset_index()

print(result)
```

### Transform dan Apply

```python
# Transform: mengembalikan data dengan ukuran sama
df['Penjualan_Normalized'] = df.groupby('Produk')['Penjualan'].transform(
    lambda x: (x - x.mean()) / x.std()
)

# Apply: fungsi custom
def analyze(group):
    return pd.Series({
        'Total': group['Penjualan'].sum(),
        'Avg': group['Penjualan'].mean(),
        'Max_Qty': group['Kuantitas'].max()
    })

result = df.groupby('Produk').apply(analyze)
print(result)
```

---

## Menggabungkan Data: Merge dan Concat

### Concat: Menggabungkan Secara Vertikal/Horizontal

```python
df1 = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})
df2 = pd.DataFrame({'A': [5, 6], 'B': [7, 8]})

# Concat vertikal (default)
result = pd.concat([df1, df2])
print(result)
# Output:
#    A  B
# 0  1  3
# 1  2  4
# 0  5  7
# 1  6  8

# Reset index setelah concat
result = pd.concat([df1, df2], ignore_index=True)

# Concat horizontal
result = pd.concat([df1, df2], axis=1)
```

### Merge: Menggabungkan Seperti SQL JOIN

```python
# Data karyawan
karyawan = pd.DataFrame({
    'ID': [1, 2, 3, 4],
    'Nama': ['Ali', 'Budi', 'Cici', 'Dedi'],
    'Dept_ID': [101, 102, 101, 103]
})

# Data departemen
departemen = pd.DataFrame({
    'Dept_ID': [101, 102, 104],
    'Nama_Dept': ['IT', 'HR', 'Finance']
})

# Inner join (default)
result = pd.merge(karyawan, departemen, on='Dept_ID')
print(result)
# Output:
#    ID  Nama  Dept_ID Nama_Dept
# 0   1   Ali      101        IT
# 1   3  Cici      101        IT
# 2   2  Budi      102        HR

# Left join
result = pd.merge(karyawan, departemen, on='Dept_ID', how='left')

# Right join
result = pd.merge(karyawan, departemen, on='Dept_ID', how='right')

# Outer join (full join)
result = pd.merge(karyawan, departemen, on='Dept_ID', how='outer')
```

### Merge dengan Kolom Berbeda Nama

```python
df1 = pd.DataFrame({'id_karyawan': [1, 2], 'nama': ['A', 'B']})
df2 = pd.DataFrame({'emp_id': [1, 2], 'gaji': [5000, 6000]})

result = pd.merge(df1, df2, left_on='id_karyawan', right_on='emp_id')
```

---

## Tips Performa untuk Data Besar

### 1. Gunakan Vectorization, Bukan Loop

```python
import time

# Data besar
df = pd.DataFrame({'A': range(1000000), 'B': range(1000000)})

# ❌ LAMBAT: Loop tradisional
start = time.time()
result = []
for i in range(len(df)):
    result.append(df.iloc[i]['A'] + df.iloc[i]['B'])
print(f"Loop: {time.time() - start:.2f}s")

# ✅ CEPAT: Vectorization
start = time.time()
result = df['A'] + df['B']
print(f"Vectorization: {time.time() - start:.4f}s")
```

### 2. Gunakan dtype yang Tepat

```python
# Menghemat memori dengan dtype yang tepat
df['kategori'] = df['kategori'].astype('category')  # Untuk data repetitif
df['nilai_int8'] = df['nilai'].astype('int8')  # Jika rentang nilai kecil

# Cek penggunaan memori
print(df.memory_usage(deep=True))
```

### 3. Gunakan Chunking untuk File Besar

```python
# Baca file besar per chunk
chunks = pd.read_csv('file_besar.csv', chunksize=10000)

result = pd.DataFrame()
for chunk in chunks:
    # Proses setiap chunk
    processed = chunk[chunk['nilai'] > 100]
    result = pd.concat([result, processed])
```

---

## Studi Kasus: Analisis Data Penjualan

Mari kita gabungkan semuanya dalam contoh analisis yang lebih komprehensif.

```python
import pandas as pd
import numpy as np

# Simulasi data penjualan
np.random.seed(42)

# Generate data random
n_records = 100
data = {
    'Tanggal': pd.date_range('2024-01-01', periods=n_records, freq='D'),
    'Produk': np.random.choice(['Laptop', 'Smartphone', 'Tablet', 'Aksesoris'], n_records),
    'Wilayah': np.random.choice(['Jakarta', 'Bandung', 'Surabaya', 'Medan'], n_records),
    'Jumlah': np.random.randint(1, 20, n_records),
    'Harga_Satuan': np.random.choice([5000000, 3000000, 2500000, 500000], n_records)
}

df = pd.DataFrame(data)

# Tambah kolom Total
df['Total'] = df['Jumlah'] * df['Harga_Satuan']

# Tambah kolom Bulan
df['Bulan'] = df['Tanggal'].dt.month_name()

print("=== DATA SAMPLE ===")
print(df.head(10))
print(f"\nTotal records: {len(df)}")

# 1. RINGKASAN STATISTIK
print("\n=== RINGKASAN STATISTIK ===")
print(df.describe())

# 2. TOTAL PENJUALAN PER PRODUK
print("\n=== TOTAL PENJUALAN PER PRODUK ===")
penjualan_produk = df.groupby('Produk').agg(
    Total_Unit=('Jumlah', 'sum'),
    Total_Revenue=('Total', 'sum'),
    Rata_rata_Per_Transaksi=('Total', 'mean')
).sort_values('Total_Revenue', ascending=False)
print(penjualan_produk)

# 3. PENJUALAN PER WILAYAH
print("\n=== PENJUALAN PER WILAYAH ===")
penjualan_wilayah = df.groupby('Wilayah')['Total'].sum().sort_values(ascending=False)
print(penjualan_wilayah)

# 4. PRODUK TERLARIS PER WILAYAH
print("\n=== PRODUK TERLARIS PER WILAYAH ===")
produk_wilayah = df.groupby(['Wilayah', 'Produk'])['Total'].sum().unstack(fill_value=0)
print(produk_wilayah)

# 5. ANALISIS TREND BULANAN
print("\n=== TREND PENJUALAN BULANAN ===")
monthly = df.groupby('Bulan')['Total'].sum()
print(monthly)

# 6. TOP 5 TRANSAKSI TERBESAR
print("\n=== TOP 5 TRANSAKSI TERBESAR ===")
top_5 = df.nlargest(5, 'Total')[['Tanggal', 'Produk', 'Wilayah', 'Total']]
print(top_5)

# 7. PERSENTASE KONTRIBUSI SETIAP PRODUK
print("\n=== KONTRIBUSI PRODUK (%) ===")
total_revenue = df['Total'].sum()
kontribusi = df.groupby('Produk')['Total'].sum() / total_revenue * 100
print(kontribusi.round(2))
```

**Output yang diharapkan:**

```
=== TOTAL PENJUALAN PER PRODUK ===
             Total_Unit  Total_Revenue  Rata_rata_Per_Transaksi
Produk                                                         
Laptop              156     4.68e+08              2.16e+07
Smartphone          198     3.56e+08              1.32e+07
Tablet              167     2.92e+08              1.22e+07
Aksesoris           189     5.67e+07              2.47e+06

=== KONTRIBUSI PRODUK (%) ===
Produk
Aksesoris      4.83
Laptop        39.87
Smartphone    30.33
Tablet        24.97
Name: Total, dtype: float64
```

---

## Studi Kasus: Analisis Nilai Siswa

Contoh yang lebih sederhana untuk pemula:

```python
import pandas as pd
import numpy as np

# Simulasi data nilai siswa
data_nilai = {
    'Siswa': ['Ali', 'Budi', 'Cici', 'Dedi', 'Euis', 'Fani', 'Gani', 'Hana'],
    'Kelas': ['X-A', 'X-A', 'X-B', 'X-B', 'X-A', 'X-B', 'X-A', 'X-B'],
    'Matematika': [85, 90, 75, 60, 95, 78, 88, 70],
    'Fisika': [80, 88, 70, 65, 92, 75, 85, 68],
    'Kimia': [78, 85, 72, 58, 90, 80, 82, 72]
}

df = pd.DataFrame(data_nilai)
print("=== DATA NILAI SISWA ===")
print(df)

# 1. Menghitung Rata-rata Nilai Setiap Siswa
df['Rata_rata'] = df[['Matematika', 'Fisika', 'Kimia']].mean(axis=1)

# 2. Menentukan Grade
def tentukan_grade(nilai):
    if nilai >= 85:
        return 'A'
    elif nilai >= 75:
        return 'B'
    elif nilai >= 65:
        return 'C'
    else:
        return 'D'

df['Grade'] = df['Rata_rata'].apply(tentukan_grade)

# 3. Menentukan Status Lulus/Tidak (Kriteria: Rata-rata >= 70)
df['Status'] = np.where(df['Rata_rata'] >= 70, 'Lulus', 'Remedial')

print("\n=== HASIL ANALISIS ===")
print(df)

print("\n=== STATISTIK PER KELAS ===")
stats_kelas = df.groupby('Kelas').agg({
    'Rata_rata': ['mean', 'min', 'max'],
    'Siswa': 'count'
})
print(stats_kelas)

print("\n=== DISTRIBUSI GRADE ===")
print(df['Grade'].value_counts().sort_index())

print("\n=== STATISTIK KESELURUHAN ===")
print(f"Siswa dengan nilai tertinggi: {df.loc[df['Rata_rata'].idxmax(), 'Siswa']}")
print(f"Nilai rata-rata kelas: {df['Rata_rata'].mean():.2f}")
print(f"Jumlah siswa lulus: {(df['Status'] == 'Lulus').sum()}")
print(f"Persentase kelulusan: {(df['Status'] == 'Lulus').mean() * 100:.1f}%")
```

**Output:**

```
=== HASIL ANALISIS ===
  Siswa Kelas  Matematika  Fisika  Kimia  Rata_rata Grade   Status
0   Ali   X-A          85      80     78      81.00     B    Lulus
1  Budi   X-A          90      88     85      87.67     A    Lulus
2  Cici   X-B          75      70     72      72.33     C    Lulus
3  Dedi   X-B          60      65     58      61.00     D  Remedial
4  Euis   X-A          95      92     90      92.33     A    Lulus
5  Fani   X-B          78      75     80      77.67     B    Lulus
6  Gani   X-A          88      85     82      85.00     A    Lulus
7  Hana   X-B          70      68     72      70.00     C    Lulus

=== STATISTIK KESELURUHAN ===
Siswa dengan nilai tertinggi: Euis
Nilai rata-rata kelas: 78.38
Jumlah siswa lulus: 7
Persentase kelulusan: 87.5%
```

---

## Menyimpan Data

Setelah analisis selesai, Anda bisa menyimpan hasilnya ke berbagai format:

```python
# Simpan ke CSV
df.to_csv('hasil_analisis.csv', index=False)

# Simpan ke Excel
df.to_excel('hasil_analisis.xlsx', index=False, sheet_name='Data')

# Simpan beberapa DataFrame ke Excel (multi-sheet)
with pd.ExcelWriter('laporan.xlsx') as writer:
    df.to_excel(writer, sheet_name='Data Utama', index=False)
    stats_kelas.to_excel(writer, sheet_name='Statistik Kelas')

# Simpan ke JSON
df.to_json('hasil.json', orient='records', indent=2)
```

---

## FAQ: Pertanyaan Umum tentang Pandas & NumPy

<details>
<summary><strong>Apa perbedaan antara Pandas Series dan NumPy Array?</strong></summary>

Pandas Series adalah array 1 dimensi yang memiliki **label index**, sedangkan NumPy array hanya memiliki index numerik. Series juga dapat menyimpan data dengan berbagai tipe (meski tidak disarankan), sementara NumPy array harus homogen.

```python
# NumPy array
arr = np.array([1, 2, 3])
print(arr[0])  # Akses dengan index numerik

# Pandas Series
s = pd.Series([1, 2, 3], index=['a', 'b', 'c'])
print(s['a'])  # Akses dengan label
```
</details>

<details>
<summary><strong>Kapan menggunakan NumPy vs Pandas?</strong></summary>

- **NumPy**: Gunakan untuk operasi matematika/numerik murni, terutama pada data besar yang homogen (semua angka). Cocok untuk machine learning, image processing, dan komputasi ilmiah.

- **Pandas**: Gunakan untuk analisis data tabular yang memiliki berbagai tipe kolom (angka, string, tanggal). Cocok untuk data analytics, data cleaning, dan EDA.
</details>

<details>
<summary><strong>Bagaimana cara mengatasi error "SettingWithCopyWarning"?</strong></summary>

Warning ini muncul ketika Anda memodifikasi slice dari DataFrame. Gunakan `.loc[]` atau `.copy()` untuk menghindarinya:

```python
# ❌ Menyebabkan warning
df_subset = df[df['Usia'] > 25]
df_subset['Kategori'] = 'Senior'

# ✅ Cara yang benar
df_subset = df[df['Usia'] > 25].copy()
df_subset['Kategori'] = 'Senior'

# ✅ Atau langsung dengan loc
df.loc[df['Usia'] > 25, 'Kategori'] = 'Senior'
```
</details>

<details>
<summary><strong>Apa itu axis dalam Pandas/NumPy?</strong></summary>

- `axis=0` (default): Operasi dilakukan per **kolom** (vertikal)
- `axis=1`: Operasi dilakukan per **baris** (horizontal)

```python
df = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})

# Sum per kolom (vertikal)
print(df.sum(axis=0))  # A: 3, B: 7

# Sum per baris (horizontal)
print(df.sum(axis=1))  # 0: 4, 1: 6
```
</details>

---

## Sumber Daya Tambahan (External Resources)

Untuk mendalami lebih lanjut tentang kedua library ini, Anda bisa mengunjungi:

### Dokumentasi Resmi
*   **NumPy Official Documentation**: [https://numpy.org/doc/stable/](https://numpy.org/doc/stable/)
*   **Pandas Official Documentation**: [https://pandas.pydata.org/docs/](https://pandas.pydata.org/docs/)
*   **10 Minutes to pandas**: Tutorial singkat resmi dari Pandas untuk pemula. [https://pandas.pydata.org/pandas-docs/stable/user_guide/10min.html](https://pandas.pydata.org/pandas-docs/stable/user_guide/10min.html)

### Cheat Sheets
*   **Pandas Cheat Sheet** (DataCamp): [https://www.datacamp.com/cheat-sheet/pandas-cheat-sheet-for-data-science-in-python](https://www.datacamp.com/cheat-sheet/pandas-cheat-sheet-for-data-science-in-python)
*   **NumPy Cheat Sheet** (DataCamp): [https://www.datacamp.com/cheat-sheet/numpy-cheat-sheet-data-analysis-in-python](https://www.datacamp.com/cheat-sheet/numpy-cheat-sheet-data-analysis-in-python)

### Dataset untuk Latihan
*   **Kaggle Datasets**: [https://www.kaggle.com/datasets](https://www.kaggle.com/datasets)
*   **Google Dataset Search**: [https://datasetsearch.research.google.com/](https://datasetsearch.research.google.com/)

---

## Kesimpulan

Data Analytics dengan Python membuka pintu wawasan yang tak terbatas. Berikut ringkasan yang telah kita pelajari:

| Library | Kegunaan Utama |
|---------|----------------|
| **NumPy** | Komputasi numerik cepat, operasi array/matrix |
| **Pandas** | Manipulasi data tabular, cleaning, transformasi |

**Poin-poin penting:**
- ✅ NumPy menyediakan fondasi komputasi yang **cepat dan efisien**
- ✅ Pandas memudahkan manipulasi data tabular dengan **DataFrame**
- ✅ Gunakan **vectorization** sebagai pengganti loop untuk performa
- ✅ **Handling missing values** adalah langkah penting dalam data cleaning
- ✅ **GroupBy** adalah fitur powerful untuk agregasi dan analisis
- ✅ **Merge/Concat** memungkinkan penggabungan multiple datasets

Kombinasi NumPy dan Pandas adalah **senjata utama** bagi setiap Data Scientist dan Data Analyst.

Di tutorial selanjutnya, kita akan belajar bagaimana memvisualisasikan data ini menjadi grafik yang menarik menggunakan **Matplotlib** dan **Seaborn**.

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/data-analytics-pandas-numpy-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/memory-management-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Memory Management</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/implementasi-machine-learning-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Machine Learning</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
