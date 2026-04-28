export type Game = {
  title: string
  provider: string
  img: string
}

export const gamesData: Record<"top" | "new" | "popular" | "slots", Game[]> = {
  top: [
    { title: "Jelly Express", provider: "Pragmatic Play", img: "/games/jelly-express.webp" },
    { title: "Coin Strike Hold and Win", provider: "Playson", img: "/games/coin-strike.webp" },
    { title: "Crazy Red", provider: "Amusnet", img: "/games/crazy-red.webp" },
    { title: "Hit Slot 2026", provider: "Endorphina", img: "/games/hit-slot-2026.webp" },
    { title: "3 Hot Chillies", provider: "3 Oaks", img: "/games/3-hot-chillies.webp" },
    { title: "Hot Ross", provider: "Hacksaw Gaming", img: "/games/hot-ross.webp" },
    { title: "Sweet Alchemy 100", provider: "Play'n GO", img: "/games/sweet-alchemy-100.webp" },
    { title: "3 Irish Treasures", provider: "Spinomenal", img: "/games/3-irish-treasures.webp" },
    { title: "Book of Waka Waka", provider: "Amusnet", img: "/games/book-of-waka-waka.webp" },
    { title: "Zeus vs Hades - Gods of War", provider: "Pragmatic Play", img: "/games/zeus-vs-hades.webp" },
  ],
  new: [
    { title: "Pokerdom Invaders", provider: "Amigo Gaming", img: "/games/pokerdom-invaders.webp" },
    { title: "3 Fortune Mummies", provider: "Spinomenal", img: "/games/3-fortune-mummies.webp" },
    { title: "Deep Sea Wilds", provider: "Galaxsys", img: "/games/deep-sea-wilds.webp" },
    { title: "Rhino Coins - Hit the Bonus", provider: "Playson", img: "/games/rhino-coins.webp" },
    { title: "Phoenix Luck Hotfire", provider: "Novomatic", img: "/games/phoenix-luck.webp" },
    { title: "Lady Wish", provider: "Penguin King", img: "/games/lady-wish.webp" },
    { title: "Thunder Tiger", provider: "3 Oaks", img: "/games/thunder-tiger.webp" },
    { title: "Zombie Circus", provider: "Eurasian Gaming", img: "/games/zombie-circus.webp" },
    { title: "Locked Hearts 5", provider: "Fazi", img: "/games/locked-hearts-5.webp" },
    { title: "Munchy Milo", provider: "Hacksaw Gaming", img: "/games/munchy-milo.webp" },
  ],
  popular: [
    { title: "The Dog House", provider: "Pragmatic Play", img: "/games/dog-house.webp" },
    { title: "Coin Strike Hold and Win", provider: "Playson", img: "/games/coin-strike.webp" },
    { title: "Zeus vs Hades - Gods of War", provider: "Pragmatic Play", img: "/games/zeus-vs-hades.webp" },
    { title: "Sweet Rush Bonanza", provider: "Pragmatic Play", img: "/games/sweet-rush-bonanza.webp" },
    { title: "Suck", provider: "Shadylady", img: "/games/suck.webp" },
    { title: "The Dawn is Coming!", provider: "Mascot Gaming", img: "/games/dawn-is-coming.webp" },
    { title: "Crazy Red", provider: "Amusnet", img: "/games/crazy-red.webp" },
    { title: "Crazy Monkey", provider: "Igrosoft", img: "/games/crazy-monkey.webp" },
    { title: "Break the Piggy Bank", provider: "Penguin King", img: "/games/break-the-piggy-bank.webp" },
    { title: "Fortune Five Double", provider: "GameBeat", img: "/games/fortune-five-double.webp" },
  ],
  slots: [
    { title: "Siberian Express", provider: "Pixmove", img: "/games/siberian-express.webp" },
    { title: "Hot Ross", provider: "Hacksaw Gaming", img: "/games/hot-ross.webp" },
    { title: "Mega Thunder RUNNING WINS", provider: "Fugaso", img: "/games/mega-thunder.webp" },
    { title: "Gangsta Piggy Hold and Win", provider: "Galaxsys", img: "/games/gangsta-piggy.webp" },
    { title: "12 Fortune Signs", provider: "Amigo Gaming", img: "/games/12-fortune-signs.webp" },
    { title: "Raptor 2", provider: "Yggdrasil", img: "/games/raptor-2.webp" },
    { title: "Coins of Dragon - Hold & Win", provider: "BetSoft", img: "/games/coins-of-dragon.webp" },
    { title: "Cleopatra Jewel Box", provider: "Playbro", img: "/games/cleopatra-jewel-box.webp" },
    { title: "Train of Gold Hold & Win", provider: "Onlyplay", img: "/games/train-of-gold.webp" },
    { title: "Mighty Wild - Gorilla", provider: "VoltEnt", img: "/games/mighty-wild-gorilla.webp" },
  ],
}
