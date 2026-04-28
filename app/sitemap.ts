import type { MetadataRoute } from "next"

const SITE_URL = "https://pokerdom-clone.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1.0, changeFrequency: "daily" },
    { path: "/casino", priority: 0.9, changeFrequency: "daily" },
    { path: "/poker", priority: 0.9, changeFrequency: "daily" },
    { path: "/sport", priority: 0.9, changeFrequency: "daily" },
    { path: "/live", priority: 0.8, changeFrequency: "daily" },
    { path: "/promotions", priority: 0.8, changeFrequency: "weekly" },
    { path: "/tournaments", priority: 0.8, changeFrequency: "daily" },
    { path: "/vip", priority: 0.7, changeFrequency: "weekly" },
    { path: "/help", priority: 0.5, changeFrequency: "monthly" },
    { path: "/about", priority: 0.5, changeFrequency: "monthly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/responsible-gaming", priority: 0.4, changeFrequency: "yearly" },
  ]

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
