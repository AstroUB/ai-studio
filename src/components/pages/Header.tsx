import { IconMenu } from "../landing/AnimatedIcons";
import { ThemeToggle } from "./../landing/ThemeToggle";

export function Nav() {
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