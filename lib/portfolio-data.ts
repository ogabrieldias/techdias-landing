export type Project = {
  id: string
  index: string
  title: string
  eyebrow: string
  description: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  desktopImage: string
  mobileImage: string
  accent: string
}

export const PROJECTS: Project[] = [
  {
    id: "techdias",
    index: "01",
    title: "TechDias",
    eyebrow: "Estratégia · Web design · Desenvolvimento",
    description: "Uma presença digital própria para uma agência que transforma negócios locais em marcas memoráveis — com clareza, personalidade e foco em conversão.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
    liveUrl: "https://techdias.com.br",
    desktopImage: "/portfolio-techdias.png",
    mobileImage: "/portfolio-techdias.png",
    accent: "#2563eb",
  },
  {
    id: "atlas",
    index: "02",
    title: "Atlas Arquitetura",
    eyebrow: "Identidade · Direção de arte · Digital",
    description: "Um portfólio editorial para um estúdio de arquitetura que precisava mostrar processo, matéria e intenção em cada detalhe.",
    technologies: ["Figma", "Next.js", "Motion", "CMS"],
    liveUrl: "#",
    desktopImage: "/portfolio-atlas.png",
    mobileImage: "/portfolio-atlas.png",
    accent: "#e86b32",
  },
  {
    id: "orla",
    index: "03",
    title: "Orla Hotel",
    eyebrow: "Posicionamento · E-commerce · Experiência",
    description: "Uma experiência de reserva mais humana e desejável para um hotel à beira-mar, unindo atmosfera, conteúdo e performance.",
    technologies: ["UX/UI", "React", "Stripe", "Analytics"],
    liveUrl: "#",
    desktopImage: "/portfolio-orla.png",
    mobileImage: "/portfolio-orla.png",
    accent: "#e66f61",
  },
]
