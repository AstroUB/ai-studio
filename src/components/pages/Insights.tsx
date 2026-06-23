import { IconArrow } from "../landing/AnimatedIcons";
import showcaseNeural from "./../../assets/showcase-neural.jpg"
// import showcaseNeural from "./ assets/showcase-neural.jpg";
import showcaseWorkspace from "./../../assets/showcase-workspace.jpg";
import showcaseArch from "./../../assets/showcase-arch.jpg";

export function Insights() {
  const posts = [
    { tag: "Field Notes", date: "Jun 2026", t: "Why eval suites are the new unit tests for AI", img: showcaseNeural },
    { tag: "Architecture", date: "May 2026", t: "Designing agent graphs that survive production", img: showcaseArch },
    { tag: "Playbook", date: "Apr 2026", t: "From copilot to operator: a 90-day rollout plan", img: showcaseWorkspace },
  ];
  return (
    <section className="border-y border-hairline bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow text-muted-foreground">(09.5) Insights</span>
            <h2 className="display-lg mt-4">Field notes from production.</h2>
          </div>
          <a href="#" className="btn-ghost">All writing <IconArrow /></a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <a key={p.t} href="#" className="group block" data-cursor="hover">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-background">
                <img
                  src={p.img}
                  alt={p.t}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 font-mono text-xs text-muted-foreground">
                <span>{p.tag}</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                <span>{p.date}</span>
              </div>
              <h3 className="mt-3 font-display text-xl tracking-tight transition-colors group-hover:text-accent md:text-2xl">{p.t}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}