/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0284c7',
        blue: '#0284c7',
        gelap: '#1e293b',
        grey: '#94a3b8',
        gelap2: '#475569',
        gelap3: '#94a3b8',
        dark: '#0f172a',
    },
    },
  },
  plugins: [],
}

