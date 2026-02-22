export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <a href="#" className="font-heading text-xl font-bold tracking-tight text-foreground">
              PagePro<span className="text-[#2563EB]">.</span>
            </a>
            <p className="mt-1 text-sm text-muted-foreground">
              Presenca digital que converte.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {[
              { label: "Inicio", href: "#" },
              { label: "Beneficios", href: "#beneficios" },
              { label: "Planos", href: "#planos" },
              { label: "Processo", href: "#processo" },
              { label: "Sobre", href: "#sobre" },
            ].map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            {new Date().getFullYear()} PagePro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
