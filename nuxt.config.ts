import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },

  // ENV variables -> https://v3.nuxtjs.org/guide/features/runtime-config
  runtimeConfig: {
    // The private keys which are only available within server-side

    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: '',
    }
  },

  // Enables static mode
  ssr: false,

  // Prerender Routes -> https://v3.nuxtjs.org/guide/deploy/static-hosting/#advanced
  nitro: {
    prerender: {
      routes: []
    }
  },
})
