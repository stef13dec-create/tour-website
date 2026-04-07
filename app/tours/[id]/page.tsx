import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, Star, Check, X, Calendar } from "lucide-react"
import { Metadata } from "next"

import { getTourById, allTours } from "@/lib/tours"
import { notFound } from "next/navigation"
import { getAssetPath } from "@/lib/utils"

export async function generateStaticParams() {
  return allTours.map((tour) => ({
    id: tour.id,
  }))
}

const defaultMeta = {
  title: "Romanian Tour | Discover Romania with Corina",
  description: "A premium guided tour of Romania with Corina, your licensed local expert. Small groups, private options, unforgettable experiences.",
  image: getAssetPath("/athenaeum-hero.webp"),
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const tour = getTourById(id);
  
  if (!tour) return defaultMeta;

  return {
    title: `${tour.title} | Discover Romania with Corina`,
    description: tour.overview || `Join our ${tour.duration} tour to ${tour.location}. ${tour.price}.`,
    openGraph: {
      title: `${tour.title} | Discover Romania with Corina`,
      description: tour.overview,
      images: [{ url: tour.image }],
    },
  }
}

export default async function TourDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tourData = getTourById(id);

  if (!tourData) {
    notFound();
  }

  // Combine static fallback data with dynamic data if needed, 
  // but for now we'll use tourData with defaults for missing fields
  const tour = {
    ...tourData,
    overview: tourData.overview || "Experience the magic of Romania with this curated tour. Our licensed guides will take you through the most beautiful and historic sites, providing local insights and an unforgettable journey.",
    included: tourData.included || [
      "Licensed English-speaking guide",
      "Transportation by air-conditioned vehicle",
      "Bottled water",
      "Local insights and tips"
    ],
    excluded: tourData.excluded || [
      "Entrance fees to monuments",
      "Lunch and personal expenses",
      "Gratuities (optional)"
    ],
    itinerary: tourData.itinerary || [
      { time: "Start", title: "Morning Departure", desc: "Meet your guide and start the journey." },
      { time: "Mid-day", title: "Tour Experience", desc: "Deep dive into the history and culture of the location." },
      { time: "Evening", title: "Return", desc: "Arrive back at the starting point or your hotel." }
    ]
  }


  return (
    <main className="min-h-screen flex flex-col bg-[#050505]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] w-full flex items-end pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="flex flex-wrap gap-2 mb-6">
            {tour.tags.map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-black/40 backdrop-blur-md text-white text-[10px] font-light tracking-widest uppercase rounded-full border border-white/10">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight">
            {tour.title}
          </h1>
          <div className="flex flex-wrap items-center gap-8 text-white/70 font-light">
            <div className="flex items-center gap-2">
              <Star size={18} className="fill-white/80 text-white/80" />
              <span className="text-white">{tour.rating}</span>
              <span className="text-white/40">({tour.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} strokeWidth={1.5} />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} strokeWidth={1.5} />
              <span>{tour.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 md:px-12 flex-grow bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          
          {/* Main Content */}
          <div className="w-full lg:w-2/3 space-y-24">
            
            {/* Overview */}
            <div>
              <span className="text-white/50 font-light tracking-[0.2em] uppercase text-xs mb-6 block">
                About the Tour
              </span>
              <h2 className="font-serif text-4xl font-light text-white mb-8">Overview</h2>
              <p className="text-white/70 text-lg font-light leading-relaxed">
                {tour.overview}
              </p>
            </div>

            {/* Included / Excluded */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/[0.02] border border-white/5 p-10 rounded-3xl">
                <h3 className="font-serif text-2xl font-light text-white mb-8">What's Included</h3>
                <ul className="space-y-6">
                  {tour.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-white/70 font-light">
                      <Check size={20} className="text-white/50 shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-10 rounded-3xl">
                <h3 className="font-serif text-2xl font-light text-white mb-8">Not Included</h3>
                <ul className="space-y-6">
                  {tour.excluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-white/70 font-light">
                      <X size={20} className="text-white/30 shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <span className="text-white/50 font-light tracking-[0.2em] uppercase text-xs mb-6 block">
                The Journey
              </span>
              <h2 className="font-serif text-4xl font-light text-white mb-12">Itinerary</h2>
              <div className="space-y-12 relative before:absolute before:inset-0 before:ml-[19px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                {tour.itinerary.map((step, i) => (
                  <div key={i} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#0a0a0a] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 mt-2">
                      <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                      <div className="flex flex-col mb-4">
                        <span className="text-white/50 text-xs font-light tracking-widest uppercase mb-2">{step.time}</span>
                        <h4 className="font-serif text-2xl font-light text-white">{step.title}</h4>
                      </div>
                      <p className="text-white/60 font-light leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar / Booking Widget */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32 bg-white/[0.02] backdrop-blur-xl border border-white/5 p-10 rounded-3xl">
              <div className="mb-8">
                <span className="text-white/50 font-light tracking-widest uppercase text-xs block mb-2">
                  {tour.isCustomQuote ? "Pricing" : "Price per person"}
                </span>
                <div className="text-5xl font-serif font-light text-white">{tour.price}</div>
              </div>

              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 text-white/70 font-light pb-6 border-b border-white/5">
                  <Calendar size={20} strokeWidth={1.5} className="text-white/50" />
                  <span>{tour.availability || "Available Daily"}</span>
                </div>
                <div className="flex items-center gap-4 text-white/70 font-light pb-6 border-b border-white/5">
                  <Users size={20} strokeWidth={1.5} className="text-white/50" />
                  <span>
                    {tour.groupSizeMin && tour.groupSizeMax 
                      ? `Min: ${tour.groupSizeMin}, Max: ${tour.groupSizeMax} persons` 
                      : tour.groupSizeMax 
                        ? `Max ${tour.groupSizeMax} people per group`
                        : "Small group experience"}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-white/70 font-light pb-6 border-b border-white/5">
                  <Clock size={20} strokeWidth={1.5} className="text-white/50" />
                  <span>{tour.cancellationPolicy || "Free cancellation up to 48h"}</span>
                </div>
              </div>

              <Button asChild className="w-full h-14 rounded-full bg-white text-black hover:bg-white/90 transition-colors font-light tracking-widest uppercase text-xs mb-4">
                <Link href={tour.isCustomQuote ? `/contact?tour=${tour.id}` : `/book?tour=${tour.id}`}>
                  {tour.isCustomQuote ? "Request a Quote" : "Book Now"}
                </Link>
              </Button>
              
              {!tour.isCustomQuote && (
                <Button asChild variant="outline" className="w-full h-14 rounded-full bg-transparent border-white/20 text-white hover:bg-white hover:text-black transition-colors font-light tracking-widest uppercase text-xs">
                  <Link href="/contact">
                    Ask a Question
                  </Link>
                </Button>
              )}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
