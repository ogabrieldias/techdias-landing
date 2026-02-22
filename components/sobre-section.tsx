"use client"

import { Award, Target } from "lucide-react"

export function SobreSection() {
  return (
    <section id="sobre" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Left - Visual */}
          <div className="flex-1" data-animate="slide-left">
            <div className="relative">
              <div className="rounded-2xl border border-border bg-secondary p-8 lg:p-12">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2563EB]">
                    <span className="font-heading text-2xl font-bold text-[#ffffff]">P</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">PagePro</h3>
                    <p className="text-sm text-muted-foreground">Presenca digital que converte</p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border bg-card p-4">
                    <p className="font-heading text-3xl font-bold text-[#2563EB]">200+</p>
                    <p className="text-sm text-muted-foreground">paginas entregues</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-4">
                    <p className="font-heading text-3xl font-bold text-[#2563EB]">98%</p>
                    <p className="text-sm text-muted-foreground">clientes satisfeitos</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-4">
                    <p className="font-heading text-3xl font-bold text-[#2563EB]">7</p>
                    <p className="text-sm text-muted-foreground">dias de entrega</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-4">
                    <p className="font-heading text-3xl font-bold text-[#2563EB]">3+</p>
                    <p className="text-sm text-muted-foreground">anos de experiencia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Text */}
          <div className="flex-1" data-animate="slide-right">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#2563EB]">
              Sobre nos
            </span>
            <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Especialistas em paginas<br className="hidden sm:block" /> que geram resultados.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Somos um time de designers e desenvolvedores apaixonados por criar solucoes digitais que realmente funcionam. Nosso foco e simples: entregar paginas bonitas, rapidas e que convertem.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2563EB]/10">
                  <Target className="h-5 w-5 text-[#2563EB]" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground">Foco em conversao</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Cada pagina e projetada com estrategias comprovadas de vendas e marketing digital.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2563EB]/10">
                  <Award className="h-5 w-5 text-[#2563EB]" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground">Qualidade garantida</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Entregamos apenas o melhor. Se nao ficar satisfeito, ajustamos ate ficar perfeito.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
