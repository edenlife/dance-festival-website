<template>
  <div>
    <Navigation />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import '~/assets/style.scss'

export default {
  components: {
    Navigation: () => import('@/components/Navigation.vue'),
    Footer: () => import('~/components/Footer.vue'),
  },
  head() {
    return {
      script: [
        // Setup Bento
        {
          src:
            'https://fast.bentonow.com?site_uuid=c5cfd9ac8b0d3346d2eead94a44e5549',
          type: 'text/javascript',
          body: true,
          defer: true,
          async: true,
        },
      ],
    }
  },
  mounted() {
    this.$intercom('show')
  },
}
</script>

<style></style>
