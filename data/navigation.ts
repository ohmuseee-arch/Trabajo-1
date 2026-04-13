import { NavigationItem } from "@/types/navigation";

export const navigationItems: NavigationItem[] = [
  {
    label: "Clases",
    href: "/#clases",
    children: [
      { label: "En directo", href: "/#clases-directo" },
      { label: "Grabadas", href: "/#clases-grabadas" },
      { label: "Destacadas", href: "/#clases-destacadas" },
    ],
  },
  { label: "Progreso", href: "/#progreso" },
  { label: "FAQ", href: "/#faq" },
];
