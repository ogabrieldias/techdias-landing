"use client"

import { useRef } from "react"
import { gsap } from "gsap"

export function LaptopMockup({ src, alt, accent }: { src: string; alt: string; accent: string }) {
  const imageRef = useRef<HTMLImageElement>(null)

  return (
    <div
      className="group relative w-full max-w-[620px] [perspective:1200px]"
      onMouseEnter={() => imageRef.current && gsap.to(imageRef.current, { yPercent: -35, duration: 2.8, ease: "power2.inOut" })}
      onMouseLeave={() => imageRef.current && gsap.to(imageRef.current, { yPercent: 0, duration: 1.2, ease: "power3.out" })}
    >
      <div className="relative transition-transform duration-700 group-hover:[transform:rotateX(3deg)_rotateY(-3deg)]">
        <div className="relative rounded-[16px] bg-gradient-to-br from-[#d8dbe0] via-[#8d929b] to-[#565b65] p-[7px] shadow-[0_32px_70px_-22px_rgba(0,0,0,0.75)]">
          <div className="relative rounded-[10px] bg-[#08090b] p-[3px] shadow-inner">
            <div className="absolute left-1/2 top-[3px] z-10 h-[7px] w-16 -translate-x-1/2 rounded-b-lg bg-[#08090b]" />
            <div className="relative h-[240px] overflow-hidden rounded-[7px] bg-white sm:h-[350px] lg:h-[390px]">
              <img ref={imageRef} src={src} alt={alt} className="block w-full origin-top object-cover object-top" />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-12 bottom-1 h-px bg-white/60" />
        </div>
        <div className="relative mx-auto h-3 w-[112%] -translate-x-[5%] rounded-b-[1rem] bg-gradient-to-b from-[#d9dce1] via-[#a6aab2] to-[#777c85] shadow-[0_14px_30px_-12px_rgba(0,0,0,0.8)]" style={{ boxShadow: `0 12px 28px -12px ${accent}` }}>
          <div className="mx-auto mt-1 h-1 w-20 rounded-full bg-[#8d929a]/70" />
        </div>
      </div>
    </div>
  )
}
