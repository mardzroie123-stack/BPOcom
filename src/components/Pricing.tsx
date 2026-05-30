"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SavingsCalculator from "./SavingsCalculator";

const tiers = [
  {
    name: "Essential",
    tagline: "Startups and small businesses",
    price: "$7–12/hr",
    per: "per agent",
    popular: false,
    services: ["Customer service", "Tech support", "Back-office operations"],
    includes: [
      "Dedicated agent(s)",
      "Weekly reporting",
      "Slack/email communication",
      "1 free replacement",
    ],
    cta: "Get a Quote",
  },
  {
    name: "Professional",
    tagline: "Growing businesses and real estate teams",
    price: "$12–18/hr",
    per: "per agent",
    popular: true,
    services: [
      "Everything in Essential",
      "Real estate VA",
      "Social media management",
      "Web development",
    ],
    includes: [
      "Dedicated agent(s)",
      "Bi-weekly strategy calls",
      "KPI dashboard",
      "Priority support",
      "2 free replacements",
    ],
    cta: "Get a Quote",
  },
  {
    name: "Enterprise",
    tagline: "Healthcare, large teams, AI-driven operations",
    price: "$15–25/hr",
    per: "per agent",
    popular: false,
    services: [
      "Everything in Professional",
      "Medical VA",
      "AI automations & workflows",
    ],
    includes: [
      "Dedicated team",
      "HIPAA-compliant setup",
      "Custom AI workflows",
      "Weekly strategy calls",
      "Dedicated account manager",
      "Unlimited replacements",
    ],
    cta: "Book a Consultation",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            Transparent pricing. No hidden fees.
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Choose dedicated agents or flexible hourly packages — all with a dedicated account manager.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-2xl p-6 md:p-8 border-2 ${
                tier.popular
                  ? "border-blue shadow-xl shadow-blue/10"
                  : "border-gray-100 shadow-sm"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-navy">{tier.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{tier.tagline}</p>
              <div className="mt-6 mb-6">
                <span className="text-3xl font-extrabold text-navy">{tier.price}</span>
                <span className="text-gray-500 text-sm ml-1">{tier.per}</span>
              </div>

              <div className="mb-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Services</p>
                <ul className="space-y-2">
                  {tier.services.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Includes</p>
                <ul className="space-y-2">
                  {tier.includes.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-lg font-bold transition-opacity ${
                  tier.popular
                    ? "bg-blue text-white hover:opacity-90"
                    : "bg-gray-100 text-navy hover:bg-gray-200"
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          All plans are month-to-month. No long-term contracts required. Volume discounts available for 5+ agents.
        </p>

        <SavingsCalculator />
      </div>
    </section>
  );
}
