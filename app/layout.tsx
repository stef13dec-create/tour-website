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
  description: 'Premium guided tours in Romania with Corina, a licensed online tour guide. Discover Bucharest, Transylvania, and authentic Romanian experiences.',
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
