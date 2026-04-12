import { classes } from "@/data/classes";
import { ClassCard } from "@/components/classes/class-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const featuredClasses = classes.filter((item) => item.featured).slice(0, 2);
const liveClasses = classes.filter((item) => item.format === "directo").slice(0, 3);
const recordedClasses = classes.filter((item) => item.format === "grabada").slice(0, 3);

export function FeaturedClassesSection() {
  return (
    <section id="clases" className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Clases"
          title="Una seleccion online clara, premium y directamente util"
          description="El catalogo se resume en lo importante: destacadas, en directo y grabadas. Sin pantallas extra y sin pasos innecesarios."
        />

        <div id="clases-destacadas" className="mt-10">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-tertiary)]">
                Clases destacadas
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
                Las sesiones con mejor entrada visual y mejor encaje para primera visita
              </h3>
            </div>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {featuredClasses.map((classItem) => (
              <ClassCard key={classItem.id} classItem={classItem} />
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-10 xl:grid-cols-2">
          <div id="clases-directo">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-tertiary)]">
              En directo
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
              Para entrenar con horario y energia compartida
            </h3>
            <div className="mt-5 space-y-5">
              {liveClasses.map((classItem) => (
                <ClassCard key={classItem.id} classItem={classItem} />
              ))}
            </div>
          </div>

          <div id="clases-grabadas">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-tertiary)]">
              Grabadas
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
              Para entrenar cuando quieres, sin perder calidad visual
            </h3>
            <div className="mt-5 space-y-5">
              {recordedClasses.map((classItem) => (
                <ClassCard key={classItem.id} classItem={classItem} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
