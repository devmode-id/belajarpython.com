---
layout: tutorial-dl.njk
title: Deep Learning dengan TensorFlow & PyTorch - Tutorial Lengkap Dasar Sampai Advance
description: Pelajari Deep Learning dengan Python. Pahami konsep Neural Network dari awal dengan NumPy, lalu implementasikan model canggih menggunakan TensorFlow dan PyTorch.
order: 40
permalink: /tutorial/deep-learning-tensorflow-pytorch-python/
---

<img src="/img/tutorial/40-deep-learning-python.png" alt="Deep Learning dengan TensorFlow dan PyTorch Tutorial" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

Jika Machine Learning adalah mesin mobil, maka **Deep Learning** adalah mesin jet. Deep Learning adalah subset dari Machine Learning yang meniru cara kerja otak manusia menggunakan **Artificial Neural Networks (ANN)** yang bertingkat-tingkat ("deep").

Teknologi ini adalah otak di balik *self-driving cars*, ChatGPT, pengenalan wajah di HP Anda, dan generator gambar AI.

Dalam tutorial ini, kita akan:
1. Memahami cara kerja Neural Network "di balik layar" dengan **NumPy** (bisa dijalankan di sini!).
2. Mempelajari dua raksasa framework: **TensorFlow** dan **PyTorch**.
3. Membuat model pengenalan gambar sederhana.

---

## Konsep Dasar: Neural Network from Scratch

Sebelum menggunakan library canggih, mari kita pahami apa yang sebenarnya terjadi di dalam sebuah "neuron" buatan.

Sebuah neuron melakukan dua hal sederhana:
1. **Linear Transformation**: Mengalikan input dengan bobot (weights) dan menambah bias.
   $$ z = x \cdot w + b $$
2. **Non-linear Activation**: Mengubah hasil menjadi output non-linear (misalnya dengan Sigmoid atau ReLU).
   $$ output = \sigma(z) $$

### Mari Coba Sendiri! (Interactive Demo)

Kode di bawah ini adalah simulasi satu neuron sederhana menggunakan NumPy. Klik **Run** untuk melihat hasilnya!

```python
import numpy as np

def sigmoid(x):
    # Fungsi aktivasi: mengubah angka menjadi antara 0 dan 1
    return 1 / (1 + np.exp(-x))

class Neuron:
    def __init__(self, weights, bias):
        self.weights = weights
        self.bias = bias

    def feedforward(self, inputs):
        # Langkah 1: Dot product input * bobot + bias
        total = np.dot(self.weights, inputs) + self.bias
        # Langkah 2: Fungsi aktivasi
        return sigmoid(total)

# Bobot (seberapa penting inputnya?)
weights = np.array([0, 1]) 
# Bias (threshold pemicu)
bias = 4                   

n = Neuron(weights, bias)

# Input data (misalnya [piksel1, piksel2])
x = np.array([2, 3])       

print(f"Output Neuron: {n.feedforward(x)}")
```

### Menggabungkan Neuron Menjadi Jaringan (Network)

Deep Learning terjadi ketika kita menumpuk banyak neuron menjadi lapisan (layers).

1.  **Input Layer**: Menerima data mentah.
2.  **Hidden Layers**: Mengekstraksi fitur kompleks.
3.  **Output Layer**: Memberikan prediksi.

Mari kita buat jaringan sederhana dengan satu Hidden Layer:

```python
import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

class NeuralNetwork:
    def __init__(self):
        # Bobot acak untuk contoh
        self.w1 = np.array([[0.5, 0.6], [0.7, 0.8]]) # Input ke Hidden
        self.w2 = np.array([0.9, 1.0])               # Hidden ke Output
        
    def feedforward(self, x):
        # Input ke Hidden Layer
        h_in = np.dot(self.w1, x) 
        h_out = sigmoid(h_in)
        
        # Hidden ke Output Layer
        o_in = np.dot(self.w2, h_out)
        o_out = sigmoid(o_in)
        return o_out

network = NeuralNetwork()
x = np.array([2, 3])

print(f"Prediksi Jaringan: {network.feedforward(x)}")
```

---

## Masuk ke Dunia Framework: TensorFlow vs PyTorch

Menulis kode seperti di atas untuk jaringan besar sangat rumit dan lambat. Itulah mengapa kita butuh framework yang dioptimalkan untuk GPU.

| Fitur | **TensorFlow (Keras)** | **PyTorch** |
|-------|------------------------|-------------|
| **Pembuat** | Google | Meta (Facebook) |
| **Gaya** | Statis, Production-ready | Dinamis, Pythonic (disukai peneliti) |
| **Kemudahan** | Sangat mudah (High-level Keras) | Menengah (Low-level control) |
| **Popularitas** | Industri & Enterprise | Riset & Akademisi |

---

## 1. TensorFlow & Keras

TensorFlow modern menggunakan **Keras** sebagai interface utamanya. Ini membuatnya sangat mudah dibaca.

### Contoh: Klasifikasi Angka (MNIST)

Kode di bawah ini mendefinisikan model untuk membaca tulisan tangan angka 0-9.

> **Catatan:** Kode ini membutuhkan library TensorFlow yang besar. Silakan jalankan di Google Colab.

```python
import tensorflow as tf

# 1. Load Data
mnist = tf.keras.datasets.mnist
(x_train, y_train), (x_test, y_test) = mnist.load_data()
x_train, x_test = x_train / 255.0, x_test / 255.0

# 2. Definisi Model (Sequential)
model = tf.keras.models.Sequential([
  tf.keras.layers.Flatten(input_shape=(28, 28)),     # Input layer
  tf.keras.layers.Dense(128, activation='relu'),     # Hidden layer
  tf.keras.layers.Dropout(0.2),                      # Regularization
  tf.keras.layers.Dense(10, activation='softmax')    # Output layer
])

# 3. Compile Model
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

# 4. Train Model
print("Mulai training...")
# model.fit(x_train, y_train, epochs=5) # Uncomment di Colab

print("Model didefinisikan dengan Keras!")
```

---

## 2. PyTorch

PyTorch memberikan kontrol lebih detail. Anda mendefinisikan arsitektur jaringan sebagai sebuah Class.

> **Catatan:** Kode ini untuk referensi PyTorch. Jalankan di Colab untuk hasil terbaik.

```python
import torch
import torch.nn as nn
import torch.nn.functional as F

class SimpleNet(nn.Module):
    def __init__(self):
        super(SimpleNet, self).__init__()
        # Definisi Layer
        self.flatten = nn.Flatten()
        self.fc1 = nn.Linear(28*28, 128) # Input ke Hidden
        self.fc2 = nn.Linear(128, 10)    # Hidden ke Output

    def forward(self, x):
        # Alur data (Feedforward)
        x = self.flatten(x)
        x = F.relu(self.fc1(x))
        x = self.fc2(x)
        return x

model = SimpleNet()
print(model)
```

---

## Studi Kasus: Transfer Learning

Salah satu teknik paling powerful di Deep Learning adalah **Transfer Learning**. Alih-alih melatih model dari nol (yang butuh jutaan data dan berminggu-minggu waktu GPU), kita menggunakan model yang sudah dilatih oleh Google/Meta (seperti ResNet, VGG, MobileNet) dan menyesuaikannya dengan data kita.

### Ilustrasi Transfer Learning

```
Model Pre-trained (ImageNet)
[====================================]
       (Sudah paham bentuk, tekstur, mata, telinga)
                               │
                               ▼
[Layer Baru Kita] -> Latih 5 menit saja!
                               │
                               ▼
                     "Kucing saya vs Kucing tetangga"
```

---

## FAQ: Deep Learning

<details>
<summary><strong>Butuh spesifikasi komputer seperti apa?</strong></summary>

Untuk pemula, laptop biasa dengan CPU cukup. Untuk model serius (CNN/Transformer), Anda WAJIB menggunakan **GPU** (NVIDIA). Jika tidak punya GPU, gunakan **Google Colab** (gratis cloud GPU).
</details>

<details>
<summary><strong>Lebih baik belajar TensorFlow atau PyTorch dulu?</strong></summary>

- Jika tujuan Anda **kerja di industri** atau **langsung buat aplikasi**: TensorFlow (Keras).
- Jika tujuan Anda **riset**, **paham konsep dalam**, atau **kuliah S2/S3**: PyTorch.
- Kabar baiknya: Jika bisa satu, belajar yang lain sangat mudah.
</details>

<details>
<summary><strong>Apa bedanya Epoch, Batch Size, dan Iteration?</strong></summary>

- **Epoch**: Satu putaran penuh melewati seluruh dataset.
- **Batch Size**: Jumlah data yang diproses model sebelum update bobot (misal 32 gambar sekaligus).
- **Iteration**: Jumlah langkah untuk menyelesaikan satu epoch (Total Data / Batch Size).
</details>

---

## Sumber Daya Tambahan

*   **Google Colab**: Environment Jupyter Notebook gratis dengan GPU. [colab.research.google.com](https://colab.research.google.com)
*   **Keras Documentation**: Dokumentasi yang sangat mudah dibaca. [keras.io](https://keras.io)
*   **PyTorch Tutorials**: Tutorial resmi PyTorch. [pytorch.org/tutorials](https://pytorch.org/tutorials)
*   **Fast.ai**: Kursus Deep Learning praktis terbaik (Top Down approach). [fast.ai](https://www.fast.ai)

---

## Kesimpulan

Deep Learning adalah teknologi yang sangat powerful namun kompleks. Jangan terintimidasi! Mulailah dengan Keras untuk membangun intuisi, lalu pelajari teori matematika di baliknya secara bertahap.

Di tutorial berikutnya, kita akan membahas cara menerapkan ini untuk proyek **Computer Vision** sederhana.

> <a href="https://colab.research.google.com/" target="_blank">
> Coba kode Neural Network di atas di Google Colab ↗
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/implementasi-machine-learning-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Machine Learning</span>
    </a>
  </div>
  <div class="flex justify-end">
    <a href="/tutorial/cybersecurity-ethical-hacking-python" class=" flex h-10 md:h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-4 md:px-8 text-sm md:text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:">
      <span class="-mt-0.5">Cybersecurity</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
