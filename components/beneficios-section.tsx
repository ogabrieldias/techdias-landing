"use client"

import { Smartphone, Clock, TrendingUp, Palette } from "lucide-react"

const benefits = [
  {
    icon: Smartphone,
    title: "100% Responsiva",
    description: "Sua pagina funciona perfeitamente em qualquer dispositivo — celular, tablet ou desktop.",
  },
  {
    icon: Clock,
    title: "Entrega rapida",
    description: "Receba sua pagina pronta em poucos dias, sem atrasos ou enrolacao.",
  },
  {
    icon: TrendingUp,
    title: "Foco em conversao",
    description: "Cada elemento e estrategicamente posicionado para gerar mais clientes e vendas.",
  },
  {
    icon: Palette,
    title: "Design exclusivo",
    description: "Visual unico e personalizado que reflete a identidade do seu negocio.",
  },
]

export function BeneficiosSection() {
  return (
    <section id="beneficios" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center" data-animate="fade-up">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#2563EB]">
            Beneficios
          </span>
          <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Por que escolher a gente?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Nao vendemos apenas paginas. Entregamos uma ferramenta de vendas completa para o seu negocio.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2" data-animate="stagger">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="group flex gap-5 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-[#2563EB]/30 hover:shadow-lg hover:shadow-[#2563EB]/5"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#2563EB]/10 transition-colors group-hover:bg-[#2563EB]/15">
                <item.icon className="h-7 w-7 text-[#2563EB]" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
