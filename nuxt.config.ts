import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
 modules: ['@nuxt/fonts', '@nuxt/icon', 'nuxt-mail'],
  runtimeConfig: {
    public: {
      baseUrl: process.env.WP_BASE_URL || 'http://localhost:3000',
      resendApiKey: process.env.RESEND_API_KEY
    },
    mail:{
      message: {
        to: 'wahyudi@proweb.co.id',
      },
       smtp: {
        host: "mail.proweb.co.id",
        port: 587,
        secure: false,
        auth: {
          user: "wahyudi@proweb.co.id",
          pass: "@ZohoBaru1610",
        }
      },
    }
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: ['~/assets/css/main.css'],

  plugins: ['~/plugins/splide.client.ts'],


  vite: {
    plugins: [
      tailwindcss(),
    ]
  },

 
  fonts: {
    google: [
      {
        name: 'Inter',
        weights: [400, 500, 600, 700, 800],
      },
    ],
  }
  
})