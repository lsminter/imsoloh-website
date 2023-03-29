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
        'hero': "public/images/background-video_ivcz7m.mp4",
      },
      colors: {
        'youtube-red': '#FA5252',
        'twitch-purple': '#6441A4',
        'twitter-blue': '#03A9F4'
      },
      width: {
        'live': '460px'
      }
    },
  },
  plugins: [],
}
