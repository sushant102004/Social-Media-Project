/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
    },
    extend: {
      fontFamily: {
        lexend: ["Lexend"]
      }
    },
  },
  plugins: [],
}
