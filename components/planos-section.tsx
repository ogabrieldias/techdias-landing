"use client"

import { useState } from "react"
import { Check, Star, ArrowRight, Zap } from "lucide-react"

const plans = [
  {
    name: "Essencial",
    price: "697",
    color: "#22c55e",
    popular: true,
    description: "Ideal para quem está começaando e precisa de uma presença digital profissional.",
    features: [
      "Página profissional",
      "Botão de WhatsApp",
      "Apresentação do negócio",
      "Publicação inclusa",
    ],
    link: "https://wa.me/5524998558044?text=Ol%C3%A1!%20Estou%20interessado%20no%20plano%20Pro%20Essencial."
  },
  {
    name: "Pro",
    price: "997",
    color: "#f59e0b",
    popular: false,
    description: "Para quem quer ir além com copy estratégica e estrutura de conversão.",
    features: [
      "Página completa",
      "Copy persuasiva",
      "Ajustes inclusos",
      "Estrutura de conversão",
    ],
    link: "https://wa.me/5524998558044?text=Ol%C3%A1!%20Estou%20interessado%20no%20plano%20Pro."
  },
  {
    name: "Pro Max",
    price: "1.497",
    color: "#ef4444",
    popular: false,
    description: "A solução premium para quem quer o máximo de resultado e prioridade total.",
    features: [
      "Página completa premium",
      "Copy estratégica avançada",
      "Estrutura premium",
      "Prioridade na entrega",
      "Automação básica inclusa",
    ],
    link: "https://wa.me/5524998558044?text=Ol%C3%A1!%20Estou%20interessado%20no%20plano%20Pro%20Max."
  },
]

export function PlanosSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="planos" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center" data-animate="fade-up">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#2563EB]">
            Planos
          </span>
          <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Escolha o plano ideal<br className="hidden sm:block" /> para o seu negócio.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Todos os planos incluem página profissional, suporte e publicação. Escolha o que melhor se encaixa nas suas necessidades.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3" data-animate="stagger">
          {plans.map((plan, i) => {
            const isMiddle = i === 1
            return (
              <div
                key={plan.name}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                  isMiddle
                    ? "border-[#2563EB] bg-card shadow-xl shadow-[#2563EB]/10 lg:scale-105"
                    : "border-border bg-card hover:border-[#2563EB]/30 hover:shadow-lg"
                } ${hoveredIndex === i ? "-translate-y-1" : ""}`}
              >
                {/* Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#22c55e] px-4 py-1 text-xs font-bold text-[#ffffff]">
                      <Star className="h-3 w-3" />
                      Mais popular
                    </span>
                  </div>
                )}
                {isMiddle && !plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#2563EB] px-4 py-1 text-xs font-bold text-[#ffffff]">
                      <Zap className="h-3 w-3" />
                      Recomendado
                    </span>
                  </div>
                )}

                {/* Plan name & color indicator */}
                <div className="flex items-center gap-3">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: plan.color }}
                  />
                  <h3 className="font-heading text-xl font-bold text-foreground">{plan.name}</h3>
                </div>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="font-heading text-5xl font-bold tracking-tight text-foreground">
                    {plan.price}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {plan.description}
                </p>

                <div className="my-6 h-px bg-border" />

                {/* Features */}
                <ul className="flex flex-1 flex-col gap-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3">
                      <div
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: `${plan.color}15` }}
                      >
                        <Check className="h-3 w-3" style={{ color: plan.color }} />
                      </div>
                      <span className="text-sm text-foreground">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all ${
                    isMiddle
                      ? "bg-[#2563EB] text-[#ffffff] hover:bg-[#1d4ed8] hover:shadow-lg hover:shadow-[#2563EB]/25"
                      : "border border-border bg-card text-foreground hover:bg-secondary hover:border-[#2563EB]/30"
                  }`}
                >
                  Quero este plano
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            )
          })}
        </div>

        {/* <p className="mt-8 text-center text-sm text-muted-foreground">
          Pagamento único. Sem taxas ocultas. Sem mensalidades.
        </p> */}
      </div>
    </section>
  )
}
