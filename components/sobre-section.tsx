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
                    <span className="font-heading text-2xl font-bold text-[#ffffff]">T</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">TechDias</h3>
                    <p className="text-sm text-muted-foreground">Presença digital que converte</p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border bg-card p-4">
                    <p className="font-heading text-3xl font-bold text-[#2563EB]">50+</p>
                    <p className="text-sm text-muted-foreground">páginas entregues</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-4">
                    <p className="font-heading text-3xl font-bold text-[#2563EB]">100%</p>
                    <p className="text-sm text-muted-foreground">clientes satisfeitos</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-4">
                    <p className="font-heading text-3xl font-bold text-[#2563EB]">10</p>
                    <p className="text-sm text-muted-foreground">dias de entrega</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-4">
                    <p className="font-heading text-3xl font-bold text-[#2563EB]">3+</p>
                    <p className="text-sm text-muted-foreground">anos de experiência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Text */}
          <div className="flex-1" data-animate="slide-right">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#2563EB]">
              Sobre nós
            </span>
            <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Especialistas em páginas<br className="hidden sm:block" /> que geram resultados.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Somos um time de designers e desenvolvedores apaixonados por criar soluções digitais que realmente funcionam. Nosso foco e simples: entregar páginas bonitas, rápidas e que convertem.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2563EB]/10">
                  <Target className="h-5 w-5 text-[#2563EB]" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground">Foco em conversão</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Cada página e projetada com estratégias comprovadas de vendas e marketing digital.
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
                    Entregamos apenas o melhor. Se não ficar satisfeito, ajustamos até ficar perfeito.
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
