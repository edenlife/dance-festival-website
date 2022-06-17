<template>
  <div class="container">
    <header class="terms__header">
      <h1>Terms & Conditions</h1>
      <nav class="terms__header-nav">
        <nuxt-link
          v-for="(tab, index) in tabs"
          :key="index"
          :to="{ path: `/terms_and_conditions#${tab.id}` }"
          @click.prevent="activeTabIndex = index"
        >
          <p :class="`${activeTabIndex === index ? 'active' : ''}`">
            {{ tab.title }}
          </p>
          <svg
            v-if="activeTabIndex === index"
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="3" cy="3" r="3" fill="#61DB98" />
          </svg>
        </nuxt-link>
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
import terms from '~/static/terms'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'

export default {
  beforeRouteEnter(to, from, next) {
    const tab = to.hash.replace('#', '')
    next((vm) => {
      vm.activeTabIndex = 0
      vm.tabs.forEach((item, index) => {
        if (item.id === tab) {
          vm.activeTabIndex = index
        }
      })
    })
  },
  beforeRouteUpdate(to, from, next) {
    const tab = to.hash.replace('#', '')
    this.activeTabIndex = 0
    this.tabs.forEach((item, index) => {
      if (item.id === tab) {
        this.activeTabIndex = index
      }
    })
    next()
  },
  data() {
    return {
      activeTabIndex: null,
      tabs: terms,
      content:
        'These Terms of Use (the “Terms”) govern your use of the Eden Life, Inc. (the “Company”) service available through our website located at https://ouredenlife.com',
    }
  },
  head() {
    return {
      title: 'Eden | Terms and Conditions',
      meta: [
        { name: 'description', content: [this.content] },
        { name: 'twitter:description', content: [this.content] },
        { property: 'og:description', content: [this.content] },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://ouredenlife.com/terms_and_conditions`,
        },
        {
          rel: 'alternate',
          hreflang: 'en-ng',
          href: 'https://ouredenlife.com/terms_and_conditions'
        },
        {
          rel: 'alternate',
          hreflang: 'en-ke',
          href: 'https://ouredenlife.ke/terms_and_conditions'
        },
        {
          rel: 'alternate',
          hreflang: 'x-default',
          href: 'https://ouredenlife.com/terms_and_conditions'
        },
      ],
    }
  },
  mounted() {
    mixpanelTrackEvent('T&C page')
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
