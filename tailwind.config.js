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
        'bg-light': '#f9f9f9',
        'bg-dark': '#1a1812',
        'bg-card-dark': '#332f1d',
      },
      boxShadow: {
        'comic': '4px 4px 0px 0px #000000',
        'comic-hover': '2px 2px 0px 0px #000000',
        'comic-sm': '2px 2px 0px 0px #000000',
      },
      keyframes: {
        'cartoon-bounce': {
          '0%, 100%': { transform: 'translateY(0) scale(1.1, 0.9)' },
          '50%': { transform: 'translateY(-30px) scale(0.9, 1.1)' },
        },
        'eye-blink': {
          '0%, 90%, 100%': { transform: 'scaleY(1)' },
          '95%': { transform: 'scaleY(0.1)' },
        },
        'shadow-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.4' },
          '50%': { transform: 'scale(0.6)', opacity: '0.15' },
        },
        'text-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(5deg)' },
        },
        'sparkle': {
          '0%, 100%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
          '50%': { transform: 'scale(1) rotate(180deg)', opacity: '1' },
        },
        'wave': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(20deg)' },
          '75%': { transform: 'rotate(-15deg)' },
        },
        'dots': {
          '0%, 20%': { opacity: '0' },
          '40%, 100%': { opacity: '1' },
        },
        'pencil-draw': {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        'cartoon-bounce': 'cartoon-bounce 0.7s infinite ease-in-out',
        'eye-blink': 'eye-blink 3s infinite',
        'shadow-pulse': 'shadow-pulse 0.7s infinite ease-in-out',
        'text-bounce': 'text-bounce 0.6s infinite ease-in-out',
        'float': 'float 2s infinite ease-in-out',
        'sparkle': 'sparkle 1.5s infinite ease-in-out',
        'wave': 'wave 0.5s infinite ease-in-out',
        'dots': 'dots 1.4s infinite ease-in-out',
        'wiggle': 'wiggle 0.3s infinite ease-in-out',
      }
    },
  },
  plugins: [],
}