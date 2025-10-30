/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue,html}"],
  theme: {
    extend: {
      keyframes: {
        //Efeito de brilho em botões
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 10px #1e57dcc4, 0 0 20px #275fe19d",
          },
          "50%": {
            boxShadow: "0 0 25px #1e57dc69, 0 0 50px #275fe15e",
          },
        },
      },
      animation: {
        glow: "glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
