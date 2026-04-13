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
    <section className="py-14 sm:py-16">
      <Container>
        <SectionHeading eyebrow="Lo esencial" title="Todo en una interfaz simple" />

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {benefitItems.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];

            return (
              <article
                key={item.id}
                className="rounded-[26px] border border-[var(--border-soft)] bg-white p-5 shadow-[var(--shadow-card)]"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[var(--surface-soft)] text-[var(--blue-600)]">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
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
