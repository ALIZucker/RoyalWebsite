/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin:{"faseledore":"8px"},
      backgroundColor:{"backgray":"#e1e1e1","sorati":"#FF1E6F","backfoot":"#FEF3F1"},
      textColor:{"sorati":"#FF1E6F"}
    },
  },
  plugins: [],
}