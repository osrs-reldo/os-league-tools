/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    themeVariants: ['tl-dark', 'tb-dark', 'sl-dark', 'mono-dark', 'tl-light', 'tb-light', 'sl-light', 'mono-light'],
    extend: {
      colors: {
        'tl-lime': '#a4ce27',
        'tl-sage': '#649044',
        'tb-sand': '#e5d993',
        'tb-brown': '#634228',
        'sl-ecto': '#13d591',
        'sl-teal': '#008076',
        'mono-dark': '#f9fafb',
        'mono-white': '#374151',
        gray: {
          150: '#f1f2f5',
        },
        zinc: {
          550: '#46464e',
          750: '#35353b',
        },
      },
      dropShadow: {
        overlay: '0 8px 4px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        'sans-alt': ['Inconsolata', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('tailwindcss-multi-theme'),
  ],
};
