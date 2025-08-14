export interface SeoOptions {
  title?: string
  description?: string
  keywords?: string
  image?: string
  type?: string
}

export const useSeo = (options: SeoOptions) => {
  const baseUrl = 'https://contoh.com' // ubah sesuai domain kamu
  const defaultImage = `${baseUrl}/default-og.png`

  definePageMeta({
    title: options.title ?? 'Default Title',
    meta: [
      {
        name: 'description',
        content: options.description ?? 'Deskripsi default website kamu.'
      },
      {
        name: 'keywords',
        content: options.keywords ?? 'nuxt, vue, typescript'
      },
      {
        property: 'og:title',
        content: options.title ?? 'Default Title'
      },
      {
        property: 'og:description',
        content: options.description ?? 'Deskripsi default website kamu.'
      },
      {
        property: 'og:image',
        content: options.image ?? defaultImage
      },
      {
        property: 'og:type',
        content: options.type ?? 'website'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:title',
        content: options.title ?? 'Default Title'
      },
      {
        name: 'twitter:description',
        content: options.description ?? 'Deskripsi default website kamu.'
      },
      {
        name: 'twitter:image',
        content: options.image ?? defaultImage
      }
    ]
  })
}
