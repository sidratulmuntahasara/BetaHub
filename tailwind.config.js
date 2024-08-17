/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        disco: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        rotateIn: {
          '0%': {
            opacity: '0',
            transform: 'rotateY(-90deg)',
          },
          '100%': {
            opacity: 1,
            transform: 'rotateY(0)',
          }
        },
        slideUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(100%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          }
        },
        
      },
      animation: {
        disco: 'disco 5s linear infinite',
        spin: 'spin 3.5s infinite',
        rotateIn: 'rotateIn 3s ease forwards',
        slideUp: 'slideUp 1s ease forwards',
        up: 'slideUp 1s ease normal forwards',
      },
    },
  },
  plugins: [require('daisyui'),],
};
