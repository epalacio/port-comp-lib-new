module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        daintree: '#022534',
        deepSeaGreen: '#094F6E',
        jellyBean: '#2D7A9C',
        sinbad: '#96C7D5',
        lilyWhite: '#E4F5FF'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
