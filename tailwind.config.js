/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sora": "Sora",
      } ,
      keyframes: {
        'open-menu': {
          '0%': {transform: 'scaleY(0) translateX(-25%)'},
          '80%': {transform: 'scaleY(1.2)  translateX(-12.5%)'},
          '100%': {transform: 'scaleY(1)  translateX(0%)'}
        },
      },
    },
    animation: {
      'open-menu': 'open-menu 0.5s ease-in-out forwards alternate',
    }
  },
  plugins: [],
}