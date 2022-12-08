<template>
  <div>
    <FestivalNavigation />
    <Nuxt />
    <FestivalFooter />
  </div>
</template>

<script>
import '~/assets/style.scss'
import countryRoute from '@/mixins/countryRoute'
export default {
  components: {
    FestivalNavigation: () =>
      import('@/components/dance-festival/FestivalNavigation.vue'),
    FestivalFooter: () =>
      import('@/components/dance-festival/FestivalFooter.vue'),
  },
  head() {
    return {
      script: [
        // Setup Bento
        {
          src: 'https://fast.bentonow.com?site_uuid=c5cfd9ac8b0d3346d2eead94a44e5549',
          type: 'text/javascript',
          body: true,
          defer: true,
          async: true,
        },
      ],
    }
  },
  mounted() {
    this.$intercom('hide')
  },
  mixins: [countryRoute],
  computed: {
    country() {
      return this.$store.getters.getCountry
    },
  },
  watch: {
    country() {
      if (this.country === 'NG') {
        // this.$nuxt.$route.path.replace('','/')
        if (this.$nuxt.$route.path.includes('ke')) {
          console.log('NG route')
          this.$nuxt.$route.path.replace('/ke', '/')
        }
      }
    },
  },
}
</script>

<style></style>
