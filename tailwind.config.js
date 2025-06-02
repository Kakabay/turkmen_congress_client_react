/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        // background: 'hsl(var(--background))',
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },

        background: "#00171E",
        backgroundInverse: "hsla(0, 0%, 100%, 1)",
        outline: "hsla(196, 16%, 23%, 1)",
        outline2: "hsla(195, 16%, 41%, 1)",
        gold: "#C49D49",
        error: "hsla(0, 100%, 72%, 1)",
        onAnySurface: "#FFFFFF",
        onAnySurfaceInverse: "hsla(197, 12%, 12%, 1)",
        onAnySurfaceVariant: "#AAB8BD",
        surfaceContainer: "#002F3C",
        surfaceContainerLow: "hsla(194, 100%, 8%, 1)",
        surfaceContainerLowOutline: "#002933",
        surfaceContainerOutlineHigh: "#005066",
        surfaceHigh: "hsla(192, 100%, 17%, 1)",
      },
      fontFamily: {
        futura: ["FuturaPT", "sans-serif"],
        ztNeue: ["ZTNeueRalewe", "sans-serif"],
      },
      backgroundImage: {
        "hero-img": "url('/hero.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
