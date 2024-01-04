/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    backgroundImage: {
      hero: "url(resources/HandballCourtImage.jpeg)",
    },
    extend: {},
    fontFamily: {
      display: ["Roboto", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
