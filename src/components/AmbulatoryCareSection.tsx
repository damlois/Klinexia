import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";

const CARE_TYPES = [
  { label: "Primary Care", icon: "/services/service1.png" },
  { label: "Urgent Care", icon: "/services/service2.png" },
  { label: "Dental Practices", icon: "/services/service3.png" },
  { label: "ENT Specialists", icon: "/services/service4.png" },
  { label: "Eye Clinics", icon: "/services/service5.png" },
  { label: "Outpatient Centers", icon: "/services/service6.png" },
];

export function AmbulatoryCareSection() {
  return (
    <section id="product" className="dark-section-pattern relative z-[7] py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-20">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="section-title-shadow mb-5 font-semibold leading-[44px] tracking-[-0.72px] text-white text-[36px]">
            Purpose-Built for Ambulatory Care Services
          </h2>
          <p className="mx-auto max-w-[640px] font-normal leading-[30px] text-white/90 text-[20px]">
            Klinexia is designed specifically for the clinics and specialties that need modern, efficient tools the most.
          </p>
        </AnimatedSection>
        <div className="flex flex-wrap justify-center gap-4">
          {CARE_TYPES.map((item, i) => (
            <AnimatedSection key={item.label} animation="fade-in-up" delay={i * 75}>
              <div className="flex flex-col items-center gap-3 rounded-xl border border-[#334155] bg-transparent px-8 py-6 transition-all duration-300 hover:border-[#334155]/80 hover:bg-[#1e293b]/30">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-[#334155]/50">
                  <Image src={item.icon} alt="" width={48} height={48} className="object-contain" />
                </div>
                <span className="font-medium text-[#e2e8f0] text-[14px]">{item.label}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
