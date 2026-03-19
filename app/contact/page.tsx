import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ContactForm } from "@/components/home/ContactForm"

export const metadata: Metadata = {
  title: 'Contact | Discover Romania with Corina',
  description: 'Get in touch with Corina to plan your private tour of Bucharest or Romania. Quick response, personalised itineraries, and expert local knowledge.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050505]">
      <Navbar />
      <div className="pt-24">
        <ContactForm />
      </div>
      <Footer />
    </main>
  )
}
