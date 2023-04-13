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
      button: '#e9e6e3',
      gray: {
        400: '#ccc',
      },
    },
    extend: {
      keyframes: {
        background: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        'skeleton-animation': {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(100vh)' },
        },
      },
      animation: {
        background: 'background 15s ease infinite',
        'skeleton-animation': 'skeleton-animation 2s ease infinite',
      },
      backgroundSize: {
        300: '300% 300%',
      },
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
    },
  },
  plugins: [],
};
