const plugin = require('tailwindcss/plugin')

const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    '.backface-visible': { 'backface-visibility': 'visible', },
    '.backface-hidden': { 'backface-visibility': 'hidden', }
  })
});

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-180': { transform: 'rotateY(180deg)' }
  })
})

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brown: {
          900: '#33272A',
        }
      },
    },
    fontFamily: {
      'sans': 'Inter, sans-serif',
    },
  },
  plugins: [backfaceVisibility, rotateY],
}
