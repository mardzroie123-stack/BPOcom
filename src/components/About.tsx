"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Award, Users, Map, Layers } from "lucide-react";

const stats = [
  { icon: Award, value: "12+ Years", label: "Combined leadership experience" },
  { icon: Users, value: "15+", label: "Skilled professionals" },
  { icon: Map, value: "4", label: "U.S. states served" },
  { icon: Layers, value: "8", label: "Service verticals" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            Meet the team behind LuckyAssist Pro
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-gray-light rounded-2xl p-8 md:p-10 border border-gray-100"
        >
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-20 h-20 rounded-2xl bg-blue/10 flex items-center justify-center text-blue shrink-0">
              <span className="text-2xl font-extrabold">LH</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy">Lucky Hilario</h3>
              <p className="text-sm text-blue font-medium">Founder & CEO</p>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                With 12+ years leading customer service operations for U.S. companies — including Comcast and
                Bluestem Brands — Lucky built LuckyAssist Pro to bridge the gap between affordable outsourcing
                and genuine quality. Every client gets the same hands-on attention Lucky gave as a frontline team
                leader: clear communication, measurable results, and a team that actually cares about your business.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  Davao, Philippines
                </span>
                <a href="mailto:i.am.luckyhilario@gmail.com" className="flex items-center gap-1.5 text-blue hover:underline">
                  <Mail size={14} />
                  i.am.luckyhilario@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 text-sm max-w-3xl mx-auto mt-10 leading-relaxed"
        >
          Our growing team of 15+ professionals spans customer service veterans, healthcare specialists, real estate
          experts, digital marketers, web developers, and AI automation engineers. Every team member is carefully
          vetted, trained on your specific tools and workflows, and managed by a dedicated team lead to ensure
          consistent quality.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-blue/10 text-blue flex items-center justify-center mx-auto mb-3">
                <stat.icon size={22} />
              </div>
              <div className="text-2xl font-extrabold text-navy">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
