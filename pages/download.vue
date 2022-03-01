<template>
  <div class="download"> </div>
</template>

<script>
import { mixpanelTrackEvent } from '~/plugins/mixpanel'

export default {
  mounted() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera
    if (/windows phone/i.test(userAgent)) {
      const scrollToElement = document.querySelector('#get-the-app')
      scrollToElement.scrollIntoView()
    }

    if (/android/i.test(userAgent)) {
      window.open(
        ` https://play.google.com/store/apps/details?id=com.ouredenlife.app`
      )
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.open(`https://apps.apple.com/us/app/eden-life/id1482373755?ls=1`)
    }
    mixpanelTrackEvent('App Download Link Clicked')
  },
}
</script>

<style lang="scss" scoped>
.download{
    height: 40vh;
}
</style>
