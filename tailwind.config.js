/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#060911',
          900: '#0b1120',
        },
        brand: {
          cyan: '#38bdf8',
          blue: '#2563eb',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 35px -5px rgba(56, 189, 248, 0.25)',
        'card-glow': '0 10px 30px -10px rgba(14, 165, 233, 0.15)',
      }
    },
  },
  plugins: [],
}
