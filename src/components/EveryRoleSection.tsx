import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GRADIENT_GREEN_TO_BLUE } from "@/lib/constants";

const ROLE_CARDS = [
  { icon: "/roles/role1.png", title: "Medical Assistants", desc: "Guided intake flows, voice-captured vitals, one-click handoff." },
  { icon: "/roles/role2.png", title: "Providers", desc: "Symptom-based diagnosis suggestions, minimal typing, notes generated automatically." },
  { icon: "/roles/role3.png", title: "Labs", desc: "Clear in-house vs send-out workflows, positive/negative results, instant visibility." },
  { icon: "/roles/role4.png", title: "Patients", desc: "Clear visit progress, access to notes and lab results, simple follow-up." },
];

export function EveryRoleSection() {
  return (
    <section className="relative z-[5] bg-[#f9fbff] py-16 lg:py-24">
      <div className="mx-auto max-w-full px-6 lg:px-20">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="section-title-shadow mb-5 font-semibold leading-[44px] tracking-[-0.72px] text-[#181d27] text-[36px]">
            Designed for{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRADIENT_GREEN_TO_BLUE }}>
              Every Role
            </span>{" "}
            in the Clinic
          </h2>
          <p className="mx-auto max-w-[640px] font-normal leading-[30px] text-[#535862] text-[20px]">
            A unified platform that connects the entire care team, ensuring nothing falls through the cracks.
          </p>
        </AnimatedSection>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ROLE_CARDS.map((card, i) => (
            <AnimatedSection key={card.title} animation="fade-in-up" delay={i * 100} className="flex h-full">
              <div className="card-hover flex h-full flex-col rounded-2xl border border-white/50 bg-white p-8 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
                <div className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden">
                  <Image src={card.icon} alt="" width={56} height={56} className="object-contain" />
                </div>
                <h3 className="mb-2 shrink-0 font-medium leading-[30px] text-[#181d27] text-[20px]">{card.title}</h3>
                <p className="min-h-0 flex-1 font-normal leading-6 text-[#535862] text-[16px]">{card.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
