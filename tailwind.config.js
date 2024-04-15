module.exports = {
  theme: {
    extend: {
      animation: {
        'move-up': 'moveUp 2s ease-in-out'
      },
      keyframes: {
        moveUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        }
      }
    }
  },
  variants: {},
  plugins: [],
}