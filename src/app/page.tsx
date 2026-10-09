import { Hero } from "@/components/sections/Hero";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { Intro } from "@/components/sections/Intro";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { AboutQuote } from "@/components/sections/AboutQuote";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Terminal } from "@/components/sections/Terminal";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Intro />
      <Projects />
      <Experience />
      <Skills />
      <AboutQuote />
      <section aria-label="Education and certifications" className="py-16 md:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-16">
          <Education />
          <Certifications />
        </div>
      </section>
      <Terminal />
      <Contact />
    </>
  );
}
