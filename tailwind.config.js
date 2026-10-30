/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      colors: {
        // Landing-page aliases onto the theme variables.
        decor: "hsl(var(--decor))",
        ink: "hsl(var(--text))",
        walnut: "hsl(var(--muted-foreground))",
        canvas: "hsl(var(--background))",
        text: "hsl(var(--text))",
        background: "hsl(var(--background))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: "hsl(var(--secondary))",
        accent: "hsl(var(--accent))",
        card: "hsl(var(--card))",
        muted: {
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
      },
      fontFamily: {
        display: ['"Fraunces Variable"', "Palatino", "Georgia", "serif"],
        sans: ['"DM Sans Variable"', "system-ui", "sans-serif"],
      },
      // Type scale and 8pt spacing used by the landing page (from .claude/skills/SKILL.md).
      fontSize: {
        display: ["3.157rem", { lineHeight: "1.15", fontWeight: "700" }],
        h1: ["2.369rem", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["1.777rem", { lineHeight: "1.25", fontWeight: "600" }],
        h3: ["1.333rem", { lineHeight: "1.3", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        small: ["0.8125rem", { lineHeight: "1.4", fontWeight: "500" }],
      },
      spacing: { xs: "4px", sm: "8px", md: "16px", lg: "24px", xl: "48px" },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      }
    },
  },
  plugins: [],
};
