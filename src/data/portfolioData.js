export const personalInfo = {
  name: "Hardika Pangestu",
  location: "Semarang, Indonesia",
  timezone: "Worldwide UTC+7",
  stats: [
    { value: "2+" },
    { value: "5+" },
    { value: "100%" }
  ],
  contacts: {
    email: "hardikapangestu371@gmail.com",
    github: "https://github.com/Dikapedia",
    linkedin: "https://www.linkedin.com/in/hardika-pangestu-0a9205391/",
    instagram: "https://www.instagram.com/hrdiika"
  }
}

// Catatan: teks judul/subtitle/deskripsi/tag/fitur di bawah ini hanya fallback.
// Yang tampil di UI diambil dari projectTranslations di src/i18n.js.
export const projects = [
  {
    id: "web-kkl",
    title: "Web KKL - Explore Insights & Bali Island",
    subtitle: "KKL Documentation Informatics",
    description: "Website documentation for Kuliah Kerja Lapangan (KKL) activities by Informatics students at Universitas PGRI Semarang in Bali.",
    fullDescription: "KKL documentation platform showcasing iconic destinations, educational journeys, industries & teaching halls, as well as tourism and culture. Interactive website with smooth navigation and comprehensive multimedia content.",
    tags: ["Landing Page", "Documentation", "UI/UX", "Responsive"],
    features: [
      "Landing page with attractive hero section",
      "Navigation tabs: Home, Schedule, Explore",
      "Destination gallery with detailed information",
      "Responsive design for all devices"
    ],
    liveUrl: "https://kkl-kelompok10-2026.vercel.app/",
    githubUrl: null,
    image: "kkl.png",
    year: "2026"
  },
  {
    id: "cam-blur",
    title: "Current Trend - Cam Blur",
    subtitle: "Camera & private photo blur app, fast and safe",
    description: "Small app to blur photos & videos quickly, privately, and safely.",
    fullDescription: "Cam Blur app designed to help users protect photo & video privacy with background or specific object blur. Save results, further develop, or share without risk of personal data exposure.",
    tags: ["Camera", "Python"],
    features: [
      "Blur background or objects in camera in real-time",
      "Save blur result images to gallery",
      "Minimalist & responsive interface",
      "Quick access without internet required"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Dikapedia/cam-blur",
    image: null,
    year: "2026"
  },
  {
    id: "schooly-shop",
    title: "Schooly Shop - E-Commerce Sekolah",
    subtitle: "Internal school online store",
    description: "E-commerce app for internal school store, includes product catalog, cart, checkout, and order history.",
    fullDescription: "Schooly Shop is an internal school online store app for selling creative products from school members such as uniforms, stationery, crafts, and student works. This project focuses on the frontend side: all product, order, and payment data use mock adapter, while login sessions and cart are stored in the browser.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zod"],
    features: [
      "Product catalog with category filter and search",
      "Product details, variants, and cart persistent via localStorage",
      "Checkout flow, Virtual Account (mock) payment, and order history",
      "Dummy authentication with role redirect and admin panel (mock)"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Dikapedia/schoolyshop",
    image: null,
    year: "2026"
  }
]
