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
        <a href="mailto:press@edenlife.ng">press@edenlife.ng</a>
      </div>
      <div class="contact__inquires-card partner">
        <h3>🤝</h3>
        <h5>Partner Inquiries</h5>
        <p>
          For partner inquiries, send us an email via the email address below.
        </p>
        <a href="mailto:partner@edenlife.ng">partner@edenlife.ng</a>
      </div>
      <div class="contact__inquires-card support">
        <h3>☎️</h3>
        <h5>Customer Support</h5>
        <p>
          For customer support, call
          <a href="tel:+2348146757886"> +2348146757886</a>

          or
          <a @click.prevent="launchIntercom()" class="trigger-chat"> chat</a>
          with us.
        </p>
        <a
          href="#"
          @click.prevent="scrollToFooter('#get-the-app', 'contact - support')"
          >Download the Eden App</a
        >
      </div>
    </section>

    <section class="contact__office">
      <div class="contact__office-address">
        <h5>Eden Office</h5>
        <p>
          Block C7 Unit 3, Jacob Mews Estate, <br />Adebisi Street, Yaba,<br />
          Lagos, Nigeria.
        </p>
        <div class="email">
          <p>Email: support@edenlife.ng</p>
          <p>Phone number: +234 814 675 7886</p>
        </div>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Eden,+Adebisi+Street,+Lagos"
          target="_blank"
          >View on Google Maps</a
        >
      </div>
      <div class="contact__office-members">
        <img
          src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611580387/eden-website-v2/eden-members_boutaf.png"
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
  head() {
    return {
      title: 'Eden | Contact Us',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://ouredenlife.com/contact_us/`,
        },
        {
          rel: 'alternate',
          hreflang: 'en-ng',
          href: 'https://ouredenlife.com/contact_us/',
        },
        {
          rel: 'alternate',
          hreflang: 'en-ke',
          href: 'https://ouredenlife.com/ke/contact_us/',
        },
        {
          rel: 'alternate',
          hreflang: 'x-default',
          href: 'https://ouredenlife.com/contact_us/',
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        title: 'Eden | Contact Us',
        description: `Say goodbye to chores forever. Eden is a tech-enabled service that puts your home's chores on autopilot. Check out how we work!`,
        url: `https://ouredenlife.com/contact_us/`,
        mainImage: 'https://ouredenlife.com/edencard.png',
      }
      return getSiteMeta(metaData)
    },
  },
  methods: {
    scrollToFooter(id, label) {
      scrollToApp(id, label)
    },
    launchIntercom() {
      this.$intercom('show')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_contact.scss';
</style>
