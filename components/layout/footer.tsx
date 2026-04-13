import Link from "next/link";
import { Dumbbell } from "lucide-react";

import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-soft)] bg-white/85 py-8 backdrop-blur-sm">
      <Container className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--blue-600),var(--violet-600))] text-white shadow-[0_10px_24px_rgba(76,85,214,0.2)]">
              <Dumbbell size={18} />
            </span>
            <span className="text-base font-bold tracking-tight text-[var(--text-primary)]">FitVirtual</span>
          </div>
          <p className="mt-4 text-sm text-[var(--text-secondary)]">
            © 2026 FitVirtual. Todos los derechos reservados a Natalia Ortiz Martínez.
          </p>
          <p className="mt-1 text-sm text-[var(--text-tertiary)]">
            Diseño y desarrollo por Natalia Ortiz Martínez.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[var(--text-secondary)]">
          <Link href="/#clases" className="transition-colors hover:text-[var(--text-primary)]">
            Clases
          </Link>
          <Link href="/#progreso" className="transition-colors hover:text-[var(--text-primary)]">
            Progreso
          </Link>
          <Link href="/#faq" className="transition-colors hover:text-[var(--text-primary)]">
            FAQ
          </Link>
          <Link href="/#top" className="transition-colors hover:text-[var(--text-primary)]">
            Inicio
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
