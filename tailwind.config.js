/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Josefin Sans", "sans-serif"],
    },
    colors: {
      primary: "#181818",
      secondary: "#313131",
      heading: "#ffffff",
      content: "#AAAAAA",
      mafia: "tomato",
      citizen: "dodgerblue",
    },
    extend: {},
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
