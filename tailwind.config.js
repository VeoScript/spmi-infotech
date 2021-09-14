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
        'mint-black': '#191919',
        'mint-white': '#F5F5F5',
        'mint-dark': '#90EE91',
        'mint-light': '#E5F6DF',
        'mint-semi-light': '#CAEEC2'
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      }
    }
  },
  plugins: [],
}
