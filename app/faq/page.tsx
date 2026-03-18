import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { FAQ } from "@/components/home/FAQ"

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
