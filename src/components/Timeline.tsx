"use client";

import { motion } from "framer-motion";

const timelineItems = [
  {
    date: "15. März",
    location: "Austin, TX",
    description: "Start der Reise"
  },
  {
    date: "17.-19. März",
    location: "New Orleans, LA",
    description: "French Quarter & Jazz"
  },
  {
    date: "21.-23. März",
    location: "Jacksonville, FL",
    description: "Florida's First Coast"
  },
  {
    date: "25. März - 1. April",
    location: "Miami, FL",
    description: "Strand & Kultur"
  }
];

export default function Timeline() {
  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-4">
      <div className="relative">
        {/* Vertikale Linie */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-neutral-400 to-neutral-600"></div>

        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative flex items-center justify-between mb-8 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Punkt auf der Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>

            {/* Content */}
            <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "pl-8"}`}>
              <h3 className="text-xl font-bold text-neutral-200">{item.location}</h3>
              <p className="text-neutral-400 mb-1">{item.date}</p>
              <p className="text-neutral-300">{item.description}</p>
            </div>

            {/* Leerer Platz auf der anderen Seite */}
            <div className="w-5/12"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 