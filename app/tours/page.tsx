import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"

export const metadata: Metadata = {
  title: 'All Tours | Discover Romania with Corina',
  description: 'Browse all guided tours in Romania — Bucharest city experiences and day trips to Transylvania, the Danube Delta, the Black Sea, and more.',
}
import { Footer } from "@/components/layout/Footer"
import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, Users, Star } from "lucide-react"

const allTours = [
  // Inside Bucharest
  {
    id: "belle-epoque-elegance",
    title: "Belle Époque Elegance",
    duration: "Half Day (4h)",
    location: "Calea Victoriei & Historic Center",
    image: "/tours/little-paris.png",
    price: "From €65",
    rating: 5.0,
    reviews: 142,
    tags: ["History", "Architecture", "Premium"],
    category: "inside"
  },
  {
    id: "communist-shadows",
    title: "Shadows of the Past",
    duration: "Half Day (5h)",
    location: "Palace of Parliament & Revolution Square",
    image: "/tours/communist.png",
    price: "From €55",
    rating: 4.9,
    reviews: 118,
    tags: ["Communisum", "History", "Essential"],
    category: "inside"
  },
  {
    id: "new-wave-kitchen",
    title: "The New Wave Kitchen",
    duration: "Evening (4h)",
    location: "Boutique Restaurants & Wine Bars",
    image: "/tours/contemporary-food.png",
    price: "From €95",
    rating: 5.0,
    reviews: 74,
    tags: ["Gastronomy", "Modern", "Luxury"],
    category: "inside"
  },
  {
    id: "bucharest-old-town",
    title: "Bucharest Old Town & Communist History",
    duration: "Half Day (4h)",
    location: "Bucharest City Center",
    image: "/tours/old-town.png",
    price: "From €45",
    rating: 4.9,
    reviews: 89,
    tags: ["City Tour", "Walking"],
    category: "inside"
  },
  {
    id: "taste-of-romania",
    title: "Taste of Romania: Food & Wine Tour",
    duration: "Half Day (5h)",
    location: "Bucharest & Surroundings",
    image: "/tours/traditional-food.png",
    price: "From €85",
    rating: 5.0,
    reviews: 78,
    tags: ["Gastronomy", "Wine"],
    category: "inside"
  },
  // Outside Bucharest
  {
    id: "transylvania-castles",
    title: "Transylvania Castles & Legends",
    duration: "Full Day (12h)",
    location: "Peles & Bran Castles, Brasov",
    image: "/tours/transylvania.jpg",
    price: "From €120",
    rating: 5.0,
    reviews: 124,
    tags: ["History", "Castles", "Bestseller"],
    category: "outside"
  },
  {
    id: "transfagarasan-road",
    title: "Transfagarasan Epic Drive",
    duration: "Full Day (14h)",
    location: "Carpathian Mountains",
    image: "/tours/transfagarasan.jpg",
    price: "From €150",
    rating: 5.0,
    reviews: 56,
    tags: ["Nature", "Scenic Drive"],
    category: "outside"
  },
  {
    id: "sibiu-sighisoara",
    title: "Medieval Transylvania: Sibiu & Sighisoara",
    duration: "2 Days / 1 Night",
    location: "Transylvania",
    image: "/tours/medieval-transylvania.jpg",
    price: "From €350",
    rating: 4.9,
    reviews: 42,
    tags: ["Multi-day", "Culture"],
    category: "outside"
  },
  {
    id: "danube-delta",
    title: "Danube Delta Wildlife Safari",
    duration: "3 Days / 2 Nights",
    location: "Danube Delta",
    image: "/tours/danube-delta.jpg",
    price: "From €450",
    rating: 4.8,
    reviews: 34,
    tags: ["Nature", "Wildlife"],
    category: "outside"
  }
]

export default function ToursPage() {
  const cityTours = allTours.filter(t => t.category === "inside")
  const outTours = allTours.filter(t => t.category === "outside")

  const renderTourCard = (tour: typeof allTours[0]) => (
    <div
      key={tour.id}
      className="group flex flex-col h-full cursor-pointer"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
        <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
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
            <Star size={14} className="fill-white/80 text-white/80" />
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
          <div className="flex items-center gap-3 text-white/50 text-sm font-light">
            <Users size={14} strokeWidth={1.5} />
            <span>Private & Small Group</span>
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
    </div>
  )

  return (
    <main className="min-h-screen flex flex-col bg-[#050505]">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 px-6 md:px-12 border-b border-white/5 text-center">
        <div className="max-w-7xl mx-auto">
          <span className="text-white/50 font-light tracking-[0.2em] uppercase text-xs mb-6 block">
            Curated Experiences
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-white mb-6">Explore Romania</h1>
          <p className="text-lg text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
            From medieval castles to vibrant city life, discover our curated selection of authentic Romanian experiences.
          </p>
        </div>
      </section>

      {/* Inside Bucharest Section */}
      <section className="py-24 px-6 md:px-12 bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-4">City Experiences</h2>
            <p className="text-white/50 text-base font-light font-sans max-w-xl">
              Immerse yourself in the energy, history, and culinary delights of Bucharest.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {cityTours.map(renderTourCard)}
          </div>
        </div>
      </section>

      {/* Outside Bucharest Section */}
      <section id="day-trips" className="py-24 px-6 md:px-12 flex-grow bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-4">Beyond the City</h2>
            <p className="text-white/50 text-base font-light font-sans max-w-xl">
              Embark on unforgettable day trips tracking legends, medieval castles, and natural wonders.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {outTours.map(renderTourCard)}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
