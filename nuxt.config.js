export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  head: {
    title: 'Eason Chang 張楹翔 😎 - Find me on the Internet 👀',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Hi! I am Eason, a Fullstack Engineer / Maker / Indie-hacker. Find me on the Internet!',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Eason Chang 張楹翔 😎 - Find me on the Internet 👀',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Hi! I am Eason, a Fullstack Engineer / Maker / Indie-hacker. Find me on the Internet!',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://eason.ch/og-easonchang.png',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://eason.ch',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Eason Chang 張楹翔 😎 - Find me on the Internet 👀',
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'Eason Chang 張楹翔 😎 - Find me on the Internet 👀',
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content:
          'Hi! I am Eason, a Fullstack Engineer / Maker / Indie-hacker. Find me on the Internet!',
      },
      {
        hid: 'twitter:site',
        property: 'twitter:site',
        content: '@EasonChang_me',
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://eason.ch/og-easonchang.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
