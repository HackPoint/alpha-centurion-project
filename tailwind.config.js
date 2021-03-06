const { guessProductionMode } = require('@ngneat/tailwind');

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
  prefix: '',
  mode: 'jit',
  purge: {
    content: [
      './apps/**/*.{html,ts,css,scss,sass,less,styl}',
      './libs/**/*.{html,ts,css,scss,sass,less,styl}'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        header: ['Montserrat Alternates']
      },
      backgroundColor: {
        'primary': '#f3f3f3',
        'secondary': '#fff',
        'checkbox': '#E6E6E6',
        'primary-yellow': '#FFDA8F'
      },
      backgroundImage: {
        'hero-pattern': 'url(\'/assets/img/hero.png\')',
        'hero-mobile-pattern': 'url(\'/assets/img/hero-mobile.png\')'
      },
      height: {
        hero: '470px',
        'mobile-hero': '400px'
      },
      width: {
        'slider-card': '330px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms'), require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')]
};
