/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors: {
      primary: "#ff6363",
      secondary: {
        100: "#e2e2d5",
        200: "#888883",
      },
    },
    fontFamily: {
      montserrat: ['Montserrat']
    }
  },
  plugins: [],
};
