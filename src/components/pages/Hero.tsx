import heroRobot from "./../../assets/hero-robot.png";
import { useLayoutEffect, useRef } from "react";
import { IconArrow } from "../landing/AnimatedIcons";
import gsap from "gsap";

export function Hero() {
  const root = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subRef = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    if (!titleRef.current || !subRef.current || !root.current) return;

    const ctx = gsap.context(() => {
      const splitChars = (el: HTMLElement) => {
        const text = el.textContent ?? "";

        el.innerHTML = text
          .split("")
          .map((c) =>
            c === " "
              ? `<span class="inline-block w-[0.3em]"> </span>`
              : `<span class="char inline-block overflow-hidden"><span class="inline-block translate-y-full">${c}</span></span>`
          )
          .join("");
      };

      splitChars(titleRef.current);
      splitChars(subRef.current);

      const all = root.current!.querySelectorAll(".char > span");

      gsap.to(all, {
        y: 0,
        duration: 1.1,
        ease: "expo.out",
        stagger: { each: 0.025 },
        delay: 0.2,
      });

      gsap.from(".hero-pill", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "expo.out",
        stagger: 0.1,
        delay: 0.6,
      });

      gsap.from(".hero-image", {
        opacity: 0,
        scale: 0.96,
        duration: 1.6,
        ease: "expo.out",
      });

      gsap.from(".hero-copy", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "expo.out",
        delay: 0.9,
      });

      gsap.to(".hero-image", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="relative isolate overflow-hidden min-h-screen md:h-[91vh] pt-24 md:pt-32"
    >
      <div className="relative mx-auto max-w-[1600px] px-6 pb-16 md:px-10 md:pb-24">
        {/* Hero image */}
        <div className="pointer-events-none absolute inset-x-0 top-10 md:top-24 z-0 flex justify-center">
          <img
            src={heroRobot}
            alt="AI android in profile"
            width={1024}
            height={1024}
            className="hero-image h-[50vh] sm:h-[40vh] md:h-[70vh] w-auto max-w-none object-contain"
          />
        </div>

        <div className="relative z-10">
          <h1
            ref={titleRef}
            className="display-xl text-center px-2 text-balance"
          >
            AI AGENTS THAT EXECUTE.
          </h1>

          <h2
            ref={subRef}
            className="display-lg mt-2 text-center text-foreground/55 px-2"
          >
            NOT JUST ASSIST.
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-20 md:grid-cols-12 items-end">
            {/* Left pill */}
            <div className="md:col-span-3 flex justify-center md:block">
              <div className="hero-pill pill">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Enterprise Level
              </div>
            </div>

            {/* Right content */}
            <div className="md:col-span-5 md:col-start-10 text-center md:text-left">
              <div className="hero-pill pill mx-auto md:ml-auto md:mr-0 w-fit">
                Ready-to-deploy Agents
              </div>

              <p className="hero-copy mt-52 md:mt-40 max-w-sm mx-auto md:mx-0 text-base text-muted-foreground">
                Deploy specialized AI agents across sales, projects, and
                operations—designed to automate decisions, workflows, and
                outcomes at scale.
              </p>

              <div className="hero-copy mt-6 flex flex-wrap justify-center md:justify-start gap-3">
                <a href="#services" className="btn-primary">
                  Explore Agents <IconArrow />
                </a>

                <a href="#process" className="btn-ghost">
                  See the Process
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}