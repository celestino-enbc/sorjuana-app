import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          deep: "#1A1A2E",
          DEFAULT: "#16213E",
          light: "#1F3460",
        },
        accent: {
          DEFAULT: "#E94560",
          hover: "#D63A54",
          light: "#FF6B6B",
        },
        secondary: {
          DEFAULT: "#0F3460",
          hover: "#0A2440",
        },
        neutral: {
          white: "#FFFFFF",
          "off-white": "#F8F9FA",
          cream: "#FDFCFB",
          light: "#E9ECEF",
          100: "#DEE2E6",
          200: "#CED4DA",
          300: "#ADB5BD",
          400: "#6C757D",
          500: "#495057",
          600: "#343A40",
          700: "#212529",
          black: "#000000",
        },
        success: {
          DEFAULT: "#198754",
          light: "#D1E7DD",
        },
        warning: {
          DEFAULT: "#FFC107",
          light: "#FFF3CD",
        },
        error: {
          DEFAULT: "#DC3545",
          light: "#F8D7DA",
        },
        info: {
          DEFAULT: "#0F3460",
          light: "#CFE2FF",
        },
      },
      fontFamily: {
        display: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        accent: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      fontSize: {
        "display-1": ["clamp(2.5rem, 5vw, 5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-2": ["clamp(2.25rem, 4.5vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "h1": ["clamp(2rem, 3.5vw, 3.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "700" }],
        "h2": ["clamp(1.75rem, 2.75vw, 2.75rem)", { lineHeight: "1.2", fontWeight: "600" }],
        "h3": ["clamp(1.5rem, 2vw, 2rem)", { lineHeight: "1.25", fontWeight: "600" }],
        "h4": ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
        "h5": ["1.25rem", { lineHeight: "1.35", fontWeight: "600" }],
        "h6": ["1.125rem", { lineHeight: "1.4", fontWeight: "600" }],
        "body-xl": ["1.25rem", { lineHeight: "1.6" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body-md": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5", letterSpacing: "0.01em" }],
        "body-xs": ["0.8125rem", { lineHeight: "1.5", letterSpacing: "0.02em" }],
        caption: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.04em", fontWeight: "500" }],
        overline: ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.1em", fontWeight: "600" }],
      },
      spacing: {
        "2xs": "4px",
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
        "4xl": "80px",
        "5xl": "120px",
      },
      borderRadius: {
        none: "0",
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        full: "9999px",
      },
      boxShadow: {
        "level-1": "0 2px 4px rgba(0, 0, 0, 0.04)",
        "level-2": "0 4px 12px rgba(0, 0, 0, 0.08)",
        "level-3": "0 8px 24px rgba(0, 0, 0, 0.12)",
        "level-4": "0 12px 32px rgba(0, 0, 0, 0.16)",
      },
      transitionDuration: {
        instant: "0ms",
        fast: "150ms",
        normal: "200ms",
        slow: "300ms",
        slower: "500ms",
      },
      transitionTimingFunction: {
        ease: "ease",
        "ease-out": "ease-out",
        "ease-in": "ease-in",
        "ease-out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      maxWidth: {
        content: "1280px",
        narrow: "800px",
        form: "480px",
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "slide-in": "slideIn 0.3s ease-out forwards",
        "scale-in": "scaleIn 0.3s ease-out forwards",
        shimmer: "shimmer 1.5s infinite",
        pulse: "pulse 2s ease-in-out infinite",
        "count-up": "countUp 1.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        countUp: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;