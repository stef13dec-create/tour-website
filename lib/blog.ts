import { getAssetPath } from "./utils"

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  author: string;
  content: Array<{ type: "paragraph" | "heading"; text: string }>;
}

export const blogPosts: BlogPost[] = [
  {
    id: "top-10-bucharest",
    title: "Top 10 Things to Do in Bucharest for First-Time Visitors",
    excerpt: "Discover the must-see attractions, hidden gems, and best local food spots in Romania's vibrant capital city.",
    image: getAssetPath("https://picsum.photos/seed/bucharest-blog/800/600"),
    date: "May 15, 2026",
    category: "City Guide",
    author: "Corina",
    content: [
      { type: "paragraph", text: "Bucharest, often called the \"Little Paris of the East,\" is a city of contrasts. From the massive Palace of Parliament to the charming cobblestone streets of the Old Town, there's something for everyone." },
      { type: "heading",   text: "1. Explore the Old Town (Centrul Vechi)" },
      { type: "paragraph", text: "Start your journey in the historic center. It's a vibrant mix of history, architecture, and nightlife. Don't miss the Stavropoleos Monastery, a stunning example of Brâncovenesc style." },
      { type: "heading",   text: "2. Visit the Palace of Parliament" },
      { type: "paragraph", text: "The second-largest administrative building in the world is a must-see. Its sheer scale and opulent interiors are a testament to Romania's complex past." },
      { type: "heading",   text: "3. Relax in Herastrau Park" },
      { type: "paragraph", text: "Escape the city bustle in this expansive park built around a large lake. Rent a boat, visit the Village Museum, or simply enjoy a coffee by the water." },
    ]
  },
  {
    id: "transylvania-myths",
    title: "Beyond Dracula: The Real History of Transylvania",
    excerpt: "Separate fact from fiction as we explore the medieval castles, fortified churches, and true legends of Transylvania.",
    image: getAssetPath("https://picsum.photos/seed/transylvania-blog/800/600"),
    date: "June 2, 2026",
    category: "History & Culture",
    author: "Corina",
    content: [
      { type: "paragraph", text: "Transylvania is more than just vampire legends. It's a region of breathtaking landscapes and rich multi-cultural heritage." },
      { type: "heading",   text: "The Saxon Villages" },
      { type: "paragraph", text: "The fortified churches of Viscri and Biertan are UNESCO World Heritage sites that offer a glimpse into the past." }
    ]
  },
  {
    id: "romanian-food-guide",
    title: "A Foodie's Guide to Traditional Romanian Cuisine",
    excerpt: "From Sarmale to Papanasi, learn about the delicious traditional dishes you must try during your visit to Romania.",
    image: getAssetPath("https://picsum.photos/seed/romanian-food-blog/800/600"),
    date: "June 18, 2026",
    category: "Food & Wine",
    author: "Corina",
    content: [
      { type: "paragraph", text: "Romanian cuisine is hearty and diverse. Discover the flavors of the Balkans and Central Europe combined." },
      { type: "heading",   text: "Sarmale: The National Dish" },
      { type: "paragraph", text: "Cabbage rolls stuffed with meat and rice, usually served with polenta (mamaliga) and sour cream." }
    ]
  }
];

export function getBlogPostById(id: string) {
  return blogPosts.find(post => post.id === id);
}
