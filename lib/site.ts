/**
 * Единая точка для URL сайта.
 *
 * Приоритет:
 * 1. NEXT_PUBLIC_SITE_URL — задаётся вручную в Vercel (продовый домен).
 * 2. VERCEL_URL — автоматически проставляется Vercel на превью-деплоях.
 * 3. Локальный fallback — http://localhost:3000.
 *
 * На проде в Vercel задай переменную NEXT_PUBLIC_SITE_URL = https://your-domain.com
 * и больше нигде в коде ссылку менять не придётся.
 */
function resolveSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "")
  }

  const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL?.trim() || process.env.VERCEL_URL?.trim()
  if (vercelUrl) {
    return `https://${vercelUrl.replace(/\/$/, "")}`
  }

  return "http://localhost:3000"
}

export const SITE_URL = resolveSiteUrl()
export const SITE_NAME = "PokerDom"
