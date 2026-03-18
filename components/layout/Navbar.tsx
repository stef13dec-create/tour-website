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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[0.16,1,0.3,1] px-6 md:px-12 py-6",
        isScrolled ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between relative">
        <Link href="/" className="flex items-center gap-2 group md:translate-x-0">
          <Image
            src="/logo.png"
            alt="Bucharest Tours by Corina"
            width={360}
            height={120}
            className="h-20 w-auto md:h-24 transition-opacity group-hover:opacity-70"
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
          <Button asChild variant="outline" className="ml-4 rounded-full px-8 h-10 bg-transparent border-white/40 text-white hover:bg-white hover:text-black transition-colors font-medium text-xs tracking-widest uppercase">
            <Link href="/book">Book Tour</Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden absolute right-0 text-white/70 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMobileMenuOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
        </button>
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
            <Button asChild className="w-full mt-8 rounded-full h-14 bg-white text-black hover:bg-white/90 font-medium text-sm tracking-widest uppercase">
              <Link href="/book" onClick={() => setIsMobileMenuOpen(false)}>Book Tour</Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
