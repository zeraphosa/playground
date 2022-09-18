/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  theme: {
    extend: {
      colors: {
        back: "#2C3333",
        text: "#ffffff",
        bl: "#2694EC",
      },
    },
  },
  plugins: [],
};
