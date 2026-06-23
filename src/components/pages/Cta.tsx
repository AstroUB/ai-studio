import { useEffect, useRef } from "react";
import { IconArrow } from "../landing/AnimatedIcons";
import gsap from "gsap";

export function CTA() {
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
