import React from "react";

interface GlowingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function BigButton({ children, ...props }: GlowingButtonProps) {
  return (
    <button
      {...props}
      className="
        relative px-7 py-4 rounded-lg 
        font-semibold 
        uppercase
        text-onblue-200/90
        bg-[#1e57dc]
        transition-all duration-300
        animate-glow
        hover:bg-[#275fe1] hover:scale-105 hover:ease-in-out  
        hover:px-7 hover:py-4
      "
    >
      {children}
    </button>
  );
}
