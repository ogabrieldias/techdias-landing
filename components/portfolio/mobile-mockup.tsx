export function MobileMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group absolute -bottom-5 right-0 z-20 aspect-square w-[150px] [perspective:900px] sm:-bottom-8 sm:right-3 sm:w-[210px] lg:right-[-26px]">
      <img src="/mockup-iphone17.png" alt="" aria-hidden="true" className="absolute inset-0 size-full object-contain transition-transform duration-500 group-hover:[transform:rotateY(8deg)_rotateZ(-2deg)]" />
      <div className="absolute left-[32.8%] top-[11.1%] z-10 h-[81.4%] w-[29.1%] overflow-hidden rounded-[13%] bg-white">
        <img src={src} alt={alt} className="absolute inset-0 size-full object-cover object-top transition-transform duration-[2400ms] ease-in-out group-hover:-translate-y-[28%]" />
      </div>
    </div>
  )
}
