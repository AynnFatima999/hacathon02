import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        g1: "#9F9F9F",
        g2: "#D9D9D9",
        w1: "#FAF4F4",
        w2: "#FAF4F4",
        y1: "#FBEBB5",
        y2: "#FFF9E5",


      },
      fontFamily: {
        Poppins : ["Poppins, sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
