/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('./src/compo/bg_img02.jpg')",
      },
    },
  },
  plugins: [],
}

