import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PokerDom — онлайн покер и казино",
    short_name: "PokerDom",
    description:
      "Покердом — крупнейший покер-рум России с мгновенными выплатами. Тысячи слотов, турниры, live-казино.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    orientation: "portrait",
    lang: "ru-RU",
    categories: ["games", "entertainment"],
    icons: [
      {
        src: "/icon.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
      {
        src: "/apple-icon.jpg",
        sizes: "180x180",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  }
}
