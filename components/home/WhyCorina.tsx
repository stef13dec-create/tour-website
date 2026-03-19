"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { ShieldCheck, Heart, Map, Coffee, Star } from "lucide-react"

const reasons = [
  {
    number: "01",
    title: "Licensed Professional",
    description: "Certified by the Romanian Ministry of Tourism with years of experience guiding international guests."
  },
  {
    number: "02",
    title: "Curated Itineraries",
    description: "No tourist traps. Only authentic, carefully selected routes that showcase the real Romania."
  },
  {
    number: "03",
    title: "Passionate Storytelling",
    description: "History comes alive through engaging stories, local legends, and deep cultural insights."
  },
  {
    number: "04",
    title: "Gastronomic Focus",
    description: "Discover Romania through its food. Taste local wines, traditional dishes, and hidden culinary gems."
  }
]

export function WhyCorina() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden">
              <Image
                src="/Corina picture.JPG"
                alt="Corina, your licensed tour guide in Romania"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white font-serif text-3xl font-light mb-2">Corina</p>
                <p className="text-white/70 text-xs font-light tracking-widest uppercase">Licensed Tour Guide</p>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -right-6 top-1/4 bg-[#111] border border-white/10 p-6 rounded-2xl shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
                  <Star className="text-white/80" size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white font-light text-2xl">5.0</p>
                  <p className="text-white/50 text-xs tracking-widest uppercase mt-1">TripAdvisor</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-white/50 font-light tracking-[0.2em] uppercase text-xs mb-6 block">
              Your Local Expert
            </span>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-white mb-8 leading-tight">
              Why Travel With Corina?
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-16 max-w-xl">
              Traveling is more than just seeing places; it's about understanding the culture, tasting the local flavors, and hearing the stories that shaped the land. As a licensed guide born and raised in Romania, I offer a personal, authentic, and deeply immersive experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1, delay: 0.4 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-4"
                >
                  <div className="text-white/30 font-serif text-3xl font-light italic">
                    {reason.number}
                  </div>
                  <h3 className="text-white font-light text-xl tracking-wide">{reason.title}</h3>
                  <p className="text-white/50 text-sm font-light leading-relaxed">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
