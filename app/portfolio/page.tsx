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
        {/* ── Hero ── */}
        <section className="relative overflow-hidden px-6 pb-20 pt-40 md:pb-32 md:pt-48">
          {/* Subtle grid background */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-5xl" data-animate="fade-up">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-[#2563EB]">
                Portfólio
              </span>
              <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
                Projetos que
                <br />
                <span className="text-[#2563EB]">fazem a diferença.</span>
              </h1>
            </div>

            <div
              className="mt-12 flex flex-col justify-between gap-8 border-t border-border pt-6 md:flex-row md:items-end"
              data-animate="fade-up"
            >
              <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                Cada projeto é desenvolvido com estratégia, design e tecnologia para transformar ideias em experiências digitais que geram resultados reais.
              </p>
              <a
                href="#projetos"
                className="group flex items-center gap-3 text-sm font-semibold text-foreground transition-colors hover:text-[#2563EB]"
              >
                Explorar projetos
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
            </div>
          </div>

          {/* Decorative glow */}
          <div
            className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#2563EB]/8 blur-3xl"
            data-parallax="0.2"
          />
        </section>

        {/* ── Project list ── */}
        <section id="projetos" className="px-6 pb-16 md:pb-28">
          <div className="mx-auto max-w-7xl">
            {/* Section header */}
            <div
              className="mb-2 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground"
              data-animate="fade-in"
            >
              <span>Seleção de projetos</span>
              <span>
                {String(PROJECTS.length).padStart(2, "0")} trabalhos
              </span>
            </div>

            {/* Projects */}
            {PROJECTS.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                reversed={i % 2 !== 0}
              />
            ))}
          </div>
        </section>

        {/* ── CTA / Next project ── */}
        <section
          id="contato"
          className="relative overflow-hidden bg-[#2563EB] px-6 py-24 md:py-36"
        >
          {/* Background pattern */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />

          {/* Glow effects */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#ffffff]/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#ffffff]/5 blur-3xl" />

          <div
            className="relative mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between"
            data-animate="scale-up"
          >
            <div>
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-[#ffffff]/60">
                Próximo projeto
              </span>
              <h2 className="font-heading max-w-3xl text-3xl font-bold tracking-tight text-[#ffffff] sm:text-4xl lg:text-5xl">
                Vamos construir algo
                <br />
                <span className="text-[#ffffff]/90">relevante juntos?</span>
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#ffffff]/70">
                Transforme sua ideia em uma presença digital profissional que gera resultados reais para o seu negócio.
              </p>
            </div>
            <a
              href="https://api.whatsapp.com/send/?phone=5524998558044&text=Ol%C3%A1%21+Vi+o+portf%C3%B3lio+e+gostaria+de+conversar+sobre+um+projeto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#ffffff] px-8 py-4 text-base font-semibold text-[#2563EB] transition-all hover:bg-[#f8fafc] hover:shadow-xl hover:-translate-y-0.5"
            >
              Falar com a TechDias
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
