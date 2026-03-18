import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Testimonials } from "@/components/home/Testimonials"

export default function ReviewsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-zinc-950">
      <Navbar />
      <div className="pt-24">
        <Testimonials />
      </div>
      <Footer />
    </main>
  )
}
