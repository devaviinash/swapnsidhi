"use client";

import * as React from "react";

function Card({
  className,
  variant = "default",
  ...props
}) {
  const baseClasses = "rounded-lg border transition-all duration-300";
  
  let variantClasses = "bg-white border-gray-200 text-gray-900 shadow-sm";
  if (variant === "luxury") {
    variantClasses = "relative overflow-hidden border-gray-200 bg-gray-50 shadow-md";
  } else if (variant === "dark") {
    variantClasses = "bg-gray-800 border-gray-700 text-gray-50 shadow-md";
  }
  
  return (
    <div
      className={`${baseClasses} ${variantClasses} ${className || ''}`}
      {...props}
    />
  );
}

Card.Header = function CardHeader({
  className,
  ...props
}) {
  return (
    <div
      className={`flex flex-col space-y-1.5 p-4 sm:p-6 ${className || ''}`}
      {...props}
    />
  );
};

Card.Title = function CardTitle({
  className,
  ...props
}) {
  return (
    <h3
      className={`text-xl sm:text-2xl font-semibold leading-none tracking-tight text-gray-900 ${className || ''}`}
      {...props}
    />
  );
};

Card.Description = function CardDescription({
  className,
  ...props
}) {
  return (
    <p
      className={`text-sm sm:text-base text-gray-600 ${className || ''}`}
      {...props}
    />
  );
};

Card.Content = function CardContent({
  className,
  ...props
}) {
  return (
    <div
      className={`p-4 sm:p-6 pt-0 text-gray-700 ${className || ''}`}
      {...props}
    />
  );
};

Card.Footer = function CardFooter({
  className,
  ...props
}) {
  return (
    <div
      className={`flex items-center p-4 sm:p-6 pt-0 ${className || ''}`}
      {...props}
    />
  );
};

export { Card };
