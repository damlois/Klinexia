"use client";

import { useEffect, useRef } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GRADIENT_BLUE_TO_GREEN, GRADIENT_GREEN_TO_BLUE } from "@/lib/constants";

export function SmarterCareSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative z-[4] bg-white py-24">
      <div className="mx-auto flex max-w-[1440px] flex-col-reverse gap-16 px-6 lg:flex-row lg:items-center lg:gap-20 lg:px-20">
        <AnimatedSection className="flex-1">
          <video
            ref={videoRef}
            src="/videos/symptom-template.mp4"
            playsInline
            muted
            loop
            className="w-full"
          >
            Your browser does not support the video tag.
          </video>
        </AnimatedSection>
        <div className="flex-1">
          <AnimatedSection>
            <h2 className="section-title-shadow mb-6 font-semibold leading-[44px] tracking-[-0.72px] text-[#181d27] text-[36px]">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRADIENT_BLUE_TO_GREEN }}>
                Smarter Care
              </span>{" "}
              Starts with{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRADIENT_GREEN_TO_BLUE }}>
                Better Data
              </span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="mb-5 font-normal leading-[30px] text-[#535862] text-[18px]">
              Free text notes are hard to analyze. Our system structures data at the source.
            </p>
            <p className="font-normal leading-[30px] text-[#535862] text-[18px]">
              Each symptom has its own structured template - for example, headaches capture location, duration,
              severity, triggers, and relieving factors, all captured via speech-to-text. This means better analytics,
              easier billing, and clearer clinical history.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
