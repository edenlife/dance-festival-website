<template>
  <div>
    <div class="container--hero">
      <header class="hero">
        <div class="hero__title">
          <h1>
            Enjoy <span> Pasta</span> <br />
            Ready in 5 minutes
          </h1>
          <h1 class="mobile">
            Enjoy <span> Pasta</span> <br />
            Ready in <br />5 minutes
          </h1>
          <p>
            A food subscription on Eden Life gets you delicious meals prepared
            by our team of chefs.
            <br />
            <br />
            No market runs. No prep-time. No delivery fees. Just heat and eat.
          </p>
          <div class="hero__button">
            <button type="button" class="hero__button-solid">
              See our menu
            </button>
            <button type="button" class="hero__button-link">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.1"
                  width="32"
                  height="32"
                  rx="16"
                  fill="#03A84E"
                />
                <path
                  d="M12.6667 11.8317C12.6667 11.0405 13.5419 10.5627 14.2074 10.9905L20.6915 15.1588C21.3038 15.5525 21.3038 16.4475 20.6915 16.8412L14.2074 21.0095C13.5419 21.4373 12.6667 20.9595 12.6667 20.1683V11.8317Z"
                  fill="#03A84E"
                />
              </svg>

              Watch the video
            </button>
          </div>
        </div>
        <div class="hero__img">
          <img
            src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611742061/eden-website-v2/hero-food-bg1_yjfvcb.svg"
            alt="phone"
            class="hero__img-bg1"
          />
        </div>
      </header>
    </div>

    <div class="container--description">
      <section class="description">
        <div class="description__title">
          <h3>How it works</h3>
        </div>

        <div class="description__body">
          <div class="description__slider">
            <div class="description__slider-timeline">
              <svg
                class="vertical"
                width="28"
                height="407"
                viewBox="0 0 28 407"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="13" y="4" width="2" height="400" />
                <path d="M13 4H15V219H13V4Z" fill="#61DB98" />
                <circle cx="14" cy="4" r="4" fill="#03A84E" />
                <circle opacity="0.1" cx="14" cy="216" r="14" />
                <circle opacity="0.1" cx="14" cy="216" r="9" />
                <circle cx="14" cy="216" r="4" />
                <circle cx="14" cy="402" r="4" />
              </svg>
              <!--<span class="slide">  </span> -->
            </div>
            <div class="description__slider-text">
              <div class="one">
                <h5>Choose your plan</h5>
                <p>
                  Sign-up on the Eden Life app. Then choose the meals you want
                  from our menu for the week, select how often you'd like your
                  meals, and pay.
                </p>
              </div>
              <div class="two">
                <h5>We get cookin'</h5>
                <p>
                  Our team of expert chefs take it from here, preparing your
                  culinary fantasies with the freshest ingredients.
                </p>
              </div>
              <div class="three">
                <h5>We deliver!</h5>
                <p>
                  Food is ready and on it's way to you. You can eat immediately
                  or freeze for later. Oh...and no extra delivery charge!
                </p>
              </div>
              <button type="button" class="btn">Get the app</button>
            </div>
          </div>

          <div class="description__video"></div>
        </div>
      </section>
    </div>

    <div class="container--menu">
      <section class="menu">
        <div class="menu__title">
          <h3>Next week’s menu</h3>
          <p>12 Nov 2021 - 19 Nov 2021</p>
        </div>
        <nav class="menu__nav">
          <nuxt-link
            v-for="(tab, index) in tabs"
            :key="index"
            :to="{ path: `/food#${tab.id}` }"
            @click.prevent="activeTabIndex = index"
          >
            <p :class="`${activeTabIndex === index ? 'active' : ''}`">
              {{ tab.title }}
            </p>
            <svg
              v-if="activeTabIndex === index"
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3" cy="3" r="3" fill="#61DB98" />
            </svg>
          </nuxt-link>
        </nav>
        <div class="menu__list"></div>
      </section>
    </div>

    <div class="container--wall">
      <section class="wall">
        <div class="wall__title">
          <h3>The wall of 💚</h3>
        </div>
        <div class="wall__messages">
          <div v-for="(item, i) in messageList" :key="i" class="card">
            <div class="card__title">
              <div class="card__title-img">
                <img
                  :src="require(`~/assets/images/customer-${item.image}.png`)"
                  :alt="item.name"
                />
              </div>

              <div class="">
                <p class="card__title-name">{{ item.name }}</p>
                <p class="card__title-handle">@{{ item.handle }}</p>
              </div>
            </div>
            <p class="card__description" v-html="item.description"></p>
          </div>
        </div>
      </section>
    </div>

    <div class="container--plan">
      <section class="plan">
        <div class="plan__title">
          <h3>
            The Food Plans:<br />
            Don't Stress.<br />
            Just Eat.
          </h3>
          <p>
            Enjoy all the deliciousness of healthy food, right on time, with
            none of the stress.
          </p>
          <ul>
            <li>
              <h5 class="icon icon--one">👀</h5>
              <div class="icon--text">
                <h5>No hidden payments.</h5>
                <p>Yessir.</p>
              </div>
            </li>
            <li>
              <h5 class="icon icon--two">🚛</h5>
              <div class="icon--text">
                <h5>No hidden delivery fees.</h5>
                <p>100%</p>
              </div>
            </li>
            <li>
              <h5 class="icon icon--three">👼</h5>
              <div class="icon--text">
                <h5>Cancel anytime.</h5>
                <p>On God!</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="plan__price">
          <ul>
            <li
              :class="{ active: period === 'weekly' }"
              @click.prevent="period = 'weekly'"
            >
              <span> Daily Delivery </span>
              <svg
                v-if="period === 'weekly'"
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
              :class="{ active: period === 'monthly' }"
              @click.prevent="period = 'monthly'"
            >
              <span> Weekly delivery </span>
              <svg
                v-if="period === 'monthly'"
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
            <div v-if="period === 'weekly'" class="plan__price-weekly">
              <div>
                <img
                  src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611757237/eden-website-v2/food-image1_cppzzn.png"
                  alt="Meal"
                />
              </div>
              <div class="plan__price-item">
                <p>How many meals do you want to eat daily?</p>
                <div class="btn--group">
                  <button
                    class="btn--item minus"
                    @click="decreaseOrder('weekly')"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19"
                        stroke="#21312A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <input
                    id=""
                    v-model="weekly"
                    type="text"
                    name=""
                    placeholder="0"
                  />
                  <button
                    class="btn--item plus"
                    @click="increaseOrder('weekly')"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5V19"
                        stroke="#21312A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5 12H19"
                        stroke="#21312A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="plan__price-bottom">
                <h5>
                  <span class="price">Price </span>
                  <span class="icon">👉 </span> NGN 36,000.00
                </h5>
                <p>Weekly</p>
              </div>
            </div>
          </transition>
          <transition name="slide-fade">
            <div v-if="period === 'monthly'" class="plan__price-monthly">
              <div class="plan__price-item">
                <p>How many meals do you want to eat weekly?</p>
                <div class="btn--group">
                  <button
                    class="btn--item minus"
                    @click="decreaseOrder('weekly')"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19"
                        stroke="#21312A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <input
                    id=""
                    v-model="weekly"
                    type="text"
                    name=""
                    placeholder="0"
                  />
                  <button
                    class="btn--item plus"
                    @click="increaseOrder('weekly')"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5V19"
                        stroke="#21312A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5 12H19"
                        stroke="#21312A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="plan__price-item">
                <p class="desktop">
                  Should all your food delivered be once or twice in a week?
                </p>
                <p class="mobile">
                  Should we deliver all once or twice weekly?
                </p>
                <div class="btn--group">
                  <button
                    class="btn--item minus"
                    @click="decreaseOrder('weekly')"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19"
                        stroke="#21312A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <input
                    id=""
                    v-model="weekly"
                    type="text"
                    name=""
                    placeholder="0"
                  />
                  <button
                    class="btn--item plus"
                    @click="increaseOrder('weekly')"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5V19"
                        stroke="#21312A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5 12H19"
                        stroke="#21312A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="plan__price-bottom">
                <h5>
                  <span class="price">Price </span>
                  <span class="icon">👉 </span> NGN 96,000.00
                </h5>
                <p>Monthly</p>
              </div>
            </div>
          </transition>
        </div>
      </section>
    </div>

    <div class="container--options">
      <section class="options">
        <div class="options__title">
          <h3>Want more?</h3>
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
            <nuxt-link :to="{ path: '/' }" class="btn">
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
            <nuxt-link :to="{ path: '/' }" class="btn">
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
            class="options__service-item options__service-gifting"
            @mouseenter.stop="exploreService = 'gifting'"
            @mouseleave.stop="exploreService = ''"
          >
            <h3>🎁</h3>
            <h5>Gifting</h5>
            <p>
              Gift cards and gift boxes for every occasion, right at your
              fingertips.
            </p>
            <nuxt-link :to="{ path: '/' }" class="btn">
              {{
                exploreService === 'gifting' || setExploreService
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
                  fill="#0099BB"
                />
              </svg>
            </nuxt-link>
            <div class="options__service-bg">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611318735/eden-website-v2/gift-img1_r9mjjh.png"
                alt="gifting"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import foodMessages from '~/static/foodMessages'

export default {
  beforeRouteEnter(to, from, next) {
    const tab = to.hash.replace('#', '')
    next((vm) => {
      vm.activeTabIndex = 0
      vm.tabs.forEach((item, index) => {
        if (item.id === tab) {
          vm.activeTabIndex = index
        }
      })
    })
  },
  beforeRouteUpdate(to, from, next) {
    const tab = to.hash.replace('#', '')
    this.activeTabIndex = 0
    this.tabs.forEach((item, index) => {
      if (item.id === tab) {
        this.activeTabIndex = index
      }
    })
    next()
  },
  data() {
    return {
      activeTabIndex: null,
      tabs: [
        {
          id: '',
          title: 'Continental Breakfast',
        },
        {
          id: 'healthy-salad',
          title: 'Healthy Salad',
        },
        {
          id: 'noodles-pasta',
          title: 'Noodles & Pasta',
        },
        {
          id: 'rice',
          title: 'Rice',
        },
        {
          id: 'sauces',
          title: 'Sauces',
        },
        {
          id: 'seafood-chinese',
          title: 'Seafood and Chinese',
        },
        {
          id: 'sides',
          title: 'Sides',
        },
        {
          id: 'Soups',
          title: 'soups',
        },
        {
          id: 'Swallow',
          title: 'swallow',
        },
      ],
      setExploreService: false,
      exploreService: '',
      messageList: foodMessages,
      weekly: 1,
      weekly_price: null,
      period: 'weekly',
      window: {
        width: 0,
        height: 0,
      },
    }
  },
  watch: {
    weekly(val) {
      const weeklyDefault = 24500
      this.weekly_price = weeklyDefault * val
    },
  },
  mounted() {
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
      if (this.window.width < '768') {
        this.setExploreService = true
      } else this.setExploreService = false
    },
    increaseOrder(order) {
      if (order === 'weekly') {
        this.weekly++
        const weeklyDefault = 24500
        this.weekly_price = weeklyDefault * this.weekly
      }
    },
    decreaseOrder(order) {
      if (order === 'weekly' && this.weekly > 1) {
        this.weekly--
        const weeklyDefault = 24500
        this.weekly_price = this.weekly - weeklyDefault
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_food.scss';
</style>
