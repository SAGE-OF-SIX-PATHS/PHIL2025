/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CBD5E1",
        "primary-transparent": "#CBD5E1DD",
        secondary: "#334155",
        background: "#FAFAFA",
        "text-orange": "#F87537",
        "button-boundary-color": "#94A3B8",
        "card-bg": "#1B1B1B",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".no-copy": {
            "user-select": "none",
            "-webkit-user-select": "none",
            "-moz-user-select": "none",
            "-ms-user-select": "none",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
