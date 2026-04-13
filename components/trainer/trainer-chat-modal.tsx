"use client";

import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";

interface TrainerChatModalProps {
  open: boolean;
  onClose: () => void;
}

export function TrainerChatModal({ open, onClose }: TrainerChatModalProps) {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleClose() {
    setMessage("");
    setSent(false);
    onClose();
  }

  useEffect(() => {
    if (!open) {
      return;
    }

    function onEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMessage("");
        setSent(false);
        onClose();
      }
    }

    document.addEventListener("keydown", onEscape);

    return () => {
      document.removeEventListener("keydown", onEscape);
    };
  }, [open, onClose]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!message.trim()) {
      return;
    }

    setSent(true);
    setMessage("");
  }

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            className="fixed inset-0 z-[70] bg-slate-950/35 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="trainer-chat-title"
            className="fixed inset-0 z-[80] flex items-center justify-center p-4"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="w-full max-w-md overflow-hidden rounded-[30px] border border-[var(--border-soft)] bg-white shadow-[0_30px_65px_rgba(15,23,42,0.24)]">
              <div className="flex items-center justify-between bg-[linear-gradient(135deg,var(--blue-600),var(--violet-600))] px-5 py-4 text-white">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-white/20">
                    <MessageCircle size={20} />
                  </span>
                  <div>
                    <h3 id="trainer-chat-title" className="text-base font-semibold">
                      Carlos Ruiz
                    </h3>
                    <p className="text-sm text-white/85">Entrenador Personal</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex size-9 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  onClick={handleClose}
                  aria-label="Cerrar chat"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-4 p-5">
                <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--surface-soft)] p-4 text-sm text-[var(--text-secondary)]">
                  Hola, soy Carlos. ¿En qué puedo ayudarte hoy?
                </div>

                {sent ? (
                  <div className="flex items-center gap-2 rounded-2xl bg-[var(--green-100)] px-4 py-3 text-sm font-medium text-[var(--green-700)]">
                    <Sparkles size={16} />
                    Mensaje enviado. Te responderé en breve.
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} className="space-y-3">
                  <label htmlFor="trainer-message" className="sr-only">
                    Escribe tu mensaje
                  </label>
                  <div className="relative">
                    <input
                      id="trainer-message"
                      type="text"
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      placeholder="Escribe tu mensaje"
                      className="h-12 w-full rounded-xl border border-[var(--border-soft)] bg-white px-4 pr-12 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-600)]"
                    />
                    <button
                      type="submit"
                      className="absolute right-1 top-1 inline-flex size-10 items-center justify-center rounded-lg bg-[linear-gradient(135deg,var(--blue-600),var(--violet-600))] text-white disabled:cursor-not-allowed disabled:opacity-40"
                      disabled={!message.trim()}
                      aria-label="Enviar mensaje"
                    >
                      <Send size={16} />
                    </button>
                  </div>

                  <p className="text-xs font-medium text-[var(--text-tertiary)]">
                    Tiempo medio de respuesta: 5 minutos
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
