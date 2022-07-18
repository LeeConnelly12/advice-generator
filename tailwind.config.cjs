/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './main.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        slate: {
          400: 'hsl(193, 38%, 86%)',
          700: 'hsl(217, 19%, 38%)',
          800: 'hsl(217, 19%, 24%)',
          900: 'hsl(218, 23%, 16%)',
        },
        green: {
          400: 'hsl(150, 100%, 66%)',
        },
      },
    },
  },
  plugins: [],
}
