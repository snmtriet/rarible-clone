/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1920px',
      },
    },
    fontFamily: {
      poppins: ['Poppins'],
    },
    screens: {
      xs: '576px',
      sm: '640px',
      md: '768px',
      'lg-m': '981px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        dark: '#16161a',
        light: '#fff',
      },
      backgroundColor: {
        dark: '#191c1f',
        light: '#fff',
        'btn-dark': '#272b30',
        'btn-light': '#fff',
      },
    },
  },
  plugins: [],
}
