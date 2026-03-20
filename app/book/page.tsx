"use client"

import * as React from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Globe, MapPin, Coffee, MessageSquare, Check } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { allTours } from "@/lib/tours"

function BookingContent() {
  const searchParams = useSearchParams()
  const initialTourId = searchParams.get("tour") || allTours[0].id

  const [selectedTourId, setSelectedTourId] = React.useState(initialTourId)
  const [guests, setGuests] = React.useState(2) // Default to 2 Adults
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  const selectedTour = allTours.find(t => t.id === selectedTourId)
  const basePrice = selectedTour ? parseInt(selectedTour.price.replace(/\D/g, '')) || 0 : 0
  const estimatedTotal = selectedTour ? `€${basePrice * guests}` : "On Request"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 2000)
  }

  return (
    <section className="pt-40 pb-24 px-6 md:px-12 flex-grow">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-white/50 font-light tracking-[0.2em] uppercase text-xs mb-6 block">
            Reservation
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">Complete Your Booking</h1>
          <p className="text-white/60 font-light text-lg">Secure your spot for an unforgettable Romanian experience.</p>
        </div>

        {isSuccess ? (
          <div className="bg-white/5 border border-white/10 p-12 rounded-3xl text-center max-w-2xl mx-auto backdrop-blur-sm">
            <div className="w-20 h-20 bg-white/10 text-white rounded-full flex items-center justify-center mx-auto mb-8 border border-white/20">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-serif text-3xl font-light text-white mb-4">Booking Request Received</h2>
            <p className="text-white/60 font-light text-lg mb-8 leading-relaxed">
              Thank you for choosing to discover Romania with me. I have received your request and will confirm availability within 24 hours.
            </p>
            <div className="bg-black/40 border border-white/5 rounded-2xl p-6 text-left mb-10">
              <p className="text-sm text-white/50 font-light mb-2">Booking Reference: <span className="text-white font-mono tracking-wider">#RO-{Math.floor(1000 + Math.random() * 9000)}</span></p>
              <p className="text-sm text-white/50 font-light">We've sent a summary to your email address.</p>
            </div>
            <Button asChild className="w-full sm:w-auto rounded-full bg-white text-black hover:bg-white/90 text-sm tracking-widest uppercase font-medium h-14 px-10">
              <a href="/">Return to Home</a>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Form Area */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Step 1: Tour Details */}
                <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-10 rounded-3xl">
                  <h3 className="font-serif text-2xl font-light text-white mb-8 flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full border border-white/20 text-white flex items-center justify-center text-xs font-light tracking-widest">01</span>
                    Tour Details
                  </h3>
                  
                  <div className="space-y-8">
                    <div>
                      <label className="block text-xs font-light tracking-widest uppercase text-white/50 mb-3">Select Tour</label>
                      <select 
                        value={selectedTourId}
                        onChange={(e) => setSelectedTourId(e.target.value)}
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white font-light focus:outline-none focus:border-white/40 transition-all appearance-none"
                      >
                        {allTours.map(t => (
                          <option key={t.id} value={t.id}>{t.title}</option>
                        ))}
                        <option value="custom">Custom Private Tour</option>
                      </select>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-light tracking-widest uppercase text-white/50 mb-3 flex items-center gap-2"><Calendar size={14} /> Date</label>
                        <input type="date" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white font-light focus:outline-none focus:border-white/40 transition-all [color-scheme:dark]" required />
                      </div>
                      <div>
                        <label className="block text-xs font-light tracking-widest uppercase text-white/50 mb-3 flex items-center gap-2"><Users size={14} /> Guests</label>
                        <select 
                          value={guests}
                          onChange={(e) => setGuests(parseInt(e.target.value))}
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white font-light focus:outline-none focus:border-white/40 transition-all appearance-none"
                        >
                          <option value={1}>1 Person</option>
                          <option value={2}>2 People</option>
                          <option value={3}>3 People</option>
                          <option value={4}>4 People</option>
                          <option value={5}>5 People</option>
                          <option value={6}>6+ People (Group)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-light tracking-widest uppercase text-white/50 mb-3 flex items-center gap-2"><Globe size={14} /> Language</label>
                        <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white font-light focus:outline-none focus:border-white/40 transition-all appearance-none">
                          <option>English</option>
                          <option>Spanish (On Request)</option>
                          <option>French (On Request)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-light tracking-widest uppercase text-white/50 mb-3 flex items-center gap-2"><MapPin size={14} /> Pickup Location</label>
                        <input type="text" placeholder="Hotel name or address" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white font-light placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-all" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2: Personal Info */}
                <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-10 rounded-3xl">
                  <h3 className="font-serif text-2xl font-light text-white mb-8 flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full border border-white/20 text-white flex items-center justify-center text-xs font-light tracking-widest">02</span>
                    Your Details
                  </h3>
                  
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-light tracking-widest uppercase text-white/50 mb-3">First Name</label>
                        <input type="text" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white font-light focus:outline-none focus:border-white/40 transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs font-light tracking-widest uppercase text-white/50 mb-3">Last Name</label>
                        <input type="text" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white font-light focus:outline-none focus:border-white/40 transition-all" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-light tracking-widest uppercase text-white/50 mb-3">Email</label>
                        <input type="email" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white font-light focus:outline-none focus:border-white/40 transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs font-light tracking-widest uppercase text-white/50 mb-3">Phone (WhatsApp preferred)</label>
                        <input type="tel" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white font-light focus:outline-none focus:border-white/40 transition-all" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3: Preferences */}
                <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-10 rounded-3xl">
                  <h3 className="font-serif text-2xl font-light text-white mb-8 flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full border border-white/20 text-white flex items-center justify-center text-xs font-light tracking-widest">03</span>
                    Preferences
                  </h3>
                  
                  <div className="space-y-8">
                    <div>
                      <label className="block text-xs font-light tracking-widest uppercase text-white/50 mb-3 flex items-center gap-2"><Coffee size={14} /> Dietary Requirements</label>
                      <input type="text" placeholder="e.g., Vegetarian, Gluten-free, None" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white font-light placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-light tracking-widest uppercase text-white/50 mb-3 flex items-center gap-2"><MessageSquare size={14} /> Special Requests or Notes</label>
                      <textarea rows={3} placeholder="Anything else we should know?" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white font-light placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-all resize-none" />
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full h-16 text-sm tracking-widest uppercase rounded-full bg-white text-black hover:bg-white/90 transition-colors mt-8 font-medium" disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Request Booking"}
                </Button>
                <p className="text-center text-white/40 font-light text-sm mt-6">
                  No payment required now. We will confirm availability first.
                </p>
              </form>
            </div>

            {/* Sidebar Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl">
                <h3 className="font-serif text-xl font-light text-white mb-8 pb-6 border-b border-white/10">Booking Summary</h3>
                
                <div className="space-y-6 mb-10">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50 font-light">Tour</span>
                    <span className="text-white font-light text-right max-w-[150px]">{selectedTour ? selectedTour.title : "Custom Private Tour"}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50 font-light">Guests</span>
                    <span className="text-white font-light">{guests} {guests === 1 ? 'Person' : 'People'}</span>
                  </div>
                  <div className="flex justify-between text-sm pb-6 border-b border-white/10">
                    <span className="text-white/50 font-light">Type</span>
                    <span className="text-white font-light">Private</span>
                  </div>
                  <div className="flex justify-between items-end pt-2">
                    <span className="text-white/70 font-light">Estimated Total</span>
                    <span className="text-3xl font-serif font-light text-white">{estimatedTotal}</span>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h4 className="text-white font-light text-sm mb-4">Why book directly?</h4>
                  <ul className="text-white/50 font-light text-sm space-y-3">
                    <li className="flex items-center gap-3"><Check size={14} className="text-white/70" /> Best price guarantee</li>
                    <li className="flex items-center gap-3"><Check size={14} className="text-white/70" /> Direct communication</li>
                    <li className="flex items-center gap-3"><Check size={14} className="text-white/70" /> Flexible cancellation</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </section>
  )
}

export default function BookingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050505]">
      <Navbar />
      <React.Suspense fallback={<div className="flex-grow pt-40 pb-24 px-6 text-center text-white/50">Loading booking form...</div>}>
        <BookingContent />
      </React.Suspense>
      <Footer />
    </main>
  )
}
