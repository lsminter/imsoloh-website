/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://res.cloudinary.com/dgjsveger/image/upload/v1679159440/mv147or5vwoi9iyfxo6x.png')",
      },
      colors: {
        'youtube-red': '#FA5252',
        'twitch-purple': '#6441A4',
        'twitter-blue': '#03A9F4'
      }
    },
  },
  plugins: [
    // require('tailwindcss-bg-image')
  ],
}
