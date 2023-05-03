/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        tlight: "#FEF9C3",
        tdark: "#301f40",
        bgdark: "#0d0118",
        secondary: "#4ade80",
        primary: "#6f42c1",
        accent: "#ffc107",
        zinc: colors.trueGray,
      },
      fontFamily: {
        logo: ['"Righteous"', "cursive"],
      },
    },
  },
  plugins: [],
};
