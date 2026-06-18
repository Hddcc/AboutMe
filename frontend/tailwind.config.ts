import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "#0a0b0d",
          900: "#101317",
          850: "#151a1f",
          800: "#1d242b",
          700: "#2a3138",
          500: "#6f7b86",
        },
        signal: {
          mint: "#9ef7d6",
          gold: "#d6b36a",
          ink: "#e8edf2",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "IBM Plex Sans", "sans-serif"],
        body: ["IBM Plex Sans", "Segoe UI", "sans-serif"],
        mono: ["IBM Plex Mono", "Consolas", "monospace"],
      },
      boxShadow: {
        "signal-card": "0 22px 80px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.08)",
        "signal-glow": "0 0 0 1px rgba(158,247,214,0.28), 0 0 42px rgba(158,247,214,0.14)",
      },
    },
  },
  plugins: [],
} satisfies Config;
