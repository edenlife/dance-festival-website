<template>
  <div>
    <div class="cart-cta" @click="openCart">
      <svg
        width="28"
        height="32"
        viewBox="0 0 28 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text x="10" y="25" fill="white">{{ cartItems }}</text>
        <path
          d="M27.8784 30.9482L25.4463 7.78734C25.3953 7.30248 24.9866 6.93431 24.499 6.93431H19.9277V5.89208C19.9277 2.64331 17.2844 0 14.0357 0C10.7866 0 8.14334 2.64331 8.14334 5.89208V6.93431H3.57206C3.08451 6.93431 2.67582 7.30248 2.62479 7.78734L0.192671 30.9482C0.164595 31.2165 0.251753 31.4843 0.432172 31.685C0.612836 31.8854 0.87016 31.9999 1.13993 31.9999H26.9309C27.2009 31.9999 27.4582 31.8854 27.6387 31.685C27.8196 31.4843 27.9065 31.2165 27.8784 30.9482ZM10.0481 5.89208C10.0481 3.6936 11.8369 1.90478 14.0357 1.90478C16.2341 1.90478 18.023 3.6936 18.023 5.89208V6.93431H10.0481V5.89208ZM2.19755 30.0952L4.42972 8.83909H8.14334V10.938C8.14334 11.4638 8.56985 11.8904 9.09573 11.8904C9.62161 11.8904 10.0481 11.4638 10.0481 10.938V8.83909H18.023V10.938C18.023 11.4638 18.4495 11.8904 18.9753 11.8904C19.5012 11.8904 19.9277 11.4638 19.9277 10.938V8.83909H23.6414L25.8735 30.0952H2.19755Z"
          fill="white"
        />
      </svg>
    </div>
    <div class="container--hero">
      <header class="hero">
        <div class="hero__title">
          <h1>
            <span> Smile</span>
            in a Box.
          </h1>
          <h1 class="mobile"><span>Smile </span> in a Box</h1>
          <p>
            Give beautiful gifts, thoughtfully curated for
            <br />
            different people and different occasions.
            <br />
            No hidden charges. No stress.
          </p>
          <div class="hero__button">
            <button
              type="button"
              class="hero__button-solid"
              @click.prevent="scrollTo('gifts')"
            >
              Find the perfect gift
            </button>
          </div>
        </div>
        <div class="hero__img">
          <img
            src="https://res.cloudinary.com/eden-life-inc/image/upload/v1612291965/eden-website-v2/hero-gifting_tfyzcz.jpg"
            alt="gifting"
            class="hero__img-bg1"
          />
        </div>
      </header>
    </div>
    <div id="gifts" ref="gifts" class="container--menu">
      <section class="gift">
        <div class="gift__title">
          <h3>Find the Perfect Gift</h3>
          <p>
            Select the box that's best for your beau or belle in Lagos, and
            <br />
            we'll get it to them—with all your love.
          </p>
        </div>
        <div class="gift__type">
          <ul>
            <li
              :class="{ active: type === 'her' }"
              @click.prevent="type = 'her'"
            >
              <span> For Her </span>
              <svg
                v-if="type === 'her'"
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3" r="3" fill="#61DB98" />
              </svg>
            </li>
            <li
              :class="{ active: type === 'him' }"
              @click.prevent="type = 'him'"
            >
              <span> For Him </span>
              <svg
                v-if="type === 'him'"
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3" r="3" fill="#61DB98" />
              </svg>
            </li>
          </ul>
          <transition name="slide-fade">
            <div v-if="type === 'her'">
              <gift-package
                v-for="(giftType, index) in giftTypes.giftHer"
                :key="index"
                :gift-type="giftType"
                :orientation="index % 2 === 0 ? 'default' : 'reverse'"
              />
            </div>
          </transition>
          <transition name="slide-fade">
            <div v-if="type === 'him'">
              <gift-package
                v-for="(giftType, index) in giftTypes.giftHim"
                :key="index"
                :gift-type="giftType"
                :orientation="index % 2 !== 0 ? 'default' : 'reverse'"
              />
            </div>
          </transition>
        </div>
      </section>
    </div>
    <div class="container--options">
      <section class="options">
        <div class="options__title">
          <h3>
            Want to break
            <br />
            up with chores?
          </h3>
          <p>Take a look at our other services</p>
        </div>
        <div class="options__service">
          <div
            class="options__service-item options__service-laundry"
            @mouseenter.stop="exploreService = 'laundry'"
            @mouseleave.stop="exploreService = ''"
          >
            <h3>🧺</h3>
            <h5>Laundry</h5>
            <p>
              Your clothes, picked up, laundered and delivered to you in 48
              hours or less.
            </p>
            <nuxt-link :to="{ path: '/laundry' }" class="btn">
              {{
                exploreService === 'laundry' || setExploreService
                  ? 'Explore'
                  : ''
              }}
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.85625 0.673433C8.61719 0.907808 8.61719 1.29687 8.85156 1.53593L11.7016 4.39062H0.854688C0.521875 4.39062 0.25 4.6625 0.25 5C0.25 5.3375 0.521875 5.60937 0.854688 5.60937H11.6969L8.84687 8.46406C8.6125 8.70312 8.61719 9.0875 8.85156 9.32656C9.09062 9.56093 9.47031 9.56094 9.70937 9.32187L13.5719 5.43125C13.6234 5.375 13.6656 5.31406 13.6984 5.23906C13.7312 5.16406 13.7453 5.08437 13.7453 5.00468C13.7453 4.84531 13.6844 4.69531 13.5719 4.57812L9.70937 0.687496C9.47969 0.443746 9.09531 0.439058 8.85625 0.673433Z"
                  fill="#7189FF"
                />
              </svg>
            </nuxt-link>
            <div class="options__service-bg">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611306544/eden-website-v2/laundry-img1_ijsx4k.png"
                alt="laundry"
              />
            </div>
          </div>
          <div
            class="options__service-item options__service-cleaning"
            @mouseenter.stop="exploreService = 'cleaning'"
            @mouseleave.stop="exploreService = ''"
          >
            <h3>🏠</h3>
            <h5>Home Cleaning</h5>
            <p>Professional cleaning at your doorstep. Up to thrice a week.</p>
            <nuxt-link :to="{ path: '/cleaning' }" class="btn">
              {{
                exploreService === 'cleaning' || setExploreService
                  ? 'Explore'
                  : ''
              }}
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.85625 0.673311C8.61719 0.907686 8.61719 1.29675 8.85156 1.53581L11.7016 4.3905H0.854688C0.521875 4.3905 0.25 4.66237 0.25 4.99987C0.25 5.33737 0.521875 5.60925 0.854688 5.60925H11.6969L8.84687 8.46394C8.6125 8.703 8.61719 9.08737 8.85156 9.32644C9.09062 9.56081 9.47031 9.56081 9.70937 9.32175L13.5719 5.43112C13.6234 5.37487 13.6656 5.31394 13.6984 5.23894C13.7312 5.16394 13.7453 5.08425 13.7453 5.00456C13.7453 4.84519 13.6844 4.69519 13.5719 4.578L9.70937 0.687374C9.47969 0.443624 9.09531 0.438936 8.85625 0.673311Z"
                  fill="#B54700"
                />
              </svg>
            </nuxt-link>
            <div class="options__service-bg">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611318736/eden-website-v2/cleaning-img1_ldwcml.png"
                alt="cleaning"
              />
            </div>
          </div>
          <div
            class="options__service-item options__service-food"
            @mouseenter.stop="exploreService = 'food'"
            @mouseleave.stop="exploreService = ''"
          >
            <h3>🧺</h3>
            <h5>Food</h5>
            <p>Your chef-cooked meals, delivered to you. Daily or weekly.</p>
            <nuxt-link :to="{ path: '/food' }" class="btn">
              {{
                exploreService === 'food' || setExploreService ? 'Explore' : ''
              }}
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.85625 0.673555C8.61719 0.90793 8.61719 1.29699 8.85156 1.53606L11.7016 4.39074H0.854688C0.521875 4.39074 0.25 4.66262 0.25 5.00012C0.25 5.33762 0.521875 5.60949 0.854688 5.60949H11.6969L8.84687 8.46418C8.6125 8.70324 8.61719 9.08762 8.85156 9.32668C9.09062 9.56106 9.47031 9.56106 9.70937 9.32199L13.5719 5.43137C13.6234 5.37512 13.6656 5.31418 13.6984 5.23918C13.7312 5.16418 13.7453 5.08449 13.7453 5.00481C13.7453 4.84543 13.6844 4.69543 13.5719 4.57824L9.70937 0.687618C9.47969 0.443868 9.09531 0.43918 8.85625 0.673555Z"
                  fill="#106A39"
                />
              </svg>
            </nuxt-link>
            <div class="options__service-bg">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611318743/eden-website-v2/food-img1_ls530a.png"
                alt="food"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    <cart :show.sync="showCart" />
  </div>
</template>

<script>
import Cart from '@/components/Cart'
import giftTypes from 'static/giftTypes'

import GiftPackage from '@/components/GiftPackage'

import { mixpanelTrackEvent } from '@/plugins/mixpanel'

export default {
  components: { Cart, GiftPackage },
  data() {
    return {
      setExploreService: false,
      exploreService: '',
      type: 'her',
      window: {
        width: 0,
        height: 0,
      },
      giftTypes,
      showCart: false,
    }
  },
  computed: {
    cartItems() {
      return this.$store.getters.cart.length
    },
  },
  mounted() {
    mixpanelTrackEvent('Gifting page')
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
      this.setExploreService = this.window.width < '768'
    },
    scrollTo(ref) {
      this.$refs[ref].scrollIntoView()
    },
    openCart() {
      this.showCart = true
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_gifting.scss';
</style>
