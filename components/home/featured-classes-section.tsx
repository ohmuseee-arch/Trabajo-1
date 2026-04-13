import { classes } from "@/data/classes";
import { ClassCard } from "@/components/classes/class-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const featuredClasses = classes.filter((item) => item.featured).slice(0, 2);
const liveClasses = classes.filter((item) => item.format === "directo").slice(0, 3);
const recordedClasses = classes.filter((item) => item.format === "grabada").slice(0, 3);

export function FeaturedClassesSection() {
  return (
    <section id="clases" className="py-14 sm:py-16">
      <Container>
        <SectionHeading eyebrow="Clases" title="Clases online" />

        <div id="clases-destacadas" className="mt-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-tertiary)]">
                Clases destacadas
              </p>
              <h3 className="mt-1 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
                Selección principal
              </h3>
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {featuredClasses.map((classItem) => (
              <ClassCard key={classItem.id} classItem={classItem} />
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-2">
          <div id="clases-directo">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-tertiary)]">
              En directo
            </p>
            <h3 className="mt-1 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
              Próximas sesiones
            </h3>
            <div className="mt-4 space-y-4">
              {liveClasses.slice(0, 2).map((classItem) => (
                <ClassCard key={classItem.id} classItem={classItem} />
              ))}
            </div>
          </div>

          <div id="clases-grabadas">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-tertiary)]">
              Grabadas
            </p>
            <h3 className="mt-1 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
              Disponibles ahora
            </h3>
            <div className="mt-4 space-y-4">
              {recordedClasses.slice(0, 2).map((classItem) => (
                <ClassCard key={classItem.id} classItem={classItem} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
