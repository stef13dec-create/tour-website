export interface Tour {
  id: string
  title: string
  duration: string
  location: string
  image: string
  price: string
  rating: number
  reviews: number
  tags: string[]
  category: "inside" | "outside"
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
    duration: "Half Day (4h)",
    location: "Calea Victoriei & Historic Center",
    image: "/tours/little-paris.png",
    price: "From €65",
    rating: 5.0,
    reviews: 142,
    tags: ["History", "Architecture", "Premium"],
    category: "inside",
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
    duration: "Half Day (5h)",
    location: "Palace of Parliament & Revolution Square",
    image: "/tours/communist.png",
    price: "From €55",
    rating: 4.9,
    reviews: 118,
    tags: ["Communisum", "History", "Essential"],
    category: "inside",
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
    duration: "Evening (4h)",
    location: "Boutique Restaurants & Wine Bars",
    image: "/tours/contemporary-food.png",
    price: "From €95",
    rating: 5.0,
    reviews: 74,
    tags: ["Gastronomy", "Modern", "Luxury"],
    category: "inside",
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
    duration: "Half Day (4h)",
    location: "Bucharest City Center",
    image: "/tours/old-town.png",
    price: "From €45",
    rating: 4.9,
    reviews: 89,
    tags: ["City Tour", "Walking"],
    category: "inside"
  },
  {
    id: "taste-of-romania",
    title: "Taste of Romania: Food & Wine Tour",
    duration: "Half Day (5h)",
    location: "Bucharest & Surroundings",
    image: "/tours/traditional-food.png",
    price: "From €85",
    rating: 5.0,
    reviews: 78,
    tags: ["Gastronomy", "Wine"],
    category: "inside"
  },
  // Outside Bucharest
  {
    id: "transylvania-castles",
    title: "Transylvania Castles & Legends",
    duration: "Full Day (12h)",
    location: "Peles & Bran Castles, Brasov",
    image: "/tours/transylvania.jpg",
    price: "From €120",
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
    duration: "Half Day (7–8h)",
    location: "Slanic Prahova Salt Mine",
    image: "/tours/salt-mine.jpg",
    price: "From €35",
    rating: 4.6,
    reviews: 387,
    tags: ["Nature", "Unique", "Halotherapy"],
    category: "outside"
  },
  {
    id: "danube-delta",
    title: "Danube Delta Wildlife Safari",
    duration: "Full Day (14h)",
    location: "Tulcea — UNESCO Delta",
    image: "/tours/danube-delta.jpg",
    price: "From €85",
    rating: 4.7,
    reviews: 214,
    tags: ["Wildlife", "Nature", "UNESCO"],
    category: "outside"
  },
  {
    id: "constanta-black-sea",
    title: "Sea & Ancient Rome",
    duration: "Full Day (10–12h)",
    location: "Constanta & Mamaia Beach",
    image: "/tours/black-sea.jpg",
    price: "From €55",
    rating: 4.5,
    reviews: 302,
    tags: ["History", "Beach", "Summer"],
    category: "outside"
  },
  {
    id: "mogosoaia-snagov",
    title: "Palaces & Dracula's Tomb",
    duration: "Half Day (5–7h)",
    location: "Mogosoaia Palace & Snagov",
    image: "/tours/mogosoaia.jpg",
    price: "From €30",
    rating: 4.6,
    reviews: 178,
    tags: ["Dracula", "Palaces", "Easy"],
    category: "outside"
  },
  {
    id: "transfagarasan-road",
    title: "Transfagarasan Epic Drive",
    duration: "Full Day (14h)",
    location: "Carpathian Mountains",
    image: "/tours/transfagarasan.jpg",
    price: "From €150",
    rating: 5.0,
    reviews: 56,
    tags: ["Nature", "Scenic Drive"],
    category: "outside"
  },
  {
    id: "sibiu-sighisoara",
    title: "Medieval Transylvania: Sibiu & Sighisoara",
    duration: "2 Days / 1 Night",
    location: "Transylvania",
    image: "/tours/medieval-transylvania.jpg",
    price: "From €350",
    rating: 4.9,
    reviews: 42,
    tags: ["Multi-day", "Culture"],
    category: "outside"
  }
]

export const getTourById = (id: string) => allTours.find(t => t.id === id)
export const cityTours = allTours.filter(t => t.category === "inside")
export const outsideTours = allTours.filter(t => t.category === "outside")
