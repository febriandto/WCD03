# 🚀 WCD03 - Assignment 6: Pokémon List with Local Storage and State Management

## Deskripsi
Ini adalah tugas ke-6 dari mata kuliah Web Component Development (WCD03), yang fokus pada pengembangan aplikasi web menggunakan **ReactJS**. Tugas ini bertujuan untuk mempraktikkan konsep **state management** dengan menggabungkan **localStorage** untuk menyimpan data secara persisten serta **React's useState** dan **useEffect** untuk manajemen state.

Aplikasi ini menampilkan daftar **Pokémon** dengan fitur penyortiran berdasarkan nama, kolom ukuran grid, dan filter. Data awal ditampilkan sebagai contoh statis, tetapi juga dapat diperbarui dari sumber eksternal seperti API di masa depan. Selain itu, aplikasi ini menyimpan data yang dimodifikasi oleh pengguna ke dalam `localStorage`, sehingga data tetap tersedia meskipun halaman direload atau browser ditutup.

## Tujuan
Tujuan dari tugas ini adalah:
- Memahami cara menggunakan **ReactJS** untuk membuat komponen modular.
- Mengimplementasikan **state management** dengan **useState** dan **useEffect**.
- Menyimpan data pengguna secara persisten menggunakan **localStorage**.
- Menerapkan fitur penyortiran, filter, dan pengelolaan UI dinamis.
- Demonstrasi integrasi antara ReactJS dan teknologi penyimpanan lokal.

## Teknologi yang Digunakan
- **ReactJS**: Framework JavaScript untuk pengembangan UI.
- **HTML5 & CSS3**: Untuk struktur dan gaya tampilan.
- **JavaScript**: Logika utama aplikasi.
- **localStorage**: Untuk penyimpanan data secara persisten.
- **Web Components (optional)**: Jika digunakan.

## Fitur Utama
1. **Penyimpanan Data Lokal**:
   - Data yang dimodifikasi oleh pengguna disimpan ke dalam `localStorage`.
   - Ketika aplikasi dimuat ulang, data sebelumnya akan otomatis dimuat kembali.

2. **Manajemen State**:
   - Penggunaan **useState** untuk mengelola state lokal.
   - Penggunaan **useEffect** untuk interaksi dengan `localStorage`.

3. **Fitur Pokok**:
   - **Penyortiran**: Data dapat diurutkan berdasarkan nama Pokémon (ascending/descending).
   - **Filter Kolom Grid**: Pengguna dapat mengubah ukuran grid (jumlah kolom) untuk tampilan daftar Pokémon.
   - **Card View**: Setiap Pokémon ditampilkan dalam bentuk card dengan nama, ID, jenis, dan gambar.
   - **Floating Button**: Tombol tambahan untuk aksi tertentu (misalnya, menambahkan Pokémon baru).

4. **Data Awal**:
   - Data awal ditampilkan sebagai contoh statis.
   - Dapat diperbarui dari API di masa depan.

## Struktur Proyek
assignment6/
├── public/
│ ├── index.html # Halaman utama
│ └── vite.config.js # Konfigurasi Vite
├── src/
│ ├── App.jsx # Komponen utama
│ ├── components/ # Folder komponen
│ │ ├── Card.jsx # Komponen Card untuk setiap Pokémon
│ │ ├── Filter.jsx # Komponen Filter untuk kolom grid
│ │ ├── FloatingButton.jsx # Komponen tombol tambah
│ │ ├── Header.jsx # Komponen header
│ │ └── ProtectedRoute.jsx # Komponen routing terlindungi
│ ├── pages/ # Folder halaman
│ │ ├── Add.jsx # Halaman tambah Pokémon
│ │ ├── Detail.jsx # Halaman detail Pokémon
│ │ ├── Home.jsx # Halaman utama
│ │ └── Login.jsx # Halaman login
│ ├── assets/ # Folder aset (gambar, logo, dll.)
│ │ ├── monster1.png # Gambar Pokémon statis
│ │ └── monster2.png # Gambar Pokémon statis
│ └── index.css # Gaya dasar untuk tampilan
└── README.md # Dokumentasi proyek