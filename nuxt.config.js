import axios from 'axios'
import getSiteMeta from './utils/getSiteMeta'
import getRoutes from './utils/getRoutes'

const dynamicRoutes = () => {
  return axios
    .get(
      'https://wordpress.edenlife.ng/wp-json/wp/v2/posts?_fields=id,slug&per_page=100&offset=0'
    )
    .then((res) => {
      return res.data.map((post) => `/blog/${post.slug}-${post.id}`)
    })
}

const meta = getSiteMeta()

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    __dangerouslyDisableSanitizersByTagID: {
      'gtag-script2': ['innerHTML'],
      // 'gtm-script2': ['innerHTML'],
      'gtag-script1': ['innerHTML'],
      'universal-analytics': ['innerHTML'],
      'ga-4': ['innerHTML'],
      // 'gtm-script1': ['innerHTML'],
      'google-ads': ['innerHTML'],
    },
    __dangerouslyDisableSanitizers: ['noscript', 'innerHTML'],

    script: [
      // Global site tag (gtag.js) - Google Analytics

      {
        hid: 'gtag-script1',
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-140804740-1',
        defer: true,
      },

      {
        hid: 'universal-analytics',
        innerHTML: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'UA-140804740-1');`,
        type: 'text/javascript',
        charset: 'utf-8',
      },

      {
        hid: 'ga-4',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-4D4KNBN5JH',
        innerHTML: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-4D4KNBN5JH')`,
        type: 'text/javascript',
        charset: 'utf-8',
      },

      // Google tag manager
      

      //Google ads
      {
        hid: 'google-ads',
        src: 'https://www.googletagmanager.com/gtag/js?id=AW-354367770',
        innerHTML: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-354367770');`,
        type: 'text/javascript',
        charset: 'utf-8',
      },

      // Mixpanel analytics token
      {
        innerHTML: `(function(f,b){if(!b.__SV){var e,g,i,h;window.mixpanel=b;b._i=[];b.init=function(e,f,c){function g(a,d){var b=d.split(".");2==b.length&&(a=a[b[0]],d=b[1]);a[d]=function(){a.push([d].concat(Array.prototype.slice.call(arguments,0)))}}var a=b;"undefined"!==typeof c?a=b[c]=[]:c="mixpanel";a.people=a.people||[];a.toString=function(a){var d="mixpanel";"mixpanel"!==c&&(d+="."+c);a||(d+=" (stub)");return d};a.people.toString=function(){return a.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
        for(h=0;h<i.length;h++)g(a,i[h]);var j="set set_once union unset remove delete".split(" ");a.get_group=function(){function b(c){d[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));a.push([e,call2])}}for(var d={},e=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<j.length;c++)b(j[c]);return d};b._i.push([e,f,c])};b.__SV=1.2;e=f.createElement("script");e.type="text/javascript";e.async=!0;e.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?
        MIXPANEL_CUSTOM_LIB_URL:"file:"===f.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";g=f.getElementsByTagName("script")[0];g.parentNode.insertBefore(e,g)}})(document,window.mixpanel||[]);
        mixpanel.init("c6739f19f75b2f8d07fe76e4b063df7d", {batch_requests: true})`,
        type: 'text/javascript',
        body: true,
        defer: true,
      },

      // setup linkedIn
      {
        innerHTML: `(function(l) { if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])}; window.lintrk.q=[]} var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript";b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s);})(window.lintrk);`,
        type: 'text/javascript',
        body: true,
        defer: true,
      },
    ],

    // noscript: [
    //   {
    //     hid: 'gtm-script2',
    //     src: 'https://www.googletagmanager.com/ns.html?id=GTM-566V4B2',
    //     innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-566V4B2"
    //     height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
    //     body: true,
    //     type: 'text/javascript',
    //   },
    // ],

    title: 'Eden | Say Goodbye To Chores Forever',

    meta: [
      ...meta,
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      {
        name: 'google-site-verification',
        content: 'hR_rl1tIEYSU12wBm7rMnAD4rGO1O6lkyqRYLCuEMMM',
      },

      { name: 'author', content: 'Eden Life Concierge Ltd' },
      { name: 'theme-color', content: '#20B26D' },
      { name: 'Eden', content: 'True' },
      { property: 'og:site_name', content: 'Eden' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Say goodbye to chores forever. Eden is a tech-enabled service that puts your home's chores on autopilot. Check out how we work!",
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Eden Life in Nigeria, Eden Concierge in Nigeria, Eden Concierge, Eden Life, Improving quality of life, Quality of Life in Nigeria, Excellent service, Food service, Laundry service, AC service, Home cleaning service, Standard cleaning service, Home Deep cleaning service, Concierge to make you productive, eden app, Eden Nigeria, butler app, home concierge, eden, home assistants, convenience at home, edenlife, Eden, house helps, house maids, maids, house helps in Nigeria, house maids in Nigeria, Automate chores, Efficient household management, Avoiding housework, Tired of housework',
      },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@ouredenlife' },
      { name: 'twitter:app:country', content: 'NG' },
      { name: 'twitter:creator', content: '@ouredenlife' },
      { name: 'twitter:domain', content: '@ouredenlife' },
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://ouredenlife.com',
      },
      {
        rel: 'alternate',
        hreflang: 'en-ng',
        href: 'https://ouredenlife.com/'
      },
      {
        rel: 'alternate',
        hreflang: 'en-ke',
        href: 'https://ouredenlife.ke/'
      },
      {
        rel: 'alternate',
        hreflang: 'x-default',
        href: 'https://ouredenlife.com/'
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // global env config

  env: {
    PAYSTACK_KEY_TEST: 'pk_live_78ed64a0265d4e0bdea74e76e7243c577d365219',
    RAVE_KEY_TEST: 'FLWPUBK-d4dfef720154b7df12637126423b02c5-X',
    MAILCHIMP_USERID: '8d551f5341eee34aa00432838',
    MAILCHIMP_LISTID: '987fa4d39c',
    AIRTABLE_KEY: process.env.VUE_APP_AIRTABLEKEY,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/flutterwave',
    '~/plugins/vue-social-sharing.js',
    '~/plugins/vue-animate-on-scroll.js',
    '~/plugins/vue-mailchimp-subscribe.js',
    { src: '~/plugins/hotjar', ssr: false },
    // { src: 'plugins/route-subscribe.js', ssr: false }, // Only works on client side
    { src: '~/plugins/vue-persist.js', ssr: false },
    { src: 'plugins/vue-owl-carousel.js', ssr: false }, // Only works on client side
    '~/plugins/vue-date-picker.js'

  ],

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
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-140804740-1',
      },
    ],

    [
      "@nuxtjs/gtm",
    ],

    // Facebook pixel setup
    [
      'nuxt-facebook-pixel-module',
      {
        /* module options */
        track: 'PageView',
        pixelId: '1269879040024228',
        autoPageView: true,
        disabled: false,
      },
    ],
    // intercom setup
    'nuxt-intercom',

    '@nuxtjs/sitemap',

    // linkedin
    [
      'nuxt-linkedin-insight-tag',
      {
        linkedin_id: '3689585',
      },
    ],
  ],

  gtm: {
    id: 'GTM-566V4B2', // Used as fallback if no runtime config is provided
  },



  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
    icon: false, // disables the icon module
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['gsap'],
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue'),
      })
    },
  },

  sitemap: {
    hostname: 'https://ouredenlife.com',
    gzip: true,
    path: '/sitemap.xml',
    cacheTime: 1000 * 60 * 60 * 2,
    trailingSlash: true,
    routes: () => {
      return getRoutes()
    },
  },

  // add intercom
  intercom: {
    appId: 's0gimx8q',
    hideDefaultLauncher: false,
    horizontal_padding: 20, 
    vertical_padding: 60,
  },

  generate: {
    routes: dynamicRoutes,
    fallback: true,
  },
  server: {
    host: '0' // default: localhost
  }
}
