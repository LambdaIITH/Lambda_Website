"use client";

import { motion } from "framer-motion";
import { UserIcon } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  role: string;
  quote: string;
};

export default function TestimonialCard({
  name,
  role,
  quote,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="relative bg-linear-to-br from-[#2a0038] to-[#3b0055] border border-[#A855F7]/60 rounded-2xl p-5 w-[480px] overflow-hidden group"
    >
      {/* glow */}
      <div className="absolute inset-0 bg-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition" />

      <div className="relative flex gap-6 items-start">
        {/* Avatar */}
        <div className="shrink-0 w-23 h-23 rounded-full bg-white/90 flex items-center justify-center">
        <UserIcon className="w-15 h-15 text-black" fill="black" color="black" />
        </div>

        {/* Text */}
        <div>
          <p className="text-white/80 text-sm leading-relaxed">
            {quote}
          </p>

          <p className="mt-4 text-white font-semibold">{name}</p>
          <p className="text-[#D39FE9] text-sm">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
