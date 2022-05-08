module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/images/bg_hero.png')",
        'join-discord': "url('/images/join_discord_bg.png')"
      }
    },
  },
  plugins: [],
}
