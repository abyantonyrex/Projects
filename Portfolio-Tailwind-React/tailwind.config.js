/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greenyellow: "#ADFF2F",
      },
      boxShadow: {
        "left-soft": "-10px 0 10px rgba(0, 0, 0, 0.1)",
        "cyan-glow": "0 0 20px rgba(0, 255, 255, 0.3)",
      },
      keyframes: {
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromTop: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        slideInFromLeft: "slideInFromLeft 0.5s ease-in-out forwards",
        slideInFromRight: "slideInFromRight 0.5s ease-in-out forwards",
        slideInFromTop: "slideInFromTop 0.5s ease-in-out forwards",
        float: "float 4s ease-in-out infinite",
        fadeInUp: "fadeInUp 1.2s ease-out both",
        "pulse-fast": "pulse 3s ease-in-out infinite",
        blink: "blink 1s step-start infinite",
      },
      screens: {
        xxs: "320px",
        xsm: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        DEFAULT: "2px 2px 4px rgba(0, 0, 0, 0.6)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
