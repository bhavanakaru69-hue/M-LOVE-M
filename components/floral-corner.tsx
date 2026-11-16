"use client";

import { motion } from "framer-motion";

type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right";

const rotationMap: Record<Position, string> = {
  "top-left": "rotate-0",
  "top-right": "rotate-90 scale-x-[-1]",
  "bottom-left": "rotate-[-90deg] scale-x-[-1]",
  "bottom-right": "rotate-180",
};

const positionMap: Record<Position, string> = {
  "top-left": "top-0 left-0",
  "top-right": "top-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "bottom-right": "bottom-0 right-0",
};

interface FloralCornerProps {
  position: Position;
  className?: string;
  color?: string; // stroke color, defaults to antique gold
  size?: number;
}

/**
 * A single hand-drawn-style vine with three small blossoms, used as a
 * quiet corner flourish. Reuse it at low opacity — it's the site's one
 * signature ornament, so it should never compete with the content.
 */
export default function FloralCorner({
  position,
  className = "",
  color = "#B98D4F",
  size = 130,
}: FloralCornerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`pointer-events-none absolute ${positionMap[position]} ${rotationMap[position]} ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 130 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-[0.55]"
      >
        {/* Main curling vine */}
        <path
          d="M4 4C24 10 30 28 22 42C14 56 26 66 42 60C58 54 62 34 50 24"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M4 4C10 22 26 26 38 18"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* Small blossoms */}
        <g opacity="0.9">
          <circle cx="42" cy="60" r="2.4" fill={color} />
          <circle cx="49" cy="63.5" r="1.6" fill={color} />
          <circle cx="45.5" cy="55.5" r="1.6" fill={color} />
        </g>
        <g opacity="0.85">
          <circle cx="50" cy="24" r="2" fill={color} />
          <circle cx="56" cy="27" r="1.3" fill={color} />
          <circle cx="54" cy="19.5" r="1.3" fill={color} />
        </g>
        <g opacity="0.7">
          <circle cx="4" cy="4" r="1.8" fill={color} />
        </g>
        {/* Fine leaf accents */}
        <path
          d="M22 42C26 38 32 39 34 44"
          stroke={color}
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
    </motion.div>
  );
}
