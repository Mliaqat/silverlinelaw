/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/*.{html,js}",
    "./app/**/*.{html,js}",
    "./app/**/**/*.{html,js}",
    "./section/*.{html,js}",
    "./section/**/*.{html,js}",
    "./section/**/**/*.{html,js}",
  ],
  theme: {
    colors: {
      primary: "#1f3864",
    },
    extend: {},
  },
  plugins: [],
};
