import { useLayoutEffect, useRef } from "react";
import { IconArrow } from "../landing/AnimatedIcons";
import gsap from "gsap";

export function Capabilities() {
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
