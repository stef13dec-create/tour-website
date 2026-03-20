"use client"

import { useEffect, useState } from "react"

export default function BookingReference() {
  const [ref, setRef] = useState<string>("")

  useEffect(() => {
    setRef(`#RO-${Math.floor(1000 + Math.random() * 9000)}`)
  }, [])

  return <span className="text-white font-mono tracking-wider">{ref || "—"}</span>
}
