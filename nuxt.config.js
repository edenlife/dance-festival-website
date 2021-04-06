const dynamicRoutes = async () => {
  const singleRoute = await fetch(
    'https://wordpress.edenlife.ng/wp-json/wp/v2/posts?page=1&per_page=50&_embed=1'
  ).then((res) => res.json())
  return singleRoute.map((post) => `/blog/${post.id}`)
}

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
      { itemprop: 'name', content: 'Eden' },
      { itemprop: 'description', content: 'Say goodbye to chores forever.' },
      {
        itemprop: 'image',
        content: 'https://ouredenlifev2-staging.netlify.app/edencard.png',
      },

      // Twitter Card data
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@ouredenlife' },
      { name: 'twitter:title', content: 'Eden' },
      {
        name: 'twitter:url',
        content: 'https://ouredenlifev2-staging.netlify.app',
      },
      {
        name: 'twitter:image',
        content: 'https://ouredenlifev2-staging.netlify.app/edencard.png',
      },
      {
        name: 'twitter:description',
        content:
          "Say goodbye to chores forever. Eden is a tech-enabled service that puts your home's chores on autopilot. Check out how we work!",
      },
      { name: 'twitter:app:country', content: 'NG' },
      { name: 'twitter:creator', content: '@ouredenlife' },
      { name: 'twitter:domain', content: '@ouredenlife' },
      {
        name: 'twitter:image:src',
        content: 'https://ouredenlifev2-staging.netlify.app/edencard.png',
      },

      // Open Graph data
      { property: 'og:title', content: 'Eden' },
      {
        property: 'og:url',
        content: 'https://ouredenlifev2-staging.netlify.app',
      },
      {
        property: 'og:image',
        content: 'https://ouredenlifev2-staging.netlify.app/edencard.png',
      },
      {
        property: 'og:description',
        content:
          "Say goodbye to chores forever. Eden is a tech-enabled service that puts your home's chores on autopilot. Check out how we work!",
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Eden' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  script: [
    // Mixpanel analytics token
    {
      innerHTML: `(function(f,b){if(!b.__SV){var e,g,i,h;window.mixpanel=b;b._i=[];b.init=function(e,f,c){function g(a,d){var b=d.split(".");2==b.length&&(a=a[b[0]],d=b[1]);a[d]=function(){a.push([d].concat(Array.prototype.slice.call(arguments,0)))}}var a=b;"undefined"!==typeof c?a=b[c]=[]:c="mixpanel";a.people=a.people||[];a.toString=function(a){var d="mixpanel";"mixpanel"!==c&&(d+="."+c);a||(d+=" (stub)");return d};a.people.toString=function(){return a.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
      for(h=0;h<i.length;h++)g(a,i[h]);var j="set set_once union unset remove delete".split(" ");a.get_group=function(){function b(c){d[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));a.push([e,call2])}}for(var d={},e=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<j.length;c++)b(j[c]);return d};b._i.push([e,f,c])};b.__SV=1.2;e=f.createElement("script");e.type="text/javascript";e.async=!0;e.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?
      MIXPANEL_CUSTOM_LIB_URL:"file:"===f.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";g=f.getElementsByTagName("script")[0];g.parentNode.insertBefore(e,g)}})(document,window.mixpanel||[]);
      mixpanel.init("0dbc9d5e7fd428a3716831dfb6ad6508", {batch_requests: true})`,
      type: 'text/javascript',
      body: true,
      defer: true,
    },
    // setup intercom
    {
      innerHTML: `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/z3bq2kah';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`,
      type: 'text/javascript',
      body: true,
      defer: true,
    },
  ],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // global env config

  env: {
    PAYSTACK_KEY_TEST: 'pk_test_510052635616385dc547e4f1790f59052cf56048',
    RAVE_KEY_TEST: 'FLWPUBK_TEST-f35584e887ccd845a97f7c45c84fbac9-X',
    MAILCHIMP_USERID: '8d551f5341eee34aa00432838',
    MAILCHIMP_LISTID: '987fa4d39c',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/flutterwave',
    '~/plugins/vue-social-sharing.js',
    '~/plugins/vue-mailchimp-subscribe.js',
    '~/plugins/disqus.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    'nuxt-intercom',
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
  build: {
    transpile: ['gsap'],
  },
  // add intercom
  intercom: {
    appId: 'z3bq2kah',
    hideDefaultLauncher: true,
  },

  generate: {
    routes: dynamicRoutes,
    fallback: true,
  },
}
