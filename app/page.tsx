"use client"

import { useGsapScrollTrigger } from "@/hooks/use-gsap"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemaSection } from "@/components/problema-section"
import { SolucaoSection } from "@/components/solucao-section"
import { BeneficiosSection } from "@/components/beneficios-section"
import { RecebeSection } from "@/components/recebe-section"
import { ParaQuemSection } from "@/components/para-quem-section"
import { ProcessoSection } from "@/components/processo-section"
import { PlanosSection } from "@/components/planos-section"
import { SobreSection } from "@/components/sobre-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  useGsapScrollTrigger()

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemaSection />
        <SolucaoSection />
        <BeneficiosSection />
        <RecebeSection />
        <ParaQuemSection />
        <ProcessoSection />
        <PlanosSection />
        <SobreSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
