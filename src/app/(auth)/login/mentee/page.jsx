"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MenteeLoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors
    setIsLoading(true);

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      // Simulate API call
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          // For demo, check if fields are filled
          if (!data.email || !data.password) {
            reject(new Error("Please fill in all fields"));
            return;
          }
          resolve({
            success: true,
            data: { message: "Login successful" }
          });
        }, 1000);
      });

      if (response.success) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userRole', 'mentee');
        router.push('/dashboard/mentee');
      }
    } catch (err) {
      setError(err.message || "An error occurred during login. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
              &ldquo;Take the next step in your career journey with guidance from experienced mentors.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
      <div className="p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="font-playfair text-2xl font-semibold tracking-tight text-stone-900">
              Sign in as Mentee
            </h1>
            <p className="text-sm text-stone-500">
              Enter your credentials to continue
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-red-800">{error}</p>
                  </div>
                </div>
              </div>
            )}
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
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
                name="password"
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
              Not a mentee?{" "}
              <Link href="/login" className="text-saffron-600 hover:text-saffron-700 hover:underline">
                Go back
              </Link>
            </p>
          </div>
          <p className="px-8 text-center text-sm text-stone-500">
            Don&apos;t have an account?{" "}
            <Link href="/signup/mentee" className="text-saffron-600 hover:text-saffron-700 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}