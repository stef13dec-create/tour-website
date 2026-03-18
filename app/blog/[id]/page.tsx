import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  void id; // will be used when data is fetched dynamically
  return {
    title: "Top 10 Things to Do in Bucharest | Discover Romania with Corina",
    description: "Bucharest, often called the Little Paris of the East, is a city of contrasts. Discover the top things to do for first-time visitors.",
    openGraph: {
      title: "Top 10 Things to Do in Bucharest for First-Time Visitors",
      description: "Discover the top things to do in Bucharest — from the Palace of Parliament to the charming cobblestone streets of the Old Town.",
      images: [{ url: "https://picsum.photos/seed/bucharest-blog/1920/1080" }],
    },
  }
}

type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  void id; // will be used when data is fetched dynamically

  // Mock data
  const post = {
    title: "Top 10 Things to Do in Bucharest for First-Time Visitors",
    content: [
      { type: "paragraph", text: "Bucharest, often called the \"Little Paris of the East,\" is a city of contrasts. From the massive Palace of Parliament to the charming cobblestone streets of the Old Town, there's something for everyone." },
      { type: "heading",   text: "1. Explore the Old Town (Centrul Vechi)" },
      { type: "paragraph", text: "Start your journey in the historic center. It's a vibrant mix of history, architecture, and nightlife. Don't miss the Stavropoleos Monastery, a stunning example of Brâncovenesc style." },
      { type: "heading",   text: "2. Visit the Palace of Parliament" },
      { type: "paragraph", text: "The second-largest administrative building in the world is a must-see. Its sheer scale and opulent interiors are a testament to Romania's complex past." },
      { type: "heading",   text: "3. Relax in Herastrau Park" },
      { type: "paragraph", text: "Escape the city bustle in this expansive park built around a large lake. Rent a boat, visit the Village Museum, or simply enjoy a coffee by the water." },
    ] as ContentBlock[],
    image: "https://picsum.photos/seed/bucharest-blog/1920/1080",
    date: "May 15, 2026",
    category: "City Guide",
    author: "Corina"
  }

  return (
    <main className="min-h-screen flex flex-col bg-[#050505]">
      <Navbar />
      
      <article className="pt-40 pb-24 px-6 md:px-12 flex-grow">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-3 text-white/50 hover:text-white transition-colors mb-12 text-xs font-light tracking-widest uppercase">
            <ArrowLeft size={14} /> Back to Journal
          </Link>
          
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <span className="px-4 py-1.5 bg-white/5 backdrop-blur-md text-white text-[10px] font-light tracking-widest uppercase rounded-full border border-white/10">
                {post.category}
              </span>
              <span className="text-white/40 text-xs font-light tracking-widest uppercase">{post.date}</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 text-balance leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-white/60">
              <div className="w-12 h-12 rounded-full overflow-hidden relative border border-white/10">
                <Image src="https://picsum.photos/seed/corina-portrait/100/100" alt={post.author} fill className="object-cover" />
              </div>
              <span className="font-light text-sm tracking-wide text-white/80">By {post.author}</span>
            </div>
          </div>

          <div className="relative aspect-[21/9] w-full overflow-hidden mb-16">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-8">
            {post.content.map((block, i) =>
              block.type === "heading" ? (
                <h2 key={i} className="font-serif text-3xl font-light text-white mt-16 mb-4">
                  {block.text}
                </h2>
              ) : (
                <p key={i} className="text-white/70 font-light leading-relaxed text-lg">
                  {block.text}
                </p>
              )
            )}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
