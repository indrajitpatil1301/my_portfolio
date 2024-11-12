/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./node_modules/flowbite/**/*.js",
    // other paths
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

