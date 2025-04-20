"use client";

import { useEffect, useRef, useState } from "react";

export const AnimatedText = ({
  text,
  className = "",
  delay = 0,
  duration = 500,
  childClassName = "",
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Using a more performant intersection observer config for mobile
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Add a slight delay for performance on mobile
          const timeoutId = setTimeout(() => {
            setIsVisible(true);
          }, delay);

          if (once && containerRef.current) {
            observer.unobserve(containerRef.current);
          }

          return () => clearTimeout(timeoutId);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [delay, once]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      {text.split(" ").map((word, wordIndex) => (
        <span 
          key={wordIndex} 
          className="mr-1.5 inline-block"
        >
          {word.split("").map((char, charIndex) => (
            <span
              key={`${wordIndex}-${charIndex}`}
              className={`inline-block transform transition-transform ${childClassName}`}
              style={{
                transitionDelay: `${delay + wordIndex * 40 + charIndex * 30}ms`,
                transitionDuration: `${duration}ms`,
                transform: isVisible ? "translateY(0)" : "translateY(100%)",
              }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
};
