import {
  AboutSection,
  Clients,
  CTA,
  FaqSection,
  Hero,
  MarqueeSection,
  PortfolioSection,
  ServiceSection,
  TechnologySection,
  TestimonialsSection,
} from "@/features/home";

export default function Home() {
  return (
    <main className="flex flex-col gap-[200px]">
      <Hero />
      <Clients />
      <AboutSection />
      <ServiceSection />
      <PortfolioSection />
      <MarqueeSection />
      <TestimonialsSection />
      <TechnologySection />
      <FaqSection />
      <CTA />
    </main>
  );
}
