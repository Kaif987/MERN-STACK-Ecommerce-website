/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "montserrat": ["Montserrat", "sans-serif"]
      },
      backgroundColor:{
        "grayish": "#F5F5F5",
        "btn-black": "#333333",
        "transparent-img": "rgba(255, 255, 255, 0.53)",
      },
      textColor:{
        "title":"#6F7F8A"
      },
      borderColor:{
        "grayish": "#CCCCCC"
      },
    },
  },
  plugins: [],
}
