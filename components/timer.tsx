"use client";

// Required packages: framer-motion, lucide-react

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, HeartHandshake } from "lucide-react";
import FloralCorner from "@/components/floral-corner";

// Keep this in sync with the date shown in the hero section
const TARGET_DATE = "Augest 30, 2026 00:00:00";
const HERO_IMAGE =
  "/timer.png";

export default function CountdownSection() {
  const targetDate = new Date(TARGET_DATE).getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsExpired(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="min-h-screen h-auto md:h-screen w-full snap-start relative flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden bg-[#221F1B]">
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Wedding Celebration"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#221F1B]/95 via-[#221F1B]/75 to-[#221F1B]/55" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#B98D4F]/20 blur-3xl"
        />
      </div>

      <FloralCorner position="top-right" className="hidden sm:block m-4 z-20" />
      <FloralCorner position="bottom-left" className="hidden sm:block m-4 z-20" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
      >
        <div className="p-3 rounded-full bg-[#FAF6EE]/5 border border-[#B98D4F]/40 backdrop-blur-md mb-5">
          <Clock className="w-5 h-5 text-[#B98D4F]" />
        </div>

        <span className="text-[11px] uppercase tracking-[0.45em] text-[#B98D4F] mb-3">
          The Countdown Begins
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FAF6EE] font-normal mb-10 tracking-tight">
          Awaiting Our Special Day
        </h2>

        {!isExpired ? (
          <div className="grid grid-cols-4 gap-3 sm:gap-6 w-full max-w-2xl">
            {timeUnits.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-lg bg-[#FAF6EE]/[0.04] border-t border-[#B98D4F]/50 border-x border-b border-[#FAF6EE]/10 backdrop-blur-sm relative"
              >
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={item.value}
                    initial={{ y: -14, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 14, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="font-serif text-3xl sm:text-5xl text-[#FAF6EE] font-medium mb-1"
                  >
                    {String(item.value).padStart(2, "0")}
                  </motion.span>
                </AnimatePresence>

                <span className="text-[9px] sm:text-xs uppercase tracking-[0.3em] text-[#B98D4F]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center p-8 sm:p-10 rounded-2xl bg-[#FAF6EE]/[0.06] border border-[#B98D4F]/50 backdrop-blur-lg max-w-xl mx-auto"
          >
            <HeartHandshake className="w-10 h-10 text-[#B98D4F] mb-4" />
            <h3 className="font-serif text-2xl sm:text-4xl text-[#FAF6EE] mb-2 font-medium">
              Today is the Marriage!
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#FAF6EE]/70 tracking-wider uppercase">
              The celebration of our lifetime has officially begun.
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
