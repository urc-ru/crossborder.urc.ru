const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    enabled: true,
    content: ['*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
		  	  extend: {
				   fontFamily: {
        'sspro': ['Source Sans Pro'],
        'dinpro': ['DINPro-Regular'],
		  },
		  },
  colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
	  ugblue: "#00758F",
	  uggray: "#46505b",
	  ugred: "#e62d26",
    }
  },
  variants: {
    extend: {},
  },
		plugins: [
				require('daisyui'),
		],
}
