"use client";

import { motion } from "framer-motion";

interface FloralDividerProps {
  color?: string;
  className?: string;
}

/** A minimal line-blossom-line divider, echoes the corner ornament's motif. */
export default function FloralDivider({
  color = "#B98D4F",
  className = "",
}: FloralDividerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`flex items-center justify-center gap-3 ${className}`}
    >
      <span
        className="block h-[1px] w-8 sm:w-12"
        style={{ backgroundColor: color, opacity: 0.6 }}
      />
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="1.6" fill={color} />
        <circle cx="7" cy="2" r="1" fill={color} opacity="0.7" />
        <circle cx="11.5" cy="9.5" r="1" fill={color} opacity="0.7" />
        <circle cx="2.5" cy="9.5" r="1" fill={color} opacity="0.7" />
      </svg>
      <span
        className="block h-[1px] w-8 sm:w-12"
        style={{ backgroundColor: color, opacity: 0.6 }}
      />
    </motion.div>
  );
}
