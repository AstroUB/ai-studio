import { useLayoutEffect, useRef } from "react";
import showcaseNeural from "./../../assets/showcase-neural.jpg";
import showcaseHand from "./../../assets/showcase-hand.jpg";
import showcaseWorkspace from "./../../assets/showcase-workspace.jpg";
import showcaseArch from "./../../assets/showcase-arch.jpg";
import showcaseReasoning from "./../../assets/showcase-reasoning.jpg";
import showcaseSecurity from "./../../assets/showcase-security.jpg";
import gsap from "gsap";


export function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".showcase-img").forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 1.15, y: 60 },
          {
            scale: 1,
            y: 0,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const items = [
    { src: showcaseNeural, t: "Neural orchestration", k: "Multi-agent graph", span: "md:col-span-7 md:row-span-2" },
    { src: showcaseHand, t: "Physical interfaces", k: "Embodied agents", span: "md:col-span-5" },
    { src: showcaseWorkspace, t: "Operator dashboard", k: "Realtime telemetry", span: "md:col-span-5" },
    { src: showcaseArch, t: "Built to scale", k: "Edge & on-prem", span: "md:col-span-4" },
    { src: showcaseReasoning, t: "Chain-of-thought", k: "Autonomous reasoning", span: "md:col-span-4" },
    { src: showcaseSecurity, t: "Policy enforcement", k: "Security layer", span: "md:col-span-4" },
  ];

  return (
    <section ref={ref} className="border-t border-hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow text-muted-foreground">(02.5) Showcase</span>
            <h2 className="display-lg mt-4 max-w-2xl">Intelligence,<br />made tangible.</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">A peek inside the systems we deploy — from neural graphs to embodied agents to the dashboards that keep them honest.</p>
        </div>
        <div className="grid auto-rows-[220px] grid-cols-1 gap-3 sm:auto-rows-[280px] md:auto-rows-[38vh] md:grid-cols-12 md:gap-4">
          {items.map((it) => (
            <figure key={it.t} className={`group relative overflow-hidden rounded-2xl bg-surface ${it.span}`} data-cursor="hover">
              <img
                src={it.src}
                alt={it.t}
                width={1024}
                height={1024}
                loading="lazy"
                className="showcase-img absolute -top-5 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/70 to-transparent p-5 text-white md:p-7">
                <span className="font-display text-lg tracking-tight md:text-2xl">{it.t}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-80 md:text-xs">{it.k}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
