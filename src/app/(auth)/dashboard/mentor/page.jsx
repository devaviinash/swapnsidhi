export default function MentorDashboardPage() {
  return (
    <div className="min-h-screen bg-background pb-12">
      {/* Welcome Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-saffron-500 to-gold-500 py-8">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="font-playfair text-3xl font-bold text-white">Welcome back, Dr. Rajesh!</h1>
            <p className="mt-2 text-saffron-50">
              You have 3 upcoming mentoring sessions this week.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {/* Quick Actions */}
          <div className="col-span-full xl:col-span-1">
            <div className="rounded-xl border border-saffron-200/20 bg-white/50 p-6 backdrop-blur-sm">
              <h2 className="font-playfair text-xl font-bold text-stone-900">Quick Actions</h2>
              <div className="mt-4 grid gap-4">
                <button className="flex items-center rounded-lg border border-saffron-200 bg-white p-4 text-left transition-colors hover:bg-saffron-50">
                  <div className="flex-1">
                    <h3 className="font-medium text-stone-900">Schedule Session</h3>
                    <p className="text-sm text-stone-500">Set up a new mentoring session</p>
                  </div>
                  <svg className="h-5 w-5 text-saffron-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="flex items-center rounded-lg border border-saffron-200 bg-white p-4 text-left transition-colors hover:bg-saffron-50">
                  <div className="flex-1">
                    <h3 className="font-medium text-stone-900">View Requests</h3>
                    <p className="text-sm text-stone-500">Review mentorship requests</p>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-saffron-100 text-xs font-medium text-saffron-600">
                    4
                  </div>
                </button>
                <button className="flex items-center rounded-lg border border-saffron-200 bg-white p-4 text-left transition-colors hover:bg-saffron-50">
                  <div className="flex-1">
                    <h3 className="font-medium text-stone-900">Update Profile</h3>
                    <p className="text-sm text-stone-500">Edit your mentor profile</p>
                  </div>
                  <svg className="h-5 w-5 text-saffron-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Today's Schedule */}
          <div className="md:col-span-2">
            <div className="rounded-xl border border-saffron-200/20 bg-white/50 p-6 backdrop-blur-sm">
              <h2 className="font-playfair text-xl font-bold text-stone-900">Today's Schedule</h2>
              <div className="mt-4 space-y-4">
                {todaysSessions.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center justify-between rounded-lg border border-saffron-100/20 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                        <img
                          src={session.menteeAvatar}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-stone-900">{session.title}</h3>
                        <p className="text-sm text-stone-500">with {session.menteeName}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-stone-900">{session.time}</p>
                      <button className="mt-1 text-sm text-saffron-600 hover:text-saffron-700">
                        Join Call
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="col-span-full">
            <div className="rounded-xl border border-saffron-200/20 bg-white/50 p-6 backdrop-blur-sm">
              <h2 className="font-playfair text-xl font-bold text-stone-900">Recent Activities</h2>
              <div className="mt-4">
                <div className="relative">
                  <div className="absolute left-4 top-0 h-full w-px bg-saffron-100" />
                  <div className="space-y-6">
                    {activities.map((activity) => (
                      <div key={activity.id} className="relative pl-10">
                        <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-saffron-500 bg-white" />
                        <div>
                          <p className="font-medium text-stone-900">{activity.title}</p>
                          <p className="text-sm text-stone-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const todaysSessions = [
  {
    id: 1,
    title: "Career Guidance Session",
    menteeName: "Amit Deshmukh",
    menteeAvatar: "https://i.pravatar.cc/300?img=12",
    time: "2:00 PM",
  },
  {
    id: 2,
    title: "Technical Interview Prep",
    menteeName: "Priya Sharma",
    menteeAvatar: "https://i.pravatar.cc/300?img=15",
    time: "4:30 PM",
  },
];

const activities = [
  {
    id: 1,
    title: "Completed mentoring session with Rohit Patil",
    time: "1 hour ago",
  },
  {
    id: 2,
    title: "Reviewed Amit's project proposal",
    time: "3 hours ago",
  },
  {
    id: 3,
    title: "Scheduled a new session with Priya Sharma",
    time: "Yesterday at 5:30 PM",
  },
  {
    id: 4,
    title: "Posted learning resources for System Design",
    time: "Yesterday at 2:15 PM",
  },
];

const currentMentees = [
  {
    id: 1,
    name: "Priya Shah",
    field: "Software Development",
    progress: 75,
  },
  {
    id: 2,
    name: "Rahul Mehta",
    field: "Cloud Architecture",
    progress: 45,
  },
];

const upcomingMeetings = [
  {
    id: 1,
    mentee: "Priya Shah",
    date: "Today",
    time: "14:00",
  },
  {
    id: 2,
    mentee: "Rahul Mehta",
    date: "Tomorrow",
    time: "11:30",
  },
  {
    id: 3,
    mentee: "Anjali Patel",
    date: "23 Apr",
    time: "15:00",
  },
  {
    id: 4,
    mentee: "Dev Kumar",
    date: "24 Apr",
    time: "10:00",
  },
];