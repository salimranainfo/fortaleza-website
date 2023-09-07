/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
        'unica-one': ['Unica One', 'sans-serif'],
      },
      colors: {
        'primary-light': '#B29F82',
        'primary-dark': '#A89372',
        'gray-light': '#F2F2F2',
        'gray-dark': '#272829',
        'gray-darker': '#030303',
      },
    },
  },
  plugins: [],
};
