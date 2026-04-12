export type ClassFormat = "directo" | "grabada";

export type ClassLevel = "principiante" | "intermedio" | "avanzado";

export interface ClassItem {
  id: string;
  title: string;
  trainer: string;
  duration: number;
  format: ClassFormat;
  level: ClassLevel;
  likes: number;
  image: string;
  description: string;
  nextSession?: string;
  featured?: boolean;
  featuredVideo?: boolean;
}
