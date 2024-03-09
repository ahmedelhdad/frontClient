/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:"'Poppins', sans-serif",
        roboto:"'Roboto',sans-serif"
      },
      container:{
        center:true,
        padding: '1rem'
      },
      colors:{
        'primary':'#fd3d57',
        'red':'#fc3d57',
        'white':'#fff',
        'black':'#000'
      },
      backgroundImage: {
        'hero-pattern': "url('./image/complete.png')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),

  ],
}