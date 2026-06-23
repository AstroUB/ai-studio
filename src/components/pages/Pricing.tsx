import { IconArrow } from "../landing/AnimatedIcons";

export function Pricing() {
  const tiers = [
    { n: "Pilot", p: "$15k", per: "/ engagement", d: "A 4-week sprint to ship one production agent against a measurable KPI.", f: ["1 agent shipped", "Eval suite + dashboard", "Slack support", "30-day handover"] },
    { n: "Fleet", p: "$45k", per: "/ quarter", d: "An evolving fleet of 3–5 agents, owned and operated alongside your team.", f: ["Up to 5 agents", "Weekly model evals", "Embedded engineer", "Quarterly roadmap"], featured: true },
    { n: "Operator", p: "Custom", per: "", d: "We run your AI operations end-to-end as a managed practice on your stack.", f: ["Unlimited agents", "On-call agent ops", "VPC / on-prem deploy", "Executive cadence"] },
  ];
  return (
    <section id="pricing" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="eyebrow text-muted-foreground">(09) Engagements</span>
          <h2 className="display-lg mt-4">Three ways to work with us.</h2>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <article
            key={t.n}
            className={`flex flex-col rounded-2xl border p-8 md:p-10 ${
              t.featured ? "border-foreground bg-foreground text-background" : "border-hairline bg-card"
            }`}
            data-cursor="hover"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-2xl tracking-tight">{t.n}</h3>
              {t.featured && <span className="eyebrow text-accent">Most chosen</span>}
            </div>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-5xl tracking-tight">{t.p}</span>
              <span className={`text-sm ${t.featured ? "text-background/60" : "text-muted-foreground"}`}>{t.per}</span>
            </div>
            <p className={`mt-3 text-sm ${t.featured ? "text-background/70" : "text-muted-foreground"}`}>{t.d}</p>
            <ul className="mt-8 space-y-3 text-sm">
              {t.f.map((f) => (
                <li key={f} className="flex items-center gap-3 border-t border-hairline pt-3">
                  <span className={`h-1 w-1 rounded-full ${t.featured ? "bg-accent" : "bg-foreground"}`} />
                  {f}
                </li>
              ))}
            </ul>
            <a href="#cta" className={`mt-10 inline-flex items-center gap-2 self-start ${t.featured ? "btn-ghost border-background/40 text-background" : "btn-primary"}`}>
              Start here <IconArrow />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
