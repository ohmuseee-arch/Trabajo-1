"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TrainerChatModal } from "@/components/trainer/trainer-chat-modal";
import { Button } from "@/components/ui/button";

interface SiteShellProps {
  children: React.ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  const [trainerOpen, setTrainerOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen text-[var(--text-primary)]">
      <Header onOpenTrainer={() => setTrainerOpen(true)} />
      <main>{children}</main>
      <Footer />

      <div className="fixed bottom-4 right-4 z-40 lg:hidden">
        <Button
          size="icon"
          className="rounded-full"
          onClick={() => setTrainerOpen(true)}
          aria-label="Abrir entrenador"
        >
          <MessageCircle size={18} />
        </Button>
      </div>

      <TrainerChatModal open={trainerOpen} onClose={() => setTrainerOpen(false)} />
    </div>
  );
}
