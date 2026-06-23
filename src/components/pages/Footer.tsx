export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display text-3xl tracking-tight">AXIOM<span className="text-accent">.</span></div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">An AI agency building autonomous systems for operators who measure outcomes, not output.</p>
          </div>
          {[
            { h: "Studio", l: ["Services", "Process", "Work", "Pricing"] },
            { h: "Company", l: ["About", "Careers", "Press", "Contact"] },
            { h: "Legal", l: ["Privacy", "Terms", "Security", "DPA"] },
          ].map((c) => (
            <div key={c.h} className="md:col-span-2">
              <span className="eyebrow text-muted-foreground">{c.h}</span>
              <ul className="mt-4 space-y-2 text-sm">
                {c.l.map((i) => (
                  <li key={i}><a href="#" className="hover:text-accent">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
          <div className="md:col-span-1 md:text-right">
            <span className="eyebrow text-muted-foreground">2026</span>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap justify-between gap-4 border-t border-hairline pt-8 text-xs text-muted-foreground">
          <span>© Axiom Intelligence Ltd.</span>
          <span className="font-mono">Build by Arinova Studio</span>
        </div>
      </div>
    </footer>
  );
}
