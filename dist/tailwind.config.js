/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        biru: "#0099ff",
        ungu: "#a78bfa",
        hitam: "#0C4A6E",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
