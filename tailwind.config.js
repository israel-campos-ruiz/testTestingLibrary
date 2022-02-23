module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'violet-isra':{
          100:'#DD90FE',
          200:'#CE5DFE',
          400:'#9B3EFE',
          500:'#8A00FC',
          600:'#7F00F5',
          700:'#6E00ED',
          800:'#6200E7',
          900:'#5400D8',
        }
      }
    },
  },
  plugins: [],
}