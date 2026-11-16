"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, ChevronDown } from "lucide-react";
import OurStorySection from "@/components/ourstory";
import Timer from "@/components/timer";
import Celebration from "@/components/celebration";
import FloralCorner from "@/components/floral-corner";
import InvitationSection from "@/components/invitation";
// TODO: swap these for the couple's real names once confirmed
const GROOM_NAME = "Manoj";
const BRIDE_NAME = "Mounika sri";
// TODO: replace hero image — currently a placeholder
// const HERO_IMAGE = "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop";
const HERO_IMAGE = "/hero_l.jpeg";
const WEDDING_DATE = "Augest 30, 2026";
const WEDDING_VENUE = "Koheda , Siddipet";

export default function WeddingPage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((e) => console.log("Audio play blocked:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar relative bg-[#221F1B] text-[#FAF6EE] font-[Jost,sans-serif]">
      <audio ref={audioRef} src="/piano_marriage.mp3" loop autoPlay  />

      {/* Audio Toggle */}
      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 z-50 p-3 bg-[#221F1B]/50 backdrop-blur-md border border-[#B98D4F]/30 rounded-full shadow-lg text-[#FAF6EE] hover:border-[#B98D4F] hover:bg-[#221F1B]/70 transition-all duration-300"
        aria-label="Toggle Music"
      >
        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-[#B98D4F]" />
        ) : (
          <VolumeX className="w-4 h-4" />
        )}
      </button>

      {/* OPENING REVEAL — soft ivory-lit doors instead of a hard black curtain */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#221F1B] overflow-hidden pointer-events-none"
          >
            <motion.div
              initial={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1.3, ease: [0.65, 0, 0.35, 1] }}
              className="absolute inset-0 w-1/2 h-full bg-[#221F1B] border-r border-[#B98D4F]/20"
            />
            <motion.div
              initial={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 1.3, ease: [0.65, 0, 0.35, 1] }}
              className="absolute inset-0 left-1/2 w-1/2 h-full bg-[#221F1B]"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.08 }}
              transition={{ duration: 0.9 }}
              className="relative z-10 flex flex-col items-center gap-3"
            >
              <div className="w-16 h-16 rounded-full border border-[#B98D4F]/50 flex items-center justify-center">
                <span className="font-serif text-xl tracking-[0.15em] text-[#B98D4F]">
                  {GROOM_NAME[0]}
                  <span className="italic font-light mx-0.5">&amp;</span>
                  {BRIDE_NAME[0]}
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#FAF6EE]/50">
                We're getting married
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECTION 1 — HERO */}
      <section className="h-screen w-full snap-start relative flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.12 }}
            animate={!isLoading ? { scale: 1 } : {}}
            transition={{ duration: 8, ease: "easeOut" }}
            src={HERO_IMAGE}
            alt="Wedding Cinematic Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#221F1B] via-[#221F1B]/70 to-[#221F1B]/50" />
        </div>

        {/* Signature botanical corners — the one ornamental flourish, kept quiet */}
        <FloralCorner position="top-left" className="hidden sm:block m-4" />
        <FloralCorner position="bottom-right" className="hidden sm:block m-4" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={!isLoading ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="text-[11px] md:text-xs uppercase tracking-[0.45em] text-[#B98D4F] mb-5 font-light">
            Together with their families
          </span>

          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight text-[#FAF6EE] mb-6 font-normal">
            {GROOM_NAME}{" "}
            <span className="font-light italic text-[#B98D4F]">&amp;</span>{" "}
            {BRIDE_NAME}
          </h1>

          <div className="flex items-center gap-3 mb-1">
            <span className="block h-[1px] w-8 bg-[#B98D4F]/60" />
            <p className="font-sans text-xs md:text-sm tracking-[0.3em] text-[#FAF6EE]/70 uppercase">
              {WEDDING_DATE}
            </p>
            <span className="block h-[1px] w-8 bg-[#B98D4F]/60" />
          </div>
          <p className="font-serif italic text-sm md:text-base text-[#B98D4F]/90 mb-12">
            {WEDDING_VENUE}
          </p>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="absolute -bottom-24 text-[#FAF6EE]/50 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll to Explore</span>
            <ChevronDown className="w-4 h-4 text-[#B98D4F]" />
          </motion.div>
        </motion.div>
      </section>

      <OurStorySection />
      <Timer />
      <Celebration />
      <InvitationSection/>
    </main>
  );
}
