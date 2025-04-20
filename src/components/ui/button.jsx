"use client";

import * as React from "react";

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
  
  // Simplified variant classes
  let variantClasses = "bg-blue-600 text-white hover:bg-blue-700";
  if (variant === "destructive") {
    variantClasses = "bg-red-600 text-white hover:bg-red-700";
  } else if (variant === "outline") {
    variantClasses = "border-2 border-blue-600 bg-transparent text-gray-800 hover:bg-blue-50";
  } else if (variant === "secondary") {
    variantClasses = "bg-gray-100 text-gray-900 hover:bg-gray-200";
  } else if (variant === "ghost") {
    variantClasses = "hover:bg-gray-100 text-gray-700 hover:text-gray-900";
  } else if (variant === "link") {
    variantClasses = "text-gray-700 underline-offset-4 hover:underline hover:text-gray-900";
  }
  
  // Simplified size classes
  let sizeClasses = "h-11 px-5 py-2.5";
  if (size === "sm") {
    sizeClasses = "h-9 px-4 py-2";
  } else if (size === "lg") {
    sizeClasses = "h-12 px-8 py-3";
  } else if (size === "icon") {
    sizeClasses = "h-11 w-11";
  }
  
  return (
    <button
      data-slot="button"
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className || ''}`}
      {...props}
    />
  );
}

export { Button };
