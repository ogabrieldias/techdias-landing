import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Project } from "@/lib/portfolio-data"
import { LaptopMockup } from "@/components/portfolio/laptop-mockup"
import { MobileMockup } from "@/components/portfolio/mobile-mockup"
import { TechBadges } from "@/components/portfolio/tech-badges"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article data-animate="fade-up" className="grid gap-10 border-t border-border py-16 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-16 md:py-24">
      <div className="relative pr-5 sm:pr-10" data-animate="scale-up">
        <LaptopMockup src={project.desktopImage} alt={`Preview do projeto ${project.title}`} accent={project.accent} />
        <MobileMockup src={project.mobileImage} alt={`Versão mobile do projeto ${project.title}`} />
      </div>
      <div className="flex flex-col gap-6 md:max-w-md">
        <div className="flex items-center gap-4 font-mono text-xs tracking-[0.16em] text-muted-foreground">
          <span style={{ color: project.accent }}>{project.index}</span>
          <span className="h-px w-10 bg-border" />
          <span>CASE STUDY</span>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{project.eyebrow}</p>
          <h2 className="font-heading text-4xl font-semibold tracking-[-0.06em] text-foreground sm:text-5xl">{project.title}</h2>
          <p className="text-base leading-7 text-muted-foreground">{project.description}</p>
        </div>
        <TechBadges technologies={project.technologies} />
        <div className="flex flex-wrap gap-3 pt-2">
          {project.liveUrl && (
            <Button asChild className="rounded-full px-5" style={{ backgroundColor: project.accent }}>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Acessar projeto <ArrowUpRight data-icon="inline-end" /></a>
            </Button>
          )}
          <Button asChild variant="outline" className="rounded-full px-5">
            <a href="#contato">Conversar sobre um projeto <ArrowUpRight data-icon="inline-end" /></a>
          </Button>
        </div>
      </div>
    </article>
  )
}
