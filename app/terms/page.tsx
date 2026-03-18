import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Discover Romania with Corina",
  description: "Terms and conditions for booking tours with Discover Romania with Corina.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050505]">
      <Navbar />

      <article className="pt-40 pb-24 px-6 md:px-12 flex-grow">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/50 font-light tracking-[0.2em] uppercase text-xs mb-6">Legal</p>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-white mb-16 leading-tight">
            Terms of Service
          </h1>

          <div className="space-y-12 text-white/70 font-light leading-relaxed">
            <section>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-4">Last updated: January 2025</p>
              <p>
                By booking a tour with Discover Romania with Corina ("we", "us", or "our"), you agree to
                the following terms and conditions. Please read them carefully before completing a reservation.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-white mb-4">Booking & Payment</h2>
              <ul className="list-disc list-inside space-y-2 text-white/60">
                <li>A deposit is required to confirm your reservation; the balance is due 14 days before the tour date.</li>
                <li>Prices are quoted in EUR and include all items listed under "What's Included" on each tour page.</li>
                <li>Entrance fees, meals, and personal expenses are not included unless explicitly stated.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-white mb-4">Cancellation Policy</h2>
              <ul className="list-disc list-inside space-y-2 text-white/60">
                <li><strong className="text-white/80">More than 48 hours before:</strong> Full refund of any payments made.</li>
                <li><strong className="text-white/80">24–48 hours before:</strong> 50% refund.</li>
                <li><strong className="text-white/80">Less than 24 hours before:</strong> No refund.</li>
              </ul>
              <p className="mt-4">
                We reserve the right to cancel or modify a tour due to unforeseen circumstances (severe weather,
                safety concerns, etc.). In such cases, you will receive a full refund or the option to reschedule.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-white mb-4">Conduct & Responsibility</h2>
              <p className="mb-4">
                Participants are expected to behave respectfully towards local communities, sites, and fellow
                travellers. We reserve the right to remove any participant whose behaviour is deemed disruptive,
                without refund.
              </p>
              <p>
                While every care is taken for your safety, Discover Romania with Corina is not liable for loss,
                injury, or damage arising from circumstances beyond our reasonable control.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-white mb-4">Intellectual Property</h2>
              <p>
                All content on this website — text, images, and design — is the property of Discover Romania
                with Corina and may not be reproduced without written permission.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-white mb-4">Governing Law</h2>
              <p>
                These terms are governed by the laws of Romania. Any disputes shall be subject to the exclusive
                jurisdiction of the courts of Bucharest.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-white mb-4">Contact</h2>
              <p>
                Questions about these terms? Contact us at{" "}
                <a href="mailto:hello@discoverromania.com" className="text-white underline underline-offset-4 hover:text-white/70 transition-colors">
                  hello@discoverromania.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
