import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Discover Romania with Corina",
  description: "Privacy policy for Discover Romania with Corina — how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050505]">
      <Navbar />

      <article className="pt-40 pb-24 px-6 md:px-12 flex-grow">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/50 font-light tracking-[0.2em] uppercase text-xs mb-6">Legal</p>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-white mb-16 leading-tight">
            Privacy Policy
          </h1>

          <div className="space-y-12 text-white/70 font-light leading-relaxed">
            <section>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-4">Last updated: January 2025</p>
              <p>
                Discover Romania with Corina ("we", "us", or "our") is committed to protecting your personal
                information. This Privacy Policy explains how we collect, use, and safeguard the data you
                provide when using our website and booking our services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-white mb-4">Information We Collect</h2>
              <p className="mb-4">We collect information you provide directly to us, including:</p>
              <ul className="list-disc list-inside space-y-2 text-white/60">
                <li>Name, email address, and phone number when submitting an inquiry or booking</li>
                <li>Travel preferences and special requests included in your messages</li>
                <li>Payment information processed securely through our payment provider</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-white mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use your information solely to:</p>
              <ul className="list-disc list-inside space-y-2 text-white/60">
                <li>Respond to your inquiries and process tour bookings</li>
                <li>Send booking confirmations and pre-tour information</li>
                <li>Improve our services and website experience</li>
              </ul>
              <p className="mt-4">We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-white mb-4">Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfil the purpose for which
                it was collected and to comply with applicable legal obligations.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-white mb-4">Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-white/60">
                <li>Access, correct, or delete your personal data</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with the relevant data protection authority</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-white mb-4">Contact</h2>
              <p>
                For any privacy-related questions, please contact us at{" "}
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
