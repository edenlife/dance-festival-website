<template>
  <div>
    <Navigation />
    <Nuxt />
  </div>
</template>

<script>
import '~/assets/style.scss'

export default {
  components: {
    Navigation: () => import('@/components/Navigation.vue'),
  },
}
</script>

<style></style>
