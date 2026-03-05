import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";

const FEATURE_CARDS = [
  { icon: "/features/feature1.png", title: "All-in-One Platform", desc: "One unified platform for front desk teams, providers, billing staff, owners & patients - no switching between disconnected tools." },
  { icon: "/features/feature2.png", title: "AI Voice Registration", desc: "Patients complete registration by voice, online or by phone - reducing administrative workload and improving staff productivity." },
  { icon: "/features/feature3.png", title: "Built-in Marketing & Patient Engagement Suite", desc: "Manage all your marketing and patient communication in one place - from website creation, social media & newsletters to real-time voice or chat." },
  { icon: "/features/feature4.png", title: "Automated Smart Billing", desc: "AI-assisted coding suggestions, modifier recommendations, automated claims workflows, and payment posting built directly into everyday clinical operations." },
  { icon: "/features/feature5.png", title: "Integrate Seamlessly with Existing Tools", desc: "Connect the tools you already use, from accounting platforms like QuickBooks, Sage or Xero to marketing tools, CRMs & more." },
  { icon: "/features/feature6.png", title: "Integrated Payments", desc: "A merchant services solution designed specifically for clinics to reduce payment processing costs while simplifying patient payments." },
  { icon: "/features/feature7.png", title: "Real-Time Financial Visibility", desc: "Clear, everyday dashboards for cash flow, outstanding balances, revenue trends, and confident practice decisions." },
  { icon: "/features/feature8.png", title: "AI Clinical Intelligence & Smart Documentation", desc: "AI-assisted charting, voice-to-note clinical documentation, ICD/CPT suggestions, treatment plan support & real-time clinical insights." },
];

export function FeaturesSection() {
  return (
    <section id="benefits" className="relative z-[9] overflow-hidden bg-[#f9fbff] py-16 lg:py-24">
      <div className="pointer-events-none absolute -right-18 -top-30 h-[400px] w-[400px] lg:h-[500px] lg:w-[500px]">
        <Image src="/splash-bg.png" alt="" fill className="object-contain object-top-right" priority />
      </div>

      <div className="relative mx-auto max-w-full px-6 lg:px-20">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="section-title-shadow mb-5 font-semibold leading-[44px] tracking-[-0.72px] text-[#181d27] text-[36px]">
            What Makes <span className="text-[#06397d]">Kline</span>
            <span className="text-[#46a542]">xia</span> Different
          </h2>
          <p className="mx-auto max-w-[640px] font-normal leading-[30px] text-[#535862] text-[20px]">
            An AI-first platform where clinical care, billing, marketing, payments, and reporting work together seamlessly.
          </p>
        </AnimatedSection>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURE_CARDS.map((card, i) => (
            <AnimatedSection key={card.title} animation="fade-in-up" delay={100 + i * 50} className="sm:h-full">
              <div className="card-hover flex h-full flex-col rounded-2xl border border-white/50 bg-white p-6 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
                <div className={`mb-5 flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl shadow-[0px_0.967px_1.933px_0px_rgba(0,0,0,0.05)]`}>
                  <Image src={card.icon} alt="" width={56} height={56} className="object-contain" />
                </div>
                <h3 className="mb-2 shrink-0 font-medium leading-[30px] text-[#181d27] text-[18px]">{card.title}</h3>
                <p className="min-h-0 flex-1 font-normal leading-6 text-[#535862] text-[15px]">{card.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
