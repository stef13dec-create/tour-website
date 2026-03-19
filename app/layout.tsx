import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Discover Romania with Corina | Premium Tours',
  description: 'Premium guided tours in Romania with Corina, a licensed tour guide. Discover Bucharest, Transylvania, and authentic Romanian experiences.',
  metadataBase: new URL('https://discoverromaniawithcorina.com'),
  openGraph: {
    type: 'website',
    siteName: 'Discover Romania with Corina',
    title: 'Discover Romania with Corina | Premium Tours',
    description: 'Premium guided tours in Romania with Corina, a licensed tour guide. Discover Bucharest, Transylvania, and authentic Romanian experiences.',
    images: [{ url: '/athenaeum-hero.webp', width: 2400, height: 1807, alt: 'Romanian Athenaeum, Bucharest' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discover Romania with Corina | Premium Tours',
    description: 'Premium guided tours in Romania. Discover Bucharest, Transylvania, and authentic Romanian experiences.',
    images: ['/athenaeum-hero.webp'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans bg-[#050505] text-white antialiased selection:bg-white/20 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
