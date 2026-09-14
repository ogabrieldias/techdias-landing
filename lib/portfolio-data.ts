export type Project = {
  id: string
  index: string
  title: string
  titleColor?: string
  eyebrow: string
  description: string
  category: string
  technologies: string[]
  icon?: string | string[]
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
    titleColor: "#ff8c00",
    eyebrow: "Landing Page · Web Design · Desenvolvimento",
    description:
      "Landing page profissional para o segmento de scooters e veículos autopropelidos, com foco em apresentação dos produtos, benefícios e conversão de clientes.",
    category: "Landing Page",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP"],
    icon: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    ],
    url: "https://yesu-three.vercel.app",
    accent: "#ff8c00",
    coverImage: "/Yesu/Yesu.png",
    mobileImage: "/Yesu/Yesu Mobile.png",
    galleryImages: ["/Yesu/Yesu.png"],
    isFullPage: true,
  },
  {
    id: "pet-vida",
    index: "02",
    title: "Pet Vida",
    titleColor: "#0096b8",
    eyebrow: "Landing Page · Identidade Visual · Conversão",
    description:
      "Landing page para pet shop, apresentando serviços, diferenciais e informações da empresa de forma moderna, acolhedora e estratégica.",
    category: "Landing Page",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsivo"],
    icon: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    ],
    url: "https://landing-pet-vida.vercel.app",
    accent: "#0096b8",
    coverImage: "/Pet Vida/Landing Pet.png",
    mobileImage: "/Pet Vida/PetVida Mobile.png",
    galleryImages: ["/Pet Vida/Landing Pet.png"],
    isFullPage: true,
  },
  {
    id: "saas-agenda",
    index: "03",
    title: "SAAS Agenda",
    titleColor: "#dca54d",
    eyebrow: "Aplicação Web · SaaS · Sistema de Gestão",
    description:
      "Sistema completo de agendamento online, com dashboard profissional, gerenciamento de clientes, serviços, horários, calendário e controle da agenda.",
    category: "Aplicação SaaS",
    technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS", "API REST"],
    icon: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    ],
    url: "https://saas-agenda-2026.vercel.app/login",
    accent: "#dca54d",
    coverImage: "/SAAS Agenda/Dashboard.png",
    mobileImage: "/SAAS Agenda/Dashboard-Mobile.png",
    galleryImages: [
      "/SAAS Agenda/Dashboard.png",
      "/SAAS Agenda/Agendamento.png",
      "/SAAS Agenda/Calendario.png",
      "/SAAS Agenda/Clientes.png",
      "/SAAS Agenda/Profissionais.png",
      "/SAAS Agenda/Serviços.png",
      "/SAAS Agenda/Cadastro de Membros.png",
    ],
    isFullPage: true,
  },
  {
    id: "venda-mais",
    index: "04",
    title: "Venda+",
    titleColor: "#f0503d",
    eyebrow: "Plataforma · Multi-Segmento · Experiência Digital",
    description:
      "Plataforma digital multissegmento para venda de veículos, seguros e serviços, desenvolvida para conectar clientes a diferentes soluções em um só lugar.",
    category: "Plataforma Web",
    technologies: ["React", "TypeScript", "Tailwind CSS", "GSAP", "Responsivo"],
    icon: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    ],
    url: "https://venda-v2.vercel.app",
    accent: "#f0503d",
    coverImage: "/Venda+/Home.png",
    mobileImage: "/Venda+/Venda+Mobile.png",
    galleryImages: [
      "/Venda+/Home.png",
      "/Venda+/Carros.png",
      "/Venda+/Motos.png",
      "/Venda+/Estetica.png",
      "/Venda+/Seguro.png",
      "/Venda+/Sobre.png",
      "/Venda+/Contato.png",
    ],
    isFullPage: true,
  },
]
