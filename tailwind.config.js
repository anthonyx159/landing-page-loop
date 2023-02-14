/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../img/mobile/image-hero.jpg')"
      }
    },
    letterSpacing: {
      widerxl: '.2em'
    },
  },
  plugins: [],
}
