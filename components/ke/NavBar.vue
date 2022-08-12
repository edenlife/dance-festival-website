<template>
  <div
    id="navigation-container"
    class="container"
    :style="getNavigationColor(routeUpdate)"
  >
    <nav
      id="navigation-top"
      class="navigation"
      @mouseleave.stop="showService = false"
    >
      <nuxt-link :to="{ path: '/ke/' }" class="navigation__logo">
        <img
          src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611230252/eden-website-v2/eden-logo_lcepc6.svg"
          alt="Eden logo"
        />
      </nuxt-link>

      <ul class="navigation__menu">
        <li
          v-if="serviceNav"
          class="fallback"
          @mouseenter.stop="showService = false"
        ></li>
        <li @click="trackLink('Contact us')">
          <nuxt-link
            :to="{ path: '/ke/contact_us/' }"
            class="navigation__menu-item"
          >
            Contact Us
          </nuxt-link>
        </li>
        <li v-if="serviceNav">
          <div class="navigation__menu-item navigation__menu-service">
            <button
              type="button"
              class="btn"
              :class="{ active: showService }"
              @mouseenter.stop="showService = true"
            >
              <span>Services</span>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <transition name="fade">
              <div
                v-if="showService"
                class="service"
                @mouseleave.stop="showService = false"
              >
                <div class="service__title">
                  <h3>Eden Services</h3>
                  <p>Convenience you can depend on. Always.</p>
                </div>
                <ul class="service__list">
                  <li
                    :class="{ food: service === 'food' }"
                    @click="trackLink('Food')"
                    @mouseenter.stop="service = 'food'"
                    @mouseleave.stop="service = ''"
                  >
                    <nuxt-link
                      :to="{ path: '/ke/food/' }"
                      class="service__list-item"
                    >
                      <span>🥘</span>
                      <h5>Food</h5>
                      <svg
                        v-if="service === 'food'"
                        width="15"
                        height="10"
                        viewBox="0 0 15 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5L13 5"
                          stroke="#03A84E"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 9L14 5L10 1"
                          stroke="#03A84E"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <svg
                        v-else
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 9L5 5L1 1"
                          stroke="#798B83"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </nuxt-link>
                  </li>
                  <li
                    :class="{ laundry: service === 'laundry' }"
                    @click="trackLink('Laundry')"
                    @mouseenter.stop="service = 'laundry'"
                    @mouseleave.stop="service = ''"
                  >
                    <nuxt-link
                      :to="{ path: '/ke/laundry/' }"
                      class="service__list-item"
                    >
                      <span>🧺</span>
                      <h5>Laundry</h5>
                      <svg
                        v-if="service === 'laundry'"
                        width="15"
                        height="10"
                        viewBox="0 0 15 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5L13 5"
                          stroke="#7189FF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 9L14 5L10 1"
                          stroke="#7189FF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <svg
                        v-else
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 9L5 5L1 1"
                          stroke="#798B83"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </nuxt-link>
                  </li>
                  <li
                    :class="{ cleaning: service === 'cleaning' }"
                    @click="trackLink('Cleaning')"
                    @mouseenter.stop="service = 'cleaning'"
                    @mouseleave.stop="service = ''"
                  >
                    <nuxt-link
                      :to="{ path: '/ke/cleaning/' }"
                      class="service__list-item"
                    >
                      <span>🏠</span>
                      <h5>Cleaning</h5>
                      <svg
                        v-if="service === 'cleaning'"
                        width="15"
                        height="10"
                        viewBox="0 0 15 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5L13 5"
                          stroke="#FF9D00"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 9L14 5L10 1"
                          stroke="#FF9D00"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <svg
                        v-else
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 9L5 5L1 1"
                          stroke="#798B83"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </nuxt-link>
                  </li>
                  <li
                    :class="{ beauty: service === 'beauty' }"
                    @click="trackLink('Beauty')"
                    @mouseenter.stop="service = 'beauty'"
                    @mouseleave.stop="service = ''"
                  >
                    <nuxt-link
                      :to="{ path: '/ke/beauty/' }"
                      class="service__list-item"
                    >
                      <span>💅</span>
                      <h5>Beauty</h5>
                      <svg
                        v-if="service === 'beauty'"
                        width="15"
                        height="10"
                        viewBox="0 0 15 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5L13 5"
                          stroke="#46C9E5"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 9L14 5L10 1"
                          stroke="#46C9E5"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <svg
                        v-else
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 9L5 5L1 1"
                          stroke="#798B83"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </transition>
          </div>
        </li>
        <li @click="trackLink('Pricing')">
          <nuxt-link
            :to="{ path: '/ke/pricing/' }"
            class="navigation__menu-item"
          >
            Pricing
          </nuxt-link>
        </li>
        <li>
          <button
            type="button"
            class="header__button-solid navigation__menu-item"
            @click.prevent="greenhouseSignUp()"
          >
            Get Started
          </button>
        </li>
        <li>
          <div class="navigation__menu-item navigation__menu-service">
            <button
              type="button"
              class="btn"
              :class="{ active: switchLocation }"
              @mouseenter.stop="
                switchLocation = true
                showService = false
              "
            >
              <img
                :src="require(`~/assets/images/greenhouse/flags/KE.svg`)"
                alt="flag"
              />
              <i class="el-icon-arrow-down el-icon--right"></i>
            </button>
            <transition name="fade">
              <div
                v-if="switchLocation"
                class="service location"
                @mouseleave.stop="switchLocation = false"
              >
                <ul class="service__title">
                  <li
                    :class="{ nigeria: locations === 'nigeria' }"
                    @click="trackLink('Nigeria')"
                    @mouseenter.stop="locations = 'nigeria'"
                    @mouseleave.stop="locations = ''"
                  >
                    <nuxt-link :to="{ path: '/' }" class="service__list-item">
                      <span>🇳🇬</span>
                      <h5>Nigeria</h5>
                      <svg
                        v-if="locations === 'nigeria'"
                        width="15"
                        height="10"
                        viewBox="0 0 15 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5L13 5"
                          stroke="#7189FF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 9L14 5L10 1"
                          stroke="#7189FF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <svg
                        v-else
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 9L5 5L1 1"
                          stroke="#798B83"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </nuxt-link>
                  </li>
                  <li
                    :class="{ kenya: locations === 'kenya' }"
                    @click="trackLink('Cleaning')"
                    @mouseenter.stop="locations = 'kenya'"
                    @mouseleave.stop="locations = ''"
                  >
                    <nuxt-link :to="{ path: '/ke' }" class="service__list-item">
                      <span>🇰🇪</span>
                      <h5>Kenya</h5>
                      <svg
                        v-if="locations === 'kenya'"
                        width="15"
                        height="10"
                        viewBox="0 0 15 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5L13 5"
                          stroke="#FF9D00"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 9L14 5L10 1"
                          stroke="#FF9D00"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <svg
                        v-else
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 9L5 5L1 1"
                          stroke="#798B83"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </transition>
          </div>
        </li>
      </ul>
      <button class="navigation__btn" type="button" @click="handleToggle()">
        <div class="line line1"></div>
        <div class="line line2"></div>
        <div class="line line3"></div>
      </button>
      <transition name="slide">
        <div v-if="showNavbar" class="navigation__mobile">
          <ul class="menu">
            <li class="menu--list">
              <div class="navigation__mobile-item service">
                <div>Service</div>
                <div class="service--icon" @click="serviceToggle()">
                  <svg
                    class="arrow"
                    :class="{ expanded: visible }"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#21312A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <transition name="slide-fade">
                <ul v-if="visible" class="">
                  <li
                    class="menu--list-item food"
                    @click.prevent="handleToggle('Food')"
                  >
                    <nuxt-link :to="{ path: '/ke/food/' }" class="">
                      <span class="icon">🥘</span>
                      <span>Food</span>
                    </nuxt-link>
                  </li>
                  <li
                    class="menu--list-item laundry"
                    @click.prevent="handleToggle('Laundry')"
                  >
                    <nuxt-link :to="{ path: '/ke/laundry/' }" class="">
                      <span class="icon">🧺</span>
                      <span>Laundry</span>
                    </nuxt-link>
                  </li>
                  <li
                    class="menu--list-item cleaning"
                    @click.prevent="handleToggle('Cleaning')"
                  >
                    <nuxt-link :to="{ path: '/ke/cleaning/' }" class="">
                      <span class="icon">🏠</span>
                      <span>Cleaning</span>
                    </nuxt-link>
                  </li>
                  <li
                    class="menu--list-item gifting"
                    @click.prevent="handleToggle('beauty')"
                  >
                    <nuxt-link :to="{ path: '/ke/beauty/' }" class="">
                      <span class="icon">💅</span>
                      <span>Beauty</span>
                    </nuxt-link>
                  </li>
                </ul>
              </transition>
            </li>
            <li class="menu--list" @click.prevent="handleToggle('Pricing')">
              <nuxt-link
                :to="{ path: '/ke/pricing/' }"
                class="navigation__mobile-item"
              >
                Pricing
              </nuxt-link>
            </li>
            <li class="menu--list">
              <div class="navigation__mobile-item service">
                <div>Contact Us</div>
                <div class="service--icon" @click="contactToggle()">
                  <svg
                    class="arrow"
                    :class="{ expanded: contactVisible }"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#21312A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <transition name="slide-fade">
                <ul v-if="contactVisible" class="">
                  <li
                    class="menu--list-item contact"
                    @click="trackLink('Contact Us')"
                  >
                    <a href="tel:+254723636363"> +254 723 636 363</a>
                  </li>
                </ul>
              </transition>
            </li>
            <li class="menu--list">
              <div class="navigation__mobile-item service">
                <div>
                  <span class="icon location-icon">🇰🇪</span
                  >Kenya
                </div>
                <div class="service--icon" @click="locationToggle()">
                  <svg
                    class="arrow"
                    :class="{ expanded: locationVisible }"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#21312A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <transition name="slide-fade">
                <ul v-if="locationVisible" class="">
                  <li
                    class="menu--list-item"
                    @click.prevent="handleToggle('Nigeria')"
                  >
                    <nuxt-link :to="{ path: '/' }" class="">
                      <span>🇳🇬</span>
                      <span>Nigeria</span>
                    </nuxt-link>
                  </li>
                  <li
                    class="menu--list-item"
                    @click.prevent="handleToggle('Kenya')"
                  >
                    <nuxt-link :to="{ path: '/ke/' }" class="">
                      <span>🇰🇪</span>
                      <span>Kenya</span>
                    </nuxt-link>
                  </li>
                </ul>
              </transition>
            </li>
            <li class="menu--list" @click.prevent="handleToggle()">
              <nuxt-link
                @click.prevent="greenhouseSignUp()"
                class="navigation__mobile-item navigation__mobile-link"
              >
                {{
                  currentRoute === 'eden_means_easy'
                    ? 'Sign Up Now'
                    : 'Get Started'
                }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </transition>
    </nav>

    <wait-list-form
      v-if="showWaitListForm"
      :showWaitListForm="showWaitListForm"
      @hideform="showWaitListForm = false"
      @showsuccess="showSuccessModal = true"
    />

    <modal v-if="showSuccessModal" :show-modal="showSuccessModal" class="modal">
      <div slot="header"></div>
      <div slot="body" class="modal__body">
        <div class="company__modal">
          <div class="company__modal-title">
            <button class="btn btn--success" @click="showSuccessModal = false">
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
              :src="require(`~/assets/images/successful.svg`)"
              alt="failed"
            />
            <h5>{{ modalText }} Submitted</h5>
            <p>
              You have successfully submitted your {{ modalText }}.
              <button
                type="submit"
                class="btn--submit"
                :disabled="loading"
                @click.prevent="closeModal"
              >
                Okay, got it!
              </button>
            </p>
          </div>
        </div>
      </div>
      <div slot="footer"></div>
    </modal>
  </div>
</template>

<script>
import { scrollToApp, getNavigationColor } from '~/static/functions'
import { mixpanelTrackEvent } from '~/plugins/ke/mixpanel'

export default {
  name: 'Navigation',
  components: {
    Modal: () => import('@/components/Modal.vue'),
    WaitListForm: () => import('@/components/ke/WaitListForm.vue'),
  },
  data() {
    return {
      modalText: 'information',
      service: '',
      showService: false,
      switchLocation: false,
      showNavbar: false,
      visible: false,
      window: {
        width: 0,
        height: 0,
      },
      currentRoute: '',
      locations: '',
      contactVisible: false,
      locationVisible: false,
      routeUpdate: '',
      showWaitListForm: false,
      showSuccessModal: false,
      loading: false,
    }
  },
  computed: {
    serviceNav() {
      if (
        this.currentRoute === 'laundry' ||
        this.currentRoute === 'cleaning' ||
        this.currentRoute === 'food' ||
        this.currentRoute === 'beauty'
      ) {
        return true
      } else {
        return true
      }
    },
    authenticated() {
      return !!this.$store.getters.getGreenhouseToken
    },
  },
  watch: {
    $route() {
      this.routeUpdate = this.$nuxt.$route.path
      this.currentRoute = this.routeUpdate.replace('/', '')
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
    const getRoute = this.$nuxt.$route.path
    this.currentRoute = getRoute.replace('/', '')
  },
  methods: {
    getNavigationColor,
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
      if (this.showNavbar && this.window.width > '768') {
        this.handleToggle()
      }
    },
    handleScroll() {
      if (window.scrollY > 20) {
        document.querySelector('#navigation-container').className =
          'container scroll'
      } else {
        document.querySelector('#navigation-container').className = 'container'
      }
    },
    trackLink(service) {
      this.showService = false
      mixpanelTrackEvent(`${service} clicked - ${this.currentRoute} - Navbar`)
    },
    scrollTo(id) {
      console.log(id)
      if (this.currentRoute === '') {
        scrollToApp(id, `homepage - Navbar`)
      } else scrollToApp(id, `${this.currentRoute} - Navbar`)
    },
    scrollToSection(id, service) {
      mixpanelTrackEvent(`${service} clicked - ${this.currentRoute} - Navbar`)
      const scrollToElement = document.querySelector(id)
      scrollToElement.scrollIntoView()
    },
    serviceToggle() {
      this.visible = !this.visible
    },
    contactToggle() {
      this.contactVisible = !this.contactVisible
    },
    locationToggle() {
      this.locationVisible = !this.locationVisible
    },
    greenhouseSignUp() {
      mixpanelTrackEvent(`Get Started Clicked - homepage - Navbar KE `)
      if (this.authenticated) {
        this.$router.push('/home')
      } else {
        this.$router.push({ name: 'signup', query: this.$route.query })
      }
    },
    handleToggle(menu) {
      if (menu) {
        mixpanelTrackEvent(`${menu} clicked - ${this.currentRoute} - Navbar`)
      }

      const toggleButton = document.querySelector('.navigation__btn')
      toggleButton.classList.toggle('toggle')
      this.showNavbar = !this.showNavbar
    },

    getEarlyAccess() {
      this.showWaitListForm = true
      this.modalText = 'information'
    },
    closeModal() {
      this.showSuccessModal = !this.showSuccessModal
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/ke/_navigation.scss';
@import '@/assets/scss/pages/ke/_waitlist.scss';

.el-icon-arrow-down {
  margin-left: 5px;
}
.location {
  width: 200px !important;
  color: black;
  &.service {
    &::after {
      left: 75% !important;
    }
  }
  .service__title {
    list-style: none;
    .service__list-item {
      padding: 5px 5px $gap 5px;
    }
  }
}
.location-icon {
  margin-right: 5px;
}
</style>
