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
    Navigation: () => import('~/components/ke/NavBar.vue'),
    Footer: () => import('~/components/ke/FooterKe.vue'),
  },
}
</script>

<style></style>
