/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,njk,md}",
    "./src/_includes/**/*.njk",
    "./src/_layouts/**/*.njk",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#3776ab',
          400: '#316997',
          500: '#2a5880',
          600: '#1d3f5b', // added
          700: '#1d3f5b',
          800: '#1c3a55',
          900: '#1e2933'
        },
        secondary: {
          400: '#ffdf76',
          500: '#fdd03f',
          700: '#e2b215',
        }
      },
      animation: {
        scroll: 'scroll 80s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
