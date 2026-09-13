export function LaptopMockup({ src, alt, accent }: { src: string; alt: string; accent: string }) {
  return (
    <div className="group relative w-full max-w-[700px] [perspective:1200px]">
      <div className="relative aspect-[1088/704] transition-transform duration-700 group-hover:[transform:rotateX(3deg)_rotateY(-3deg)]">
        <img src="/mockup-macbook.png" alt="" aria-hidden="true" className="absolute inset-0 size-full object-contain" />
        <div className="absolute left-[20%] top-[22%] z-10 h-[57%] w-[58%] overflow-hidden rounded-[1.4%] bg-white">
          <img src={src} alt={alt} className="absolute inset-0 size-full scale-[1.45] object-cover object-top transition-transform duration-[2800ms] ease-in-out group-hover:-translate-y-[35%] group-hover:scale-[1.45]" />
        </div>
        <div className="pointer-events-none absolute left-[25%] top-[10.5%] z-20 h-[49.5%] w-[37%] rounded-[1.4%] shadow-[inset_0_0_18px_rgba(0,0,0,0.24)]" />
      </div>
      <div className="pointer-events-none absolute bottom-[9%] left-[18%] right-[18%] h-2 rounded-full blur-xl" style={{ backgroundColor: accent, opacity: 0.28 }} />
    </div>
  )
}
