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

        {/* Centered YouTube video */}
        <div className="flex justify-center">
          <div className="w-[80%] aspect-video">
            <iframe
              className="w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/y5j3oDPPmAA?si=ubi1o60WUCzTwone"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}