/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode: 'media',
 
  theme: {
    
    extend: {  
      fontFamily: {
        Ubuntu: ['"Ubuntu"']
              },
      backgroundImage: {
        'hero': "url('..public/storage/hero.jpeg')"
      },
      
      }
    
  },
  
  
  plugins: [],
  
}

