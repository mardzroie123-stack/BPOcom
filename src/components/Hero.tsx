"use client";

import { motion } from "framer-motion";
import { Shield, Users, Cpu, Star } from "lucide-react";

const trustBadges = [
  { icon: Star, label: "12+ Years Experience" },
  { icon: Shield, label: "HIPAA-Trained Staff" },
  { icon: Cpu, label: "AI-Powered Operations" },
  { icon: Users, label: "U.S. Client Focused" },
];

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-br from-navy via-[#1f2f52] to-navy">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, #378ADD 0%, transparent 50%), radial-gradient(circle at 75% 75%, #D85A30 0%, transparent 50%)`
      }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-4xl mx-auto"
        >
          Scale your business with elite Filipino talent and AI-powered automation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          LuckyAssist Pro delivers dedicated remote teams for customer service, healthcare, real estate, digital marketing, web development, and AI workflow automation — saving you up to 70% on operational costs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="bg-coral text-white px-8 py-3.5 rounded-lg text-lg font-bold hover:opacity-90 transition-opacity shadow-lg shadow-coral/30"
          >
            Book a Free Strategy Call
          </a>
          <a
            href="#services"
            className="border border-white/30 text-white px-8 py-3.5 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
          >
            See Our Services
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
        >
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-gray-300 text-sm font-medium">
              <badge.icon size={18} className="text-blue" />
              {badge.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
