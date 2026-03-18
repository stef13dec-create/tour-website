import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/home/Hero"
import { FeaturedTours } from "@/components/home/FeaturedTours"
import { WhyCorina } from "@/components/home/WhyCorina"
import { Timeline } from "@/components/home/Timeline"
import { Testimonials } from "@/components/home/Testimonials"
import { FAQ } from "@/components/home/FAQ"
import { ContactForm } from "@/components/home/ContactForm"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <FeaturedTours />
      <WhyCorina />
      <Timeline />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}
