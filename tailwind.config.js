/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    backgroundImage: {
      background:
        'linear-gradient(43deg, #102d71 0%, #000000 52%, #c12a23 100%)',
    },
    keyframes: {
      background: {
        '0%': { 'background-position': '0% 50%' },
        '50%': { 'background-position': '100% 50%' },
        '100%': { 'background-position': '0% 50%' },
      },
    },
    colors: {
      transparent: colors.transparent,
      white: '#FFF',
      black: '#000',
      title: '#fffcf9',
      subtitle: '#b3b3b3',
      'bg-button': '#e9e6e3',
    },
    extend: {
      animation: {
        background: 'background 15s ease infinite',
      },
      backgroundSize: {
        300: '300% 300%',
      },
    },
  },
  plugins: [],
};
