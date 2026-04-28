import type { MetadataRoute } from "next"

const SITE_URL = "https://pokerdom-clone.vercel.app"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/", "/_next/", "/account/"],
      },
      {
        userAgent: "Yandex",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/", "/account/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/", "/account/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
