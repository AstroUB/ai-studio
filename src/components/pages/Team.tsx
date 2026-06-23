import team1 from "./../../assets/team-1.jpg";
import team2 from "./../../assets/team-2.jpg";
import team3 from "./../../assets/team-3.jpg";
import team4 from "./../../assets/team-4.jpg";
import { IconArrow } from "../landing/AnimatedIcons";


export function Team() {
  const people = [
    { img: team1, n: "Maya Chen", r: "Founder · Agent Architecture" },
    { img: team2, n: "Daniel Ortega", r: "Head of Engineering" },
    { img: team3, n: "Priya Raman", r: "Design Director" },
    { img: team4, n: "Lukas Berg", r: "Strategy & Evals" },
  ];
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="eyebrow text-muted-foreground">(07.5) Studio</span>
          <h2 className="display-lg mt-4">The operators.</h2>
        </div>
        <p className="max-w-sm text-muted-foreground">A small senior team of researchers, engineers and designers who&apos;ve shipped AI systems into Fortune 500 production.</p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {people.map((p) => (
          <article key={p.n} className="group" data-cursor="hover">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface">
              <img
                src={p.img}
                alt={p.n}
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-2">
              <h3 className="truncate font-display text-lg tracking-tight md:text-xl">{p.n}</h3>
              <IconArrow className="ai-icon shrink-0 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
            </div>
            <p className="text-xs text-muted-foreground md:text-sm">{p.r}</p>
          </article>
        ))}
      </div>
    </section>
  );
}