"use client";

import { motion } from "framer-motion";
import { MessageCircle, Users, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Tell us what you need",
    description:
      "Book a free consultation. We'll learn about your business, goals, and the roles you need filled.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Users,
    title: "We build your team",
    description:
      "We handpick, vet, and train dedicated agents matched to your industry and workflows. Onboarding takes 3-5 business days.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Rocket,
    title: "Launch and scale",
    description:
      "Your team starts delivering results with ongoing QA, reporting, and a dedicated account manager. Scale up or down anytime.",
    color: "bg-coral/10 text-coral",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            Get started in 3 simple steps
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative text-center"
            >
              <div className="flex items-center justify-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${step.color} mb-5 mx-auto`}>
                  <step.icon size={28} />
                </div>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-0.5 border-t-2 border-dashed border-gray-300" />
              )}
              <h3 className="text-lg font-bold text-navy mb-3">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
