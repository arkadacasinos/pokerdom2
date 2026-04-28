"use client"

import { Bell, Dices, Spade, Trophy } from "lucide-react"
import { useState } from "react"

const tabs = [
  { id: "casino", label: "Казино", icon: Dices },
  { id: "poker", label: "Покер", icon: Spade },
  { id: "sport", label: "Спорт", icon: Trophy },
] as const

export function SiteHeader() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("casino")

  return (
    <header className="sticky top-0 z-50 bg-dark">
      <div className="flex items-center justify-between h-[70px] md:h-[90px] px-5 md:px-8 max-w-[1160px] mx-auto">
        <a href="/" className="flex-shrink-0 flex items-center gap-2">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-md bg-primary flex items-center justify-center">
            <Spade className="w-5 h-5 md:w-6 md:h-6 text-white" fill="white" />
          </div>
          <span className="text-white font-extrabold text-lg md:text-2xl tracking-tight">
            Покер<span className="text-primary">дом</span>
          </span>
        </a>
        <div className="flex items-center gap-2 md:gap-3 ml-auto">
          <button
            aria-label="Уведомления"
            className="relative w-10 h-10 flex items-center justify-center rounded-md hover:bg-white/10 transition"
          >
            <Bell className="w-5 h-5 text-primary" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent-red" />
          </button>
          <button className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold text-xs md:text-sm uppercase rounded-button px-4 md:px-7 h-[40px] md:h-[50px] min-w-[80px] md:min-w-[119px] transition">
            Войти
          </button>
          <button className="border border-white/30 text-white hover:bg-white/15 font-bold text-xs md:text-sm uppercase rounded-button px-4 md:px-7 h-[40px] md:h-[50px] min-w-[80px] md:min-w-[119px] transition hidden md:block">
            Регистрация
          </button>
        </div>
      </div>
      <nav className="bg-white shadow-sm">
        <div className="flex items-center justify-center h-[34px] md:h-[40px] max-w-[1160px] mx-auto">
          <div className="flex items-center w-full h-full">
            {tabs.map((tab, idx) => {
              const Icon = tab.icon
              const isActive = active === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={[
                    "flex-1 flex items-center justify-center h-full text-[10px] md:text-base uppercase cursor-pointer transition relative",
                    idx < tabs.length - 1 ? "border-r border-[#f5f5f5]" : "",
                    isActive
                      ? "bg-[#ffe6e2]/80 text-black font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-accent-red after:shadow-[0_-1px_4px_0px_rgba(255,72,72,0.6)]"
                      : "text-black/80 hover:text-black hover:font-bold",
                  ].join(" ")}
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-1.5 hidden md:block" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </nav>
    </header>
  )
}
