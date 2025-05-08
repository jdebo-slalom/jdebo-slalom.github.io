/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Slalom brand colors
        slalom: {
          blue: '#0076CE',
          navy: '#002033',
          teal: '#00C4B4',
          gray: '#5E6973',
          lightGray: '#F2F5F7'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}