import { faqItems } from "@/data/faq";

export function FaqAccordion() {
  return (
    <div className="space-y-4">
      {faqItems.map((item) => (
        <details
          key={item.id}
          className="group rounded-[28px] border border-[var(--border-soft)] bg-white p-5 shadow-[var(--shadow-card)]"
        >
          <summary className="cursor-pointer list-none text-lg font-semibold text-[var(--text-primary)] outline-none">
            {item.question}
          </summary>
          <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
