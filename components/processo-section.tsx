"use client"

import { useEffect, useRef } from "react"
import { MessageSquare, PenTool, Code2, Rocket, Headphones } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Briefing",
    description: "Entendemos seu negócio, objetivos e público-alvo.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Criamos o visual exclusivo da sua página.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento",
    description: "Construimos sua página com tecnologia moderna.",
  },
  {
    icon: Rocket,
    title: "Lançamento",
    description: "Publicamos sua página e garantimos que tudo funcione.",
  },
  {
    icon: Headphones,
    title: "Suporte",
    description: "Acompanhamento pós-entrega para ajustes.",
  },
]

export function ProcessoSection() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadGsap = async () => {
      const { gsap } = await import("gsap")
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      gsap.registerPlugin(ScrollTrigger)

      if (!timelineRef.current) return

      const line = timelineRef.current.querySelector("[data-timeline-line]")
      if (line) {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      const items = timelineRef.current.querySelectorAll("[data-timeline-item]")
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      )
    }
    loadGsap()
  }, [])

  return (
    <section id="processo" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center" data-animate="fade-up">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#2563EB]">
            Processo
          </span>
          <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simples, rápido e sem complicação.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Em 5 etapas você terá uma página profissional funcionando e gerando resultados.
          </p>
        </div>

        <div ref={timelineRef} className="relative mt-16">
          {/* Connecting line - desktop */}
          <div
            data-timeline-line
            className="absolute top-8 left-[10%] right-[10%] hidden h-0.5 origin-left bg-[#2563EB]/20 lg:block"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, i) => (
              <div
                key={step.title}
                data-timeline-item
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[#2563EB]/20 bg-card shadow-sm transition-all hover:border-[#2563EB] hover:shadow-md hover:shadow-[#2563EB]/10">
                  <step.icon className="h-7 w-7 text-[#2563EB]" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#2563EB] text-xs font-bold text-[#ffffff]">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-heading text-base font-bold text-foreground">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
