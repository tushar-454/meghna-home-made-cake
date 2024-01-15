/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
      colors: {
        froly: {
          50: '#fff1f2',
          100: '#ffe4e7',
          200: '#ffccd3',
          300: '#fea3b0',
          400: '#fd6e86',
          500: '#f73c60',
          600: '#e41a4b',
          700: '#c10f3f',
          800: '#a1103b',
          900: '#8a1139',
          950: '#4d041b',
        },
        supernova: {
          50: '#fffee7',
          100: '#fffec1',
          200: '#fff886',
          300: '#ffec41',
          400: '#ffda0e',
          500: '#fdca01',
          600: '#d09500',
          700: '#a66a02',
          800: '#89520a',
          900: '#74430f',
          950: '#442304',
        },
      },
    },
  },
  plugins: [],
};
