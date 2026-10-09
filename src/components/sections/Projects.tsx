import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function Projects({ standalone = false }: { standalone?: boolean }) {
  return (
    <section id="work" className="py-16 md:py-24">
      <div className="container-x">
        <SectionHeading
          as={standalone ? "h1" : "h2"}
          eyebrow="SELECTED WORK"
          title="A few things I've built."
          aside="Full-stack products across e-commerce, finance and fitness, from the interface to the deployment pipeline."
        />
        <div className="mt-10 space-y-6 md:mt-14 md:space-y-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
