<template>
  <div id="get-the-app" ref="get-the-app">
    <section class="footer__top">
      <div class="footer__top-title">
        <h3>Download the app!</h3>
        <p>It takes less than 5 minutes to sign up!</p>
        <div class="footer__top-link">
          <a
            href="https://play.google.com/store/apps/details?id=com.ouredenlife.app"
            @click.prevent="openPlayStore"
          >
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611338471/eden-website-v2/playstore_n43eju.svg"
              alt="playstore"
            />
          </a>
          <a
            href="https://apps.apple.com/us/app/eden-life/id1482373755?ls=1"
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
        alt=""
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
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0419 0C4.49595 0 0 4.49595 0 10.0419C0 15.0159 3.62029 19.1352 8.36708 19.9329V12.1369H5.94469V9.33139H8.36708V7.26274C8.36708 4.86251 9.83307 3.55453 11.9746 3.55453C13.0002 3.55453 13.8816 3.63095 14.1375 3.66461V6.17349L12.6522 6.17421C11.4879 6.17421 11.2634 6.7274 11.2634 7.53946V9.32996H14.0417L13.6793 12.1354H11.2634V20C16.2318 19.3953 20.0836 15.171 20.0836 10.039C20.0836 4.49595 15.5877 0 10.0419 0Z"
                  fill="#21312A"
                />
              </svg>
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
                :to="{ path: '/about_us' }"
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
            <li @click="trackLink('Pricing')">
              <nuxt-link
                :to="{ path: '/pricing' }"
                class="footer__bottom-logo"
                @click.prevent="trackLink('Pricing')"
              >
                Pricing
              </nuxt-link>
            </li>

            <li @click="trackLink('Careers')">
              <a
                href="https://edenlife.notion.site/Careers-at-Eden-Life-d11c387e84a043fca66001dcf67c70e3"
                target="_blank"
              >
                Careers
              </a>
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
            <!-- <li @click="trackLink('Gifting')">
              <nuxt-link
                :to="{ path: '/gifts' }"
                class="footer__bottom-logo"
                @click.prevent="trackLink('Gifting')"
              >
                Gifts
              </nuxt-link>
            </li> -->
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
              <nuxt-link
                :to="{ path: '/blog' }"
                class="footer__bottom-logo"
                @click.prevent="trackLink('Blog')"
              >
                Blog
              </nuxt-link>
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
             <li @click="trackLink('Privacy Policy')">
              <nuxt-link
                :to="{ path: '/privacy_policy' }"
                class="footer__bottom-logo"
                @click.prevent="trackLink('Privacy Policy')"
              >
               Privacy Policy
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
