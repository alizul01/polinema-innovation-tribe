/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: "2rem",
    },
    fontFamily: {
      sans: ['"Inter"', "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
