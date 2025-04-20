'use client';

const categories = [
  {
    name: "Business",
    slug: "business",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>',
    description: "Learn from experienced entrepreneurs and business executives.",
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>',
    description: "Connect with medical professionals and healthcare innovators.",
  },
  {
    name: "Education",
    slug: "education",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
    description: "Get guidance from educators and academic professionals.",
  },
  {
    name: "Law",
    slug: "law",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m17 11 2-2V4h-3"></path><path d="M14 10V4h-3"></path><path d="M5 10V4h3"></path><path d="M5 15h14"></path><rect width="18" height="4" x="3" y="15" rx="1"></rect><path d="M5 19v3"></path><path d="M19 22v-3"></path><path d="M9 22h6"></path></svg>',
    description: "Connect with legal experts and judiciary professionals.",
  },
  {
    name: "Arts",
    slug: "arts",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="10.5" r="2.5"></circle><circle cx="8.5" cy="7.5" r="2.5"></circle><circle cx="6.5" cy="12.5" r="2.5"></circle><path d="M12 13c3.5 3 5 6 8 6 3 0 4-3 4-6-4-3-8-6-12-6-4 0-8 3-12 6 0 3 1 6 4 6 3 0 4.5-3 8-6Z"></path></svg>',
    description: "Learn from artists, performers, and creative professionals.",
  },
];

const testimonials = [
  {
    author: {
      name: "Rahul Deshmukh",
      role: "Tech Entrepreneur",
    },
    content: "Finding a mentor who understood my cultural background and professional aspirations was game-changing. The guidance I received through Swapnasiddhi has helped me build a successful tech startup.",
  },
  {
    author: {
      name: "Anjali Jadhav",
      role: "Healthcare Professional",
    },
    content: "The mentorship I received through this platform has been invaluable. My mentor helped me navigate complex career decisions while honoring our shared heritage and values.",
  },
  {
    author: {
      name: "Vikram Pawar",
      role: "Finance Director",
    },
    content: "As a mentor, I've found immense fulfillment in guiding the next generation. Swapnasiddhi provides a meaningful platform to connect and contribute to our community's continued success.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with gradient background */}
      <section className="relative min-h-[90vh] w-full overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-saffron-50 via-white to-gold-50">
          {/* Decorative circles */}
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-saffron-400/5 blur-3xl animate-pulse"></div>
          <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-gold-400/5 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 flex min-h-[90vh] flex-col items-center justify-center text-center py-12">
          <div className="mb-8 animate-fadeIn" style={{animationDelay: '0.3s'}}>
            <div className="relative mb-6 h-24 w-24 mx-auto overflow-hidden rounded-full bg-gradient-to-r from-saffron-400 to-gold-500 p-1 shadow-lg">
              <div className="h-full w-full rounded-full bg-gradient-to-br from-saffron-300 to-saffron-500"></div>
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-saffron-700 to-gold-700">
              Swapnasiddhi
            </h1>
          </div>

          <div className="space-y-6 max-w-2xl animate-fadeIn" style={{animationDelay: '0.6s'}}>
            <h2 className="text-2xl md:text-3xl font-semibold text-stone-800">
              Connect with Maratha Mentors
            </h2>
            <p className="text-lg text-stone-700 leading-relaxed">
              Join our community of Maratha professionals who are ready to guide you on your journey to success.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a href="/signup" className="bg-gradient-to-r from-saffron-600 to-gold-600 text-white px-6 py-3 rounded-md font-medium hover:from-saffron-700 hover:to-gold-700 transition-all shadow-md hover:shadow-lg transform hover:scale-105">
                Get Started
              </a>
              <a href="/about" className="border border-saffron-200 hover:border-saffron-300 px-6 py-3 rounded-md font-medium transition-all hover:bg-saffron-50">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <span className="text-saffron-600 text-sm uppercase tracking-wider font-medium">Our Features</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-stone-900 mb-6">Everything you need to grow</h2>
          <p className="max-w-2xl mx-auto mb-12 text-stone-700">
            Access a network of experienced mentors who can guide you through your professional journey.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 border border-saffron-100 rounded-lg shadow-sm hover:shadow-lg hover:border-saffron-200 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Matching</h3>
              <p className="text-stone-600">Find mentors that match your career goals and interests.</p>
            </div>
            <div className="p-6 border border-saffron-100 rounded-lg shadow-sm hover:shadow-lg hover:border-saffron-200 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
              <p className="text-stone-600">Learn from professionals with years of industry experience.</p>
            </div>
            <div className="p-6 border border-saffron-100 rounded-lg shadow-sm hover:shadow-lg hover:border-saffron-200 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Support</h3>
              <p className="text-stone-600">Connect with a community of like-minded individuals.</p>
            </div>
          </div>
        </div>
      </section>
        
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-saffron-500 to-gold-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to find your mentor?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-white/90">
            Join Swapnasiddhi today and take the first step towards achieving your goals.
          </p>
          <a href="/signup" className="bg-white text-saffron-700 hover:bg-stone-100 px-8 py-4 rounded-md font-medium text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            Get Started Now
          </a>
        </div>
      </section>
      

    </main>
  );
}
