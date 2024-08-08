/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brown: '#784F33',
        'text-color': '#252B42',
        'second-text-color': '#737373',
        'custom-blue': '#295C7A',
        'input-color': '#F9F9F9',
        'input-border-color': '#BDBDBD',
        'learn-more': '#D0A144',
        'feature-bg': '#F6E4D7',
        'feature-border': '#A9D6FF',
      },
      fontFamily: {
        sans: ['Martel', 'Montserrat', 'Open Sans'],
        montserrat: ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'], 
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

