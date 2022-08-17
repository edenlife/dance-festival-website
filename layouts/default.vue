<template>
  <div>
    <Navigation />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import '~/assets/style.scss'
import countryRoute from '@/mixins/countryRoute'
export default {
  components: {
    Navigation: () => import('@/components/Navigation.vue'),
    Footer: () => import('~/components/Footer.vue'),
  },
    mixins: [countryRoute],
  computed: {
    country () {
      return this.$store.getters.getCountry
    },
  },
  watch: {
    country() {
      if(this.country === 'NG') {
      // this.$nuxt.$route.path.replace('','/')
        if(this.$nuxt.$route.path.includes('ke')) {
          console.log("NG route")
        this.$nuxt.$route.path.replace('/ke','/')
      }
     } 
    }
  }
}
</script>

<style></style>
