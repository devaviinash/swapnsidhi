'use client';

export default function MenteeDashboardPage({ params }) {
  return (
    <div className="min-h-screen bg-background pb-12">
      {/* Hero Section */}
      <div className="relative h-48 bg-gradient-to-r from-saffron-500 to-gold-500">
        <div className="absolute -bottom-16 left-4 right-4 mx-auto flex max-w-6xl items-end px-4 sm:px-6 lg:px-8">
          <div className="flex items-end space-x-5">
            <div className="h-32 w-32 overflow-hidden rounded-xl border-4 border-white bg-white shadow-lg">
              <img
                src="https://i.pravatar.cc/300?img=12"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mb-4 space-y-1">
              <h1 className="text-2xl font-bold text-white">Amit Deshmukh</h1>
              <p className="text-saffron-50">Software Engineering Student • Pune</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4 pt-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Profile & Goals */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="rounded-xl border border-saffron-200/20 bg-white/50 p-6 backdrop-blur-sm">
              <h2 className="font-playfair text-xl font-bold text-stone-900">Profile Overview</h2>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-stone-500">About Me</h3>
                  <p className="mt-1 text-stone-700">
                    Final year computer science student passionate about software development and AI. Looking to learn from experienced professionals in the tech industry.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-stone-500">Interests</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["Machine Learning", "Web Development", "Cloud Computing", "System Design"].map((tag) => (
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

            {/* Goals Card */}
            <div className="rounded-xl border border-saffron-200/20 bg-white/50 p-6 backdrop-blur-sm">
              <h2 className="font-playfair text-xl font-bold text-stone-900">My Goals</h2>
              <div className="mt-4 space-y-3">
                {goals.map((goal, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 rounded-lg border border-saffron-100/20 bg-white p-3"
                  >
                    <div className={`h-2 w-2 rounded-full ${goal.completed ? 'bg-green-500' : 'bg-saffron-300'}`} />
                    <span className="text-sm text-stone-700">{goal.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Mentors & Progress */}
          <div className="lg:col-span-2 space-y-6">
            {/* My Mentors */}
            <div className="rounded-xl border border-saffron-200/20 bg-white/50 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <h2 className="font-playfair text-xl font-bold text-stone-900">My Mentors</h2>
                <button className="rounded-lg bg-saffron-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-saffron-600">
                  Find More Mentors
                </button>
              </div>
              <div className="mt-6 grid gap-4">
                {mentors.map((mentor) => (
                  <div
                    key={mentor.name}
                    className="flex items-center justify-between rounded-lg border border-saffron-100/20 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
                        <img
                          src={mentor.avatar}
                          alt={mentor.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-stone-900">{mentor.name}</h3>
                        <p className="text-sm text-stone-500">{mentor.role}</p>
                        <p className="mt-1 text-xs text-stone-400">{mentor.sessions} sessions completed</p>
                      </div>
                    </div>
                    <button className="rounded-lg border border-saffron-200 px-4 py-2 text-sm font-medium text-saffron-600 transition-colors hover:bg-saffron-50">
                      Schedule Session
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Progress */}
            <div className="rounded-xl border border-saffron-200/20 bg-white/50 p-6 backdrop-blur-sm">
              <h2 className="font-playfair text-xl font-bold text-stone-900">Learning Progress</h2>
              <div className="mt-6 grid gap-4">
                {progress.map((item) => (
                  <div key={item.skill} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-stone-700">{item.skill}</span>
                      <span className="text-sm text-stone-500">{item.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-stone-100">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-saffron-500 to-gold-500"
                        style={{ width: `${item.level}%` }}
                      />
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

const goals = [
  { text: "Complete the system design course", completed: true },
  { text: "Build a full-stack project", completed: false },
  { text: "Learn cloud deployment", completed: false },
  { text: "Prepare for technical interviews", completed: false },
];

const mentors = [
  {
    name: "Dr. Rajesh Pawar",
    role: "Senior Technology Mentor",
    sessions: 8,
    avatar: "https://i.pravatar.cc/300?img=11",
  },
  {
    name: "Priya Sharma",
    role: "Software Architect",
    sessions: 5,
    avatar: "https://i.pravatar.cc/300?img=15",
  },
];

const progress = [
  { skill: "Web Development", level: 75 },
  { skill: "System Design", level: 45 },
  { skill: "Machine Learning", level: 30 },
  { skill: "Cloud Computing", level: 60 },
];
