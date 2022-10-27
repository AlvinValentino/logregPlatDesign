/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
          screens: {
              tablet: "640px",
              desktop: "1920px",
          },
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
              mini: "400px",
          },
      },
  },
    plugins: [],
  }
  