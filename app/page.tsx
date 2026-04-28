import { Crown, Sparkles, Flame, Gamepad2 } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { HeroBanner } from "@/components/hero-banner"
import { CategoryPills } from "@/components/category-pills"
import { GamesGrid } from "@/components/games-grid"
import { PromoBanner } from "@/components/promo-banner"
import { SeoSection } from "@/components/seo-section"
import { SiteFooter } from "@/components/site-footer"
import { MobileBottomBar } from "@/components/mobile-bottom-bar"
import { gamesData } from "@/lib/games-data"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-main-bg">
      <SiteHeader />
      <main className="bg-main-bg pb-20 md:pb-0">
        <HeroBanner />
        <CategoryPills />

        <GamesGrid title="Топ" icon={Crown} iconColor="text-accent-yellow" games={gamesData.top} />

        <PromoBanner
          src="/banners/tournament.jpg"
          alt="Турнир"
          badge="Tournament"
          title={"500 000 ₽\nв новом турнире\nот Playbro"}
          cta="Принять участие"
        />

        <GamesGrid title="Новые" icon={Sparkles} iconColor="text-accent-yellow" games={gamesData.new} />

        <PromoBanner
          src="/banners/poker.jpg"
          alt="Покер"
          badge="Poker"
          title={"Лучший покерный рум\nРоссии и Казахстана"}
          cta="Играть в покер"
        />

        <GamesGrid
          title="Популярное"
          icon={Flame}
          iconColor="text-accent-red"
          games={gamesData.popular}
        />

        <GamesGrid title="Слоты" icon={Gamepad2} iconColor="text-primary" games={gamesData.slots} />

        <SeoSection />
        <SiteFooter />
      </main>
      <MobileBottomBar />
    </div>
  )
}
