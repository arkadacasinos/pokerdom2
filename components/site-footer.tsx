import { Send, Twitter, Youtube, Instagram } from "lucide-react"

const menu = [
  {
    title: "Покердом",
    links: ["О нас", "Правила", "Политика конфиденциальности", "Лицензия"],
  },
  {
    title: "Безопасность",
    links: ["Ответственная игра", "FAQ", "Защита аккаунта"],
  },
  {
    title: "Контакты",
    links: ["Служба поддержки", "Партнёрская программа", "Пресс-центр"],
  },
]

const payments = ["VISA", "MasterCard", "МИР", "СБП", "Crypto", "SkyPay", "Qiwi", "Tether"]
const providers = [
  "Pragmatic",
  "Spinomenal",
  "Playson",
  "Bgaming",
  "Endorphina",
  "NoLimit",
  "Evolution",
  "Yggdrasil",
  "3 Oaks",
  "Amusnet",
]

export function SiteFooter() {
  return (
    <footer className="bg-dark pt-8 pb-24 md:pt-12 md:pb-16">
      <div className="max-w-[1160px] mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-10">
          {menu.map((col) => (
            <div key={col.title} className="flex-1">
              <h4 className="text-white text-xs uppercase mb-4 font-semibold tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-tertiary text-xs hover:text-white transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex-1">
            <h4 className="text-white text-xs uppercase mb-4 font-semibold tracking-wider">
              Подпишись на нас
            </h4>
            <div className="flex gap-3">
              <SocialIcon icon={Send} label="Telegram" />
              <SocialIcon icon={Twitter} label="X" />
              <SocialIcon icon={Youtube} label="YouTube" />
              <SocialIcon icon={Instagram} label="Instagram" />
            </div>
          </div>
        </div>

        {/* Payment methods */}
        <div className="mb-8">
          <h4 className="text-tertiary text-xs uppercase mb-4 tracking-wider">Платёжные методы</h4>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {payments.map((p) => (
              <div
                key={p}
                className="w-[88px] h-[60px] md:w-[127px] md:h-[80px] bg-white/5 hover:bg-white/10 border border-white/10 rounded-md flex items-center justify-center flex-shrink-0 transition cursor-pointer"
              >
                <span className="text-white text-xs font-bold tracking-wider">{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Providers */}
        <div className="mb-8">
          <h4 className="text-tertiary text-xs uppercase mb-4 tracking-wider">Провайдеры</h4>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {providers.map((p) => (
              <div
                key={p}
                className="w-[88px] h-[60px] md:w-[127px] md:h-[80px] bg-white/5 hover:bg-white/10 border border-white/10 rounded-md flex items-center justify-center flex-shrink-0 transition cursor-pointer"
              >
                <span className="text-white text-[11px] font-semibold">{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Extra info */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="w-[44px] h-[44px] bg-white/10 rounded flex items-center justify-center">
            <span className="text-white text-base font-extrabold">18+</span>
          </div>
          <div className="px-3 h-[44px] bg-white/10 rounded flex items-center justify-center">
            <span className="text-white text-xs font-semibold">Curaçao eGaming</span>
          </div>
          <div className="px-3 h-[44px] bg-white/10 rounded flex items-center justify-center">
            <span className="text-white text-xs font-semibold">SSL Secured</span>
          </div>
        </div>
        <p className="text-tertiary text-[10px] md:text-xs leading-relaxed">
          Покердом придерживается принципов ответственной игры. Если вы или ваши близкие столкнулись с
          проблемами игровой зависимости, обратитесь за помощью на{" "}
          <a href="#" className="text-primary hover:underline">
            Gamblingtherapy.org
          </a>
          . © {new Date().getFullYear()} Pokerdom. Все права защищены.
        </p>
      </div>
    </footer>
  )
}

function SocialIcon({ icon: Icon, label }: { icon: typeof Send; label: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition"
    >
      <Icon className="w-4 h-4 text-white" />
    </a>
  )
}
