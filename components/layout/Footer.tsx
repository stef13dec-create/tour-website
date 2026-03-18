import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#050505] pt-32 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="mb-6">
            <Image
              src="/logo.png"
              alt="Bucharest Tours by Corina"
              width={440}
              height={148}
              className="h-24 w-auto md:h-28"
            />
          </div>
          <p className="text-white/50 max-w-md mb-10 font-light leading-relaxed">
            Premium guided tours in Romania. Discover the authentic beauty, rich history, and vibrant culture of Bucharest, Transylvania, and beyond with a licensed local expert.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-black hover:border-white transition-all">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-black hover:border-white transition-all">
              <Facebook size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white/50 font-light tracking-[0.2em] uppercase text-xs mb-8">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link href="/tours" className="text-white/70 font-light hover:text-white transition-colors">All Tours</Link></li>
            <li><Link href="/about" className="text-white/70 font-light hover:text-white transition-colors">About Corina</Link></li>
            <li><Link href="/reviews" className="text-white/70 font-light hover:text-white transition-colors">Testimonials</Link></li>
            <li><Link href="/faq" className="text-white/70 font-light hover:text-white transition-colors">FAQ</Link></li>
            <li><Link href="/blog" className="text-white/70 font-light hover:text-white transition-colors">Travel Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white/50 font-light tracking-[0.2em] uppercase text-xs mb-8">Contact</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4 text-white/70 font-light">
              <MapPin size={20} className="text-white/50 shrink-0 mt-1" strokeWidth={1.5} />
              <span className="leading-relaxed">Bucharest, Romania<br />Available for nationwide tours</span>
            </li>
            <li className="flex items-center gap-4 text-white/70 font-light">
              <Phone size={20} className="text-white/50 shrink-0" strokeWidth={1.5} />
              <a href="tel:+40123456789" className="hover:text-white transition-colors">+40 123 456 789</a>
            </li>
            <li className="flex items-center gap-4 text-white/70 font-light">
              <Mail size={20} className="text-white/50 shrink-0" strokeWidth={1.5} />
              <a href="mailto:hello@discoverromania.com" className="hover:text-white transition-colors">hello@discoverromania.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/30 font-light tracking-wide">
        <p>&copy; {new Date().getFullYear()} Discover Romania with Corina. All rights reserved.</p>
        <div className="flex items-center gap-8">
          <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
