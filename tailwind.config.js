const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  purge: [
    './index.html',
    './*.html',
    './**/*.html',
    './**/*.js'
  ],
  theme: {
    fontSize: {
      xxs: '10px',
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: ['22px', '1.4'],
      '2xl': ['24px', '1.3'],
      '3xl': ['32px', '1.2'],
      '4xl': ['40px', '1.2'],
      '5xl': ['48px', '1.1'],
      '6xl': ['56px', '1.1'],
      '7xl': ['64px', '1.1'],
      '8xl': ['72px', '1.1'],
    },
    letterSpacing: {
      tightest: '-.5em',
      tighter: '-.1em',
      tight: '-.05em',
      normal: '0',
      wide: '.05em',
      wider: '.1em',
      widest: '.5em',
    },
    extend: {
      colors: {
        primary: {
          lightest: '#EAC3C7',
          lighter: '#DD9FA5',
          light: '#C35662',
          default: '#A90E1E',
          dark: '#980D1B',
          darker: '#650812',
          darkest: '#4C060E',
        },
        secondary: {
          lightest: '#FFFDC7',
          lighter: '#FFFBA5',
          light: '#FFF862',
          default: '#FFF51E',
          dark: '#E6DD1B',
          darker: '#999312',
          darkest: '#736E0E',
        },
        accent: {
          lightest: '#FEFDFB',
          lighter: '#FDFBF9',
          light: '#FBF8F5',
          default: '#F9F5F0',
          dark: '#E0DDD8',
          darker: '#959390',
          darkest: '#706E6C',
        },
      },
      fontFamily: {
        sans: [
          'Poppins',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      screens: {
        'sm-down': {
          max: '767px',
        },
        'md-down': {
          max: '1023px',
        },
        '2xl': '1440px',
        '3xl': '1920px',
        print: {
          raw: 'print',
        },
      },
    },
  },
  variants: {
    fontFamily: false,
  },
  corePlugins: {
    container: false,
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
