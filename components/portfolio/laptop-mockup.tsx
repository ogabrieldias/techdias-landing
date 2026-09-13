"use client"

import { useEffect, useRef, useCallback } from "react"

interface BrowserMockupProps {
  src: string
  alt: string
  accent: string
  isFullPage?: boolean
  siteName?: string
}

export function BrowserMockup({ src, alt, accent, isFullPage = false, siteName = "www.projeto.com.br" }: BrowserMockupProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<gsap.core.Tween | null>(null)
  const isHovering = useRef(false)

  const startAutoScroll = useCallback(async () => {
    if (!isFullPage || !scrollContainerRef.current) return

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    const container = scrollContainerRef.current
    const maxScroll = container.scrollHeight - container.clientHeight
    if (maxScroll <= 0) return

    const { gsap } = await import("gsap")

    animRef.current?.kill()
    animRef.current = gsap.to(container, {
      scrollTop: maxScroll * 0.6,
      duration: 4,
      ease: "power1.inOut",
    })
  }, [isFullPage])

  const stopAutoScroll = useCallback(() => {
    animRef.current?.kill()
    animRef.current = null

    if (scrollContainerRef.current) {
      const resetScroll = async () => {
        const { gsap } = await import("gsap")
        gsap.to(scrollContainerRef.current, {
          scrollTop: 0,
          duration: 0.6,
          ease: "power2.out",
        })
      }
      resetScroll()
    }
  }, [])

  useEffect(() => {
    return () => {
      animRef.current?.kill()
    }
  }, [])

  return (
    <div
      className="group/mockup relative w-full transition-transform duration-500 ease-out hover:-translate-y-1"
      onMouseEnter={() => {
        isHovering.current = true
        startAutoScroll()
      }}
      onMouseLeave={() => {
        isHovering.current = false
        stopAutoScroll()
      }}
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl transition-shadow duration-500 group-hover/mockup:shadow-[0_32px_80px_-20px_rgba(0,0,0,0.15)]"
        style={{ "--mockup-accent": accent } as React.CSSProperties}
      >
        {/* Browser toolbar */}
        <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#ef4444]" />
            <div className="h-3 w-3 rounded-full bg-[#f59e0b]" />
            <div className="h-3 w-3 rounded-full bg-[#22c55e]" />
          </div>
          <div className="flex-1 rounded-md bg-background px-3 py-1 text-center text-xs text-muted-foreground">
            {siteName}
          </div>
        </div>

        {/* Screen content */}
        <div
          ref={scrollContainerRef}
          className={`relative bg-white ${
            isFullPage
              ? "h-[320px] overflow-y-auto sm:h-[380px] lg:h-[420px] scrollbar-hide"
              : "aspect-[16/10] overflow-hidden"
          }`}
          style={isFullPage ? { scrollbarWidth: "none", msOverflowStyle: "none" } : undefined}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className={`w-full ${
              isFullPage
                ? "h-auto"
                : "h-full object-cover object-top transition-transform duration-700 ease-out group-hover/mockup:scale-[1.02]"
            }`}
          />
        </div>
      </div>

      {/* Accent glow beneath */}
      <div
        className="pointer-events-none absolute -bottom-3 left-[15%] right-[15%] h-4 rounded-full opacity-0 blur-xl transition-opacity duration-500 group-hover/mockup:opacity-30"
        style={{ backgroundColor: accent }}
      />
    </div>
  )
}
