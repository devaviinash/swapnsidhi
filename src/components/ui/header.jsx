'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    )}>
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-playfair text-xl font-bold">Swapnasiddhi</span>
        </Link>
      </div>
    </header>
  );
}