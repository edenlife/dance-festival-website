<template>
  <div
    id="navigation-container"
    class="container"
    :class="{ 'primary-bg': giftLanding }"
    :style="getNavigationColor(routeUpdate)"
  >
    <nav
      id="navigation-top"
      class="navigation"
      @mouseleave.stop="showService = false"
    >
      <nuxt-link :to="{ path: '/' }" class="navigation__logo">
        <img
          v-if="lightLogo"
          src="https://res.cloudinary.com/eden-life-inc/image/upload/v1639536164/eden-logo-white_miwuzx.svg"
          alt="Eden logo"
        />
        <img
          v-else
          src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611230252/eden-website-v2/eden-logo_lcepc6.svg"
          alt="Eden logo"
        />
      </nuxt-link>
      <ul class="navigation__menu">
        <li
          v-if="serviceNav"
          @mouseenter.stop="showService = false"
          @click="trackLink('Eden Means ~Easy')"
        >
          <nuxt-link
            :to="{ path: '/eden_means_easy/' }"
            class="navigation__menu-item"
          >
            Why Eden?
          </nuxt-link>
        </li>

        <li v-if="serviceNav">
          <div class="navigation__menu-item navigation__menu-service">
            <button
              type="button"
              class="btn"
              :class="{ active: showService }"
              @mouseenter.stop="
                showService = true
                showContact = false
              "
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
                      :to="{ path: '/food/' }"
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
                      :to="{ path: '/laundry/' }"
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
                      :to="{ path: '/cleaning/' }"
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
                </ul>
              </div>
            </transition>
          </div>
        </li>
        <li
          v-if="serviceNav && !hideCompanies"
          @mouseenter.stop="showService = false"
          @click="trackLink('Companies')"
        >
          <nuxt-link
            :to="{ path: '/companies/' }"
            class="navigation__menu-item"
          >
            Companies
          </nuxt-link>
        </li>
        <li
          v-if="serviceNav"
          @mouseenter.stop="showService = false"
          @click="trackLink('Pricing')"
        >
          <nuxt-link :to="{ path: '/pricing/' }" class="navigation__menu-item">
            Pricing
          </nuxt-link>
        </li>
        <!-- food -->
        <li v-if="currentRoute === 'food'">
          <button
            class="navigation__menu-item"
            @click.prevent="scrollToSection('#menu-options', 'Menu')"
          >
            Menu
          </button>
        </li>
        <!-- laundry -->
        <li v-if="currentRoute === 'laundry'">
          <button
            class="navigation__menu-item"
            @click.prevent="scrollToSection('#laundry-plan', 'Laundry plans')"
          >
            Laundry Plans
          </button>
        </li>
        <li v-if="currentRoute === 'laundry_leads'">
          <nuxt-link
            :to="{ path: '/eden_means_easy/' }"
            class="navigation__mobile-item"
          >
            Why Eden?
          </nuxt-link>
        </li>
        <!-- cleaning -->
        <li v-if="currentRoute === 'cleaning'">
          <button
            class="navigation__menu-item"
            @click.prevent="scrollToSection('#cleaning-plan', 'Cleaning plans')"
          >
            Cleaning Plans
          </button>
        </li>

        <li v-if="currentRoute !== 'contact_us'">
          <div class="navigation__menu-item navigation__menu-service">
            <button
              type="button"
              class="btn"
              :class="{ active: showContact }"
              @mouseenter.stop="
                showContact = true
                showService = false
              "
            >
              <span>Contact Us</span>
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
                v-if="showContact"
                class="service"
                @mouseleave.stop="showContact = false"
              >
                <div class="service__title contact">
                  <h3>Get Help</h3>
                  <p>Call or send us a message and we'll respond soonest.</p>
                </div>
                <ul class="service__list contact">
                  <li
                    class="navigation__menu-item"
                    @click="trackLink('Contact Us')"
                  >
                    <a href="tel:+2348134254074"> +2348134254074</a>
                  </li>
                  <li
                    class="navigation__menu-item contact"
                    @click="trackLink('Contact Us')"
                  >
                    <a href="https://wa.me/2348134254074"> Whatsapp</a>
                  </li>
                  <li
                    class="navigation__menu-item trigger-chat"
                    @click.prevent="launchIntercom()"
                  >
                    Chat
                  </li>
                </ul>
              </div>
            </transition>
          </div>
        </li>
        <li>
          <a
            id="get-started"
            href="#"
            class="navigation__menu-item navigation__menu-link"
            :class="{ 'primary-red': currentRoute === 'gift' }"
            @click.prevent="greenhouseSignUp()"
          >
            {{
              currentRoute === 'eden_means_easy' ? 'Sign Up Now' : 'Get Started'
            }}
          </a>
        </li>
        <li>
          <div class="navigation__menu-item navigation__menu-service">
            <button
              type="button"
              class="btn"
              :class="{ active: switchLocation }"
              @mouseenter.stop="
                switchLocation = true
                showContact = false
                showService = false
              "
            >
              <img
                :src="require(`~/assets/images/greenhouse/flags/NG.svg`)"
                alt="flag"
              />
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
                v-if="switchLocation"
                class="service location"
                @mouseleave.stop="
                  switchLocation = false
                  showContact = false
                  showService = false
                "
              >
                <ul class="service__title">
                  <li
                    :class="{ nigeria: locations === 'nigeria' }"
                    @mouseenter.stop="locations = 'nigeria'"
                    @mouseleave.stop="locations = ''"
                  >
                    <nuxt-link
                      :to="{ path: locationRoute('NG') }"
                      class="service__list-item"
                    >
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
                    @mouseenter.stop="locations = 'kenya'"
                    @mouseleave.stop="locations = ''"
                  >
                    <nuxt-link
                      :to="{ path: locationRoute('KE') }"
                      class="service__list-item"
                    >
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
      <div
        class="navigation__menu-item navigation__menu-service navigation__btn"
      >
        <button
          type="button"
          class="btn"
          :class="{ active: switchLocation }"
          @mouseenter.stop="
            switchLocation = true
            showContact = false
            showService = false
          "
        >
          <img
            :src="require(`~/assets/images/greenhouse/flags/NG.svg`)"
            alt="flag"
          />
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
            v-if="switchLocation"
            class="service location"
            @mouseleave.stop="
              switchLocation = false
              showContact = false
              showService = false
            "
          >
            <ul class="service__title">
              <li
                :class="{ nigeria: locations === 'nigeria' }"
                @mouseenter.stop="locations = 'nigeria'"
                @mouseleave.stop="locations = ''"
              >
                <nuxt-link
                  :to="{ path: locationRoute('NG') }"
                  class="service__list-item"
                >
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
                @mouseenter.stop="locations = 'kenya'"
                @mouseleave.stop="locations = ''"
              >
                <nuxt-link
                  :to="{ path: locationRoute('KE') }"
                  class="service__list-item"
                >
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
      <transition name="slide">
        <div v-if="showNavbar" class="navigation__mobile">
          <ul class="menu">
            <li
              class="menu--list"
              @click.prevent="handleToggle('Eden Means Easy')"
            >
              <nuxt-link
                :to="{ path: '/eden_means_easy/' }"
                class="navigation__mobile-item"
              >
                Why Eden?
              </nuxt-link>
            </li>
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
                    <nuxt-link :to="{ path: '/food/' }" class="">
                      <span class="icon">🥘</span>
                      <span>Food</span>
                    </nuxt-link>
                  </li>
                  <li
                    class="menu--list-item laundry"
                    @click.prevent="handleToggle('Laundry')"
                  >
                    <nuxt-link :to="{ path: '/laundry/' }" class="">
                      <span class="icon">🧺</span>
                      <span>Laundry</span>
                    </nuxt-link>
                  </li>
                  <li
                    class="menu--list-item cleaning"
                    @click.prevent="handleToggle('Cleaning')"
                  >
                    <nuxt-link :to="{ path: '/cleaning/' }" class="">
                      <span class="icon">🏠</span>
                      <span>Cleaning</span>
                    </nuxt-link>
                  </li>
                </ul>
              </transition>
            </li>
            <li
              v-if="!hideCompanies"
              class="menu--list"
              @click.prevent="handleToggle('Companies')"
            >
              <nuxt-link
                :to="{ path: '/companies/' }"
                class="navigation__mobile-item"
              >
                Companies
              </nuxt-link>
            </li>
            <li class="menu--list" @click.prevent="handleToggle('Pricing')">
              <nuxt-link
                :to="{ path: '/pricing/' }"
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
                    <a href="tel:+2348134254074"> +2348134254074</a>
                  </li>
                  <li
                    class="menu--list-item contact"
                    @click="trackLink('Contact Us')"
                  >
                    <a href="https://wa.me/2348134254074"> Whatsapp</a>
                  </li>
                  <li
                    class="menu--list-item contact trigger-chat"
                    @click.prevent="
                      handleToggle('Contact Us')
                      launchIntercom()
                    "
                  >
                    <nuxt-link :to="{ path: '/contact_us/' }">
                      Message
                    </nuxt-link>
                  </li>
                </ul>
              </transition>
            </li>
            <li class="menu--list" @click.prevent="handleToggle()">
              <a
                href="#"
                class="navigation__mobile-item navigation__mobile-link"
                @click.prevent="greenhouseSignUp()"
              >
                {{
                  currentRoute === 'eden_means_easy'
                    ? 'Sign Up Now'
                    : 'Get Started'
                }}
              </a>
            </li>
          </ul>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script>
import { scrollToApp, getNavigationColor } from '~/static/functions'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'

export default {
  name: 'Navigation',
  data() {
    return {
      service: '',
      showService: false,
      switchLocation: false,
      showNavbar: false,
      showContact: false,
      visible: false,
      contactVisible: false,
      country: this.$store.getters.getCountry,
      window: {
        width: 0,
        height: 0,
      },
      currentRoute: '',
      showGiftBanner: false,
      routeUpdate: '',
      locations: '',
      lightLogo: false,
    }
  },
  computed: {
    serviceNav() {
      if (
        this.currentRoute === 'laundry' ||
        this.currentRoute === 'cleaning' ||
        this.currentRoute === 'food'
      ) {
        return false
      } else {
        return true
      }
    },
    hideCompanies() {
      if (this.currentRoute === 'eden_means_easy') {
        return true
      } else {
        return false
      }
    },
    giftLanding() {
      return (
        this.currentRoute.includes('gift') ||
        this.currentRoute.includes('ramadan')
      )
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
    const navigation = document.querySelector('#navigation-container')
    if (this.giftLanding) {
      document.querySelector('#get-started').classList.add('primary-red')
      navigation.classList.add('primary-bg')
      this.lightLogo = true
    }
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
    locationRoute(country) {
      if (country === 'NG') {
        const pathArr = this.$nuxt.$route.path.split('/')
        if (this.$nuxt.$route.path.includes('ke')) {
          return `/${pathArr.slice(2).join('/')}`
          console.log(`/${pathArr.slice(2).join('/')}`)
        }
      }
      if (country === 'KE') {
        const pathArr = this.$nuxt.$route.path.split('/')
        if (!this.$nuxt.$route.path.includes('ke')) {
          return `/ke${pathArr.join('/')}`
          console.log(`/${pathArr.slice(2).join('/')}`)
        }
      }
    },
    handleScroll() {
      const navigation = document.querySelector('#navigation-container')
      const getStarted = document.querySelector('#get-started')
      if (window.scrollY > 20) {
        navigation.className = 'container scroll'
        if (navigation.classList.contains('primary-bg'))
          navigation.classList.remove('primary-bg')
        if (getStarted.classList.contains('primary-red'))
          getStarted.classList.remove('primary-red')
        this.lightLogo = false
      } else {
        navigation.className = 'container'
        if (this.giftLanding) {
          navigation.classList.add('primary-bg')
          getStarted.classList.add('primary-red')
          this.lightLogo = true
        }
      }
    },
    trackLink(service) {
      this.showService = false
      mixpanelTrackEvent(`${service} clicked - ${this.currentRoute} - Navbar`)
    },
    // scrollTo(id) {
    //   if (this.currentRoute === '') {
    //     scrollToApp(id, `homepage - Navbar`)
    //   } else if (this.currentRoute.includes('easy')) {
    //     this.scrollToSection('#eden-easy-form', 'Get Started')
    //   } else scrollToApp(id, `${this.currentRoute} - Navbar`)
    // },
    greenhouseSignUp() {
      if (this.currentRoute === '') {
        mixpanelTrackEvent(`Get Started Clicked - homepage - Navbar `)
      } else if (this.currentRoute.includes('easy')) {
        this.scrollToSection('#eden-easy-form', 'Get Started')
      } else
        mixpanelTrackEvent(
          `Get Started clicked - ${this.currentRoute} - Navbar`
        )
      if (this.authenticated) {
        this.$router.push('/home')
      } else {
        this.$router.push({ name: 'signup', query: this.$route.query })
      }
    },
    launchIntercom() {
      this.$intercom('show')
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
    handleToggle(menu) {
      if (menu) {
        mixpanelTrackEvent(`${menu} clicked - ${this.currentRoute} - Navbar`)
      }

      const toggleButton = document.querySelector('.navigation__btn')
      toggleButton.classList.toggle('toggle')
      this.showNavbar = !this.showNavbar
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/_navigation.scss';
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
.navigation__btn {
  &.navigation__menu-item {
    right: 2%;
  }
}

@media only screen and (max-width: 48em) {
  .location {
    width: 160px !important;
  }
}
</style>
