---
layout: tutorial.njk
title: Model Context Protocol (MCP) dengan FastMCP - Tutorial Lengkap Dasar Sampai Advance
description: Pelajari cara membuat MCP Server dengan FastMCP di Python. Tutorial lengkap Model Context Protocol untuk menghubungkan AI (Claude, ChatGPT) dengan database, file lokal, dan API eksternal.
order: 47
permalink: /tutorial/ai-mcp-fastmcp-python/
---

<img src="/img/tutorial/47-ai-mcp-python.png" alt="Model Context Protocol (MCP) dengan FastMCP" class="w-full rounded-lg shadow-md mb-6" loading="lazy">

**Model Context Protocol (MCP)** adalah standar terbuka yang dikembangkan oleh **Anthropic** yang memungkinkan asisten AI (seperti Claude, ChatGPT, Gemini) untuk terhubung dengan sistem data eksternal Anda secara **aman**, **terstandarisasi**, dan **real-time**.

Bayangkan MCP sebagai **"USB-C untuk AI"**. Sama seperti USB-C yang memungkinkan satu kabel menghubungkan berbagai perangkat, MCP memungkinkan satu standar protokol menghubungkan berbagai AI dengan berbagai sumber data.

---

## Apa itu MCP (Model Context Protocol)?

MCP adalah protokol komunikasi standar antara:
- **MCP Host/Client**: Aplikasi AI seperti Claude Desktop, Continue, Cursor IDE
- **MCP Server**: Program yang menyediakan akses ke data atau kemampuan tertentu

### Arsitektur MCP

```
┌─────────────────┐         ┌─────────────────┐
│   Claude/AI     │◄───────►│   MCP Server    │
│   (MCP Client)  │  JSON   │   (Python)      │
└─────────────────┘  RPC    └────────┬────────┘
                                     │
                    ┌────────────────┼────────────────┐
                    │                │                │
              ┌─────▼─────┐   ┌──────▼──────┐  ┌──────▼──────┐
              │ Database  │   │ File System │  │ External API│
              │ PostgreSQL│   │ Local Files │  │ Weather, etc│
              └───────────┘   └─────────────┘  └─────────────┘
```

**Penjelasan Arsitektur:**
- **MCP Client** (Claude Desktop, IDE) berkomunikasi dengan **MCP Server** menggunakan **JSON-RPC** melalui transport seperti `stdio` atau `HTTP/SSE`
- **MCP Server** bertindak sebagai jembatan yang menghubungkan AI dengan berbagai sumber data eksternal
- Komunikasi bersifat **two-way**: AI bisa meminta data dan server bisa mengirim respons

---

## Mengapa MCP Penting?

Tanpa MCP, AI hanyalah chatbot pintar yang **terisolasi** dari data Anda. Dengan MCP, AI bertransformasi menjadi **AI Agent** yang mampu:

| Kemampuan | Tanpa MCP | Dengan MCP |
|-----------|-----------|------------|
| Membaca file lokal | ❌ | ✅ |
| Akses database realtime | ❌ | ✅ |
| Menjalankan perintah sistem | ❌ | ✅ |
| Integrasi API eksternal | ❌ | ✅ |
| Context yang selalu up-to-date | ❌ | ✅ |

### Keunggulan MCP dibanding Solusi Lain

1. **Standar Terbuka**: Tidak terkunci ke vendor tertentu
2. **Keamanan by Design**: Data tetap di lokal, AI hanya mengakses yang diizinkan
3. **Modular**: Satu server bisa digunakan banyak client AI
4. **Real-time**: Tidak perlu upload file atau copy-paste manual

---

## Tiga Primitif Utama MCP

MCP memiliki **tiga primitif utama** yang wajib dipahami:

### 1. Tools 🔧
**Tools** adalah fungsi yang bisa dipanggil oleh AI untuk melakukan aksi tertentu.

```python
@mcp.tool()
def hitung_diskon(harga: float, persen_diskon: float) -> float:
    """Menghitung harga setelah diskon."""
    return harga - (harga * persen_diskon / 100)
```

**Penjelasan Kode:**
- `@mcp.tool()` adalah decorator yang mengubah fungsi Python biasa menjadi tool MCP
- **Docstring** (`"""..."""`) sangat penting karena AI membaca ini untuk memahami kapan harus menggunakan tool
- **Type hints** (`harga: float`) membantu AI memvalidasi input dengan benar
- Ketika user bertanya "Berapa harga setelah diskon 20%?", AI akan otomatis memanggil tool ini

### 2. Resources 📚
**Resources** adalah data statis atau dinamis yang bisa dibaca AI melalui URI.

```python
@mcp.resource("config://database")
def get_database_config() -> str:
    """Mengembalikan konfigurasi database saat ini."""
    return json.dumps({
        "host": "localhost",
        "port": 5432,
        "database": "myapp"
    })
```

**Penjelasan Kode:**
- `@mcp.resource("config://database")` mendefinisikan resource dengan URI `config://database`
- AI bisa "membaca" resource ini seperti membaca file
- Berbeda dengan tools, resources bersifat **read-only** dan tidak melakukan aksi apa pun
- Cocok untuk menyediakan konteks statis seperti konfigurasi, dokumentasi, atau schema database

### 3. Prompts 💬
**Prompts** adalah template pesan yang bisa digunakan ulang oleh AI.

```python
@mcp.prompt()
def generate_sql_prompt(table_name: str) -> str:
    """Template untuk generate query SQL."""
    return f"""Anda adalah ahli SQL. Buatkan query untuk tabel '{table_name}'.
Ikuti best practices:
- Gunakan prepared statements
- Hindari SELECT *
- Tambahkan index yang sesuai"""
```

**Penjelasan Kode:**
- `@mcp.prompt()` mendefinisikan template prompt yang bisa dipanggil AI
- Parameter `table_name` memungkinkan prompt yang dinamis
- Berguna untuk standarisasi cara AI merespons task tertentu
- AI bisa menggunakan prompt ini sebagai "panduan" saat mengerjakan tugas

---

## FastMCP: Framework Tercepat untuk MCP Server

**FastMCP** adalah library Python yang terinspirasi dari **FastAPI**, dirancang khusus untuk mempermudah pembuatan MCP Server dengan sintaks yang sederhana dan Pythonic.

### Instalasi FastMCP

```bash
pip install fastmcp
```

**Penjelasan:**
- Perintah di atas akan menginstall FastMCP dan semua dependensinya
- Pastikan Python versi 3.10+ sudah terinstall
- Disarankan menggunakan virtual environment: `python -m venv venv`

### Verifikasi Instalasi

```bash
python -c "import fastmcp; print(fastmcp.__version__)"
```

**Penjelasan:**
- Perintah ini mengecek apakah FastMCP berhasil diinstall
- Jika muncul nomor versi (contoh: `0.1.0`), berarti instalasi sukses

---

## Tutorial: Membuat MCP Server Pertama

Mari kita buat MCP Server sederhana yang memungkinkan AI menghitung jumlah kata dalam teks.

### Langkah 1: Buat File Server

Buat file bernama `server.py`:

```python
from fastmcp import FastMCP

# Inisialisasi Server MCP
# Parameter pertama adalah nama server yang akan ditampilkan ke client
mcp = FastMCP("Word Counter Tools")

# Definisi Tool untuk menghitung kata
@mcp.tool()
def hitung_kata(teks: str) -> int:
    """
    Menghitung jumlah kata dalam sebuah teks dengan akurat.
    
    Gunakan tool ini ketika user meminta untuk menghitung kata,
    karena LLM seringkali tidak akurat dalam menghitung.
    
    Args:
        teks: String yang akan dihitung jumlah katanya
        
    Returns:
        Jumlah kata dalam teks (integer)
    """
    if not teks or not teks.strip():
        return 0
    return len(teks.split())

# Menjalankan Server
if __name__ == "__main__":
    mcp.run()
```

**Penjelasan Detail Kode:**

| Bagian | Penjelasan |
|--------|------------|
| `FastMCP("Word Counter Tools")` | Membuat instance server dengan nama yang akan muncul di MCP client |
| `@mcp.tool()` | Decorator yang mendaftarkan fungsi sebagai tool MCP |
| Docstring lengkap | AI membaca docstring untuk memutuskan kapan menggunakan tool ini |
| `if not teks or not teks.strip()` | Validasi input untuk menghindari error pada teks kosong |
| `len(teks.split())` | Memisahkan teks berdasarkan spasi dan menghitung jumlah elemennya |
| `mcp.run()` | Menjalankan server dengan transport default (stdio) |

### Langkah 2: Menjalankan Server

```bash
python server.py
```

**Penjelasan:**
- Setelah dijalankan, server akan menunggu koneksi dari MCP client
- Secara default, FastMCP menggunakan transport **stdio** (standard input/output)
- Anda tidak akan melihat output apa pun karena server menunggu input JSON-RPC

---

## Tutorial: Integrasi dengan Claude Desktop

Agar Claude Desktop bisa menggunakan MCP Server Anda, perlu konfigurasi khusus.

### Langkah 1: Temukan File Konfigurasi

Lokasi file konfigurasi Claude Desktop:

| OS | Lokasi File |
|----|-------------|
| **Windows** | `%APPDATA%\Claude\claude_desktop_config.json` |
| **macOS** | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| **Linux** | `~/.config/Claude/claude_desktop_config.json` |

### Langkah 2: Edit Konfigurasi

Tambahkan konfigurasi MCP server ke file `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "word-counter": {
      "command": "python",
      "args": ["C:/path/to/your/server.py"],
      "env": {}
    }
  }
}
```

**Penjelasan Konfigurasi:**

| Key | Penjelasan |
|-----|------------|
| `"word-counter"` | Nama unik untuk server Anda (bebas) |
| `"command"` | Perintah untuk menjalankan server (`python`, `python3`, atau path lengkap) |
| `"args"` | Array berisi path lengkap ke file server Anda |
| `"env"` | Environment variable tambahan (kosongkan jika tidak perlu) |

### Langkah 3: Restart Claude Desktop

Setelah menyimpan konfigurasi:
1. Tutup Claude Desktop sepenuhnya
2. Buka kembali Claude Desktop
3. Anda akan melihat icon 🔧 yang menandakan MCP server aktif

---

## Contoh Lanjutan: MCP Server dengan Multiple Tools

Berikut contoh server yang lebih kompleks dengan beberapa tools sekaligus:

```python
from fastmcp import FastMCP
import json
from datetime import datetime
import os

# Inisialisasi Server
mcp = FastMCP("Super Assistant Tools")

# ========== TOOL 1: Hitung Kata ==========
@mcp.tool()
def hitung_kata(teks: str) -> int:
    """Menghitung jumlah kata dalam teks."""
    if not teks:
        return 0
    return len(teks.split())

# ========== TOOL 2: Hitung Karakter ==========
@mcp.tool()
def hitung_karakter(teks: str, include_spaces: bool = True) -> int:
    """
    Menghitung jumlah karakter dalam teks.
    
    Args:
        teks: String yang akan dihitung
        include_spaces: Jika True, spasi ikut dihitung. Default True.
    """
    if not teks:
        return 0
    if include_spaces:
        return len(teks)
    return len(teks.replace(" ", ""))

# ========== TOOL 3: Waktu Sekarang ==========
@mcp.tool()
def waktu_sekarang(timezone: str = "Asia/Jakarta") -> str:
    """
    Mendapatkan waktu saat ini.
    
    Args:
        timezone: Timezone yang diinginkan (default: Asia/Jakarta)
    
    Returns:
        String waktu dalam format yang mudah dibaca
    """
    now = datetime.now()
    return now.strftime("%A, %d %B %Y - %H:%M:%S WIB")

# ========== TOOL 4: List Files ==========
@mcp.tool()
def list_files(directory: str, extension: str = None) -> str:
    """
    Menampilkan daftar file dalam direktori.
    
    Args:
        directory: Path ke direktori yang ingin dilihat
        extension: Filter berdasarkan ekstensi (contoh: '.py', '.txt')
    
    Returns:
        Daftar file dalam format JSON
    """
    try:
        files = os.listdir(directory)
        if extension:
            files = [f for f in files if f.endswith(extension)]
        return json.dumps(files, indent=2)
    except FileNotFoundError:
        return json.dumps({"error": f"Directory '{directory}' tidak ditemukan"})
    except PermissionError:
        return json.dumps({"error": "Tidak punya izin akses ke direktori"})

# ========== RESOURCE: System Info ==========
@mcp.resource("system://info")
def get_system_info() -> str:
    """Informasi tentang sistem operasi saat ini."""
    import platform
    info = {
        "os": platform.system(),
        "os_version": platform.version(),
        "python_version": platform.python_version(),
        "machine": platform.machine()
    }
    return json.dumps(info, indent=2)

# Jalankan Server
if __name__ == "__main__":
    mcp.run()
```

**Penjelasan Kode:**

**Tool `hitung_kata` dan `hitung_karakter`:**
- Dua tool sederhana untuk text analysis
- `include_spaces` adalah parameter opsional dengan default value

**Tool `waktu_sekarang`:**
- Mengembalikan waktu dalam format yang mudah dibaca manusia
- Berguna karena AI tidak memiliki akses ke waktu real-time

**Tool `list_files`:**
- Memberikan AI kemampuan untuk melihat isi direktori
- Menggunakan try-except untuk handle error dengan elegan
- Mengembalikan hasil dalam format JSON agar mudah diproses AI

**Resource `system://info`:**
- Menyediakan informasi sistem sebagai context
- AI bisa membaca resource ini untuk memahami environment tempat dia berjalan

---

## Contoh Praktis: MCP Server untuk Database

Berikut contoh MCP Server yang menghubungkan AI dengan database SQLite:

```python
from fastmcp import FastMCP
import sqlite3
import json

mcp = FastMCP("Database Assistant")

# Path ke database
DB_PATH = "contoh.db"

def get_connection():
    """Helper function untuk membuat koneksi database."""
    return sqlite3.connect(DB_PATH)

# Setup database dengan tabel contoh
def init_database():
    """Inisialisasi database dengan data sample."""
    conn = get_connection()
    cursor = conn.cursor()
    
    # Buat tabel products jika belum ada
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            price REAL NOT NULL,
            stock INTEGER DEFAULT 0
        )
    ''')
    
    # Cek apakah sudah ada data
    cursor.execute("SELECT COUNT(*) FROM products")
    if cursor.fetchone()[0] == 0:
        # Insert sample data
        sample_products = [
            ("Laptop Gaming", 15000000, 10),
            ("Mouse Wireless", 250000, 50),
            ("Keyboard Mechanical", 750000, 30),
            ("Monitor 27 inch", 3500000, 15),
            ("Webcam HD", 450000, 25)
        ]
        cursor.executemany(
            "INSERT INTO products (name, price, stock) VALUES (?, ?, ?)",
            sample_products
        )
    
    conn.commit()
    conn.close()

# Panggil saat server start
init_database()

# ========== TOOL: Query Products ==========
@mcp.tool()
def get_all_products() -> str:
    """
    Mengambil semua data produk dari database.
    
    Returns:
        JSON array berisi semua produk dengan id, name, price, dan stock
    """
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT id, name, price, stock FROM products")
    rows = cursor.fetchall()
    conn.close()
    
    products = [
        {"id": row[0], "name": row[1], "price": row[2], "stock": row[3]}
        for row in rows
    ]
    return json.dumps(products, indent=2, ensure_ascii=False)

# ========== TOOL: Search Product ==========
@mcp.tool()
def search_product(keyword: str) -> str:
    """
    Mencari produk berdasarkan nama.
    
    Args:
        keyword: Kata kunci pencarian (case-insensitive)
        
    Returns:
        JSON array berisi produk yang cocok
    """
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(
        "SELECT id, name, price, stock FROM products WHERE name LIKE ?",
        (f"%{keyword}%",)
    )
    rows = cursor.fetchall()
    conn.close()
    
    products = [
        {"id": row[0], "name": row[1], "price": row[2], "stock": row[3]}
        for row in rows
    ]
    return json.dumps(products, indent=2, ensure_ascii=False)

# ========== TOOL: Add Product ==========
@mcp.tool()
def add_product(name: str, price: float, stock: int = 0) -> str:
    """
    Menambahkan produk baru ke database.
    
    Args:
        name: Nama produk
        price: Harga produk dalam Rupiah
        stock: Jumlah stok (default: 0)
        
    Returns:
        Konfirmasi berhasil atau error message
    """
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO products (name, price, stock) VALUES (?, ?, ?)",
            (name, price, stock)
        )
        conn.commit()
        product_id = cursor.lastrowid
        conn.close()
        
        return json.dumps({
            "success": True,
            "message": f"Produk '{name}' berhasil ditambahkan dengan ID {product_id}",
            "id": product_id
        })
    except Exception as e:
        return json.dumps({
            "success": False,
            "error": str(e)
        })

# ========== TOOL: Update Stock ==========
@mcp.tool()
def update_stock(product_id: int, new_stock: int) -> str:
    """
    Mengupdate stok produk.
    
    Args:
        product_id: ID produk yang akan diupdate
        new_stock: Jumlah stok baru
        
    Returns:
        Konfirmasi update atau error message
    """
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute(
            "UPDATE products SET stock = ? WHERE id = ?",
            (new_stock, product_id)
        )
        conn.commit()
        affected = cursor.rowcount
        conn.close()
        
        if affected == 0:
            return json.dumps({
                "success": False,
                "error": f"Produk dengan ID {product_id} tidak ditemukan"
            })
        
        return json.dumps({
            "success": True,
            "message": f"Stok produk ID {product_id} berhasil diupdate menjadi {new_stock}"
        })
    except Exception as e:
        return json.dumps({
            "success": False,
            "error": str(e)
        })

# ========== RESOURCE: Database Schema ==========
@mcp.resource("schema://products")
def get_products_schema() -> str:
    """
    Schema tabel products untuk referensi AI.
    """
    schema = {
        "table_name": "products",
        "columns": [
            {"name": "id", "type": "INTEGER", "primary_key": True, "auto_increment": True},
            {"name": "name", "type": "TEXT", "nullable": False},
            {"name": "price", "type": "REAL", "nullable": False},
            {"name": "stock", "type": "INTEGER", "default": 0}
        ]
    }
    return json.dumps(schema, indent=2)

if __name__ == "__main__":
    print("Database MCP Server starting...")
    print(f"Database: {DB_PATH}")
    mcp.run()
```

**Penjelasan Kode:**

**Fungsi `init_database()`:**
- Membuat tabel dan sample data saat server pertama kali dijalankan
- Menggunakan `CREATE TABLE IF NOT EXISTS` untuk menghindari error jika tabel sudah ada
- Mengecek apakah tabel kosong sebelum insert data sample

**Tool CRUD:**
| Tool | Fungsi |
|------|--------|
| `get_all_products()` | **Read** - Membaca semua produk |
| `search_product(keyword)` | **Read** - Mencari produk berdasarkan nama |
| `add_product(...)` | **Create** - Menambah produk baru |
| `update_stock(...)` | **Update** - Mengubah stok produk |

**Resource `schema://products`:**
- Memberikan AI informasi tentang struktur database
- AI bisa membaca ini untuk memahami field apa saja yang tersedia

---

## Transport Modes di FastMCP

FastMCP mendukung beberapa mode transport untuk berkomunikasi dengan client:

### 1. STDIO (Default)

```python
if __name__ == "__main__":
    mcp.run()  # Default menggunakan stdio
```

**Penjelasan:**
- **Paling umum** digunakan untuk integrasi dengan Claude Desktop
- Komunikasi melalui standard input/output
- Cocok untuk menjalankan server sebagai subprocess

### 2. Server-Sent Events (HTTP/SSE)

```python
if __name__ == "__main__":
    mcp.run(transport="sse", host="127.0.0.1", port=8000)
```

**Penjelasan:**
- Menjalankan server sebagai HTTP server
- Client bisa connect melalui `http://127.0.0.1:8000/sse`
- Cocok untuk skenario di mana server perlu diakses melalui network

### 3. WebSocket (Experimental)

```python
if __name__ == "__main__":
    mcp.run(transport="websocket", host="0.0.0.0", port=8000)
```

**Penjelasan:**
- Komunikasi real-time bidirectional
- Masih dalam tahap experimental
- Cocok untuk aplikasi yang membutuhkan latency rendah

---

## Best Practices Membuat MCP Server

### 1. Tulis Docstring yang Jelas

```python
# ❌ Buruk
@mcp.tool()
def calc(x, y):
    return x + y

# ✅ Bagus
@mcp.tool()
def calculate_sum(first_number: float, second_number: float) -> float:
    """
    Menjumlahkan dua angka.
    
    Gunakan tool ini ketika user meminta untuk menambah,
    menjumlahkan, atau menggabungkan dua nilai numerik.
    
    Args:
        first_number: Angka pertama
        second_number: Angka kedua
        
    Returns:
        Hasil penjumlahan kedua angka
    """
    return first_number + second_number
```

**Penjelasan:**
- AI membaca docstring untuk memutuskan kapan menggunakan tool
- Semakin jelas docstring, semakin akurat AI dalam memilih tool yang tepat
- Gunakan type hints untuk validasi otomatis

### 2. Handle Error dengan Graceful

```python
@mcp.tool()
def read_file(file_path: str) -> str:
    """Membaca isi file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return f.read()
    except FileNotFoundError:
        return json.dumps({"error": f"File '{file_path}' tidak ditemukan"})
    except PermissionError:
        return json.dumps({"error": "Tidak punya izin untuk membaca file"})
    except Exception as e:
        return json.dumps({"error": f"Terjadi kesalahan: {str(e)}"})
```

**Penjelasan:**
- Jangan biarkan exception membuat server crash
- Return pesan error yang informatif agar AI bisa menyampaikan ke user
- Log error untuk debugging di sisi server

### 3. Validasi Input

```python
@mcp.tool()
def delete_file(file_path: str) -> str:
    """Menghapus file dari sistem."""
    
    # Validasi: Cegah path traversal attack
    if ".." in file_path:
        return json.dumps({"error": "Path tidak valid"})
    
    # Validasi: Hanya izinkan direktori tertentu
    allowed_dirs = ["/home/user/documents", "/tmp"]
    if not any(file_path.startswith(d) for d in allowed_dirs):
        return json.dumps({"error": "Akses ke direktori ini tidak diizinkan"})
    
    # Proses delete...
```

**Penjelasan:**
- Selalu validasi input sebelum melakukan operasi berbahaya
- Batasi akses ke direktori/resource yang aman
- Pertimbangkan security implications dari setiap tool

### 4. Gunakan Async untuk Operasi Berat

```python
import asyncio
import aiohttp

@mcp.tool()
async def fetch_weather(city: str) -> str:
    """Mengambil data cuaca dari API eksternal."""
    async with aiohttp.ClientSession() as session:
        url = f"https://api.weather.com/v1/current?city={city}"
        async with session.get(url) as response:
            data = await response.json()
            return json.dumps(data)
```

**Penjelasan:**
- FastMCP mendukung async functions
- Gunakan async untuk operasi I/O seperti API calls atau database queries
- Mencegah blocking yang bisa memperlambat response

---

## Cara Kerja End-to-End

Berikut alur lengkap bagaimana MCP bekerja:

```
┌────────────────────────────────────────────────────────────────┐
│ 1. USER: "Hitung kata di paragraf ini: Lorem ipsum dolor..."  │
└────────────────────────────────────┬───────────────────────────┘
                                     ▼
┌────────────────────────────────────────────────────────────────┐
│ 2. CLAUDE: Melihat ada tool 'hitung_kata' yang relevan        │
│    → Memutuskan untuk menggunakan tool tersebut               │
└────────────────────────────────────┬───────────────────────────┘
                                     ▼
┌────────────────────────────────────────────────────────────────┐
│ 3. CLAUDE → MCP SERVER: Mengirim request JSON-RPC             │
│    {"method": "tools/call", "params": {"name": "hitung_kata", │
│     "arguments": {"teks": "Lorem ipsum dolor..."}}}           │
└────────────────────────────────────┬───────────────────────────┘
                                     ▼
┌────────────────────────────────────────────────────────────────┐
│ 4. MCP SERVER: Menjalankan fungsi Python 'hitung_kata'        │
│    hasil = len(teks.split())  # Mengembalikan 45              │
└────────────────────────────────────┬───────────────────────────┘
                                     ▼
┌────────────────────────────────────────────────────────────────┐
│ 5. MCP SERVER → CLAUDE: Mengirim response                     │
│    {"result": 45}                                              │
└────────────────────────────────────┬───────────────────────────┘
                                     ▼
┌────────────────────────────────────────────────────────────────┐
│ 6. CLAUDE → USER: "Paragraf tersebut memiliki 45 kata."       │
└────────────────────────────────────────────────────────────────┘
```

---

## Debugging dan Troubleshooting

### Masalah Umum dan Solusinya

| Masalah | Penyebab | Solusi |
|---------|----------|--------|
| Server tidak terdeteksi di Claude | Path salah di config | Gunakan absolute path lengkap |
| Tool tidak muncul | Docstring kosong | Tambahkan docstring yang jelas |
| Error "Permission denied" | File tidak bisa diakses | Cek permission file server.py |
| "Python not found" | Python tidak di PATH | Gunakan full path python.exe |

### Mengaktifkan Debug Mode

```python
import logging
logging.basicConfig(level=logging.DEBUG)

mcp = FastMCP("Debug Server")

@mcp.tool()
def test_tool():
    """Tool untuk testing."""
    logging.debug("test_tool dipanggil!")
    return "OK"

if __name__ == "__main__":
    mcp.run()
```

**Penjelasan:**
- `logging.basicConfig(level=logging.DEBUG)` mengaktifkan log detail
- Semua komunikasi JSON-RPC akan ditampilkan
- Berguna untuk debugging saat development

---

## Masa Depan AI Agent dengan MCP

MCP adalah fondasi masa depan di mana AI bukan hanya sekadar chatbot, tapi **asisten yang benar-benar bisa bekerja** dan berinteraksi dengan dunia digital Anda.

### Prediksi Perkembangan MCP

1. **Adopsi Massal**: Lebih banyak aplikasi AI akan mendukung MCP
2. **Marketplace MCP Servers**: Seperti npm untuk Node.js, akan ada package manager untuk MCP servers
3. **Enterprise Integration**: Perusahaan besar akan menggunakan MCP untuk integrasi AI yang aman
4. **Multi-Agent Collaboration**: Beberapa AI agent bisa berkolaborasi melalui MCP

### Skill yang Perlu Dikuasai

Sebagai Python Developer, menguasai MCP menempatkan Anda di **garis depan revolusi AI**:

- ✅ Pembuatan tools yang membantu AI
- ✅ Integrasi dengan berbagai data sources
- ✅ Security best practices untuk AI systems
- ✅ Arsitektur distributed AI agents

---

## Kesimpulan

**Model Context Protocol (MCP)** adalah game-changer dalam cara AI berinteraksi dengan dunia nyata. Dengan **FastMCP**, Anda bisa membuat MCP Server dalam hitungan menit menggunakan Python.

**Poin-poin utama:**
1. MCP adalah standar terbuka untuk menghubungkan AI dengan data eksternal
2. FastMCP mempermudah pembuatan MCP Server dengan sintaks seperti FastAPI
3. Ada 3 primitif utama: **Tools**, **Resources**, dan **Prompts**
4. Integrasi dengan Claude Desktop hanya butuh beberapa langkah konfigurasi
5. Best practices mencakup docstring yang jelas, error handling, dan validasi input

---

## Referensi dan Resources

- [Dokumentasi Resmi MCP](https://modelcontextprotocol.io/)
- [GitHub FastMCP](https://github.com/jlowin/fastmcp)
- [Anthropic MCP Announcement](https://www.anthropic.com/news/model-context-protocol)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)

---

> <a href="https://github.com/devmode-id/belajarpython.com/blob/master/src/tutorial/ai-mcp-fastmcp-python.md" target="_blank" rel="noopener noreferrer">
> Edit tutorial ini
> </a>

<div class="mt-8 flex justify-between gap-x-2 md:gap-x-4">
  <div class="flex justify-start">
    <a href="/tutorial/devops-ci-cd-python" class="text-primary-300 hover:text-primary-300 flex h-10 md:h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-4 md:px-8 text-sm md:text-base hover:no-underline md:">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">DevOps & CI/CD</span>
    </a>
  </div>
  <div class="flex justify-end">
    <!-- End of Series -->
  </div>
</div>
