const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'lavender-black': '#252C36',
        'lavender-white': '#FFFFFF',
        'lavender-gray': '#D5D7D6',
        'lavender-dark': '#016BB9',
        'lavender-light': '#00B7F1'
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      }
    }
  },
  variants: {
    scrollbar: ['dark']
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar')
  ],
}
