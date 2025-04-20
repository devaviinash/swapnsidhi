"use client";

import { useState } from "react";
import { Button } from "./button";
import { ClientLink } from "./client-link";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        className="touch-safe p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(90deg)" : "none" }}
        >
          {isOpen ? (
            <path d="M18 6 6 18M6 6l12 12" />
          ) : (
            <path d="M4 12h16M4 6h16M4 18h16" />
          )}
        </svg>
      </Button>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-x-0 top-[64px] z-50 origin-top transform backdrop-blur-lg transition-all duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="gradient-overlay border-b border-saffron-200/20 bg-background/95 px-4 py-6 shadow-xl">
          <nav className="flex flex-col space-y-4">
            <ClientLink
              href="/"
              className="text-contrast-safe hover-feedback touch-safe flex items-center px-4 py-2 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Home
            </ClientLink>
            <ClientLink
              href="/explore"
              className="text-contrast-safe hover-feedback touch-safe flex items-center px-4 py-2 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Explore
            </ClientLink>
            <ClientLink
              href="/mentors"
              className="text-contrast-safe hover-feedback touch-safe flex items-center px-4 py-2 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Mentors
            </ClientLink>
            <div className="pt-4">
              <Button
                variant="premium"
                className="w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}