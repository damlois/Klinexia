"use client";

import { useEffect, useState } from "react";
import { AnimatedSection } from "./AnimatedSection";

const STEP_IMAGES = [
  "/steps/step1.png",
  "/steps/step2.png",
  "/steps/step3.png",
  "/steps/step4.png",
  "/steps/step5.png",
  "/steps/step6.png",
];

const CYCLE_DURATION_MS = 1000;

export function ClearVisitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % STEP_IMAGES.length);
    }, CYCLE_DURATION_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="dark-section-pattern relative z-[6] py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-20">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="section-title-shadow mb-5 font-semibold leading-[44px] tracking-[-0.72px] text-white text-[36px]">
            Clear Visits. No Guesswork.
          </h2>
          <p className="mx-auto max-w-[640px] font-normal leading-[30px] text-white/90 text-[20px]">
            Every encounter follows a simple, transparent flow. Know exactly where every patient is in their journey.
          </p>
        </AnimatedSection>

        <AnimatedSection className="flex justify-center">
          <img
            src={STEP_IMAGES[activeIndex]}
            alt={`Patient journey step ${activeIndex + 1}`}
            className="w-full max-w-[900px] rounded-xl object-contain"
          />
        </AnimatedSection>
      </div>
    </section>
  );
}
