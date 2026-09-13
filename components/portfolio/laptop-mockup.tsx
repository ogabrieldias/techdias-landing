"use client"

import { useRef } from "react"
import { gsap } from "gsap"

export function LaptopMockup({ src, alt, accent }: { src: string; alt: string; accent: string }) {
  const imageRef = useRef<HTMLImageElement>(null)

  return (
    <div
      className="group relative w-full max-w-[700px] [perspective:1200px]"
      onMouseEnter={() => imageRef.current && gsap.to(imageRef.current, { yPercent: -35, duration: 2.8, ease: "power2.inOut" })}
      onMouseLeave={() => imageRef.current && gsap.to(imageRef.current, { yPercent: 0, duration: 1.2, ease: "power3.out" })}
    >
      <div className="relative aspect-[1088/704] transition-transform duration-700 group-hover:[transform:rotateX(3deg)_rotateY(-3deg)]">
        <img src="/mockup-macbook.png" alt="" aria-hidden="true" className="absolute inset-0 size-full object-contain" />
        <div className="absolute left-[18.5%] top-[24.7%] h-[57.7%] w-[59.7%] overflow-hidden bg-white">
          <img ref={imageRef} src={src} alt={alt} className="block w-full origin-top object-cover object-top" />
        </div>
        <div className="pointer-events-none absolute left-[18.5%] top-[24.7%] h-[57.7%] w-[59.7%] shadow-[inset_0_0_18px_rgba(0,0,0,0.24)]" />
      </div>
      <div className="pointer-events-none absolute bottom-[9%] left-[18%] right-[18%] h-2 rounded-full blur-xl" style={{ backgroundColor: accent, opacity: 0.28 }} />
    </div>
  )
}
