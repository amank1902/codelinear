/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#020616",
          soft: "#070B1E",
          card: "#0B1027",
          ring: "#161B33",
          light: "#F4F7FB",
        },
        brand: {
          DEFAULT: "#2A5BFF",
          hover: "#1E48E0",
          glow: "#00B4FD",
        },
        ink: {
          DEFAULT: "#E7ECF6",
          muted: "#9098B0",
          subtle: "#5C637A",
        },
      },
      fontFamily: {
        sans: [
          "Archivo",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "Archivo",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        "display-xl": ["clamp(2.25rem, 4.5vw, 3.75rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 2.6vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
      },
      maxWidth: {
        shell: "1200px",
      },
      letterSpacing: {
        cta: "0.22em",
      },
      boxShadow: {
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 40px -20px rgba(0,0,0,0.6)",
        glow: "0 12px 60px -10px rgba(42,91,255,0.45)",
      },
      backgroundImage: {
        "radial-soft":
          "radial-gradient(1200px 600px at 50% -10%, rgba(42,91,255,0.18), transparent 60%)",
        "grid-fade":
          "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 70%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
