// /composables/useSeo.ts
export type SeoType = 'website' | 'article' | 'product' | 'profile' | 'book' | 'video.movie'

export interface SeoInput {
  title: string
  description?: string
  image?: string | string[]     // bisa 1 atau banyak (max 4 buat preload)
  type?: SeoType
  noindex?: boolean             // kalau true -> robots: noindex,nofollow
  publishedTime?: string        // ISO date utk article
  modifiedTime?: string         // ISO date utk article
  jsonLd?: Record<string, any> | (() => Record<string, any> | null) // schema.org
}

const absolutify = (url: string, base: string) => {
  if (!url) return ''
  try {
    // Kalau sudah absolute, langsung return
    const u = new URL(url)
    return u.toString()
  } catch {
    // Relative path -> gabungkan dengan base
    return `${base}${url.startsWith('/') ? '' : '/'}${url}`
  }
}

export function useSeo(input: SeoInput) {
  const config = useRuntimeConfig()
  const app = useAppConfig()
  const route = useRoute()

  const siteUrl = (config.public.siteUrl || '').replace(/\/$/, '')
  const canonical = computed(() => siteUrl ? `${siteUrl}${route.path}` : undefined)

  // Tentukan og:image (first item jika array, atau fallback defaultOgImage)
  const img = Array.isArray(input.image) ? input.image[0] : input.image
  const ogImage = computed(() => {
    const raw = img || config.public.defaultOgImage || ''
    return raw ? absolutify(raw, siteUrl) : undefined
  })

  // Title template: "Halaman · Nama Situs"
  const pageTitle = computed(() => {
    const sep = app.titleSeparator ?? '·'
    const site = app.siteName ? ` ${sep} ${app.siteName}` : ''
    return `${input.title}${site}`
  })

  // Robots
  const robots = input.noindex ? 'noindex, nofollow' : 'index, follow'

  // === SEO Meta utama ===
  useSeoMeta({
    title: pageTitle.value,
    description: input.description,
    ogTitle: input.title,
    ogDescription: input.description,
    ogType: input.type ?? 'website',
    ogImage: ogImage.value,
    ogUrl: canonical.value,
    twitterCard: 'summary_large_image',
    twitterTitle: input.title,
    twitterDescription: input.description,
    twitterImage: ogImage.value,
    // handle @username kalau ada
    ...(config.public.twitterHandle ? { twitterSite: config.public.twitterHandle } : {}),
    robots
  })

  // === Canonical link, preload images tambahan, dan meta article times ===
  const extraImages = Array.isArray(input.image) ? input.image.slice(0, 4) : []
  useHead({
    link: [
      ...(canonical.value ? [{ rel: 'canonical', href: canonical.value }] : []),
      ...extraImages.map((i) => ({
        rel: 'preload',
        as: 'image',
        href: absolutify(i, siteUrl)
      }))
    ],
    meta: [
      ...(input.publishedTime ? [{ property: 'article:published_time', content: input.publishedTime }] : []),
      ...(input.modifiedTime ? [{ property: 'article:modified_time', content: input.modifiedTime }] : [])
    ],
    script: input.jsonLd
      ? [
          {
            type: 'application/ld+json',
            // dukung function yang return json
            children: () => JSON.stringify(
              typeof input.jsonLd === 'function' ? (input.jsonLd() ?? {}) : input.jsonLd
            )
          }
        ]
      : []
  })
}
