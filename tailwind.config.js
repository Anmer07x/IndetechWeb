module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#2EA690",
        "custom-blue": "#007bff",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".text-shadow": {
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5  )", // Ajusta a tu gusto
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
