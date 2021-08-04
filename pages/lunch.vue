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
        <div class="hero__header">
          <div class="hero__header-title">
            <h1>
              Pay Once. <br />
              Get Lunch.<br />
              All Month.
            </h1>
            <p>
              Subscribe to our lunch plan and get chef-cooked meals delivered
              straight to you.
              <span class="bold">Monday to Friday. </span>
              <br />
              The perfect fuel for your hard-work 💚
            </p>
            <p class="discount">Never have to worry about lunch again!</p>
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
          <div ref="hero" class="hero__form">
            <div class="hero__form-title">
              <h3>Start your Eden lunch plan today</h3>
              <p>
                Enter your details and we'll reach out to you about the next
                steps. Let's go!
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
                <label for="phone number">Phone Number</label>
                <input
                  id=""
                  v-model.trim="$v.form.phone_number.$model"
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                  type="text"
                  name=""
                  placeholder="08123456789"
                  :class="{ 'has-error': $v.form.phone_number.$error }"
                />
              </div>
              <p v-if="responseMessage.length" class="error-message">
                {{ responseMessage }}
              </p>
              <button
                class="hero__form-btn"
                :disabled="loading"
                @click.prevent="getStarted()"
              >
                <svg v-if="loading">
                  <use
                    xlink:href="@/assets/images/loading-icon.svg#loading-icon"
                  ></use>
                </svg>
                <span v-else> Start Your Eden Life Today </span>
              </button>
            </div>
            <!-- <p class="note">
              *₦1,760 per meal on our first month. (Delivery costs included)
            </p> -->
          </div>
        </div>
      </div>
    </div>
    <div class="container--description">
      <section class="description">
        <div class="description__title">
          <h3>Why let Eden worry about lunchtime?</h3>
          <div class="card">
            <a :href="testimonial.tweetLink" target="_blank">
              <div class="card__title">
                <div class="card__title-img">
                  <img
                    :src="
                      require(`~/assets/images/customer-${testimonial.image}.png`)
                    "
                    :alt="testimonial.name"
                  />
                </div>

                <div class="">
                  <p class="card__title-name">{{ testimonial.name }}</p>
                  <p class="card__title-handle">@{{ testimonial.handle }}</p>
                </div>
              </div>
              <p class="card__description" v-html="testimonial.description"></p>
            </a>
          </div>
        </div>
        <div class="description__details">
          <div class="description__details-item">
            <div class="description__details-item--icon">
              <img
                :src="require(`~/assets/images/emojis/moneybag.png`)"
                alt=""
              />
            </div>

            <div class="description__details-item--text">
              <h5>It's budget-friendly</h5>
              <p>
                We asked around, crunched some numbers, and found out that
                Eden's food plans save our customers as much as 68% of their
                monthly food bill!
              </p>
            </div>
          </div>
          <div class="description__details-item">
            <div class="description__details-item--icon">
              <img :src="require(`~/assets/images/emojis/rocket.png`)" alt="" />
            </div>
            <div class="description__details-item--text">
              <h5>It's a monthly subscription</h5>
              <p>
                You pay once and get fresh food all through the month. Once you
                subscribe, you're good for the whole month.
              </p>
            </div>
          </div>
          <div class="description__details-item">
            <div class="description__details-item--icon">
              <img :src="require(`~/assets/images/emojis/wow.png`)" alt="" />
            </div>
            <div class="description__details-item--text">
              <h5>It's perfect for your busy lifestyle</h5>
              <p>
                You don't have to do anything at all. We'll handle everything
                from shopping to cooking to delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="container--menu">
      <section class="menu">
        <div class="menu__title">
          <h3>Current menu</h3>
          <p>{{ firstDateFormat }} - {{ lastDateFormat }}</p>
        </div>
        <div v-if="!allMeal.length" class="menu__loader">
          <Loader />
          <p>Loading menu...</p>
        </div>
        <nav v-if="tabs.length" class="menu__nav">
          <carousel
            class="carousel-container"
            :nav="false"
            :dots="false"
            :loop="false"
            :responsive="{
              0: {
                items: 1,
              },
              600: {
                items: 8,
              },
            }"
          >
            <template slot="prev"
              ><span class="prev">
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L1 9"
                    stroke="#61DB98"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg> </span
            ></template>

            <div
              v-for="(tab, index) in tabs"
              :key="index"
              class="menu__nav-item"
              @click.prevent="changeCategory(tab)"
            >
              <p :class="`${activeTabIndex === tab ? 'active' : ''}`">
                {{ tab }}
              </p>
              <svg
                v-if="activeTabIndex === tab"
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3" r="3" fill="#61DB98" />
              </svg>
            </div>

            <template slot="next">
              <span class="next">
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L1 9"
                    stroke="#61DB98"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg> </span
            ></template>
          </carousel>
        </nav>
        <div class="menu__list">
          <figure v-for="(item, i) in mealsInCategory" :key="i">
            <div v-if="!item.image" class="menu__list-img fallback">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1612250107/eden-website-v2/food-fallback_gnwkhu.png"
                :alt="item.name"
              />
            </div>
            <div v-else class="menu__list-img" :style="placeholderColorMix(i)">
              <img :src="optimizeImage(item.image, i)" :alt="item.name" />
            </div>
            <figcaption>
              <p>
                {{
                  `${item.name}${
                    item.main_sides ? ', ' + item.main_sides : ''
                  }${item.protein_sides ? ', ' + item.protein_sides : ''}${
                    item.other_sides ? ', ' + item.other_sides : ''
                  }`
                }}
              </p>
            </figcaption>
          </figure>
        </div>
        <button class="menu-btn" @click.prevent="scrollToTop('hero')">
         Use EDENLUNCH20 for 20% Off
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

    <modal v-if="showEmailModal" :show-modal="showEmailModal" class="modal">
      <div slot="header"></div>
      <div slot="body" class="modal__body">
        <div class="lead__modal">
          <div class="lead__modal-title"></div>
          <div class="lead__modal-body">
            <img
              class="email-img"
              :src="require(`~/assets/images/email-modal.svg`)"
              alt="email"
            />
            <h5>You’ve got mail!</h5>
            <p>
              We’ve sent an email to <b> {{ form.email }}</b
              >. Please check your mail for next steps.
            </p>
            <button
              type="submit"
              class="btn--submit"
              @click.prevent="openApp()"
            >
              Got it!
            </button>
          </div>
        </div>
      </div>
      <div slot="footer"></div>
    </modal>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import { placeholderColorMix } from '~/static/functions'
import { signupApi } from '~/request/all.api'
import currentMeal from '~/mixins/currentMeal'

export default {
  Loader: () => import('@/components/Loader.vue'),
  mixins: [validationMixin, currentMeal],
  layout: 'lead',
  validations: {
    form: {
      email: { required, email },
      name: { required },
      phone_number: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
    },
  },
  data() {
    return {
      testimonial: {
        name: 'Jinchūriki of the Spirit.',
        image: 'nicelegs',
        description: `Working on projects while <span style="color:#03A84E"> @ouredenlife </span> does the chores, talk about maximum productivity >>>>>>>>>>>>>> <br><br> Please I'm not lazy I just don't like stress besides it's called delegating for a reason 😁`,
        handle: 'ms_nicelegs',
        tweetLink:
          'https://twitter.com/ms_nicelegs/status/1276445141906141185?s=20',
      },
      form: {
        email: '',
        name: '',
        phone_number: '',
      },
      loading: false,
      defaultImage: 9,
      setInitialImage: null,
      setLastIndex: null,
      showEmailModal: false,
      responseMessage: '',
    }
  },
  mounted() {
    mixpanelTrackEvent('Lead page')
  },
  methods: {
    placeholderColorMix,
    scrollToTop(ref) {
      this.$refs[ref].scrollIntoView()
    },
    async getStarted() {
      this.$v.form.$touch()
      if (!this.$v.form.$error) {
        try {
          mixpanelTrackEvent('Sign up button clicked', 'Lead page')
          this.loading = true
          this.$intercom('update', {
            email: this.form.email,
            name: this.form.name,
            phone: this.form.phone_number,
          })
          const metadata = {
            email: this.form.email,
            name: this.form.name,
            phone: this.form.phone_number,
          }
          this.$intercom('trackEvent', 'lead-genaration-signup', metadata)

          const payload = {
            email: this.form.email,
            plan_details: {
              meal: {
                frequency: 'daily',
                item: null,
                qty: 1,
                service_day: ['mon-fri'],
                amount: 44000,
              },
            }
          }
          await signupApi(payload)
          this.showEmailModal = true
          this.loading = false
          this.responseMessage = ''
        } catch (error) {
          this.loading = false
          this.responseMessage = error.response.data.message
        }
      }
    },
    openApp() {
      this.form.email = ''
      this.form.name = ''
      this.form.phone_number = ''
      this.showEmailModal = !this.showEmailModal
      this.$v.$reset()
      this.goToApp()
    },
    goToApp() {
      mixpanelTrackEvent(`Get Started - Lead page`)
      const userAgent = navigator.userAgent || navigator.vendor || window.opera
      // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
        this.$router.push('/')
        return
      }

      if (/android/i.test(userAgent)) {
        window.open(
          ` https://play.google.com/store/apps/details?id=com.ouredenlife.app`
        )
        return
      }

      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.open(`https://apps.apple.com/us/app/eden-life/id1482373755?ls=1`)
        return
      }

      this.$router.push('/')
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
  background: var(--psuedo-image-1) center / 92px;
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
}
</style>
