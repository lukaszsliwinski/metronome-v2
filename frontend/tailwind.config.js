/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px'
      },
      minHeight: {
        'screen-mobile': 'calc(var(--vh, 1vh) * 100)'
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
};
