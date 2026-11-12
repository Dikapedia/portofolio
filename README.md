# Portofolio — Hardika Pangestu

Website portofolio pribadi satu halaman yang dibangun dengan **Vue 3**, **Vite**, dan **Tailwind CSS**. Menampilkan profil, tech stack, dan proyek dalam desain gelap bernuansa biru-cyan.

![Vue 3](https://img.shields.io/badge/Vue-3-42b883?logo=vuedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)

---

## Daftar Isi

- [Fitur](#-fitur)
- [Tech Stack](#-tech-stack)
- [Persyaratan Sistem](#-persyaratan-sistem)
- [Cara Install yang Dibutuhkan](#-cara-install-yang-dibutuhkan)
- [Clone & Jalankan Proyek](#-clone--jalankan-proyek)
- [Perintah npm](#-perintah-npm)
- [Build untuk Produksi](#-build-untuk-produksi)
- [Deploy](#-deploy)
- [Struktur Proyek](#-struktur-proyek)
- [Mengubah Data Pribadi & Proyek](#-mengubah-data-pribadi--proyek)
- [Troubleshooting](#-troubleshooting)
- [Kontak](#-kontak)

---

## Fitur

- **Dark luxury aesthetic** — palet gelap `#060911` dengan aksen ambient glow biru-cyan.
- **Hero & profile showcase** — nama, role, ringkasan, tombol CTA, badge teknologi, dan foto profil.
- **About & tech stack** — deskripsi singkat, chip teknologi dengan logo SVG, dan statistik.
- **Timeline proyek zig-zag** — garis vertikal di tengah dengan node berpendar dan tata letak kiri-kanan di desktop, linier di mobile.
- **Modal detail proyek** — deskripsi lengkap, fitur utama, teknologi, serta tombol demo/source code. Bisa ditutup dengan tombol **X**, klik latar, atau tombol **Escape**.
- **Navbar scroll-spy** — menu aktif mengikuti section yang sedang dilihat, plus drawer untuk mobile.
- **Kontak langsung** — salin email sekali klik, informasi lokasi/timezone, dan tautan sosial.
- **Responsif & aksesibel** — layout adaptif untuk semua ukuran layar, dukungan `prefers-reduced-motion`, dan atribut ARIA pada modal.

---

## Tech Stack

| Kategori | Teknologi |
| --- | --- |
| Framework | [Vue 3](https://vuejs.org/) — Composition API `<script setup>` |
| Build tool | [Vite 6](https://vite.dev/) |
| Styling | [Tailwind CSS v3](https://tailwindcss.com/) + PostCSS + Autoprefixer |
| Ikon | [Lucide Vue Next](https://lucide.dev/) |
| Tipografi | Plus Jakarta Sans & Inter (Google Fonts) |
| Bahasa | JavaScript (ES Modules) |

---

## Persyaratan Sistem

| Software       | Versi Minimal                      | Versi Disarankan   | Wajib?                   |
| -------------- | ---------------------------------- | ------------------ | ------------------------ |
| **Node.js**    | 18.18+                             | **22 LTS**         | Wajib                    |
| **npm**        | 9+                                 | 10+ (ikut Node.js) | Wajib                    |
| **Git**        | 2.30+                              | Terbaru            | Hanya jika clone via Git |
| Browser modern | Chrome/Edge/Firefox/Safari terbaru | Terbaru            | Wajib                    |

> **Penting:** kamu **tidak perlu** meng-install Vue, Vite, atau Tailwind CSS secara global.
> Ketiganya sudah terdaftar di `package.json` dan akan dipasang otomatis ke folder proyek saat menjalankan `npm install`.
> Jangan jalankan `npm install -g vue`, `npm install -g vite`, atau `npm create vite` — proyek ini sudah lengkap.

### Cek versi yang sudah terpasang

Buka terminal (PowerShell / macOS Terminal / Linux Terminal), lalu jalankan:

```bash
node -v
npm -v
git --version
```

Contoh output yang benar:

```text
v22.14.0
10.9.2
git version 2.47.1
```

Kalau `node` atau `npm` **tidak dikenali** (`is not recognized` / `command not found`), ikuti langkah install di bawah.

---

## Install yang Dibutuhkan

### 1. Install Node.js (wajib)

**Windows**

1. Buka [https://nodejs.org](https://nodejs.org) dan unduh versi **LTS** (Windows Installer `.msi`).
2. Jalankan installer → **Next** → pastikan opsi **Add to PATH** aktif → **Install**.
3. Tutup semua terminal, buka terminal baru, lalu cek:
   ```powershell
   node -v
   npm -v
   ```

Alternatif lewat **winget** (Windows 10/11):

```powershell
winget install OpenJS.NodeJS.LTS
```

**macOS**

Cara termudah memakai Homebrew:

```bash
brew install node
```

Atau unduh installer resmi dari [nodejs.org](https://nodejs.org).

**Linux (Ubuntu/Debian)**

Disarankan memakai **nvm** agar mudah ganti versi:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

Tutup dan buka ulang terminal, lalu:

```bash
nvm install 22
nvm use 22
node -v
```

Atau lewat package manager:

```bash
sudo apt update
sudo apt install nodejs npm
```

> Jika versi Node dari `apt` terlalu lama, gunakan nvm di atas.

---

### 2. Install Git (jika clone lewat Git)

**Windows**

- Unduh dari [https://git-scm.com/download/win](https://git-scm.com/download/win), atau:
  ```powershell
  winget install --id Git.Git -e --source winget
  ```

**macOS**

```bash
xcode-select --install
```

atau:

```bash
brew install git
```

**Linux**

```bash
sudo apt install git
```

Cek instalasi:

```bash
git --version
```

> Tidak ingin install Git? Kamu tetap bisa mengunduh proyek dalam bentuk **ZIP** — lihat [Cara B (tanpa Git)](#cara-b-download-zip-tanpa-git).

---

### 3. Install code editor (opsional, disarankan)

- [Visual Studio Code](https://code.visualstudio.com/) — disarankan.
- Ekstensi yang membantu: **Vue - Official** (Volar), **Tailwind CSS IntelliSense**.

---

## Clone & Jalankan Proyek

### Cara A: Clone dengan Git (disarankan)

```bash
# 1. Clone repository
git clone https://github.com/Dikapedia/portofolio.git

# 2. Masuk ke folder proyek
cd portofolio

# 3. Install semua dependency
npm install

# 4. Jalankan development server
npm run dev
```

> Ganti `portofolio` pada URL jika nama repository-mu berbeda.

Setelah perintah terakhir, terminal akan menampilkan sesuatu seperti:

```text
  VITE v6.4.5  ready in 512 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Buka **http://localhost:5173** di browser. Setiap perubahan file di `src/` akan langsung terlihat (hot reload).

Untuk menghentikan server: tekan **Ctrl + C** di terminal.

---

### Cara B: Download ZIP (tanpa Git)

1. Buka halaman repository di GitHub.
2. Klik tombol hijau **Code** → **Download ZIP**.
3. Ekstrak file ZIP ke folder pilihanmu.
4. Buka terminal dan masuk ke folder hasil ekstrak:
   ```bash
   cd path/ke/portofolio
   ```
5. Install dependency dan jalankan:
   ```bash
   npm install
   npm run dev
   ```

---

### Penting saat pertama kali menjalankan

- **Wajib `npm install` dulu.** Folder `node_modules/` tidak disertakan di repository karena ukurannya besar; folder ini dibuat ulang dari `package-lock.json`.
- **Jangan buka `index.html` langsung dengan double-click.** Halaman akan kosong karena browser tidak bisa memproses Vue/Vite. Gunakan `npm run dev` atau `npm run preview`.
- **Butuh koneksi internet** saat `npm install` pertama kali untuk mengunduh dependency.
- **Jangan jalankan `npm audit fix --force`.** Perintah itu bisa mengubah versi major dan merusak proyek.

---

## Perintah npm

| Perintah | Fungsi |
| --- | --- |
| `npm install` | Memasang semua dependency dari `package.json` (wajib pertama kali). |
| `npm ci` | Memasang dependency persis sesuai `package-lock.json` — cocok untuk CI/deploy. |
| `npm run dev` | Menjalankan development server di `http://localhost:5173` dengan hot reload. |
| `npm run build` | Membuat build produksi ke folder `dist/`. |
| `npm run preview` | Menjalankan hasil build `dist/` secara lokal di `http://localhost:4173`. |
| `npm run dev -- --port 3000` | Menjalankan dev server di port lain jika 5173 sedang dipakai. |

---

## Build untuk Produksi

```bash
npm run build
```

Output akan dibuat di folder `dist/`:

```text
dist/
├── assets/
│   ├── index-*.css
│   ├── index-*.js
│   └── profile-*.jpg
├── favicon.svg
└── index.html
```

Untuk melihat hasil build secara lokal:

```bash
npm run preview
```

Lalu buka **http://localhost:4173**.

> Folder `dist/` **tidak perlu di-commit** — sudah masuk `.gitignore` dan akan dibuat ulang oleh platform deploy.

---

## Deploy

### Vercel (disarankan)

1. Push repository ke GitHub.
2. Buka [vercel.com](https://vercel.com) → **Add New Project** → import repository.
3. Framework Preset: **Vite** (biasanya terdeteksi otomatis).
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Install Command: `npm install` (default)
7. Klik **Deploy**.

### Netlify

1. Buka [netlify.com](https://netlify.com) → **Add new site** → **Import an existing project**.
2. Pilih repository GitHub.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Klik **Deploy site**.

### GitHub Pages (opsional)

GitHub Pages memerlukan konfigurasi tambahan karena situs akan berada di sub-path `https://username.github.io/nama-repo/`. Tambahkan `base` di `vite.config.js`:

```js
export default defineConfig({
  plugins: [vue()],
  base: '/nama-repo/',
})
```

Lalu build dan deploy folder `dist/` ke branch `gh-pages`. Untuk portofolio, Vercel atau Netlify biasanya lebih sederhana.

---

## Struktur Proyek

```text
portofolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── profile.jpg
│   │   └── projects/
│   │       └── kkl.png
│   ├── components/
│   │   ├── About.vue
│   │   ├── ContactCTA.vue
│   │   ├── Footer.vue
│   │   ├── Hero.vue
│   │   ├── Navbar.vue
│   │   ├── ProjectCard.vue
│   │   ├── ProjectModal.vue
│   │   └── ProjectsTimeline.vue
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## Mengubah Data Pribadi & Proyek

Semua konten terpusat di satu file: **`src/data/portfolioData.js`**.

### Data pribadi

```js
export const personalInfo = {
  name: "Hardika Pangestu",
  location: "Semarang, Indonesia",
  timezone: "Worldwide UTC+7",
  stats: [
    { value: "2+", label: "Years Coding" },
    { value: "5+", label: "Projects Shipped" },
    { value: "100%", label: "UI/UX Craft" }
  ],
  contacts: {
    email: "email@example.com",
    github: "https://github.com/username",
    linkedin: "https://www.linkedin.com/in/username/",
    instagram: "https://www.instagram.com/username"
  }
}
```

### Menambah / mengubah proyek

```js
{
  id: "nama-unik-proyek",
  title: "Judul Proyek",
  subtitle: "Subjudul singkat",
  description: "Deskripsi singkat untuk kartu proyek.",
  fullDescription: "Deskripsi lengkap yang tampil di dalam modal.",
  tags: ["Vue", "Tailwind CSS", "Vite"],
  features: [
    "Fitur pertama",
    "Fitur kedua"
  ],
  liveUrl: "https://demo-proyek.com", // kosongkan "" jika belum ada demo
  githubUrl: "https://github.com/username/repo", // null jika tidak ada repo
  image: "nama-file.png", // null jika tidak ingin menampilkan gambar
  year: "2026"
}
```

Ketentuan gambar:

- Simpan gambar di `src/assets/projects/`.
- Isi `image` dengan nama file beserta ekstensinya, misalnya `"kkl.png"`.
- Jika hanya menulis nama tanpa ekstensi (`"kkl"`), kode akan mencari `kkl.svg`.
- Gunakan `image: null` untuk proyek tanpa gambar.
- Kompres gambar terlebih dahulu (disarankan < 300 KB) agar website tetap cepat.

Tombol di modal akan muncul otomatis:

- **Live Preview** hanya tampil jika `liveUrl` berisi URL.
- **Source Code** hanya tampil jika `githubUrl` tidak `null`.

---

## Troubleshooting

### `node` / `npm` tidak dikenali

**Penyebab:** Node.js belum terpasang atau belum masuk `PATH`.
**Solusi:** Install Node.js dari [nodejs.org](https://nodejs.org), lalu **tutup dan buka ulang terminal**. Cek dengan `node -v`.

---

### PowerShell: `npm.ps1 cannot be loaded because running scripts is disabled`

**Penyebab:** kebijakan execution policy Windows.
**Solusi:** jalankan sekali di PowerShell:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Ketik `Y` lalu Enter. Tutup terminal, buka lagi, coba `npm -v`.

---

### `'vite' is not recognized` / `vite: command not found`

**Penyebab:** dependency belum dipasang.
**Solusi:**

```bash
npm install
npm run dev
```

Pastikan perintah dijalankan **di dalam folder proyek** (yang berisi `package.json`).

---

### `npm ERR! code ENOENT` — `package.json` tidak ditemukan

**Penyebab:** terminal berada di folder yang salah.
**Solusi:** masuk ke folder proyek terlebih dahulu:

```bash
cd path/ke/portofolio
```

Cek isi folder:

```powershell
# Windows
dir
```

```bash
# macOS / Linux
ls
```

Pastikan terlihat `package.json`.

---

### `EBADENGINE` atau Vite minta Node versi lebih baru

**Penyebab:** versi Node.js terlalu lama.
**Solusi:** install Node.js **22 LTS** (minimal 18.18), lalu cek `node -v`. Jika memakai nvm: `nvm install 22 && nvm use 22`.

---

### Port 5173 sudah dipakai

**Penyebab:** dev server lain masih berjalan.
**Solusi:** hentikan server lama dengan **Ctrl + C**, atau pakai port lain:

```bash
npm run dev -- --port 3000
```

---

### `Cannot find module` atau dependency corrupt

**Penyebab:** instalasi tidak selesai / versi Node berubah.
**Solusi:** hapus `node_modules`, lalu install ulang dari lockfile:

```powershell
# Windows PowerShell
Remove-Item -Recurse -Force node_modules
npm ci
```

```bash
# macOS / Linux
rm -rf node_modules
npm ci
```

---

### Halaman kosong / CSS tidak muncul

**Penyebab:** `index.html` dibuka langsung lewat `file://`.
**Solusi:** jalankan lewat dev server (`npm run dev`) atau preview hasil build (`npm run build` lalu `npm run preview`). Jangan double-click `index.html`.

---

### `npm install` lambat atau gagal karena jaringan

**Solusi:**

```bash
npm cache clean --force
npm config set registry https://registry.npmjs.org/
npm install
```

Jika memakai proxy kantor/sekolah, pastikan proxy tersebut mengizinkan akses ke `registry.npmjs.org`.

---

### `EPERM: operation not permitted` di Windows

**Penyebab:** file `node_modules` sedang dipakai proses lain.
**Solusi:** hentikan dev server (Ctrl + C), tutup editor yang mengunci folder, lalu hapus ulang `node_modules` dan jalankan `npm ci`. Hindari menjalankan terminal sebagai Administrator kecuali perlu.

---

### `git` tidak dikenali

**Penyebab:** Git belum terpasang.
**Solusi:** install Git dari [git-scm.com](https://git-scm.com/downloads), atau unduh proyek sebagai ZIP tanpa Git.

---

## Kontak

- **Email:** [hardikapangestu371@gmail.com](mailto:hardikapangestu371@gmail.com)
- **GitHub:** [github.com/Dikapedia](https://github.com/Dikapedia)
- **LinkedIn:** [Hardika Pangestu](https://www.linkedin.com/in/hardika-pangestu-0a9205391/)
- **Instagram:** [@hrdiika](https://www.instagram.com/hrdiika)