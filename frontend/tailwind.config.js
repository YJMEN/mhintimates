/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '1.25rem',
        md: '1.5rem',
        lg: '2rem',
      },
    },
    extend: {
      colors: {
        brand: {
          gold: '#D4AF37',
          goldDark: '#B8860B',
        },
      },
      screens: {
        xs: '375px',
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
  daisyui: {
    themes: ['light','lofi'],
  }
}