import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"

export const metadata: Metadata = {
  title: 'Reviews & Testimonials | Discover Romania with Corina',
  description: 'Read what travellers from around the world say about their tours with Corina. Hundreds of 5-star reviews from Bucharest, Transylvania, and beyond.',
}
import { Footer } from "@/components/layout/Footer"
import { Testimonials } from "@/components/home/Testimonials"

export default function ReviewsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050505]">
      <Navbar />
      <div className="pt-24">
        <Testimonials />
      </div>
      <Footer />
    </main>
  )
}
