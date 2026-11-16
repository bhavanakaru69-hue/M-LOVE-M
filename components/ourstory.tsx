"use client";

// Required packages: framer-motion, lucide-react

import { motion } from "framer-motion";
import { Heart, Sparkles, Disc, Calendar } from "lucide-react";
import FloralDivider from "@/components/floral-divider";

// TODO: replace with the couple's real photos once available
const GROOM_PHOTO =
  "/raj.png";
const BRIDE_PHOTO  = '/akhi.png';
const GOLD = "#B98D4F";

const storyMilestones = [
  {
    icon: <Heart className="w-4 h-4" style={{ color: GOLD }} />,
    title: "First Encounter",
    date: "june 21, 2026",
    quote: "A chance glance that changed our entire world forever.",
  },
  {
    icon: <Sparkles className="w-4 h-4" style={{ color: GOLD }} />,
    title: "First Step",
    date: "july 12, 2026",
    quote: "Deciding to walk the same path, hand in hand.",
  },
  {
    icon: <Disc className="w-4 h-4" style={{ color: GOLD }} />,
    title: "Engagement",
    date: "Aug 15, 2026",
    quote: "A promise of forever sealed with a joyful 'Yes'.",
  },
  {
    icon: <Sparkles className="w-4 h-4" style={{ color: GOLD }} />,
    title: "Haldi Ceremony",
    date: "Aug 29, 2026",
    quote: "Drenched in love, laughter, and a golden glow of new beginnings.",
  },
  {
    icon: <Calendar className="w-4 h-4" style={{ color: GOLD }} />,
    title: "The Marriage",
    date: "Aug 30, 2026",
    quote: "Beginning our greatest adventure as husband and wife.",
  },
];

export default function OurStorySection() {
  return (
    <section className="min-h-screen h-auto md:h-screen w-full snap-start flex flex-col items-center justify-center py-16 px-4 sm:px-6 bg-[#FAF6EE] text-[#221F1B] relative overflow-y-auto overflow-x-hidden">
      {/* Ambient glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-[#B98D4F]/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#7C8863]/10 blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-10 max-w-xl mx-auto relative z-10"
      >
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-[#B98D4F] mb-3 block">
          Our Journey
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#221F1B] font-normal mb-4">
          How We Got Here
        </h2>

        {/* Couple portraits replacing the broken Lottie avatars */}
        <div className="flex items-center justify-center gap-4 my-4">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-[#B98D4F]/50 shadow-md"
          >
            <img src={GROOM_PHOTO} alt="Groom" className="w-full h-full object-cover" />
          </motion.div>

          <FloralDivider className="scale-90" />

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-[#B98D4F]/50 shadow-md"
          >
            <img src={BRIDE_PHOTO} alt="Bride" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </motion.div>

      {/* Milestones */}
      <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 relative z-10 px-2">
        {storyMilestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, boxShadow: "0 18px 30px -12px rgba(185,141,79,0.25)" }}
            transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-5 rounded-xl bg-white border-t-2 border-t-[#B98D4F] border-x border-b border-[#221F1B]/5 relative shadow-sm group"
          >
            <div className="p-2.5 rounded-full bg-[#FAF6EE] border border-[#B98D4F]/30 mb-3">
              {milestone.icon}
            </div>

            <span className="text-[10px] sm:text-[11px] tracking-widest text-[#B98D4F] uppercase mb-1">
              {milestone.date}
            </span>

            <h3 className="font-serif text-base sm:text-lg text-[#221F1B] mb-1.5">
              {milestone.title}
            </h3>

            <p className="font-sans text-[11px] sm:text-xs text-[#221F1B]/60 italic leading-relaxed">
              {milestone.quote}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
