"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "motion/react"

const timelineEvents = [
  {
    day: "Days 1–3",
    location: "Bucharest & Sinaia",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/01_Chateau_Peles.jpg/1280px-01_Chateau_Peles.jpg",
    offset: "ml-0"
  },
  {
    day: "Days 4–6",
    location: "Brasov & Bran",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Bra%C8%99ov%2C_Pia%C8%9Ba_Sfatului_-_Flickr_-_Jorge_Franganillo.jpg/1280px-Bra%C8%99ov%2C_Pia%C8%9Ba_Sfatului_-_Flickr_-_Jorge_Franganillo.jpg",
    offset: "ml-24"
  },
  {
    day: "Days 7–10",
    location: "Sibiu & Transfagarasan",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Hermannstadt_Romania%2C_the_Small_Plaza.jpg",
    offset: "ml-12"
  }
]

export function Timeline() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/50 font-light tracking-[0.2em] uppercase text-xs mb-6 block"
          >
            The Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl md:text-6xl font-light text-white leading-tight"
          >
            About the Tour
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center py-12 pr-0 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-white/80 text-2xl md:text-3xl font-light leading-relaxed mb-12">
                We've planned a simple and convenient 10-day itinerary for your trip to Romania. You'll visit three iconic regions: Wallachia, Transylvania, and the Carpathian Mountains.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-white/50 text-lg font-light leading-relaxed max-w-md">
                No need to worry about routes, schedules, or finding places — everything is already organized. We'll show you where to go, what to see, and where to eat, so you can simply enjoy the journey.
              </p>
            </motion.div>
          </div>

          {/* Right Timeline */}
          <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[1px] bg-white/10" />

            <div className="space-y-32">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex items-start gap-8 md:gap-16"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-8 w-2 h-2 rounded-full bg-white/80 -translate-x-1/2 mt-3 z-10" />
                  
                  <div className={`pl-8 md:pl-20 w-full ${event.offset}`}>
                    <div className="mb-6">
                      <span className="text-white/50 font-light tracking-widest uppercase text-xs block mb-2">{event.day}</span>
                      <span className="text-white font-serif text-2xl md:text-3xl font-light">{event.location}</span>
                    </div>
                    
                    <div className="relative aspect-[4/5] w-full max-w-[280px] rounded-2xl overflow-hidden group">
                      <Image
                        src={event.image}
                        alt={event.location}
                        fill
                        className="object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
