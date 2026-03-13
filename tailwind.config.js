/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d6f2ff',
          200: '#ace4ff',
          300: '#72d0ff',
          400: '#33b7f4',
          500: '#0f98d8',
          600: '#0b78af',
          700: '#0d618d',
          800: '#125073',
          900: '#144360'
        },
        accent: {
          50: '#effdf7',
          100: '#d9f9ea',
          200: '#b6f1d5',
          300: '#81e4b7',
          400: '#46cf90',
          500: '#23b773',
          600: '#15915a',
          700: '#147349',
          800: '#155b3d',
          900: '#134b34'
        }
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 152, 216, 0.12)',
        card: '0 16px 35px rgba(20, 67, 96, 0.08)'
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at top left, rgba(15, 152, 216, 0.18), transparent 30%), radial-gradient(circle at bottom right, rgba(35, 183, 115, 0.16), transparent 28%)'
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Outfit', 'sans-serif']
      }
    }
  },
  plugins: []
};
