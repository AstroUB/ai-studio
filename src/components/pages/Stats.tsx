import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";


export function Stats() {
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