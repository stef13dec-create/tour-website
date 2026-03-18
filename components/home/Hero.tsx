"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { Instagram, Facebook, Send } from "lucide-react"

const heroCards = [
  { title: "3 regions\nin Romania", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Castelul_Bran2.jpg/1280px-Castelul_Bran2.jpg" },
  { title: "10 days", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Muntii_Bucegi_vazuti_de_pe_Postavaru.jpg/1280px-Muntii_Bucegi_vazuti_de_pe_Postavaru.jpg" },
  { title: "gigabytes\nof photos", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Hunedoara_castle.jpg/1280px-Hunedoara_castle.jpg" },
  { title: "eat sarmale", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Libraria_Carturesti_Carusel_-_Interior_ziua.jpg/1280px-Libraria_Carturesti_Carusel_-_Interior_ziua.jpg" },
  { title: "enjoy\nthe vibe", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Ateneo_Rumano%2C_Bucarest%2C_Ruman%C3%ADa%2C_2016-05-29%2C_DD_73.jpg/1280px-Ateneo_Rumano%2C_Bucarest%2C_Ruman%C3%ADa%2C_2016-05-29%2C_DD_73.jpg" }
]

export function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] w-full flex items-end justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Image with Slow Zoom (Ken Burns) */}
      <motion.div 
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/01_Chateau_Peles.jpg/1280px-01_Chateau_Peles.jpg"
          alt="Scenic view of Peles Castle in the Carpathian Mountains, Romania"
          fill
          className="object-cover object-center"
          priority
          referrerPolicy="no-referrer"
        />
        {/* Gradient overlays for text readability and blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0a0a0a]" />
      </motion.div>

      {/* Massive Text Behind Foreground (Simulated with Blend Mode) */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[25%] left-0 w-full text-center z-0 pointer-events-none flex flex-col items-center"
      >
        <h1 className="text-[16vw] font-serif font-light text-white/90 tracking-tight select-none mix-blend-overlay leading-none">
          Romania
        </h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/70 text-lg md:text-2xl font-light tracking-[0.3em] uppercase mt-4"
        >
          Discover the untouched
        </motion.p>
      </motion.div>

      {/* Social Icons floating on the right */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20"
      >
        <a href="#" className="text-white/50 hover:text-white transition-colors duration-500">
          <Instagram size={20} strokeWidth={1.5} />
        </a>
        <a href="#" className="text-white/50 hover:text-white transition-colors duration-500">
          <Facebook size={20} strokeWidth={1.5} />
        </a>
        <a href="#" className="text-white/50 hover:text-white transition-colors duration-500">
          <Send size={20} strokeWidth={1.5} />
        </a>
      </motion.div>

      {/* Bottom Content Area */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16 flex flex-col lg:flex-row items-end justify-between gap-8">
        
        {/* 5 Vertical Cards */}
        <div className="flex flex-wrap sm:flex-nowrap gap-4 w-full lg:w-auto">
          {heroCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[calc(33.33%-10px)] sm:w-[120px] md:w-[140px] aspect-[1/2] rounded-2xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                <p className="text-white/90 text-xs md:text-sm font-light whitespace-pre-line leading-relaxed">
                  {card.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Book Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-auto flex justify-end"
        >
          <Link 
            href="/book"
            className="inline-flex items-center justify-center px-12 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-500 font-light tracking-[0.2em] uppercase text-sm w-full sm:w-auto"
          >
            Book Tour
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
