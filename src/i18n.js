export const translations = {
  en: {
    nav: { home: 'Home', about: 'About', projects: 'Projects', contact: 'Contact', viewCV: 'View CV' },
    hero: {
      hello: "Hello, I'm",
      bio: 'Informatics student from Universitas PGRI Semarang who loves building modern, clean, and interactive websites. Always learning and growing to deliver the best work.',
      coreTech: 'Core Technologies',
      explore: 'Explore Projects',
      contactMe: 'Contact Me'
    },
    about: {
      aboutMe: 'About Me',
      bio: 'A developer who loves turning quiet nights into functional lines of code. Always up for building random projects, and currently focused on diving deeper into full-stack web development. I learn best by doing: building small projects, trying new things, and improving them bit by bit.',
      subtitle: 'Crafting Digital Experiences with Code & Creativity',
      years: 'Years Coding',
      projectsShipped: 'Projects Shipped',
      uxCraft: 'UI/UX Craft'
    },
    timeline: {
      showcase: 'Showcase Projects',
      intro: "Selected projects I've worked on, from KKL documentation website, camera blur app, to school e-commerce app based on Next.js.",
      year: 'Year'
    },
    card: {
      viewDetails: 'View Details',
      viewSource: 'View Source Code',
      viewLive: 'View Live Demo',
      liveDemo: 'Live Demo',
      details: 'Details'
    },
    modal: {
      mainFeatures: 'Key Features & Architecture',
      technologies: 'Technologies Used',
      sourceCode: 'Source Code',
      livePreview: 'Live Preview',
      close: 'Close',
      closeModal: 'Close Modal'
    },
    contact: {
      available: 'Available for internship & collaborative projects',
      headline1: 'Build Great Projects',
      headline2: 'Together',
      descLine1: 'Have an interesting project idea or want to discuss web development?',
      descLine2: 'As a Front-End Developer diving into Full-Stack',
      descLine3: "I'm always enthusiastic to collaborate.",
      inbox: 'My inbox is open for job, internship, and freelance opportunities',
      copy: 'Copy',
      copied: 'Copied',
      connect: 'Connect via digital channels'
    }
  },
  id: {
    nav: { home: 'Beranda', about: 'Tentang', projects: 'Proyek', contact: 'Kontak', viewCV: 'Lihat CV' },
    hero: {
      hello: 'Halo, saya',
      bio: 'Mahasiswa Informatika Universitas PGRI Semarang yang gemar membuat website modern, rapi, dan interaktif. Terus belajar dan berkembang untuk menghasilkan karya terbaik.',
      coreTech: 'Teknologi Inti',
      explore: 'Jelajahi Proyek',
      contactMe: 'Hubungi Saya'
    },
    about: {
      aboutMe: 'Tentang Saya',
      bio: 'Developer yang suka mengubah tenangnya malam menjadi baris-baris kode yang fungsional. Selalu tertarik membuat proyek-proyek random, dan saat ini sedang fokus mendalami full-stack web development. Saya belajar paling baik dengan praktik: membangun proyek kecil, mencoba hal baru, dan memperbaikinya sedikit demi sedikit.',
      subtitle: 'Membangun Pengalaman Digital dengan Kode & Kreativitas',
      years: 'Tahun Coding',
      projectsShipped: 'Proyek Selesai',
      uxCraft: 'Keterampilan UI/UX'
    },
    timeline: {
      showcase: 'Showcase Proyek',
      intro: 'Koleksi proyek terpilih yang pernah saya kerjakan, mulai dari website dokumentasi KKL, aplikasi blur kamera, hingga aplikasi e-commerce sekolah berbasis Next.js.',
      year: 'Tahun'
    },
    card: {
      viewDetails: 'Lihat Detail',
      viewSource: 'Lihat Source Code',
      viewLive: 'Lihat Live Demo',
      liveDemo: 'Live Demo',
      details: 'Detail'
    },
    modal: {
      mainFeatures: 'Fitur Utama & Arsitektur',
      technologies: 'Teknologi yang Digunakan',
      sourceCode: 'Kode Sumber',
      livePreview: 'Pratinjau Langsung',
      close: 'Tutup',
      closeModal: 'Tutup Modal'
    },
    contact: {
      available: 'Tersedia untuk magang & proyek kolaboratif',
      headline1: 'Mari Wujudkan Proyek',
      headline2: 'Hebat',
      descLine1: 'Punya ide proyek menarik atau ingin diskusi seputar pengembangan web?',
      descLine2: 'Sebagai Front-End Developer yang sedang mendalami Full-Stack',
      descLine3: 'saya selalu antusias untuk berkolaborasi.',
      inbox: 'Kotak masuk saya terbuka untuk peluang kerja, magang, maupun proyek freelance',
      copy: 'Salin',
      copied: 'Tersalin',
      connect: 'Terhubung melalui saluran digital'
    }
  }
}

export const projectTranslations = {
  en: {
    'web-kkl': {
      title: 'Web KKL - Explore Insights & Bali Island',
      subtitle: 'KKL Documentation Informatics',
      description: 'Website documentation for Kuliah Kerja Lapangan (KKL) activities by Informatics students at Universitas PGRI Semarang in Bali.',
      fullDescription: 'KKL documentation platform showcasing iconic destinations, educational journeys, industries & teaching halls, as well as tourism and culture. Interactive website with smooth navigation and comprehensive multimedia content.',
      tags: ['Landing Page', 'Documentation', 'UI/UX', 'Responsive'],
      features: [
        'Landing page with attractive hero section',
        'Navigation tabs: Home, Schedule, Explore',
        'Destination gallery with detailed information',
        'Responsive design for all devices'
      ]
    },
    'cam-blur': {
      title: 'Current Trend - Cam Blur',
      subtitle: 'Camera & private photo blur app, fast and safe',
      description: 'Small app to blur photos & videos quickly, privately, and safely.',
      fullDescription: 'Cam Blur app designed to help users protect photo & video privacy with background or specific object blur. Save results, further develop, or share without risk of personal data exposure.',
      tags: ['Camera', 'Python'],
      features: [
        'Blur background or objects in camera in real-time',
        'Save blur result images to gallery',
        'Minimalist & responsive interface',
        'Quick access without internet required'
      ]
    },
    'schooly-shop': {
      title: 'Schooly Shop - School E-Commerce',
      subtitle: 'Internal school online store',
      description: 'E-commerce app for internal school store, includes product catalog, cart, checkout, and order history.',
      fullDescription: 'Schooly Shop is an internal school online store app for selling creative products from school members such as uniforms, stationery, crafts, and student works. This project focuses on the frontend side: all product, order, and payment data use mock adapter, while login sessions and cart are stored in the browser.',
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Zod'],
      features: [
        'Product catalog with category filter and search',
        'Product details, variants, and cart persistent via localStorage',
        'Checkout flow, Virtual Account (mock) payment, and order history',
        'Dummy authentication with role redirect and admin panel (mock)'
      ]
    }
  },
  id: {
    'web-kkl': {
      title: 'Web KKL - Jelajah Wawasan & Pulau Dewata',
      subtitle: 'Dokumentasi Kuliah Kerja Lapangan Informatika',
      description: 'Website dokumentasi kegiatan Kuliah Kerja Lapangan (KKL) mahasiswa Informatika Universitas PGRI Semarang di Bali.',
      fullDescription: 'Platform dokumentasi KKL yang menampilkan destinasi ikonik, perjalanan edukatif, industri & balai diklat, serta wisata dan budaya. Website interaktif dengan navigasi mulus dan konten multimedia yang komprehensif.',
      tags: ['Landing Page', 'Dokumentasi', 'UI/UX', 'Responsive'],
      features: [
        'Halaman beranda dengan hero section menarik',
        'Navigasi tab: Beranda, Jadwal, Eksplorasi',
        'Galeri destinasi dengan informasi detail',
        'Responsive design untuk semua perangkat'
      ]
    },
    'cam-blur': {
      title: 'Current Trend - Cam Blur',
      subtitle: 'Aplikasi blur kamera & foto pribadi, cepat dan aman',
      description: 'Aplikasi kecil untuk mengeblur foto & video dengan cepat, pribadi, dan aman.',
      fullDescription: 'Aplikasi Cam Blur dirancang untuk membantu pengguna menjaga privasi foto & video dengan blur latar atau objek tertentu. Simpan hasil, kembangkan kembali, atau bagikan tanpa risiko paparan data pribadi.',
      tags: ['Kamera', 'Python'],
      features: [
        'Blur latar atau objek dalam kamera secara real-time',
        'Simpan gambar hasil blur ke galeri',
        'Antarmuka minimalis & responsif',
        'Akses cepat tanpa koneksi internet'
      ]
    },
    'schooly-shop': {
      title: 'Schooly Shop - E-Commerce Sekolah',
      subtitle: 'Toko daring internal sekolah',
      description: 'Aplikasi e-commerce untuk toko internal sekolah, mencakup katalog produk, keranjang, checkout, dan riwayat pesanan.',
      fullDescription: 'Schooly Shop adalah aplikasi toko daring internal sekolah untuk menjual produk kreatif warga sekolah seperti seragam, alat tulis, kerajinan, dan karya siswa. Proyek ini berfokus pada sisi frontend: seluruh data produk, pesanan, dan pembayaran menggunakan adapter mock, sedangkan sesi login dan keranjang disimpan di browser.',
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Zod'],
      features: [
        'Katalog produk dengan filter kategori dan pencarian',
        'Detail produk, varian, serta keranjang yang persisten via localStorage',
        'Alur checkout, pembayaran Virtual Account (mock), dan riwayat pesanan',
        'Autentikasi dummy dengan redirect role dan panel admin (mock)'
      ]
    }
  }
}
