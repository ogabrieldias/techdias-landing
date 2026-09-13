"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/portfolio/project-card"
import { PROJECTS } from "@/lib/portfolio-data"
import { useGsapScrollTrigger } from "@/hooks/use-gsap"

export default function PortfolioPage() {
  useGsapScrollTrigger()

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true })
    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative overflow-hidden px-6 pb-20 pt-40 md:pb-32 md:pt-48">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-5xl" data-animate="fade-up">
              <p className="mb-7 font-mono text-xs uppercase tracking-[0.2em] text-primary">Portfólio / 2026</p>
              <h1 className="font-heading text-[clamp(3.8rem,10vw,9rem)] font-semibold leading-[0.86] tracking-[-0.08em] text-foreground">
                Projetos que
                <br />
                <span className="text-primary">fazem sentido.</span>
              </h1>
            </div>
            <div className="mt-16 flex flex-col justify-between gap-8 border-t border-border pt-6 md:flex-row md:items-end" data-animate="fade-up">
              <p className="max-w-md text-lg leading-7 text-muted-foreground">Design, tecnologia e estratégia para marcas que querem sair do lugar comum e ocupar um espaço próprio.</p>
              <a href="#projetos" className="group flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-foreground">
                Explorar trabalhos <ArrowDown className="transition-transform group-hover:translate-y-1" data-icon="inline-end" />
              </a>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-primary/10 blur-3xl" data-parallax="0.2" />
        </section>

        <section id="projetos" className="px-6 pb-16 md:pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              <span>Seleção de projetos</span>
              <span>{String(PROJECTS.length).padStart(2, "0")} trabalhos</span>
            </div>
            {PROJECTS.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        </section>

        <section id="contato" className="bg-foreground px-6 py-24 text-background md:py-36">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between" data-animate="fade-up">
            <div>
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-background/50">Próximo projeto</p>
              <h2 className="max-w-3xl font-heading text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-8xl">Vamos fazer algo <span className="text-primary">relevante?</span></h2>
            </div>
            <a href="mailto:ola@techdias.com.br" className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">Falar com a TechDias <ArrowUpRight data-icon="inline-end" /></a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

