import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[linear-gradient(135deg,var(--blue-600),var(--violet-600))] text-white shadow-[0_10px_24px_rgba(76,85,214,0.26)] hover:-translate-y-0.5 hover:brightness-110 focus-visible:ring-[var(--blue-600)]",
        ghost:
          "bg-transparent text-[var(--text-secondary)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)] focus-visible:ring-[var(--blue-600)]",
        soft:
          "border border-[var(--border-soft)] bg-white text-[var(--text-primary)] shadow-sm hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-[var(--blue-600)]",
        secondary:
          "border border-[var(--border-soft)] bg-[var(--surface)] text-[var(--text-primary)] shadow-sm hover:bg-[var(--surface-soft)] hover:-translate-y-0.5 focus-visible:ring-[var(--blue-600)]",
      },
      size: {
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-sm",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
