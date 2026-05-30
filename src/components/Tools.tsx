"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "CRM & Sales",
    tools: ["Follow Up Boss", "Podio", "HubSpot", "Salesforce", "Pipedrive"],
  },
  {
    name: "Dialers",
    tools: ["Mojo", "BatchDialer", "PhoneBurner", "CallTools", "Aircall", "RingCentral"],
  },
  {
    name: "Communication",
    tools: ["Slack", "Zoom", "Google Workspace", "Microsoft Teams"],
  },
  {
    name: "Project Management",
    tools: ["Trello", "Asana", "Monday.com", "ClickUp", "Notion"],
  },
  {
    name: "Marketing",
    tools: ["Canva", "Mailchimp", "Hootsuite", "Meta Business Suite", "Buffer"],
  },
  {
    name: "Real Estate",
    tools: ["Ylopo", "Propstream", "DealMachine", "BatchSkipTrace", "Vortex-Redx"],
  },
  {
    name: "Medical",
    tools: ["Epic", "Athenahealth", "DrChrono", "Practice Fusion", "Kareo"],
  },
  {
    name: "AI & Automation",
    tools: ["Zapier", "Make", "n8n", "OpenAI API", "ChatGPT"],
  },
  {
    name: "Web Development",
    tools: ["WordPress", "Shopify", "Webflow", "React", "Next.js", "Vercel"],
  },
  {
    name: "Scheduling",
    tools: ["Calendly", "Acuity", "Google Calendar"],
  },
];

export default function Tools() {
  return (
    <section className="py-20 md:py-28 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            We speak your tech stack
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our teams are proficient in 80+ tools across every category.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
            >
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-block bg-gray-50 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-100"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
