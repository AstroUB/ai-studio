import { useEffect, useState } from "react";
import { IconMoon, IconSun } from "./AnimatedIcons";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved ? saved === "dark" : prefers;
    setDark(initial);
    document.documentElement.classList.toggle("dark", initial);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:border-foreground"
    >
      {dark ? <IconSun /> : <IconMoon />}
    </button>
  );
}
