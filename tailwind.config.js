/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FFC107', // Amber for a playful/cartoon feel
        'dark-text': '#000000',
      },
      boxShadow: {
        'comic': '4px 4px 0px 0px #000000',
        'comic-hover': '2px 2px 0px 0px #000000',
      }
    },
  },
  plugins: [],
}