/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{jsx,js}'],
  theme: {
    fontFamily: {
      pacifico: ['Pacifico', 'cursive'],
      sans: ['Noto Sans Korean', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
