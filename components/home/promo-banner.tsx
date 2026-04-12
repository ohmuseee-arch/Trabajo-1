import Link from "next/link";
import { Sparkles } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function PromoBanner() {
  return (
    <section className="pt-8">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(120deg,#fb923c_0%,#f43f5e_45%,#7c3aed_100%)] px-6 py-7 text-white shadow-[0_20px_38px_rgba(236,72,153,0.22)] sm:px-8">
          <Sparkles className="absolute right-5 top-5 size-5 opacity-70" />
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/80">
                Acceso inmediato
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                Empieza hoy y activa una rutina online con estructura real
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-white/88 sm:text-base">
                Una experiencia directa, limpia y profesional para descubrir clases, medir progreso y
                entrenar con continuidad desde la primera visita.
              </p>
            </div>
            <Link
              href="/#clases"
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className: "border-white/20 bg-white text-slate-900 hover:bg-white/90",
              })}
            >
              Ver clases
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
