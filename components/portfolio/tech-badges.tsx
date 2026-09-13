import { Badge } from "@/components/ui/badge"

export function TechBadges({ technologies }: { technologies: string[] }) {
  return (
    <div className="flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
      {technologies.map((technology) => (
        <Badge key={technology} variant="outline" className="rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em]">
          {technology}
        </Badge>
      ))}
    </div>
  )
}
