import { ProgressStats } from "@/components/progress/progress-stats";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProgressPreview() {
  return (
    <section id="progreso" className="py-14 sm:py-16">
      <Container>
        <SectionHeading eyebrow="Progreso" title="Tu actividad" />
        <div className="mt-6">
          <ProgressStats />
        </div>
      </Container>
    </section>
  );
}
