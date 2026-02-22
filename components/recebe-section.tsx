"use client"

import { Check } from "lucide-react"

const features = [
  "Pagina de vendas personalizada",
  "Copy estrategica e persuasiva",
  "Otimizacao para dispositivos moveis",
  "Botao de WhatsApp integrado",
  "Formulario de contato funcional",
  "Design profissional e moderno",
  "Hospedagem e dominio orientados",
  "SEO basico para Google",
  "Integracao com redes sociais",
  "Entrega em ate 7 dias uteis",
]

export function RecebeSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <div className="flex-1" data-animate="slide-left">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#2563EB]">
              O que voce recebe
            </span>
            <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Tudo incluso para voce<br className="hidden sm:block" /> vender mais.
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Uma solucao completa. Voce nao precisa se preocupar com nada — entregamos tudo pronto para funcionar.
            </p>

            <a
              href="#planos"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-7 py-3.5 text-sm font-semibold text-[#ffffff] transition-all hover:bg-[#1d4ed8] hover:shadow-lg hover:shadow-[#2563EB]/25"
            >
              Escolher meu plano
            </a>
          </div>

          <div className="flex-1" data-animate="slide-right">
            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-[#2563EB]/20"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#2563EB]/10">
                    <Check className="h-4 w-4 text-[#2563EB]" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
