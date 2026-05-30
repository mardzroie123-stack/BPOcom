"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const rates: Record<string, { offshore: number; us: number }> = {
  "Customer Service": { offshore: 10, us: 35 },
  "Specialized VA": { offshore: 16, us: 45 },
  "AI & Automation": { offshore: 22, us: 60 },
};

export default function SavingsCalculator() {
  const [agents, setAgents] = useState(5);
  const [type, setType] = useState("Customer Service");

  const rate = rates[type] || rates["Customer Service"];
  const monthlyOffshore = agents * rate.offshore * 160;
  const monthlyUS = agents * rate.us * 160;
  const savings = monthlyUS - monthlyOffshore;
  const percent = Math.round((savings / monthlyUS) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12 bg-navy rounded-2xl p-6 md:p-8 text-white max-w-2xl mx-auto"
    >
      <h4 className="text-xl font-bold mb-6">Savings Calculator</h4>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-300 mb-2">
          How many agents do you need? <span className="text-white font-bold">{agents}</span>
        </label>
        <input
          type="range"
          min={1}
          max={20}
          value={agents}
          onChange={(e) => setAgents(Number(e.target.value))}
          className="w-full accent-blue"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>1</span>
          <span>20</span>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-300 mb-2">
          What type of work?
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue"
        >
          {Object.keys(rates).map((t) => (
            <option key={t} value={t} className="text-navy">{t}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white/10 rounded-lg p-4">
          <p className="text-xs text-gray-400 mb-1">Your monthly cost</p>
          <p className="text-2xl font-bold text-green-400">${monthlyOffshore.toLocaleString()}</p>
        </div>
        <div className="bg-white/10 rounded-lg p-4">
          <p className="text-xs text-gray-400 mb-1">U.S. equivalent</p>
          <p className="text-2xl font-bold text-gray-300">${monthlyUS.toLocaleString()}</p>
        </div>
      </div>

      <div className="bg-blue/20 border border-blue/30 rounded-lg p-4 text-center">
        <p className="text-sm text-gray-300">You save</p>
        <p className="text-2xl font-extrabold text-blue">${savings.toLocaleString()}/month ({percent}%)</p>
      </div>
    </motion.div>
  );
}
