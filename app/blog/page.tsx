import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import Image from "next/image"
import Link from "next/link"

import { blogPosts } from "@/lib/blog"

export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050505]">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-white/50 font-light tracking-[0.2em] uppercase text-xs mb-6 block">
            Travel Journal
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-white mb-6">Stories & Guides</h1>
          <p className="text-lg text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
            Insider tips, cultural insights, and travel guides for your Romanian adventure.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 flex-grow bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="group flex flex-col h-full cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                <div className="absolute top-4 left-4 px-4 py-1.5 bg-black/40 backdrop-blur-md text-white text-[10px] font-light tracking-widest uppercase rounded-full border border-white/10">
                  {post.category}
                </div>
              </div>
              <div className="flex flex-col flex-grow px-2">
                <span className="text-white/40 text-xs font-light tracking-widest uppercase mb-4">{post.date}</span>
                <h2 className="font-serif text-2xl md:text-3xl font-light text-white mb-4 group-hover:text-white/80 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-white/60 font-light leading-relaxed line-clamp-3 mb-8">
                  {post.excerpt}
                </p>
                <span className="mt-auto inline-flex items-center text-white text-xs font-light tracking-widest uppercase group-hover:text-white/70 transition-colors">
                  Read Article
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
