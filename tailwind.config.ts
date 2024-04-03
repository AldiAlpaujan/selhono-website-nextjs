import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: {
          dark: "#C76904",
          light: "#CDA274",
        },
        title: "#292F36",
        body: "#4D5053",
      },
      boxShadow: {
        "btn-shadow": "0 10px 20px 0px rgba(192, 192, 192, 0.35)",
      },
      fontFamily: {
        "dm-serif-display": ["var(--font-dm-serif-display)"],
        jost: ["var(--font-jost)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
