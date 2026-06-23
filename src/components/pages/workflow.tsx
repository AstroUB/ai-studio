import { useLayoutEffect, useRef } from "react";
import {
  IconBolt,
  IconCompass,
  IconCpu,
  IconLayers,
  IconSpark,
} from "./../landing/AnimatedIcons";
import gsap from "gsap";


export function Workflow() {
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
          <article key={s.n} className="flex h-[62vh] w-[78vw] shrink-0 flex-col justify-between rounded-2xl border border-hairline bg-card p-8 md:w-[36vw] md:p-12" data-cursor="hover">
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