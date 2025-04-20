'use client';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-saffron-50 via-white to-gold-50">
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-saffron-400/5 blur-3xl animate-pulse" />
          <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-gold-400/5 blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-playfair text-4xl font-bold md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-saffron-700 to-gold-700 animate-fadeIn" style={{animationDelay: '0.3s'}}>
              Our Mission
            </h1>
            <p className="mt-6 text-lg text-stone-600">
              Swapnasiddhi is dedicated to empowering the Maratha community by connecting aspiring professionals with experienced mentors, fostering growth, and preserving our rich cultural heritage while building a stronger future.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-playfair text-3xl font-bold text-stone-900">Our Vision</h2>
              <p className="mt-4 text-stone-600">
                We envision a future where every member of the Maratha community has access to mentorship, guidance, and opportunities to achieve their full potential. Through technology and community connections, we aim to create a powerful network that uplifts and supports one another.
              </p>
            </div>
            <div>
              <h2 className="font-playfair text-3xl font-bold text-stone-900">Our Values</h2>
              <div className="mt-4 space-y-4">
                {values.map((value) => (
                  <div key={value.title} className="rounded-lg border border-saffron-200/20 bg-white/50 p-4 backdrop-blur-sm">
                    <h3 className="font-playfair text-lg font-semibold text-stone-900">{value.title}</h3>
                    <p className="mt-1 text-stone-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-playfair text-3xl font-bold text-stone-900">Our Team</h2>
            <p className="mt-4 text-stone-600">
              We are a dedicated team of professionals committed to building bridges between experienced mentors and ambitious mentees within the Maratha community.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-xl border border-saffron-200/20 bg-white/50 p-6 backdrop-blur-sm transition-all hover:border-saffron-300/30 hover:shadow-lg"
              >
                <div className="aspect-square overflow-hidden rounded-full border-2 border-saffron-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-playfair text-xl font-bold text-stone-900">{member.name}</h3>
                  <p className="mt-1 text-stone-600">{member.role}</p>
                  <p className="mt-4 text-sm text-stone-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl border border-saffron-200/20 bg-white/50 p-8 text-center backdrop-blur-sm">
            <h2 className="font-playfair text-3xl font-bold text-stone-900">Get in Touch</h2>
            <p className="mt-4 text-stone-600">
              Have questions about Swapnasiddhi? We'd love to hear from you and help you on your journey.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <a
                href="mailto:contact@swapnasiddhi.com"
                className="rounded-full bg-saffron-500 px-6 py-3 text-white transition-all hover:bg-saffron-600"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

const values = [
  {
    title: "Community First",
    description: "We prioritize the needs and aspirations of the Maratha community in everything we do.",
  },
  {
    title: "Excellence",
    description: "We strive for excellence in our platform and encourage the same in our mentors and mentees.",
  },
  {
    title: "Cultural Pride",
    description: "We celebrate and preserve our rich Maratha heritage while embracing modern opportunities.",
  },
  {
    title: "Empowerment",
    description: "We believe in empowering individuals through knowledge sharing and meaningful connections.",
  },
];

const team = [
  {
    name: "Rajendra Bhosale",
    role: "Founder & CEO",
    bio: "With 15+ years in technology and community building, Rajendra leads our mission to connect and empower the Maratha community.",
    image: "https://i.pravatar.cc/300?img=11",
  },
  {
    name: "Deepika Patil",
    role: "Head of Mentorship",
    bio: "A veteran educator and community leader, Deepika ensures the quality and effectiveness of our mentorship programs.",
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    name: "Amol Jadhav",
    role: "Technology Director",
    bio: "Tech innovator with a passion for creating platforms that bring communities together and foster growth.",
    image: "https://i.pravatar.cc/300?img=13",
  },
];