import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShieldCheck, Heart, Map, Coffee, Star, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050505]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <span className="text-white/50 font-light tracking-[0.2em] uppercase text-xs mb-6 block">
              Meet Your Guide
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8">
              Hi, I'm Corina.
            </h1>
            <p className="text-xl text-white/60 font-light leading-relaxed mb-12">
              I am a licensed tour guide born and raised in Romania. My passion is sharing the authentic beauty, untold stories, and rich flavors of my country with travelers from all over the world.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full">
                <ShieldCheck size={16} className="text-white/70" />
                <span className="text-white/80 text-xs font-light tracking-wide uppercase">Licensed Guide</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full">
                <Star size={16} className="text-white/70" />
                <span className="text-white/80 text-xs font-light tracking-wide uppercase">5.0 Rating</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full">
                <Award size={16} className="text-white/70" />
                <span className="text-white/80 text-xs font-light tracking-wide uppercase">10+ Years</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/Corina picture.JPG"
                alt="Corina, licensed tour guide in Romania"
                fill
                className="object-cover"
                priority
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white mb-12 text-center">My Story</h2>
          <div className="space-y-8 text-white/60 text-lg font-light leading-relaxed">
            <p>
              Growing up in Romania, I was always fascinated by the contrast between our vibrant cities, the untouched nature of the Carpathian Mountains, and the timeless traditions of our villages. After studying history and tourism, I realized my true calling was to be an ambassador for my country.
            </p>
            <p>
              For over a decade, I've been guiding international guests through the winding streets of Bucharest's Old Town, the dramatic landscapes of Transylvania, and the peaceful waterways of the Danube Delta.
            </p>
            <p>
              My approach to guiding is personal. I don't just recite dates and facts; I tell the stories of the people who lived here. I want you to taste the real Romanian cuisine—not just the tourist menus—and to understand the complex, fascinating history that makes Romania unique.
            </p>
            <p>
              Whether you're traveling solo, as a couple, or with family, my goal is to make you feel like you're exploring Romania with a knowledgeable local friend.
            </p>
          </div>
          
          <div className="mt-20 text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-light text-white mb-8">Ready to explore together?</h3>
            <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90 text-sm tracking-widest uppercase font-medium h-14 px-10 transition-all duration-300">
              <Link href="/tours">View My Tours</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
