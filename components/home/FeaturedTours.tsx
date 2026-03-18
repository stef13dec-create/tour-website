"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, Star } from "lucide-react"

const featuredTours = [
  {
    id: "transylvania-castles",
    title: "Transylvania Castles & Legends",
    duration: "Full Day (12h)",
    location: "Peles & Bran Castles, Brasov",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Castelul_Bran2.jpg/1280px-Castelul_Bran2.jpg",
    price: "From €120",
    rating: 5.0,
    reviews: 124,
    tags: ["History", "Castles", "Bestseller"]
  },
  {
    id: "bucharest-old-town",
    title: "Bucharest Old Town & Communist History",
    duration: "Half Day (4h)",
    location: "Bucharest City Center",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Bucharest_-_Palace_of_the_Parliament_%282024%29_%282%29.jpg/1280px-Bucharest_-_Palace_of_the_Parliament_%282024%29_%282%29.jpg",
    price: "From €45",
    rating: 4.9,
    reviews: 89,
    tags: ["City Tour", "Walking"]
  },
  {
    id: "transfagarasan-road",
    title: "Transfagarasan Epic Drive",
    duration: "Full Day (14h)",
    location: "Carpathian Mountains",
    image: "https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?q=80&w=800&auto=format&fit=crop",
    price: "From €150",
    rating: 5.0,
    reviews: 56,
    tags: ["Nature", "Scenic Drive"]
  }
]

export function FeaturedTours() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#0a0a0a]">
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
              Curated Experiences
            </span>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
              Most Popular Tours
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl">
              Discover the highlights of Romania with carefully crafted itineraries starting from Bucharest. Small groups, private options, and unforgettable memories.
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
          {featuredTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col h-full cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                <div className="absolute top-4 left-4 flex gap-2">
                  {tour.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-black/40 backdrop-blur-md text-white text-[10px] font-light tracking-widest uppercase rounded-full border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col flex-grow px-2">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5 text-white/80 text-sm font-light">
                    <Star size={14} className="fill-white/80" />
                    <span>{tour.rating}</span>
                    <span className="text-white/40 text-xs">({tour.reviews})</span>
                  </div>
                  <div className="text-white/90 text-sm font-light">
                    {tour.price}
                  </div>
                </div>
                
                <h3 className="font-serif text-2xl md:text-3xl font-light text-white mb-4 group-hover:text-white/80 transition-colors line-clamp-2">
                  {tour.title}
                </h3>
                
                <div className="space-y-2 mb-8 mt-auto">
                  <div className="flex items-center gap-3 text-white/50 text-sm font-light">
                    <Clock size={14} strokeWidth={1.5} />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/50 text-sm font-light">
                    <MapPin size={14} strokeWidth={1.5} />
                    <span>{tour.location}</span>
                  </div>
                </div>

                <Link 
                  href={`/tours/${tour.id}`}
                  className="inline-flex items-center text-white text-xs font-light tracking-widest uppercase group-hover:text-white/70 transition-colors"
                >
                  Discover Tour
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
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
