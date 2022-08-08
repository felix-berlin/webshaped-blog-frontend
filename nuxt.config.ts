import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  alias: {
    'butler': './node_modules/@felix_berlin/sass-butler/'
  },

  typescript: {
    shim: false
  },

  // ENV variables -> https://v3.nuxtjs.org/guide/features/runtime-config
  runtimeConfig: {
    // The private keys which are only available within server-side

    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: '',
      GQL_HOST: '',
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

  modules: [
    '@vueuse/nuxt',
    'nuxt-graphql-client'
  ],

  buildModules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `usePinia()`
          'defineStore',
          // automatically imports `usePinia()` as `usePiniaStore()`
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
    'floating-vue/nuxt',
  ],

  css: [
    '@/assets/styles/app.scss',
  ]
})
