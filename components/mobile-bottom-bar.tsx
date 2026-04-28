"use client"

import { LayoutGrid, Trophy, Plus, Gift, Menu } from "lucide-react"
import { useState } from "react"

const items = [
  { id: "casino", label: "Казино", icon: LayoutGrid },
  { id: "sport", label: "Спорт", icon: Trophy },
  { id: "promo", label: "Акции", icon: Gift },
  { id: "menu", label: "Меню", icon: Menu },
] as const

export function MobileBottomBar() {
  const [active, setActive] = useState<string>("casino")

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark z-[101] md:hidden border-t border-white/5">
      <div className="grid grid-cols-5 items-center h-[75px] px-3 relative">
        {items.slice(0, 2).map((item) => {
          const Icon = item.icon
          const isActive = active === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex flex-col items-center gap-1 transition ${
                isActive ? "text-primary" : "text-white/50"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          )
        })}
        <div className="flex justify-center">
          <button
            aria-label="Добавить депозит"
            className="-mt-7 w-[54px] h-[54px] rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/40 ring-4 ring-dark"
          >
            <Plus className="w-6 h-6" strokeWidth={3} />
          </button>
        </div>
        {items.slice(2).map((item) => {
          const Icon = item.icon
          const isActive = active === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex flex-col items-center gap-1 transition ${
                isActive ? "text-primary" : "text-white/50"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
