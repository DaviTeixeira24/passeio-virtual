import React from "react";
import { motion } from "motion/react";

export default function AnimatedBackground() {
  const stars = Array.from({ length: 600 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((_, index) => {
        //
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 2;
        const duration = 2 + Math.random() * 3;
        const size = 1.5 + Math.random() * 3;

        return (
          <motion.img
            key={index}
            src="/star.png"
            alt="Star"
            width={size}
            height={size}
            className="absolute opacity-50 "
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
            }}
            animate={{ opacity: [0, 1], scale: [0.5, 1] }}
            transition={{
              delay,
              duration,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        );
      })}
    </div>
  );
}
