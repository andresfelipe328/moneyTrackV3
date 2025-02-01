import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#AB886D",
        secondary: "#493628",
        special: "#C3FCF2",
        onSuccess: "#859F3D",
        onFailure: "#D2665A",
      },
      backgroundImage: {
        bg: "linear-gradient(to right bottom, #e5d0aa, #ebd7b2, #f2dfba, #f8e6c2, #ffeeca)",
      },
      boxShadow: {
        onRest: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        onHover: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      },
    },
  },
  plugins: [],
} satisfies Config;
