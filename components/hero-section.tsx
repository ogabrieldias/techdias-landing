"use client"

import { ArrowRight, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-24 pb-16">
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16 lg:py-20">
        {/* Left content */}
        <div className="flex-1" data-animate="slide-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#22c55e]" />
            <span className="text-xs font-medium text-muted-foreground">
              +50 páginas entregues
            </span>
          </div>

          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Sua presenca digital
            <br />
            <span className="text-[#2563EB]">que converte</span> de verdade.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Páginas profissionais, estratégicas e otimizadas para transformar visitantes em clientes. Feitas sob medida para o seu negócio.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#planos"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-8 py-4 text-base font-semibold text-[#ffffff] transition-all hover:bg-[#1d4ed8] hover:shadow-xl hover:shadow-[#2563EB]/25 hover:-translate-y-0.5"
            >
              Quero minha página
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#processo"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-secondary"
            >
              Como funciona?
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-2">
              {[
                "bg-[#2563EB]",
                "bg-[#10b981]",
                "bg-[#f59e0b]",
                "bg-[#ef4444]",
              ].map((color, i) => (
                <div
                  key={i}
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-background ${color}`}
                >
                  <Users className="h-3.5 w-3.5 text-[#ffffff]" />
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">+50 clientes</p>
              <p className="text-xs text-muted-foreground">confiam no nosso trabalho</p>
            </div>
          </div>
        </div>

        {/* Right mockup */}
        <div className="flex-1" data-animate="slide-right">
          <div className="relative" data-parallax="0.08">
            {/* Browser window mockup */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-[#2563EB]/10">
              {/* Browser toolbar */}
              <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-[#ef4444]" />
                  <div className="h-3 w-3 rounded-full bg-[#f59e0b]" />
                  <div className="h-3 w-3 rounded-full bg-[#22c55e]" />
                </div>
                <div className="flex-1 rounded-md bg-background px-3 py-1 text-center text-xs text-muted-foreground">
                  www.seunegocio.com.br
                </div>
              </div>
              {/* Mockup content */}
              <div className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="h-3 w-3/4 rounded bg-[#2563EB]/20" />
                  <div className="h-8 w-full rounded bg-[#2563EB]/10" />
                  <div className="h-3 w-1/2 rounded bg-muted" />
                  <div className="mt-2 grid grid-cols-2 gap-3">
                    <div className="h-24 rounded-lg bg-secondary" />
                    <div className="h-24 rounded-lg bg-secondary" />
                  </div>
                  <div className="h-10 w-40 rounded-lg bg-[#2563EB]" />
                  <div className="flex flex-col gap-2">
                    <div className="h-2 w-full rounded bg-muted" />
                    <div className="h-2 w-5/6 rounded bg-muted" />
                    <div className="h-2 w-2/3 rounded bg-muted" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div
              className="absolute -top-4 -right-4 rounded-xl border border-border bg-card p-3 shadow-lg"
              data-parallax="-0.12"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#22c55e]/10">
                  <svg className="h-4 w-4 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">+147%</p>
                  <p className="text-[10px] text-muted-foreground">conversões</p>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card p-3 shadow-lg"
              data-parallax="-0.15"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2563EB]/10">
                  <svg className="h-4 w-4 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">Online</p>
                  <p className="text-[10px] text-muted-foreground">24/7 ativo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
