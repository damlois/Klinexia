import { AnimatedSection } from "@/components/AnimatedSection";

export function VideoSection() {
  return (
    <section id="action" className="relative z-[8] bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-20">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="section-title-shadow mb-5 font-semibold leading-[44px] tracking-[-0.72px] text-[#181d27] text-[36px]">
            See <span className="text-[#06397d]">Kline</span>
            <span className="text-[#46a542]">xia</span> in Action
          </h2>
          <p className="mx-auto max-w-[640px] font-normal leading-[30px] text-[#535862] text-[20px]">
            Watch how clinics are transforming their workflows with AI-powered documentation, billing, and patient engagement.
          </p>
        </AnimatedSection>
        <p>Video will go here</p>
        {/* <AnimatedSection animation="scale-in">
          <div className="grid-pattern relative flex aspect-video items-center justify-center overflow-hidden rounded-[20px] bg-[#0f172a]">
            <button className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-white/95 shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-white">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="#06397d" className="ml-1">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </AnimatedSection> */}
      </div>
    </section>
  );
}
