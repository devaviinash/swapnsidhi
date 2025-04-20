import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-gradient-to-b from-saffron-600 to-gold-600" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm" />
            <span className="font-playfair text-2xl font-bold">Swapnasiddhi</span>
          </Link>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Join our community and be part of a network that empowers growth and success.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
      <div className="p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="font-playfair text-2xl font-semibold tracking-tight text-stone-900">
              Create an Account
            </h1>
            <p className="text-sm text-stone-500">
              Choose your role to get started
            </p>
          </div>

          <div className="grid gap-6">
            <Link
              href="/signup/mentor"
              className="group relative overflow-hidden rounded-lg border border-saffron-200 bg-white p-6 text-left transition-colors hover:bg-saffron-50"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-saffron-100 p-3">
                  <span className="text-2xl">👨‍🏫</span>
                </div>
                <div>
                  <h3 className="font-medium text-stone-900">Join as Mentor</h3>
                  <p className="mt-1 text-sm text-stone-500">Share your expertise and guide others</p>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-saffron-500 to-gold-500 transform scale-x-0 transition-transform group-hover:scale-x-100" />
            </Link>

            <Link
              href="/signup/mentee"
              className="group relative overflow-hidden rounded-lg border border-saffron-200 bg-white p-6 text-left transition-colors hover:bg-saffron-50"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-saffron-100 p-3">
                  <span className="text-2xl">👨‍🎓</span>
                </div>
                <div>
                  <h3 className="font-medium text-stone-900">Join as Mentee</h3>
                  <p className="mt-1 text-sm text-stone-500">Connect with experienced mentors</p>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-saffron-500 to-gold-500 transform scale-x-0 transition-transform group-hover:scale-x-100" />
            </Link>
          </div>

          <p className="px-8 text-center text-sm text-stone-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-saffron-600 hover:text-saffron-700 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
