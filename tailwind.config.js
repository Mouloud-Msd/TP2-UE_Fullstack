// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#254d70",
        secondary: "#131d4f",
        background: "#efe4d2",
        text: "#954c2e",
      },
    },
  },
  plugins: [],
};
