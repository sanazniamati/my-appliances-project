/** @format */

import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-card1": "url('/images/slider-img-1-2-min.png')",
      },
      backgroundPosition: {
        "custom-position": "0.2em 0.7em",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "100%",
        md: "1128px",
        lg: "1440px",
        xl: "1980px",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
