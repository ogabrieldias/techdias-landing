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
      <div className="relative rounded-[14px] border-[7px] border-[#17191f] bg-[#17191f] p-[3px] shadow-2xl transition-transform duration-700 group-hover:[transform:rotateX(3deg)_rotateY(-3deg)]">
        <div className="absolute left-1/2 top-0 z-10 h-2 w-20 -translate-x-1/2 rounded-b-md bg-[#17191f]" />
        <div className="relative h-[240px] overflow-hidden rounded-[5px] bg-white sm:h-[350px] lg:h-[390px]">
          <img ref={imageRef} src={src} alt={alt} className="block w-full origin-top object-cover object-top" />
        </div>
      </div>
      <div className="mx-auto h-3 w-[112%] -translate-x-[5%] rounded-b-xl bg-[#b8bac0] shadow-lg" style={{ boxShadow: `0 12px 28px -12px ${accent}` }} />
    </div>
  )
}
