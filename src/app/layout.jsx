import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} min-h-screen bg-background font-sans antialiased text-stone-900 selection:bg-saffron-200 selection:text-stone-900 flex flex-col`}>
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4">
            <a href="/" className="flex items-center space-x-2">
              <span className="font-playfair text-xl font-bold">Swapnasiddhi</span>
            </a>
            <nav className="flex items-center space-x-6">
              <a href="/" className="text-sm font-medium hover:text-saffron-600 transition-colors">Home</a>
              <a href="/explore" className="text-sm font-medium hover:text-saffron-600 transition-colors">Explore</a>
              <a href="/about" className="text-sm font-medium hover:text-saffron-600 transition-colors">About</a>
              <a href="/signup" className="bg-gradient-to-r from-saffron-600 to-gold-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-saffron-700 hover:to-gold-700 transition-colors">Sign Up</a>
            </nav>
          </div>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="border-t border-border bg-background py-8">
        </footer>
      </body>
    </html>
  );
}
