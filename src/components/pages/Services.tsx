import {
  IconArrow,
  IconBolt,
  IconBrain,
  IconChart,
  IconChat,
  IconFlow,
  IconShield,
} from "./../landing/AnimatedIcons";

export function Services() {
  const services = [
    { icon: IconBrain, n: "01", t: "Strategy Agents", d: "Diagnose, model, and recommend with full reasoning traces over your operational data." },
    { icon: IconFlow, n: "02", t: "Workflow Agents", d: "Multi-step automations that execute across CRM, ERP, and internal tooling end-to-end." },
    { icon: IconChat, n: "03", t: "Conversational Agents", d: "Voice and chat surfaces tuned to your brand, your policies, your data — not generic LLM." },
    { icon: IconChart, n: "04", t: "Insight Agents", d: "Continuously monitor signals, surface anomalies, and generate narrative reports." },
    { icon: IconShield, n: "05", t: "Compliance Agents", d: "Audit, redact, classify and enforce policy across every channel with full traceability." },
    { icon: IconBolt, n: "06", t: "Ops Agents", d: "Triage tickets, route incidents, and resolve issues with human-in-the-loop checkpoints." },
  ];
  return (
    <section id="services" className="border-t border-hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
          <div>
            <span className="eyebrow text-muted-foreground">(02) Services</span>
            <h2 className="display-lg mt-4 max-w-3xl">Six agents.<br />One operating system for execution.</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">Each agent is composable, observable, and shipped with eval suites — not a demo, not a wrapper.</p>
        </div>

        <div className="grid grid-cols-1 border-t border-hairline md:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.n}
              className={`group relative flex flex-col gap-10 border-b border-hairline p-8 transition-colors hover:bg-surface md:p-10 ${
                i % 3 !== 2 ? "md:border-r md:border-hairline" : ""
              }`}
              data-cursor="hover"
            >
              <div className="flex items-start justify-between">
                <s.icon className="ai-icon size-lg text-accent" />
                <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
              </div>
              <div>
                <h3 className="font-display text-2xl tracking-tight">{s.t}</h3>
                <p className="mt-3 max-w-xs text-sm text-muted-foreground">{s.d}</p>
              </div>
              <IconArrow className="ai-icon -translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}