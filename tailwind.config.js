/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.ts',
    ],
  },
  theme: {
    extend: {
      colors: {
        'custom-blue': '#325D88',
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['responsive', 'hover', 'focus', 'active'],
    },
  },
  plugins: [],
}
