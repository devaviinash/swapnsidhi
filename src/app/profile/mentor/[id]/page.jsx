'use client';

export default function MentorProfile({ params }) {
  return (
    <div className="min-h-screen bg-background pb-12">
      {/* Hero Section */}
      <div className="relative h-48 bg-gradient-to-r from-saffron-500 to-gold-500">
        <div className="absolute -bottom-16 left-4 right-4 mx-auto flex max-w-6xl items-end px-4 sm:px-6 lg:px-8">
          <div className="flex items-end space-x-5">
            <div className="h-32 w-32 overflow-hidden rounded-xl border-4 border-white bg-white shadow-lg">
              <img
                src="https://i.pravatar.cc/300?img=11"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mb-4 space-y-1">
              <h1 className="text-2xl font-bold text-stone-900">Dr. Rajesh Pawar</h1>
              <p className="text-stone-700">Senior Technology Mentor • Mumbai</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4 pt-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Profile & Stats */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="rounded-xl border border-saffron-200/20 bg-white/50 p-6 backdrop-blur-sm">
              <h2 className="font-playfair text-xl font-bold text-stone-900">Profile Overview</h2>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-stone-500">Bio</h3>
                  <p className="mt-1 text-stone-700">
                    Technology leader with 15+ years of experience in software development and team management. Passionate about mentoring the next generation of tech talent.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-stone-500">Expertise</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["Software Architecture", "Leadership", "Cloud Computing", "System Design", "Team Management"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-saffron-50 px-3 py-1 text-xs text-saffron-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="rounded-xl border border-saffron-200/20 bg-white/50 p-6 backdrop-blur-sm">
              <h2 className="font-playfair text-xl font-bold text-stone-900">Statistics</h2>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-saffron-50 p-4 text-center">
                  <p className="text-2xl font-bold text-saffron-700">12</p>
                  <p className="text-sm text-stone-600">Active Mentees</p>
                </div>
                <div className="rounded-lg bg-saffron-50 p-4 text-center">
                  <p className="text-2xl font-bold text-saffron-700">48</p>
                  <p className="text-sm text-stone-600">Sessions Completed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Mentees & Activities */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Mentees */}
            <div className="rounded-xl border border-saffron-200/20 bg-white/50 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <h2 className="font-playfair text-xl font-bold text-stone-900">Active Mentees</h2>
                <button className="rounded-lg bg-saffron-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-saffron-600">
                  View All
                </button>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-4 rounded-lg border border-saffron-100/20 bg-white p-4 shadow-sm"
                  >
                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                      <img
                        src={`https://i.pravatar.cc/100?img=${20 + i}`}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-stone-900">Mentee Name</p>
                      <p className="truncate text-sm text-stone-500">Technology • 3 sessions completed</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Sessions */}
            <div className="rounded-xl border border-saffron-200/20 bg-white/50 p-6 backdrop-blur-sm">
              <h2 className="font-playfair text-xl font-bold text-stone-900">Upcoming Sessions</h2>
              <div className="mt-6 space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-lg border border-saffron-100/20 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                        <img
                          src={`https://i.pravatar.cc/100?img=${30 + i}`}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-stone-900">Career Guidance Session</p>
                        <p className="text-sm text-stone-500">with Mentee Name</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-stone-900">Tomorrow</p>
                      <p className="text-sm text-stone-500">10:00 AM</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
