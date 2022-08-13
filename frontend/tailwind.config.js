/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      inter: ["Inter"],
  },
  colors: {
      ov: "#A2A2A2",
      303030: "#303030",
      585858: "#585858",
  },
  fontSize: {
      customsize1: "80px",
  },
  maxWidth: {
    mini: "280px",
  },
  },
  },
  plugins: [],
}
