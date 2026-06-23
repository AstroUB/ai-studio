import { useState } from "react";
import { IconArrow, IconSpark } from "../landing/AnimatedIcons";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setSubmitted(true);
  };

  const inputCls =
    "w-full border-0 border-b border-hairline bg-transparent py-4 text-base outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent";

  return (
    <section id="contact" className="border-t border-hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <span className="eyebrow text-muted-foreground">(11) Contact</span>
            <h2 className="display-lg mt-4">Tell us what to automate.</h2>
            <p className="mt-6 max-w-sm text-muted-foreground">
              Drop one workflow that&apos;s eating your team&apos;s week. We&apos;ll reply within 48 hours with an agent design sketch.
            </p>
            <div className="mt-12 space-y-6 border-t border-hairline pt-8">
              <div>
                <span className="eyebrow text-muted-foreground">Email</span>
                <p className="mt-2 font-display text-xl tracking-tight">hello@axiom.ai</p>
              </div>
              <div>
                <span className="eyebrow text-muted-foreground">Studios</span>
                <p className="mt-2 font-display text-xl tracking-tight">New York · Lisbon · Singapore</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            {submitted ? (
              <div className="flex h-full min-h-[400px] flex-col items-start justify-center rounded-2xl border border-hairline bg-surface p-10 md:p-14" data-cursor="hover">
                <IconSpark className="ai-icon size-lg text-accent" />
                <h3 className="mt-8 font-display text-3xl tracking-tight md:text-4xl">Brief received.</h3>
                <p className="mt-4 max-w-md text-muted-foreground">
                  Thanks {form.name.split(" ")[0]}. An architect will reach out within two business days.
                </p>
                <button
                  type="button"
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", message: "" }); }}
                  className="btn-ghost mt-10"
                >
                  Send another <IconArrow />
                </button>
              </div>
            ) : (
              <form onSubmit={handle} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="md:col-span-1">
                  <label className="eyebrow text-muted-foreground" htmlFor="c-name">Name</label>
                  <input id="c-name" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} placeholder="Your full name" />
                </div>
                <div className="md:col-span-1">
                  <label className="eyebrow text-muted-foreground" htmlFor="c-email">Email</label>
                  <input id="c-email" type="email" required maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} placeholder="you@company.com" />
                </div>
                <div className="md:col-span-2">
                  <label className="eyebrow text-muted-foreground" htmlFor="c-co">Company</label>
                  <input id="c-co" maxLength={120} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputCls} placeholder="Where you work" />
                </div>
                <div className="md:col-span-2">
                  <label className="eyebrow text-muted-foreground" htmlFor="c-msg">The workflow</label>
                  <textarea id="c-msg" required maxLength={1000} rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputCls} resize-none`} placeholder="Describe the process you'd hand to an agent…" />
                </div>
                <div className="md:col-span-2 mt-2 flex flex-wrap items-center justify-between gap-4">
                  <span className="font-mono text-xs text-muted-foreground">{form.message.length}/1000</span>
                  <button type="submit" className="btn-primary">
                    Send brief <IconArrow />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
