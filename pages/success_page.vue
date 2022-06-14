<template>
    <div class="container--hero">
      <header class="header">
        <nuxt-link :to="{ path: '/' }" class="header__logo">
          <img
            src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611230252/eden-website-v2/eden-logo_lcepc6.svg"
            alt="Eden logo"
          />
        </nuxt-link>
      </header>

      <div slot="body" class="modal__body success">
        <div class="company__modal">
          <div class="company__modal-body">
             <div class="company__modal-body-card"> 
                  <img
                    src="@/assets/images/emojis/congratulations.svg"
                    alt="confetti"
                    class="confetti"
                    />
                    <h3>Thank you!</h3>
                    <p>
                    Someone from our team will reach out to you in the next 24-48 hours.
                    </p>
             </div>
            <div class="company__modal-body-text">
                <p>Alternatively, you can download the Eden Life app to get <span>immediate service.</span></p>
            </div>
          </div>
        </div>
      </div>
    <div class="success-footer">
        <lead-gen-footer />
    </div>
  </div>
</template>

<script>
import { scrollToApp } from '~/static/functions'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import LeadGenFooter from '~/components/LeadGenFooter.vue'

export default {
  components: { LeadGenFooter },
  layout: 'lead',
  data() {
    return {
     
    }
  },
  computed: {
  },
  mounted() {
    mixpanelTrackEvent('Success page') },
  methods: {
    scrollToFooter(id, label) {
      scrollToApp(id, label)
    },
    increaseOrder(order) {
      mixpanelTrackEvent(`Increase ${order} order clicked - laundry page`)

      if (order === 'washDry') {
        this.washDry++
        this.totalWashDryPrice = pricing({
          laundry: {
            item: 'wash-and-fold',
            frequency: this.washDryFrequency,
            qty: this.washDry,
          },
        })
      }

      if (order === 'washIron') {
        this.washIron++
        this.totalWashIronPrice = pricing({
          laundry: {
            item: 'wash-and-iron',
            frequency: this.washIronFrequency,
            qty: this.washIron,
          },
        })
      }
    },
   goToApp() {
      mixpanelTrackEvent(`Get Started - Lead page v3`)
      const userAgent = navigator.userAgent || navigator.vendor || window.opera
      // Windows Phone must come first because its UA also contains "Android"
      // if (/windows phone/i.test(userAgent)) {
      //   this.scrollToFooter('#getEden', 'laundry-leads - hero')
      //   return
      // }

      if (/android/i.test(userAgent)) {
        window.open(
          ` https://play.google.com/store/apps/details?id=com.ouredenlife.app`
        )
        return
      }

      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.open(`https://apps.apple.com/us/app/eden-life/id1482373755?ls=1`)
        return
      }
       this.scrollToFooter('#getEden', 'laundry-leads - hero')
    },
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_success_page.scss';
</style>

