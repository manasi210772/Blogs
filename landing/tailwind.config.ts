import type { Config } from "tailwindcss";

// Design tokens from .claude/skills/SKILL.md (warm terracotta + cream palette).
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#FAF6F0",
        card: "#F2EAE0",
        input: "#FFFFFF",
        ink: "#2C1E11",
        walnut: "#5C4A37",
        accent: { DEFAULT: "#D97736", hover: "#BF5E1E" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Palatino", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["3.157rem", { lineHeight: "1.15", fontWeight: "700" }],
        h1: ["2.369rem", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["1.777rem", { lineHeight: "1.25", fontWeight: "600" }],
        h3: ["1.333rem", { lineHeight: "1.3", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        small: ["0.75rem", { lineHeight: "1.4", fontWeight: "500" }],
      },
      // 8pt grid: xs 4, sm 8, md 16, lg 24, xl 48
      spacing: { xs: "4px", sm: "8px", md: "16px", lg: "24px", xl: "48px" },
      borderRadius: { DEFAULT: "8px", sm: "6px", md: "8px", lg: "12px" },
    },
  },
  plugins: [],
};

export default config;
