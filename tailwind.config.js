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
        softPurple: '#A18CD1',
        softTeal: '#84fab0',
        softYellow: '#FFED75',
        gradientStart: '#1E1F4A',
        gradientMid: '#2E8BC0',
        gradientEnd: '#A1D6E2',
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },

      animation: {
        blob: "blob 7s infinite",
      },

      keyframes: {
        blob: {
          '0%, 100%': { transform: "translate(0px, 0px) scale(1)" },
          '33%': { transform: "translate(30px, -50px) scale(1.05)" },
          '66%': { transform: "translate(-20px, 30px) scale(0.95)" },
        },
      },
    },
  },

  plugins: [],
}
