import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors:{
        orange:{
          DEFAULT:"#F77433",
          1:"#F9E7C473"
        },
        grey:{
          1:"#413E3E"
        },
        purple:{
          1:"#531CC6"
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

// #FDEDCD5C, #FFFFFFFA, #F9E7C473