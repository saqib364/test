module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/img/hero.png')",
        'hero2': "url('/img/hero2.jpg')",
       },
       minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '85%',
        'full': '100%',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
