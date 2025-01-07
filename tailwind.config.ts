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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        "max-1536": { max: "1536px" },
        "max-1280": { max: "1280px" },
        "max-1024": { max: "1024px" },
        "max-768": { max: "768px" },
        "max-640": { max: "640px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
