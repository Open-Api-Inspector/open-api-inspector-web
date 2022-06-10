module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        orange: {
          100: '#ffedd5',
          200: '#fed7aa',
          500: '#f97316'
        },
        red: {
          100: '#fee2e2',
          200: '#fecaca',
          500: '#ef4444'
        },
        cyan: {
          100: '#cffafe',
          200: '#a5f3fc',
          500: '#06b6d4'
        }
      }
    },
  },
  plugins: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}
