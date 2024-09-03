import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        instantGreen: {
          1: "#00ad9c",
          2: "#03ab9a",
          3: "#05a898",
          4: "#08a696",
          5: "#0aa394",
        },
        instantOrange: {
          4: "#FF912E",
          3: "#FF922F",
          2: "#FB9C46",
          1: "#F2BF62",
          0: "#F1BF62",
        },
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [],
};

export default config;
