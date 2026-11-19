"use client";

// Required packages: framer-motion, lucide-react

import { motion } from "framer-motion";
import { Mail, HeartHandshake } from "lucide-react";
import FloralCorner from "@/components/floral-corner";
import FloralDivider from "@/components/floral-divider";

// TODO: replace with the couple's real names, families, and background image
const GROOM_NAME = "Manoj";
const BRIDE_NAME = "Mounika sri";
const GROOM_FAMILY = "Mr. & Mrs. kumar & subharatnam";
const BRIDE_FAMILY = "Mr. & Mrs. Rama chandra rao & Rani";
const CLOSING_IMAGE =
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1920&auto=format&fit=crop";
// TODO: point this at a real RSVP form / WhatsApp link / mailto address
const RSVP_LINK = "mailto:bhavanakaru69@gmail.com";

export default function InvitationSection() {
  return (
    <section className="min-h-screen h-auto md:h-screen w-full snap-start relative flex flex-col items-center justify-center text-center px-6 py-16 overflow-hidden bg-[#221F1B]">
      <div className="absolute inset-0 z-0">
        <img
          src={CLOSING_IMAGE}
          alt="Closing Wedding Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#221F1B]/90 via-[#221F1B]/80 to-[#221F1B]/95" />
      </div>

      {/* Ambient glow, echoes the hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-[#B98D4F]/15 blur-3xl"
        />
      </div>

      <FloralCorner position="top-left" className="hidden sm:block m-4 z-20" />
      <FloralCorner position="bottom-right" className="hidden sm:block m-4 z-20" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="relative z-20 max-w-2xl mx-auto flex flex-col items-center"
      >
        <span className="text-[11px] uppercase tracking-[0.45em] text-[#B98D4F] mb-6">
          With Love, We Invite You
        </span>

        {/* The quote — the emotional centerpiece of this section */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-serif italic text-2xl sm:text-3xl md:text-4xl leading-relaxed text-[#FAF6EE] mb-8"
        >
          "Two souls, one heart, one beautiful beginning — <br className="hidden sm:block" />
          come stand beside us as we start our forever."
        </motion.blockquote>

        <FloralDivider className="mb-8" />

        <p className="font-sans text-sm sm:text-base text-[#FAF6EE]/70 leading-relaxed mb-10 max-w-lg">
          Your presence would mean the world to us as we begin this new chapter
          together. We can't wait to celebrate this day surrounded by the people
          we love most.
        </p>

        {/* Couple monogram + families */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <div className="w-16 h-16 rounded-full border border-[#B98D4F]/50 flex items-center justify-center">
            <span className="font-serif text-lg tracking-[0.1em] text-[#B98D4F]">
              {GROOM_NAME[0]}
              <span className="italic font-light mx-0.5">&amp;</span>
              {BRIDE_NAME[0]}
            </span>
          </div>
          <div className="flex items-center gap-4 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#FAF6EE]/50">
            <span>{GROOM_FAMILY}</span>
            <HeartHandshake className="w-3.5 h-3.5 text-[#B98D4F]" />
            <span>{BRIDE_FAMILY}</span>
          </div>
        </div>

        {/* RSVP */}
        <motion.a
          href={RSVP_LINK}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#B98D4F] text-[#221F1B] font-sans text-xs sm:text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#FAF6EE] transition-colors duration-300"
        >
          <Mail className="w-4 h-4" />
          <span>RSVP</span>
        </motion.a>
        

        <span className="mt-8 font-serif italic text-sm text-[#FAF6EE]/40">
          With love, {GROOM_NAME} &amp; {BRIDE_NAME}
        </span>
      </motion.div>
    </section>
  );
}
