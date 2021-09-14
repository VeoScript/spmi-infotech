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
        'lavender-black': '#383D50',
        'lavender-white': '#F5F3F4',
        'lavender-dark': '#332E4C',
        'lavender-light': '#8175A3'
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      }
    }
  },
  plugins: [],
}
