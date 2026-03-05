import Image from "next/image";
import { GRADIENT_BLUE_TO_GREEN } from "@/lib/constants";
import { AnimatedSection } from "@/components/AnimatedSection";

const AI_FEATURES = [
  "Universal speech-to-text across intake, vitals, and HPI",
  "Symptom-based clinical templates",
  "Suggested diagnoses and lab tests",
  "Automatic medical notes generation",
  "Claim automation and posting",
  "Reducing errors in coding and claims",
  "Built-in audit trails, risk management & compliance safeguards",
  "Clinical learning system with practice-adaptive intelligence",
];

export function AICoreSection() {
  return (
    <section id="why" className="ai-core-grid-bg relative z-[6] overflow-hidden py-24">
      <div className="mx-auto flex max-w-[90%] flex-col gap-16 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-20">
        <div className="flex-1 lg:flex-[0_0_45%]">
          <AnimatedSection>
            <h2 className="section-title-shadow mb-6 font-semibold leading-[44px] tracking-[-0.72px] text-[#181d27] text-[36px]">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRADIENT_BLUE_TO_GREEN }}>AI</span> at the
              Core, Not as an Add-On
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="mb-8 font-normal leading-[30px] text-[#535862] text-[18px]">
              We didn&apos;t just add a chatbot to a legacy system. We built the entire clinical workflow around
              intelligent data capture and processing.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <ul className="space-y-4">
              {AI_FEATURES.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Image src="/check-icon.png" alt="" width={24} height={24} className="shrink-0" unoptimized />
                  <span className="font-normal leading-7 text-[#535862] text-[16px]">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
        <AnimatedSection animation="scale-in" delay={200} className="-mx-6 flex flex-1 items-center justify-center md:mx-0 lg:flex-[0_0_55%] lg:justify-end">
          <Image
            src="/transcription-image.png"
            alt="Live transcription stream for AI-powered clinical documentation"
            width={650}
            height={488}
            quality={100}
            unoptimized
            className="h-auto w-full max-w-[650px] object-contain"
          />
        </AnimatedSection>
      </div>
    </section>
  );
}
