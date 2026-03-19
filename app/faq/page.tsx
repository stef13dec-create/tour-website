import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { FAQ } from "@/components/home/FAQ"

export const metadata: Metadata = {
  title: 'FAQ | Discover Romania with Corina',
  description: 'Frequently asked questions about booking tours in Romania with Corina — group sizes, cancellation policy, languages, pickup logistics, and more.',
}

export default function FAQPage() {
  return (
    <main className="min-h-screen flex flex-col bg-zinc-950">
      <Navbar />
      <div className="pt-24">
        <FAQ />
      </div>
      <Footer />
    </main>
  )
}
