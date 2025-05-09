# Refactor Ringan, Tampilan Makin Ciamik!

Proyek ini berisi proses perbaikan dan penyempurnaan dari struktur HTML dan file CSS untuk sebuah halaman web bertema "WorkoutAja". Artikel ini menjelaskan perubahan yang dilakukan, alasan di baliknya, serta tips yang bisa diterapkan untuk proyek serupa di masa depan.

---

## ✨ Perubahan yang Dilakukan

### 1. **Struktur File dan Path Aset**
| Sebelumnya | Setelah |
|-----------|---------|
| `./imgs/` | `./images/` |

🔧 *Alasan*: Penyesuaian nama folder agar lebih umum dan mudah dipahami (`images` lebih lazim digunakan daripada `imgs`).

---

### 2. **Elemen `<a>` pada Logo**
| Sebelumnya | Setelah |
|-----------|---------|
| `<a href="#" id="logo" href="#">` | `<a href="#" id="logo">` |

🔧 *Alasan*: Atribut `href` ditulis dua kali, yang menyebabkan kesalahan HTML. Pada versi baru, atribut duplikat dihapus.

---

### 3. **Penambahan Class `active` di Navigasi**
| Sebelumnya | Setelah |
|-----------|---------|
| Tidak ada indikator halaman aktif | `<a href="#" class="active">Home</a>` |

🔧 *Alasan*: Menambahkan class `active` membuat user tahu halaman mana yang sedang dibuka. Ini juga memudahkan untuk menambahkan gaya khusus pada link aktif.

---

### 4. **Penyempurnaan Tombol**
| Sebelumnya | Setelah |
|-----------|---------|
| Tombol tidak memiliki gaya jelas | Tombol diberi background, padding, radius, dan hover effect |

🔧 *Alasan*: Supaya tombol terlihat lebih menarik, mudah diklik, dan sesuai dengan standar desain modern.

---

### 5. **Peningkatan Aksesibilitas & Semantik**
- Tambahan `<span>` di dalam tombol untuk pemisahan teks dan ikon.
- Hover effect pada elemen link ditambahkan.

🔧 *Alasan*: Meningkatkan pengalaman pengguna (UX) dan keterbacaan oleh screen reader atau pembaca otomatis.

---

### 6. **Tipografi & Spasi**
| Sebelumnya | Setelah |
|-----------|---------|
| Tidak konsisten | Penambahan `font-size`, `line-height`, dan `margin` |

🔧 *Alasan*: Penambahan jarak dan ukuran huruf membuat tampilan lebih rapi dan enak dibaca.

---

### 7. **Footer & Posisi**
| Sebelumnya | Setelah |
|-----------|---------|
| Tidak memiliki posisi yang pasti | Footer diberi posisi `absolute` dan diratakan ke tengah halaman |

🔧 *Alasan*: Membuat footer tidak mengambang dan selalu terlihat di bagian bawah dengan penempatan yang estetis.

---

## 🛠 Tips Pengembangan Frontend

1. **Gunakan Nama Folder yang Konsisten**  
   Gunakan nama yang umum dan mudah dipahami seperti `images`, `styles`, `scripts`.

2. **Hindari Atribut Duplikat**  
   Pastikan setiap elemen hanya memiliki satu atribut yang sesuai (misalnya `href`, `src`, dll).

3. **Gunakan Class untuk Styling**  
   Gunakan class seperti `active`, `btn`, `hero-text` untuk memudahkan styling di CSS dan menjaga struktur HTML tetap bersih.

4. **Uji Hover dan Responsif**  
   Pastikan setiap elemen yang bisa diklik punya efek `hover`, dan periksa bagaimana tampilan di layar kecil atau besar.

5. **Gunakan Font Secara Konsisten**  
   Gunakan `font-family` yang sama di seluruh halaman untuk menjaga keseragaman desain.

---

## 🚀 Catatan Perjalanan

Selama proses refactor ini, saya belajar pentingnya perhatian pada detail kecil, seperti pengaturan path, struktur HTML yang valid, dan estetika tombol. Meskipun awalnya tampak sepele, perubahan ini membuat halaman web terlihat lebih profesional, mudah digunakan, dan nyaman dilihat.  

Proses ini juga memperkuat pemahaman saya tentang *semantic HTML* dan bagaimana CSS bisa menghidupkan desain.

---

## 📂 Struktur Folder (Direkomendasikan)
```
project/
├── index.html
├── style.css
├── images/
│   ├── logo.svg
│   ├── woman.svg
│   ├── whatsapp-icon.svg
│   └── balls.svg
```

---

## 📎 Penutup

Perubahan kecil bisa memberikan dampak besar dalam kualitas halaman web. Dengan memperhatikan struktur, gaya, dan pengalaman pengguna, kita bisa membuat web yang tidak hanya berfungsi tapi juga menyenangkan dilihat dan digunakan.