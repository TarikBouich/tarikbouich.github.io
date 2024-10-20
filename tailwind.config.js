/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    colors: {
      primary: "#fa5b0f",
      black: "#000",
      white: "#fff",
      paragraph: "#999999",
      transparent: "transparent",
      header: '#fffbf0',
      success: {
        100: '#155724',
        50: '#c3e6cb'
      },
      error: {
        100: '#721c24',
        50: '#f5c6cb'
      },
      dark: {
        100: "#1d1d1d",
        75: "#ddd",
        90: "rgba(29, 29, 29, .9)"
      }
    },
    fontFamily: {
      primaryFont: ['Sora', 'sans-serif']
    },
    letterSpacing: {
      normal: '0.15em',
    },
    extend: {
      spacing: {
        container: "1352px",
        author: '590px',
        content: 'calc(100% - 590px)',
        item: '350px',
        20: "20px",
        date: '131px',
        progress: '3px',
        project: '400px',
        header: 'calc(100% + 32px)',
        70: "70px"
      },
      fontSize: {
        xs: '13px',
        badge: '12px'
      },
      screens: {
        xl: {
          max: '1920px',
        },
        lgx: {
          max: '1350px'
        },
        lg: {
          max: '1023px',
        },
        md: {
          max: '992px',
        },
        sm: {
          max: '450px',
        },
      },
      lineHeight: {
        'paragraph': '1.7em',
      }
    },
  },
  plugins: [],
}

