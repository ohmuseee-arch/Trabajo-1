import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

import { heroImage } from "@/data/classes";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  return (
    <section className="pt-10 sm:pt-14">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <p className="inline-flex rounded-full border border-[var(--border-soft)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)] shadow-sm">
              Entrenamiento online con criterio
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-[58px]">
              Entrena desde casa con clases online disenadas para progresar de verdad
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              FitVirtual concentra lo esencial en una sola experiencia: una seleccion cuidada de
              clases online, metricas claras y acceso directo a tu entrenador en un entorno limpio y
              finalista.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#clases" className={buttonVariants({ variant: "primary", size: "lg" })}>
                Comenzar ahora
                <ArrowRight size={18} />
              </Link>
              <Link href="/#progreso" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                Ver progreso
                <Play size={16} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-[var(--text-secondary)]">
              <div>
                <p className="text-2xl font-bold text-[var(--text-primary)]">+200</p>
                <p>clases online activas</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--text-primary)]">4.9/5</p>
                <p>satisfaccion media</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--text-primary)]">+5.000</p>
                <p>usuarios recurrentes</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-8 h-32 w-32 rounded-full bg-blue-200/50 blur-3xl" />
            <div className="absolute -bottom-8 -right-6 h-36 w-36 rounded-full bg-violet-200/50 blur-3xl" />
            <div className="relative overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-white p-3 shadow-[var(--shadow-soft)]">
              <div className="relative overflow-hidden rounded-[26px]">
                <Image
                  src={heroImage}
                  alt="Persona entrenando desde casa con guia digital"
                  width={920}
                  height={680}
                  className="h-[300px] w-full object-cover sm:h-[420px]"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent p-6 text-white">
                  <p className="text-sm font-medium text-white/75">Sesion recomendada para hoy</p>
                  <p className="mt-2 text-2xl font-semibold tracking-tight">HIIT + Core Express</p>
                  <p className="mt-1 text-sm text-white/80">30 min · Grabada · Intensidad media</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
