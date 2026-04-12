import { ProgressStats } from "@/components/progress/progress-stats";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProgressPreview() {
  return (
    <section id="progreso" className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Tu progreso"
          title="Un resumen rapido para leer tu actividad sin friccion"
          description="Cuatro metricas bien presentadas para transmitir avance, constancia y ritmo de entrenamiento."
        />
        <div className="mt-8">
          <ProgressStats />
        </div>
      </Container>
    </section>
  );
}
