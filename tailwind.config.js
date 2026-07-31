export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#2563EB',
          secondary: '#7C3AED',
          accent: '#06B6D4',
        },
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.18)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(37, 99, 235, 0.18), transparent 28%), radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.14), transparent 20%)',
      },
    },
  },
  plugins: [({ addVariant }) => addVariant('light', '.light &')],
}
