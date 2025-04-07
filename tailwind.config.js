/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "!./src/components/Connect.tsx",
    "!./src/components/Timeline.tsx",
    "!./src/components/Gallery.tsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E88E5", // Brighter blue
        secondary: "#64B5F6", // Light blue
        accent: "#E3F2FD", // Very light blue
        dark: "#0D47A1", // Darker blue but still vibrant
        light: "#FFFFFF", // Pure white
        snow: "#F5F9FF", // Snow white with slight blue tint
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "snow-fall": "snow-fall 15s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "snow-fall": {
          "0%": { transform: "translateY(-10%)", opacity: 0 },
          "10%": { opacity: 1 },
          "100%": { transform: "translateY(100%)", opacity: 0 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "snow-pattern":
          "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSIxIi8+PGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMS41Ii8+PGNpcmNsZSBjeD0iNDUiIGN5PSI0NSIgcj0iMSIvPjxjaXJjbGUgY3g9IjY1IiBjeT0iNjUiIHI9IjEuNSIvPjxjaXJjbGUgY3g9Ijg1IiBjeT0iODUiIHI9IjEiLz48Y2lyY2xlIGN4PSIxMDUiIGN5PSIxMDUiIHI9IjEuNSIvPjxjaXJjbGUgY3g9IjEyNSIgY3k9IjEyNSIgcj0iMSIvPjxjaXJjbGUgY3g9IjE0NSIgY3k9IjE0NSIgcj0iMS41Ii8+PGNpcmNsZSBjeD0iMTY1IiBjeT0iMTY1IiByPSIxIi8+PGNpcmNsZSBjeD0iMTg1IiBjeT0iMTg1IiByPSIxLjUiLz48L2c+PC9zdmc+Cg==')",
        "winter-bg":
          "url('https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
      },
    },
  },
  plugins: [],
};
