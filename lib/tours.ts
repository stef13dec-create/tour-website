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
    image: "/tours/little-paris.png",
    price: "From €65",
    priceAmount: 65,
    rating: 5.0,
    reviews: 142,
    tags: ["History", "Architecture", "Premium"],
    category: "inside",
    featured: true,
    overview: "Walk the grand boulevards of Bucharest's Belle Époque era — Calea Victoriei, the Romanian Athenaeum, and the city's finest Art Nouveau facades. Discover why Bucharest was once called 'The Little Paris of the East'.",
    included: [
      "Licensed English-speaking guide",
      "Entrance fees to selected landmarks",
      "Traditional pastry tasting",
      "Bottled water"
    ],
    excluded: [
      "Hotel pickup and drop-off",
      "Lunch and personal expenses",
      "Gratuities (optional)"
    ]
  },
  {
    id: "communist-shadows",
    title: "Shadows of the Past",
    label: "COMMUNISM TOUR",
    duration: "Half Day (5h)",
    location: "Palace of Parliament & Revolution Square",
    image: "/tours/communist.png",
    price: "From €55",
    priceAmount: 55,
    rating: 4.9,
    reviews: 118,
    tags: ["Communism", "History", "Essential"],
    category: "inside",
    featured: true,
    overview: "Explore the monumental legacy of communism in Bucharest — the Palace of Parliament, Revolution Square, and the haunting story of Ceaușescu's regime. Understand how 40 years of communism reshaped the city's face and soul.",
    included: [
      "Licensed English-speaking guide",
      "Skip-the-line access to Palace of Parliament",
      "Transportation between sites",
      "Bottled water"
    ],
    excluded: [
      "Personal expenses",
      "Gratuities (optional)"
    ]
  },
  {
    id: "new-wave-kitchen",
    title: "The New Wave Kitchen",
    label: "FOOD & WINE",
    duration: "Evening (4h)",
    location: "Boutique Restaurants & Wine Bars",
    image: "/tours/contemporary-food.png",
    price: "From €95",
    priceAmount: 95,
    rating: 5.0,
    reviews: 74,
    tags: ["Gastronomy", "Modern", "Luxury"],
    category: "inside",
    featured: true,
    overview: "An evening tour through Bucharest's most exciting contemporary restaurants and wine bars. Experience the 'New Wave' of Romanian gastronomy, where traditional ingredients meet modern techniques and world-class wines.",
    included: [
      "Gourmet dinner (multiple courses)",
      "Premium wine pairings",
      "Licensed foodie guide",
      "Short walking tour of the nightlife district"
    ],
    excluded: [
      "Transportation to/from the meeting point",
      "Extra drinks",
      "Gratuities (optional)"
    ]
  },
  {
    id: "bucharest-old-town",
    title: "Bucharest Old Town & Communist History",
    label: "OLD TOWN",
    duration: "Half Day (4h)",
    location: "Bucharest City Center",
    image: "/tours/old-town.png",
    price: "From €45",
    priceAmount: 45,
    rating: 4.9,
    reviews: 89,
    tags: ["City Tour", "Walking"],
    category: "inside",
    overview: "Walk through the cobblestone streets of the Lipscani district, discovering medieval ruins, 19th-century architecture, and vibrant local cafes. This tour also delves into the stark contrasts of Bucharest's communist past, exploring how history shaped the city you see today."
  },
  {
    id: "taste-of-romania",
    title: "Taste of Romania: Food & Wine Tour",
    label: "TASTE OF ROMANIA",
    duration: "Half Day (5h)",
    location: "Bucharest & Surroundings",
    image: "/tours/traditional-food.png",
    price: "From €85",
    priceAmount: 85,
    rating: 5.0,
    reviews: 78,
    tags: ["Gastronomy", "Wine"],
    category: "inside",
    overview: "Savor the rich and authentic flavors of traditional Romanian cuisine. From hearty sarmale and artisan cheeses to an exclusive tasting of distinguished local wines, this tour is a feast for the senses that highlights the country's culinary heritage."
  },
  // Outside Bucharest
  {
    id: "transylvania-castles",
    title: "Transylvania Castles & Legends",
    label: "TRANSYLVANIA",
    duration: "Full Day (12h)",
    location: "Peles & Bran Castles, Brasov",
    image: "/tours/transylvania.jpg",
    price: "From €120",
    priceAmount: 120,
    rating: 5.0,
    reviews: 124,
    tags: ["History", "Castles", "Bestseller"],
    category: "outside",
    overview: "Step into the heart of Transylvania and discover the legends that made Romania famous. This full-day tour from Bucharest takes you through the scenic Carpathian Mountains to visit the stunning Peles Castle, the infamous Bran Castle (Dracula's Castle), and the medieval city of Brasov.",
    included: [
      "Hotel pickup and drop-off in Bucharest",
      "Licensed English-speaking guide",
      "Transportation by air-conditioned minivan",
      "Skip-the-line access (tickets not included)",
      "Bottled water"
    ],
    excluded: [
      "Entrance fees to Peles and Bran Castles",
      "Lunch",
      "Gratuities"
    ],
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
    image: "/tours/salt-mine.png",
    price: "From €35",
    priceAmount: 35,
    rating: 4.6,
    reviews: 387,
    tags: ["Nature", "Unique", "Halotherapy"],
    category: "outside",
    overview: "Descend into the massive caverns of Slanic Prahova, the largest salt mine in Europe. Often referred to as the 'Underground Cathedral', its breathtaking scale, pristine air, and unique microclimate provide a relaxing and visually stunning halotherapy experience."
  },
  {
    id: "danube-delta",
    title: "Danube Delta Wildlife Safari",
    label: "DANUBE DELTA",
    duration: "Full Day (14h)",
    location: "Tulcea — UNESCO Delta",
    image: "/tours/danube-delta.jpg",
    price: "From €85",
    priceAmount: 85,
    rating: 4.7,
    reviews: 214,
    tags: ["Wildlife", "Nature", "UNESCO"],
    category: "outside",
    overview: "Embark on an epic journey to the UNESCO-protected Danube Delta. Cruise through serene canals and pristine lakes on a specialized safari boat, observing wild horses, pelican colonies, and an incredibly diverse ecosystem untouched by modern development."
  },
  {
    id: "constanta-black-sea",
    title: "Sea & Ancient Rome",
    label: "BLACK SEA",
    duration: "Full Day (10–12h)",
    location: "Constanta & Mamaia Beach",
    image: "/tours/black-sea.png",
    price: "From €55",
    priceAmount: 55,
    rating: 4.5,
    reviews: 302,
    tags: ["History", "Beach", "Summer"],
    category: "outside",
    overview: "Travel to the sunny Black Sea coast to explore the ancient Roman ruins of Tomis (modern-day Constanta). Tour the iconic Art Nouveau Casino right on the waterfront, before ending the day relaxing on the golden sands of Mamaia resort."
  },
  {
    id: "mogosoaia-snagov",
    title: "Palaces & Dracula's Tomb",
    label: "MOGOSOAIA",
    duration: "Half Day (5–7h)",
    location: "Mogosoaia Palace & Snagov",
    image: "/tours/mogosoaia.png",
    price: "From €30",
    priceAmount: 30,
    rating: 4.6,
    reviews: 178,
    tags: ["Dracula", "Palaces", "Easy"],
    category: "outside",
    overview: "Escape the city for a peaceful half-day trip to two serene locations. Marvel at the Brâncovenesc architecture of the beautiful Mogosoaia Palace, and take a tranquil boat ride to Snagov Monastery, the legendary final resting place of Vlad the Impaler (Dracula)."
  },
  {
    id: "transfagarasan-road",
    title: "Transfagarasan Epic Drive",
    label: "TRANSFĂGĂRĂȘAN",
    duration: "Full Day (14h)",
    location: "Carpathian Mountains",
    image: "/tours/transfagarasan.jpg",
    price: "From €150",
    priceAmount: 150,
    rating: 5.0,
    reviews: 56,
    tags: ["Nature", "Scenic Drive"],
    category: "outside",
    overview: "Experience what has been called 'the best driving road in the world'. This full-day adventure takes you winding through the dramatic peaks of the Carpathian Mountains, offering jaw-dropping panoramic views, glacial lakes, and thrilling switchbacks."
  },
  {
    id: "sibiu-sighisoara",
    title: "Medieval Transylvania: Sibiu & Sighisoara",
    label: "SIBIU & SIGHIȘOARA",
    duration: "2 Days / 1 Night",
    location: "Transylvania",
    image: "/tours/medieval-transylvania.jpg",
    price: "From €350",
    priceAmount: 350,
    rating: 4.9,
    reviews: 42,
    tags: ["Multi-day", "Culture"],
    category: "outside",
    overview: "Immerse yourself fully in the magic of Transylvania on this 2-day expedition. Wander the colorful squares of Sibiu (a former European Capital of Culture), and spend the night in the perfectly preserved, fairy-tale citadel of Sighisoara, birthplace of Vlad Dracula."
  }
]

export const getTourById = (id: string) => allTours.find(t => t.id === id)
export const cityTours = allTours.filter(t => t.category === "inside")
export const outsideTours = allTours.filter(t => t.category === "outside")
export const featuredTours = allTours.filter(t => t.featured === true)
