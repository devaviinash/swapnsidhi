export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-playfair text-4xl font-bold text-stone-900">Privacy Policy</h1>
          <p className="mt-4 text-stone-600">
            Last updated: April 20, 2025
          </p>

          <div className="mt-8 space-y-8">
            {sections.map((section) => (
              <section key={section.title} className="rounded-xl border border-saffron-200/20 bg-white/50 p-6 backdrop-blur-sm">
                <h2 className="font-playfair text-xl font-bold text-stone-900">{section.title}</h2>
                <div className="mt-4 space-y-4 text-stone-600">
                  {section.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul className="ml-6 list-disc space-y-2">
                      {section.bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}

            <section className="rounded-xl border border-saffron-200/20 bg-white/50 p-6 backdrop-blur-sm">
              <h2 className="font-playfair text-xl font-bold text-stone-900">Contact Us</h2>
              <p className="mt-4 text-stone-600">
                If you have any questions about this Privacy Policy, please contact us at:{" "}
                <a
                  href="mailto:privacy@swapnasiddhi.com"
                  className="text-saffron-600 hover:text-saffron-700"
                >
                  privacy@swapnasiddhi.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

const sections = [
  {
    title: "Introduction",
    content: [
      "At Swapnasiddhi, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.",
      "Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the platform.",
    ],
  },
  {
    title: "Information We Collect",
    content: ["We collect information that you provide directly to us when using our platform, including:"],
    bullets: [
      "Personal identification information (Name, email address, phone number)",
      "Professional information (Education, work experience, skills)",
      "Profile information (Bio, profile picture)",
      "Communications between mentors and mentees",
      "Usage data and platform interaction information",
    ],
  },
  {
    title: "How We Use Your Information",
    content: ["We use the information we collect for various purposes, including:"],
    bullets: [
      "To facilitate matches between mentors and mentees",
      "To provide and maintain our platform services",
      "To notify you about changes to our platform",
      "To provide customer support",
      "To gather analysis or valuable information to improve our platform",
      "To monitor the usage of our platform",
      "To detect, prevent and address technical issues",
    ],
  },
  {
    title: "Information Sharing",
    content: [
      "We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners and trusted affiliates.",
      "We may disclose your personal information if required to do so by law or if you violate our Terms of Service.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.",
      "While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.",
    ],
  },
  {
    title: "Your Data Protection Rights",
    content: ["Under data protection laws, you have rights including:"],
    bullets: [
      "The right to access your personal data",
      "The right to correct your personal data",
      "The right to request deletion of your personal data",
      "The right to restrict processing of your personal data",
      "The right to object to processing of your personal data",
      "The right to data portability",
    ],
  },
  {
    title: "Cookies and Tracking",
    content: [
      "We use cookies and similar tracking technologies to track activity on our platform and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.",
      "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our platform.",
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "Our platform is not intended for use by children under the age of 18, and we do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us.",
    ],
  },
  {
    title: "Changes to This Privacy Policy",
    content: [
      "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last updated' date.",
      "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
    ],
  },
];