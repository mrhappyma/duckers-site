import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        duckYellow: "#ffd901",
        notQuiteBlack: "#2c2f33",
      },
    },
  },
  plugins: [],
} satisfies Config;
