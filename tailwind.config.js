/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        hover_link: "#8490ff",
        para: "#777777",
        h1: "#222222",
        my_bg_10: "rgb(132 144 255 / 0.1)",
        my_bg_5: "rgb(132 144 255 / 0.05)",
        my_bg: "rgb(132 144 255)",
        my_black: "rgb(0 0 0 / 0.7)",
        my_hover_header: "rgb(132 144 255 / 0.1)",
        my_footer: "#04091e",
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        laptop: { max: "1280px" },
        // => @media (max-width: 1279px) { ... }

        sm_lap: { max: "1024px" },
        // => @media (max-width: 1023px) { ... }

        tablet: { max: "768px" },
        // => @media (max-width: 767px) { ... }

        mobile: { max: "640px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};

// screens: {
//   "2xl": { max: "1535px" },
//   // => @media (max-width: 1535px) { ... }

//   xl: { max: "1280px" },
//   // => @media (max-width: 1279px) { ... }

//   lg: { max: "1024px" },
//   // => @media (max-width: 1023px) { ... }

//   md: { max: "768px" },
//   // => @media (max-width: 767px) { ... }

//   sm: { max: "640px" },
//   // => @media (max-width: 639px) { ... }
// },
