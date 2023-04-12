/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    backgroundImage: {
      background:
        'linear-gradient(43deg, #102d71 0%, #000000 52%, #c12a23 100%)',
    },

    colors: {
      transparent: colors.transparent,
      white: '#FFF',
      black: '#000',
      title: '#fffcf9',
      subtitle: '#b3b3b3',
      'bg-button': '#e9e6e3',
    },
    extend: {},
  },
  plugins: [],
};
