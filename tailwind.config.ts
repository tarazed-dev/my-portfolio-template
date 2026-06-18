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
        background: "#000000",
        foreground: "#fafafa",
        muted: "#a1a1aa",
        accent: {
          DEFAULT: "#8b5cf6",
          light: "#a78bfa",
          dark: "#7c3aed",
        },
        surface: {
          DEFAULT: "#141414",
          hover: "#1a1a1a",
          border: "#27272a",
        },
      },
      fontFamily: {
        sans: ["var(--font-ibm-plex-mono)", "system-ui", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
        plex: ["var(--font-ibm-plex-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse at top right, rgba(139, 92, 246, 0.15), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
