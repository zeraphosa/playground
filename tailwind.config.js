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
        secondary: "#395B64",
        secondary2: "#A5C9CA",
        secondary3: "#E7F6F2",
      },
    },
  },
  plugins: [],
};
