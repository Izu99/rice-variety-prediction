/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#36a836',
        'darkgreen': '#005100'
      },
      fontFamily: {
        'body': ['Nunito']
      },
      boxShadow: {
        'text': '2px 2px 4px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [  function ({ addUtilities }) {
    addUtilities({
      '.text-shadow': {
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
      },
    })
  },],
}
