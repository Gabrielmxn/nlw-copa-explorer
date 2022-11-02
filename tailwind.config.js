/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    colors: {
      gray: {
        100: '#FFFFFF',
        200: '#E1E1E6',
        300: '#8D8D99',    
        700: '#1D1C19',    
        800: '#202024',
        850: '#09090A',
        900: '#121214',
      },
      blue:{
        500: '#338AF3',
      },
      yellow: {
        500: '#F7DD43'
      },
      green: {
        200: '#B2A659',
        300: '#129E57',
        500: '#047C3F'
      },
    },
    extend: {
      backgroundImage: {
        'bg-green': "url('../../public/bg-green.svg')"
      },
    },
  },
  plugins: [],
}
