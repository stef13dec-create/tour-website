"use client"

import * as React from "react"
import { motion } from "motion/react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do you offer private tours?",
    answer: "Yes, all our tours can be customized as private experiences for you, your family, or your group. This allows for a flexible itinerary and a more personalized experience."
  },
  {
    question: "What languages are the tours conducted in?",
    answer: "Tours are primarily conducted in English. However, depending on availability, we can also accommodate requests for tours in other languages such as Spanish or French. Please contact us in advance to confirm."
  },
  {
    question: "Are entrance fees included in the tour price?",
    answer: "It depends on the specific tour. Most of our full-day tours include entrance fees to major attractions like Peles Castle or Bran Castle. Please check the 'What's Included' section on each tour page for detailed information."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We offer a full refund for cancellations made at least 48 hours before the scheduled tour departure time. Cancellations made within 48 hours are non-refundable."
  },
  {
    question: "Do you provide hotel pickup and drop-off?",
    answer: "Yes, for all our day trips starting from Bucharest, we provide complimentary pickup and drop-off at your hotel or a centrally located meeting point."
  }
]

export function FAQ() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/50 font-light tracking-[0.2em] uppercase text-xs mb-6 block"
          >
            FAQ
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl md:text-6xl font-light text-white leading-tight"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10 last:border-0">
                <AccordionTrigger className="text-left font-serif text-2xl md:text-3xl font-light text-white hover:text-white/70 py-8 transition-colors hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/50 font-light text-lg leading-relaxed pb-8 pr-12">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
