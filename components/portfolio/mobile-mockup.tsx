"use client"

import { useRef } from "react"
import { gsap } from "gsap"

export function MobileMockup({ src, alt }: { src: string; alt: string }) {
  const imageRef = useRef<HTMLImageElement>(null)

  return (
    <div
      className="group absolute -bottom-5 right-0 z-20 w-[92px] [perspective:900px] sm:-bottom-8 sm:right-3 sm:w-[138px] lg:right-[-26px]"
      onMouseEnter={() => imageRef.current && gsap.to(imageRef.current, { yPercent: -28, duration: 2.4, ease: "power2.inOut" })}
      onMouseLeave={() => imageRef.current && gsap.to(imageRef.current, { yPercent: 0, duration: 1.1, ease: "power3.out" })}
    >
      <div className="relative rounded-[24px] bg-gradient-to-br from-[#6f7580] via-[#d8dbe0] to-[#707681] p-[5px] shadow-[0_24px_45px_-16px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:[transform:rotateY(8deg)_rotateZ(-2deg)] sm:rounded-[31px] sm:p-[6px]">
        <div className="relative rounded-[20px] bg-[#111318] p-[3px] shadow-inner sm:rounded-[25px]">
          <div className="absolute left-1/2 top-[7px] z-10 h-5 w-12 -translate-x-1/2 rounded-full bg-black sm:top-[8px] sm:h-7 sm:w-16" />
          <div className="h-[176px] overflow-hidden rounded-[17px] bg-white sm:h-[264px] sm:rounded-[21px]">
            <img ref={imageRef} src={src} alt={alt} className="block w-full object-cover object-top" />
          </div>
        </div>
        <div className="pointer-events-none absolute -right-1 top-16 h-8 w-1 rounded-full bg-[#747984]" />
        <div className="pointer-events-none absolute -left-1 top-16 h-5 w-1 rounded-full bg-[#747984]" />
        <div className="pointer-events-none absolute -left-1 top-24 h-8 w-1 rounded-full bg-[#747984]" />
      </div>
    </div>
  )
}
