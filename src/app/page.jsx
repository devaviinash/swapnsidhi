'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import Image from 'next/image';

const categories = [
  {
    name: "Business",
    slug: "business",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>',
    description: "Learn from experienced entrepreneurs and business executives.",
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>',
    description: "Connect with medical professionals and healthcare innovators.",
  },
  {
    name: "Education",
    slug: "education",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
    description: "Get guidance from educators and academic professionals.",
  },
  {
    name: "Law",
    slug: "law",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m17 11 2-2V4h-3"></path><path d="M14 10V4h-3"></path><path d="M5 10V4h3"></path><path d="M5 15h14"></path><rect width="18" height="4" x="3" y="15" rx="1"></rect><path d="M5 19v3"></path><path d="M19 22v-3"></path><path d="M9 22h6"></path></svg>',
    description: "Connect with legal experts and judiciary professionals.",
  },
  {
    name: "Arts",
    slug: "arts",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="10.5" r="2.5"></circle><circle cx="8.5" cy="7.5" r="2.5"></circle><circle cx="6.5" cy="12.5" r="2.5"></circle><path d="M12 13c3.5 3 5 6 8 6 3 0 4-3 4-6-4-3-8-6-12-6-4 0-8 3-12 6 0 3 1 6 4 6 3 0 4.5-3 8-6Z"></path></svg>',
    description: "Learn from artists, performers, and creative professionals.",
  },
];

const testimonials = [
  {
    author: {
      name: "Rahul Deshmukh",
      role: "Tech Entrepreneur",
    },
    content: "Finding a mentor who understood my cultural background and professional aspirations was game-changing. The guidance I received through Swapnasiddhi has helped me build a successful tech startup.",
  },
  {
    author: {
      name: "Anjali Jadhav",
      role: "Healthcare Professional",
    },
    content: "The mentorship I received through this platform has been invaluable. My mentor helped me navigate complex career decisions while honoring our shared heritage and values.",
  },
  {
    author: {
      name: "Vikram Pawar",
      role: "Finance Director",
    },
    content: "As a mentor, I've found immense fulfillment in guiding the next generation. Swapnasiddhi provides a meaningful platform to connect and contribute to our community's continued success.",
  },
];

export default function Home() {
  // Animation state
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const testimonialsRef = useRef(null);
  
  // Scroll animations
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  // Check if sections are in view
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });
  const featuresInView = useInView(featuresRef, { once: false, amount: 0.3 });
  const testimonialsInView = useInView(testimonialsRef, { once: false, amount: 0.3 });
  
  // Parallax effect for hero section
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.5]);
  
  // Set loaded state on mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <main className="min-h-screen">
      {/* Hero Section with advanced animations */}
      <motion.section 
        ref={heroRef}
        className="relative min-h-[100vh] w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated background with particles */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-saffron-50 via-white to-gold-50"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          {/* Premium background pattern */}
          <div className="absolute inset-0 bg-repeat opacity-70" style={{ backgroundImage: 'url(/images/premium-pattern.svg)' }}></div>
          {/* Animated decorative elements */}
          <motion.div 
            className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-saffron-400/10 blur-3xl" 
            animate={{ 
              scale: [1, 1.2, 1], 
              opacity: [0.5, 0.8, 0.5] 
            }} 
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl" 
            animate={{ 
              scale: [1.2, 1, 1.2], 
              opacity: [0.5, 0.8, 0.5] 
            }} 
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut", 
              delay: 1 
            }}
          />
          
          {/* Additional floating elements */}
          {[...Array(8)].map((_, i) => (
            <motion.div 
              key={i}
              className={`absolute h-${Math.floor(Math.random() * 20) + 10} w-${Math.floor(Math.random() * 20) + 10} rounded-full ${i % 2 === 0 ? 'bg-saffron-300/5' : 'bg-gold-300/5'} blur-2xl`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{ 
                y: [Math.random() * 50, Math.random() * -50, Math.random() * 50],
                x: [Math.random() * 50, Math.random() * -50, Math.random() * 50],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ 
                duration: 15 + i * 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          ))}
        </motion.div>
        
        {/* Content with staggered animations */}
        <div className="relative z-10 container mx-auto px-4 flex min-h-[100vh] flex-col items-center justify-center text-center py-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <motion.div 
              className="relative mb-6 h-28 w-28 mx-auto overflow-hidden rounded-full bg-gradient-to-r from-saffron-400 to-gold-500 p-1 shadow-xl"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="h-full w-full rounded-full bg-gradient-to-br from-saffron-300 to-saffron-500"
                animate={{ 
                  background: [
                    "linear-gradient(to bottom right, #fdba74, #f97316)",
                    "linear-gradient(to bottom right, #fde047, #eab308)",
                    "linear-gradient(to bottom right, #fdba74, #f97316)"
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            
            <motion.h1 
              className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-saffron-700 to-gold-700">Swapnas</span>
              <span className="text-gold-500 relative inline-block">
                i
                <motion.span 
                  className="absolute -top-1 left-0 w-full h-full text-saffron-500"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  i
                </motion.span>
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-saffron-700 to-gold-700">ddh</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold-600 to-saffron-600">i</span>
            </motion.h1>
          </motion.div>

          <motion.div 
            className="space-y-6 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-stone-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: heroInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Connect with Maratha Mentors
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-stone-700 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: heroInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              Join our community of Maratha professionals who are ready to guide you on your journey to success.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <motion.a 
                href="/signup" 
                className="bg-gradient-to-r from-saffron-600 to-gold-600 text-white px-8 py-4 rounded-md font-medium shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.a>
              
              <motion.a 
                href="/about" 
                className="border-2 border-saffron-300 hover:border-saffron-400 px-8 py-4 rounded-md font-medium transition-all hover:bg-saffron-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : -20 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.div 
              className="w-8 h-14 border-2 border-saffron-400 rounded-full flex justify-center p-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                className="w-1 h-3 bg-saffron-500 rounded-full"
                animate={{ y: [0, 6, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Progress bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron-500 to-gold-500 z-50 origin-left"
          style={{ scaleX }}
        />
      </motion.section>

      {/* Features Section with animated cards */}
      <motion.section 
        ref={featuresRef}
        className="py-24 relative overflow-hidden"
      >
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-saffron-50/30 to-white -z-10"></div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-20 right-0 w-96 h-96 rounded-full bg-gold-200/10 blur-3xl -z-10"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-saffron-200/10 blur-3xl -z-10"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.span 
            className="inline-block text-saffron-600 text-sm uppercase tracking-wider font-medium bg-saffron-100/50 px-4 py-1 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            Our Features
          </motion.span>
          
          <motion.h2 
            className="mt-4 text-4xl md:text-5xl font-bold text-stone-900 mb-6 font-playfair"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-saffron-700 to-gold-700">
              Everything you need to grow
            </span>
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto mb-16 text-stone-700 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Access a network of experienced mentors who can guide you through your professional journey.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <motion.div 
              className="p-8 rounded-2xl bg-white border-2 border-saffron-100 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 40 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              whileHover={{ y: -8 }}
            >
              {/* Background gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-saffron-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 6 }}
              />
              
              {/* Icon with animation */}
              <motion.div 
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-saffron-100 to-saffron-200 text-saffron-600 shadow-md group-hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </motion.div>
              
              <motion.h3 
                className="text-2xl font-semibold mb-4 text-stone-900 group-hover:text-saffron-700 transition-colors duration-300"
                whileHover={{ scale: 1.03 }}
              >
                Personalized Matching
              </motion.h3>
              
              <p className="text-stone-600 text-lg">
                Find mentors that match your career goals and interests with our intelligent matching algorithm.
              </p>
              
              {/* Decorative element */}
              <motion.div 
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-saffron-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              className="p-8 rounded-2xl bg-white border-2 border-saffron-100 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 40 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              whileHover={{ y: -8 }}
            >
              {/* Background gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-gold-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: -6 }}
              />
              
              {/* Icon with animation */}
              <motion.div 
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-gold-100 to-gold-200 text-gold-600 shadow-md group-hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              </motion.div>
              
              <motion.h3 
                className="text-2xl font-semibold mb-4 text-stone-900 group-hover:text-gold-700 transition-colors duration-300"
                whileHover={{ scale: 1.03 }}
              >
                Expert Guidance
              </motion.h3>
              
              <p className="text-stone-600 text-lg">
                Learn from professionals with years of industry experience through structured mentorship programs.
              </p>
              
              {/* Decorative element */}
              <motion.div 
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gold-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </motion.div>
            
            {/* Card 3 */}
            <motion.div 
              className="p-8 rounded-2xl bg-white border-2 border-saffron-100 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 40 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              whileHover={{ y: -8 }}
            >
              {/* Background gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-saffron-50 to-gold-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 6 }}
              />
              
              {/* Icon with animation */}
              <motion.div 
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-saffron-100 to-gold-200 text-saffron-600 shadow-md group-hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </motion.div>
              
              <motion.h3 
                className="text-2xl font-semibold mb-4 text-stone-900 group-hover:text-saffron-700 transition-colors duration-300"
                whileHover={{ scale: 1.03 }}
              >
                Community Support
              </motion.h3>
              
              <p className="text-stone-600 text-lg">
                Connect with a vibrant community of like-minded individuals who share your cultural heritage and aspirations.
              </p>
              
              {/* Decorative element */}
              <motion.div 
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-saffron-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </motion.div>
          </div>
          
          {/* Additional feature button */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <motion.a 
              href="/features"
              className="inline-flex items-center gap-2 text-saffron-600 font-medium hover:text-saffron-700 transition-colors px-6 py-2 rounded-full border-2 border-saffron-200 hover:border-saffron-300 bg-white hover:bg-saffron-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore all features
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
        
      {/* CTA Section with advanced animations */}
      <motion.section 
        ref={testimonialsRef}
        className="py-24 relative overflow-hidden"
      >
        {/* Animated background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-saffron-500 to-gold-500 -z-10"
          initial={{ opacity: 0.9 }}
          animate={{ 
            opacity: [0.9, 1, 0.9],
            background: [
              "linear-gradient(to right, #f97316, #eab308)",
              "linear-gradient(to right, #ea580c, #ca8a04)",
              "linear-gradient(to right, #f97316, #eab308)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Animated particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div 
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: 'blur(8px)'
              }}
              animate={{ 
                y: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
                x: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.5, 1]
              }}
              transition={{ 
                duration: 20 + i * 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          ))}
        </motion.div>
        
        {/* Content with staggered animations */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: testimonialsInView ? 1 : 0, y: testimonialsInView ? 0 : 40 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white font-playfair"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: testimonialsInView ? 1 : 0, y: testimonialsInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to find your mentor?
            </motion.h2>
            
            <motion.p 
              className="text-xl max-w-2xl mx-auto mb-12 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: testimonialsInView ? 1 : 0, y: testimonialsInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join Swapnasiddhi today and take the first step towards achieving your goals with guidance from experienced mentors.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: testimonialsInView ? 1 : 0, y: testimonialsInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a 
                href="/signup" 
                className="inline-block bg-white text-saffron-700 hover:bg-stone-100 px-10 py-5 rounded-xl font-medium text-lg shadow-xl hover:shadow-2xl transition-all"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  textShadow: "0 0 5px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started Now
              </motion.a>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-white/5 blur-3xl -z-10"
              animate={{ 
                scale: [1, 1.2, 1], 
                opacity: [0.3, 0.5, 0.3] 
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/5 blur-3xl -z-10"
              animate={{ 
                scale: [1.2, 1, 1.2], 
                opacity: [0.3, 0.5, 0.3] 
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </motion.div>
        </div>
      </motion.section>
      
      {/* Testimonials Section */}
      <motion.section 
        className="py-24 relative overflow-hidden"
      >
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-saffron-50/20 to-white -z-10"></div>
        <div className="absolute inset-0 bg-repeat opacity-30 -z-10" style={{ backgroundImage: 'url(/images/premium-pattern.svg)' }}></div>
        
        <div className="container mx-auto px-4 text-center">
          <motion.span 
            className="inline-block text-saffron-600 text-sm uppercase tracking-wider font-medium bg-saffron-100/50 px-4 py-1 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Success Stories
          </motion.span>
          
          <motion.h2 
            className="mt-4 text-4xl md:text-5xl font-bold mb-16 font-playfair"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-saffron-700 to-gold-700">
              What Our Community Says
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl border border-saffron-100 relative overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.2 }}
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
              >
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-saffron-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Quote icon */}
                <div className="text-saffron-400 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="opacity-30">
                    <path d="M11.9995 8.99997H7.99948C6.89491 8.99997 5.99948 9.8954 5.99948 11V16C5.99948 17.1046 6.89491 18 7.99948 18H11.9995C13.1041 18 13.9995 17.1046 13.9995 16V11C13.9995 9.8954 13.1041 8.99997 11.9995 8.99997Z" />
                    <path d="M17.9995 6H13.9995C12.8949 6 11.9995 6.89543 11.9995 8V13C11.9995 14.1046 12.8949 15 13.9995 15H17.9995C19.1041 15 19.9995 14.1046 19.9995 13V8C19.9995 6.89543 19.1041 6 17.9995 6Z" />
                  </svg>
                </div>
                
                <p className="text-stone-700 mb-6 text-lg italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="font-semibold text-lg text-stone-900">{testimonial.author.name}</h4>
                    <p className="text-saffron-600 text-sm">{testimonial.author.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.a 
              href="/testimonials"
              className="inline-flex items-center gap-2 text-saffron-600 font-medium hover:text-saffron-700 transition-colors px-6 py-2 rounded-full border-2 border-saffron-200 hover:border-saffron-300 bg-white hover:bg-saffron-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Read more success stories
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Why Choose Us Section */}
      <motion.section className="py-24 relative overflow-hidden bg-stone-50">
        <div className="absolute inset-0 bg-repeat opacity-30" style={{ backgroundImage: 'url(/images/premium-pattern.svg)' }}></div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="inline-block text-saffron-600 text-sm uppercase tracking-wider font-medium bg-saffron-100/50 px-4 py-1 rounded-full mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                Why Choose Us
              </motion.span>
              
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-8 font-playfair"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-saffron-700 to-gold-700">
                  Empowering the Maratha Community
                </span>
              </motion.h2>
              
              <p className="text-lg text-stone-700 mb-8 leading-relaxed">
                At Swapnasiddhi, we are dedicated to fostering connections that empower the Maratha community through mentorship, guidance, and shared cultural values. Our platform is designed to bridge the gap between experienced professionals and aspiring individuals.  
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Cultural Connection",
                    description: "Our mentors understand the unique cultural context and challenges faced by the Maratha community.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7H2Z"></path><path d="M6 11V7H4"></path><path d="M10 7v4"></path><path d="M14 11V7"></path><path d="M18 11V7"></path><path d="M12 7v4"></path></svg>
                    )
                  },
                  {
                    title: "Personalized Guidance",
                    description: "Our mentorship programs are tailored to individual needs, goals, and career aspirations.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    )
                  },
                  {
                    title: "Community Network",
                    description: "Access to a growing network of professionals who share your heritage and understand your journey.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"></path><path d="M9 10h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-5"></path><path d="m13 7-3 3 3 3"></path></svg>
                    )
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex gap-4 items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.2) }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-saffron-100 to-gold-100 flex items-center justify-center text-saffron-600">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-stone-900">{item.title}</h3>
                      <p className="text-stone-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              {/* Decorative elements */}
              <motion.div 
                className="absolute top-10 -left-10 w-40 h-40 rounded-full bg-saffron-200/30 -z-10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gold-200/30 -z-10"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              
              {/* Stats cards */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "500+", label: "Active Mentors", color: "from-saffron-500 to-saffron-600" },
                  { number: "2,000+", label: "Mentees Guided", color: "from-gold-500 to-gold-600" },
                  { number: "98%", label: "Satisfaction Rate", color: "from-gold-500 to-saffron-500" },
                  { number: "10+", label: "Industries Covered", color: "from-saffron-600 to-gold-500" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-saffron-100 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.6, delay: 0.2 + (index * 0.15) }}
                    whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <h3 className={`text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}>{stat.number}</h3>
                    <p className="text-stone-600">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Featured image */}
              <motion.div 
                className="mt-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-80 w-full bg-gradient-to-r from-saffron-100 to-gold-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <h3 className="text-2xl font-bold text-stone-800 mb-4">Join Our Next Event</h3>
                    <p className="text-stone-700 mb-6">Networking meetup for Maratha professionals - May 15, 2025</p>
                    <motion.a 
                      href="/events"
                      className="inline-block bg-gradient-to-r from-saffron-600 to-gold-600 text-white px-6 py-3 rounded-lg font-medium shadow-md"
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Register Now
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

    </main>
  );
}
