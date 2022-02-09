<template>
  <div>
    <div ref="hero" class="container--hero">
      <header class="header">
        <nuxt-link :to="{ path: '/' }" class="header__logo">
          <img
            src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611230252/eden-website-v2/eden-logo_lcepc6.svg"
            alt="Eden logo"
          />
        </nuxt-link>
      </header>
      <div class="hero">
        <div class="hero__title">
          <h1>
            <span class="pay"> *Pay Once.</span> <br />
            Get Lunch.<br />
            All Month.
          </h1>
          <p>
            Subscribe to our lunch plan and get chef-cooked meals delivered.
            <span class="bold">Monday to Friday. </span> You work so hard and
            deserve better.
            <br />
            <br />
            Start your Eden lunch plan today
            <span class="bold"> and get 20% off your first month.</span>
          </p>
          <img
            src="https://res.cloudinary.com/eden-life-inc/image/upload/v1619608257/eden-website-v2/Food_IMG_ptb5mk.png"
            alt=""
          />
        </div>
        <div class="hero__form">
          <div class="hero__form-title">
            <h3>Start Your Eden Life</h3>
            <p>
              Enter your details and we'll email you about the next steps. Let's
              go!
            </p>
          </div>
          <div class="hero__form-body">
            <div class="hero__form-input">
              <label for="name">Full Name</label>
              <input
                id=""
                v-model="form.name"
                type="text"
                name=""
                placeholder="First & Last Name"
                :class="{ 'has-error': $v.form.name.$error }"
              />
            </div>
            <div class="hero__form-input">
              <label for="email">Email</label>
              <input
                id=""
                v-model="form.email"
                type="email"
                name=""
                placeholder="email@example.com"
                :class="{ 'has-error': $v.form.email.$error }"
              />
            </div>
            <div class="hero__form-input">
              <label for="address">Address</label>
              <input
                id=""
                v-model="form.address"
                type="text"
                name=""
                placeholder="Where you’ll receive your meals"
                :class="{ 'has-error': $v.form.address.$error }"
              />
            </div>
            <button class="hero__form-btn" @click="sendUserInfoIntercom">
              Get Started at 20% Off
            </button>
          </div>
          <p class="note">
            *₦1,760 per meal on our first month. (Delivery costs included)
          </p>
        </div>
      </div>
    </div>
    <div class="container--menu">
      <div v-if="!currentMeals.length" class="menu__loader">
        <Loader />
        <p>Loading menu...</p>
      </div>
      <transition name="slide-fade">
        <Menu
          v-if="currentMeals.length && showCurrentMenu"
          :meals="currentMeals"
          :nextMeals="nextWeekMeals"
          :title="'Current Menu'"
          :firstDateFormat="firstDateFormat"
          :lastDateFormat="lastDateFormat"
          @showNext="toggleMenu('next')"
        />
      </transition>
      <transition name="slide-fade">
        <Menu
          v-if="showNextMenu"
          :meals="nextWeekMeals"
          :title="`Next week's Menu`"
          :firstDateFormat="nextFirstDateFormat"
          :lastDateFormat="nextLastDateFormat"
          @showCurrent="toggleMenu('current')"
        />
      </transition>
      <section v-if="currentMeals.length" class="menu">
        <button class="menu-btn" @click.prevent="scrollToTop('hero')">
          Get Started at 20% Off
        </button>
      </section>
    </div>
    <div class="container--footer">
      <footer class="footer">
        <div class="footer__mission">
          <nuxt-link :to="{ path: '/' }" class="footer__logo">
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611230252/eden-website-v2/eden-logo_lcepc6.svg"
              alt="Eden logo"
            />
          </nuxt-link>
          <p>10x-ing the quality of life on the continent.</p>
        </div>
        <div>
          <div class="footer__social">
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
          <p class="footer__copywright">
            {{ new Date().getFullYear() }} Eden Life Inc. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, alpha } from 'vuelidate/lib/validators'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import { placeholderColorMix } from '~/static/functions'
import currentMeal from '~/mixins/currentMeal'

export default {
  components: {
    Loader: () => import('@/components/Loader.vue'),
    Menu: () => import('@/components/Menu.vue'),
  },
  mixins: [validationMixin, currentMeal],
  layout: 'lead',
  validations: {
    form: {
      email: { required, email },
      name: { required, alpha },
      address: { required },
    },
  },
  data() {
    return {
      form: {
        email: '',
        name: '',
        address: '',
      },
      loading: false,
    }
  },
  mounted() {
    mixpanelTrackEvent('Lead page v1')
  },
  methods: {
    placeholderColorMix,
    scrollToTop(ref) {
      this.$refs[ref].scrollIntoView()
    },
    sendUserInfoIntercom() {
      mixpanelTrackEvent('Sign up button clicked', 'Lead page v1')
      this.loading = true
      this.$v.form.$touch()
      if (!this.$v.form.$error) {
        const metadata = {
          email: this.form.email,
          name: this.form.name,
          address: this.form.address,
          lead_gen_page: window.location.href,
          referrer: document.referrer,
        }
        this.$intercom('update', metadata)
        this.$intercom('trackEvent', 'lead-genaration-signup', metadata)
        setTimeout(() => {
          this.$nextTick(() => {
            this.$v.form.$reset()
            this.form.email = ''
            this.form.name = ''
            this.form.address = ''
            this.loading = false
            this.$router.push('/')
          })
        }, 500)
      }
    },

    openSocialMedia(name, url) {
      mixpanelTrackEvent(`${name} icon clicked - Lead page v1`)
      window.open(url, '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_edenlunch.scss';
</style>
