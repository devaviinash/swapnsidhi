'use client';

import Link from 'next/link';
import { Button } from './button';

export function ClientButton({
  label,
  href,
  variant,
  size,
  className,
  children,
}) {
  return (
    <Link href={href} className={className}>
      <Button variant={variant} size={size}>
        {label || children}
      </Button>
    </Link>
  );
}
