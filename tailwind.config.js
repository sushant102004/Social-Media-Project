/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
    },

    extend: {
      fontFamily: {
        lexend: ["Lexend"],
      },
      colors: {
        "custom-bg": "#F4F1EB",
        "custom-text-focused" : "#093731"
      },
    },
  },
  plugins: [],
};
