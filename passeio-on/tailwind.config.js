/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue,html}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
        150: "38rem",
        160: "40rem",
        180: "44rem",
        200: "48rem",
      },
      colors: {
        onblue: {
          50: "#e6f0ff",
          200: "#93c5fd",
          300: "#60a5fa",
          400: "#3b82f6",
          500: "#2563eb",
          600: "#1d4ed8",
          900: "#0a0f24",
        },
      },
      dropShadow: {
        // cada sombra é um item do array
        neon: ["0 0 1px rgba(59,130,246,.9)", "0 0 18px rgba(59,130,246,.6)"],
        cyan: ["0 0 6px rgba(34,211,238,.9)", "0 0 18px rgba(34,211,238,.9)"],
      },
      boxShadow: {
        "glow-blue":
          "0 0 0 4px rgba(59,130,246,.15), 0 0 24px rgba(59,130,246,.35)",
      },
      keyframes: {
        glow2: {
          "0%,100%": { filter: "drop-shadow(0 0 0 rgba(59,130,246,0))" },
          "50%": { filter: "drop-shadow(0 0 12px rgba(59,130,246,.75))" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        glow: {
          "0%,100%": { boxShadow: "0 0 10px #1e57dcc4, 0 0 20px #275fe19d" },
          "50%": { boxShadow: "0 0 25px #1e57dc69, 0 0 50px #275fe15e" },
        },
      },
      animation: {
        glow: "glow 3s ease-in-out infinite",
        glow2: "glow2 2.4s ease-in-out infinite",
        shimmer: "shimmer 1.3s linear infinite",
      },
    },
  },
  plugins: [],
};
