module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#ca9e6f'
      },
      fontFamily: {
        SpaceMono: ['Space Mono', 'monospace']
      },
      backgroundImage: {
        home: "url('/src/assets/bg.jpg')",
        work: "url('/src/assets/bgWork.jpg')"
      }
    }
  },
  plugins: []
};
