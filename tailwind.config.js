
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#3B82F6",
          600: "#2563EB",
        },
        secondary: {
          500: "#10B981",
          600: "#059669",
        },
        dark: {
          500: "#1F2937",
          600: "#111827",
        },
      },
      boxShadow: {
        'glow': '0 0 15px rgba(59, 130, 246, 0.5)',
        'glow-green': '0 0 15px rgba(16, 185, 129, 0.5)',
      }
    },
  },
  plugins: [],
};