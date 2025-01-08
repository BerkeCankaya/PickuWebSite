/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'primary-shadow': '0px 0px 10px 0 #395ca1',
      },
      colors: {
        'background-color': '#0b0c16', 
        "secondary-backround": "#17192e",
        "color": "#ffffff",
        "secondary":"#1c1e37",
        "button-bgColor": "#3B82F6",
      },
    },
  },
  plugins: [],
}

