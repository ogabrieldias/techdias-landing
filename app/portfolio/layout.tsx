import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfólio | TechDias",
  description: "Conheça projetos digitais feitos pela TechDias para marcas que querem fazer sentido.",
}

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
