"use client"

import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#2563EB] py-20 lg:py-28">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Glow effects */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#ffffff]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#ffffff]/5 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 text-center" data-animate="scale-up">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-[#ffffff] sm:text-4xl lg:text-5xl text-balance">
          Pronto para ter uma página que realmente vende?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#ffffff]/80">
          Não perca mais tempo. Fale conosco agora e transforme sua presenca digital com uma página profissional, estratégica e focada em resultados.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#planos"
            className="inline-flex items-center gap-2 rounded-xl bg-[#ffffff] px-8 py-4 text-base font-semibold text-[#2563EB] transition-all hover:bg-[#f8fafc] hover:shadow-xl hover:-translate-y-0.5"
          >
            Escolher meu plano
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5524998558044&text=Ol%C3%A1%21+Gostaria+de+receber+mais+informa%C3%A7%C3%B5es+sobre+landing+pages&type=phone_number&app_absent=0&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnD22R-ixFp-o7NEwb8BdVOvBsfo989zB_-fRisv5dX8ZCUTQXSeAEkUQZXA0_aem_yyqTvUepPBouNkgBHVNCBw" target="blank"
            className="inline-flex items-center gap-2 rounded-xl border border-[#ffffff]/30 px-8 py-4 text-base font-semibold text-[#ffffff] transition-all hover:bg-[#ffffff]/10"
          >
            Falar no WhatsApp
          </a>
        </div>

        {/* <p className="mt-8 text-sm text-[#ffffff]/60">
          Pagamento único, sem mensalidades. Entrega em ate 7 dias úteis.
        </p> */}
      </div>
    </section>
  )
}
