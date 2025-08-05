import flowbiteReact from "flowbite-react/plugin/tailwindcss";
const theme = require("./src/styles/theme");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    ".flowbite-react/class-list.json",
  ],
  theme: {
    extend: theme,
  },
  plugins: [flowbiteReact],
};
