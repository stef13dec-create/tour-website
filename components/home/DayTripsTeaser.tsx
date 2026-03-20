"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

import { outsideTours } from "@/lib/tours"

export function DayTripsTeaser() {
  // We'll show the main 3 for the pills as in the design, or all of them.
  // The user said "for EACH tour", so let's show all outside tours.
  // However, mapping them to shorter names if possible for the pills.
  const displayTours = outsideTours.map(t => ({
    id: t.id,
    label: t.label ?? t.title.toUpperCase()
  }))

  return (
    <section
      id="day-trips"
      className="relative min-h-[70vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]"
    >
      {/* Background image */}
      <Image
        src="/tours/transylvania.jpg"
        alt="Transylvania — Day trips from Bucharest"
        fill
        className="object-cover object-center"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 gap-8">

        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/50 text-xs uppercase tracking-[0.2em]"
        >
          Beyond the Capital
        </motion.span>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-6xl md:text-8xl font-light text-white leading-tight max-w-4xl"
        >
          Romania Awaits Beyond<br className="hidden md:block" /> the City Walls
        </motion.h2>

        {/* Destination buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl"
        >
          {displayTours.map((tour) => (
            <Link
              key={tour.id}
              href={`/tours/${tour.id}`}
              className="px-6 py-3 border border-[#FCD116]/40 backdrop-blur-xl text-white text-[10px] tracking-[0.2em] uppercase rounded-full hover:bg-[#FCD116] hover:text-black hover:border-[#FCD116] transition-all duration-500"
            >
              {tour.label}
            </Link>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/tours#day-trips"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-white/30 text-white font-light tracking-widest uppercase text-xs hover:bg-white hover:text-black transition-colors duration-500"
          >
            Discover Day Trips
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
