<template>
  <div id="get-the-app" ref="get-the-app">
    <section class="footer__top">
      <div class="footer__top-title">
        <h3>
          Get 10% On Your <br />
          Next Order!
        </h3>
        <p>Sign up on the Eden Life app. Be happy.</p>
        <div class="footer__top-link">
          <a
            href="https://play.google.com/store/apps/details?id=com.ouredenlife.app"
            target="_self"
            @click="openPlayStore"
          >
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611338471/eden-website-v2/playstore_n43eju.svg"
              alt="playstore"
            />
          </a>
          <a
            href="https://apps.apple.com/us/app/eden-life/id1482373755?ls=1"
            target="_self"
            @click="openAppleStore"
          >
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611338469/eden-website-v2/appstore_o1bj6d.svg"
              alt="appstore"
            />
          </a>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/eden-life-inc/image/upload/v1670551665/dance-festival/footer-image-min_jphnsb.png"
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
          <p class="footer__bottom-mission">10-xing the quality of life</p>

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
              <a
                target="_blank"
                href="https://ouredenlife.com/about_us/"
                class="footer__bottom-logo"
              >
                About Us
              </a>
            </li>
            <li @click="trackLink('Companies')">
              <a
                target="_blank"
                href="https://ouredenlife.com/companies/"
                class="footer__bottom-logo"
              >
                Companies
              </a>
            </li>
            <li @click="trackLink('Pricing')">
              <a
                target="_blank"
                href="https://ouredenlife.com/pricing/"
                class="footer__bottom-logo"
              >
                Pricing
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <p>Services</p>
            </li>
            <li @click="trackLink('Food')">
              <a
                target="_blank"
                href="https://ouredenlife.com/food/"
                class="footer__bottom-logo"
              >
                Food
              </a>
            </li>
            <li @click="trackLink('Cleaning')">
              <a
                target="_blank"
                href="https://ouredenlife.com/cleaning/"
                class="footer__bottom-logo"
              >
                Cleaning
              </a>
            </li>
            <li @click="trackLink('Laundry')">
              <a
                target="_blank"
                href="https://ouredenlife.com/laundry/"
                class="footer__bottom-logo"
              >
                Laundry
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <p>Other</p>
            </li>
            <li @click="trackLink('Faq')">
              <nuxt-link
                :to="{ path: '/faq/' }"
                class="footer__bottom-logo"
                @click.prevent="trackLink('Faq')"
              >
                FAQs
              </nuxt-link>
            </li>
            <li @click="trackLink('Blog')">
              <a
                target="_blank"
                href="https://ouredenlife.com/blog/"
                class="footer__bottom-logo"
              >
                Blog
              </a>
            </li>
            <li @click="trackLink('Contact us')">
              <a
                target="_blank"
                href="https://ouredenlife.com/contact_us/"
                class="footer__bottom-logo"
              >
                Contact Us
              </a>
            </li>
            <li @click="trackLink('T&C')">
              <a
                target="_blank"
                href="https://ouredenlife.com/terms_and_conditions/"
                class="footer__bottom-logo"
              >
                Terms &amp; Conditions
              </a>
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
      // window.open(
      //   ` https://play.google.com/store/apps/details?id=com.ouredenlife.app`,
      //     '_self'
      // )
      mixpanelTrackEvent('Get the app(playstore) clicked')
    },
    openAppleStore() {
      // window.open(
      //   `https://apps.apple.com/us/app/eden-life/id1482373755?ls=1`,
      //   '_self'
      // )
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

.footer__top-image {
  height: 100%;

  @include respond(md) {
    flex-direction: column;
    width: 90%;
    height: unset;
  }
}
</style>
