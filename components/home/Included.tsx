"use client"

import * as React from "react"
import { motion } from "motion/react"
import { UserCheck, Map, Car, Building } from "lucide-react"

const includedItems = [
  {
    icon: <UserCheck size={24} className="text-white mb-4" />,
    title: "Guides",
    description: "1 awesome local guide (Corina) who knows everything about Romania!"
  },
  {
    icon: <Map size={24} className="text-white mb-4" />,
    title: "Transport",
    description: "Routes:\nBucharest — Sinaia\nBrasov — Sibiu\nBucharest"
  },
  {
    icon: <Car size={24} className="text-white mb-4" />,
    title: "Transfers",
    description: "From the airport to the hotels and all inter-city travel."
  },
  {
    icon: <Building size={24} className="text-white mb-4" />,
    title: "Hotels",
    description: "Comfortable accommodation\n2 people per room\n(breakfasts included)"
  }
]

export function Included() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#0a0a0a] relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-[1px] w-16 md:w-32 bg-white/30" />
          <h2 className="font-sans text-2xl md:text-4xl font-bold text-white tracking-widest uppercase">
            What's Included
          </h2>
          <div className="h-[1px] w-16 md:w-32 bg-white/30" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {includedItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-white/20 rounded-2xl p-8 bg-white/[0.02] hover:bg-white/[0.05] transition-colors flex flex-col"
            >
              {item.icon}
              <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed whitespace-pre-line">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
