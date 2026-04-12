import { Metadata } from "next";

import { BenefitsSection } from "@/components/home/benefits-section";
import { FeaturedClassesSection } from "@/components/home/featured-classes-section";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { HeroSection } from "@/components/home/hero-section";
import { ProgressPreview } from "@/components/home/progress-preview";
import { PromoBanner } from "@/components/home/promo-banner";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "FitVirtual | Plataforma de entrenamiento online",
  description:
    "Plataforma fitness online con clases guiadas, seguimiento de progreso, planificacion semanal y entrenador personal.",
};

export default function HomePage() {
  return (
    <>
      <PromoBanner />
      <HeroSection />
      <BenefitsSection />
      <ProgressPreview />
      <FeaturedClassesSection />
      <section id="faq" className="py-20">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Preguntas frecuentes, resueltas sin salir de la pagina principal"
            description="Una capa final de claridad para cerrar la experiencia de forma profesional y autosuficiente."
          />
          <div className="mt-8">
            <FaqAccordion />
          </div>
        </Container>
      </section>
    </>
  );
}
