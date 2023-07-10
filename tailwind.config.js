/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        pacifico: ['var(--font-pacifico)']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes:{
        wiggle: {
            '0%, 100%': { transform: 'rotate(-3deg)' },
            '50%': { transform: 'rotate(3deg)' },
        },
        drop:{
          '0%':{transform:'translateY(0vh)'},
          '75%':{transform:'translateY(90vh)'},
          '100%':{transform:'translateY(90vh'},
        },
        stem :{
          '0%': {opacity: '1'},
          '65%': {opacity: '1'},
          '75%': {opacity: '0'},
          '100%': {opacity: '0'},
        },
        splat: {
          '0%': {transform: 'scale(0)', opacity:'1'},
          '80%': {transform: 'scale(0)', opacity:'1'},
          '90%': {opacity: '0.5',transform: 'scale(1)'},
          '100%': {opacity: '0', transform: 'scale(1.5)'}
        },
        marquee: {
          '0%': { transform: 'translateX(30%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        radio: {
          '0%': {transform: 'scale(1.0)'},
          '10%': {transform: 'scale(1.22)'},
          '20%': {transform: 'scale(1.44)'},
          '30%': {transform: 'scale(1.66)'},
          '40%': {transform: 'scale(1.88)'},
          '50%': {transform: 'scale(2.1)'},
          '60%': {transform: 'scale(2.32)'},
          '70%': {transform: 'scale(2.54)'},
          '80%': {transform: 'scale(2.76)'},
          '90%': {transform: 'scale(2.98)'},
          '100%': {transform: 'scale(3.2)'},
        },
        pop: {
          '0%,': { transform: 'scale(0.8)' },
          '50%': { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(1.2)' },
        }
    },
    animation:{
        wiggle: 'wiggle 1s ease-in-out infinite',
        drop: 'drop 0.5s linear infinite',
        stem: 'stem 0.5 linear infinite',
        splat: 'splat 0.5s linear infinite',
        marquee: 'marquee 25s linear infinite',
        radio: 'radio 1.2s linear infinite',
        pop: 'pop 0.5s linear infinite'
    },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}


