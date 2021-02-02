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
            Let Eden handle your home's self-care routine.
            <br />
            <br />

            Use Eden to keep your home clean, your toilets scrubbed and your
            dishes done all through the month!
          </p>
          <div class="hero__button">
            <button
              type="button"
              class="hero__button-solid"
              @click.prevent="scrollToFooter('#get-the-app', 'cleaning - hero')"
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
            <div class="description__slider-vertical slider">
              <span class="slide-y"></span>
              <!-- <div class="slide">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" />
                </svg>
                <svg
                  width="2"
                  height="215"
                  viewBox="0 0 2 215"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0H2V215H0V0Z" />
                </svg>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" />
                </svg>
                <svg
                  width="2"
                  height="215"
                  viewBox="0 0 2 215"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0H2V215H0V0Z" />
                </svg>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" />
                </svg>
              </div> -->
            </div>
            <div class="description__slider-horizontal slider">
              <span class="slide-x"></span>
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
                @click.prevent="
                  scrollToFooter('#get-the-app', 'cleaning - how it works')
                "
              >
                Get the app
              </button>
            </div>
          </div>

          <div class="description__video">
            <div class="description__video-item">
              <video ref="videoRef" muted autoplay>
                <source
                  src="https://res.cloudinary.com/eden-life-inc/video/upload/v1612252104/eden-website-v2/Home_Cleaning_gzu6jt.mp4"
                  type="video/mp4"
                />
              </video>
              <button
                type="button"
                class="btn--replay"
                @click.prevent="playVideo"
              >
                <svg
                  width="14"
                  height="17"
                  viewBox="0 0 14 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.49872 3.18516C7.22334 3.16476 6.9987 2.94285 6.9987 2.66671V1.04048C6.9987 0.595027 6.46013 0.371945 6.14514 0.686928L3.18558 3.64649C2.99032 3.84175 2.99032 4.15833 3.18558 4.35359L6.14514 7.31315C6.46013 7.62814 6.9987 7.40505 6.9987 6.9596V5.33337C6.9987 5.05723 7.2232 4.83074 7.49799 4.85807C10.0225 5.10916 11.9987 7.24353 11.9987 9.83337C11.9987 12.5917 9.75703 14.8334 6.9987 14.8334C4.40885 14.8334 2.27448 12.8572 2.0234 10.3327C1.99607 10.0579 1.77484 9.83337 1.4987 9.83337H0.832031C0.555888 9.83337 0.330082 10.058 0.350479 10.3334C0.605973 13.783 3.48357 16.5 6.9987 16.5C10.682 16.5 13.6654 13.5167 13.6654 9.83337C13.6654 6.31825 10.9483 3.44065 7.49872 3.18516Z"
                    fill="#03A84E"
                  />
                </svg>
                <span> Replay video</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="container--wall">
      <section class="wall">
        <div class="wall__title">
          <h3>The wall of 💚</h3>
        </div>
        <div class="wall__messages">
          <div v-for="(item, i) in cleaningMessage" :key="i" class="card">
            <a :href="item.tweetLink" target="_blank">
              <div class="card__title">
                <div class="card__title-img">
                  <img
                    :src="require(`~/assets/images/customer-${item.image}.jpg`)"
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

    <div id="cleaning-plan" class="container--plan">
      <section class="plan">
        <div class="plan__title">
          <h3>
            The Cleaning Plans:<br />
            Sparkling space.<br />
            Zero stress.
          </h3>
          <p>
            You deserve a home where you just sit back and relax.<br />
            No cleaning. No stress.
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
            <!-- <li
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
            </li> -->
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
                    readonly
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
          <!-- <transition name="slide-fade">
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
                    readonly
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
          </transition> -->
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
                src="https://res.cloudinary.com/eden-life-inc/image/upload/q_auto/v1612286532/eden-website-v2/giftimage_xjioyo.jpg"
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
        'love',
        'family',
        'having fun',
        'working out',
        'being better',
      ],
      cleaningMessage: [
        {
          name: 'kofo',
          image: 'kofo',
          description: `The way my house sparkles after the 
<span style="color:#03A84E"> @ouredenlife </span>
 cleaners are done with their magic dey always give me endorphins`,
          handle: `yoruba_dev
`,
          tweetLink:
            'https://twitter.com/yoruba_dev/status/1334066072878772225?s=20',
        },
        {
          name: 'Enogieru Osasenaga',
          image: 'enogieru',
          description: ` Got one win today and put a proposal for another project. It’s safe to say it’s been a blessed week. 
<span style="color:#03A84E"> @ouredenlife </span>
 been making my stay in Lagos worthwhile. 
Tonight we Netflix cause tomorrow is back to the streets.`,
          handle: `OsasenagaEno
`,
          tweetLink:
            'https://twitter.com/OsasenagaEno/status/1316432226813390853?s=20',
        },
        {
          name: 'ifeanyi',
          image: 'ifeanyi',
          description: ` A friend recently told me about  
<span style="color:#03A84E"> @ouredenlife </span>
 and basically they help you automate your chores(laundry,meals, cleaning etc). If you’re the type too busy(or lazy) to do it yourself then check them out.`,
          handle: `ifeanyi_uu`,
          tweetLink:
            'https://twitter.com/ifeanyi_uu/status/1299012714644283393',
        },
        {
          name: 'Olaniyan Ibukunoluwa',
          image: 'olaniyan',
          description: ` Have you checked out 
<span style="color:#03A84E"> @ouredenlife </span>
 . They do this and are professionals. You can tailor it to suit you.`,
          handle: `fohrin2`,
          tweetLink: 'https://twitter.com/fohrin2/status/1303295606102937600',
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
    this.playVideo()
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
    scrollToFooter(id, label) {
      scrollToApp(id, label)
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
      mixpanelTrackEvent(`Increase order clicked - cleaning`)

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
      mixpanelTrackEvent(`Decrease order clicked - cleaning`)

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
      mixpanelTrackEvent(`Order frequency ${freq} clicked - cleaning`)

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
    videoControl() {
      const video = document.querySelector('video')
      const slideY = document.querySelector('.slide-y')
      const slideX = document.querySelector('.slide-x')
      const slider = document.querySelector('.slider')
      const scrollToElement = document.querySelector(
        '.description__slider-text'
      )
      // control timeline with video play
      video.addEventListener('timeupdate', function () {
        const parcentagePlayed = (this.currentTime / this.duration) * 100
        slideY.style.height = parcentagePlayed.toFixed(2) + '%'
        slideX.style.width = parcentagePlayed.toFixed(2) + '%'

        if (this.currentTime < 8) {
          document.querySelector('.one').className = 'one view'
          document.querySelector('.two').className = 'two'
          document.querySelector('.three').className = 'three'
          document.querySelector('.btn--replay').className = 'btn--replay'
          scrollToElement.scrollBy({
            left: 10,
          })
        } else if (this.currentTime > 9 && this.currentTime < 19) {
          scrollToElement.scrollBy({
            left: 0,
          })
          document.querySelector('.one').className = 'one'
          document.querySelector('.two').className = 'two view'
          document.querySelector('.three').className = 'three'
          document.querySelector('.btn--replay').className = 'btn--replay'
        } else if (this.currentTime > 19) {
          scrollToElement.scrollBy({
            left: 20,
          })
          document.querySelector('.two').className = 'two'
          document.querySelector('.one').className = 'one'
          document.querySelector('.three').className = 'three view'
          document.querySelector('.btn--replay').className = 'btn--replay show'
        }
      })

      // control video play with timeline clicks
      slider.addEventListener('click', function (e) {
        const clickedHeight = e.offsetY
        const percentageCovered = clickedHeight / this.offsetHeight
        const currentTime = percentageCovered * video.duration

        // can't get the video duration until it is playing
        if (video.currentTime > 0) {
          video.pause()
          video.currentTime = Math.round(currentTime)
          video.play()
          slideY.style.height = percentageCovered.toFixed(2) + '%'
          slideX.style.width = percentageCovered.toFixed(2) + '%'
        }
      })
    },
    playVideo() {
      mixpanelTrackEvent('How it works replay - cleaning')

      const vid = document.querySelector('video')
      vid.play()
      this.videoControl()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_cleaning.scss';
</style>
