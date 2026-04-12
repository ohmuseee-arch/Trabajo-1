import { NavigationItem } from "@/types/navigation";

export const navigationItems: NavigationItem[] = [
  {
    label: "Clases",
    href: "/#clases",
    children: [
      { label: "Clases en directo", href: "/#clases-directo" },
      { label: "Clases grabadas", href: "/#clases-grabadas" },
      { label: "Clases destacadas", href: "/#clases-destacadas" },
    ],
  },
  { label: "Progreso", href: "/#progreso" },
  { label: "FAQ", href: "/#faq" },
];
