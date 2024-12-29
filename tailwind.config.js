/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor : '#181818',
        logoColor:'#FF8A00',
      }
    },
  },
  plugins: [],
}