/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      // backgroundImage: {
      //   'dark-pink-gradient': 'linear-gradient(to right, #1a202c, #ec4899)',
      // }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

