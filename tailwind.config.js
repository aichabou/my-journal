// tailwind.config.js
module.exports = {
    darkMode: 'class',
    content: ["./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        colors: {
          cream: "#FAF9F6",
          charcoal: "#1A1A1A",
          indigo: "#274472",
          dustyIndigo: "#A5B1C2",
          eggshell: "#FBFBF7",
          ink: "#2A2A2A",
          vermilion: "#D64541",
          matcha: "#A9BDAE",
          matchaDark: "#8C9F91",
          sticky: "#FFF1DC",
          stickyBorder: "#274472",
          stickyDark: "#2F2F2F",
          stickyBorderDark: "#A5B1C2"
        },
        fontFamily: {
          title: ['Caveat', 'cursive'],
          body: ['Patrick Hand', 'cursive'],
          accent: ['Gloria Hallelujah', 'cursive']
        },
        fontSize: {
          base: '18px',
          title: '32px',
          sticker: '16px'
        }
      }
    },
    plugins: []
  };
  