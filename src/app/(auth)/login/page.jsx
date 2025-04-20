import Link from "next/link";

export default function LoginPage() {
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
              &ldquo;Join our community of mentors and mentees to build a stronger future together.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
      <div className="p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="font-playfair text-2xl font-semibold tracking-tight text-stone-900">
              Welcome back
            </h1>
            <p className="text-sm text-stone-500">
              Choose your role to continue
            </p>
          </div>
          <div className="grid gap-6">
            <Link
              href="/login/mentor"
              className="relative flex items-center justify-center rounded-lg border border-saffron-200 bg-white px-4 py-3 text-sm font-medium text-stone-900 transition-colors hover:bg-saffron-50 hover:text-saffron-600"
            >
              <span className="absolute left-4">👨‍🏫</span>
              Continue as Mentor
            </Link>
            <Link
              href="/login/mentee"
              className="relative flex items-center justify-center rounded-lg border border-saffron-200 bg-white px-4 py-3 text-sm font-medium text-stone-900 transition-colors hover:bg-saffron-50 hover:text-saffron-600"
            >
              <span className="absolute left-4">👨‍🎓</span>
              Continue as Mentee
            </Link>
          </div>
          <p className="px-8 text-center text-sm text-stone-500">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-saffron-600 hover:text-saffron-700 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
