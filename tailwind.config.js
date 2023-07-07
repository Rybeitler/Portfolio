/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
        }
    },
    animation:{
        wiggle: 'wiggle 1s ease-in-out infinite',
        drop: 'drop 0.5s linear infinite',
        stem: 'stem 0.5 linear infinite',
        splat: 'splat 0.5s linear infinite',
        marquee: 'marquee 25s linear infinite',
    },
    },
  },
  plugins: [],
}


