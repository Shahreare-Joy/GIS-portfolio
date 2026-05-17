/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#102033',
        ocean: '#176B87',
        pine: '#1F7A5A',
        skywash: '#EAF4F6',
        field: '#DDEFE4',
        clay: '#B56A39',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(16, 32, 51, 0.10)',
      },
    },
  },
  plugins: [],
};
