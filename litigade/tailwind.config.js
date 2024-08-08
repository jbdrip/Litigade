/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brown: {
          500: '#A0522D', // Custom brown color
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

