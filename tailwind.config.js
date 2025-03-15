/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        greatVibes: "Great Vibes",
        mulish: "Mulish",
        londrinaOutline: "Londrina Outline",
      },
      colors: {
        // appBlack: "#0d0d0d",
        appBlack: "#1e1e1e",
        appLightGray: "#F2F2F2",
        appDarkGray: "#333333",
        appWhite: "#ffffff",
        appLight: "#F9F9F9",
        appBgLight: "#eaf7f7",
        textBlack: "#1B1E22",
        appPrimary: "#006ACE",
        appViolet: "#003ACE",
        appTeal: "#0094CE",
        appDarkBlue: "#004A9E",
        appLightBlue: "#3399FF",
      },
      boxShadow: {
        "custom-light": "0 2px 4px rgba(255, 255, 255, 0.6)",
        "custom-dark": "0 2px 4px rgba(0, 0, 0, 0.5)",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "scale(1) rotateZ(0)" },
          "1%": { transform: "scale(.5) rotateZ(-180deg)" },
          "5%": { transform: "scale(1) rotateZ(-360deg)" },
        },
        heartPulse: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "50%": { transform: "scale(1.5)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },

        combineRotateHeartPulse: {
          "0%": { transform: "scale(1) rotateZ(0)", opacity: 1 },
          "50%": { transform: "scale(1.5) rotateZ(-180deg)", opacity: 0.5 },
          "100%": { transform: "scale(1) rotateZ(-360deg)", opacity: 1 },
        },
        shake: {
          "0%, 100%": {
            transform: "translateY(0) rotate(0deg)",
            transformOrigin: "center",
          },
          "50%": {
            transform: "translateY(-10px) rotate(10deg)",
            transformOrigin: "20px 50px",
          },
        },
      },
      animation: {
        rotate: "rotate 10s linear infinite",
        heartPulse: "heartPulse 0.5s ease-in-out infinite",
        combineRotateHeartPulse:
          "combineRotateHeartPulse 30s ease-in-out infinite",
        shake: "shake 0.5s infinite",
      },
    },
  },
  plugins: [],
};
