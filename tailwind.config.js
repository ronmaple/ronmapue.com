/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  // https://tailwindcss.com/docs/typography-plugin#installation
  // For markdown styles -- lists, and other markdown styles were not rendering properly.
  //  See 'className="prose"' in pages/blogs/%5Bslug%5D.js
  // reference: https://github.com/tailwindlabs/tailwindcss/discussions/7756
  plugins: [require('@tailwindcss/typography')],
}