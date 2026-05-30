"use client";

import { motion } from "framer-motion";
import {
  Headset,
  Building2,
  Palette,
  Cpu,
  Phone,
  Monitor,
  FileText,
  PhoneCall,
  Stethoscope,
  Megaphone,
  Globe,
  Bot,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

interface Service {
  icon: React.ElementType;
  name: string;
  description: string;
  badge: string;
  badgeColor: string;
}

interface Pillar {
  icon: React.ElementType;
  title: string;
  color: string;
  services: Service[];
}

const pillars: Pillar[] = [
  {
    icon: Headset,
    title: "Customer Operations",
    color: "from-blue-500 to-blue-600",
    services: [
      {
        icon: Phone,
        name: "Customer Service",
        description: "Inbound and outbound calls, live chat, email support, ticketing, and complaint resolution. Multichannel coverage across phone, email, chat, and social.",
        badge: "Core",
        badgeColor: "bg-blue-100 text-blue-700",
      },
      {
        icon: Monitor,
        name: "Tech Support",
        description: "Tier 1-2 technical troubleshooting, ticket management, escalation handling, knowledge base maintenance, and remote diagnostics.",
        badge: "Core",
        badgeColor: "bg-blue-100 text-blue-700",
      },
      {
        icon: FileText,
        name: "Back-Office Operations",
        description: "Data entry, document processing, bookkeeping, admin support, database management, and reporting.",
        badge: "Core",
        badgeColor: "bg-blue-100 text-blue-700",
      },
    ],
  },
  {
    icon: Building2,
    title: "Industry Specialists",
    color: "from-emerald-500 to-emerald-600",
    services: [
      {
        icon: PhoneCall,
        name: "Real Estate VA",
        description: "Cold calling, lead qualification, CRM management (Follow Up Boss, Podio, Ylopo), appointment setting, pipeline reporting, and lead nurturing. 5+ years serving U.S. real estate teams.",
        badge: "Premium",
        badgeColor: "bg-emerald-100 text-emerald-700",
      },
      {
        icon: Stethoscope,
        name: "Medical VA",
        description: "Medical billing and coding, patient scheduling, EHR/EMR data entry, insurance verification, patient intake, and phone support. HIPAA-trained staff with healthcare terminology expertise.",
        badge: "Premium",
        badgeColor: "bg-emerald-100 text-emerald-700",
      },
    ],
  },
  {
    icon: Palette,
    title: "Digital & Creative",
    color: "from-purple-500 to-purple-600",
    services: [
      {
        icon: Megaphone,
        name: "Social Media Management",
        description: "Content creation, post scheduling, community engagement, analytics and reporting, paid ad management, and brand voice development across all platforms.",
        badge: "Premium",
        badgeColor: "bg-purple-100 text-purple-700",
      },
      {
        icon: Globe,
        name: "Web Development",
        description: "Custom websites, landing pages, WordPress, Shopify, site maintenance, performance optimization, and responsive design.",
        badge: "Premium",
        badgeColor: "bg-purple-100 text-purple-700",
      },
    ],
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    color: "from-coral to-orange-600",
    services: [
      {
        icon: Bot,
        name: "AI Automations & Workflows",
        description: "Custom chatbot development, workflow automation (Zapier, Make, n8n), AI-assisted customer service, process optimization, CRM automation, and intelligent data processing.",
        badge: "High Value",
        badgeColor: "bg-orange-100 text-orange-700",
      },
    ],
  },
];

function ServiceCard({ service: s }: { service: Service }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-gray-50 text-navy">
            <s.icon size={20} />
          </div>
          <div>
            <h4 className="font-semibold text-navy text-sm">{s.name}</h4>
            <span className={`inline-block mt-1 text-[11px] font-semibold px-2 py-0.5 rounded-full ${s.badgeColor}`}>
              {s.badge}
            </span>
          </div>
        </div>
        <button onClick={() => setExpanded(!expanded)} className="text-gray-400 hover:text-navy transition-colors">
          <ChevronDown size={18} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      </div>
      {expanded && (
        <p className="mt-4 text-sm text-gray-600 leading-relaxed">{s.description}</p>
      )}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            Everything your business needs to scale — under one roof
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            From frontline customer support to AI automation, we provide end-to-end operational solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm"
            >
              <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-gradient-to-r ${pillar.color} text-white mb-6`}>
                <pillar.icon size={20} />
                <span className="font-bold text-sm">{pillar.title}</span>
              </div>
              <div className="space-y-4">
                {pillar.services.map((service) => (
                  <ServiceCard key={service.name} service={service} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="bg-coral text-white px-8 py-3.5 rounded-lg text-lg font-bold hover:opacity-90 transition-opacity inline-block"
          >
            Book a Free Strategy Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
