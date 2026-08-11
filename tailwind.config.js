/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1B1108",
          soft: "#2A1A0E",
          line: "#3C2716"
        },
        manila: {
          DEFAULT: "#F7E9C6",
          deep: "#EEDBA6"
        },
        marigold: {
          DEFAULT: "#F0A63A",
          light: "#F6C468",
          dark: "#C77E1E"
        },
        jeepney: {
          DEFAULT: "#C22A1D",
          deep: "#8F1F15"
        },
        banig: {
          green: "#3D5C3F",
          teal: "#215252"
        },
        cream: "#FBF1DE"
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"]
      },
      backgroundImage: {
        "sun-rays": "conic-gradient(from 0deg, var(--tw-gradient-stops))"
      },
      boxShadow: {
        stamp: "0 0 0 2px rgba(247,233,198,0.15)"
      },
      letterSpacing: {
        widest2: "0.28em"
      }
    }
  },
  plugins: []
};
