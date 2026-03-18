import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Mock data
  const post = {
    title: "Top 10 Things to Do in Bucharest for First-Time Visitors",
    content: `
      <p>Bucharest, often called the "Little Paris of the East," is a city of contrasts. From the massive Palace of Parliament to the charming cobblestone streets of the Old Town, there's something for everyone.</p>
      <h2>1. Explore the Old Town (Centrul Vechi)</h2>
      <p>Start your journey in the historic center. It's a vibrant mix of history, architecture, and nightlife. Don't miss the Stavropoleos Monastery, a stunning example of Brâncovenesc style.</p>
      <h2>2. Visit the Palace of Parliament</h2>
      <p>The second-largest administrative building in the world is a must-see. Its sheer scale and opulent interiors are a testament to Romania's complex past.</p>
      <h2>3. Relax in Herastrau Park</h2>
      <p>Escape the city bustle in this expansive park built around a large lake. Rent a boat, visit the Village Museum, or simply enjoy a coffee by the water.</p>
    `,
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

          <div 
            className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:font-light prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-p:text-white/70 prose-p:font-light prose-p:leading-relaxed prose-a:text-white hover:prose-a:text-white/80 prose-a:underline-offset-4 prose-img:rounded-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      <Footer />
    </main>
  )
}
