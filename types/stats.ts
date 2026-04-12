export interface ProgressStat {
  id: string;
  label: string;
  value: string;
  icon: "dumbbell" | "clock3" | "flame" | "heart-pulse";
  helper?: string;
}
