// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust to your project
  ],
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
