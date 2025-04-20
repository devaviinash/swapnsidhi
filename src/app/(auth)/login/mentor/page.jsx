"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MentorLoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // This is where you'd normally handle the authentication
    // For demo purposes, we'll just simulate a login
    setTimeout(() => {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userRole', 'mentor');
      router.push('/dashboard/mentor');
    }, 1000);
  };

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
              &ldquo;Share your knowledge and experience to help shape the next generation of leaders.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
      <div className="p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="font-playfair text-2xl font-semibold tracking-tight text-stone-900">
              Sign in as Mentor
            </h1>
            <p className="text-sm text-stone-500">
              Enter your credentials to continue
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-md border border-saffron-200 bg-white px-3 py-2 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:ring-offset-2"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                className="w-full rounded-md border border-saffron-200 bg-white px-3 py-2 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:ring-offset-2"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-saffron-500 to-gold-500 text-white px-4 py-2 rounded-md shadow-sm hover:shadow-md transition-all"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </form>
          <div className="space-y-4">
            <p className="text-center text-sm text-stone-500">
              <Link href="/forgot-password" className="text-saffron-600 hover:text-saffron-700 hover:underline">
                Forgot your password?
              </Link>
            </p>
            <p className="text-center text-sm text-stone-500">
              Not a mentor?{" "}
              <Link href="/login" className="text-saffron-600 hover:text-saffron-700 hover:underline">
                Go back
              </Link>
            </p>
          </div>
          <p className="px-8 text-center text-sm text-stone-500">
            Don&apos;t have an account?{" "}
            <Link href="/signup/mentor" className="text-saffron-600 hover:text-saffron-700 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}