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
    Navigation: () => import('~/components/ke/NavBar.vue'),
    Footer: () => import('~/components/ke/FooterKe.vue'),
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
          console.log("ke route")
        this.$nuxt.$route.path.replace('/ke','/')
      }
     } 
    //  if(country === 'KE') {

    //    }
    }
  }
}
</script>

<style></style>
