"use client"

import { useState } from "react"
import { ArrowUpRight, Images } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Project } from "@/lib/portfolio-data"
import { TechBadges } from "@/components/portfolio/tech-badges"
import { BrowserMockup } from "@/components/portfolio/laptop-mockup"
import { PhoneMockup } from "@/components/portfolio/mobile-mockup"
import { ProjectGallery } from "@/components/portfolio/project-gallery"

interface ProjectCardProps {
  project: Project
  reversed?: boolean
}

export function ProjectCard({ project, reversed = false }: ProjectCardProps) {
  const [galleryOpen, setGalleryOpen] = useState(false)

  const hasGallery = project.galleryImages.length > 1

  return (
    <>
      <article
        data-animate="fade-up"
        className={`grid gap-10 border-t border-border py-16 md:items-center md:gap-14 md:py-24 ${
          reversed
            ? "md:grid-cols-[0.9fr_1.1fr]"
            : "md:grid-cols-[1.1fr_0.9fr]"
        }`}
      >
        {/* Mockups */}
        <div
          className={`relative ${reversed ? "md:order-2" : ""}`}
          data-animate="scale-up"
        >
          <div className="relative">
            {/* Browser mockup */}
            <BrowserMockup
              src={project.coverImage}
              alt={`Preview desktop do projeto ${project.title}`}
              accent={project.accent}
              isFullPage={project.isFullPage}
              siteName={project.url !== "#" ? project.url.replace("https://", "") : `www.${project.id}.com.br`}
            />

            {/* Phone mockup - positioned alongside */}
            <div className="absolute -bottom-6 -right-2 z-10 sm:-bottom-8 sm:right-4 lg:right-0">
              <PhoneMockup
                src={project.mobileImage}
                alt={`Preview mobile do projeto ${project.title}`}
                isFullPage={project.isFullPage}
              />
            </div>
          </div>

          {/* Responsive indicator */}
          <div className="mt-10 flex items-center gap-2 sm:mt-12">
            <div className="flex items-center gap-1.5">
              {/* Desktop icon */}
              <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
              </svg>
              {/* Tablet icon */}
              <svg className="h-3.5 w-3.5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25V4.5a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z" />
              </svg>
              {/* Phone icon */}
              <svg className="h-3 w-3 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
            </div>
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              Responsivo
            </span>
          </div>
        </div>

        {/* Project info */}
        <div className={`flex flex-col gap-6 ${reversed ? "md:order-1" : ""} md:max-w-lg`}>
          {/* Index & category */}
          <div className="flex items-center gap-4 font-mono text-xs tracking-[0.16em] text-muted-foreground">
            <span style={{ color: project.accent }}>{project.index}</span>
            <span className="h-px w-10 bg-border" />
            <span className="uppercase">{project.category}</span>
          </div>

          {/* Title & description */}
          <div className="flex flex-col gap-3">
            
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              {project.eyebrow}
            </p>
            <h2
              className="font-heading text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl"
              style={project.titleColor ? { color: project.titleColor } : undefined}
            >
              {project.title}
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          {project.icon && (
              <div className="flex items-center gap-3 flex-wrap mb-1">
                {(Array.isArray(project.icon) ? project.icon : [project.icon]).map((iconSrc, idx) => (
                  <img
                    key={idx}
                    src={iconSrc}
                    alt={`Ícone ${project.title} ${idx + 1}`}
                    className="h-8 w-auto max-w-[140px] object-contain"
                  />
                ))}
              </div>
            )}
          <TechBadges technologies={project.technologies} />
          

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.url && (
              <Button
                asChild
                className="rounded-full px-5"
                style={{ backgroundColor: project.accent }}
              >
                <a
                  href={project.url}
                  target={project.url !== "#" ? "_blank" : undefined}
                  rel={project.url !== "#" ? "noopener noreferrer" : undefined}
                >
                  Visitar projeto <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            )}

            {hasGallery && (
              <Button
                variant="outline"
                className="rounded-full px-5"
                onClick={() => setGalleryOpen(true)}
              >
                <Images className="mr-1 h-4 w-4" />
                Ver screenshots
              </Button>
            )}

            {!hasGallery && (
              <Button asChild variant="outline" className="rounded-full px-5">
                <a href="#contato">
                  Conversar sobre um projeto <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </article>

      {/* Gallery modal */}
      <ProjectGallery
        images={project.galleryImages}
        projectTitle={project.title}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
      />
    </>
  )
}
