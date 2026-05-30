"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "LuckyAssist Pro transformed our lead generation. Our VA team books 30+ qualified appointments per month and our CRM has never been cleaner.",
    author: "[Client Name]",
    role: "Real Estate Team Lead, Sacramento, CA",
    // REPLACE WITH REAL TESTIMONIALS — ask past clients for permission to quote them.
  },
  {
    quote:
      "We cut our customer service costs by 65% without sacrificing quality. The team handles calls, emails, and chat like they're sitting in our office.",
    author: "[Client Name]",
    role: "E-commerce Business Owner",
    // REPLACE WITH REAL TESTIMONIALS — ask past clients for permission to quote them.
  },
  {
    quote:
      "The AI workflow automations they built saved our team 20+ hours per week. Game changer.",
    author: "[Client Name]",
    role: "Operations Director",
    // REPLACE WITH REAL TESTIMONIALS — ask past clients for permission to quote them.
  },
];

export default function Testimonials() {
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
            Trusted by U.S. businesses
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-light rounded-2xl p-6 border border-gray-100 relative"
            >
              <Quote size={28} className="text-blue/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-bold text-navy text-sm">{t.author}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-12"
        >
          Trusted by teams across California, Texas, Missouri, and Indiana
        </motion.p>
      </div>
    </section>
  );
}
