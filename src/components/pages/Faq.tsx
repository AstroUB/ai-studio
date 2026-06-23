import { useState } from "react";
import { IconMinus, IconPlus } from "../landing/AnimatedIcons";

export function FAQ() {
  const qs = [
    { q: "How is this different from a copilot?", a: "Copilots assist humans. Our agents own outcomes — they decide, act on systems, and report back. Humans review, not key-stroke." },
    { q: "Which models do you use?", a: "We benchmark per use-case and stay model-agnostic. Production fleets typically mix Anthropic, OpenAI, and fine-tuned open models." },
    { q: "Where does my data live?", a: "Your VPC, your cloud, your retention rules. We deploy into your perimeter; nothing trains on your data." },
    { q: "How fast can you ship?", a: "First production agent in four weeks. Fleets compounding from week six. We don’t do six-month pilots." },
    { q: "Who owns the IP?", a: "You do — code, prompts, evals, and weights of any fine-tunes. Our value is the operating model, not lock-in." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-y border-hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="eyebrow text-muted-foreground">(10) Questions</span>
            <h2 className="display-lg mt-4">Asked often.</h2>
          </div>
          <div className="md:col-span-8">
            {qs.map((it, i) => {
              const isOpen = open === i;
              return (
                <button
                  key={i}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="block w-full border-t border-hairline py-6 text-left last:border-b"
                  data-cursor="hover"
                >
                  <div className="flex items-center justify-between gap-8">
                    <span className="font-display text-xl tracking-tight md:text-2xl">{it.q}</span>
                    <span className="shrink-0">{isOpen ? <IconMinus /> : <IconPlus />}</span>
                  </div>
                  <div
                    className="grid overflow-hidden transition-all duration-500"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0">
                      <p className="max-w-2xl pt-4 text-muted-foreground">{it.a}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
