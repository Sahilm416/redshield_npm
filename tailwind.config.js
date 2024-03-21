const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "redshield-",

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border-red))",
        input: "hsl(var(--input-red))",
        ring: "hsl(var(--ring-red))",
        background: "hsl(var(--background-red))",
        foreground: "hsl(var(--foreground-red))",
        primary: {
          DEFAULT: "hsl(var(--primary-red))",
          foreground: "hsl(var(--primary-foreground-red))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground-red))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive-red))",
          foreground: "hsl(var(--destructive-foreground-red))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted-red))",
          foreground: "hsl(var(--muted-foreground-red))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground-red))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover-red))",
          foreground: "hsl(var(--popover-foreground-red))",
        },
        card: {
          DEFAULT: "hsl(var(--card-red))",
          foreground: "hsl(var(--card-foreground-red))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  corePlugins: {
    preflight: false
  }
}
