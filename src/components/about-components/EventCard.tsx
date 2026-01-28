"use client";

import { motion } from "framer-motion";

type EventCardProps = {
  title: string;
  description: string;
};

export default function EventCard({ title, description }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="relative bg-linear-to-r from-[#2a0038] to-[#3b0055] border border-[#A855F7]/50 rounded-2xl px-10 py-7 w-[820px] overflow-hidden group"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-300" />

      <p className="relative text-[#E879F9] text-2xl font-bold">{title}</p>
      <p className="relative mt-3 text-white/80 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
