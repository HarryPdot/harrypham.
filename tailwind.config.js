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
      borderWidth: {
        2: "2px",
        4: "4px",
        arrow: "20px",
        6: "6px",
        8: "8px",
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
      },
      borderColor: {
        outerBubble: "#CB9452",
      },
      screens: {
        sm: "700px",
        md: "840px",
        lg: "1060px",
        xl: "1450px",
      },
    },
  },
  plugins: [],
};
