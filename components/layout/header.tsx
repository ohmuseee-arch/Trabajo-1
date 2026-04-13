"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Dumbbell, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ClassesDropdown } from "@/components/classes/classes-dropdown";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onOpenTrainer: () => void;
}

export function Header({ onOpenTrainer }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopClassesOpen, setDesktopClassesOpen] = useState(false);
  const [mobileClassesOpen, setMobileClassesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setDesktopClassesOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDesktopClassesOpen(false);
        setMobileOpen(false);
        setMobileClassesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const classesItem = navigationItems.find((item) => item.children);
  const mainItems = navigationItems.filter((item) => !item.children);

  function closeAllMenus() {
    setMobileOpen(false);
    setMobileClassesOpen(false);
    setDesktopClassesOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-white/80 backdrop-blur-xl">
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <Link
          href="/"
          onClick={closeAllMenus}
          className="flex items-center gap-3 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-600)]"
        >
          <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--blue-600),var(--violet-600))] text-white shadow-[0_10px_24px_rgba(76,85,214,0.28)]">
            <Dumbbell size={18} />
          </span>
          <span className="text-lg font-bold tracking-tight text-[var(--text-primary)]">FitVirtual</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegacion principal">
          {classesItem && classesItem.children ? (
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDesktopClassesOpen((state) => !state)}
                className={cn(
                  "inline-flex items-center gap-1 rounded-2xl px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-600)]",
                  desktopClassesOpen
                    ? "bg-[var(--surface-soft)] text-[var(--text-primary)]"
                    : "text-[var(--text-secondary)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)]",
                )}
                aria-haspopup="menu"
                aria-expanded={desktopClassesOpen}
              >
                Clases
                <ChevronDown
                  size={16}
                  className={cn("transition-transform", desktopClassesOpen && "rotate-180")}
                />
              </button>
              <ClassesDropdown
                open={desktopClassesOpen}
                items={classesItem.children}
                onNavigate={closeAllMenus}
              />
            </div>
          ) : null}

          {mainItems.map((item) => {
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeAllMenus}
                className={cn(
                  "rounded-2xl px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-600)]",
                  "text-[var(--text-secondary)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button onClick={onOpenTrainer}>Tu Entrenador</Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((state) => !state)}
          className="inline-flex size-10 items-center justify-center rounded-2xl border border-[var(--border-soft)] bg-white text-[var(--text-primary)] shadow-sm transition-colors hover:bg-[var(--surface-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-600)] lg:hidden"
          aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      <MobileMenu
        open={mobileOpen}
        navigationItems={navigationItems}
        classesOpen={mobileClassesOpen}
        onToggleClasses={() => setMobileClassesOpen((state) => !state)}
        onClose={closeAllMenus}
        onOpenTrainer={onOpenTrainer}
      />
    </header>
  );
}
