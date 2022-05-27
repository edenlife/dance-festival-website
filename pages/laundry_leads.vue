<template>
  <div>
    <div class="container--hero">
      <header class="hero">
        <div class="hero__title">
        <h1>
             Laundry picked up and delivered in <span> {{ headerText }}</span>.
            </h1>
          <div>
              <p class="bold"> Pay once a month and get:</p>
              <ul>
                <li>
                  <span class="icon"> 🧺 </span>
                  Free pickup and delivery at your convenience at no extra cost.
                </li>
                <li>
                  <span class="icon"> 👩🏽‍🦰 </span>
                  A dedicated Customer Support representative.
                </li>
                <li>
                  <span class="icon"> 🤌🏽 </span>
                  Flexible plan to fit your needs (weekly, bi-weekly, or monthly).
                </li>
              </ul>
          </div>
           <div class="hero__button">
            <button
              type="button"
              class="hero__button-solid"
              @click.prevent="scrollToFooter('#getEden', 'laundry-leads - hero')"
            >
              I want an Eden Life Laundry plan
            </button>
          </div>
         </div>
         <div class="hero__img-laundry">
              <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1653654223/eden-website-v2/Laundry_cvdqbw.png"
              alt="laundry tag"
              class="hero__img-bg1"
            />
        </div>
      </header>
      <div class="hero__img"></div>
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
                <img :src="require(`~/assets/images/emojis/one.png`)" alt="" />
              </div>
              <div
                v-animate-onscroll.repeat="'animated fadeInDown'"
                class="description__details-item--text"
              >
                <h5>You choose a plan that works for you.</h5>
                <p>
                  Sign up on the Eden app, choose a laundry schedule that works for you. It takes less than 5 minutes!
                </p>
              </div>
            </div>
            <div class="description__details-item">
              <div class="description__details-item--icon">
                <img
                  :src="require(`~/assets/images/emojis/two.png`)"
                  alt=""
                />
              </div>
              <div
                v-animate-onscroll.repeat="'animated fadeInUp'"
                class="description__details-item--text"
              >
                <h5>We pick and do our magic.</h5>
                <p>
                  We pick up your dirty clothes. We wash or iron as per your request and 
                  return them to you clean and smelling great!
                </p>
              </div>
            </div>
            <div class="description__details-item">
              <div class="description__details-item--icon">
                <img :src="require(`~/assets/images/emojis/three.png`)" alt="" />
              </div>
              <div
                v-animate-onscroll.repeat="'animated fadeInDown'"
                class="description__details-item--text"
              >
                <h5>We deliver.</h5>
                <p>
                  We make sure all your clothes are intact and perfectly laundered. 
                  All within 48 hours. Delivery at no extra cost!
                </p>
              </div>
            </div>
          </div>
          <div class="description__inner-left">
            <div
              class="description__inner-left-img1"
            >
              <img
               v-animate-onscroll="'animated fadeInDown'"
                :src="require(`~/assets/images/laundry-image.png`)"
                alt=""
              />
            </div>
            <div
              class="description__inner-left-img2"
            >
              <img
               v-animate-onscroll="'animated fadeInUp'"
                :src="require(`~/assets/images/laundry 2.png`)"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>

    <div id="laundry-plan" class="container--plan">
      <section class="plan">
        <div class="plan__title">
          <h3>The Laundry Plans:<br /></h3>
          <p>
            Each laundry bag contains up to 30 clothing items, and you can track
            your order on the app.
          </p>
          <ul>
            <li>
              <h5 class="icon icon--one">🚚</h5>
              <div class="icon--text">
                <h5>We'll pick up and deliver</h5>
                <p>in 48 hours.</p>
              </div>
            </li>
            <li>
              <h5 class="icon icon--one">⏸</h5>
              <div class="icon--text">
                <h5>Pause your subscription anytime.</h5>
                <p>Out of town? You can skip a service.</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="plan__price">
          <ul class="plan__price--list">
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
                <div class="plan__price">
                  <ul
                    v-if="showAdditionalLaundryCost"
                    class="plan__price-description--list"
                  >
                    <li v-for="desc in extraLaundryCost" :key="desc">
                      <span>{{ desc.item }}</span>
                      <span>&#8358; {{ desc.cost }}</span>
                    </li>
                  </ul>
                </div>
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
                <p>per 4 weeks</p>
              </div>
            </div>
          </transition>
          <transition name="slide-fade">
            <div v-if="plan === 'washIron'" class="plan__price-washDry">
              <div class="plan__price-item">
                <div class="plan__price"><ul
                    v-if="showAdditionalLaundryCost"
                    class="plan__price-description--list"
                  >
                    <li v-for="desc in extraLaundryCost" :key="desc">
                      <span>{{ desc.item }}</span>
                      <span>&#8358; {{ desc.cost }}</span>
                    </li>
                  </ul>
                </div>
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

           <div class="hero__button">
            <button
              type="button"
              class="hero__button-solid"
              @click.prevent="scrollToFooter('#getEden', 'laundry-leads - plan')"
            >
              I want an Eden Life Laundry plan
            </button>
          </div>
          
        </div>
      </section>
    </div>

    <div class="container--wall">
      <section class="wall">
        <div class="wall__title">
          <h3>Why should I let Eden Life do my laundry?</h3>
        </div>
        <div class="wall__messages">
          <div class="wall__messages-first-box">
             <div class="wall__messages-title">
               <h3>Bye Bye to the <i>wahala </i> of going to the laundromats.</h3>
             </div>
             <p class="card__description">Let us do the dirty laundry and use the free time to do what you love.</p>
              <div class="card">
                <a href="https://twitter.com/Yesmina_T/status/1309270002722365441?s=20" target="_blank">
                  <div class="card__title">
                    <div class="card__title-img">
                      <img
                        :src="require(`~/assets/images/customer-tolu.png`)"
                        alt="customer-tolu"
                      />
                    </div>
                    <div class="">
                      <p class="card__title-name">Tolu Ajiboye</p>
                      <p class="card__title-handle">@Yesmina_T</p>
                    </div>
                  </div>
                  <p class="card__description">
                    Bruh the actual worst. I haven’t done my own laundry in years. It’s even so stress-free now that I use <span style="color:#03A84E"> @ouredenlife </span>.
                     I literally just put every single item into my laundry bag and they come pick it up and drop it back.
                  </p>
                </a>
                <div class="mt-4">
                  <img
                        :src="require(`~/assets/images/clothes.png`)"
                        alt="customer-laundry"
                      />
                </div>
              </div>
          </div>
          
          <div class="wall__messages-second_card">
             <div class="wall__messages-first-box">
                <div class="wall__messages-title">
                  <h3>It just works. You don’t have to worry about your clothes.</h3>    
                </div> 
                <p class="card__description">Turn your laundry over to Eden Life. You don't have to do anything at all. It just works.</p>
                  <div class="card">
                    <a href="https://twitter.com/timigod/status/1190320551837020165?s=20" target="_blank">
                      <div class="card__title">
                        <div class="card__title-img">
                          <img
                            :src="require(`~/assets/images/customer-timi.png`)"
                            alt="customer-timi"
                          />
                        </div>

                        <div class="">
                          <p class="card__title-name">Timi Ajiboye</p>
                          <p class="card__title-handle">@timigod</p>
                        </div>
                      </div>
                      <p class="card__description">
                          Things “just working” with little input from me, makes me happy. I really like my laundry process now (<span style="color:#03A84E"> @ouredenlife </span> is a big part of that)<br><br>
                      </p>
                    </a>
                  </div>
              </div>
              <div class="wall__messages-first-box">
                <div class="wall__messages-title">
                  <h3>Professionals like no other.</h3>
                  </div>
                  <p class="card__description">Your laundry will be cleaned with the utmost care and handled by professionals. From pickup to delivery, we do the work so you don’t have to.</p>
                    <div class="card">
                      <a href="https://twitter.com/LifeOfMogwai/status/1274748508269154308?s=20" target="_blank">
                        <div class="card__title">
                          <div class="card__title-img">
                            <img
                              :src="require(`~/assets/images/customer-justin.png`)"
                              alt="customer-justin"
                            />
                          </div>

                          <div class="">
                            <p class="card__title-name">justin irabor</p>
                            <p class="card__title-handle">@LifeOfMogwai</p>
                          </div>
                        </div>
                        <p class="card__description">
                          Your laundry will be cleaned with the utmost care and handled by professionals. 
                          From pickup to delivery, we do the work so you don’t have to.<br><br>
                        </p>
                      </a>
                    </div>
              </div>
          </div>
        </div>
      </section>
    </div>

     <div class="container--form">
       <section class="laundry" id="getEden">
          <div class="laundry__form">
             <div class="laundry__form-title">
               <h3>You're one step closer to not worrying <br/> about laundry.
               </h3>
               <p>Enter your details and we’ll reach out to you about the next steps. <br/>
                    Let's go!
                </p>
             </div>

            <div class="form">
            <div class="form__input">
              <label for="company name"> Full Name</label>
              <input
                id=""
                v-model="laundryForm.full_name"
                type="text"
                name=""
                placeholder="Your first & last name"
                :class="{ 'has-error': $v.laundryForm.full_name.$error }"
              />
            </div>

            <div class="form__input">
              <label for="email">Email Address </label>
              <input
                id=""
                v-model="laundryForm.email"
                type="email"
                name=""
                placeholder="email@example.com"
                :class="{ 'has-error': $v.laundryForm.email.$error }"
              />
            </div>

           <div class="form__input">
              <label for="phone number">Contact Person’s Phone Number <span class="required">*</span></label>
              <input
                id=""
                v-model.trim="$v.laundryForm.phone_number.$model"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                type="text"
                name=""
                placeholder="08123456789"
                :class="{ 'has-error': $v.laundryForm.phone_number.$error }"
              />
            </div>
            <button
              type="submit"
              class="btn--submit"
              :class="{
                loading: loading,
              }"
              :disabled="loading"
              @click.prevent="submit()"
            >
               I want an Eden Life Laundry plan
            </button>
          </div>
        </div>
       </section>
    </div>

    <modal
      v-if="showSuccessModal"
      :show-modal="showSuccessModal"
      class="modal"
      @click="showSuccessModal = false"
    >
      <div slot="header"></div>
      <div slot="body" class="modal__body success">
        <div class="company__modal">
          <div class="company__modal-title">
            <button class="btn btn--success" @click="closeModal">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="15.5"
                  fill="white"
                  stroke="#E4E8E6"
                />
                <path
                  d="M20 12L12 20"
                  stroke="#798B83"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 12L20 20"
                  stroke="#798B83"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div class="company__modal-body">
            <img
              src="@/assets/images/gift-confetti.svg"
              alt=""
              class="confetti"
            />

            <h3>Thank you!</h3>
            <p>
              Someone from our team will reach out to you in the next 24-48 hours.
            </p>
          </div>
        </div>
      </div>
      <div slot="footer"></div>
    </modal>

    <modal v-if="showFailedModal" :show-modal="showFailedModal" class="modal">
      <div slot="header"></div>
      <div slot="body" class="modal__body">
        <div class="company__modal">
          <div class="company__modal-title">
            <button class="btn btn--success" @click="showFailedModal = false">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="15.5"
                  fill="white"
                  stroke="#E4E8E6"
                />
                <path
                  d="M20 12L12 20"
                  stroke="#798B83"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 12L20 20"
                  stroke="#798B83"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <div class="company__modal-body">
            <img :src="require(`~/assets/images/failed.svg`)" alt="failed" />
            <h5>Submission Failed</h5>
            <p>
              Please try again or reach us at <span>eve@edenlife.ng </span> or
              <span>+2348123456790</span>
            </p>
          </div>
        </div>
      </div>
      <div slot="footer"></div>
    </modal>

  </div>
</template>

<script>
import { pricing } from '~/static/pricing'
import { currencyFormat, scrollToApp } from '~/static/functions'
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import { createLaundryLeads } from '~/request/airtable'
import { notUrl } from '~/utils/validators'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import getSiteMeta from '~/utils/getSiteMeta'

export default {
  mixins: [validationMixin],
  validations: {
    laundryForm: {
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
      headerText: '48 hours',
      showSuccessModal: false,
      showFailedModal: false,
      setExploreService: false,
      window: {
        width: 0,
        height: 0,
      },
      hasError: false,
      full_name: '',
      email: '',
      phone_number: '',
      loading: false,
      exploreService: '',
      washDry: 1,
      washIron: 1,
      washDryFrequency: 'weekly',
      washIronFrequency: 'weekly',
      plan: 'washDry',
      totalWashDryPrice: null,
      totalWashIronPrice: null,
      showAdditionalLaundryCost: false,
      extraLaundryCost: [
        { item: 'Extra item', cost: '250' },
        { item: 'Big size towel (2 items)', cost: '500' },
        { item: 'Bedsheet (3 items)', cost: '750' },
        { item: 'Blanket (3 items)', cost: '750' },
        { item: '3 piece Agbada (5 items) ', cost: '1500' },
        { item: 'Curtain (8 items)', cost: '2000' },
        { item: 'Duvet (10 items)', cost: '2500' },
        { item: 'A pair of suit (10 items)', cost: '2500' },
      ],
      laundryForm: {
        full_name: '',
        email: '',
        phone_number: '',
      },
    }
  },
  head() {
    return {
      title: 'Eden | Laundry-leads',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://ouredenlifev2-staging.netlify.app/laundry-leads`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        title: 'Eden | Laundry Leads',
        description:
          'Your clothes, picked up, laundered and delivered to you in 48 hours or less.',
        url: `https://ouredenlifev2-staging.netlify.app/laundry-leads`,
        mainImage:
          'https://ouredenlifev2-staging.netlify.app/edencardlaundry.png',
      }
      return getSiteMeta(metaData)
    },
  },
  mounted() {
    window.addEventListener('scroll', this.isInViewport)
    mixpanelTrackEvent('Laundry Leads page')
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
    window.addEventListener('scroll', this.isInViewport)
  },
  methods: {
    currencyFormat,
    isInViewport() {
      const element = document.querySelector('#laundry-video')
      const { top, bottom } = element.getBoundingClientRect()
      const vHeight =
        window.innerHeight || document.documentElement.clientHeight
      const isInView = (top > 0 || bottom > 0) && top < vHeight
      if (isInView) {
        this.playVideo()
        document.querySelector('svg.bee').setAttribute('class', 'timeline--b')
        document.querySelector('svg.cee').setAttribute('class', 'timeline--c')
        document.querySelector('svg.dee').setAttribute('class', 'timeline--d')
        document.querySelector('svg.eee').setAttribute('class', 'timeline--e')
      }
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
      mixpanelTrackEvent(`Increase ${order} order clicked - laundry page`)

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
      mixpanelTrackEvent(`Decrease ${order} order clicked - laundry page`)

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
      mixpanelTrackEvent(` ${freq} wash&dry frequency clicked - laundry page`)

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
      mixpanelTrackEvent(` ${freq} wash&iron frequency clicked - laundry page`)

      this.washIronFrequency = freq
      this.totalWashIronPrice = pricing({
        laundry: {
          item: 'wash-and-iron',
          frequency: this.washIronFrequency,
          qty: this.washIron,
        },
      })
    },
    trackLink(service) {
      mixpanelTrackEvent(`${service} clicked - Laundry (more options)`)
    },
     closeModal() {
      this.showSuccessModal = !this.showSuccessModal
    },
    async submit() {
      this.$v.laundryForm.$touch()
      if (this.$v.laundryForm.$error) return
      if (!this.$v.laundryForm.$error) {
        console.log(this.$v.laundryForm.$error, "fail")
        try {
          this.loading = true
          console.log(!this.$v.laundryForm.$error, "pass")
          const metaData = {
            'Full Name': this.laundryForm.full_name,
            'Email Address': this.laundryForm.email,
            'Phone Number': this.laundryForm.phone_number,
          }
          const leadMetaData = {
           name: this.laundryForm.full_name,
           email: this.laundryForm.email,
           phone: this.laundryForm.phone_number,
            lead_gen_page: window.location.href,
            referrer: document.referrer,
          }
          this.$intercom('update', {
            name: this.laundryForm.full_name,
            email: this.laundryForm.email,
            phone: this.laundryForm.phone_number,
            lead_gen_page: window.location.href,
            referrer: document.referrer,
          })
          this.$intercom('trackEvent', 'lead-genaration-signup', leadMetaData)
          console.log(metaData)
          createLaundryLeads(metaData).then(
            (res) => {
              this.loading = false
              console.log(metaData)
              mixpanelTrackEvent('Laundry Leads form submitted')
              setTimeout(() => {
                Object.keys(this.laundryForm).forEach(
                  (key) => (this.laundryForm[key] = '')
                )
                this.$nextTick(() => {
                  this.$v.laundryForm.$reset()
                  this.showSuccessModal = true
                })
              }, 500)
            },
            (err) => {
              this.loading = false
              this.showFailedModal = true
            }
          )
        } catch (error) {
          this.loading = false
          this.showFailedModal = true
        }
      }
    },
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_laundry.scss';
@import '@/assets/scss/pages/_laundry_leads.scss';

.mt-4 {
  margin-top: 25px;
}

.footer  {
    &__top {
        bottom: 10rem;
    }
    &__bottom {
        padding: 262px 0 48px 0;
    }
}

section.footer__top {
   bottom: 10rem;
}

</style>
