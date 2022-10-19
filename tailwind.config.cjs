/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx' // são os arquivos que vão receber o tailwindcss
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
