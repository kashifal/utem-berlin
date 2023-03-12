module.exports = {

  theme: {
    screens: {
      'xs': '322px',
      'sm': '450px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        Inter: 'Inter',
        InterBold: 'InterBold',
        InterExtraBold: 'InterExtraBold',
      },
      backgroundImage: {
        'hero-pattern': "url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAAXNSR0IArs4c6QAAACBJREFUCB1jYGBg+A/EIIBOQ0SRSXQVMD6yGggbJgOnAcmtCPjyS2ejAAAAAElFTkSuQmCC\")"
      },

      colors: {
        bgTopbar: "#2e3334",
        bgBeige: "#ebebeb",
        bgSidebar: "#f5f3f3",
        primary:'#fa4529'
      },
    },
  },
  plugins: [],
}
