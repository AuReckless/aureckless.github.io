/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}',
    './index.html'
  ],
  theme: {
    fontFamily: {
      
    },
    extend: {
      boxShadow: {
        neon: "0 0 5px theme('bg-purple-700'),"
      },
    },
  },
  plugins: [],
}

