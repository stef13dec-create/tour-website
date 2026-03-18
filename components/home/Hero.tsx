"use client"

import * as React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { Instagram, Facebook, Send, ChevronLeft, ChevronRight } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

const heroCards = [
  { title: "3 regions\nin Romania", subtitle: "Transylvania · Bucovina · Dobrogea", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Castelul_Bran2.jpg/1280px-Castelul_Bran2.jpg" },
  { title: "10 days\nof wonder", subtitle: "The full Romania experience", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Muntii_Bucegi_vazuti_de_pe_Postavaru.jpg/1280px-Muntii_Bucegi_vazuti_de_pe_Postavaru.jpg" },
  { title: "Gigabytes\nof photos", subtitle: "Every moment, unforgettable", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Hunedoara_castle.jpg/1280px-Hunedoara_castle.jpg" },
  { title: "Eat sarmale", subtitle: "Taste the local culture", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Libraria_Carturesti_Carusel_-_Interior_ziua.jpg/1280px-Libraria_Carturesti_Carusel_-_Interior_ziua.jpg" },
  { title: "Enjoy\nthe vibe", subtitle: "Discover the untouched", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Ateneo_Rumano%2C_Bucarest%2C_Ruman%C3%ADa%2C_2016-05-29%2C_DD_73.jpg/1280px-Ateneo_Rumano%2C_Bucarest%2C_Ruman%C3%ADa%2C_2016-05-29%2C_DD_73.jpg" },
]

// Base card dimensions — scale handles the expansion
const CARD_W = 200
const CARD_H = 300

// Desktop: center expands to ~1.9× (≈380×570px), side cards pushed to edges
const desktopConfigs: Record<string, { x: number; rotateY: number; scale: number; opacity: number; zIndex: number }> = {
  "-2": { x: -520, rotateY: 55, scale: 0.52, opacity: 0.3,  zIndex: 1 },
  "-1": { x: -290, rotateY: 38, scale: 0.68, opacity: 0.55, zIndex: 2 },
   "0": { x: 0,    rotateY: 0,  scale: 1.9,  opacity: 1,    zIndex: 5 },
   "1": { x: 290,  rotateY:-38, scale: 0.68, opacity: 0.55, zIndex: 2 },
   "2": { x: 520,  rotateY:-55, scale: 0.52, opacity: 0.3,  zIndex: 1 },
}

// Mobile: center expands to ~2.3× (≈460×690px ≈ full phone screen)
const mobileConfigs: Record<string, { x: number; rotateY: number; scale: number; opacity: number; zIndex: number }> = {
  "-2": { x: -340, rotateY: 60, scale: 0.4,  opacity: 0,    zIndex: 0 },
  "-1": { x: -185, rotateY: 35, scale: 0.62, opacity: 0.5,  zIndex: 2 },
   "0": { x: 0,    rotateY: 0,  scale: 1.8,  opacity: 1,    zIndex: 5 },
   "1": { x: 185,  rotateY:-35, scale: 0.62, opacity: 0.5,  zIndex: 2 },
   "2": { x: 340,  rotateY:-60, scale: 0.4,  opacity: 0,    zIndex: 0 },
}

function getCardAnim(offset: number, isMobile: boolean) {
  const configs = isMobile ? mobileConfigs : desktopConfigs
  if (Math.abs(offset) > 2) {
    return { x: offset > 0 ? 500 : -500, rotateY: offset > 0 ? -70 : 70, scale: 0.3, opacity: 0, zIndex: 0 }
  }
  return configs[String(offset)]
}

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const isMobile = useIsMobile()
  const n = heroCards.length

  const prev = () => setActiveIndex((i) => (i - 1 + n) % n)
  const next = () => setActiveIndex((i) => (i + 1) % n)

  return (
    <section className="relative h-screen w-full flex flex-col items-center overflow-hidden bg-[#0a0a0a] pt-24 md:pt-28 pb-8">

      {/* Background with Ken Burns */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/Ateneo_Rumano,_Bucarest,_Rumanía,_2016-05-29,_DD_73.jpg"
          alt="Romanian Athenaeum, Bucharest - Daylight"
          fill
          className="object-cover object-center"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </motion.div>

      {/* Top heading — updates with active card */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center pointer-events-none mb-4 md:mb-6 px-6 flex-none hidden md:block"
        aria-live="polite"
        aria-atomic="true"
      >
        <p className="text-white/35 text-[10px] md:text-xs tracking-[0.5em] uppercase mb-2 md:mb-3">
          Discover Romania
        </p>
        <motion.h1
          key={activeIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-white text-3xl md:text-6xl font-serif font-light tracking-wide leading-tight"
        >
          {heroCards[activeIndex].title.replace("\n", " ")}
        </motion.h1>
        <motion.p
          key={`sub-${activeIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-white/45 text-[10px] md:text-xs tracking-[0.35em] uppercase mt-2 md:mt-3"
        >
          {heroCards[activeIndex].subtitle}
        </motion.p>
      </motion.div>

      {/* Carousel — fills most of the viewport height */}
      <div
        className="relative z-10 w-full flex items-center justify-center flex-1 min-h-0"
        style={{ height: undefined }}
      >
        {/* Arrows — desktop only */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="hidden md:flex absolute left-10 z-30 text-white/35 hover:text-white transition-colors duration-300 p-2"
        >
          <ChevronLeft size={32} strokeWidth={1} />
        </button>

        {/* Draggable perspective container */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.05}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50 || info.velocity.x < -400) next()
            else if (info.offset.x > 50 || info.velocity.x > 400) prev()
          }}
          className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
          style={{ perspective: "1200px", touchAction: "none" } as any}
          role="region"
          aria-label="Destination carousel"
          aria-roledescription="carousel"
        >
          {heroCards.map((card, index) => {
            const raw = (index - activeIndex + n) % n
            const offset = raw > Math.floor(n / 2) ? raw - n : raw
            const anim = getCardAnim(offset, isMobile)
            const isCenter = offset === 0

            return (
              <motion.div
                key={index}
                animate={anim}
                transition={{
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                  scale: { type: "spring", stiffness: 220, damping: 26 },
                }}
                onClick={() => !isCenter && setActiveIndex(index)}
                className="absolute"
                style={{
                  width: CARD_W,
                  height: CARD_H,
                  marginLeft: -CARD_W / 2,
                  marginTop: -CARD_H / 2,
                  top: isMobile ? "70%" : "50%",
                  left: "50%",
                  cursor: isCenter ? "default" : "pointer",
                } as any}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${n}: ${card.title.replace("\n", " ")}`}
                aria-current={isCenter ? "true" : undefined}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  {!isCenter && <div className="absolute inset-0 bg-black/30" />}

                  {/* Text inside card — mobile center card only */}
                  {isCenter && isMobile && (
                    <motion.div
                      key={`card-text-${index}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.25 }}
                      className="absolute bottom-0 left-0 right-0 p-5"
                    >
                      <p className="text-white/60 text-[10px] tracking-[0.4em] uppercase mb-1">
                        {card.subtitle}
                      </p>
                      <h2 className="text-white text-xl font-serif font-light whitespace-pre-line leading-snug drop-shadow-md">
                        {card.title}
                      </h2>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Arrows — desktop only */}
        <button
          onClick={next}
          aria-label="Next"
          className="hidden md:flex absolute right-10 z-30 text-white/35 hover:text-white transition-colors duration-300 p-2"
        >
          <ChevronRight size={32} strokeWidth={1} />
        </button>
      </div>

      {/* Bottom: dots + Book Tour */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center gap-5 mt-4 flex-none"
      >
        {/* Dot indicators */}
        <div className="flex gap-2 items-center">
          {heroCards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 h-[4px] bg-white"
                  : "w-[4px] h-[4px] bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Book Tour — prominent CTA */}
        <Link
          href="/book"
          className="inline-flex items-center justify-center px-10 py-4 bg-white text-black rounded-full font-medium tracking-[0.2em] uppercase text-sm hover:bg-white/90 active:scale-95 transition-all duration-300 shadow-lg shadow-black/30"
        >
          Book Tour
        </Link>
      </motion.div>

      {/* Social Icons — desktop only */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-6 z-20"
      >
        <a href="#" className="text-white/35 hover:text-white transition-colors duration-500">
          <Instagram size={18} strokeWidth={1.5} />
        </a>
        <a href="#" className="text-white/35 hover:text-white transition-colors duration-500">
          <Facebook size={18} strokeWidth={1.5} />
        </a>
        <a href="#" className="text-white/35 hover:text-white transition-colors duration-500">
          <Send size={18} strokeWidth={1.5} />
        </a>
      </motion.div>

    </section>
  )
}
