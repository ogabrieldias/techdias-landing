"use client"

import { useEffect, useRef, useCallback } from "react"

interface PhoneMockupProps {
  src: string
  alt: string
  isFullPage?: boolean
}

export function PhoneMockup({ src, alt, isFullPage = false }: PhoneMockupProps) {
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
      scrollTop: maxScroll * 0.5,
      duration: 3.5,
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
          duration: 0.5,
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
      className="group/phone relative"
      onMouseEnter={() => {
        isHovering.current = true
        startAutoScroll()
      }}
      onMouseLeave={() => {
        isHovering.current = false
        stopAutoScroll()
      }}
    >
      {/* Phone frame */}
      <div className="relative w-[140px] overflow-hidden rounded-[2rem] border-[3px] border-foreground/80 bg-foreground/80 shadow-xl sm:w-[170px]">
        {/* Notch / Dynamic Island */}
        <div className="relative z-10 mx-auto mt-2 h-[18px] w-[60px] rounded-full bg-foreground/90 sm:h-[20px] sm:w-[70px]" />

        {/* Screen */}
        <div
          ref={scrollContainerRef}
          className={`relative mx-[3px] mb-[3px] mt-1 overflow-hidden rounded-b-[1.6rem] bg-white ${
            isFullPage
              ? "h-[240px] overflow-y-auto sm:h-[300px] scrollbar-hide"
              : "aspect-[9/17]"
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
                : "h-full object-cover object-top"
            }`}
          />
        </div>
      </div>
    </div>
  )
}
