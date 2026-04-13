import { Metadata } from "next";

import { BenefitsSection } from "@/components/home/benefits-section";
import { FeaturedClassesSection } from "@/components/home/featured-classes-section";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { HeroSection } from "@/components/home/hero-section";
import { ProgressPreview } from "@/components/home/progress-preview";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "FitVirtual | Plataforma de entrenamiento online",
  description:
    "Plataforma fitness online con clases guiadas, progreso claro y entrenador personal.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <ProgressPreview />
      <FeaturedClassesSection />
      <section id="faq" className="py-14 sm:py-16">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Preguntas frecuentes" />
          <div className="mt-6">
            <FaqAccordion />
          </div>
        </Container>
      </section>
    </>
  );
}
