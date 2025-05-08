/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Slalom brand colors
        slalom: {
          blue: '#0076CE',
          navy: '#002033',
          teal: '#00C4B4',
          gray: '#5E6973',
          lightGray: '#F2F5F7',
          // Dark mode colors
          darkBlue: '#005A9E',
          darkBg: '#121212',
          darkCard: '#1E1E1E',
          darkText: '#E0E0E0',
          darkBorder: '#333333'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}