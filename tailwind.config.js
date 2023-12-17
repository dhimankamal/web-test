import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#F77433',
          1: '#F9E7C473',
        },
        grey: {
          1: '#413E3E',
          2: '#807F7F',
          3: '#D9D9D9',
          4: '#F8F8F8',
        },
        purple: {
          1: '#531CC6',
        },
        green: {
          1: '#16A06F',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};

// #FDEDCD5C, #FFFFFFFA, #F9E7C473
