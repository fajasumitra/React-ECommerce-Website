/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#c87065",
        secondary : "#c8a165",
        isGray : "#d4d4d4",
        textMain : "#434343",
        textSecondary : "#666666",
        textTertiary : "#999999",
        default : "#cccccc"
      }
    },
  },
  plugins: [],
}
