"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { NavigationChildItem } from "@/types/navigation";

interface ClassesDropdownProps {
  items: NavigationChildItem[];
  open: boolean;
  mobile?: boolean;
  onNavigate?: () => void;
}

export function ClassesDropdown({
  items,
  open,
  mobile = false,
  onNavigate,
}: ClassesDropdownProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: mobile ? -6 : 10, scale: mobile ? 1 : 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: mobile ? -6 : 10, scale: mobile ? 1 : 0.98 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className={
            mobile
              ? "mt-3 space-y-1 rounded-2xl border border-[var(--border-soft)] bg-white p-3"
              : "absolute left-0 top-12 z-50 w-72 rounded-3xl border border-[var(--border-soft)] bg-white p-2 shadow-[var(--shadow-soft)]"
          }
        >
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onNavigate}
              className="block rounded-2xl px-3 py-3 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-600)]"
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
