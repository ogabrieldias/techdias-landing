"use client"

import { useEffect, useRef, useCallback, useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ProjectGalleryProps {
  images: string[]
  projectTitle: string
  isOpen: boolean
  initialIndex?: number
  onClose: () => void
}

export function ProjectGallery({ images, projectTitle, isOpen, initialIndex = 0, onClose }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  // Reset index when opening
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex)
    }
  }, [isOpen, initialIndex])

  // GSAP open/close animation
  useEffect(() => {
    if (!overlayRef.current || !contentRef.current) return

    const animate = async () => {
      const { gsap } = await import("gsap")
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      const duration = prefersReduced ? 0 : 0.4

      if (isOpen) {
        document.body.style.overflow = "hidden"

        gsap.fromTo(
          overlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration, ease: "power2.out" }
        )
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, scale: 0.95, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: duration * 1.2, ease: "power3.out", delay: duration * 0.3 }
        )
      }
    }

    animate()

    return () => {
      if (!isOpen) {
        document.body.style.overflow = ""
      }
    }
  }, [isOpen])

  // Close animation helper
  const handleClose = useCallback(async () => {
    const { gsap } = await import("gsap")
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const duration = prefersReduced ? 0 : 0.3

    if (contentRef.current) {
      gsap.to(contentRef.current, { opacity: 0, scale: 0.97, y: 10, duration, ease: "power2.in" })
    }
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration,
        delay: duration * 0.15,
        ease: "power2.in",
        onComplete: () => {
          document.body.style.overflow = ""
          onClose()
        },
      })
    }
  }, [onClose])

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          handleClose()
          break
        case "ArrowRight":
          goNext()
          break
        case "ArrowLeft":
          goPrev()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, handleClose, goNext, goPrev])

  // Scroll image container to top on image change
  useEffect(() => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollTop = 0
    }
  }, [currentIndex])

  if (!isOpen) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === overlayRef.current) handleClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`Galeria de screenshots: ${projectTitle}`}
    >
      <div ref={contentRef} className="relative flex h-full w-full max-w-6xl flex-col px-4 py-16 sm:px-8">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="font-heading text-sm font-semibold text-background">{projectTitle}</p>
            <p className="text-xs text-background/50">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/20 focus:outline-none focus:ring-2 focus:ring-background/50"
            aria-label="Fechar galeria"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Image area */}
        <div
          ref={imageContainerRef}
          className="flex-1 overflow-y-auto rounded-xl"
          style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.2) transparent" }}
        >
          <img
            src={images[currentIndex]}
            alt={`Screenshot ${currentIndex + 1} de ${projectTitle}`}
            className="mx-auto max-w-full rounded-lg"
            loading="lazy"
          />
        </div>

        {/* Navigation */}
        {images.length > 1 && (
          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              onClick={goPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/20 focus:outline-none focus:ring-2 focus:ring-background/50"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentIndex
                      ? "w-6 bg-background"
                      : "w-2 bg-background/30 hover:bg-background/50"
                  }`}
                  aria-label={`Ir para imagem ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/20 focus:outline-none focus:ring-2 focus:ring-background/50"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
