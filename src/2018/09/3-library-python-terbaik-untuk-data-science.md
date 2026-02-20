---
layout: article.njk
title: 3 Library Python Terbaik Untuk Data Science
category: info tutorial
image: /img/3-library-populer-data-science.png
permalink: /2018/09/3-library-python-terbaik-untuk-data-science/
---

Banyaknya kelebihan pada pemrograman pythno seperti efisiensei, keterbacaan kode dan kecepatan telah membuat python menjadi bahasa pemrograman yang banyak digunakan oleh para data scientist. Pyton menjadi pilihan untuk pada data scientist dan machine learning engineer untuk mengembangkan model dan berbagai aplikasi terkait data science.

Karena penggunaannya yang luas, Python memiliki banyak library yang memudahkan para ilmuwan data / data scientist untuk menyelesaikan tugas-tugas rumit tanpa banyak gangguan pengkodean. Berikut adalah 3 library Python yang paling banyak digunakan untuk data science.

### 1. NumPy

![logo numpy](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/NumPy_logo.svg/1200px-NumPy_logo.svg.png)

NumPy (kependekan dari Numerical Python) adalah salah satu library teratas yang dilengkapi dengan sumber daya yang berguna untuk membantu para data scientist mengubah Python menjadi alat analisis dan pemodelan ilmiah yang kuat. Libary Open source terpopuler ini tersedia di bawah lisensi BSD. Ini adalah pustaka Python dasar untuk melakukan tugas dalam komputasi ilmiah. NumPy adalah bagian dari ekosistem berbasis Python yang lebih besar dari tool open source yang disebut SciPy.

Perpustakaan memberdayakan Python dengan struktur data substansial untuk mudah melakukan perhitungan multi-dimensi (multi-dimensional arrays) dan perhitungan matrik. Selain penggunaannya dalam menyelesaikan persamaan aljabar linier (linear algebra equations) dan perhitungan matematis lainnya, NumPy juga digunakan sebagai wadah multi-dimensi serbaguna untuk berbagai jenis data generik.

Lebih hebatnya, NumPy terintegrasi dengan bahasa pemrograman lain seperti C / C ++ dan Fortran. Fleksibilitas perpustakaan NumPy memungkinkannya untuk dengan mudah dan cepat bergabung dengan berbagai database dan tools. Sebagai contoh, mari kita lihat bagaimana NumPy (disingkat np) dapat digunakan untuk mengalikan dua matriks.

Mari memulainya dengan meng-import library ini terlebih dahulu ( disini kita menggunakan Jupyter notebook untuk contoh)

```python
import numpy as np
```

Selanjutnya, kita akan menggunakan fungsi `eye()` untuk menghasilkan matriks identitas dengan dimensi yang ditetapkan.

```python
matrix_one = np.eye(3)
matrix_one
```

Outputnya akan seperti dibawah ini : 

```python
array([[1., 0., 0.],
       [0., 1., 0.],
       [0., 0., 1.]])
```

Mari hasilkan matriks 3x3 lainnya.

Kita akan menggunakan fungsi `arange([starting number], [stopping number])` untuk mengatur nomor. Perhatikan bahwa parameter pertama dalam fungsi adalah nomor awal yang akan didaftar dan nomor terakhir tidak termasuk dalam hasil yang dihasilkan.

Juga, `fungsi reshape()` diterapkan untuk memodifikasi dimensi dari matriks yang dihasilkan secara original ke dimensi yang diinginkan. Agar matrik bisa "multiply-able", mereka harus memiliki dimensi yang sama.

```python
matrix_two = np.arange(1,10).reshape(3,3)
matrix_two
```

Outputnya akan seperti dibawah ini : 

```python
array([[1, 2, 3],
       [4, 5, 6],
       [7, 8, 9]])
       ```

Mari gunakan fungsi `dot()` untuk mengalikan dua matriks.

```python
matrix_multiply = np.dot(matrix_one, matrix_two)
matrix_multiply
```

Outputnya akan seperti dibawah ini : 

```python
array([[1., 2., 3.],
       [4., 5., 6.],
       [7., 8., 9.]])
```

Kita telah berhasil melipatgandakan dua matriks tanpa menggunakan vanilla Python.

Berikut ini seluruh kode untuk contoh ini:

```python
import numpy as np
#menghasilkan a 3 by 3 identity matrix
matrix_one = np.eye(3)
matrix_one
#menghasilkan 3 by 3 matrix lainya for perkalian
matrix_two = np.arange(1,10).reshape(3,3)
matrix_two
#mengkalikan dua array
matrix_multiply = np.dot(matrix_one, matrix_two)
matrix_multiply
```

### 2. Pandas

![logo pandas](https://pandas.pydata.org/_static/pandas_logo.png)

Pandas adalah library hebat lain yang dapat meningkatkan keterampilan Python Anda untuk data science. Sama seperti NumPy, Pandas milik keluarga perangkat lunak open source SciPy dan tersedia di bawah lisensi perangkat lunak bebas BSD.

Pandas menawarkan alat serbaguna dan kuat untuk struktur data dan melakukan analisis data yang luas. Library ini berfungsi dengan baik dengan data dunia nyata yang tidak lengkap, tidak terstruktur, dan tidak teratur — dan dilengkapi dengan tool untuk membentuk, menggabungkan, menganalisis, dan memvisualisasikan datasets.

Ada tiga jenis struktur data di library ini:

- Series: single-dimensional, array homogen
- DataFrame: two-dimensional dengan kolom yang diketik secara heterogen
- Panel: three-dimensional, array size-mutable

Sebagai contoh, mari kita lihat bagaimana library Panda Python (disingkat pd) dapat digunakan untuk melakukan beberapa perhitungan statistik deskriptif.

Mari mulai dengan mengimport library pandas ini.

```python
import pandas as pd
```

Selanjutnya kita buat dictionary yang seri.

```python
d = {'Name':pd.Series(['Alfrick','Michael','Wendy','Paul','Dusan','George','Andreas',
   'Irene','Sagar','Simon','James','Rose']),
   'Years of Experience':pd.Series([5,9,1,4,3,4,7,9,6,8,3,1]),
   'Programming Language':pd.Series(['Python','JavaScript','PHP','C++','Java','Scala','React','Ruby','Angular','PHP','Python','JavaScript'])
    }
```

Selanjutnya buat Data Frame.

```python
df = pd.DataFrame(d)
```

Output nya akan seperti dibawah ini :

```python
      Name Programming Language  Years of Experience
0   Alfrick               Python                    5
1   Michael           JavaScript                    9
2     Wendy                  PHP                    1
3      Paul                  C++                    4
4     Dusan                 Java                    3
5    George                Scala                    4
6   Andreas                React                    7
7     Irene                 Ruby                    9
8     Sagar              Angular                    6
9     Simon                  PHP                    8
10    James               Python                    3
11     Rose           JavaScript                    1
```

Berikut ini seluruh kode untuk contoh ini:

```python
import pandas as pd
#creating a dictionary of series
d = {'Name':pd.Series(['Alfrick','Michael','Wendy','Paul','Dusan','George','Andreas',
   'Irene','Sagar','Simon','James','Rose']),
   'Years of Experience':pd.Series([5,9,1,4,3,4,7,9,6,8,3,1]),
   'Programming Language':pd.Series(['Python','JavaScript','PHP','C++','Java','Scala','React','Ruby','Angular','PHP','Python','JavaScript'])
    }

#Create a DataFrame
df = pd.DataFrame(d)
print(df)
```

### 3. Matplotlib

![logo matplotlib](https://matplotlib.org/_static/logo2.png)

Matplotlib juga merupakan bagian dari paket inti SciPy dan ditawarkan di bawah lisensi BSD. Ini adalah library ilmiah Python populer yang digunakan untuk menghasilkan visualisasi yang sederhana dan kuat. Anda dapat menggunakan kerangka kerja Python untuk ilmu data untuk menghasilkan grafik, chart, histogram, dan bentuk dan gambar lain yang kreatif — tanpa perlu khawatir menulis banyak baris kode. Sebagai contoh, mari kita lihat bagaimana perpustakaan Matplotlib dapat digunakan untuk membuat bar chart sederhana.

Mari memulainya dengan mengimport library

```python
from matplotlib import pyplot as plt
```

Mari hasilkan nilai untuk sumbu x dan sumbu y.

```python
x = [2, 4, 6, 8, 10]
y = [10, 11, 6, 7, 4]
```

Mari kita sebut fungsi untuk mem-plot diagram batang.

```python
plt.bar(x,y)
```

Selanjutnya kita tampilkan plot nya.

```python
plt.show()
```

Berikut adalah tampilan chart bar:

![diagram batang matplotlib](https://opensource.com/sites/default/files/uploads/matplotlib_barchart.png)

Berikut ini seluruh kode untuk contoh ini:

```python
#mengimport library Matplotlib Python  
from matplotlib import pyplot as plt
#same as import matplotlib.pyplot as plt
 
#menghasilkan nilai untuk x-axis 
x = [2, 4, 6, 8, 10]
 
#menghasilkan nilai untuk y-axis 
y = [10, 11, 6, 7, 4]
 
#memanggil function untuk plotting the bar chart
plt.bar(x,y)
 
#menampilkan the plot
plt.show()
```

#### Kesimpulan

Bahasa pemrograman Python selalu melakukan pekerjaan yang baik dalam hal data dan persiapan, tetapi kurang untuk analisis dan pemodelan data ilmiah yang rumit. Untuk itulah munculnya library Python sangat membantu untuk mengisi celah ini. Dengan adanya library ini akan memungkinkan Anda untuk melakukan perhitungan matematis yang kompleks dan membuat model canggih yang membuat data Anda masuk akal.

Selain dari 3 library diatas, adakah libary Python lainnya yang Anda tahu? Apa pengalamanmu dengan library tersebut? Silakan bagikan komentar Anda di bawah ini. Terimakasih.

---
> *penulis: Purwanto [https://github.com/purwnt](https://github.com/purwnt)*
> *referensi: [https://opensource.com](https://opensource.com)
