'use client';

import { Search } from "lucide-react";

export default function ExplorePage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-saffron/5 blur-3xl"></div>
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-saffron/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="font-playfair text-4xl font-bold">
              Explore Mentors
            </h1>
            <p className="max-w-2xl text-foreground/70">
              Find and connect with experienced Maratha mentors in your field
              who can guide you on your professional journey
            </p>
          </div>

          {/* Search and Filters */}
          <div className="relative overflow-hidden rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-saffron/5 blur-3xl"></div>
            <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-end">
              <div className="flex-1 space-y-2">
                <label htmlFor="search" className="text-sm font-medium">
                  Search Mentors
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50" />
                  <input
                    id="search"
                    type="text"
                    placeholder="Search by name, expertise, or keywords..."
                    className="w-full rounded-md border border-white/10 bg-white/5 px-9 py-2.5 text-sm text-foreground backdrop-blur-sm placeholder:text-foreground/50 focus:border-saffron/50 focus:outline-none focus:ring-1 focus:ring-saffron/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 md:w-auto md:grid-cols-3">
                <div className="space-y-2">
                  <label htmlFor="industry" className="text-sm font-medium">
                    Industry
                  </label>
                  <select
                    id="industry"
                    className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-foreground backdrop-blur-sm focus:border-saffron/50 focus:outline-none focus:ring-1 focus:ring-saffron/50"
                  >
                    <option value="">All Industries</option>
                    <option value="tech">Technology</option>
                    <option value="law">Law</option>
                    <option value="medicine">Medicine</option>
                    <option value="government">Government</option>
                    <option value="business">Business</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="experience" className="text-sm font-medium">
                    Experience
                  </label>
                  <select
                    id="experience"
                    className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-foreground backdrop-blur-sm focus:border-saffron/50 focus:outline-none focus:ring-1 focus:ring-saffron/50"
                  >
                    <option value="">Any Experience</option>
                    <option value="entry">Entry Level</option>
                    <option value="mid">Mid Level</option>
                    <option value="senior">Senior Level</option>
                    <option value="executive">Executive</option>
                  </select>
                </div>

                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="location" className="text-sm font-medium">
                    Location
                  </label>
                  <select
                    id="location"
                    className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-foreground backdrop-blur-sm focus:border-saffron/50 focus:outline-none focus:ring-1 focus:ring-saffron/50"
                  >
                    <option value="">All Locations</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="pune">Pune</option>
                    <option value="nagpur">Nagpur</option>
                    <option value="remote">Remote Only</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Mentor Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mentors.map((mentor) => (
              <a
                key={mentor.id}
                href={`/profile/mentor/${mentor.id}`}
                className="group relative overflow-hidden rounded-xl border border-saffron-200/20 bg-white/5 p-1 backdrop-blur-sm transition-all hover:border-saffron-300/30 hover:shadow-lg hover:shadow-saffron-500/10"
              >
                {/* Card content wrapper */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
                  {/* Cover Image */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
                    <img
                      src={mentor.coverImage}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    {/* Top Section */}
                    <div className="flex items-start justify-between">
                      <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white/20 shadow-lg">
                        <img
                          src={mentor.avatar}
                          alt={mentor.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm">
                        {mentor.industry}
                      </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
                        <p className="text-sm text-white/80">{mentor.location} • {mentor.experience}+ years</p>
                      </div>
                      <p className="line-clamp-2 text-sm text-white/70">{mentor.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        {mentor.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-sm backdrop-blur-sm"
              aria-label="Previous page"
            >
              &laquo;
            </button>
            <button
              className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-saffron text-sm text-white"
              aria-label="Page 1"
            >
              1
            </button>
            <button
              className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-sm backdrop-blur-sm"
              aria-label="Page 2"
            >
              2
            </button>
            <button
              className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-sm backdrop-blur-sm"
              aria-label="Page 3"
            >
              3
            </button>
            <button
              className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-sm backdrop-blur-sm"
              aria-label="Next page"
            >
              &raquo;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Mock data for mentors
const mentors = [
  {
    id: "1",
    name: "Arjun Deshmukh",
    industry: "Technology",
    bio: "Senior Software Engineer with 8+ years of experience building scalable web applications and mentoring junior developers.",
    experience: 8,
    location: "Mumbai",
    tags: ["Software Development", "Web", "Leadership"],
    avatar: "https://i.pravatar.cc/150?img=1",
    coverImage:
      "https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: "2",
    name: "Priya Jadhav",
    industry: "Medicine",
    bio: "Cardiologist with a focus on preventative care and 12 years of clinical experience at leading hospitals.",
    experience: 12,
    location: "Pune",
    tags: ["Cardiology", "Research", "Healthcare"],
    avatar: "https://i.pravatar.cc/150?img=5",
    coverImage:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: "3",
    name: "Vijay Patil",
    industry: "Law",
    bio: "Corporate lawyer specializing in business law, startups, and intellectual property with extensive experience across diverse industries.",
    experience: 15,
    location: "Mumbai",
    tags: ["Corporate Law", "IP", "Startups"],
    avatar: "https://i.pravatar.cc/150?img=3",
    coverImage:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: "4",
    name: "Neha Shinde",
    industry: "Government",
    bio: "Former state government official with expertise in public policy, administration, and government relations.",
    experience: 20,
    location: "Nagpur",
    tags: ["Public Policy", "Administration", "Leadership"],
    avatar: "https://i.pravatar.cc/150?img=9",
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: "5",
    name: "Rohit Pawar",
    industry: "Business",
    bio: "Serial entrepreneur who has founded three successful startups and mentors aspiring business owners in the tech sector.",
    experience: 10,
    location: "Pune",
    tags: ["Entrepreneurship", "Startups", "E-commerce"],
    avatar: "https://i.pravatar.cc/150?img=4",
    coverImage:
      "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: "6",
    name: "Ananya More",
    industry: "Technology",
    bio: "Machine learning engineer and AI researcher focusing on ethical AI development and data science with practical business applications.",
    experience: 6,
    location: "Remote",
    tags: ["AI", "Machine Learning", "Data Science"],
    avatar: "https://i.pravatar.cc/150?img=10",
    coverImage:
      "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
];
