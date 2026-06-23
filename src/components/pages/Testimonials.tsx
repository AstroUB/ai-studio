export function Testimonials() {
  const items = [
    { q: "Axiom replaced an entire ops pod. The agents ship eval reports every Monday — it feels like managing engineers, not prompts.", a: "Maya Chen", r: "COO, Northwind" },
    { q: "The fastest move from ‘interesting demo’ to ‘revenue line item’ we’ve ever made. Two quarters, eight figures of impact.", a: "Daniel Ortega", r: "VP Revenue, Heliograph" },
    { q: "Other vendors sold us copilots. Axiom built a workforce. Not the same thing.", a: "Priya Raman", r: "CTO, Lattice & Co." },
  ];
  return (
    <section className="border-y border-hairline bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16">
          <span className="eyebrow text-muted-foreground">(08) Voices</span>
          <h2 className="display-lg mt-4 max-w-3xl">What operators say<br />after 90 days.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <figure key={i} className="flex flex-col justify-between rounded-2xl border border-hairline bg-card p-8 md:p-10" data-cursor="hover">
              <blockquote className="font-display text-xl leading-snug tracking-tight md:text-2xl">“{t.q}”</blockquote>
              <figcaption className="mt-10 border-t border-hairline pt-6">
                <div className="font-medium">{t.a}</div>
                <div className="text-sm text-muted-foreground">{t.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
