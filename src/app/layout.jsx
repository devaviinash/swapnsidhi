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
      <body
        className={`${inter.variable} ${playfair.variable} min-h-screen bg-background font-sans antialiased text-stone-900 selection:bg-saffron-200 selection:text-stone-900 flex flex-col`}
      >
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4">
            <a href="/" className="flex items-center space-x-2">
              <span className="font-playfair text-xl font-bold">
                Swapnasiddhi
              </span>
            </a>
            <nav className="flex items-center space-x-6">
              <a
                href="/"
                className="text-sm font-medium hover:text-saffron-600 transition-colors"
              >
                Home
              </a>
              <a
                href="/mentors"
                className="text-sm font-medium hover:text-saffron-600 transition-colors"
              >
                Mentors
              </a>
              <a
                href="/about"
                className="text-sm font-medium hover:text-saffron-600 transition-colors"
              >
                About
              </a>
              <a
                href="/signup"
                className="bg-gradient-to-r from-saffron-600 to-gold-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-saffron-700 hover:to-gold-700 transition-colors"
              >
                Sign Up
              </a>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border bg-background py-12">
          <div className="container mx-auto px-4">
            {/* Top Section with Logo, Description and Newsletter */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-1">
                <a href="/" className="inline-block">
                  <span className="font-playfair text-2xl font-bold">
                    Swapnasiddhi
                  </span>
                </a>
                <p className="mt-4 text-sm text-stone-600 max-w-md">
                  Empowering the Maratha community through mentorship. Connect
                  with experienced mentors who can guide you on your
                  professional journey.
                </p>
                <div className="mt-6 flex space-x-4">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-500 hover:text-saffron-600 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-500 hover:text-saffron-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-500 hover:text-saffron-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-500 hover:text-saffron-600 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="md:col-span-1">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-900">
                  Resources
                </h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a
                      href="/about"
                      className="text-sm text-stone-600 hover:text-saffron-600 transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/mentors"
                      className="text-sm text-stone-600 hover:text-saffron-600 transition-colors"
                    >
                      Find Mentors
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="text-sm text-stone-600 hover:text-saffron-600 transition-colors"
                    >
                      Blog & Articles
                    </a>
                  </li>
                  <li>
                    <a
                      href="/resources"
                      className="text-sm text-stone-600 hover:text-saffron-600 transition-colors"
                    >
                      Career Resources
                    </a>
                  </li>
                  <li>
                    <a
                      href="/faq"
                      className="text-sm text-stone-600 hover:text-saffron-600 transition-colors"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-1">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-900">
                  Subscribe to our newsletter
                </h3>
                <p className="mt-4 text-sm text-stone-600">
                  Get the latest updates and resources delivered to your inbox.
                </p>
                <form className="mt-4">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="min-w-0 flex-auto rounded-md border border-stone-300 bg-white px-3.5 py-2 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 focus:ring-2 focus:ring-inset focus:ring-saffron-600 sm:text-sm"
                      required
                    />
                    <button
                      type="submit"
                      className="flex-none rounded-md bg-gradient-to-r from-saffron-600 to-gold-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-saffron-700 hover:to-gold-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron-600"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Middle Section with Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-stone-200">
              <div>
                <h3 className="text-sm font-semibold text-stone-900">
                  For Mentees
                </h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a
                      href="/signup/mentee"
                      className="text-sm text-stone-600 hover:text-saffron-600 transition-colors"
                    >
                      Sign Up as Mentee
                    </a>
                  </li>
                  <li>
                    <a
                      href="/mentee-guide"
                      className="text-sm text-stone-600 hover:text-saffron-600 transition-colors"
                    >
                      Mentee Guide
                    </a>
                  </li>
                  <li>
                    <a
                      href="/success-stories"
                      className="text-sm text-stone-600 hover:text-saffron-600 transition-colors"
                    >
                      Success Stories
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-stone-900">
                  For Mentors
                </h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a
                      href="/signup/mentor"
                      className="text-sm text-stone-600 hover:text-saffron-600 transition-colors"
                    >
                      Become a Mentor
                    </a>
                  </li>
                  <li>
                    <a
                      href="/mentor-guide"
                      className="text-sm text-stone-600 hover:text-saffron-600 transition-colors"
                    >
                      Mentor Guide
                    </a>
                  </li>
                  <li>
                    <a
                      href="/mentor-resources"
                      className="text-sm text-stone-600 hover:text-saffron-600 transition-colors"
                    >
                      Mentor Resources
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-stone-900">
                  Community
                </h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a
                      href="/events"
                      className="text-sm text-stone-600 hover:text-saffron-600 transition-colors"
                    >
                      Events
                    </a>
                  </li>
                  <li>
                    <a
                      href="/forums"
                      className="text-sm text-stone-600 hover:text-saffron-600 transition-colors"
                    >
                      Forums
                    </a>
                  </li>
                  <li>
                    <a
                      href="/testimonials"
                      className="text-sm text-stone-600 hover:text-saffron-600 transition-colors"
                    >
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-stone-900">Legal</h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a
                      href="/terms"
                      className="text-sm text-stone-600 hover:text-saffron-600 transition-colors"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy"
                      className="text-sm text-stone-600 hover:text-saffron-600 transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/cookies"
                      className="text-sm text-stone-600 hover:text-saffron-600 transition-colors"
                    >
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Section with Copyright */}
            <div className="pt-8 mt-8 border-t border-stone-200 md:flex md:items-center md:justify-between">
              <div className="flex space-x-6 md:order-2">
                <a
                  href="/contact"
                  className="text-sm text-stone-600 hover:text-saffron-600 transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="/support"
                  className="text-sm text-stone-600 hover:text-saffron-600 transition-colors"
                >
                  Support
                </a>
                <a
                  href="/sitemap"
                  className="text-sm text-stone-600 hover:text-saffron-600 transition-colors"
                >
                  Sitemap
                </a>
              </div>
              <p className="mt-8 text-sm text-stone-500 md:mt-0 md:order-1">
                © {new Date().getFullYear()} Swapnasiddhi. All rights reserved.{" "}
                <br />
                Made with <span className="text-red-500">❤️</span> for Maratha
                community.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
