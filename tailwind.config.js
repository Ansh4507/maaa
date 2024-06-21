/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        customBlue: 'rgb(60, 72, 234)',
        customDarkBlue: 'rgb(40, 52, 214)',
      },
    },
  },
  plugins: [],
}