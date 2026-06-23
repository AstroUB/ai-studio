import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Manifesto() {
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
