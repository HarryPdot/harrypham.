/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  purge: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add more here
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        darkMode: "#131620",
        bubble: "#F1BA5F",
      },
      colors: {
        light: "#C4D1EC",
      },
      maxWidth: {
        screenWidth: "1366px",
      },
      maxHeight: {
        screenHeight: "768px",
      },
      fontSize: {
        small: 8,
        medium: 16,
        large: 32,
      },
      boxShadow: {
        bubbleShadow: "10px 10px 15px -5px, 8px 8px 10px -5px",
      },
      borderWidth: {
        arrow: "20px",
      },
      borderColor: {
        outerBubble: "#CB9452",
      },
    },
  },
  plugins: [],
};
