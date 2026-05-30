"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingDown, Bot, Shield, Clock, Unlock } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Founder-led quality",
    description:
      "Our founder personally oversees operations. You're not a ticket number — you're a partner.",
  },
  {
    icon: TrendingDown,
    title: "Save up to 70%",
    description:
      "Get world-class talent at a fraction of U.S. hiring costs. No office, no benefits, no overhead.",
  },
  {
    icon: Bot,
    title: "AI-enhanced operations",
    description:
      "We don't just provide people — we make your entire operation smarter with AI automations and workflow optimization.",
  },
  {
    icon: Shield,
    title: "HIPAA-trained staff",
    description:
      "Our medical VAs are trained in HIPAA compliance, healthcare terminology, and EHR systems.",
  },
  {
    icon: Clock,
    title: "U.S. business hours",
    description:
      "Your team works when you work. Full coverage during your business hours, any U.S. time zone.",
  },
  {
    icon: Unlock,
    title: "No lock-in contracts",
    description:
      "Month-to-month flexibility. Scale up, scale down, or cancel anytime with 14 days notice.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            Why businesses choose us
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-gray-light rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-blue/10 text-blue flex items-center justify-center mb-4">
                <reason.icon size={24} />
              </div>
              <h3 className="font-bold text-navy mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
