---
layout: article.njk
title: Membuat Chatbot Sederhana dengan Python dan OpenAI API
date: 2026-01-03
category: AI & ML
image: /img/membuat-chatbot-sederhana-dengan-python-chatgpt.webp
permalink: /2026/01/membuat-chatbot-python-openai/
---

Revolusi kecerdasan buatan (AI) telah membawa kita ke era di mana komputer bisa memahami dan membalas percakapan manusia dengan sangat natural. Di balik teknologi populer seperti ChatGPT, terdapat model bahasa besar (LLM) yang bisa kita akses menggunakan Python.

Dalam tutorial ini, kita akan membuat chatbot CLI (Command Line Interface) sederhana yang bisa diajak ngobrol layaknya ChatGPT, menggunakan API resmi dari OpenAI.

## Persiapan

Sebelum memulai, ada beberapa hal yang perlu disiapkan:

1.  **Akun OpenAI**: Daftar di [platform.openai.com](https://platform.openai.com) dan buat **API Key**.
2.  **Python**: Pastikan Python sudah terinstall di komputer Anda.
3.  **Library OpenAI**: Install library resmi OpenAI versi terbaru.

```bash
pip install openai
```

> **Penting**: API Key bersifat rahasia. Jangan pernah membagikannya atau meng-upload kode yang berisi API Key ke GitHub publik.

## Kode Chatbot Cerdas

Kita akan membuat chatbot yang memiliki "ingatan" jangka pendek, sehingga dia bisa nyambung jika diajak ngobrol panjang. Buat file `chatbot.py`:

```python
from openai import OpenAI
import os

# Inisialisasi Client
# Sebaiknya simpan API Key di environment variable, tapi untuk belajar bisa hardcode (HATI-HATI!)
client = OpenAI(
    api_key="ganti-dengan-api-key-anda-disini" 
)

# List untuk menyimpan riwayat percakapan (Context)
conversation_history = [
    {"role": "system", "content": "Kamu adalah asisten AI yang ramah, pintar, dan suka membantu programmer pemula belajar Python. Jawablah dengan bahasa gaul Indonesia yang sopan."}
]

print("Bot: Halo! Ada yang bisa aku bantu soal coding hari ini? (ketik 'keluar' untuk stop)")

while True:
    # 1. Menerima input user
    user_input = input("Kamu: ")
    
    # Cek jika user ingin berhenti
    if user_input.lower() in ["keluar", "exit", "stop"]:
        print("Bot: Oke, sampai jumpa lagi! Semangat codingnya ya!")
        break
    
    # 2. Menambahkan input user ke riwayat percakapan
    conversation_history.append({"role": "user", "content": user_input})
    
    try:
        # 3. Mengirim request ke OpenAI
        response = client.chat.completions.create(
            model="gpt-3.5-turbo", # Model yang cepat dan hemat biaya
            messages=conversation_history
        )
        
        # 4. Mendapatkan balasan AI
        ai_response = response.choices[0].message.content
        
        # 5. Menampilkan balasan
        print(f"Bot: {ai_response}")
        
        # 6. Menyimpan balasan AI ke riwayat agar bot 'ingat' konteks
        conversation_history.append({"role": "assistant", "content": ai_response})
        
    except Exception as e:
        print(f"Terjadi error: {e}")
```

## Penjelasan Konsep Penting

### 1. Roles (Peran)
Dalam API OpenAI, ada 3 peran utama dalam percakapan:
*   **System**: Memberikan instruksi dasar tentang kepribadian atau tugas AI. Di contoh ini, kita menyuruhnya menjadi "asisten ramah yang suka bahasa gaul".
*   **User**: Input dari kita (manusia).
*   **Assistant**: Balasan dari AI. Kita perlu menyimpan ini kembali ke `conversation_history` agar AI tahu apa yang baru saja dia katakan.

### 2. Context (Konteks)
Model AI sebenarnya "pelupa". Setiap request adalah hal baru baginya. Agar dia bisa nyambung, kita harus mengirimkan **seluruh riwayat percakapan** (`conversation_history`) setiap kali kita bertanya. Inilah mengapa kita menggunakan list `append`.

### 3. Model
Kita menggunakan `gpt-3.5-turbo` karena ini adalah model yang digunakan ChatGPT versi gratis. Cepat, pintar, dan biayanya sangat murah untuk eksperimen.

## Pengembangan Lebih Lanjut

Chatbot ini bisa dikembangkan menjadi lebih canggih, misalnya:
*   **Integrasi Telegram/WhatsApp**: Hubungkan script ini dengan API bot Telegram.
*   **Knowledge Base**: Berikan dokumen PDF atau teks ke dalam prompt agar bot bisa menjawab pertanyaan spesifik tentang perusahaan atau produk Anda.
*   **Voice Assistant**: Gabungkan dengan library *Text-to-Speech* agar bot bisa bersuara.

