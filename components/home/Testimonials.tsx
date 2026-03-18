"use client"

import * as React from "react"
import { motion } from "motion/react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah & James",
    country: "United Kingdom",
    text: "Corina made our trip to Transylvania absolutely magical. Her knowledge of the history and local legends is incredible. We felt like we were traveling with a friend rather than a guide.",
    tour: "Transylvania Castles & Legends"
  },
  {
    name: "Michael T.",
    country: "United States",
    text: "The best way to see Bucharest! Corina showed us hidden gems we would have never found on our own. The food recommendations were spot on. Highly recommend!",
    tour: "Bucharest Old Town & Communist History"
  },
  {
    name: "Elena R.",
    country: "Spain",
    text: "An unforgettable experience on the Transfagarasan road. Corina is a safe driver, a wonderful storyteller, and knows all the best spots for photos. 10/10.",
    tour: "Transfagarasan Epic Drive"
  }
]

export function Testimonials() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/50 font-light tracking-[0.2em] uppercase text-xs mb-6 block"
          >
            Guest Reviews
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl md:text-6xl font-light text-white leading-tight"
          >
            Words from our Travelers
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/[0.02] p-10 md:p-12 rounded-3xl border border-white/5 relative flex flex-col"
            >
              <Quote className="absolute top-10 right-10 text-white/5" size={64} strokeWidth={1} />
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-white/80 text-white/80" />
                ))}
              </div>
              <p className="text-white/70 font-light text-lg leading-relaxed mb-12 relative z-10 flex-grow">
                "{testimonial.text}"
              </p>
              <div className="mt-auto relative z-10">
                <p className="text-white font-serif text-xl mb-1">{testimonial.name}</p>
                <p className="text-white/50 text-sm font-light mb-4">{testimonial.country}</p>
                <div className="h-[1px] w-12 bg-white/10 mb-4" />
                <p className="text-white/40 text-xs uppercase tracking-widest">{testimonial.tour}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
