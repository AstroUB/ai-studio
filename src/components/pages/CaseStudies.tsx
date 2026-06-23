import { IconArrow } from "../landing/AnimatedIcons";

export function CaseStudies() {
  const cases = [
    { tag: "FinTech", t: "Cut deal-review cycle from 9 days to 14 hours", k: "−93%" },
    { tag: "SaaS", t: "Autonomous renewal agent recovered $4.2M in ARR", k: "$4.2M" },
    { tag: "Logistics", t: "Routing agents reduced exception backlog by 71%", k: "−71%" },
  ];
  return (
    <section id="work" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="eyebrow text-muted-foreground">(06) Selected Work</span>
          <h2 className="display-lg mt-4">Outcomes, not demos.</h2>
        </div>
        <a href="#" className="btn-ghost">All case studies <IconArrow /></a>
      </div>
      <div className="space-y-px">
        {cases.map((c, i) => (
          <article key={i} className="group grid grid-cols-12 items-center gap-6 border-t border-hairline py-10 transition-colors hover:bg-surface" data-cursor="hover">
            <span className="col-span-12 font-mono text-xs text-muted-foreground md:col-span-1">0{i + 1}</span>
            <span className="col-span-6 text-sm text-muted-foreground md:col-span-2">{c.tag}</span>
            <h3 className="col-span-12 font-display text-2xl tracking-tight md:col-span-7 md:text-3xl">{c.t}</h3>
            <span className="col-span-6 text-right font-display text-3xl text-accent md:col-span-2 md:text-4xl">{c.k}</span>
          </article>
        ))}
        <div className="border-t border-hairline" />
      </div>
    </section>
  );
}