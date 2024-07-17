/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}",
    "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Titillium Web", "sans-serif"],
        heading2: ["Inter", "sans-serif"],
        body: ["Padauk", "sans-serif"]
      },
      fontWeight: {
        heading: [700],
        heading2: [400],
        body: [400],
      },
      fontStyle:{
        heading: ["normal"],
        heading2: ["normal"],
        body: ["normal"],
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

