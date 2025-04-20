export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-playfair text-4xl font-bold text-stone-900">Terms of Service</h1>
          <div className="mt-8 space-y-8">
            {sections.map((section) => (
              <section key={section.title} className="rounded-xl border border-saffron-200/20 bg-white/50 p-6 backdrop-blur-sm">
                <h2 className="font-playfair text-xl font-bold text-stone-900">{section.title}</h2>
                <div className="mt-4 space-y-4 text-stone-600">
                  {section.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            <section className="rounded-xl border border-saffron-200/20 bg-white/50 p-6 backdrop-blur-sm">
              <h2 className="font-playfair text-xl font-bold text-stone-900">Contact Us</h2>
              <p className="mt-4 text-stone-600">
                If you have any questions about these Terms, please contact us at:{" "}
                <a
                  href="mailto:legal@swapnasiddhi.com"
                  className="text-saffron-600 hover:text-saffron-700"
                >
                  legal@swapnasiddhi.com
                </a>
              </p>
            </section>

            <div className="mt-8 text-center text-sm text-stone-500">
              Last updated: April 20, 2025
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing and using Swapnasiddhi's platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this platform.",
      "We reserve the right to modify these terms at any time, and we'll always post the most current version on our website.",
    ],
  },
  {
    title: "2. Platform Usage",
    content: [
      "Swapnasiddhi provides a platform for connecting mentors and mentees within the Maratha community. Users must be at least 18 years old to create an account.",
      "You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account.",
    ],
  },
  {
    title: "3. User Responsibilities",
    content: [
      "Users agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.",
      "Users agree not to engage in any behavior that may harass, intimidate, or harm other users.",
    ],
  },
  {
    title: "4. Mentor-Mentee Relationships",
    content: [
      "Swapnasiddhi facilitates connections between mentors and mentees but is not responsible for the actions, content, information, or data of users.",
      "Mentors and mentees are expected to maintain professional relationships and adhere to our community guidelines.",
    ],
  },
  {
    title: "5. Intellectual Property",
    content: [
      "The platform, including its original content, features, and functionality, is owned by Swapnasiddhi and is protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.",
    ],
  },
  {
    title: "6. Privacy",
    content: [
      "Your use of Swapnasiddhi is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the platform and informs users of our data collection practices.",
    ],
  },
  {
    title: "7. Termination",
    content: [
      "We reserve the right to terminate or suspend access to our platform immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.",
    ],
  },
  {
    title: "8. Disclaimer",
    content: [
      "The platform is provided on an 'AS IS' and 'AS AVAILABLE' basis. Swapnasiddhi makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
    ],
  },
];