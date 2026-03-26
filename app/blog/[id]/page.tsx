import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"

import { getBlogPostById, blogPosts } from "@/lib/blog"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = getBlogPostById(id);
  
  if (!post) {
    return {
      title: "Post Not Found | Discover Romania with Corina",
    }
  }

  return {
    title: `${post.title} | Discover Romania with Corina`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = getBlogPostById(id);

  if (!post) {
    notFound();
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
