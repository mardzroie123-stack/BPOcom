"use client";

import { motion } from "framer-motion";
import { Mail, Calendar, Clock } from "lucide-react";
import { useState } from "react";

const serviceOptions = [
  "Customer Service",
  "Real Estate VA",
  "Medical VA",
  "Social Media",
  "Web Development",
  "AI Automation",
  "Back-Office",
  "Tech Support",
  "Multiple Services",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    console.log("Contact form submission:", Object.fromEntries(data));
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            Ready to scale your team?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Book a free 15-minute strategy call. No pressure, no commitment — just a conversation about how we can help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            {submitted ? (
              <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center">
                <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                  <Mail size={28} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Message sent!</h3>
                <p className="text-gray-600 text-sm">We'll get back to you within 24 hours on business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Name *</label>
                    <input
                      required
                      name="name"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                    <input
                      required
                      type="email"
                      name="email"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Company name (optional)</label>
                  <input
                    name="company"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                    placeholder="Your company"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Service interested in</label>
                  <select
                    name="service"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message (optional)</label>
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-coral text-white py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
                >
                  Send My Request
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue/10 text-blue flex items-center justify-center mb-4">
                <Mail size={22} />
              </div>
              <h3 className="font-bold text-navy mb-1">Email us</h3>
              <a href="mailto:i.am.luckyhilario@gmail.com" className="text-sm text-blue hover:underline">
                i.am.luckyhilario@gmail.com
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-4">
                <Calendar size={22} />
              </div>
              <h3 className="font-bold text-navy mb-1">Book directly on my calendar</h3>
              <a
                href="#"
                className="text-sm text-blue hover:underline"
              >
                Schedule a call via Calendly
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <Clock size={22} />
              </div>
              <h3 className="font-bold text-navy mb-1">Response time</h3>
              <p className="text-sm text-gray-600">We respond within 24 hours on business days</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
