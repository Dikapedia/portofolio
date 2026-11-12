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
    email: "hardikapangestu371@gmail.com",
    github: "https://github.com/Dikapedia",
    linkedin: "https://www.linkedin.com/in/hardika-pangestu-0a9205391/",
    instagram: "https://www.instagram.com/hrdiika"
  }
}

export const projects = [
  {
    id: "web-kkl",
    title: "Web KKL - Jelajah Wawasan & Pulau Dewata",
    subtitle: "Dokumentasi Kuliah Kerja Lapangan Informatika",
    description: "Website dokumentasi kegiatan Kuliah Kerja Lapangan (KKL) mahasiswa Informatika Universitas PGRI Semarang di Bali.",
    fullDescription: "Platform dokumentasi KKL yang menampilkan destinasi ikonik, perjalanan edukatif, industri & balai diktat, serta wisata dan budaya. Website interaktif dengan navigasi mulus dan konten multimedia yang komprehensif.",
    tags: ["Landing Page", "Dokumentasi", "UI/UX", "Responsive"],
    features: [
      "Halaman beranda dengan hero section menarik",
      "Navigasi tab: Beranda, Jadwal, Eksplorasi",
      "Galeri destinasi dengan informasi detail",
      "Responsive design untuk semua perangkat"
    ],
    liveUrl: "https://kkl-kelompok10-2026.vercel.app/",
    githubUrl: null,
    image: "kkl.png",
    year: "2026"
  },
  {
    id: "cam-blur",
    title: "Current Trend - Cam Blur",
    subtitle: "Aplikasi blur kamera & foto pribadi, cepat dan aman",
    description: "Aplikasi kecil untuk mengeblur foto & video dengan cepat, pribadi, dan aman.",
    fullDescription: "Aplikasi Cam Blur dirancang untuk membantu pengguna menjaga privasi foto & video dengan blur latar atau objek tertentu. Simpan hasil, kembangkan kembali, atau bagikan tanpa risiko paparan data pribadi.",
    tags: ["Flutter", "Camera", "Dart", "UI"],
    features: [
      "Blur latar atau objek dalam kamera secara real-time",
      "Simpan gambar hasil blur ke galeri",
      "Antarmuka minimalis & responsif",
      "Akses cepat tanpa koneksi require"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Dikapedia/cam-blur",
    image: null,
    year: "2026"
  },
  {
    id: "schooly-shop",
    title: "Schooly Shop - E-Commerce Sekolah",
    subtitle: "Toko daring internal sekolah",
    description: "Aplikasi e-commerce untuk toko internal sekolah, mencakup katalog produk, keranjang, checkout, dan riwayat pesanan.",
    fullDescription: "Schooly Shop adalah aplikasi toko daring internal sekolah untuk menjual produk kreatif warga sekolah seperti seragam, alat tulis, kerajinan, dan karya siswa. Proyek ini berfokus pada sisi frontend: seluruh data produk, pesanan, dan pembayaran menggunakan adapter mock, sedangkan sesi login dan keranjang disimpan di browser.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zod"],
    features: [
      "Katalog produk dengan filter kategori dan pencarian",
      "Detail produk, varian, serta keranjang yang persisten via localStorage",
      "Alur checkout, pembayaran Virtual Account (mock), dan riwayat pesanan",
      "Autentikasi dummy dengan redirect role dan panel admin (mock)"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Dikapedia/schoolyshop",
    image: null,
    year: "2026"
  }
]
