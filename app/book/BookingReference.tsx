"use client"

import { useState } from "react"

export default function BookingReference() {
  const [ref] = useState<string>(() => `#RO-${Math.floor(1000 + Math.random() * 9000)}`)

  return <span className="text-white font-mono tracking-wider">{ref}</span>
}
