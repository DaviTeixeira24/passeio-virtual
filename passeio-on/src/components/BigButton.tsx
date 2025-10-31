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
        relative px-10 py-5 rounded-lg font-semibold text-white
        bg-[#1e57dc]
        transition-all duration-300
        animate-glow
      "
    >
      {children}
    </button>
  );
}
