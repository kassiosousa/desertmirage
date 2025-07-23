/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          brand: {
            primary: "#063835",
            complementary: "#042F2E",
            blue: "#235B79",
            clear: "#3BBCA7",
            neutral: "#DAD5C3",
            secondary: "#d67d21",
            option1: "#FFC857",
            option2: "#FF6B6B",
            detail: "#7EA8BE",
          },
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
      },
    },
    plugins: [],
  }
  