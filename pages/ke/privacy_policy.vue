<template>
  <div class="container">
    <header class="terms__header">
      <h1>Privacy Policy</h1>
      <nav class="terms__header-nav">
        <a>
          <p
            v-for="(tab, index) in tabs"
            :key="index"
            :class="`${activeTabIndex === index ? 'active' : ''}`"
            @click.prevent="activeTabIndex = index"
          >
            {{ tab.title }}
          </p>
        </a>
      </nav>
    </header>
    <section class="terms__body">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :style="`display: ${activeTabIndex === index ? 'block' : 'none'}`"
        v-html="tab.content"
      ></div>
    </section>
  </div>
</template>

<script>
import privacy from '~/static/privacy'

import { mixpanelTrackEvent } from '~/plugins/ke/mixpanel'

export default {
  data() {
    return {
      activeTabIndex: 0,
      tabs: privacy,
      content:
        'The Privacy Policy states how we,  Eden Life, Inc. (the “Company”) use your data when you use the services available through our website located at https://ouredenlife.ke',
    }
  },
  layout: 'ke-default',
  head() {
    return {
      title: 'Eden | Privacy Policy',
      meta: [
        { name: 'description', content: [this.content] },
        { name: 'twitter:description', content: [this.content] },
        { property: 'og:description', content: [this.content] },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://ouredenlifev2-staging.netlify.app/ke/privacy_policy/`,
        },
        {
          rel: 'alternate',
          hreflang: 'en-ng',
          href: 'https://ouredenlifev2-staging.netlify.app/privacy_policy/',
        },
        {
          rel: 'alternate',
          hreflang: 'en-ke',
          href: 'https://ouredenlifev2-staging.netlify.app/ke/privacy_policy/',
        },
        {
          rel: 'alternate',
          hreflang: 'x-default',
          href: 'https://ouredenlifev2-staging.netlify.app/privacy_policy/',
        },
      ],
    }
  },

  mounted() {
    mixpanelTrackEvent('Privacy Policy page')
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/_termsandconditions.scss';
</style>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  opacity: 1;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(300px);
  opacity: 0;
}
</style>
