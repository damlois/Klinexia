import {
  Navbar,
  Hero,
  FeaturesSection,
  VideoSection,
  AmbulatoryCareSection,
  AICoreSection,
  EveryRoleSection,
  SmarterCareSection,
  PatientPortalSection,
  GetInTouchSection,
  Footer,
  ClearVisitsSection,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fefefe]">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <VideoSection />
      <AmbulatoryCareSection />
      <AICoreSection />
      <EveryRoleSection />
      <SmarterCareSection />
      <PatientPortalSection />
      <ClearVisitsSection />
      <GetInTouchSection />
      <Footer />
    </div>
  );
}
