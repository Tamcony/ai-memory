/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{index,vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('daisyui'),
  ],
}
