import { Clock3, Dumbbell, Flame, HeartPulse } from "lucide-react";

import { progressStats } from "@/data/stats";
import { ProgressStat } from "@/types/stats";

const iconMap: Record<ProgressStat["icon"], React.ComponentType<{ className?: string }>> = {
  dumbbell: Dumbbell,
  clock3: Clock3,
  flame: Flame,
  "heart-pulse": HeartPulse,
};

export function ProgressStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {progressStats.map((stat) => {
        const Icon = iconMap[stat.icon];

        return (
          <article
            key={stat.id}
            className="rounded-[26px] border border-[var(--border-soft)] bg-white p-5 shadow-[var(--shadow-card)]"
          >
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[var(--surface-soft)] text-[var(--blue-600)]">
              <Icon className="size-5" />
            </span>
            <p className="mt-4 text-[34px] font-bold leading-none tracking-tight text-[var(--text-primary)]">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-semibold text-[var(--text-primary)]">{stat.label}</p>
            {stat.helper ? (
              <p className="mt-1 text-sm text-[var(--text-secondary)]">{stat.helper}</p>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
