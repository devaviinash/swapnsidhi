"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ClientLink } from "./client-link";
import { Button } from "./button";

export function AuthHeader() {
  const router = useRouter();
  const [userRole, setUserRole] = useState<"mentor" | "mentee" | null>(null);

  useEffect(() => {
    const role = localStorage.getItem("userRole") as "mentor" | "mentee" | null;
    setUserRole(role);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userRole");
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-saffron-200/20 bg-background/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <ClientLink href={`/dashboard/${userRole}`} className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-saffron-400 to-gold-500 shadow-sm" />
          <span className="font-playfair text-xl font-bold text-stone-900">
            Swapnasiddhi
          </span>
        </ClientLink>

        <nav className="hidden md:flex md:items-center md:space-x-6">
          <ClientLink
            href={`/profile/${userRole}/me`}
            className="text-stone-700 hover:text-saffron-600 transition-colors"
          >
            Profile
          </ClientLink>
          {userRole === "mentor" ? (
            <>
              <ClientLink
                href="/dashboard/mentor/sessions"
                className="text-stone-700 hover:text-saffron-600 transition-colors"
              >
                My Sessions
              </ClientLink>
              <ClientLink
                href="/dashboard/mentor/mentees"
                className="text-stone-700 hover:text-saffron-600 transition-colors"
              >
                My Mentees
              </ClientLink>
            </>
          ) : (
            <>
              <ClientLink
                href="/explore"
                className="text-stone-700 hover:text-saffron-600 transition-colors"
              >
                Find Mentors
              </ClientLink>
              <ClientLink
                href="/dashboard/mentee/sessions"
                className="text-stone-700 hover:text-saffron-600 transition-colors"
              >
                My Sessions
              </ClientLink>
            </>
          )}
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-stone-700 hover:text-saffron-600"
            onClick={handleLogout}
          >
            Sign Out
          </Button>
          <div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-saffron-200">
            <img
              src={`https://i.pravatar.cc/100?img=${userRole === "mentor" ? "11" : "12"}`}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}