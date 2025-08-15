
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#ECE9F8",
        paperDot: "#D7D2EC",
        ink: {
          title: "#2B2D56",
          body:  "#343A5E",
          link:  "#42C58A",
          linkhover: "#2F8C70",
        },
        ui: {
          steam:   "#14784bff",
          trailer: "#987317ff",
          social:  "#5d2aaeff",
          discord: "#3c4f9aff",
          press:   "#17726cff",
          contact: "#374487ff",
        },
        uiborder: {
          steam:   "#2F8C70",
          trailer: "#C0952C",
          social:  "#5F3CB1",
          discord: "#3E4A84",
          press:   "#1D6F69",
          contact: "#4D5BA4",
        }
      },
      fontFamily: {
        display: ['"Baloo 2"', "system-ui", "ui-sans-serif", "sans-serif"],
        body: ['Inter', "system-ui", "ui-sans-serif", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 24px rgba(0,0,0,.12)"
      }
    },
  },
  plugins: [],
}
