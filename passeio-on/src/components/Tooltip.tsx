import React, { useState } from "react";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  className?: string;
  position?: "top" | "bottom" | "left" | "right"; // deixei opcional com default
}

export default function Tooltip({
  text,
  children,
  className,
  position = "top",
}: TooltipProps) {
  const [isHovered, setIsHovered] = useState(false);

  //
  const pos =
    position === "top"
      ? "bottom-full left-1/2 -translate-x-1/2 mb-2"
      : position === "bottom"
      ? "top-full left-1/2 -translate-x-1/2 mt-4"
      : position === "left"
      ? "right-full top-1/2 -translate-y-1/2 mr-2"
      : "left-full top-1/2 -translate-y-1/2 ml-2"; // right

  return (
    <div
      className="relative inline-flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}

      {isHovered && (
        <div
          className={[
            "absolute z-50",
            pos,
            // style
            "px-4 py-2 rounded-xl shadow-2xl border border-[#1e57dc]/20",
            "bg-[#060E1C]/10 backdrop-blur-md",
            "text-[#1e57dc] text-sm font-semibold",
            // comportamento
            "pointer-events-none whitespace-nowrap",
            // animação
            "transition-all ease-in-out delay-145 duration-300",
            "opacity-100 scale-100",
            className || "",
          ].join(" ")}
        >
          {text}
        </div>
      )}
    </div>
  );
}
