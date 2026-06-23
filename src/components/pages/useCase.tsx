import {
  IconChart,
  IconChat,
  IconCpu,
  IconNode,
} from "./../landing/AnimatedIcons";

export function UseCases() {
  const cases = [
    { t: "Sales Operations", d: "Pipeline triage, deal-room briefs, follow-up sequencing — autonomous from lead to close.", icon: IconChart },
    { t: "Customer Success", d: "Churn signals, account health, renewal playbooks executed without a CSM lifting a finger.", icon: IconChat },
    { t: "Finance & Ops", d: "Reconciliations, invoice routing, anomaly flagging across ERP and accounting systems.", icon: IconNode },
    { t: "Product & Engineering", d: "Bug triage, release notes, on-call summaries, and roadmap synthesis from a thousand signals.", icon: IconCpu },
  ];
  return (
    <section className="border-t border-hairline bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16">
          <span className="eyebrow text-muted-foreground">(05) Use Cases</span>
          <h2 className="display-lg mt-4 max-w-3xl">Where agents replace<br />the busywork.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {cases.map((c) => (
            <article key={c.t} className="group rounded-2xl border border-hairline bg-card p-8 transition-transform hover:-translate-y-1 md:p-10" data-cursor="hover">
              <c.icon className="ai-icon size-lg text-accent" />
              <h3 className="mt-10 font-display text-3xl tracking-tight">{c.t}</h3>
              <p className="mt-3 max-w-md text-muted-foreground">{c.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
