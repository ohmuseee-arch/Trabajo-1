"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { ClassesDropdown } from "@/components/classes/classes-dropdown";
import { NavigationItem } from "@/types/navigation";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  navigationItems: NavigationItem[];
  classesOpen: boolean;
  onToggleClasses: () => void;
  onClose: () => void;
  onOpenTrainer: () => void;
}

export function MobileMenu({
  open,
  navigationItems,
  classesOpen,
  onToggleClasses,
  onClose,
  onOpenTrainer,
}: MobileMenuProps) {
  const classesItem = navigationItems.find((item) => item.children);
  const mainItems = navigationItems.filter((item) => !item.children);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.18 }}
          className="border-t border-[var(--border-soft)] bg-white/95 backdrop-blur-md lg:hidden"
        >
          <div className="mx-auto w-full max-w-[1280px] px-4 py-4 sm:px-6">
            <div className="space-y-1">
              {classesItem && classesItem.children ? (
                <div>
                  <button
                    type="button"
                    onClick={onToggleClasses}
                    className="flex w-full items-center justify-between rounded-2xl px-3 py-2.5 text-left text-sm font-semibold text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-600)]"
                    aria-expanded={classesOpen}
                  >
                    Clases
                    <ChevronDown
                      size={16}
                      className={cn("transition-transform", classesOpen && "rotate-180")}
                    />
                  </button>
                  <ClassesDropdown
                    mobile
                    open={classesOpen}
                    items={classesItem.children}
                    onNavigate={onClose}
                  />
                </div>
              ) : null}

              {mainItems.map((item) => {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "block rounded-2xl px-3 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-600)]",
                      "text-[var(--text-secondary)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)]",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-4 flex items-center gap-3">
              <Button
                className="w-full"
                onClick={() => {
                  onOpenTrainer();
                  onClose();
                }}
              >
                Tu Entrenador
              </Button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
