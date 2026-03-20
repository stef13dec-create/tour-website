"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { Clock, MapPin, Star, ArrowRight } from "lucide-react"
import { allTours, cityTours, outsideTours } from "@/lib/tours"

export function Timeline() {
  const [activeTour, setActiveTour] = React.useState(allTours[0])

  return (
    <section className="py-32 px-6 md:px-12 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/50 font-light tracking-[0.2em] uppercase text-xs mb-6 block"
          >
            Our Curated Experiences
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl md:text-6xl font-light text-white leading-tight"
          >
            The Journey
          </motion.h2>
        </div>

        {/* Categories / Tabs */}
        <div className="flex flex-col gap-10 mb-16 relative z-10 w-full max-w-5xl mx-auto">
          {/* Inside Bucharest */}
          <div>
            <h4 className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase text-center mb-6">City Experiences</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {cityTours.map((tour) => (
                <button 
                  key={tour.id}
                  onClick={() => setActiveTour(tour)}
                  className={`px-6 py-3 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                     activeTour.id === tour.id 
                     ? 'bg-[#FCD116] text-black shadow-[0_0_15px_rgba(252,209,22,0.3)] scale-105' 
                     : 'bg-black/40 border border-white/10 text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5'
                  }`}
                >
                  {tour.title}
                </button>
              ))}
            </div>
          </div>
          
          {/* Outside Bucharest */}
          <div>
            <h4 className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase text-center mb-6">Beyond the City</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {outsideTours.map((tour) => (
                <button 
                  key={tour.id}
                  onClick={() => setActiveTour(tour)}
                  className={`px-6 py-3 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                     activeTour.id === tour.id 
                     ? 'bg-[#FCD116] text-black shadow-[0_0_15px_rgba(252,209,22,0.3)] scale-105' 
                     : 'bg-black/40 border border-white/10 text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5'
                  }`}
                >
                  {tour.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Showcase Content */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTour.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col lg:flex-row gap-16 items-center"
            >
              {/* Left Info */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-6 text-white/80">
                  <Star className="text-[#FCD116] fill-[#FCD116] w-5 h-5" />
                  <span className="font-medium text-lg">{activeTour.rating}</span>
                  <span className="text-white/40 text-sm">({activeTour.reviews} reviews)</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-serif text-white font-light mb-6 leading-tight">
                  {activeTour.title}
                </h3>
                
                <div className="flex flex-wrap gap-6 mb-8 text-white/60 font-light text-sm">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-[#FCD116]" />
                    <span>{activeTour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#FCD116]" />
                    <span>{activeTour.location}</span>
                  </div>
                  <div className="flex items-center gap-2 font-serif italic text-[#FCD116] text-lg">
                    {activeTour.price}
                  </div>
                </div>
                
                <p className="text-white/70 text-lg font-light leading-relaxed mb-10 max-w-xl">
                  {activeTour.overview || "Discover the hidden gems and rich history of Romania on this hand-crafted private tour experience."}
                </p>

                <div className="flex flex-wrap gap-4 mt-auto">
                  <Link 
                    href={`/tours/${activeTour.id}`}
                    className="inline-flex items-center px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white hover:text-black transition-colors duration-500 font-bold tracking-widest uppercase text-xs"
                  >
                    View Details
                  </Link>
                  <Link 
                    href={`/book?tour=${activeTour.id}`}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#FCD116] text-black rounded-full hover:bg-[#FCD116]/90 transition-all duration-300 shadow-[0_0_15px_rgba(252,209,22,0.2)] hover:scale-105 active:scale-95 font-bold tracking-widest uppercase text-xs"
                  >
                    Book Now
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Right Graphic */}
              <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-3xl overflow-hidden group shadow-2xl">
                <Image
                  src={activeTour.image}
                  alt={activeTour.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[2s] ease-[0.16,1,0.3,1] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  {activeTour.tags.map((tag: string) => (
                    <span key={tag} className="px-5 py-2 bg-black/40 backdrop-blur-md text-white text-[10px] font-medium tracking-widest uppercase rounded-full border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
