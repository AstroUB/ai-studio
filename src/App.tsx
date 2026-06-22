import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroRobot from "./assets/hero-robot.png";
import { Cursor } from "./components/landing/Cursor";
import { ThemeToggle } from "./components/landing/ThemeToggle";
import {
  IconArrow,
  IconBolt,
  IconBrain,
  IconChart,
  IconChat,
  IconCompass,
  IconCpu,
  IconFlow,
  IconLayers,
  IconMenu,
  IconMinus,
  IconNode,
  IconPlus,
  IconShield,
  IconSpark,
} from "./components/landing/AnimatedIcons";

gsap.registerPlugin(ScrollTrigger);


export default function Landing() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Services />
        <Workflow />
        <Capabilities />
        <UseCases />
        <CaseStudies />
        <Stats />
        <Tech />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

/* ───────────────────────── NAV ───────────────────────── */
function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 text-white md:px-10">
        <a href="#top" className="font-display text-xl tracking-tight">
          AXIOM<span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {["Services", "Process", "Work", "Pricing"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm opacity-80 transition-opacity hover:opacity-100">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button aria-label="Menu" className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 md:hidden">
            <IconMenu />
          </button>
        </div>
      </div>
    </header>
  );
}

/* ───────────────────────── HERO ───────────────────────── */
function Hero() {
  const root = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (!titleRef.current) return;
    const ctx = gsap.context(() => {
      const splitChars = (el: HTMLElement) => {
        const text = el.textContent ?? "";
        el.innerHTML = text
          .split("")
          .map((c) =>
            c === " " ? `<span class="inline-block w-[0.3em]"> </span>` : `<span class="char inline-block overflow-hidden"><span class="inline-block translate-y-full">${c}</span></span>`
          )
          .join("");
      };
      splitChars(titleRef.current!);
      splitChars(subRef.current!);
      const all = root.current!.querySelectorAll(".char > span");
      gsap.to(all, {
        y: 0,
        duration: 1.1,
        ease: "expo.out",
        stagger: { each: 0.025 },
        delay: 0.2,
      });
      gsap.from(".hero-pill", { opacity: 0, y: 20, duration: 1, ease: "expo.out", stagger: 0.1, delay: 0.6 });
      gsap.from(".hero-image", { opacity: 0, scale: 0.96, duration: 1.6, ease: "expo.out" });
      gsap.from(".hero-copy", { opacity: 0, y: 20, duration: 1, ease: "expo.out", delay: 0.9 });

      gsap.to(".hero-image", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="top" className="relative isolate overflow-hidden h-[90vh] pt-28 md:pt-32">
      <div className="relative mx-auto max-w-[1400px] px-6 pb-16 md:px-10 md:pb-24">
        {/* Hero image absolute behind text */}

        <div className="pointer-events-none absolute inset-x-0 top-16 z-0 left-1/4 flex justify-center md:top-24 w-1/2 h-full">
          <img
            src={heroRobot}
            alt="AI android in profile"
            width={1024}
            height={1024}
            className="w-full h-full object-cover"
          />
        </div>
        {/* <div className="pointer-events-none absolute inset-x-0 top-16 z-0 flex justify-center md:top-24">
        </div> */}

        <div className="relative z-10">
          <h1 ref={titleRef} className="display-xl">
            AI AGENTS THAT EXECUTE.
          </h1>
          <h2 ref={subRef} className="display-lg mt-2 text-foreground/55 text-center">
            NOT JUST ASSIST.
          </h2>

          <div className="mt-10 grid grid-cols-1 items-end gap-10 md:mt-20 md:grid-cols-12">
            <div className="md:col-span-3">
              <div className="hero-pill pill">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Enterprise Level
              </div>
            </div>

            <div className="md:col-span-12 md:col-start-12 ml-20 w-full">
              <div className="hero-pill pill ml-auto w-fit">Ready-to-deploy Agents</div>
              <p className="mt-32 max-w-md text-base text-muted-foreground md:mt-40">
                Deploy specialized AI agents across sales, projects, and operations—designed to automate decisions, workflows, and outcomes at scale.
              </p>
              <div className="hero-copy mt-6 flex flex-wrap gap-3">
                <a href="#services" className="btn-primary">
                  Explore Agents <IconArrow />
                </a>
                <a href="#process" className="btn-ghost">See the Process</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── MARQUEE ───────────────────────── */
function Marquee() {
  const items = ["Salesforce", "Notion", "Stripe", "Linear", "Snowflake", "Anthropic", "OpenAI", "Vercel", "HubSpot", "Slack"];
  return (
    <section className="border-y border-hairline py-8">
      <div className="flex items-center gap-10 overflow-hidden">
        {/* <span className="eyebrow shrink-0 px-6 text-muted-foreground">Trusted by teams at</span> */}
        <div className="marquee-track">
          {[...items, ...items].map((b, i) => (
            <span key={i} className="font-display text-2xl text-foreground/40 md:text-3xl">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── MANIFESTO ───────────────────────── */
function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const words = ref.current!.querySelectorAll(".m-word");
      gsap.fromTo(
        words,
        { opacity: 0.08 },
        {
          opacity: 1,
          stagger: 0.04,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top 75%", end: "bottom 60%", scrub: true },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  const text = "We design autonomous systems that think, decide and act — replacing the busywork between intent and outcome with intelligent agents built for production.";
  return (
    <section ref={ref} className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-48">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-3">
          <span className="eyebrow text-muted-foreground">(01) Manifesto</span>
        </div>
        <p className="display-md md:col-span-9">
          {text.split(" ").map((w, i) => (
            <span key={i} className="m-word">
              {w}{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────── SERVICES ───────────────────────── */
function Services() {
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

/* ───────────────────────── WORKFLOW (horizontal scroll) ───────────────────────── */
function Workflow() {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const distance = () => track.current!.scrollWidth - window.innerWidth + 80;
      gsap.to(track.current, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const steps = [
    { n: "01", t: "Discover", d: "We map your workflows, data surfaces, and decision points to identify high-leverage agent opportunities.", icon: IconCompass },
    { n: "02", t: "Architect", d: "Agent graph, tool integrations, eval criteria, and guardrails are designed before a single token is generated.", icon: IconLayers },
    { n: "03", t: "Build", d: "Production agents shipped on your stack with full observability, versioned prompts, and CI evals.", icon: IconCpu },
    { n: "04", t: "Deploy", d: "Roll out to a pilot cohort with human-in-the-loop checkpoints and live telemetry from day one.", icon: IconBolt },
    { n: "05", t: "Evolve", d: "Weekly evals, retraining loops, and agent upgrades — your fleet gets sharper every sprint.", icon: IconSpark },
  ];

  return (
    <section id="process" ref={root} className="relative h-screen overflow-hidden border-y border-hairline bg-surface">
      <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-6 py-8 md:px-10">
        <span className="eyebrow text-muted-foreground">(03) Process / Horizontal</span>
        <span className="font-mono text-xs text-muted-foreground">Scroll →</span>
      </div>

      <div ref={track} className="absolute top-0 flex h-full items-center gap-8 pl-6 md:gap-12 md:pl-10" style={{ willChange: "transform" }}>
        <div className="flex w-[60vw] shrink-0 flex-col justify-center md:w-[45vw]">
          <h2 className="display-lg">How we<br />build agents.</h2>
          <p className="mt-6 max-w-md text-muted-foreground">A five-stage operating model that takes your problem from whiteboard to deployed, monitored, evolving AI workforce.</p>
        </div>
        {steps.map((s) => (
          <article key={s.n} className="flex h-[62vh] w-[78vw] shrink-0 flex-col justify-between border border-hairline bg-card p-8 md:w-[36vw] md:p-12" data-cursor="hover">
            <div className="flex items-start justify-between">
              <s.icon className="ai-icon size-lg text-accent" />
              <span className="font-mono text-xs text-muted-foreground">{s.n} / 05</span>
            </div>
            <div>
              <h3 className="font-display text-5xl tracking-tight md:text-6xl">{s.t}</h3>
              <p className="mt-6 max-w-sm text-muted-foreground">{s.d}</p>
            </div>
          </article>
        ))}
        <div className="w-24 shrink-0" />
      </div>
    </section>
  );
}

/* ───────────────────────── CAPABILITIES (big list) ───────────────────────── */
function Capabilities() {
  const items = [
    "Multi-agent orchestration",
    "Retrieval over private knowledge",
    "Tool-use & code execution",
    "Reasoning trace audit logs",
    "Real-time eval pipelines",
    "Human-in-the-loop approvals",
    "Fine-tuned domain models",
    "On-prem & VPC deployment",
  ];
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cap-row", {
        opacity: 0,
        y: 30,
        stagger: 0.08,
        duration: 0.9,
        ease: "expo.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="eyebrow text-muted-foreground">(04) Capabilities</span>
          <h2 className="display-lg mt-4">Built like real software.</h2>
        </div>
      </div>
      <div className="border-t border-hairline">
        {items.map((it, i) => (
          <div key={it} className="cap-row group flex items-center justify-between border-b border-hairline py-6 transition-colors hover:text-accent" data-cursor="hover">
            <div className="flex items-baseline gap-6">
              <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              <span className="font-display text-2xl tracking-tight md:text-4xl">{it}</span>
            </div>
            <IconArrow className="ai-icon opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── USE CASES ───────────────────────── */
function UseCases() {
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

/* ───────────────────────── CASE STUDIES ───────────────────────── */
function CaseStudies() {
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

/* ───────────────────────── STATS ───────────────────────── */
function Stats() {
  const stats = [
    { n: 240, suf: "+", l: "Agents in production" },
    { n: 96, suf: "%", l: "Avg eval pass rate" },
    { n: 38, suf: "M", l: "Tasks executed monthly" },
    { n: 14, suf: "x", l: "Faster than human-only ops" },
  ];
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ref.current!.querySelectorAll<HTMLElement>(".ticker-num").forEach((el) => {
        const target = Number(el.dataset.n);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 2.2,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => (el.firstChild!.textContent = Math.floor(obj.v).toString()),
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="border-y border-hairline bg-foreground text-background">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px bg-foreground md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="bg-foreground p-10 md:p-14">
            <div className="ticker-num text-5xl md:text-7xl" data-n={s.n}>
              <span>0</span>
              <span className="text-accent">{s.suf}</span>
            </div>
            <p className="mt-4 text-sm text-background/60">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── TECH ───────────────────────── */
function Tech() {
  const stack = ["OpenAI", "Anthropic", "Google Vertex", "Mistral", "LangGraph", "Temporal", "Pinecone", "pgvector", "Snowflake", "Databricks", "Vercel", "Cloudflare"];
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="eyebrow text-muted-foreground">(07) Stack</span>
          <h2 className="display-md mt-4">Model-agnostic.<br />Infra-native.</h2>
          <p className="mt-6 max-w-sm text-muted-foreground">We bring our opinions on architecture and stay neutral on vendors. Swap models, swap stores, keep the agent.</p>
        </div>
        <div className="md:col-span-8">
          <div className="flex flex-wrap gap-3">
            {stack.map((s) => (
              <span key={s} className="pill" data-cursor="hover">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── TESTIMONIALS ───────────────────────── */
function Testimonials() {
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

/* ───────────────────────── PRICING ───────────────────────── */
function Pricing() {
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

/* ───────────────────────── FAQ ───────────────────────── */
function FAQ() {
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

/* ───────────────────────── CTA ───────────────────────── */
function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".cta-mark", {
        rotate: 360,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 1 },
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section id="cta" ref={ref} className="relative overflow-hidden bg-foreground py-32 text-background md:py-48">
      <div className="cta-mark pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 opacity-10">
        <svg width="540" height="540" viewBox="0 0 200 200" className="text-background">
          <circle cx="100" cy="100" r="98" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <text>
            <textPath href="#cir" startOffset="0">
              EXECUTE · NOT ASSIST · EXECUTE · NOT ASSIST · EXECUTE · NOT ASSIST ·
            </textPath>
          </text>
          <path id="cir" d="M100,100 m-90,0 a90,90 0 1,1 180,0 a90,90 0 1,1 -180,0" fill="none" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <span className="eyebrow text-background/60">(11) Start</span>
        <h2 className="display-xl mt-6 max-w-5xl">Let&apos;s deploy your first agent.</h2>
        <p className="mt-8 max-w-xl text-background/70">Tell us about one workflow that&apos;s eating your team&apos;s week. We&apos;ll come back with an agent design within 48 hours.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="mailto:hello@axiom.ai" className="btn-primary bg-background text-foreground hover:bg-accent hover:text-accent-foreground">
            Book a strategy call <IconArrow />
          </a>
          <a href="#services" className="btn-ghost border-background/40 text-background">View agents</a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FOOTER ───────────────────────── */
function Footer() {
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
          <span className="font-mono">v4.2.0 — last deploy 06.22.2026</span>
        </div>
      </div>
    </footer>
  );
}
