"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import { Send, ChevronLeft, ChevronRight } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { useRouter } from "next/navigation"
import { getAssetPath } from "@/lib/utils"

const heroCards = [
  { title: "Belle Époque\nElegance",        subtitle: "Architecture & French Influence",   image: getAssetPath("/tours/little-paris.png"), href: "/tours/belle-epoque-elegance" },
  { title: "Shadows of\nthe Past",           subtitle: "Rise & Fall of a Dictator",          image: getAssetPath("/tours/communist.png"), href: "/tours/communist-shadows" },
  { title: "Legends &\nSecret Passages",     subtitle: "Where Vlad the Impaler Ruled",       image: getAssetPath("/tours/old-town.png"), href: "/tours/bucharest-old-town" },
  { title: "Bucharest's Soul\n& Traditions", subtitle: "Authentic Flavors at Obor",          image: getAssetPath("/tours/markets.png"), href: "/tours" },
  { title: "A Culinary\nOdyssey",            subtitle: "Heritage Tastes & Historic Feasts",  image: getAssetPath("/tours/traditional-food.png"), href: "/tours/taste-of-romania" },
  { title: "The New\nWave Kitchen",          subtitle: "Avant-Garde Fusion & Innovations",   image: getAssetPath("/tours/contemporary-food.png"), href: "/tours/new-wave-kitchen" },
  { title: "Lakes, Parks\n& Wellness",       subtitle: "Rejuvenation at Therme & Herastrau", image: getAssetPath("/tours/nature-wellness.png"), href: "/tours" },
]

const CARD_W = 200
const CARD_H = 300

type CardAnim = { x: number; rotateY: number; scale: number; opacity: number; zIndex: number }

const desktopConfigs: Record<string, CardAnim> = {
  "-2": { x: -520, rotateY:  55, scale: 0.52, opacity: 0.30, zIndex: 1 },
  "-1": { x: -290, rotateY:  38, scale: 0.68, opacity: 0.55, zIndex: 2 },
   "0": { x:    0, rotateY:   0, scale: 1.90, opacity: 1.00, zIndex: 5 },
   "1": { x:  290, rotateY: -38, scale: 0.68, opacity: 0.55, zIndex: 2 },
   "2": { x:  520, rotateY: -55, scale: 0.52, opacity: 0.30, zIndex: 1 },
}

const mobileConfigs: Record<string, CardAnim> = {
  "-2": { x: -340, rotateY:  60, scale: 0.40, opacity: 0.00, zIndex: 0 },
  "-1": { x: -185, rotateY:  35, scale: 0.62, opacity: 0.50, zIndex: 2 },
   "0": { x:    0, rotateY:   0, scale: 1.80, opacity: 1.00, zIndex: 5 },
   "1": { x:  185, rotateY: -35, scale: 0.62, opacity: 0.50, zIndex: 2 },
   "2": { x:  340, rotateY: -60, scale: 0.40, opacity: 0.00, zIndex: 0 },
}

function getCardAnim(offset: number, isMobile: boolean): CardAnim {
  if (Math.abs(offset) > 2) {
    return { x: offset > 0 ? 500 : -500, rotateY: offset > 0 ? -70 : 70, scale: 0.3, opacity: 0, zIndex: 0 }
  }
  return (isMobile ? mobileConfigs : desktopConfigs)[String(offset)]
}

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const isMobile = useIsMobile()
  const prefersReducedMotion = useReducedMotion()
  const router = useRouter()
  const n = heroCards.length

  const prev = useCallback(() => setActiveIndex((i) => (i - 1 + n) % n), [n])
  const next = useCallback(() => setActiveIndex((i) => (i + 1) % n), [n])

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return
    const timer = setInterval(next, 2500)
    return () => clearInterval(timer)
  }, [isPaused, prefersReducedMotion, activeIndex, next]) // activeIndex in deps resets timer after manual navigation

  return (
    <section className="relative h-screen w-full flex flex-col items-center overflow-hidden bg-[#0a0a0a] pt-24 md:pt-28 pb-8">

      {/* Background — Ken Burns */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: prefersReducedMotion ? 1 : 1.08 }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={getAssetPath("/athenaeum-hero.webp")}
          alt="Romanian Athenaeum, Bucharest"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </motion.div>

      {/* Heading */}
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

      {/* Carousel */}
      <div className="relative z-10 w-full flex items-center justify-center flex-1 min-h-0">
        <button
          onClick={prev}
          aria-label="Previous"
          className="hidden md:flex absolute left-10 z-30 text-white/60 hover:text-white transition-colors duration-300 p-2 -translate-y-12"
        >
          <ChevronLeft size={32} strokeWidth={1.5} />
        </button>

        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.05}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50 || info.velocity.x < -400) next()
            else if (info.offset.x > 50 || info.velocity.x > 400) prev()
          }}
          className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
          style={{ perspective: 1200, touchAction: "none" }}
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
                whileHover={!isCenter ? { scale: anim.scale * 1.05, filter: "brightness(1.1)" } : undefined}
                onClick={() => !isCenter && setActiveIndex(index)}
                onMouseEnter={isCenter ? () => setIsPaused(true) : undefined}
                onMouseLeave={isCenter ? () => setIsPaused(false) : undefined}
                className="absolute"
                style={{
                  width: CARD_W,
                  height: CARD_H,
                  marginLeft: -CARD_W / 2,
                  marginTop: -CARD_H / 2,
                  top: isMobile ? "70%" : "50%",
                  left: "50%",
                  cursor: isCenter ? "default" : "pointer",
                }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${n}: ${card.title.replace("\n", " ")}`}
                aria-current={isCenter ? "true" : undefined}
              >
                <div className={`relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group ${
                  isCenter
                    ? "ring-1 ring-white/20 shadow-[0_24px_64px_rgba(0,0,0,0.85)]"
                    : "border border-white/10"
                }`}>
                  <motion.div
                    className="absolute inset-0"
                    animate={isCenter ? { scale: [1, 1.1, 1], x: [0, -10, 0], y: [0, -5, 0] } : { scale: 1, x: 0, y: 0 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Image
                      src={card.image}
                      alt={card.title.replace("\n", " ")}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity group-hover:opacity-60" />
                  {!isCenter && <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:opacity-20" />}

                  {isCenter && (
                    <motion.div
                      key={`card-text-${index}`}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.35 }}
                      className="absolute bottom-0 left-0 right-0 p-4 md:p-6"
                    >
                      <p className="text-white/70 text-[8px] md:text-[10px] tracking-[0.4em] uppercase mb-1 md:mb-2">
                        {card.subtitle}
                      </p>
                      <h2 className="text-white text-lg md:text-2xl font-serif font-light whitespace-pre-line leading-snug drop-shadow-lg">
                        {card.title}
                      </h2>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <button
          onClick={next}
          aria-label="Next"
          className="hidden md:flex absolute right-10 z-30 text-white/60 hover:text-white transition-colors duration-300 p-2 -translate-y-12"
        >
          <ChevronRight size={32} strokeWidth={1.5} />
        </button>
      </div>

      {/* Bottom: dots + Book Tour */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center gap-5 mt-4 flex-none"
      >
        <div className="flex gap-2 items-center" role="tablist" aria-label="Carousel navigation">
          {heroCards.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIndex}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-6 h-[4px] bg-white" : "w-[4px] h-[4px] bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        <Link
          href={heroCards[activeIndex].href || "/tours"}
          className="inline-flex items-center justify-center px-10 py-4 bg-white text-black rounded-full font-medium tracking-[0.2em] uppercase text-sm hover:bg-white/90 active:scale-95 transition-all duration-300 shadow-lg shadow-black/30"
        >
          Book Tour
        </Link>
        <a href="#day-trips" className="text-white/40 hover:text-white/70 text-[10px] tracking-[0.3em] uppercase transition-colors duration-300">
          Day Trips ↓
        </a>
      </motion.div>

      {/* Social Icons — desktop only */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:flex absolute right-6 top-[45%] -translate-y-1/2 flex-col gap-6 z-20"
      >
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group flex items-center justify-center w-10 h-10 rounded-full bg-black/10 backdrop-blur-sm border border-white/10 text-white/60 hover:text-white hover:bg-black/20 transition-all duration-500">
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
          </svg>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="group flex items-center justify-center w-10 h-10 rounded-full bg-black/10 backdrop-blur-sm border border-white/10 text-white/60 hover:text-white hover:bg-black/20 transition-all duration-500">
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>
        <a href="https://t.me" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="group flex items-center justify-center w-10 h-10 rounded-full bg-black/10 backdrop-blur-sm border border-white/10 text-white/60 hover:text-white hover:bg-black/20 transition-all duration-500">
          <Send size={20} strokeWidth={2} />
        </a>
      </motion.div>

    </section>
  )
}
