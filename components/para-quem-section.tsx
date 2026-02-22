"use client"

import { Lightbulb, Wrench, ShoppingBag, Megaphone } from "lucide-react"

const niches = [
  {
    icon: Lightbulb,
    title: "Infoprodutores",
    description: "Venda seus cursos, mentorias e produtos digitais com paginas otimizadas para conversao.",
    tag: "Produtos digitais",
  },
  {
    icon: Wrench,
    title: "Prestadores de servico",
    description: "Mostre seu portfolio, depoimentos e facilite o contato com novos clientes.",
    tag: "Servicos",
  },
  {
    icon: ShoppingBag,
    title: "Lojas locais",
    description: "Atraia clientes da sua regiao com uma pagina profissional e visivel no Google.",
    tag: "Comercio",
  },
  {
    icon: Megaphone,
    title: "Profissionais liberais",
    description: "Advogados, dentistas, coaches — transmita autoridade com uma pagina sob medida.",
    tag: "Profissionais",
  },
]

export function ParaQuemSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center" data-animate="fade-up">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#2563EB]">
            Para quem e
          </span>
          <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Feito para quem quer<br className="hidden sm:block" /> vender mais.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-animate="stagger">
          {niches.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-[#2563EB]/30 hover:shadow-lg hover:shadow-[#2563EB]/5 hover:-translate-y-1"
            >
              <span className="mb-4 inline-block w-fit rounded-full bg-[#2563EB]/10 px-3 py-1 text-xs font-semibold text-[#2563EB]">
                {item.tag}
              </span>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary transition-colors group-hover:bg-[#2563EB]/10">
                <item.icon className="h-6 w-6 text-foreground transition-colors group-hover:text-[#2563EB]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
