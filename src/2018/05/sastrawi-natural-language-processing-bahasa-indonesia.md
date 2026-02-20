---
layout: article.njk
comments: true
title: Sastrawi, Natural Language Processing Mudah Dengan Python
category: tutorial
image: /img/sastrawi.jpg
permalink: /2018/05/sastrawi-natural-language-processing-bahasa-indonesia/
---

---

![Sastrawi NLP Bahasa Indonesia](/img/sastrawi.jpg 'NLP Bahasa Indonesia')

Sastrawi adalah perpustakaan PHP sederhana yang memungkinkan Anda untuk mengurangi kata-kata yang terinfleksi dalam Bahasa Indonesia (Bahasa Indonesia) ke bentuk dasarnya (batang)

Stemming adalah proses mengubah kata berimbuhan menjadi kata dasar. Contoh:

`menahan => tahan`
`berbalas-balasan => balas`

##### Contoh kasus

Misalnya sebuah blog post berisi:

`Rakyat memenuhi halaman gedung untuk menyuarakan isi hatinya.`

Pencarian dengan `query` di bawah ini tidak akan menemukan post di atas

`SELECT * FROM posts WHERE content LIKE '%suara%'`

Proses stemming dapat membantu menemukan dokumen yang sedang dicari yaitu dengan menanggalkan imbuhan-imbuhan hingga hanya menyisakan kata dasar seperti berikut:

`rakyat penuh halaman gedung suara isi hati`

Lalu kata kunci pencarian juga dijadikan kata dasar:

`Bersuara => suara`

#### Penggunaan

```python
# import StemmerFactory class
from Sastrawi.Stemmer.StemmerFactory import StemmerFactory

# create stemmer
factory = StemmerFactory()
stemmer = factory.create_stemmer()

# stemming process
sentence = 'Perekonomian Indonesia sedang dalam pertumbuhan yang membanggakan'
output   = stemmer.stem(sentence)

print(output)
# ekonomi indonesia sedang dalam tumbuh yang bangga

print(stemmer.stem('Mereka meniru-nirukannya'))
# mereka tiru
```

Untuk lebih lengkapnya silahkan lihat di [Github](https://github.com/har07/PySastrawi)

---

> _penulis: Purwanto [https://github.com/purwnt](https://github.com/purwnt)_
