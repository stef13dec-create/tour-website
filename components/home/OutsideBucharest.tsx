"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { Clock, MapPin, Star } from "lucide-react"

const outsideTours = [
  {
    id: "transylvania-castles",
    title: "Transylvania in a Day",
    duration: "Full Day (12–14h)",
    location: "Bran Castle, Peles Castle & Brasov",
    image: "/tours/transylvania.jpg",
    price: "From €45",
    rating: 4.8,
    reviews: 1240,
    tags: ["Dracula", "Castles", "Bestseller"]
  },
  {
    id: "slanic-salt-mine",
    title: "Underground Cathedral",
    duration: "Half Day (7–8h)",
    location: "Slanic Prahova Salt Mine",
    image: "/tours/salt-mine.jpg",
    price: "From €35",
    rating: 4.6,
    reviews: 387,
    tags: ["Nature", "Unique", "Halotherapy"]
  },
  {
    id: "danube-delta",
    title: "Wild Danube Delta",
    duration: "Full Day (14h)",
    location: "Tulcea — UNESCO Delta",
    image: "/tours/danube-delta.jpg",
    price: "From €85",
    rating: 4.7,
    reviews: 214,
    tags: ["Wildlife", "Nature", "UNESCO"]
  },
  {
    id: "constanta-black-sea",
    title: "Sea & Ancient Rome",
    duration: "Full Day (10–12h)",
    location: "Constanta & Mamaia Beach",
    image: "/tours/black-sea.jpg",
    price: "From €55",
    rating: 4.5,
    reviews: 302,
    tags: ["History", "Beach", "Summer"]
  },
  {
    id: "mogosoaia-snagov",
    title: "Palaces & Dracula's Tomb",
    duration: "Half Day (5–7h)",
    location: "Mogosoaia Palace & Snagov",
    image: "/tours/mogosoaia.jpg",
    price: "From €30",
    rating: 4.6,
    reviews: 178,
    tags: ["Dracula", "Palaces", "Easy"]
  }
]

export function OutsideBucharest() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="text-white/50 font-light tracking-[0.2em] uppercase text-xs mb-6 block">
              Beyond the Capital
            </span>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
              Day Trips from Bucharest
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl">
              Romania's greatest treasures lie within reach. From Gothic castles lost in Transylvania to the wild silence of the Danube Delta — each journey starts at your hotel door.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block"
          >
            <Link
              href="/tours"
              className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-white rounded-full hover:bg-white hover:text-black transition-colors duration-500 font-light tracking-widest uppercase text-xs"
            >
              View All Tours
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {outsideTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col h-full cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-8 group-hover:shadow-[0_20px_50px_rgba(252,209,22,0.15)] transition-shadow duration-700">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  {tour.tags.map(tag => (
                    <span key={tag} className="px-5 py-2 bg-white/10 backdrop-blur-xl text-white text-[9px] font-medium tracking-[0.2em] uppercase rounded-full border border-white/20 shadow-xl">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col flex-grow px-2">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2 text-white/90 text-sm font-light">
                    <div className="flex items-center gap-1 px-2 py-0.5 bg-[#FCD116]/10 rounded border border-[#FCD116]/20">
                      <Star size={12} className="fill-[#FCD116] text-[#FCD116]" />
                      <span className="text-[#FCD116] font-medium">{tour.rating}</span>
                    </div>
                    <span className="text-white/40 text-xs">({tour.reviews} reviews)</span>
                  </div>
                  <div className="text-[#FCD116] text-lg font-serif italic">
                    {tour.price}
                  </div>
                </div>

                <h3 className="font-serif text-3xl font-light text-white mb-5 group-hover:translate-x-1 transition-transform duration-500 line-clamp-2">
                  {tour.title}
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-8 mt-auto pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3 text-white/50 text-xs font-light tracking-wide italic">
                    <Clock size={14} className="text-[#FCD116]/60" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/50 text-xs font-light tracking-wide italic">
                    <MapPin size={14} className="text-[#FCD116]/60" />
                    <span>{tour.location}</span>
                  </div>
                </div>

                <Link
                  href={`/tours/${tour.id}`}
                  className="group/link inline-flex items-center text-[#FCD116] text-[10px] font-medium tracking-[0.3em] uppercase transition-all duration-300 border-b border-[#FCD116]/0 hover:border-[#FCD116]/50 pb-1 w-fit"
                >
                  Explore Experience
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <svg className="w-4 h-4 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center md:hidden">
          <Link
            href="/tours"
            className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-white rounded-full hover:bg-white hover:text-black transition-colors duration-500 font-light tracking-widest uppercase text-xs w-full"
          >
            View All Tours
          </Link>
        </div>
      </div>
    </section>
  )
}
