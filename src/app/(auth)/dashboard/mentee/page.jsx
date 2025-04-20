export default function MenteeDashboardPage() {
  return (
    <div className="min-h-screen bg-background pb-12">
      {/* Welcome Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-saffron-500 to-gold-500 py-8">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="font-playfair text-3xl font-bold text-white">Welcome back, Amit!</h1>
            <p className="mt-2 text-saffron-50">
              Continue your learning journey with your mentors.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {/* Progress Overview */}
          <div className="col-span-full xl:col-span-1">
            <div className="rounded-xl border border-saffron-200/20 bg-white/50 p-6 backdrop-blur-sm">
              <h2 className="font-playfair text-xl font-bold text-stone-900">Learning Progress</h2>
              <div className="mt-6 space-y-4">
                {skills.map((item) => (
                  <div key={item.skill} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-stone-700">{item.skill}</span>
                      <span className="text-sm text-stone-500">{item.progress}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-stone-100">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-saffron-500 to-gold-500"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="md:col-span-2">
            <div className="rounded-xl border border-saffron-200/20 bg-white/50 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <h2 className="font-playfair text-xl font-bold text-stone-900">Upcoming Sessions</h2>
                <button className="rounded-lg bg-saffron-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-saffron-600">
                  Schedule New
                </button>
              </div>
              <div className="mt-6 space-y-4">
                {upcomingSessions.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center justify-between rounded-lg border border-saffron-100/20 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                        <img
                          src="https://i.pravatar.cc/300"
                          alt={session.mentor}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-stone-900">{session.title}</h3>
                        <p className="text-sm text-stone-500">with {session.mentor}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-stone-900">{session.date}</p>
                      <p className="text-sm text-stone-500">{session.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="col-span-full">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {quickActions.map((action) => (
                <button
                  key={action.title}
                  className="flex flex-col items-center rounded-xl border border-saffron-200/20 bg-white/50 p-6 text-center transition-all hover:border-saffron-300/30 hover:shadow-lg"
                >
                  <div className="rounded-full bg-saffron-50 p-3">
                    <div className="h-6 w-6 text-saffron-600">
                      {action.icon}
                    </div>
                  </div>
                  <h3 className="mt-4 font-medium text-stone-900">{action.title}</h3>
                  <p className="mt-1 text-sm text-stone-500">{action.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Learning Resources */}
          <div className="col-span-full">
            <div className="rounded-xl border border-saffron-200/20 bg-white/50 p-6 backdrop-blur-sm">
              <h2 className="font-playfair text-xl font-bold text-stone-900">Recommended Resources</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {resources.map((resource) => (
                  <div
                    key={resource.title}
                    className="rounded-lg border border-saffron-100/20 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium text-stone-900">{resource.title}</h3>
                        <p className="mt-1 text-sm text-stone-500">{resource.description}</p>
                      </div>
                      <span className="rounded-full bg-saffron-50 px-2 py-1 text-xs font-medium text-saffron-600">
                        {resource.type}
                      </span>
                    </div>
                    <button className="mt-4 text-sm font-medium text-saffron-600 hover:text-saffron-700">
                      Learn More →
                    </button>
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

const skills = [
  { skill: "System Design", progress: 45 },
  { skill: "Technical Interview Prep", progress: 60 },
  { skill: "Project Development", progress: 75 },
  { skill: "Communication Skills", progress: 85 }
];

const recentLearning = [
  {
    id: 1,
    title: "System Design Workshop",
    description: "Completed session on microservices architecture",
    date: "1 day ago",
    icon: "🎯"
  }
];

const upcomingSessions = [
  {
    id: 2,
    title: "Mock Interview Practice",
    date: "Tomorrow",
    time: "11:30 AM",
    mentor: "Dr. Rajesh Pawar"
  }
];

const quickActions = [
  {
    title: "Find Mentors",
    description: "Discover new mentors in your field",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "My Goals",
    description: "Track your learning objectives",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: "Resources",
    description: "Access learning materials",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "My Profile",
    description: "Update your information",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

const resources = [
  {
    title: "System Design Fundamentals",
    description: "Learn the basics of designing large-scale systems",
    type: "Course",
  },
  {
    title: "Technical Interview Guide",
    description: "Comprehensive guide for tech interviews",
    type: "Guide",
  },
  {
    title: "Project Management Essentials",
    description: "Best practices for managing technical projects",
    type: "Workshop",
  },
];