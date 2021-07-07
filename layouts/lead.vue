<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import '~/assets/style.scss'

export default {
  mounted() {
    this.$intercom('show')
  },
}
</script>
