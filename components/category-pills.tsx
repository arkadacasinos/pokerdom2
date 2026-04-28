"use client"

import {
  Crown,
  Sparkles,
  Star,
  Zap,
  Tv,
  Flame,
  Gamepad2,
  Dices,
  Rocket,
  LayoutGrid,
  Award,
  Search,
} from "lucide-react"
import { useState } from "react"

const categories = [
  { id: "top", label: "Топ", icon: Crown, color: "text-accent-yellow" },
  { id: "provider", label: "Провайдер недели", icon: Award, color: "text-primary" },
  { id: "new", label: "Новые", icon: Sparkles, color: "text-accent-yellow" },
  { id: "exclusive", label: "Эксклюзив", icon: Star, color: "text-accent-red" },
  { id: "live-exclusive", label: "Эксклюзив Live", icon: Tv, color: "text-accent-red" },
  { id: "popular", label: "Популярное", icon: Flame, color: "text-accent-yellow" },
  { id: "amusnet", label: "Amusnet", icon: Zap, color: "text-primary" },
  { id: "live", label: "Live дилеры", icon: Tv, color: "text-accent-red" },
  { id: "slots", label: "Слоты", icon: Gamepad2, color: "text-primary" },
  { id: "crash", label: "Краш-игры", icon: Rocket, color: "text-accent-red" },
  { id: "tables", label: "Столы", icon: LayoutGrid, color: "text-primary" },
  { id: "roulette", label: "Рулетка", icon: Dices, color: "text-accent-yellow" },
] as const

export function CategoryPills() {
  const [active, setActive] = useState<string>("top")

  return (
    <section className="mb-5 md:mb-7">
      <div className="max-w-[1160px] mx-auto">
        <div className="hidden md:flex items-center gap-4 mb-4 px-5 md:px-0">
          <button className="flex items-center gap-2 bg-white shadow-sm rounded-button px-4 h-[40px] min-w-[200px] font-semibold text-sm text-foreground">
            <Search className="w-4 h-4 text-muted-foreground" />
            Поиск игр и провайдеров
          </button>
        </div>
        <div className="flex items-center gap-2 md:gap-3 overflow-x-auto no-scrollbar px-5 md:px-5 pb-1">
          {categories.map((cat) => {
            const Icon = cat.icon
            const isActive = active === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={[
                  "flex items-center gap-1.5 md:gap-2 rounded-button px-3 md:px-4 h-[32px] md:h-[40px] font-semibold text-[12px] md:text-sm whitespace-nowrap flex-shrink-0 transition shadow-sm",
                  isActive
                    ? "bg-foreground text-white"
                    : "bg-white text-foreground hover:bg-white/80",
                ].join(" ")}
              >
                <Icon className={`w-4 h-4 md:w-5 md:h-5 ${isActive ? "text-primary" : cat.color}`} />
                {cat.label}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
