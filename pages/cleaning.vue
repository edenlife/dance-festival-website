<template>
  <div>
    <div class="container--hero">
      <header class="hero">
        <div class="hero__title">
          <h1>
            Spend your energy on<br />
            <span> {{ headerText[0] }}</span>
          </h1>
          <h1 class="mobile">
            Spend your energy on
            <span> {{ headerText[0] }}</span>
          </h1>
          <p>
            Let Eden Life handle your home's self-care routine
            <br />
            <br />

            Use Eden Life to keep your home clean, your toilets scrubbed and
            your dishes done all through the month!
          </p>
          <div class="hero__button">
            <button
              type="button"
              class="hero__button-solid"
              @click.prevent="scrollToFooter('#get-the-app')"
            >
              Sign up for a Clean home
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
                  Sign-up on the Eden Life app. Then choose the type of cleaning
                  you want, select how often you'd like your home cleaned, and
                  pay.
                </p>
              </div>
              <div class="two">
                <h5>We get scrubbin'</h5>
                <p>
                  Our team of trained cleaners visit your home, polishing
                  surfaces, mopping floors, scrubbing dishes, and making sure
                  your home looks pristine.
                </p>
              </div>
              <div class="three">
                <h5>We supervise</h5>
                <p>
                  Your assigned home manager ensures that the cleaning is done
                  excellently, so there's no need for you to even supervise.
                  Just come home to a speckless space.
                </p>
              </div>
              <button
                type="button"
                class="btn"
                @click.prevent="scrollToFooter('#get-the-app')"
              >
                Get the app
              </button>
            </div>
          </div>

          <div class="description__video"></div>
        </div>
      </section>
    </div>

    <div class="container--wall">
      <section class="wall">
        <div class="wall__title">
          <h3>💚 notes <br />cos’ errbody <br />loves us</h3>
        </div>
        <div class="wall__messages">
          <div v-for="(item, i) in cleaningMessage" :key="i" class="card">
            <div class="card__title">
              <p class="card__title-name">{{ item.name }}</p>
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
            The Cleaning Plans:<br />
            Sparkling space.<br />
            Zero stress.
          </h3>
          <p>
            You deserve a home where you just sit back and relax. No cleaning.
            No stress.
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
              :class="{ active: plan === 'light' }"
              @click.prevent="plan = 'light'"
            >
              <span> Light Cleaning</span>
              <svg
                v-if="plan === 'light'"
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
              :class="{ active: plan === 'deep' }"
              @click.prevent="plan = 'deep'"
            >
              <span> Deep Cleaning </span>
              <svg
                v-if="plan === 'deep'"
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
          <!--  -->
          <transition name="slide-fade">
            <div v-if="plan === 'light'" class="plan__price-light">
              <div class="plan__price-item">
                <p>
                  Recommended for once a week or every two weeks. This service
                  cleans all your rooms, dusts all your surfaces, scrubs all
                  your toilets, and does the dishes in the kitchen.
                </p>
                <p>
                  <span class="number">Number of rooms</span>
                </p>
                <div class="btn--group">
                  <button
                    class="btn--item minus"
                    @click.prevent="decreaseOrder('light')"
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
                    v-model="light"
                    type="number"
                    name=""
                    placeholder="0"
                  />
                  <button
                    class="btn--item plus"
                    @click.prevent="increaseOrder('light')"
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
                <p><span class="number">Frequency</span></p>
                <div class="btn--group">
                  <button
                    class="btn--freq"
                    :class="{ active: lightFrequency === 'weekly' }"
                    @click.prevent="calculateLightFrequency('weekly')"
                  >
                    Once a week
                  </button>
                  <button
                    class="btn--freq"
                    :class="{ active: lightFrequency === 'bi-weekly' }"
                    @click.prevent="calculateLightFrequency('bi-weekly')"
                  >
                    Every 2 weeks
                  </button>
                  <button
                    class="btn--freq"
                    :class="{ active: lightFrequency === 'monthly' }"
                    @click.prevent="calculateLightFrequency('monthly')"
                  >
                    Once a month
                  </button>
                </div>
              </div>
              <div class="plan__price-bottom">
                <h5>
                  <span class="price">Price </span>
                  <span class="icon">👉 </span> NGN
                  {{ currencyFormat(totalLightPrice) }}
                </h5>
                <p>Monthly</p>
              </div>
            </div>
          </transition>
          <transition name="slide-fade">
            <div v-if="plan === 'deep'" class="plan__price-light">
              <div class="plan__price-item">
                <p>
                  Recommended for once a week or every two weeks. This service
                  cleans all your rooms, dusts all your surfaces, scrubs all
                  your toilets, and does the dishes in the kitchen.
                </p>
                <p>
                  <span class="number">Number of rooms</span>
                </p>
                <div class="btn--group">
                  <button
                    class="btn--item minus"
                    @click.prevent="decreaseOrder('deep')"
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
                    v-model="deep"
                    type="number"
                    name=""
                    placeholder="0"
                  />
                  <button
                    class="btn--item plus"
                    @click.prevent="increaseOrder('deep')"
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
                <p><span class="number">Frequency</span></p>
                <div class="btn--group">
                  <button
                    class="btn--freq"
                    :class="{ active: deepFrequency === 'weekly' }"
                    @click.prevent="calculateDeepFrequency('weekly')"
                  >
                    Once a week
                  </button>
                  <button
                    class="btn--freq"
                    :class="{ active: deepFrequency === 'bi-weekly' }"
                    @click.prevent="calculateDeepFrequency('bi-weekly')"
                  >
                    Every 2 weeks
                  </button>
                  <button
                    class="btn--freq"
                    :class="{ active: deepFrequency === 'monthly' }"
                    @click.prevent="calculateDeepFrequency('monthly')"
                  >
                    Once a month
                  </button>
                </div>
              </div>
              <div class="plan__price-bottom">
                <h5>
                  <span class="price">Price </span>
                  <span class="icon">👉 </span> NGN
                  {{ currencyFormat(totalDeepPrice) }}
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
            <nuxt-link :to="{ path: '' }" class="btn">
              {{
                exploreService === 'gifting' || setExploreService
                  ? 'Coming soon'
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
import { pricing } from '~/static/pricing'
import { currencyFormat, scrollToApp } from '~/static/functions'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'

export default {
  data() {
    return {
      headerText: [
        'Love',
        'Family',
        'Having Fun',
        'Working Out',
        'Being Better',
      ],
      cleaningMessage: [
        {
          name: 'Joshua',
          description: `The cleaning was awesome. I will recommend 10/10.`,
        },
        {
          name: 'Abdulmujeeb',
          description: `The cleaning was good`,
        },
        {
          name: 'Esther',
          description: `Oh yeah, it exceeded my expectations. I really love Christy, her cleaning was perfect, no complaints at all.  Most especially my kitchen and bathrooms has never been cleaner.`,
        },
        {
          name: 'Feyi',
          description: `The job was well done`,
        },
        {
          name: 'Bamidele',
          description: `The cleaning was good`,
        },
        {
          name: 'Joseph',
          description: `I don't think I have ever seen my house this clean, the cleaner has done a good job`,
        },
      ],
      exploreService: '',
      setExploreService: false,
      window: {
        width: 0,
        height: 0,
      },
      light: 1,
      deep: 1,
      plan: 'light',
      lightFrequency: 'weekly',
      deepFrequency: 'weekly',
      totalLightPrice: null,
      totalDeepPrice: null,
    }
  },
  mounted() {
    mixpanelTrackEvent('Cleaning page')

    window.setInterval(() => {
      this.changeText()
    }, 2300)
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    this.totalLightPrice = pricing({
      cleaning: {
        item: 'light-cleaning',
        frequency: this.lightFrequency,
        qty: this.light,
      },
    })
    this.totalDeepPrice = pricing({
      cleaning: {
        item: 'fumigation',
        frequency: this.deepFrequency,
        qty: this.deep,
      },
    })
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    currencyFormat,
    scrollToFooter(id) {
      scrollToApp(id)
    },
    changeText() {
      const first = this.headerText.shift()
      this.headerText = this.headerText.concat(first)
    },
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
      if (this.window.width < '768') {
        this.setExploreService = true
      } else this.setExploreService = false
    },
    increaseOrder(order) {
      if (order === 'light') {
        this.light++
        this.totalLightPrice = pricing({
          cleaning: {
            item: 'light-cleaning',
            frequency: this.lightFrequency,
            qty: this.light,
          },
        })
      }

      if (order === 'deep') {
        this.deep++
        this.totalDeepPrice = pricing({
          cleaning: {
            item: 'fumigation',
            frequency: this.deepFrequency,
            qty: this.deep,
          },
        })
      }
    },
    decreaseOrder(order) {
      if (order === 'light' && this.light > 1) {
        this.light--
        this.totalLightPrice = pricing({
          cleaning: {
            item: 'light-cleaning',
            frequency: this.lightFrequency,
            qty: this.light,
          },
        })
      }

      if (order === 'deep' && this.deep > 1) {
        this.deep--
        this.totalDeepPrice = pricing({
          cleaning: {
            item: 'fumigation',
            frequency: this.deepFrequency,
            qty: this.deep,
          },
        })
      }
    },
    calculateLightFrequency(freq) {
      this.lightFrequency = freq
      this.totalLightPrice = pricing({
        cleaning: {
          item: 'light-cleaning',
          frequency: this.lightFrequency,
          qty: this.light,
        },
      })
    },
    calculateDeepFrequency(freq) {
      this.deepFrequency = freq
      this.totalDeepPrice = pricing({
        cleaning: {
          item: 'fumigation',
          frequency: this.deepFrequency,
          qty: this.deep,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_cleaning.scss';
</style>
