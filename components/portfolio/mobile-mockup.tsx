"use client"

import { useRef } from "react"
import { gsap } from "gsap"

export function MobileMockup({ src, alt }: { src: string; alt: string }) {
  const imageRef = useRef<HTMLImageElement>(null)

  return (
    <div
      className="group absolute -bottom-5 right-0 z-20 aspect-square w-[150px] [perspective:900px] sm:-bottom-8 sm:right-3 sm:w-[210px] lg:right-[-26px]"
      onMouseEnter={() => imageRef.current && gsap.to(imageRef.current, { yPercent: -28, duration: 2.4, ease: "power2.inOut" })}
      onMouseLeave={() => imageRef.current && gsap.to(imageRef.current, { yPercent: 0, duration: 1.1, ease: "power3.out" })}
    >
      <img src="/mockup-iphone17.png" alt="" aria-hidden="true" className="absolute inset-0 size-full object-contain transition-transform duration-500 group-hover:[transform:rotateY(8deg)_rotateZ(-2deg)]" />
      <div className="absolute left-[32.8%] top-[11.1%] h-[81.4%] w-[29.1%] overflow-hidden rounded-[13%] bg-white">
        <img ref={imageRef} src={src} alt={alt} className="block w-full origin-top object-cover object-top" />
      </div>
    </div>
  )
}
