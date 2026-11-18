"use client";

// Required packages: framer-motion, lucide-react

import { motion } from "framer-motion";
import { Church, UtensilsCrossed, MapPin, ExternalLink, CalendarDays } from "lucide-react";
import FloralDivider from "@/components/floral-divider";

// TODO: replace with real venue name / address and Google Maps link
const events = [
  {
    title: "The Ceremony",
    time: "10:00 AM onwards",
    location: "Koheda,Siddipet",
    googleMapsUrl: "https://maps.app.goo.gl/AZs54tLnGRR8Q2Xy9",
    description: "Sacred vows and timeless promises exchanged in the presence of loved ones.",
    icon: <span className="text-xl font-bold text-[#B98D4F]">ॐ</span> ,
    image:"/pinky_holding.webp",
  },
  {
    title: "Reception & Dinner",
    time: "12:30 PM onwards",
    location: "Katta Rampur",
    googleMapsUrl: "https://maps.app.goo.gl/Z8svvFmUzKekcbse7",
    description: "An evening of celebratory toasts, exquisite dining, and joyful music.",
    icon: <UtensilsCrossed className="w-5 h-5 text-[#B98D4F]" />,
    image:"/dinner.avif"  },
];

export default function CelebrationSection() {
  return (
    <section className="min-h-screen h-auto md:h-screen w-full snap-start flex flex-col items-center justify-center py-16 px-4 sm:px-6 bg-[#FAF6EE] text-[#221F1B] relative overflow-y-auto overflow-x-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#B98D4F]/10 blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-12 max-w-xl mx-auto relative z-10"
      >
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-[#B98D4F] mb-3 block">
          Schedule &amp; Venues
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#221F1B] font-normal mb-4">
          The Celebration
        </h2>
        <FloralDivider />
      </motion.div>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 px-2">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col rounded-xl bg-white border border-[#221F1B]/5 shadow-sm hover:shadow-lg transition-shadow duration-500 overflow-hidden group"
          >
            <div className="relative h-48 sm:h-56 w-full overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#221F1B]/60 via-transparent to-transparent" />
              <div className="absolute top-4 right-4 p-2.5 rounded-full bg-[#FAF6EE]/90 backdrop-blur-md border border-[#B98D4F]/40">
                {event.icon}
              </div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[#FAF6EE]">
                <CalendarDays className="w-4 h-4 text-[#B98D4F]" />
                <span className="text-xs uppercase tracking-wider">{event.time}</span>
              </div>
            </div>

            <div className="flex flex-col flex-grow p-6 justify-between">
              <div>
                <h3 className="font-serif text-2xl text-[#221F1B] mb-2">{event.title}</h3>
                <p className="font-sans text-xs sm:text-sm text-[#221F1B]/60 leading-relaxed mb-6">
                  {event.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#221F1B]/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#221F1B]">
                  <MapPin className="w-4 h-4 text-[#B98D4F]" />
                  <span className="text-xs sm:text-sm font-medium tracking-wide">{event.location}</span>
                </div>

                <a
                  href={event.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#221F1B] text-[#FAF6EE] font-sans text-xs tracking-wider uppercase hover:bg-[#B98D4F] transition-colors duration-300"
                >
                  <span>Open Map</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
