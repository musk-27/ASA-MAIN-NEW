module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customColor: "#yourColorCode", // Replace with your color code
        customHoverColor: "#yourHoverColorCode", // Replace with your hover color code
        gradientFrom: "#FFDD00", // Yellow
        gradientTo: "#FF8C00", // Orange
        gradientYellow: "#FBBF24",
        gradientOrange: "#FB923C",
        "dark-blue": "#0B0F39",
        "light-blue": "#0E46D7",
        purple: "#5824CB",
        orange: "#F15A24",
        pink: "#FF00CC",
      },
      filter: {
        grayscale: "grayscale(1)",
        "grayscale-0": "grayscale(0)",
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        slideIn: "slideIn 1.5s ease-out forwards",
        borderRotate: "borderRotate 5s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        // bounce: {
        //   '0%, 100%': { transform: 'translateY(0)' },
        //   '50%': { transform: 'translateY(-10px)' },
        // },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        borderRotate: {
          "0%": {
            "border-image-slice": "1",
            "border-image-source": "linear-gradient(90deg, #facc15, #f56565)", // From yellow to red
          },
          "100%": {
            "border-image-slice": "1",
            "border-image-source": "linear-gradient(450deg, #facc15, #f56565)", // From yellow to red
          },
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        akira: ["Akira", "sans-serif"],
      },
      backgroundImage: () => ({
        "sports-edited": "url('/assets/images/sports.png')",
        "slider-one": "url('/assets/images/slider-one.jpeg')",
        "feature-image-1": "url('/assets/images/feature-image-1.jpeg')",
        cricket: "url('/assets/images/Cricket/Gallery2.JPG')",
        karate: "url('/assets/images/karate-uniform-size.jpeg')",
        archery: "url('/assets/images/archery-uniform-size.jpeg')",
        cricketImg: "url('/assets/images/cricket.jpg')",
        archeryImg: "url('/assets/images/archery.jfif')",
        cricketMain: "url('/assets/images/Activities/player.jfif')",
        basketballHome: "url('/assets/images/basketballHome.jpg')",
      }),
      cursor: {
        rockon: "url('/cursors/sports.png'), auto",
      },
    },
  },
  variants: {
    extend: { filter: ["hover"] },
  },
  plugins: [require("tailwindcss-filters")],
};
