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
              <span>Support</span>
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
        <li
          style="margin-right: 30px"
          @mouseenter.stop="showService = false"
          @click="trackLink('FAQ')"
        >
          <nuxt-link :to="{ path: '/faq' }" class="navigation__menu-item">
            FAQs
          </nuxt-link>
        </li>
        <li style="margin-right: 30px">
          <el-input
            @change="debounce"
            class="nav-search"
            v-model="search"
            prefix-icon="el-icon-search"
            placeholder="Search"
            type="text"
          ></el-input>
        </li>
        <li>
          <button
            type="button"
            class="expand is-flex is-align-center"
            @click.prevent="openCart"
          >
            <CartIcon :count="cart.length" /> &nbsp; Cart
          </button>
        </li>
      </ul>
      <div class="navigation__btn navigation__btn-container is-align-center">
        <button
          style="display: flex; color: black"
          type="button"
          @click="cartOpen = true"
        >
          <CartIcon :count="cart.length" /> &nbsp; Cart
        </button>
        <div>
          <button class="ml-2" type="button" @click="handleToggle()">
            <div class="line line1"></div>
            <div class="line line2"></div>
            <div class="line line3"></div>
          </button>
        </div>
      </div>
      <transition name="slide">
        <div v-if="showNavbar" class="navigation__mobile">
          <ul class="menu">
            <li class="menu--list" @click.prevent="handleToggle('FAQ')">
              <nuxt-link :to="{ path: '/faq' }" class="navigation__mobile-item">
                FAQs
              </nuxt-link>
            </li>

            <li class="menu--list">
              <div class="navigation__mobile-item service">
                <div>Support</div>
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
                    <nuxt-link :to="{ path: '/contact_us' }">
                      Message
                    </nuxt-link>
                  </li>
                </ul>
              </transition>
            </li>
          </ul>
        </div>
      </transition>
    </nav>
    <div style="background: white; z-index: 999999999 !important">
      <CartModal :is-open="cartOpen" @close="cartOpen = false" />
    </div>
  </div>
</template>

<script>
import { scrollToApp, getNavigationColor } from '~/static/functions'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import CartIcon from '~/components/dance-festival/CartIcon.vue'
import CartModal from '~/components/dance-festival/CartModal.vue'

export default {
  name: 'Navigation',
  components: { CartIcon, CartModal },
  data() {
    return {
      service: '',
      search: '',
      showService: false,
      switchLocation: false,
      showNavbar: false,
      showMobileCart: true,
      showContact: false,
      visible: false,
      contactVisible: false,
      country: this.$store.getters.getCountry,
      window: {
        width: 0,
        height: 0,
      },
      currentRoute: '',
      // flagChange: false,
      showGiftBanner: false,
      routeUpdate: '',
      locations: '',
      lightLogo: false,
      cartOpen: false,
    }
  },
  computed: {
    giftLanding() {
      return (
        this.currentRoute.includes('gift') ||
        this.currentRoute.includes('ramadan')
      )
    },
    cart() {
      return this.$store.state.cart
    },
  },
  watch: {
    $route() {
      this.routeUpdate = this.$nuxt.$route.path
      this.currentRoute = this.routeUpdate.replace('/', '')
    },
    search(v) {
      this.$store.commit('updateSearch', v)
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
    // console.log(Object.keys(this.$nuxt.$route.params).length)
    // if (!Object.keys(this.$nuxt.$route.params).length) {
    //   this.redirectCountry()
    // }
    // console.log(this.$nuxt.$route)
    // this.redirectCountry()
  },
  methods: {
    debounce() {
      if (this.search) {
        if (this.$router.path !== '/search') {
          this.$router.push('/search')
        }
      }
    },
    getNavigationColor,
    openCart() {
      this.cartOpen = true
    },
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
      if (this.showNavbar && this.window.width > '768') {
        this.handleToggle()
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
    scrollTo(id) {
      if (this.currentRoute === '') {
        scrollToApp(id, `homepage - Navbar`)
      } else if (this.currentRoute.includes('easy')) {
        this.scrollToSection('#eden-easy-form', 'Get Started')
      } else scrollToApp(id, `${this.currentRoute} - Navbar`)
    },

    launchIntercom() {
      this.$intercom('show')
    },
    scrollToSection(id, service) {
      mixpanelTrackEvent(`${service} clicked - ${this.currentRoute} - Navbar`)
      const scrollToElement = document.querySelector(id)
      scrollToElement.scrollIntoView()
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

.is-flex {
  display: flex;
}

.is-align-center {
  align-items: center;
}

.ml-2 {
  margin-left: 20px;
}

.nav-search {
  height: 30px;
  ::v-deep .el-input__inner {
    height: 30px;
  }

  ::v-deep .el-input__prefix {
    top: -15%;
  }
}

.cart__card {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
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
