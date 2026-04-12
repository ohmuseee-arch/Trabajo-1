import Image from "next/image";
import { Clock3, Heart, PlayCircle, Radio, UserRound } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { ClassItem } from "@/types/class";
import { cn } from "@/lib/utils";

interface ClassCardProps {
  classItem: ClassItem;
}

const formatLabelMap = {
  directo: "En directo",
  grabada: "Grabada",
};

const formatClassMap = {
  directo: "bg-[var(--blue-100)] text-[var(--blue-700)]",
  grabada: "bg-[var(--violet-100)] text-[var(--violet-700)]",
};

const levelClassMap = {
  principiante: "bg-[var(--green-100)] text-[var(--green-700)]",
  intermedio: "bg-[var(--amber-100)] text-[var(--amber-700)]",
  avanzado: "bg-[var(--rose-100)] text-[var(--rose-700)]",
};

export function ClassCard({ classItem }: ClassCardProps) {
  return (
    <article className="group overflow-hidden rounded-[30px] border border-[var(--border-soft)] bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={classItem.image}
          alt={`Clase online ${classItem.title}`}
          width={720}
          height={460}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-x-4 top-4 flex flex-wrap gap-2">
          <Badge className={cn("backdrop-blur-sm", formatClassMap[classItem.format])}>
            {formatLabelMap[classItem.format]}
          </Badge>
          <Badge className={cn("backdrop-blur-sm capitalize", levelClassMap[classItem.level])}>
            {classItem.level}
          </Badge>
        </div>

        {classItem.featuredVideo ? (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/10">
            <span className="inline-flex size-16 items-center justify-center rounded-full bg-white/92 text-[var(--blue-600)] shadow-lg">
              <PlayCircle className="size-9" />
            </span>
          </div>
        ) : null}
      </div>

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
                {classItem.title}
              </h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">{classItem.description}</p>
            </div>
            <span className="inline-flex shrink-0 rounded-full bg-[var(--surface-soft)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-tertiary)]">
              {classItem.format === "directo" ? "Reserva" : "Lista ahora"}
            </span>
          </div>
          <p className="text-sm font-medium text-[var(--text-secondary)]">{classItem.trainer}</p>
        </div>

        <div className="flex flex-wrap gap-2 text-sm text-[var(--text-secondary)]">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--surface-soft)] px-3 py-1.5">
            <Clock3 className="size-4" />
            {classItem.duration} min
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--surface-soft)] px-3 py-1.5">
            <Heart className="size-4" />
            {classItem.likes}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--surface-soft)] px-3 py-1.5">
            {classItem.format === "directo" ? <Radio className="size-4" /> : <UserRound className="size-4" />}
            {classItem.nextSession}
          </span>
        </div>
      </div>
    </article>
  );
}
