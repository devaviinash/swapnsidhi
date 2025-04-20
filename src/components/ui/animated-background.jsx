'use client';

import { useEffect, useRef } from 'react';

export function AnimatedBackground({
  particleColor = '#FFD700',
  glowColor = '#FFD70033',
  particleCount = 50
}) {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0">
        {Array.from({ length: particleCount }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: particleColor,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px ${particleColor}`,
              borderRadius: '50%',
            }}
          />
        ))}
      </div>
      <div
        className="absolute -top-40 -right-40 h-80 w-80 rounded-full blur-[100px]"
        style={{ backgroundColor: glowColor }}
      />
      <div
        className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full blur-[100px]"
        style={{ backgroundColor: glowColor }}
      />
    </div>
  );
}
