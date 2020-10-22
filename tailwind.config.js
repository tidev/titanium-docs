const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: false,
  theme: {
    extend: {
      colors: {
        red: {
          ...colors.red,
          '100': '#ffebee', // $danger-ltr
          '500': '#D22630', // $danger
          '700': '#800008' // $danger-dk
        }
      },
      gridTemplateColumns: {
        'features': '35% 30% 35%'
      }
    }
  }
}
