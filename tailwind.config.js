/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        monty: "Montserrat",
      },
      colors: {
        dok: "#12ddb6 ",
      },
    },
  },
  plugins: [],
};
