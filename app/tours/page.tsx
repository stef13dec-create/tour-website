import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, Star } from "lucide-react"

const allTours = [
  {
    id: "transylvania-castles",
    title: "Transylvania Castles & Legends",
    duration: "Full Day (12h)",
    location: "Peles & Bran Castles, Brasov",
    image: "https://picsum.photos/seed/bran/800/600",
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
    image: "https://picsum.photos/seed/bucharest/800/600",
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
    image: "https://picsum.photos/seed/transfagarasan-road/800/600",
    price: "From €150",
    rating: 5.0,
    reviews: 56,
    tags: ["Nature", "Scenic Drive"]
  },
  {
    id: "sibiu-sighisoara",
    title: "Medieval Transylvania: Sibiu & Sighisoara",
    duration: "2 Days / 1 Night",
    location: "Transylvania",
    image: "https://picsum.photos/seed/sighisoara/800/600",
    price: "From €350",
    rating: 4.9,
    reviews: 42,
    tags: ["Multi-day", "Culture"]
  },
  {
    id: "taste-of-romania",
    title: "Taste of Romania: Food & Wine Tour",
    duration: "Half Day (5h)",
    location: "Bucharest & Surroundings",
    image: "https://picsum.photos/seed/romanian-food/800/600",
    price: "From €85",
    rating: 5.0,
    reviews: 78,
    tags: ["Gastronomy", "Wine"]
  },
  {
    id: "danube-delta",
    title: "Danube Delta Wildlife Safari",
    duration: "3 Days / 2 Nights",
    location: "Danube Delta",
    image: "https://picsum.photos/seed/danube/800/600",
    price: "From €450",
    rating: 4.8,
    reviews: 34,
    tags: ["Nature", "Wildlife"]
  }
]

export default function ToursPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050505]">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-white/50 font-light tracking-[0.2em] uppercase text-xs mb-6 block">
            Curated Experiences
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-white mb-6">Explore Romania</h1>
          <p className="text-lg text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
            From medieval castles to vibrant city life, discover our curated selection of authentic Romanian experiences.
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-24 px-6 md:px-12 flex-grow bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {allTours.map((tour) => (
              <div
                key={tour.id}
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
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
