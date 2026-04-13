import { ProgressStat } from "@/types/stats";

export const progressStats: ProgressStat[] = [
  {
    id: "clases-completadas",
    label: "Clases completadas",
    value: "24",
    icon: "dumbbell",
    helper: "Últimos 30 días",
  },
  {
    id: "minutos-activos",
    label: "Minutos activos",
    value: "1080",
    icon: "clock3",
    helper: "Objetivo mensual: 72%",
  },
  {
    id: "racha-actual",
    label: "Días de racha",
    value: "7",
    icon: "flame",
    helper: "Constancia semanal",
  },
  {
    id: "calorias-quemadas",
    label: "Calorías estimadas",
    value: "4200",
    icon: "heart-pulse",
    helper: "Según tu actividad",
  },
];

export const benefitItems = [
  {
    id: "ritmo",
    title: "A tu ritmo",
    description: "Directo o grabado según tu horario.",
    icon: "timer-reset",
  },
  {
    id: "expertos",
    title: "Guiado por expertos",
    description: "Sesiones claras y bien dirigidas.",
    icon: "sparkles",
  },
  {
    id: "progreso",
    title: "Progreso visible",
    description: "Tu actividad resumida en segundos.",
    icon: "line-chart",
  },
];
