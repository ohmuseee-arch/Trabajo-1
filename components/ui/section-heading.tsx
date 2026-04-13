import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-[30px] font-bold tracking-tight text-[var(--text-primary)] sm:text-[36px]">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-3 max-w-xl text-sm leading-6 text-[var(--text-secondary)] sm:text-[15px]",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
