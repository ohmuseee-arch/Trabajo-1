import { faqItems } from "@/data/faq";

export function FaqAccordion() {
  return (
    <div className="space-y-3">
      {faqItems.map((item) => (
        <details
          key={item.id}
          className="group rounded-[24px] border border-[var(--border-soft)] bg-white p-4 shadow-[var(--shadow-card)]"
        >
          <summary className="cursor-pointer list-none text-base font-semibold text-[var(--text-primary)] outline-none sm:text-lg">
            {item.question}
          </summary>
          <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
