export type Project = {
  id: string
  index: string
  title: string
  eyebrow: string
  description: string
  category: string
  technologies: string[]
  url: string
  accent: string
  coverImage: string
  mobileImage: string
  galleryImages: string[]
  isFullPage: boolean
}

export const PROJECTS: Project[] = [
  {
    id: "yesu",
    index: "01",
    title: "YESU",
    eyebrow: "Landing Page · Web Design · Desenvolvimento",
    description:
      "Landing page completa para ministério e comunidade cristã — com design emocional, seções estratégicas e uma experiência que conecta visitantes à missão.",
    category: "Landing Page",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP"],
    url: "#",
    accent: "#8b5cf6",
    coverImage: "/Yesu/Yesu.png",
    mobileImage: "/Yesu/Yesu.png",
    galleryImages: ["/Yesu/Yesu.png"],
    isFullPage: true,
  },
  {
    id: "pet-vida",
    index: "02",
    title: "Pet Vida",
    eyebrow: "Landing Page · Identidade Visual · Conversão",
    description:
      "Página profissional para pet shop com foco em conversão, apresentando serviços, diferenciais e facilitando o contato direto com os clientes.",
    category: "Landing Page",
    technologies: ["Next.js", "React", "Tailwind CSS", "Responsivo"],
    url: "#",
    accent: "#22c55e",
    coverImage: "/Pet Vida/Landing Pet.png",
    mobileImage: "/Pet Vida/Landing Pet.png",
    galleryImages: ["/Pet Vida/Landing Pet.png"],
    isFullPage: true,
  },
  {
    id: "saas-agenda",
    index: "03",
    title: "SAAS Agenda",
    eyebrow: "Aplicação Web · SaaS · Sistema de Gestão",
    description:
      "Sistema completo de agendamento online para profissionais e estabelecimentos — com dashboard, gestão de clientes, profissionais, serviços e calendário integrado.",
    category: "Aplicação SaaS",
    technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS", "API REST"],
    url: "#",
    accent: "#2563eb",
    coverImage: "/SAAS Agenda/Dashboard.png",
    mobileImage: "/SAAS Agenda/Agendamento.png",
    galleryImages: [
      "/SAAS Agenda/Dashboard.png",
      "/SAAS Agenda/Agendamento.png",
      "/SAAS Agenda/Calendario.png",
      "/SAAS Agenda/Clientes.png",
      "/SAAS Agenda/Profissionais.png",
      "/SAAS Agenda/Serviços.png",
      "/SAAS Agenda/Cadastro de Membros.png",
    ],
    isFullPage: false,
  },
  {
    id: "venda-mais",
    index: "04",
    title: "Venda+",
    eyebrow: "Plataforma · Multi-Segmento · Experiência Digital",
    description:
      "Plataforma digital multi-segmento para vendas de veículos, seguros e serviços estéticos — com navegação intuitiva, páginas de categoria e área de contato integrada.",
    category: "Plataforma Web",
    technologies: ["React", "TypeScript", "Tailwind CSS", "GSAP", "Responsivo"],
    url: "#",
    accent: "#f59e0b",
    coverImage: "/Venda+/Home.png",
    mobileImage: "/Venda+/Carros.png",
    galleryImages: [
      "/Venda+/Home.png",
      "/Venda+/Carros.png",
      "/Venda+/Motos.png",
      "/Venda+/Estetica.png",
      "/Venda+/Seguro.png",
      "/Venda+/Sobre.png",
      "/Venda+/Contato.png",
    ],
    isFullPage: false,
  },
]
