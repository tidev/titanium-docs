const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: false,
  theme: {
    extend: {
      colors: {
        red: {
          ...colors.red,
          '500': '#CA2127',
          '700': '#B1080E'
        }
      },
      gridTemplateColumns: {
        'features': '35% 30% 35%'
      }
    }
  }
}
