"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in-up" | "fade-in" | "scale-in";
  delay?: number;
  threshold?: number;
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [threshold]);

  const animationClass = isVisible ? `animate-${animation}` : "opacity-0";
  const delayStyle = delay ? { animationDelay: `${delay}ms` } : undefined;

  return (
    <div
      ref={ref}
      className={`${animationClass} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
}
