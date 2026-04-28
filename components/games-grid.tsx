import type { LucideIcon } from "lucide-react"
import { ChevronRight, Heart, Play } from "lucide-react"
import type { Game } from "@/lib/games-data"

type Props = {
  title: string
  icon: LucideIcon
  iconColor?: string
  games: Game[]
}

export function GamesGrid({ title, icon: Icon, iconColor = "text-accent-yellow", games }: Props) {
  return (
    <section className="max-w-[1160px] mx-auto px-5 md:px-0 mb-6 md:mb-8">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div className="flex items-center gap-2">
          <Icon className={`w-5 h-5 md:w-7 md:h-7 ${iconColor}`} />
          <h3 className="text-sm md:text-xl font-bold uppercase tracking-wide">{title}</h3>
        </div>
        <a
          href="#"
          className="bg-primary hover:bg-primary-hover text-primary-foreground text-[12px] md:text-sm font-semibold rounded-button px-3 md:px-6 h-[32px] md:h-[40px] flex items-center gap-1 shadow-sm transition"
        >
          ВСЕ
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
        {games.map((game, idx) => (
          <GameCard key={`${game.title}-${idx}`} game={game} />
        ))}
      </div>
    </section>
  )
}

function GameCard({ game }: { game: Game }) {
  return (
    <div className="game-card group relative overflow-hidden rounded-card shadow-sm bg-card cursor-pointer flex flex-col">
      <div className="relative w-full aspect-[220/139] overflow-hidden bg-secondary">
        <img
          src={game.img || "/placeholder.svg"}
          alt={game.title}
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none transition-transform group-hover:scale-105"
          draggable={false}
        />
        <button
          aria-label="В избранное"
          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition z-10"
        >
          <Heart className="w-3.5 h-3.5 text-white" />
        </button>
      </div>
      <div className="game-overlay bg-card px-2.5 py-2 md:px-3 md:py-3 transition-all duration-300">
        <div className="flex items-center gap-1 mb-0.5">
          <span className="text-[11px] md:text-[13px] text-muted-foreground truncate">{game.provider}</span>
        </div>
        <p className="game-title text-[13px] md:text-base font-semibold text-foreground whitespace-nowrap overflow-hidden text-ellipsis mb-2 transition-all">
          {game.title}
        </p>
        <div className="flex items-center gap-2">
          <button className="bg-primary hover:bg-primary-hover text-primary-foreground text-[11px] md:text-xs font-bold uppercase rounded-button px-3 h-[26px] md:h-[30px] flex items-center gap-1 transition">
            <Play className="w-3 h-3" fill="currentColor" />
            Играть
          </button>
          <button className="text-[11px] md:text-xs font-semibold text-muted-foreground hover:text-foreground transition">
            Демо
          </button>
        </div>
      </div>
    </div>
  )
}
