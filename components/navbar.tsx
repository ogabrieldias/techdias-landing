"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Problema", href: "#problema" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Planos", href: "#planos" },
  { label: "Processo", href: "#processo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Portfólio", href: "/portfolio" },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const homeHref = (hash: string) => pathname === "/" ? hash : `/${hash}`

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <a 
          href="#" 
          className="flex items-center gap-2 font-heading text-xl font-bold tracking-tight text-foreground"
        >
          TechDias
          <img 
            src="/logo.png" 
            alt="TechDias Logo" 
            className="h-10 w-10" 
          />
          <span className="text-[#2563EB]"></span>
        </a>


        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.label === "Portfólio" ? link.href : homeHref(link.href)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#planos"
          className="hidden rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-[#ffffff] transition-all hover:bg-[#1d4ed8] hover:shadow-lg hover:shadow-[#2563EB]/25 md:inline-flex"
        >
          Ver Planos
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-card px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.label === "Portfólio" ? link.href : homeHref(link.href)}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#planos"
                onClick={() => setOpen(false)}
                className="inline-flex rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-[#ffffff] transition-all hover:bg-[#1d4ed8]"
              >
                Ver Planos
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
