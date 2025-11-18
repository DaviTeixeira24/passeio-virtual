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
        relative px-6 py-3 rounded-lg font-semibold text-onblue-200/90
        bg-[#1e57dc]
        transition-all duration-300
        animate-glow
        hover:bg-[#275fe1] hover:scale-105 hover:ease-in-out  
        hover:px-6 hover:py-3
        uppercase 
      "
    >
      {children}
    </button>
  );
}
