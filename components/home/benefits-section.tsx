import { LineChart, Sparkles, TimerReset } from "lucide-react";

import { benefitItems } from "@/data/stats";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const iconMap = {
  "timer-reset": TimerReset,
  sparkles: Sparkles,
  "line-chart": LineChart,
};

export function BenefitsSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Lo esencial"
          title="Menos elementos, mejor criterio y una experiencia mucho mas enfocada"
          description="La home concentra solo lo que necesitas para entender el producto y empezar a usarlo con claridad."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {benefitItems.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];

            return (
              <article
                key={item.id}
                className="rounded-[28px] border border-[var(--border-soft)] bg-white p-6 shadow-[var(--shadow-card)]"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[var(--surface-soft)] text-[var(--blue-600)]">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
