"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MenteeSignupPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      return;
    }

    setIsLoading(true);
    try {
      // This is where you'd normally handle the registration
      // For demo purposes, we'll simulate a signup with error handling
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      // Simulate API call
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate successful signup
          resolve({
            success: true,
            data: { message: "Signup successful" }
          });
          // To simulate error, uncomment the following:
          // reject(new Error("Internal server error occurred"));
        }, 1000);
      });

      if (response.success) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userRole', 'mentee');
        router.push('/dashboard/mentee');
      }
    } catch (err) {
      setError(err.message || "An error occurred during signup. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700" htmlFor="fullName">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                required
                className="w-full rounded-md border border-saffron-200 bg-white px-3 py-2 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:ring-offset-2"
              />
            </div>
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
                placeholder="Create a password"
                required
                className="w-full rounded-md border border-saffron-200 bg-white px-3 py-2 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:ring-offset-2"
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700" htmlFor="interests">
                Areas of Interest
              </label>
              <select
                id="interests"
                required
                className="w-full rounded-md border border-saffron-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:ring-offset-2"
              >
                <option value="">Select your primary interest</option>
                <option value="technology">Technology</option>
                <option value="business">Business</option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
                <option value="law">Law</option>
                <option value="arts">Arts</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700" htmlFor="education">
                Current Education/Career Stage
              </label>
              <select
                id="education"
                required
                className="w-full rounded-md border border-saffron-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:ring-offset-2"
              >
                <option value="">Select your current stage</option>
                <option value="student">Student</option>
                <option value="fresh-graduate">Fresh Graduate</option>
                <option value="early-career">Early Career Professional</option>
                <option value="mid-career">Mid Career Professional</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700" htmlFor="location">
                Location
              </label>
              <input
                id="location"
                type="text"
                placeholder="Your city"
                required
                className="w-full rounded-md border border-saffron-200 bg-white px-3 py-2 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:ring-offset-2"
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700" htmlFor="goals">
                Career Goals
              </label>
              <textarea
                id="goals"
                rows={4}
                placeholder="What are your career aspirations and what do you hope to achieve through mentorship?"
                required
                className="w-full rounded-md border border-saffron-200 bg-white px-3 py-2 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:ring-offset-2"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700" htmlFor="expectations">
                Mentorship Expectations
              </label>
              <select
                id="expectations"
                required
                className="w-full rounded-md border border-saffron-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:ring-offset-2"
              >
                <option value="">What type of mentorship are you seeking?</option>
                <option value="career-guidance">Career Guidance</option>
                <option value="skill-development">Skill Development</option>
                <option value="networking">Professional Networking</option>
                <option value="industry-insights">Industry Insights</option>
                <option value="entrepreneurship">Entrepreneurship Guidance</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <input
                id="terms"
                type="checkbox"
                required
                className="h-4 w-4 rounded border-saffron-200 text-saffron-600 focus:ring-saffron-500"
              />
              <label className="text-sm text-stone-500" htmlFor="terms">
                I agree to the{" "}
                <Link href="/terms" className="text-saffron-600 hover:text-saffron-700 hover:underline">
                  terms and conditions
                </Link>
              </label>
            </div>
          </>
        );
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
              &ldquo;Take the first step towards your professional growth with expert guidance.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
      <div className="p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="font-playfair text-2xl font-semibold tracking-tight text-stone-900">
              Sign up as Mentee
            </h1>
            <p className="text-sm text-stone-500">
              Step {currentStep} of 3: {currentStep === 1 ? "Basic Information" : currentStep === 2 ? "Professional Profile" : "Goals & Expectations"}
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
            {renderStep()}
            <div className="flex items-center justify-between">
              {currentStep > 1 && (
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] hover:bg-stone-100/50 text-stone-700 hover:text-stone-900 px-4 py-2"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                className={`${currentStep < 3 ? 'ml-auto' : 'w-full'} bg-gradient-to-r from-saffron-500 to-gold-500 text-white px-4 py-2 rounded-md shadow-sm hover:shadow-md transition-all`}
                disabled={isLoading}
              >
                {currentStep === 3 ? (isLoading ? "Creating account..." : "Create account") : "Next"}
              </button>
            </div>
          </form>

          <p className="px-8 text-center text-sm text-stone-500">
            Already have an account?{" "}
            <Link
              href="/login/mentee"
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