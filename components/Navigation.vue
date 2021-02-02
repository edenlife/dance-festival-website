<template>
  <div id="navigation-container" class="container" :style="getColor()">
    <nav
      id="navigation-top"
      class="navigation"
      @mouseleave.stop="showService = false"
    >
      <nuxt-link :to="{ path: '/' }" class="navigation__logo">
        <img
          src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611230252/eden-website-v2/eden-logo_lcepc6.svg"
          alt="Eden logo"
        />
      </nuxt-link>
      <ul class="navigation__menu">
        <li class="fallback" @mouseenter.stop="showService = false"></li>
        <li>
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
                    @click="showService = false"
                    @mouseenter.stop="service = 'food'"
                    @mouseleave.stop="service = ''"
                  >
                    <nuxt-link
                      :to="{ path: '/food' }"
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
                    @click="showService = false"
                    @mouseenter.stop="service = 'laundry'"
                    @mouseleave.stop="service = ''"
                  >
                    <nuxt-link
                      :to="{ path: '/laundry' }"
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
                    @click="showService = false"
                    @mouseenter.stop="service = 'cleaning'"
                    @mouseleave.stop="service = ''"
                  >
                    <nuxt-link
                      :to="{ path: '/cleaning' }"
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
                    :class="{ gifting: service === 'gifting' }"
                    @click="showService = false"
                    @mouseenter.stop="service = 'gifting'"
                    @mouseleave.stop="service = ''"
                  >
                    <nuxt-link :to="{ path: '' }" class="service__list-item">
                      <span>🎁</span>
                      <h5>Gifting</h5>
                      <svg
                        v-if="service === 'gifting'"
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
        <li @mouseenter.stop="showService = false">
          <nuxt-link :to="{ path: '/companies' }" class="navigation__menu-item">
            Companies
          </nuxt-link>
        </li>
        <li>
          <a
            href="#"
            class="navigation__menu-item navigation__menu-link"
            @click.prevent="scrollTo('#get-the-app')"
            >Get Started</a
          >
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
                    @click.prevent="handleToggle()"
                  >
                    <nuxt-link :to="{ path: '/food' }" class="">
                      <span class="icon">🥘</span>
                      <span>Food</span>
                    </nuxt-link>
                  </li>
                  <li
                    class="menu--list-item laundry"
                    @click.prevent="handleToggle()"
                  >
                    <nuxt-link :to="{ path: '/laundry' }" class="">
                      <span class="icon">🧺</span>
                      <span>Laundry</span>
                    </nuxt-link>
                  </li>
                  <li
                    class="menu--list-item cleaning"
                    @click.prevent="handleToggle()"
                  >
                    <nuxt-link :to="{ path: '/cleaning' }" class="">
                      <span class="icon">🏠</span>
                      <span>Cleaning</span>
                    </nuxt-link>
                  </li>
                  <li
                    class="menu--list-item gifting"
                    @click.prevent="handleToggle()"
                  >
                    <nuxt-link :to="{ path: '' }" class="">
                      <span class="icon">🎁</span>
                      <span>Gifting</span>
                    </nuxt-link>
                  </li>
                </ul>
              </transition>
            </li>
            <li class="menu--list" @click.prevent="handleToggle()">
              <nuxt-link
                :to="{ path: '/companies' }"
                class="navigation__mobile-item"
              >
                Companies
              </nuxt-link>
            </li>
            <li class="menu--list" @click.prevent="handleToggle()">
              <a
                href="#"
                class="navigation__mobile-item navigation__mobile-link"
                @click.prevent="scrollTo('#get-the-app')"
                >Get Started</a
              >
            </li>
          </ul>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script>
import { scrollToApp } from '~/static/functions'

export default {
  name: 'Navigation',
  data() {
    return {
      service: '',
      showService: false,
      showNavbar: false,
      visible: false,
      window: {
        width: 0,
        height: 0,
      },
      currentRoute: '',
    }
  },
  watch: {
    $route() {
      const getRoute = this.$nuxt.$route.path
      this.currentRoute = getRoute.replace('/', '')
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
    this.currentRoute = this.$nuxt.$route.path
  },
  methods: {
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
    scrollTo(id) {
      if (this.currentRoute === '') {
        scrollToApp(id, `homepage - Navbar`)
      } else scrollToApp(id, `${this.currentRoute} - Navbar`)
    },
    serviceToggle() {
      this.visible = !this.visible
    },
    handleToggle() {
      const toggleButton = document.querySelector('.navigation__btn')
      toggleButton.classList.toggle('toggle')
      this.showNavbar = !this.showNavbar
    },
    getColor() {
      const path = this.$nuxt.$route.path
      if (path === '/') {
        return {
          'background-color': '#fff9f5',
        }
      } else if (path.includes('contact_us')) {
        return {
          'background-color': '#ffffff',
        }
      } else if (path.includes('faq')) {
        return {
          'background-color': '#F7FDFF',
        }
      } else if (path.includes('food')) {
        return {
          'background-color': '#F6FFFA',
        }
      } else if (path.includes('laundry')) {
        return {
          'background-color': '#F7F8FE',
        }
      } else if (path.includes('cleaning')) {
        return {
          'background-color': '#FFFCFA',
        }
      } else if (path.includes('about_us')) {
        return {
          'background-color': '#F7FDFF',
        }
      } else if (path.includes('companies')) {
        return {
          'background-color': '#F7F8FE',
        }
      } else if (path.includes('terms_and_condition')) {
        return {
          'background-color': '#ffffff',
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/_navigation.scss';
</style>
