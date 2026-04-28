import Image from "next/image"

type Props = {
  src: string
  alt: string
  badge: string
  title: string
  cta: string
}

export function PromoBanner({ src, alt, badge, title, cta }: Props) {
  return (
    <section className="max-w-[1160px] mx-auto px-5 md:px-0 mb-6 md:mb-8">
      <div className="relative rounded-card overflow-hidden h-[160px] md:h-[220px]">
        <Image src={src} alt={alt} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute top-0 left-5 md:left-8 bg-gradient-to-b from-[#fff6a6] to-[#ffc700] text-black text-[9px] md:text-xs font-extrabold uppercase px-2 md:px-3 py-1 rounded-b-md tracking-wider">
          {badge}
        </div>
        <div className="absolute inset-0 flex items-center p-5 md:p-8">
          <div className="max-w-[260px] md:max-w-[440px]">
            <h3 className="text-white text-base md:text-2xl font-extrabold mb-3 md:mb-4 drop-shadow-lg leading-tight whitespace-pre-line text-balance">
              {title}
            </h3>
            <button className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold text-[12px] md:text-sm uppercase rounded-button px-5 h-[34px] md:h-[42px] transition shadow-md shadow-primary/30">
              {cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
