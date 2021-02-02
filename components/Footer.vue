<template>
  <div id="get-the-app" ref="get-the-app">
    <section class="footer__top">
      <div class="footer__top-title">
        <h3>Get the app!</h3>
        <p>Sign up on the Eden Life app. Be happy.</p>
        <div class="footer__top-link">
          <a
            href="https://play.google.com/store/apps/details?id=com.ouredenlife.app"
            target="_blank"
            @click.prevent="openPlayStore"
          >
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611338471/eden-website-v2/playstore_n43eju.svg"
              alt="playstore"
            />
          </a>
          <a
            href="https://apps.apple.com/us/app/eden-life/id1482373755?ls=1"
            target="_blank"
            @click.prevent="openAppleStore"
          >
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611338469/eden-website-v2/appstore_o1bj6d.svg"
              alt="appstore"
            />
          </a>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/eden-life-inc/image/upload/q_auto/v1611337863/eden-website-v2/footer-phone_xeixqy.svg"
        alt="phone"
        class="footer__top-image"
      />
    </section>
    <div class="container--footer">
      <footer class="footer__bottom">
        <div class="footer__bottom-title">
          <nuxt-link :to="{ path: '/' }" class="footer__bottom-logo">
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611230252/eden-website-v2/eden-logo_lcepc6.svg"
              alt="Eden logo"
            />
          </nuxt-link>
          <p class="footer__bottom-mission">
            10x-ing the quality of life<br />
            on the continent.
          </p>

          <div class="footer__bottom-social">
            <a
              href="https://twitter.com/ouredenlife"
              target="_blank"
              @click.prevent="
                openSocialMedia('Twitter', 'https://twitter.com/ouredenlife')
              "
            >
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611341806/eden-website-v2/twitter_pxdich.svg"
                alt="twitter"
              />
            </a>
            <a
              href="https://instagram.com/ouredenlife"
              target="_blank"
              @click.prevent="
                openSocialMedia(
                  'Instagram',
                  'https://instagram.com/ouredenlife'
                )
              "
            >
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611341806/eden-website-v2/instagram_erb6q6.svg"
                alt="instagram"
              />
            </a>
            <a
              href="https://facebook.com/ouredenlife"
              target="_blank"
              @click.prevent="
                openSocialMedia('Facebook', 'https://facebook.com/ouredenlife')
              "
            >
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611341806/eden-website-v2/facebook_cqsjdf.svg"
                alt="facebook"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/ouredenlife/"
              target="_blank"
              @click.prevent="
                openSocialMedia(
                  'LinkedIn',
                  'https://www.linkedin.com/company/ouredenlife/'
                )
              "
            >
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611341816/eden-website-v2/linkedin_utcbna.svg"
                alt="linkedin"
              />
            </a>
          </div>
          <p class="footer__bottom-copywright">
            {{ new Date().getFullYear() }} Eden Life Inc. All Rights Reserved.
          </p>
        </div>
        <div class="footer__bottom-nav">
          <ul>
            <li>
              <p>Company</p>
            </li>
            <li @click="trackLink('About us')">
              <nuxt-link
                :to="{ path: '/companies' }"
                class="footer__bottom-logo"
                @click.prevent="trackLink('About us')"
              >
                About Us
              </nuxt-link>
            </li>
            <li @click="trackLink('Companies')">
              <nuxt-link
                :to="{ path: '/companies' }"
                class="footer__bottom-logo"
                @click.prevent="trackLink('Companies')"
              >
                Companies
              </nuxt-link>
            </li>
          </ul>

          <ul>
            <li>
              <p>Services</p>
            </li>
            <li @click="trackLink('Food')">
              <nuxt-link
                :to="{ path: '/food' }"
                class="footer__bottom-logo"
                @click.prevent="trackLink('Food')"
              >
                Food
              </nuxt-link>
            </li>
            <li @click="trackLink('Cleaning')">
              <nuxt-link
                :to="{ path: '/cleaning' }"
                class="footer__bottom-logo"
                @click.prevent="trackLink('Cleaning')"
              >
                Cleaning
              </nuxt-link>
            </li>
            <li @click="trackLink('Laundry')">
              <nuxt-link
                :to="{ path: '/laundry' }"
                class="footer__bottom-logo"
                @click.prevent="trackLink('Laundry')"
              >
                Laundry
              </nuxt-link>
            </li>
            <li @click="trackLink('Gifting')">
              <nuxt-link
                :to="{ path: '' }"
                class="footer__bottom-logo"
                @click.prevent="trackLink('Gifting')"
              >
                Gifting
              </nuxt-link>
            </li>
          </ul>

          <ul>
            <li>
              <p>Other</p>
            </li>
            <li @click="trackLink('Faq')">
              <nuxt-link
                :to="{ path: '/faq' }"
                class="footer__bottom-logo"
                @click.prevent="trackLink('Faq')"
              >
                FAQs
              </nuxt-link>
            </li>
            <li @click="trackLink('Blog')">
              <a
                href="https://blog.ouredenlife.com"
                target="_blank"
                class="footer__bottom-logo"
                @click.prevent="trackLink('Blog')"
              >
                Blog
              </a>
            </li>
            <li @click="trackLink('Contact us')">
              <nuxt-link
                :to="{ path: '/contact_us' }"
                class="footer__bottom-logo"
                @click.prevent="trackLink('Contact us')"
              >
                Contact Us
              </nuxt-link>
            </li>
            <li @click="trackLink('T&C')">
              <nuxt-link
                :to="{ path: '/terms_and_conditions' }"
                class="footer__bottom-logo"
                @click.prevent="trackLink('T&C')"
              >
                Terms &amp; Conditions
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div class="footer__bottom-social mobile">
          <a
            href="https://twitter.com/ouredenlife"
            target="_blank"
            @click.prevent="
              openSocialMedia('Twitter', 'https://twitter.com/ouredenlife')
            "
          >
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611341806/eden-website-v2/twitter_pxdich.svg"
              alt="twitter"
            />
          </a>
          <a
            href="https://instagram.com/ouredenlife"
            target="_blank"
            @click.prevent="
              openSocialMedia('Instagram', 'https://instagram.com/ouredenlife')
            "
          >
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611341806/eden-website-v2/instagram_erb6q6.svg"
              alt="instagram"
            />
          </a>
          <a
            href="https://facebook.com/ouredenlife"
            target="_blank"
            @click.prevent="
              openSocialMedia('Facebook', 'https://facebook.com/ouredenlife')
            "
          >
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611341806/eden-website-v2/facebook_cqsjdf.svg"
              alt="facebook"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/ouredenlife/"
            target="_blank"
            @click.prevent="
              openSocialMedia(
                'LinkedIn',
                'https://www.linkedin.com/company/ouredenlife/'
              )
            "
          >
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611341816/eden-website-v2/linkedin_utcbna.svg"
              alt="linkedin"
            />
          </a>
        </div>
        <p class="footer__bottom-copywright mobile">
          {{ new Date().getFullYear() }} Eden Life Inc. All Rights Reserved.
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
import { mixpanelTrackEvent } from '~/plugins/mixpanel'

export default {
  name: 'Footer',
  data() {
    return {
      currentRoute: '',
    }
  },
  watch: {
    $route() {
      const getRoute = this.$nuxt.$route.path
      const setHomepage = getRoute.replace('/', '')
      this.currentRoute = setHomepage === '' ? 'homepage' : setHomepage
    },
  },
  mounted() {
    const getRoute = this.$nuxt.$route.path
    const setHomepage = getRoute.replace('/', '')
    this.currentRoute = setHomepage === '' ? 'homepage' : setHomepage
  },
  methods: {
    openPlayStore() {
      window.open(
        ` https://play.google.com/store/apps/details?id=com.ouredenlife.app`,
        '_blank'
      )
      mixpanelTrackEvent('Get the app(playstore) clicked')
    },
    openAppleStore() {
      window.open(
        `https://apps.apple.com/us/app/eden-life/id1482373755?ls=1`,
        '_blank'
      )
      mixpanelTrackEvent('Get the app(applestore) clicked')
    },
    openSocialMedia(name, url) {
      mixpanelTrackEvent(`${name} icon clicked - ${this.currentRoute}`)
      window.open(url, '_blank')
    },
    trackLink(name) {
      mixpanelTrackEvent(`${name} link clicked (footer - ${this.currentRoute})`)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/_footer.scss';
</style>
