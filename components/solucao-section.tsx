"use client"

import { Globe, Zap, BarChart3, Shield } from "lucide-react"

const bullets = [
  {
    icon: Globe,
    title: "Presenca profissional",
    description: "Pagina propria que transmite credibilidade e profissionalismo.",
  },
  {
    icon: Zap,
    title: "Alta conversao",
    description: "Estrutura estrategica focada em transformar visitantes em clientes.",
  },
  {
    icon: BarChart3,
    title: "Resultados mensuraveis",
    description: "Acompanhe metricas e entenda o comportamento do seu publico.",
  },
  {
    icon: Shield,
    title: "Suporte completo",
    description: "Do planejamento a publicacao, cuidamos de tudo para voce.",
  },
]

export function SolucaoSection() {
  return (
    <section className="relative bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center" data-animate="fade-up">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#2563EB]">
            A Solucao
          </span>
          <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Uma pagina profissional que<br className="hidden sm:block" /> trabalha por voce.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Criamos paginas estrategicas e otimizadas que funcionam como o seu melhor vendedor — 24 horas por dia, 7 dias por semana.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 hidden h-px -translate-y-1/2 bg-border lg:block" />
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" data-animate="stagger">
            {bullets.map((item, i) => (
              <div key={item.title} className="relative text-center">
                {/* Dot on line */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[#2563EB]/20 bg-[#2563EB]/5 transition-colors hover:border-[#2563EB]/40 hover:bg-[#2563EB]/10">
                  <item.icon className="h-7 w-7 text-[#2563EB]" />
                </div>
                <span className="mb-2 inline-block text-xs font-bold text-[#2563EB]">
                  0{i + 1}
                </span>
                <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
