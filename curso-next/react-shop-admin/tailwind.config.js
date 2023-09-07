/** @type {import('tailwindcss').Config} */

const colors = require ('tailwindcss/colors')
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx,html}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/common/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    color:{
      ...colors,
    }
  },
  plugins: [
    require ('@tailwindcss/forms')
  ],
};
