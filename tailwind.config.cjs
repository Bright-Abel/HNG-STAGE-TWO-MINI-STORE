/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '0px 9.88px 25.44px 0px #88D5FF80',
        'custom-new': '0px 5px 20px 0px #f26722de',
        'custom-light2': '0px 5px 5px 0px #88D5FF80',
        'custom-dark': '0px 17.69px 23px 0px #0000000',
      },
      fontSize: {
        responsive: 'clamp(1rem, 5vw, 2rem)', // Custom class
      },
      fontSize: {
        responsiveHero: 'clamp(.7rem, 1vw, 1.5rem)', // Custom class
      },
    },
  },
  plugins: [],
};
