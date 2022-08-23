/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl-max": { max: "1535px" },
        "xl-max": { max: "1279px" },
        "lg-max": { max: "1023px" },
        "md-max": { max: "767px" },
        "sm-max": { max: "639px" },
        "xs-max": { max: "548px" },
        "xs-min": { min: "548px" },
      },
      colors: {
        main: {
          blue: "#4841FF",
          purple: "#BE34FF",
        },
        blueBg: "#EFF5FF",
        purpleBg: "#FAEEFF",
        success: "#34E3A4",
        error: "#F65C5C",
        blueHover: "#3730FF",
        blueActive: "#2721D2",
        blueFocus: "#4B45F8",
        dark: "#5F5F5F",
        gray: "#9D9D9D",
        orange: "#FB5800",
        green: "#27C93F",
        yellow: "#FFBD2E",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "background-layer": "url('/images/background-layer.svg')",
        "background-layer-mobile": "url('/images/background-layer-mobile.svg')",
        "background-drawer": "url('/images/drawer-background.svg')",
      },
      keyframes: {
        dropdown: {
          "0%": {
            opacity: 0,
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        "contact-input": {
          "0%": {
            width: "0",
            "padding-left": "0",
            "padding-right": "0",
          },
          "100%": {
            width: "20rem",
            "padding-left": "1rem",
            "padding-right": "1rem",
          },
        },
        ripple: {
          "75%, 100%": {
            transform: "scale(4)",
            opacity: "0",
          },
        },
        revealFromBottom: {
          "0%": {
            transform: "translateY(50px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        revealFromLeft: {
          "0%": {
            transform: "translateX(-50px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        revealFromRight: {
          "0%": {
            transform: "translateX(50px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        dropdown: "dropdown 250ms ease-in-out both",
        "contact-input": "contact-input 1s ease-in-out 2s both",
        ripple: "ripple 1s cubic-bezier(0, 0, 0.2, 1) both;",
        revealFromBottom: "revealFromBottom 1.8s ease-out both;",
        revealFromLeft: "revealFromLeft 1.8s ease-out both;",
        revealFromRight: "revealFromRight 1.8s ease-out both;",
      },
      cursor: {
        fancy: "url(/icons/fancy-cursor.svg), pointer",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
