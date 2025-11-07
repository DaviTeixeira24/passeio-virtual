import React from "react";

interface GlowingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: GlowingButtonProps) {
  return (
    <button
      {...props}
      className="
        relative px-4 py-2 rounded-lg font-semibold text-white
        bg-[#1e57dc]
        transition-all duration-300
        animate-glow
        hover:bg-[#275fe1] hover:scale-105 hover:ease-in-out  
        hover:px-6 hover:py-3
      "
    >
      {children}
    </button>
  );
}
