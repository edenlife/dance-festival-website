<template>
  <div class="container">
    <header class="contact__header">
      <h1>Contact Us</h1>
      <p>
        Got a special request, need more information or you simply want to talk?
        Reach out to us and we'll respond as soon as possible.
      </p>
    </header>
    <section class="contact__inquires">
      <div class="contact__inquires-card press">
        <h3>📻</h3>
        <h5>Press Inquiries</h5>
        <p>
          For press inquiries, send us an email via the email address below.
        </p>
        <a href="mailto:info.ke@ouredenlife.com"> info.ke@ouredenlife.com</a>
      </div>
      <div class="contact__inquires-card partner">
        <h3>🤝</h3>
        <h5>Billing & Sales Inquiries</h5>
        <p>
          For billing & sales inquiries, send us an email via the email address
          below.
        </p>
        <a href="mailto:sales.ke@ouredenlife.com">sales.ke@ouredenlife.com</a>
      </div>
      <div class="contact__inquires-card support">
        <h3>☎️</h3>
        <h5>Customer Support</h5>
        <p>
          For customer support, send us an email via the email address below or
          log in to your Eden app to chat directly with your Gardener.
        </p>
        <a href="mailto:customersuccess.ke@ouredenlife.com"
          >customersuccess.ke@ouredenlife.com</a
        >
      </div>
    </section>

    <section class="contact__office">
      <div class="contact__office-address">
        <h5>Eden Office</h5>
        <p>
          Unit 6, Chameleon Avenue,<br />
          Westlands, <br />
          Nairobi.
        </p>
        <div class="email">
          <p>Email: info.ke@ouredenlife.com</p>
          <p>Phone number: +254 723 636 363</p>
        </div>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Chameleon+Avenue,+Westlands"
          target="_blank"
          >View on Google Maps</a
        >
      </div>
      <div class="contact__office-members">
        <img
          src="https://res.cloudinary.com/eden-life-inc/image/upload/v1652176074/eden-website-v2/eden-kenya_zeudl8.jpg"
          alt="Eden Members"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { scrollToApp } from '~/static/functions'
import getSiteMeta from '~/utils/getSiteMeta'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'

export default {
  mounted() {
    mixpanelTrackEvent('Contact Us page')
  },
  layout: 'ke-default',
  head() {
    return {
      title: 'Eden | Contact Us',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://ouredenlifev2-staging.netlify.app/ke/contact_us/`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        title: 'Eden | Contact Us',
        description: `Say goodbye to chores forever. Eden is a tech-enabled service that puts your home's chores on autopilot. Check out how we work!`,
        url: `https://ouredenlifev2-staging.netlify.app/ke/contact_us/`,
        mainImage: 'https://ouredenlifev2-staging.netlify.app/edencard.png',
      }
      return getSiteMeta(metaData)
    },
  },
  methods: {
    scrollToFooter(id, label) {
      scrollToApp(id, label)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/ke/_contact.scss';
</style>
