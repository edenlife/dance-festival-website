<template>
  <div>
    <div class="container--hero">
      <header class="hero">
        <div class="hero__title">
          <h1>
            Save your <span> {{ headerText[0] }}</span> <br />
            clean clothes on repeat.
          </h1>
          <p>
            Getting an Eden laundry plan means we'll pick up your dirty laundry
            and bring back your clean clothes, folded or ironed, within 48
            hours.
          </p>
          <div class="hero__button">
            <button
              type="button"
              class="hero__button-solid"
              @click.prevent="scrollToFooter('#get-the-app', 'laundry - hero')"
            >
              Start Your Eden Life
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
                  Sign-up on the Eden Life app. Choose the number of laundry
                  bags you need cleaned. Select how often you'd like us to do
                  your laundry in a month, and pay.
                </p>
              </div>
              <div class="two">
                <h5>We pickup and clean</h5>
                <p>
                  We come over to your home/office and pick up your dirty
                  laundry. Then we wash, dry, and press to perfection.
                </p>
              </div>
              <div class="three">
                <h5>We deliver!</h5>
                <p>
                  That's it. Your fresh clothes are ready and on their way to
                  you. All within 48 hrs.
                </p>
              </div>
              <button
                type="button"
                class="btn"
                @click.prevent="
                  scrollToFooter('#get-the-app', 'laundry - how it works')
                "
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
          <h3>The wall of 💚</h3>
        </div>
        <div class="wall__messages">
          <div v-for="(item, i) in LaundryMessage" :key="i" class="card">
            <a :href="item.tweetLink" target="_blank">
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
            </a>
          </div>
        </div>
      </section>
    </div>

    <div id="laundry-plan" class="container--plan">
      <section class="plan">
        <div class="plan__title">
          <h3>
            The Laundry Plans:<br />
            We handle the laundry.<br />
            You enjoy the leisure.
          </h3>
          <p>
            Each laundry bag contains up to 35 clothing items, and you can track
            your order on the app.
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
                <h5>Pause anytime.</h5>
                <p>On God!</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="plan__price">
          <ul>
            <li
              :class="{ active: plan === 'washDry' }"
              @click.prevent="plan = 'washDry'"
            >
              <span> Wash & Fold</span>
              <svg
                v-if="plan === 'washDry'"
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
              :class="{ active: plan === 'washIron' }"
              @click.prevent="plan = 'washIron'"
            >
              <span> Wash & Iron </span>
              <svg
                v-if="plan === 'washIron'"
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
            <div v-if="plan === 'washDry'" class="plan__price-washDry">
              <div class="plan__price-item">
                <p>
                  <span class="number">Number of laundry bags</span>
                  <span class="bag">Approx 30 items per bag</span>
                </p>
                <div class="btn--group">
                  <button
                    class="btn--item minus"
                    @click.prevent="decreaseOrder('washDry')"
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
                    v-model="washDry"
                    type="number"
                    name=""
                    readonly
                    placeholder="0"
                  />
                  <button
                    class="btn--item plus"
                    @click.prevent="increaseOrder('washDry')"
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
                    :class="{ active: washDryFrequency === 'weekly' }"
                    @click.prevent="laundryDryFrequency('weekly')"
                  >
                    Once a week
                  </button>
                  <button
                    class="btn--freq"
                    :class="{ active: washDryFrequency === 'bi-weekly' }"
                    @click.prevent="laundryDryFrequency('bi-weekly')"
                  >
                    Every 2 weeks
                  </button>
                  <button
                    class="btn--freq"
                    :class="{ active: washDryFrequency === 'monthly' }"
                    @click.prevent="laundryDryFrequency('monthly')"
                  >
                    Once a month
                  </button>
                </div>
              </div>
              <div class="plan__price-bottom">
                <h5>
                  <span class="price">Price </span>
                  <span class="icon">👉 </span> NGN
                  {{ currencyFormat(totalWashDryPrice) }}
                </h5>
                <p>Monthly</p>
              </div>
            </div>
          </transition>
          <transition name="slide-fade">
            <div v-if="plan === 'washIron'" class="plan__price-washDry">
              <div class="plan__price-item">
                <p>
                  <span class="number">Number of laundry bags</span>
                  <span class="bag">Approx 30 items per bag</span>
                </p>
                <div class="btn--group">
                  <button
                    class="btn--item minus"
                    @click.prevent="decreaseOrder('washIron')"
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
                    v-model="washIron"
                    type="number"
                    name=""
                    placeholder="0"
                    readonly
                  />
                  <button
                    class="btn--item plus"
                    @click.prevent="increaseOrder('washIron')"
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
                    :class="{ active: washIronFrequency === 'weekly' }"
                    class="btn--freq"
                    @click.prevent="laundryIronFrequency('weekly')"
                  >
                    Once a week
                  </button>
                  <button
                    class="btn--freq"
                    :class="{ active: washIronFrequency === 'bi-weekly' }"
                    @click.prevent="laundryIronFrequency('bi-weekly')"
                  >
                    Every 2 weeks
                  </button>
                  <button
                    class="btn--freq"
                    :class="{ active: washIronFrequency === 'monthly' }"
                    @click.prevent="laundryIronFrequency('monthly')"
                  >
                    Once a month
                  </button>
                </div>
              </div>
              <div class="plan__price-bottom">
                <h5>
                  <span class="price">Price </span>
                  <span class="icon">👉 </span>
                  {{ currencyFormat(totalWashIronPrice) }}
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
      headerText: ['time', 'energy', 'money'],
      LaundryMessage: [
        {
          name: 'justin irabor',
          image: 'justin',
          description: `Under normal circumstances (since I'm always at home), it would make sense for me to wear as few clothes as possible and change them as sparingly as possible.<br><br>
          But I don't live under normal circumstances. I have an 
          <span style="color:#03A84E"> @ouredenlife </span>laundry subscription.`,
          handle: 'LifeOfMogwai',
          tweetLink:
            'https://twitter.com/LifeOfMogwai/status/1274748508269154308?s=20',
        },
        {
          name: 'Tolu Ajiboye',
          image: 'tolu',
          description: `Bruh the actual worst. I haven’t done my own laundry in years. It’s even so stress-free now that I use <span style="color:#03A84E"> @ouredenlife </span>. I literally just put every single item into my laundry bag and they come pick it up and drop it back.`,
          handle: 'Yesmina_T',
          tweetLink:
            'https://twitter.com/Yesmina_T/status/1309270002722365441?s=20',
        },
        {
          name: 'Timi Ajiboye',
          image: 'timi',
          description: `Things “just working” with little input from me, makes me happy. I really like my laundry process now (<span style="color:#03A84E"> @ouredenlife </span> is a big part of that)`,
          handle: 'timigod',
          tweetLink:
            'https://twitter.com/timigod/status/1190320551837020165?s=20',
        },
        {
          name: 'Ash.',
          image: 'ash',
          description: `<span style="color:#03A84E"> @ouredenlife </span>'s laundry service is excellent! 👏🏾👏🏾👏🏾 10/10 will recommend.`,
          handle: 'hey_ashiwel',
          tweetLink:
            'https://twitter.com/hey_ashiwel/status/1210502785592102913?s=20',
        },
      ],
      setExploreService: false,
      window: {
        width: 0,
        height: 0,
      },
      exploreService: '',
      washDry: 1,
      washIron: 1,
      washDryFrequency: 'weekly',
      washIronFrequency: 'weekly',
      plan: 'washDry',
      totalWashDryPrice: null,
      totalWashIronPrice: null,
    }
  },
  mounted() {
    mixpanelTrackEvent('Laundry page')
    window.setInterval(() => {
      this.changeText()
    }, 2300)
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    this.totalWashDryPrice = pricing({
      laundry: {
        item: 'wash-and-fold',
        frequency: this.washDryFrequency,
        qty: this.washDry,
      },
    })
    this.totalWashIronPrice = pricing({
      laundry: {
        item: 'wash-and-iron',
        frequency: this.washIronFrequency,
        qty: this.washIron,
      },
    })
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    currencyFormat,
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
    scrollToFooter(id, label) {
      scrollToApp(id, label)
    },
    increaseOrder(order) {
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
    decreaseOrder(order) {
      if (order === 'washDry' && this.washDry > 1) {
        this.washDry--
        this.totalWashDryPrice = pricing({
          laundry: {
            item: 'wash-and-fold',
            frequency: this.washDryFrequency,
            qty: this.washDry,
          },
        })
      }

      if (order === 'washIron' && this.washIron > 1) {
        this.washIron--
        this.totalWashIronPrice = pricing({
          laundry: {
            item: 'wash-and-iron',
            frequency: this.washIronFrequency,
            qty: this.washIron,
          },
        })
      }
    },
    laundryDryFrequency(freq) {
      this.washDryFrequency = freq
      this.totalWashDryPrice = pricing({
        laundry: {
          item: 'wash-and-fold',
          frequency: this.washDryFrequency,
          qty: this.washDry,
        },
      })
    },
    laundryIronFrequency(freq) {
      this.washIronFrequency = freq
      this.totalWashIronPrice = pricing({
        laundry: {
          item: 'wash-and-iron',
          frequency: this.washIronFrequency,
          qty: this.washIron,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_laundry.scss';
</style>
