"use client";

// Required packages: framer-motion, lucide-react

import { motion } from "framer-motion";
import { Heart, Sparkles, Disc, Calendar } from "lucide-react";
import FloralDivider from "@/components/floral-divider";

// TODO: replace with the couple's real photos once available
const GROOM_PHOTO ="/groom.jpg";
const BRIDE_PHOTO  = '/bride.jpeg';
const GOLD = "#B98D4F";
//  {
//     icon: <Disc className="w-4 h-4" style={{ color: GOLD }} />,
//     title: "Engagement",
//     date: "Aug 15, 2026",
//     quote: "A promise of forever sealed with a joyful 'Yes'.",
//   },

const storyMilestones = [
  {
    icon: <Heart className="w-4 h-4" style={{ color: GOLD }} />,
    title: "First Encounter",
    date: "sep 19, 2019",
    quote: "A chance glance that changed our entire world forever.",
  },
  // {
  //   icon: <Sparkles className="w-4 h-4" style={{ color: GOLD }} />,
  //   title: "First Step",
  //   date: "2020",
  //   quote: "Deciding to walk the same path, hand in hand.",
  // },
 
  {
    icon: <Sparkles className="w-4 h-4" style={{ color: GOLD }} />,
    title: "Haldi Ceremony",
    date: "Nov 29, 2026",
    quote: "Drenched in love, laughter, and a golden glow of new beginnings.",
  },
  {
    icon: <Calendar className="w-4 h-4" style={{ color: GOLD }} />,
    title: "The Marriage",
    date: "Dec 03, 2026",
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
      <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 relative z-10 px-2">
        {storyMilestones.map((milestone, index) => (
         
<motion.div
  key={index}
  initial={{ opacity: 0, y: 40, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  whileHover={{
    y: -8,
    boxShadow: "0 20px 35px -12px rgba(185,141,79,0.2)",
  }}
  transition={{
    duration: 0.7,
    delay: index * 0.12,
    ease: [0.16, 1, 0.3, 1],
  }}
  viewport={{ once: true }}
  className="relative group flex flex-col items-center text-center
    overflow-hidden p-5 sm:p-6 rounded-[24px]
    bg-gradient-to-b from-[#FFF9F5] via-[#FFFEFC] to-[#F9EFEB]
    border border-[#D9B77E]/40
    shadow-[0_8px_25px_rgba(80,50,30,0.05)]"
>
  {/* Background decorations */}
  <div className="absolute -top-12 -right-12 w-36 h-36
    rounded-full bg-pink-200/30 blur-3xl pointer-events-none" />

  <div className="absolute -bottom-12 -left-12 w-36 h-36
    rounded-full bg-amber-100/50 blur-3xl pointer-events-none" />

  {/* Decorative hearts */}
  <span className="absolute top-5 left-5 text-2xl
    text-[#E8B7B7]/70 group-hover:scale-125 transition-transform">
    ♡
  </span>

  <span className="absolute top-8 right-6 text-sm text-[#C9A56D]">
    ✦
  </span>

  <span className="absolute bottom-20 right-5 text-pink-300 text-lg">
    ♡
  </span>

  {/* Milestone icon */}
  <div className="relative z-10 w-12 h-12 rounded-full
    flex items-center justify-center
    bg-white border border-[#D9B77E]/50
    text-[#B98D4F] shadow-[0_3px_10px_rgba(185,141,79,0.12)]
    mb-4 group-hover:rotate-12 transition-transform duration-500">
    {milestone.icon}
  </div>

  {/* Date */}
  <span className="relative z-10 text-[10px] sm:text-[11px]
    tracking-[0.25em] uppercase font-medium
    text-[#B98D4F] mb-2">
    {milestone.date}
  </span>

  {/* Title */}
  <h3 className="relative z-10 font-serif text-lg sm:text-xl
    text-[#33251F] mb-2 group-hover:text-[#A47743]
    transition-colors duration-300">
    {milestone.title}
  </h3>

  {/* Quote */}
  <p className="relative z-10 max-w-[230px]
    font-sans text-xs sm:text-[13px]
    text-[#806F65] italic leading-relaxed">
    "{milestone.quote}"
  </p>

  {/* Bottom ornament */}
  <div className="relative z-10 mt-5 flex items-center gap-3">
    <span className="w-9 h-px bg-gradient-to-r
      from-transparent to-[#D9B77E]" />
    <span className="text-[#C69B62] text-sm">♥</span>
    <span className="w-9 h-px bg-gradient-to-l
      from-transparent to-[#D9B77E]" />
  </div>
</motion.div>

        ))}
      </div>
    </section>
  );
}
