import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      baseUrl: process.env.WP_BASE_URL || 'http://localhost:3000',
    },
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: ['~/assets/css/main.css'],


  vite: {
    plugins: [
      tailwindcss(),
    ]
  },

  modules: ['@nuxt/fonts', '@nuxt/icon'],
  fonts: {
    google: [
      {
        name: 'Inter',
        weights: [400, 500, 600, 700, 800],
      },
    ],
  }
})