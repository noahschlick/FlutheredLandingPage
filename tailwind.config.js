/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'tulip-tree': {
          '50': '#fdf8ed',
          '100': '#f9eccc',
          '200': '#f2d795',
          '300': '#ecbc5d',
          '400': '#e8aa42',
          '500': '#df8621',
          '600': '#c5661a',
          '700': '#a44819',
          '800': '#86391a',
          '900': '#6e3019',
          '950': '#3f1709',
        },
      }
      
    },
  },
  plugins: [],
}

