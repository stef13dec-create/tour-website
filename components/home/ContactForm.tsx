"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  return (
    <section className="relative py-32 px-6 md:px-12 overflow-hidden bg-[#0a0a0a]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Bucegi_Mountains_-_Caraiman_Peak.jpg/1280px-Bucegi_Mountains_-_Caraiman_Peak.jpg"
          alt="Moody landscape of the Carpathian Mountains"
          fill
          className="object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Form Area */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-black/20 backdrop-blur-xl border border-white/5 p-8 md:p-16 rounded-3xl"
          >
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 border border-white/20 text-white rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-3xl font-light text-white mb-4">Message Sent</h3>
                <p className="text-white/50 font-light">Thank you for reaching out. We'll get back to you soon.</p>
                <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-12 rounded-full px-8 h-12 bg-transparent border-white/20 text-white hover:bg-white hover:text-black transition-colors font-light">
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div>
                  <span className="text-white/50 font-light tracking-[0.2em] uppercase text-xs mb-6 block">
                    Inquire
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight mb-4">
                    Want to join us,
                  </h2>
                  <h2 className="font-serif text-4xl md:text-5xl font-light text-white/50 leading-tight">
                    but still have questions?
                  </h2>
                </div>

                <div className="space-y-8">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder:text-transparent focus:outline-none focus:border-white transition-all peer"
                      placeholder="Your name"
                    />
                    <label htmlFor="name" className="absolute left-0 top-4 text-white/50 font-light transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white/80 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-white/80 pointer-events-none">
                      Your name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder:text-transparent focus:outline-none focus:border-white transition-all peer"
                      placeholder="Phone number"
                    />
                    <label htmlFor="phone" className="absolute left-0 top-4 text-white/50 font-light transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white/80 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-white/80 pointer-events-none">
                      Phone number
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="comment"
                      className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder:text-transparent focus:outline-none focus:border-white transition-all peer"
                      placeholder="Comment"
                    />
                    <label htmlFor="comment" className="absolute left-0 top-4 text-white/50 font-light transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white/80 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-white/80 pointer-events-none">
                      Comment
                    </label>
                  </div>
                </div>
                
                <Button type="submit" className="w-full h-14 text-sm tracking-widest uppercase rounded-full bg-white text-black hover:bg-white/90 transition-colors mt-8 font-medium" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Request"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Empty space for the right side to let the background show */}
        <div className="w-full lg:w-1/2 hidden lg:block"></div>
      </div>
    </section>
  )
}
