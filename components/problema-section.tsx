"use client"

import { UserX, ThumbsDown, Link2Off, PhoneOff } from "lucide-react"

const problems = [
  {
    icon: UserX,
    title: "Perde clientes",
    description: "Sem uma página profissional, você perde oportunidades todos os dias para concorrentes que tem presença online.",
  },
  {
    icon: ThumbsDown,
    title: "Falta profissionalismo",
    description: "Perfil no Instagram não transmite a mesma credibilidade de um site profissional e bem estruturado.",
  },
  {
    icon: Link2Off,
    title: "Depende de indicação",
    description: "Sem presença digital, seu negócio depende 100% de indicações e não escala como poderia.",
  },
  {
    icon: PhoneOff,
    title: "Contato difícil",
    description: "Clientes não encontram suas informações facilmente, dificultando o primeiro contato e a venda.",
  },
]

export function ProblemaSection() {
  return (
    <section id="problema" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center" data-animate="fade-up">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#2563EB]">
            O Problema
          </span>
          <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Você está perdendo dinheiro<br className="hidden sm:block" /> sem saber.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A maioria dos negócios enfrenta esses problemas diariamente e nem percebe quanto dinheiro está deixando na mesa.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-animate="stagger">
          {problems.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-[#2563EB]/30 hover:shadow-lg hover:shadow-[#2563EB]/5 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#ef4444]/10 transition-colors group-hover:bg-[#ef4444]/15">
                <item.icon className="h-6 w-6 text-[#ef4444]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
