
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Cursor } from "./components/landing/Cursor";
import { Nav } from "./components/pages/Header";
import { Hero } from "./components/pages/Hero";
import { Marquee } from "./components/pages/Marquee";
import Manifesto from "./components/pages/Manifesto";
import { Services } from "./components/pages/Services";
import { Workflow } from "./components/pages/workflow";
import { Capabilities } from "./components/pages/Capabilities";
import { UseCases } from "./components/pages/useCase";
import { CaseStudies } from "./components/pages/CaseStudies";
import { Stats } from "./components/pages/Stats";
import { Tech } from "./components/pages/Tech";
import { Testimonials } from "./components/pages/Testimonials";
import { Pricing } from "./components/pages/Pricing";
import { FAQ } from "./components/pages/Faq";
import { CTA } from "./components/pages/Cta";
import { Footer } from "./components/pages/Footer";
import { Showcase } from "./components/pages/Showcase";
import { Team } from "./components/pages/Team";
import { Insights } from "./components/pages/Insights";
import { Contact } from "./components/pages/Contacts";

gsap.registerPlugin(ScrollTrigger);


export default function Landing() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Showcase />
        <Services />
        <Workflow />
        <Capabilities />
        <UseCases />
        <CaseStudies />
        <Stats />
        <Team />
        <Insights />
        <Tech />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}