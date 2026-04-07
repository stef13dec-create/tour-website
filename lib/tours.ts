import { getAssetPath } from "./utils"

export interface Tour {
  id: string
  title: string
  label?: string
  duration: string
  location: string
  image: string
  price: string
  priceAmount: number
  rating: number
  reviews: number
  tags: string[]
  category: "inside" | "outside"
  featured?: boolean
  overview?: string
  included?: string[]
  excluded?: string[]
  availability?: string
  groupSizeMin?: number
  groupSizeMax?: number
  cancellationPolicy?: string
  isCustomQuote?: boolean
  itinerary?: { time: string; title: string; desc: string }[]
}

export const allTours: Tour[] = [
  // Inside Bucharest
  {
    id: "belle-epoque-elegance",
    title: "Belle Époque Elegance",
    label: "BELLE ÉPOQUE",
    duration: "Half Day (4h)",
    location: "Calea Victoriei & Historic Center",
    image: getAssetPath("/tours/little-paris.png"),
    price: "From €65",
    priceAmount: 65,
    rating: 5.0,
    reviews: 142,
    tags: ["History", "Architecture", "Premium"],
    category: "inside",
    featured: true,
    overview: "Walk the grand boulevards of Bucharest's Belle Époque era — Calea Victoriei, the Romanian Athenaeum, and the city's finest Art Nouveau facades. Discover why Bucharest was once called 'The Little Paris of the East'.",
    included: [
      "Authorized guide (English / Spanish / French)",
      "Hotel pick-up & drop-off (if centrally located)",
      "4 hrs of walking guided tour",
      "Traditional Luca Pastry tasting",
      "Bottled water"
    ],
    excluded: [
      "Entrance fees",
      "Lunch",
      "Personal expenses"
    ],
    availability: "Saturday – Sunday",
    groupSizeMin: 2,
    groupSizeMax: 8,
    cancellationPolicy: "Free cancellation up to 48 hours before"
  },
  {
    id: "communist-shadows",
    title: "Shadows of the Past",
    label: "COMMUNISM TOUR",
    duration: "Half Day (5h)",
    location: "Palace of Parliament & Revolution Square",
    image: getAssetPath("/tours/communist.png"),
    price: "From €55",
    priceAmount: 55,
    rating: 4.9,
    reviews: 118,
    tags: ["Communism", "History", "Essential"],
    category: "inside",
    featured: true,
    overview: "Explore the monumental legacy of communism in Bucharest — the Palace of Parliament, Revolution Square, and the haunting story of Ceaușescu's regime. Understand how 40 years of communism reshaped the city's face and soul.",
    included: [
      "Authorized guide (English / Spanish / French)",
      "Hotel pick-up & drop-off (if centrally located)",
      "5 hrs of walking guided tour",
      "Traditional Luca Pastry tasting",
      "Bottled water",
      "Skip-the-line access to Palace of Parliament"
    ],
    excluded: [
      "Entrance fees",
      "Lunch",
      "Personal expenses"
    ],
    availability: "Saturday – Sunday",
    groupSizeMin: 2,
    groupSizeMax: 8,
    cancellationPolicy: "Free cancellation up to 48 hours before"
  },
  {
    id: "new-wave-kitchen",
    title: "The New Wave Kitchen",
    label: "FOOD & WINE",
    duration: "Evening (4h)",
    location: "Boutique Restaurants & Wine Bars",
    image: getAssetPath("/tours/contemporary-food.png"),
    price: "From €95",
    priceAmount: 95,
    rating: 5.0,
    reviews: 74,
    tags: ["Gastronomy", "Modern", "Luxury"],
    category: "inside",
    featured: true,
    overview: "An evening tour through Bucharest's most exciting contemporary restaurants and wine bars. Experience the 'New Wave' of Romanian gastronomy, where traditional ingredients meet modern techniques and world-class wines.",
    included: [
      "Authorized guide (English / Spanish / French)",
      "Hotel pick-up & drop-off (if centrally located)",
      "4 hrs of walking guided tour",
      "Traditional Luca Pastry tasting",
      "Bottled water",
      "Gourmet dinner (multiple courses)",
      "Premium wine pairings"
    ],
    excluded: [
      "Entrance fees",
      "Lunch",
      "Personal expenses"
    ],
    availability: "Saturday – Sunday",
    groupSizeMin: 2,
    groupSizeMax: 8,
    cancellationPolicy: "Free cancellation up to 48 hours before"
  },
  {
    id: "bucharest-old-town",
    title: "Bucharest Old Town & Communist History",
    label: "OLD TOWN",
    duration: "Half Day (4h)",
    location: "Bucharest City Center",
    image: getAssetPath("/tours/old-town.png"),
    price: "From €45",
    priceAmount: 45,
    rating: 4.9,
    reviews: 89,
    tags: ["City Tour", "Walking"],
    category: "inside",
    overview: "Walk through the cobblestone streets of the Lipscani district, discovering medieval ruins, 19th-century architecture, and vibrant local cafes. This tour also delves into the stark contrasts of Bucharest's communist past, exploring how history shaped the city you see today.",
    included: [
      "Authorized guide (English / Spanish / French)",
      "Hotel pick-up & drop-off (if centrally located)",
      "4 hrs of walking guided tour",
      "Traditional Luca Pastry tasting",
      "Bottled water"
    ],
    excluded: [
      "Entrance fees",
      "Lunch",
      "Personal expenses"
    ],
    availability: "Saturday – Sunday",
    groupSizeMin: 2,
    groupSizeMax: 8,
    cancellationPolicy: "Free cancellation up to 48 hours before"
  },
  {
    id: "taste-of-romania",
    title: "Taste of Romania: Food & Wine Tour",
    label: "TASTE OF ROMANIA",
    duration: "Half Day (5h)",
    location: "Bucharest & Surroundings",
    image: getAssetPath("/tours/traditional-food.png"),
    price: "From €85",
    priceAmount: 85,
    rating: 5.0,
    reviews: 78,
    tags: ["Gastronomy", "Wine"],
    category: "inside",
    overview: "Savor the rich and authentic flavors of traditional Romanian cuisine. From hearty sarmale and artisan cheeses to an exclusive tasting of distinguished local wines, this tour is a feast for the senses that highlights the country's culinary heritage.",
    included: [
      "Authorized guide (English / Spanish / French)",
      "Hotel pick-up & drop-off (if centrally located)",
      "5 hrs of walking guided tour",
      "Traditional Luca Pastry tasting",
      "Bottled water",
      "Traditional food & wine samples"
    ],
    excluded: [
      "Entrance fees",
      "Lunch",
      "Personal expenses"
    ],
    availability: "Saturday – Sunday",
    groupSizeMin: 2,
    groupSizeMax: 8,
    cancellationPolicy: "Free cancellation up to 48 hours before"
  },
  // Outside Bucharest
  {
    id: "transylvania-castles",
    title: "Transylvania Castles & Legends",
    label: "TRANSYLVANIA",
    duration: "Full Day (12h)",
    location: "Peles & Bran Castles, Brasov",
    image: getAssetPath("/tours/transylvania.jpg"),
    price: "Custom Quote",
    priceAmount: 120,
    isCustomQuote: true,
    rating: 5.0,
    reviews: 124,
    tags: ["History", "Castles", "Bestseller"],
    category: "outside",
    overview: "Step into the heart of Transylvania and discover the legends that made Romania famous. This full-day tour from Bucharest takes you through the scenic Carpathian Mountains to visit the stunning Peles Castle, the infamous Bran Castle (Dracula's Castle), and the medieval city of Brasov.",
    included: [
      "Authorized guide (English / Spanish / French)",
      "Hotel pick-up & drop-off from Bucharest",
      "Transportation by air-conditioned minivan",
      "Bottled water",
      "Traditional Luca Pastry tasting"
    ],
    excluded: [
      "Entrance fees to Peles and Bran Castles",
      "Lunch",
      "Personal expenses"
    ],
    availability: "Saturday – Sunday",
    groupSizeMin: 2,
    groupSizeMax: 8,
    cancellationPolicy: "Free cancellation up to 48 hours before",
    itinerary: [
      { time: "08:00 AM", title: "Departure from Bucharest", desc: "Pickup from your hotel." },
      { time: "10:30 AM", title: "Peles Castle", desc: "Visit the royal summer residence in Sinaia." },
      { time: "01:30 PM", title: "Bran Castle", desc: "Explore the legendary Dracula's Castle." },
      { time: "03:30 PM", title: "Brasov", desc: "Walking tour of the medieval old town." },
      { time: "08:00 PM", title: "Return", desc: "Drop-off at your hotel." }
    ]
  },
  {
    id: "slanic-salt-mine",
    title: "Underground Cathedral",
    label: "SALT MINE",
    duration: "Half Day (7–8h)",
    location: "Slanic Prahova Salt Mine",
    image: getAssetPath("/tours/salt-mine.png"),
    price: "Custom Quote",
    priceAmount: 35,
    isCustomQuote: true,
    rating: 4.6,
    reviews: 387,
    tags: ["Nature", "Unique", "Halotherapy"],
    category: "outside",
    overview: "Descend into the massive caverns of Slanic Prahova, the largest salt mine in Europe. Often referred to as the 'Underground Cathedral', its breathtaking scale, pristine air, and unique microclimate provide a relaxing and visually stunning halotherapy experience.",
    included: [
      "Authorized guide (English / Spanish / French)",
      "Hotel pick-up & drop-off from Bucharest",
      "Transportation by air-conditioned vehicle",
      "Traditional Luca Pastry tasting",
      "Bottled water"
    ],
    excluded: [
      "Entrance fees",
      "Lunch",
      "Personal expenses"
    ],
    availability: "Saturday – Sunday",
    groupSizeMin: 2,
    groupSizeMax: 8,
    cancellationPolicy: "Free cancellation up to 48 hours before"
  },
  {
    id: "danube-delta",
    title: "Danube Delta Wildlife Safari",
    label: "DANUBE DELTA",
    duration: "Full Day (14h)",
    location: "Tulcea — UNESCO Delta",
    image: getAssetPath("/tours/danube-delta.jpg"),
    price: "Custom Quote",
    priceAmount: 85,
    isCustomQuote: true,
    rating: 4.7,
    reviews: 214,
    tags: ["Wildlife", "Nature", "UNESCO"],
    category: "outside",
    overview: "Embark on an epic journey to the UNESCO-protected Danube Delta. Cruise through serene canals and pristine lakes on a specialized safari boat, observing wild horses, pelican colonies, and an incredibly diverse ecosystem untouched by modern development.",
    included: [
      "Authorized guide (English / Spanish / French)",
      "Hotel pick-up & drop-off from Bucharest",
      "Safari boat tour in the Delta",
      "Traditional Luca Pastry tasting",
      "Bottled water"
    ],
    excluded: [
      "Entrance fees",
      "Lunch",
      "Personal expenses"
    ],
    availability: "Saturday – Sunday",
    groupSizeMin: 2,
    groupSizeMax: 8,
    cancellationPolicy: "Free cancellation up to 48 hours before"
  },
  {
    id: "constanta-black-sea",
    title: "Sea & Ancient Rome",
    label: "BLACK SEA",
    duration: "Full Day (10–12h)",
    location: "Constanta & Mamaia Beach",
    image: getAssetPath("/tours/black-sea.png"),
    price: "Custom Quote",
    priceAmount: 55,
    isCustomQuote: true,
    rating: 4.5,
    reviews: 302,
    tags: ["History", "Beach", "Summer"],
    category: "outside",
    overview: "Travel to the sunny Black Sea coast to explore the ancient Roman ruins of Tomis (modern-day Constanta). Tour the iconic Art Nouveau Casino right on the waterfront, before ending the day relaxing on the golden sands of Mamaia resort.",
    included: [
      "Authorized guide (English / Spanish / French)",
      "Hotel pick-up & drop-off from Bucharest",
      "Transportation by air-conditioned vehicle",
      "Traditional Luca Pastry tasting",
      "Bottled water"
    ],
    excluded: [
      "Entrance fees",
      "Lunch",
      "Personal expenses"
    ],
    availability: "Saturday – Sunday",
    groupSizeMin: 2,
    groupSizeMax: 8,
    cancellationPolicy: "Free cancellation up to 48 hours before"
  },
  {
    id: "mogosoaia-snagov",
    title: "Palaces & Dracula's Tomb",
    label: "MOGOSOAIA",
    duration: "Half Day (5–7h)",
    location: "Mogosoaia Palace & Snagov",
    image: getAssetPath("/tours/mogosoaia.png"),
    price: "Custom Quote",
    priceAmount: 30,
    isCustomQuote: true,
    rating: 4.6,
    reviews: 178,
    tags: ["Dracula", "Palaces", "Easy"],
    category: "outside",
    overview: "Escape the city for a peaceful half-day trip to two serene locations. Marvel at the Brâncovenesc architecture of the beautiful Mogosoaia Palace, and take a tranquil boat ride to Snagov Monastery, the legendary final resting place of Vlad the Impaler (Dracula).",
    included: [
      "Authorized guide (English / Spanish / French)",
      "Hotel pick-up & drop-off from Bucharest",
      "Traditional Luca Pastry tasting",
      "Bottled water"
    ],
    excluded: [
      "Entrance fees",
      "Lunch",
      "Personal expenses"
    ],
    availability: "Saturday – Sunday",
    groupSizeMin: 2,
    groupSizeMax: 8,
    cancellationPolicy: "Free cancellation up to 48 hours before"
  },
  {
    id: "transfagarasan-road",
    title: "Transfagarasan Epic Drive",
    label: "TRANSFĂGĂRĂȘAN",
    duration: "Full Day (14h)",
    location: "Carpathian Mountains",
    image: getAssetPath("/tours/transfagarasan.jpg"),
    price: "Custom Quote",
    priceAmount: 150,
    isCustomQuote: true,
    rating: 5.0,
    reviews: 56,
    tags: ["Nature", "Scenic Drive"],
    category: "outside",
    overview: "Experience what has been called 'the best driving road in the world'. This full-day adventure takes you winding through the dramatic peaks of the Carpathian Mountains, offering jaw-dropping panoramic views, glacial lakes, and thrilling switchbacks.",
    included: [
      "Authorized guide (English / Spanish / French)",
      "Hotel pick-up & drop-off from Bucharest",
      "Transportation by air-conditioned vehicle",
      "Traditional Luca Pastry tasting",
      "Bottled water"
    ],
    excluded: [
      "Entrance fees",
      "Lunch",
      "Personal expenses"
    ],
    availability: "Saturday – Sunday",
    groupSizeMin: 2,
    groupSizeMax: 8,
    cancellationPolicy: "Free cancellation up to 48 hours before"
  },
  {
    id: "sibiu-sighisoara",
    title: "Medieval Transylvania: Sibiu & Sighisoara",
    label: "SIBIU & SIGHIȘOARA",
    duration: "2 Days / 1 Night",
    location: "Transylvania",
    image: getAssetPath("/tours/medieval-transylvania.jpg"),
    price: "Custom Quote",
    priceAmount: 350,
    isCustomQuote: true,
    rating: 4.9,
    reviews: 42,
    tags: ["Multi-day", "Culture"],
    category: "outside",
    overview: "Immerse yourself fully in the magic of Transylvania on this 2-day expedition. Wander the colorful squares of Sibiu (a former European Capital of Culture), and spend the night in the perfectly preserved, fairy-tale citadel of Sighisoara, birthplace of Vlad Dracula.",
    included: [
      "Authorized guide (English / Spanish / French)",
      "Hotel pick-up & drop-off from Bucharest",
      "Traditional Luca Pastry tasting",
      "Bottled water",
      "1 night accommodation in medieval citadel"
    ],
    excluded: [
      "Entrance fees",
      "Lunch",
      "Personal expenses"
    ],
    availability: "Saturday – Sunday",
    groupSizeMin: 2,
    groupSizeMax: 8,
    cancellationPolicy: "Free cancellation up to 48 hours before"
  }
]

export const getTourById = (id: string) => allTours.find(t => t.id === id)
export const cityTours = allTours.filter(t => t.category === "inside")
export const outsideTours = allTours.filter(t => t.category === "outside")
export const featuredTours = allTours.filter(t => t.featured === true)
