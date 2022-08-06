const { colors } = require("prompt");

// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      gridTemplateColumns:{
        "menu": "100px 1fr 200px"
      },
      colors: {
        blue: {
          1000: '#2a3f7a',
        },
      }
    },
  },
  plugins: [],
}