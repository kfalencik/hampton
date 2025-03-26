import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { dir: 'ltr', lang: 'en' },
      link: [{ rel: 'icon', type: 'image/png', href: "/favicon.png" }]
  },
},
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    'nuxt-windicss',
    'nuxt-bootstrap-icons',
    'nuxt-viewport',
    '@pinia/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    }
  ],
  css: [
    "bootstrap-icons/font/bootstrap-icons.css"
  ],
  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    }
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  }
})