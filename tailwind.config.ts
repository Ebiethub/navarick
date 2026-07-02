import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: { xs: "320px", wide: "1440px" },
      colors: {
        obsidian: { 950: "#070706", 900: "#0D0D0C" },
        charcoal: { 800: "#181816", 700: "#24221F" },
        bronze: { 500: "#A8733A", 400: "#C08A4A" },
        champagne: { 300: "#D8C29A", 200: "#E7D8BB" },
        chrome: { 300: "#BFC3C5", 100: "#E3E5E5" },
        "soft-white": "#F2F0EB",
        "muted-gray": "#9A9892",
        "quiet-gray": "#696762",
        canvas: "var(--color-canvas)",
        surface: "var(--color-surface)",
        "surface-strong": "var(--color-surface-strong)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-disabled": "var(--color-text-disabled)",
      },
      maxWidth: {
        site: "100rem",
        "reading-wide": "52.5rem",
        "reading": "45rem",
        "reading-narrow": "35rem",
        utility: "26.25rem",
      },
      spacing: {
        "section": "var(--space-section)",
        "section-compact": "var(--space-section-compact)",
        "cinematic": "var(--space-cinematic)",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      transitionDuration: {
        instant: "120ms",
        fast: "220ms",
        base: "420ms",
        medium: "500ms",
        slow: "700ms",
        cinematic: "1100ms",
      },
      transitionTimingFunction: {
        "navarick-out": "cubic-bezier(.16, 1, .3, 1)",
        "navarick-in-out": "cubic-bezier(.65, 0, .35, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
