# Day Trips Teaser — Homepage Section Design

**Date:** 2026-03-19
**Status:** Approved
**Component:** `components/home/DayTripsTeaser.tsx`

---

## Goal

Replace the full 5-card `OutsideBucharest` grid on the homepage with a compact, cinematic teaser section. The teaser creates emotional desire and drives clicks to the `/tours` page. The `OutsideBucharest` component is kept as-is for future use.

---

## Layout — Option A: Full-Width Cinematic Banner

### Structure (top to bottom, all centered, vertically centered in section)

1. **Gold label** — `BEYOND THE CAPITAL` — `text-xs uppercase tracking-[0.2em] text-white/50`
2. **Serif headline** — `Romania Awaits Beyond the City Walls` — `font-serif text-6xl md:text-8xl font-light text-white`
3. **Destination pills** — 3 tags: `Transylvania`, `Danube Delta`, `Black Sea` — `flex flex-wrap justify-center gap-3` (wraps naturally on mobile)
4. **CTA button** — `Discover Day Trips →` — intentionally white-bordered (not gold) to stand out from the gold pills above it

### Visual Specs

| Property | Value |
|----------|-------|
| Section height | `min-h-[70vh]` |
| Background image | `/tours/transylvania.jpg` (user-supplied — see Image Dependency) |
| Image fallback | `bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]` applied to section wrapper — renders correctly if image is missing |
| Image overlay | `absolute inset-0 bg-black/55` + `bg-gradient-to-t from-black/80 via-black/30 to-transparent` |
| Headline | `font-serif text-6xl md:text-8xl font-light text-white` |
| Label | `text-xs tracking-[0.2em] uppercase text-white/50` |
| Pills | `border border-[#FCD116]/40 backdrop-blur-xl text-white text-[9px] tracking-[0.2em] uppercase rounded-full px-5 py-2` |
| CTA | `rounded-full border border-white/30 px-10 py-4 text-white hover:bg-white hover:text-black transition-colors duration-500 font-light tracking-widest uppercase text-xs` |
| CTA link | `/tours#day-trips` |
| Animation | `import { motion } from "motion/react"` — staggered fade-up: label (0s) → headline (0.15s) → pills (0.3s) → button (0.45s) |
| Client directive | `"use client"` at top of file — required for Framer Motion |

---

## Placement in Homepage

```
Hero
FeaturedTours        ← 3 Bucharest city tours (unchanged)
DayTripsTeaser       ← NEW (replaces OutsideBucharest on homepage)
WhyCorina
Timeline
Testimonials
FAQ
ContactForm
Footer
```

---

## Files Affected

| File | Change |
|------|--------|
| `components/home/DayTripsTeaser.tsx` | Create new component |
| `app/page.tsx` | Replace `OutsideBucharest` import + usage with `DayTripsTeaser` |
| `app/tours/page.tsx` | Add `id="day-trips"` to the existing tours grid `<section>` wrapper — enables the `/tours#day-trips` deep-link. No data changes. |

### Tours Page Note
The existing `allTours` grid in `app/tours/page.tsx` (6 tours, mix of city + day trips) is kept as-is. Only the `id="day-trips"` attribute is added to its section element so the CTA anchor link works correctly.

---

## Image Dependency

**Open blocker:** `/public/tours/transylvania.jpg` does not currently exist in the repo. The section renders the fallback gradient until the image is supplied — no broken layout. User must add this image for the cinematic effect.
