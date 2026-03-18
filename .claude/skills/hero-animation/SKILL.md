---
name: hero-animation
description: Redesign the Hero.tsx section into a centered 3D fan/carousel layout inspired by a travel website reference, replacing the current bottom-cards layout with a full-screen interactive 3D card carousel with dark background and navigation arrows
allowed-tools: Read, Edit, Write, Bash, Glob
---

Redesign the hero section at `components/home/Hero.tsx` to match this reference design:

## Target Design
A full-screen hero with a **centered 3D card carousel/fan layout**:
- Dark background (near-black) with a blurred/dimmed full-screen landscape image behind everything
- 5 destination cards arranged in a **3D fan perspective**: center card is large and faces forward, cards on either side are progressively rotated and scaled down in 3D (like a deck of cards fanned out)
- The **active/center card** shows a full destination image with bold white title text and a subtitle overlaid
- Left and right **navigation arrows** to cycle through cards
- When navigating, cards animate smoothly — the active card comes forward, adjacent cards rotate to their angled positions
- Keep the existing `heroCards` data array (images + titles) but adapt it for the carousel
- Retain the social icons (Instagram, Facebook, Send) on the right side
- Retain the "Book Tour" CTA button (bottom right or center below carousel)
- Use `framer-motion` (already installed as `motion/react`) for all animations

## Implementation Steps

1. **Read** `components/home/Hero.tsx` to understand the current structure
2. **Rewrite** the Hero component with:
   - `useState` for `activeIndex` (current center card, default 0)
   - A `getCardStyle(index)` function that returns transform styles based on offset from active:
     - offset 0 (center): `rotateY(0deg) translateZ(0px) scale(1)` — fully visible
     - offset ±1: `rotateY(±45deg) translateZ(-100px) scale(0.85)` — angled side cards
     - offset ±2: `rotateY(±65deg) translateZ(-200px) scale(0.7)` — far side cards
   - Wrap the card container in a `perspective` div (e.g., `perspective: 1200px`)
   - Cards use `transform-style: preserve-3d`
   - Use `motion.div` with `animate` prop driven by `getCardStyle` for smooth transitions
   - Left/right arrow buttons (absolute positioned, vertically centered) to decrement/increment `activeIndex`
   - Wrap around (circular navigation)
3. **Card appearance**:
   - Aspect ratio approximately 2:3 (portrait cards like the reference)
   - Rounded corners (`rounded-2xl`)
   - Center card: large (~320px wide on desktop), shows full image, bold destination title + subtitle at bottom
   - Side cards: slightly darker overlay to de-emphasize
   - Subtle border (`border border-white/10`)
4. **Background**: Keep the existing Peles Castle background image with dark gradient overlay. Add extra `backdrop-blur` or darken overlay to push cards forward visually.
5. **Hero text**: Move the "Romania" large text or replace with the active card's destination name displayed as large centered text above or behind the carousel
6. Keep `"use client"` directive, all existing imports, and don't remove the social icons or Book Tour button

## Notes
- The reference GIF shows a "Voyage" travel site with destinations like Machu Picchu — our site is Romania-themed but the layout pattern is identical
- Cards should feel like physical cards in a hand — the fan/3D perspective is the key visual effect
- The animation transition when switching cards should be smooth (~0.5s ease)
- Use `whileHover` on side cards to slightly pull them forward as a hover affordance
- On mobile, simplify to a flat horizontal scroll or show only 3 cards (center + 1 each side)

If the user provides additional arguments via , apply those as modifications or constraints on top of this base redesign.
