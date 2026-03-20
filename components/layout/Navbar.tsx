"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tours" },
  { href: "/about", label: "About Corina" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    let rafId: number
    const handleScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50)
      })
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[0.16,1,0.3,1] px-6 md:px-12 py-6",
        isScrolled ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between md:justify-between relative">
        <Link href="/" className="flex items-center gap-2 group -ml-4">
          <Image
            src="/logo.png"
            alt="Bucharest Tours by Corina"
            width={360}
            height={120}
            className="h-12 w-auto md:h-24 transition-opacity group-hover:opacity-70"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-xs tracking-[0.2em] uppercase font-medium transition-colors hover:text-white",
                pathname === link.href ? "text-white" : "text-white/80"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button 
            asChild 
            className="ml-4 rounded-full px-8 h-10 bg-[#FCD116] text-black hover:bg-[#FCD116]/90 transition-all font-bold text-xs tracking-widest uppercase shadow-[0_0_15px_rgba(252,209,22,0.3)] hover:scale-105 active:scale-95"
          >
            <Link href="/tours">Book Tour</Link>
          </Button>
        </nav>

        {/* Mobile: Book Tour + Menu Toggle */}
        <div className="md:hidden absolute right-0 flex items-center gap-3">
          <Link
            href="/tours"
            className="rounded-full px-5 py-2 bg-[#FCD116] text-black font-bold text-[10px] tracking-widest uppercase shadow-[0_0_12px_rgba(252,209,22,0.3)]"
          >
            Book Tour
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            className="text-white/70 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 bg-[#050505]/95 backdrop-blur-2xl border-b border-white/5 p-8 flex flex-col gap-8 md:hidden shadow-2xl h-screen"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-xl uppercase font-medium tracking-widest transition-colors hover:text-white",
                  pathname === link.href ? "text-white" : "text-white/80"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full mt-8 rounded-full h-14 bg-[#FCD116] text-black hover:bg-[#FCD116]/90 font-bold text-sm tracking-widest uppercase shadow-lg shadow-black/20">
              <Link href="/tours" onClick={() => setIsMobileMenuOpen(false)}>Book Tour</Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
