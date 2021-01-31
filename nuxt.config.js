export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Eden | Say Goodbye To Chores Forever',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { name: 'author', content: 'Eden Life Concierge Ltd' },
      { name: 'theme-color', content: '#20B26D' },
      {
        name: 'description',
        content:
          "Say goodbye to chores forever. Eden is a tech-enabled service that puts your home's chores on autopilot. Check out how we work!",
      },
      {
        name: 'keywords',
        content:
          'Eden Life in Nigeria, Eden Concierge in Nigeria, Eden Concierge, Eden Life, Improving quality of life, Quality of Life in Nigeria, Excellent service, Food service, Laundry service, AC service, Home cleaning service, Light cleaning service, Home Deep cleaning service, Concierge to make you productive, eden app, Eden Nigeria, butler app, home concierge, eden, home assistants, convenience at home, edenlife, Eden, house helps, house maids, maids, house helps in Nigeria, house maids in Nigeria, Automate chores, Efficient household management, Avoiding housework, Tired of housework',
      },

      // Schema.org markup for Google+
      // { itemprop: 'name', content: 'Eden' },
      // { itemprop: 'description', content: 'Say goodbye to chores forever.' },
      // { itemprop: 'image', content: 'https://ouredenlife.com/edencard.png' },

      // Twitter Card data
      // { name: 'twitter:card', content: 'summary_large_image' },
      // { name: 'twitter:site', content: '@ouredenlife' },
      // { name: 'twitter:title', content: 'Eden' },
      // { name: 'twitter:url', content: 'https://ouredenlife.com' },
      // {
      //   name: 'twitter:image',
      //   content: 'https://ouredenlife.com/edencard.png',
      // },
      // {
      //   name: 'twitter:description',
      //   content:
      //     "Say goodbye to chores forever. Eden is a tech-enabled service that puts your home's chores on autopilot. Check out how we work!",
      // },
      // { name: 'twitter:app:country', content: 'NG' },
      // { name: 'twitter:creator', content: '@ouredenlife' },
      // { name: 'twitter:domain', content: '@ouredenlife' },
      // {
      //   name: 'twitter:image:src',
      //   content: 'https://ouredenlife.com/edencard.png',
      // },

      // Open Graph data
      // { property: 'og:title', content: 'Eden' },
      // { property: 'og:url', content: 'https://ouredenlife.com' },
      // { property: 'og:image', content: 'https://ouredenlife.com/edencard.png' },
      // {
      //   property: 'og:description',
      //   content:
      //     "Say goodbye to chores forever. Eden is a tech-enabled service that puts your home's chores on autopilot. Check out how we work!",
      // },
      // { property: 'og:type', content: 'website' },
      // { property: 'og:site_name', content: 'Eden' },
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
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
