import Image from "next/image"

export function HeroBanner() {
  return (
    <section className="max-w-[1160px] mx-auto mb-5 md:mb-8 px-5 md:px-0 pt-5">
      <div className="relative rounded-card overflow-hidden h-[160px] md:h-[320px]">
        <Image
          src="/banners/hero-bonus.jpg"
          alt="Стартовый бонус"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center md:items-center p-5 md:p-10">
          <div className="text-white max-w-[260px] md:max-w-[520px]">
            <span className="inline-block bg-accent-yellow text-black text-[10px] md:text-xs font-bold uppercase px-2.5 py-1 rounded-md mb-2 md:mb-4">
              Welcome bonus
            </span>
            <h2 className="text-base md:text-4xl font-extrabold mb-3 md:mb-6 drop-shadow-lg leading-tight text-balance">
              Забери стартовый бонус
              <br />
              <span className="text-primary">и умножь шансы</span> на выигрыш!
            </h2>
            <button className="bg-primary hover:bg-primary-hover active:bg-primary-pressed text-white font-bold text-xs md:text-base uppercase rounded-button px-5 md:px-8 h-[36px] md:h-[50px] min-w-[100px] transition shadow-lg shadow-primary/30">
              Забрать бонус
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
