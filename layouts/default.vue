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
}
</script>

<style></style>
