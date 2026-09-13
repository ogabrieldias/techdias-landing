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
      <div className="rounded-[20px] border-[5px] border-[#18191d] bg-[#18191d] p-[3px] shadow-2xl transition-transform duration-500 group-hover:[transform:rotateY(8deg)_rotateZ(-2deg)] sm:rounded-[26px] sm:border-[6px]">
        <div className="absolute left-1/2 top-1 z-10 h-2 w-8 -translate-x-1/2 rounded-full bg-[#18191d] sm:h-3 sm:w-12" />
        <div className="h-[176px] overflow-hidden rounded-[13px] bg-white sm:h-[264px] sm:rounded-[18px]">
          <img ref={imageRef} src={src} alt={alt} className="block w-full object-cover object-top" />
        </div>
      </div>
    </div>
  )
}
