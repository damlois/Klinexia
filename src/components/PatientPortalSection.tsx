"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GRADIENT_GREEN_TO_BLUE } from "@/lib/constants";

const PORTAL_FEATURES = [
  {
    title: "Digital Check-In & Smart Intake",
    desc: "Book or manage appointments, complete forms, capture ID/insurance, answer intake questionnaires & make pre-payments - all before arrival",
    icon: "/icons/portal-calendar.svg",
    image: "/portal/portal1.png",
  },
  {
    title: "Medical Records",
    desc: "Access visit summaries, allergies, medications & immunizations.",
    icon: "/icons/portal-document.svg",
    image: "/portal/portal2.png",
  },
  {
    title: "Family Management",
    desc: "Add dependants and manage care for the whole family from one account.",
    icon: "/icons/portal-family.svg",
    image: "/portal/portal3.png",
  },
  {
    title: "Smart Reminders",
    desc: "Receive alerts for appointments, refills & care updates.",
    icon: "/icons/portal-bell.svg",
    image: "/portal/portal4.png",
  },
  {
    title: "Billing & Payments",
    desc: "Live claim status, transparent process, make payment, one platform.",
    icon: "/icons/portal-credit-card.svg",
    image: "/portal/portal5.png",
  },
  {
    title: "AI Care Assistant",
    desc: "Get real-time support through secure voice or chat, including symptom triage, pre-visit intake, automated workflows & 24/7 patient assistance.",
    icon: "/icons/portal-comment.svg",
    image: "/portal/portal6.png",
  },
  {
    title: "Digital Patient Engagement & Health Insights",
    desc: "Includes telehealth access, e-signatures, secure document vaulting, & a personalized patient health dashboard.",
    icon: "/icons/portal-chart.svg",
    image: "/portal/portal1.png",
  },
];

export function PatientPortalSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = PORTAL_FEATURES[selectedIndex];

  return (
    <section id="portal" className="relative z-[3] bg-[#f9fbff] py-24">
      <div className="mx-auto flex max-w-full flex-col gap-16 px-6 lg:flex-row lg:items-center lg:gap-20 lg:px-20">
        <div className="flex-1">
          <AnimatedSection>
            <h2 className="section-title-shadow mb-6 font-semibold leading-[44px] tracking-[-0.72px] text-[#181d27] text-[36px]">
              Patient Portal &{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRADIENT_GREEN_TO_BLUE }}>
                Engagement
              </span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="mb-8 font-normal leading-[30px] text-[#535862] text-[18px]">
              Give patients a secure, mobile-friendly companion that keeps them informed and involved - available via
              web and mobile web.
            </p>
          </AnimatedSection>
          <div className="space-y-4">
            {PORTAL_FEATURES.map((item, i) => {
              const isActive = selectedIndex === i;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setSelectedIndex(i)}
                  className="card-hover flex w-full cursor-pointer items-center gap-4 rounded-2xl border border-white bg-white p-4 text-left shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] transition-colors hover:border-[#e2e8f0]"
                >
                  <div
                    className={`flex size-12 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isActive ? "bg-[#23408e]" : "bg-[#f1f5f9]"
                    }`}
                  >
                    <div
                      className="size-6 shrink-0"
                      style={{
                        maskImage: `url(${item.icon})`,
                        WebkitMaskImage: `url(${item.icon})`,
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskPosition: "center",
                        backgroundColor: isActive ? "#ffffff" : "#64748b",
                      }}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-[#181d27] text-[16px]">{item.title}</p>
                    <p className="text-[14px] leading-6 text-[#535862]">{item.desc}</p>
                  </div>
                  <img src="/icons/chevron-right.svg" alt="" className="size-6 shrink-0" />
                </button>
              );
            })}
          </div>
        </div>
        <AnimatedSection animation="scale-in" delay={200} className="flex flex-1 items-center justify-center">
          <div className="mx-auto w-full max-w-[360px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selected.image}
              alt={selected.title}
              className="block h-auto w-full object-contain object-center"
              loading="eager"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
