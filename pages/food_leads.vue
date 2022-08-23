<template>
  <div>
    <div class="container--hero">
      <header class="header">
        <nuxt-link :to="{ path: '/' }" class="header__logo">
          <img
            src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611230252/eden-website-v2/eden-logo_lcepc6.svg"
            alt="Eden logo"
          />
        </nuxt-link>
      </header>
      <div class="hero">
        <div class="hero__header">
          <div class="hero__header-title">
            <h1>
              Get your favourite meals delivered to you
              <span> {{ headerText[0] }}</span>
            </h1>
            <p>Pay once a month and get:</p>
            <ul>
              <li>
                <span class="icon"> 🥘 </span>
                Delicious meals delivered to your doorstep where and how you
                want it.
              </li>
              <li>
                <span class="icon"> 🧑‍💼 </span>
                A dedicated Customer Support representative.
              </li>
              <li>
                <span class="icon"> 🍝 </span>
                Over 100 meal combos to pick from weekly.
              </li>
            </ul>

            <button
              class="hero__form-btn"
              @click.prevent="greenhouseSignUp('food leads - hero')"
            >
              Give me a food plan
            </button>
          </div>
          <div class="hero__header--img">
            <div ref="center-image-mobile" class="center"></div>
            <div class="hero__header--img-container">
              <!-- <div
                v-for="(item, i) in 8"
                :ref="'mobilespin-' + item"
                :key="i"
                :class="`dial dial-${i + 1}`"
                @click.prevent="changeCenterMobile(i)"
              ></div> -->
              <div
                class="dial dial-1"
                @click.prevent="changeCenterMobile(1)"
              ></div>
              <div
                class="dial dial-2"
                @click.prevent="changeCenterMobile(2)"
              ></div>
              <div
                class="dial dial-3"
                @click.prevent="changeCenterMobile(3)"
              ></div>
              <div
                class="dial dial-4"
                @click.prevent="changeCenterMobile(4)"
              ></div>
              <div
                class="dial dial-5"
                @click.prevent="changeCenterMobile(5)"
              ></div>
              <div
                class="dial dial-6"
                @click.prevent="changeCenterMobile(6)"
              ></div>
              <div
                class="dial dial-7"
                @click.prevent="changeCenterMobile(7)"
              ></div>
              <div
                class="dial dial-8"
                @click.prevent="changeCenterMobile(8)"
              ></div>
            </div>
          </div>
        </div>
        <div class="hero__img">
          <div ref="center-image" class="center"></div>
          <div class="hero__img-container">
            <!-- <div
              v-for="(item, i) in 9"
              :ref="'spin-' + item"
              :key="i"
              :class="`dial dial-${i + 1}`"
              @click.prevent="changeCenter(i)"
            ></div> -->
            <div class="dial dial-1" @click.prevent="changeCenter(1)"></div>
            <div class="dial dial-2" @click.prevent="changeCenter(2)"></div>
            <div class="dial dial-3" @click.prevent="changeCenter(3)"></div>
            <div class="dial dial-4" @click.prevent="changeCenter(4)"></div>
            <div class="dial dial-5" @click.prevent="changeCenter(5)"></div>
            <div class="dial dial-6" @click.prevent="changeCenter(6)"></div>
            <div class="dial dial-7" @click.prevent="changeCenter(7)"></div>
            <div class="dial dial-8" @click.prevent="changeCenter(8)"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="container--description">
      <section class="description">
        <div class="description__title">
          <h3>Here’s how it works:</h3>
        </div>
        <div class="description__inner">
          <div class="description__details">
            <div class="description__details-item">
              <div class="description__details-item--icon">
                <img src="@/assets/images/emojis/one.png" alt="number emoji" />
              </div>
              <div
                v-animate-onscroll.repeat="'animated fadeInDown'"
                class="description__details-item--text"
              >
                <h5>You choose a plan that works for you.</h5>
                <p>
                  Sign up on the Eden app. Choose a meal schedule that works for
                  you. It takes less than 5 minutes!
                </p>
              </div>
            </div>
            <div class="description__details-item">
              <div class="description__details-item--icon">
                <img src="@/assets/images/emojis/two.png" alt="number emoji" />
              </div>
              <div
                v-animate-onscroll.repeat="'animated fadeInLeft'"
                class="description__details-item--text"
              >
                <h5>We cook and deliver.</h5>
                <p>
                  We cook up your picks from our rich menu and deliver them to
                  you on schedule. At no extra delivery costs.
                </p>
              </div>
            </div>
            <div class="description__details-item">
              <div class="description__details-item--icon">
                <img src="@/assets/images/emojis/three.png" alt="emoji" />
              </div>
              <div
                v-animate-onscroll.repeat="'animated fadeInDown'"
                class="description__details-item--text"
              >
                <h5>You heat and eat.</h5>
                <p>
                  It's ready to eat in 5 minutes or you can refrigerate for
                  later!
                </p>
              </div>
            </div>
          </div>
          <div class="description__inner-left">
            <div class="description__inner-left-img1">
              <img
                v-animate-onscroll="'animated fadeInDown'"
                src="@/assets/images/food-img-1.png"
                alt="food-image"
              />
            </div>
            <div class="description__inner-left-img2">
              <img
                v-animate-onscroll="'animated fadeInUp'"
                src="@/assets/images/food-img-2.png"
                alt="food-image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="container--plan">
      <section class="plan">
        <div class="plan__title">
          <h3>The Food Plans:<br /></h3>
          <p>
            Enjoy all the deliciousness of healthy food, right on time, with
            none of the stress.
          </p>
          <ul>
            <li>
              <h5 class="icon">⏰</h5>
              <div class="icon--text">
                <h5>Save Time</h5>
                <p>Up to 14 hours every week</p>
              </div>
            </li>
            <li>
              <h5 class="icon">💰</h5>
              <div class="icon--text">
                <h5>One Monthly Payment.</h5>
                <p>No hidden delivery fees</p>
              </div>
            </li>
            <li>
              <h5 class="icon">⏸</h5>
              <div class="icon--text">
                <h5>Pause Anytime.</h5>
                <p>Out of town? You can skip a service</p>
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
              <div class="plan__price-item one">
                <p>How many meals do you want daily?</p>
                <div class="btn--group">
                  <button
                    class="btn--item minus"
                    @click.prevent="decreaseOrder('weekly')"
                  >
                    <svg
                      width="20"
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
                    v-model="mealsPerDay"
                    type="number"
                    name=""
                    placeholder="0"
                    readonly
                  />
                  <button
                    class="btn--item plus"
                    @click.prevent="increaseOrder('weekly')"
                  >
                    <svg
                      width="20"
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
              <div class="calculator__input">
                <div class="calculator__input-item calculator__input-delivery">
                  <div class="plan__price-item">
                    <p>Delivery days</p>
                  </div>
                  <div class="delivery">
                    <div
                      v-for="(item, i) in dailyDeliveryDays"
                      :key="i"
                      class="delivery__days daily"
                    >
                      <div
                        class="delivery__days-item"
                        :class="{ checked: selectedDays.includes(item) }"
                      >
                        <input
                          :id="item"
                          v-model="selectedDays"
                          type="checkbox"
                          :value="item"
                          @change="updateDeliveyDay(item)"
                        />
                        <label :for="item">{{ item }}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="plan__price-bottom">
                <h5>
                  <span class="price">Price </span>
                  <span class="icon">👉 </span> NGN
                  {{ currencyFormat(totalDailyPrice) }}
                </h5>
                <p>per 4 weeks</p>
              </div>
              <div class="plan__price-alert">
                <p>
                  You will get {{ mealsPerDay }} meals delivered daily for 4
                  weeks.
                </p>
              </div>
              <button
                class="hero__form-btn"
                @click.prevent="greenhouseSignUp('getEden - food leads')"
              >
                Give me a food plan
              </button>
            </div>
          </transition>
          <transition name="slide-fade">
            <div v-if="period === 'monthly'" class="plan__price-monthly">
              <div class="plan__price-item">
                <p>Number of meals per delivery?</p>
                <div class="btn--group">
                  <button
                    class="btn--item minus"
                    @click.prevent="decreaseOrder('monthly')"
                  >
                    <svg
                      width="20"
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
                    v-model="mealsPerWeek"
                    type="number"
                    name=""
                    placeholder="0"
                    readonly
                  />
                  <button
                    class="btn--item plus"
                    @click.prevent="increaseOrder('monthly')"
                  >
                    <svg
                      width="20"
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
                    @click.prevent="decreaseFrequency()"
                  >
                    <svg
                      width="20"
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
                    v-model="deliveryPerWeek"
                    type="number"
                    name=""
                    placeholder="0"
                    readonly
                    max="2"
                  />
                  <button
                    class="btn--item plus"
                    @click.prevent="increaseFrequency()"
                  >
                    <svg
                      width="20"
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
                  <span class="icon">👉 </span> NGN
                  {{ currencyFormat(totalWeeklyPrice) }}
                </h5>
                <p>per 4 weeks</p>
              </div>
              <div class="plan__price-alert">
                <p>
                  You will get {{ mealsPerWeek }} meals delivered once a week
                  for 4 weeks.
                </p>
              </div>
              <button
                class="hero__form-btn"
                @click.prevent="greenhouseSignUp('getEden')"
              >
                Give me a food plan
              </button>
            </div>
          </transition>
        </div>
      </section>
    </div>

    <div class="container--wall">
      <section class="wall">
        <div class="wall__title">
          <h3>Why should I let Eden Life take care of my food?</h3>
        </div>
        <div class="wall__messages">
          <div class="s">
            <div class="wall__messages-first-box">
              <div class="wall__messages-title">
                <h3>
                  You will not have to worry about cooking because we will cook
                  for you, and you just... eat.
                </h3>
              </div>
              <p class="card__description">
                Just select your weekly meals and they come to you where, and
                how you want it.
              </p>
              <div class="card">
                <a
                  href="https://twitter.com/IB_DAVIES/status/1379455244468387845?s=20&t=FNzOEiLQCMhXnymldIm6LQ"
                  target="_blank"
                >
                  <div class="card__title">
                    <div class="card__title-img">
                      <img
                        :src="require(`~/assets/images/customer-davies.png`)"
                        alt="customer-davies"
                      />
                    </div>
                    <div class="">
                      <p class="card__title-name">YT: IBIFUBARA</p>
                      <p class="card__title-handle">@IB_DAVIES</p>
                    </div>
                  </div>
                  <p class="card__description">
                    Finally here 😍
                    <br />
                    Goodbye to cooking 😌
                  </p>
                </a>
                <div class="mt-4">
                  <img
                    :src="require(`~/assets/images/customer-food.png`)"
                    alt="customer-food"
                  />
                  <img
                    :src="require(`~/assets/images/customer-food-2.png`)"
                    alt="customer-food"
                  />
                </div>
              </div>
            </div>
            <div class="wall__messages-first-box">
              <div class="wall__messages-title">
                <h3>It's perfect for your busy lifestyle.</h3>
              </div>
              <p class="card__description">
                Choose a plan, let us know where you'd like your meals
                delivered, and we'll take care of the rest.
              </p>
              <div class="card">
                <a
                  href="https://twitter.com/adakanma/status/1304074750952714241?s=20&t=FNzOEiLQCMhXnymldIm6LQ"
                  target="_blank"
                >
                  <div class="card__title">
                    <div class="card__title-img">
                      <img
                        :src="require(`~/assets/images/customer-adaku.png`)"
                        alt="customer-adaku"
                      />
                    </div>

                    <div class="">
                      <p class="card__title-name">Adaku</p>
                      <p class="card__title-handle">@adakanma</p>
                    </div>
                  </div>
                  <p class="card__description">
                    Got my first meal delivery from
                    <span style="color: #03a84e"> @ouredenlife </span> today and
                    I'm sold. I was made for this lifestyle, please.<br /><br />
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div class="wall__messages-second_card">
            <div class="wall__messages-first-box">
              <div class="wall__messages-title">
                <h3>
                  We will take off the stress of worrying about what to eat off
                  your shoulders. .
                </h3>
              </div>
              <p class="card__description">
                By choosing an Eden food plan, you go from spending up to 10
                hours weekly worrying about what to eat to spending only 5
                minutes picking your meals.
              </p>
              <div class="card">
                <a
                  href="https://twitter.com/_blakdave/status/1374680001841405953?s=20&t=FNzOEiLQCMhXnymldIm6LQ"
                  target="_blank"
                >
                  <div class="card__title">
                    <div class="card__title-img">
                      <img
                        :src="require(`~/assets/images/customer-dave.png`)"
                        alt="customer-dave"
                      />
                    </div>

                    <div class="">
                      <p class="card__title-name">Dave</p>
                      <p class="card__title-handle">@_blakdave</p>
                    </div>
                  </div>
                  <p class="card__description">
                    I've decided to let
                    <span style="color: #03a84e"> Eden Life</span> take the
                    wheel abeg. <br />
                    I'm tired of this stress of thinking of what to eat and
                    getting the food every time. 😩
                  </p>
                </a>
              </div>
            </div>
            <div class="wall__messages-first-box">
              <div class="wall__messages-title">
                <h3>
                  We will do whatever it takes to deliver your meals on time.
                </h3>
              </div>
              <p class="card__description">
                We're committed to providing you with delicious meals, so we
                make them fresh and deliver them on time.
              </p>
              <div class="card">
                <a
                  href="https://twitter.com/DavidAbu_/status/1433837237469433857?s=20&t=FNzOEiLQCMhXnymldIm6LQ"
                  target="_blank"
                >
                  <div class="card__title">
                    <div class="card__title-img">
                      <img
                        :src="require(`~/assets/images/customer-david.png`)"
                        alt="customer-david"
                      />
                    </div>

                    <div class="">
                      <p class="card__title-name">David Abu</p>
                      <p class="card__title-handle">@DavidAbu_</p>
                    </div>
                  </div>
                  <p class="card__description">
                    My <span style="color: #03a84e"> Eden Life</span> rider
                    entered the rain to get me my food😔😩, and as I was leaving
                    he said enjoy the meal.
                    <br />
                    Ahhh you are inside rain Oga, you are still doing customer
                    service.
                    <br />
                    I am sold sha.<br /><br />
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
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
          :next-meals="nextWeekMeals"
          :title="'Current Menu'"
          :first-date-format="firstDateFormat"
          :last-date-format="lastDateFormat"
          @showNext="toggleMenu('next')"
        />
      </transition>
      <transition name="slide-fade">
        <Menu
          v-if="showNextMenu"
          :meals="nextWeekMeals"
          :title="`Next week's Menu`"
          :first-date-format="nextFirstDateFormat"
          :last-date-format="nextLastDateFormat"
          @showCurrent="toggleMenu('current')"
        />
      </transition>
      <section v-if="currentMeals.length" class="menu">
        <button class="menu-btn" @click.prevent="greenhouseSignUp('getEden')">
          Give me a food plan
        </button>
      </section>
    </div>
    <footer>
      <lead-gen-footer />
    </footer>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import { notUrl } from '~/utils/validators'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import { createFoodLeads } from '~/request/airtable'
import { pricing } from '~/static/pricing'
import { currencyFormat, placeholderColorMix } from '~/static/functions'
import currentMeal from '~/mixins/currentMeal'
import getSiteMeta from '~/utils/getSiteMeta'
import LeadGenFooter from '~/components/LeadGenFooter.vue'

export default {
  components: {
    LeadGenFooter,
    Loader: () => import('@/components/Loader.vue'),
    Menu: () => import('@/components/Menu.vue'),
  },
  mixins: [validationMixin, currentMeal],
  layout: 'lead',
  validations: {
    foodForm: {
      full_name: { required, notUrl },
      email: { required, email },
      phone_number: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
    },
  },
  data() {
    return {
      headerText: ['daily', 'weekly'],
      form: {
        email: '',
        name: '',
        phone_number: '',
      },
      loading: false,
      showFailedModal: false,
      mealFrequency: '',
      dailyDeliveryDays: ['monday-friday', 'monday-saturday'],
      selectedDays: ['monday-friday'],
      mealsPerDay: 1,
      mealsPerWeek: 5,
      deliveryPerWeek: 1,
      totalDailyPrice: null,
      totalWeeklyPrice: null,
      period: 'monthly',
      defaultImage: 9,
      setInitialImage: null,
      setLastIndex: null,
      responseMessage: '',
      allMeal: [],
      currentMeals: [],
      nextWeekMeals: [],
      mealsInCategory: [],
    }
  },
  head() {
    return {
      title: 'Eden | Food Leads',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://ouredenlife.com/food`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        title: 'Eden | Food Leads',
        description:
          'Your chef-cooked meals, delivered to you. Daily or weekly.',
        url: `https://ouredenlife.com/food_leads`,
        mainImage: 'https://ouredenlife.com/edencardfood.png',
      }
      return getSiteMeta(metaData)
    },
  },
  mounted() {
    window.setInterval(() => {
      this.changeText()
    }, 2300)
    setTimeout(() => {
      this.totalDailyPrice = this.calculatePrice('daily', this.mealsPerDay)
      this.totalWeeklyPrice = this.calculatePrice('weekly', this.mealsPerWeek)
    }, 2000)
    mixpanelTrackEvent('Food Lead page')
  },
  methods: {
    changeText() {
      const first = this.headerText.shift()
      this.headerText = this.headerText.concat(first)
    },
    currencyFormat,
    placeholderColorMix,
    toggleMenu(menu) {
      if (menu === 'next') {
        this.showCurrentMenu = false
        this.showNextMenu = true
      } else {
        this.showNextMenu = false
        this.showCurrentMenu = true
      }
    },
    placeholderColorMix,
    scrollToTop(ref) {
      this.$refs[ref].scrollIntoView()
    },
    updateDeliveyDay(item) {
      this.selectedDays = []
      this.selectedDays.push(item)
      this.totalDailyPrice = this.calculatePrice('daily', this.mealsPerDay)
    },
    increaseOrder(order) {
      mixpanelTrackEvent(`Increase ${order} order clicked - food page`)

      if (order === 'weekly') {
        this.mealsPerDay++
        this.totalDailyPrice = this.calculatePrice('daily', this.mealsPerDay)
      }
      if (order === 'monthly') {
        this.mealsPerWeek++
        const freq = this.deliveryPerWeek === 1 ? 'weekly' : 'weekly-twodays'
        this.checkWeeklyFreq(freq)
      }
    },
    decreaseOrder(order) {
      mixpanelTrackEvent(`Decrease ${order} order clicked - food page`)

      if (order === 'weekly' && this.mealsPerDay > 1) {
        this.mealsPerDay--
        this.totalDailyPrice = this.calculatePrice('daily', this.mealsPerDay)
      }
      if (order === 'monthly' && this.mealsPerWeek > 1) {
        this.mealsPerWeek--
        if (this.mealsPerWeek === 1) {
          this.deliveryPerWeek = 1
        }
        const freq = this.deliveryPerWeek === 1 ? 'weekly' : 'weekly-twodays'
        this.checkWeeklyFreq(freq)
      }
    },
    increaseFrequency() {
      mixpanelTrackEvent(`Increase order frequency clicked - food page`)

      if (this.deliveryPerWeek < 2 && this.mealsPerWeek > 1) {
        this.deliveryPerWeek++
        const freq = this.deliveryPerWeek === 1 ? 'weekly' : 'weekly-twodays'
        this.checkWeeklyFreq(freq)
      }
    },
    decreaseFrequency() {
      mixpanelTrackEvent(`Decrease order frequency clicked - food page`)

      if (this.deliveryPerWeek > 1) {
        this.deliveryPerWeek--
        const freq = this.deliveryPerWeek === 1 ? 'weekly' : 'weekly-twodays'
        this.checkWeeklyFreq(freq)
      }
    },
    calculatePrice(frequency, quantity) {
      const days = [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
      ]
      const service_day = {
        daily:
          this.selectedDays[0] === 'monday-friday' ? days.slice(0, 5) : days,
        weekly: days.slice(0, 1),
        'weekly-twodays': days.slice(0, 2),
      }
      if (frequency === 'daily') {
        this.mealsPerDay = this.mealsPerDay > 5 ? 5 : this.mealsPerDay
      }
      const qty = frequency === 'daily' ? this.mealsPerDay : this.mealsPerWeek
      const qtyPerWeek =
        frequency === 'daily'
          ? this.mealsPerDay * service_day[frequency].length
          : this.mealsPerWeek
      const mealPrice = pricing({
        meal: {
          item: null,
          frequency: frequency,
          qty: qtyPerWeek,
          service_day: service_day[frequency],
          meal_per_delivery: service_day[frequency].reduce((days, day) => {
            return {
              same_number_per_delivery: true,
              ...days,
              [day]: qty,
            }
          }, {}),
        },
      })
      return mealPrice
    },
    checkWeeklyFreq(freq) {
      if (freq === 'weekly') {
        this.totalWeeklyPrice = this.calculatePrice('weekly', this.mealsPerWeek)
      } else {
        this.totalWeeklyPrice = this.calculatePrice(
          'weekly-twodays',
          this.mealsPerWeek * 2
        )
      }
    },
    scrollToFooter(id) {
      document.getElementById(id).scrollIntoView()
    },
    greenhouseSignUp(label) {
      mixpanelTrackEvent(label)
      this.$router.push({ name: 'signup', query: this.$route.query })
    },
    openSocialMedia(name, url) {
      mixpanelTrackEvent(`${name} icon clicked - Lead page`)
      window.open(url, '_blank')
    },
    changeCenter(i) {
      const root = document.querySelector(':root')
      const element = document.querySelector(`.dial-${i}`)
      getComputedStyle(element, '::before')
      const centerImage = getComputedStyle(element, '::before')[
        'background-image'
      ]
      const getIndex = centerImage.substring(
        centerImage.indexOf('signuphero-') + 11
      )[0]
      const imageIndex = parseInt(getIndex)

      if (imageIndex === 9) {
        root.style.setProperty(
          `--psuedo-image-${i}`,
          `url('https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1622192212/eden-website-v2/signuphero-${this.defaultImage}.png')`
        )
        this.$refs[
          'center-image'
        ].style.backgroundImage = `url('https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1622192212/eden-website-v2/signuphero-${imageIndex}.png')`

        this.defaultImage = imageIndex
        return
      }

      root.style.setProperty(
        `--psuedo-image-${i}`,
        `url('https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1622192212/eden-website-v2/signuphero-${this.defaultImage}.png')`
      )

      this.$refs[
        'center-image'
      ].style.backgroundImage = `url('https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1622192212/eden-website-v2/signuphero-${imageIndex}.png')`

      this.defaultImage = imageIndex
    },
    changeCenterMobile(i) {
      const root = document.querySelector(':root')
      const element = document.querySelector(`.dial-${i}`)
      getComputedStyle(element, '::before')
      const centerImage = getComputedStyle(element, '::before')[
        'background-image'
      ]
      const getIndex = centerImage.substring(
        centerImage.indexOf('signuphero-') + 11
      )[0]
      const imageIndex = parseInt(getIndex)

      if (imageIndex === 9) {
        root.style.setProperty(
          `--psuedo-image-${i}`,
          `url('https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1622192212/eden-website-v2/signuphero-${this.defaultImage}.png')`
        )
        this.$refs[
          'center-image-mobile'
        ].style.backgroundImage = `url('https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1622192212/eden-website-v2/signuphero-${imageIndex}.png')`

        this.defaultImage = imageIndex
        return
      }

      root.style.setProperty(
        `--psuedo-image-${i}`,
        `url('https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1622192212/eden-website-v2/signuphero-${this.defaultImage}.png')`
      )

      this.$refs[
        'center-image-mobile'
      ].style.backgroundImage = `url('https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1622192212/eden-website-v2/signuphero-${imageIndex}.png')`

      this.defaultImage = imageIndex
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_signup.scss';
@import '@/assets/scss/pages/_food_leads.scss';
</style>

<style>
:root {
  --psuedo-image-1: url('https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1622192212/eden-website-v2/signuphero-1.png');
  --psuedo-image-2: url('https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1622192212/eden-website-v2/signuphero-2.png');
  --psuedo-image-3: url('https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1622192212/eden-website-v2/signuphero-3.png');
  --psuedo-image-4: url('https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1622192212/eden-website-v2/signuphero-4.png');
  --psuedo-image-5: url('https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1622192212/eden-website-v2/signuphero-5.png');
  --psuedo-image-6: url('https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1622192212/eden-website-v2/signuphero-6.png');
  --psuedo-image-7: url('https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1622192212/eden-website-v2/signuphero-7.png');
  --psuedo-image-8: url('https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1622192212/eden-website-v2/signuphero-8.png');
}

.dial-1:before {
  background: var(--psuedo-image-1) center / 202px;
  width: 92px;
  height: 92px;
  background-size: contain;
  content: '';
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: all 0.5s ease-in-out;
}

.dial-2:before {
  background: var(--psuedo-image-2) center / 92px;
  width: 92px;
  height: 92px;
  background-size: contain;
  content: '';
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: all 0.5s ease-in-out;
}

.dial-3:before {
  background: var(--psuedo-image-3) center / 92px;
  width: 92px;
  height: 92px;
  background-size: contain;
  content: '';
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: all 0.5s ease-in-out;
}

.dial-4:before {
  background: var(--psuedo-image-4) center / 92px;
  width: 92px;
  height: 92px;
  background-size: contain;
  content: '';
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: all 0.5s ease-in-out;
}
.dial-5:before {
  background: var(--psuedo-image-5) center / 92px;
  width: 92px;
  height: 92px;
  background-size: contain;
  content: '';
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: all 0.5s ease-in-out;
}
.dial-6:before {
  background: var(--psuedo-image-6) center / 92px;
  width: 92px;
  height: 92px;
  background-size: contain;
  content: '';
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: all 0.5s ease-in-out;
}
.dial-7:before {
  background: var(--psuedo-image-7) center / 92px;
  width: 92px;
  height: 92px;
  background-size: contain;
  content: '';
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: all 0.5s ease-in-out;
}
.dial-8:before {
  background: var(--psuedo-image-8) center / 92px;
  width: 92px;
  height: 92px;
  background-size: contain;
  content: '';
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: all 0.5s ease-in-out;
}

@media only screen and (max-width: 48em) {
  .dial-1:before {
    background: var(--psuedo-image-1) center / 46px;
    width: 46px;
    height: 46px;
  }

  .dial-2:before {
    background: var(--psuedo-image-2) center / 46px;
    width: 46px;
    height: 46px;
  }

  .dial-3:before {
    background: var(--psuedo-image-3) center / 46px;
    width: 46px;
    height: 46px;
  }

  .dial-4:before {
    background: var(--psuedo-image-4) center / 46px;
    width: 46px;
    height: 46px;
  }
  .dial-5:before {
    background: var(--psuedo-image-5) center / 46px;
    width: 46px;
    height: 46px;
  }
  .dial-6:before {
    background: var(--psuedo-image-6) center / 46px;
    width: 46px;
    height: 46px;
  }
  .dial-7:before {
    background: var(--psuedo-image-7) center / 46px;
    width: 46px;
    height: 46px;
  }
  .dial-8:before {
    background: var(--psuedo-image-8) center / 46px;
    width: 46px;
    height: 46px;
  }
  .menu__list-img {
    height: 150px;
  }
}

.mt-4 {
  margin-top: 25px;
}
</style>
