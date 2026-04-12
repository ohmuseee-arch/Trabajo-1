import { ProgressStat } from "@/types/stats";

export const progressStats: ProgressStat[] = [
  {
    id: "clases-completadas",
    label: "Clases completadas",
    value: "24",
    icon: "dumbbell",
    helper: "Ultimos 30 dias",
  },
  {
    id: "minutos-activos",
    label: "Minutos activos",
    value: "1080",
    icon: "clock3",
    helper: "Objetivo mensual al 72%",
  },
  {
    id: "racha-actual",
    label: "Dias de racha",
    value: "7",
    icon: "flame",
    helper: "Constancia semanal",
  },
  {
    id: "calorias-quemadas",
    label: "Calorias estimadas",
    value: "4200",
    icon: "heart-pulse",
    helper: "Basado en tu actividad",
  },
];

export const benefitItems = [
  {
    id: "ritmo",
    title: "Entrena a tu ritmo",
    description: "Combina sesiones en directo y clases grabadas segun tu energia y disponibilidad.",
    icon: "timer-reset",
  },
  {
    id: "expertos",
    title: "Clases guiadas por expertos",
    description: "Programacion clara, instrucciones precisas y entrenadores con enfoque progresivo.",
    icon: "sparkles",
  },
  {
    id: "progreso",
    title: "Seguimiento de progreso",
    description: "Visualiza constancia, minutos, objetivos y rendimiento en una sola interfaz.",
    icon: "line-chart",
  },
];
