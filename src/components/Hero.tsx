import { AnimatedSection } from "@/components/AnimatedSection";
import { GRADIENT_BLUE_TO_GREEN } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative z-10 overflow-hidden pb-24 pt-16">
      <div className="mx-auto flex max-w-full flex-col gap-16 px-6 lg:flex-row lg:items-start lg:gap-12 lg:px-20">

        <div className="relative flex flex-1 flex-col gap-[21px] pt-[46px] lg:flex-[0_0_55%] lg:pt-[38px]">
          <div
            className="pointer-events-none absolute -right-8 top-0 z-0 h-[320px] w-[380px] bg-cover bg-right-top bg-no-repeat opacity-90 sm:right-[30px] sm:-top-[24px] sm:h-[400px] sm:w-[450px] lg:-top-[100px] lg:right-[217px] lg:h-[500px] lg:w-[600px]"
            style={{ backgroundImage: "url(/hero-splash.png)" }}
          />
          <AnimatedSection animation="fade-in-up" className="relative z-10">
            <div className="inline-flex w-fit items-center gap-0.5 rounded-full border border-[#e2e8f0] bg-white px-[14px] py-[9px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
              <span className="font-bold text-[14px] leading-[11px] tracking-[-0.28px] text-[#06397d] mr-1">Built for:</span>
              <span className="font-medium text-[13px] leading-5 text-[#334155]">
                Primary Care · Urgent Care · Dental · ENT · Eye Clinics · Outpatient
              </span>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-in-up" delay={100} className="relative z-10">
            <h1 className="section-title-shadow max-w-[674px] font-semibold leading-[68px] tracking-[-1.2px] text-[#181d27] text-[48px] lg:text-[60px]">
              <p className="bg-clip-text text-transparent" style={{ backgroundImage: GRADIENT_BLUE_TO_GREEN }}>
                AI First.
              </p>{" "}
              <span>One </span>
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRADIENT_BLUE_TO_GREEN }}>
                Platform
              </span>{" "}
              for Healthcare Operations.
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-in-up" delay={150}>
            <p className="max-w-[642px] text-[16px] leading-[26px] text-[#334155]">
              EMR · Billing · Marketing · Payments · Financial Reporting - all unified in one AI-powered platform for modern ambulatory care services.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-in-up" delay={300}>
            <div className="flex flex-wrap gap-3">
              <a
                href="#action"
                className="inline-flex items-center gap-3 rounded-lg border border-[#94a3b8] bg-white px-7 py-4 font-medium leading-7 text-[18px] text-[#334155] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-[#64748b] hover:bg-[#f8fafc]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#94a3b8]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Demo
              </a>
              <a
                href="#benefits"
                className="inline-flex items-center rounded-lg bg-[#06397d] px-7 py-4 font-medium leading-7 text-[18px] text-white shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] transition-all duration-300 hover:bg-[#052d63] hover:scale-[1.02]"
              >
                Learn More
              </a>
            </div>
          </AnimatedSection>
        </div>
        <AnimatedSection animation="scale-in" delay={200} className="relative flex-1 lg:flex-[0_0_45%]">
          <video
            src="/videos/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-auto w-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </AnimatedSection>
      </div>
    </section>
  );
}
