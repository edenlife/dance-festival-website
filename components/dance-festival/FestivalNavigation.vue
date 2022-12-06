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
        <li>
          <button type="button" class="expand" @click.prevent="openCart">
            <CartIcon />
          </button>
        </li>
      </ul>
    </nav>
    <CartModal :is-open="cartOpen" @close="cartOpen = false" />
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
      // flagChange: false,
      showGiftBanner: false,
      routeUpdate: '',
      locations: '',
      lightLogo: false,
      cartOpen: false,
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
    // console.log(Object.keys(this.$nuxt.$route.params).length)
    // if (!Object.keys(this.$nuxt.$route.params).length) {
    //   this.redirectCountry()
    // }
    // console.log(this.$nuxt.$route)
    // this.redirectCountry()
  },
  methods: {
    // async redirectCountry() {
    //   let data = await fetch(`https://ipapi.co/json/`).then((res) => res.json())
    //   data = data
    //   if (data.country_code === 'GB') {
    //     console.log('Byeee')
    //     this.$router.push({ path: this.locationRoute('KE') })
    //   }
    // },
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
    locationRoute(country) {
      if (country === 'NG') {
        const pathArr = this.$nuxt.$route.path.split('/')
        if (this.$nuxt.$route.path.includes('ke')) {
          return `/${pathArr.slice(2).join('/')}`
        }
      }
      if (country === 'KE') {
        const pathArr = this.$nuxt.$route.path.split('/')
        if (!this.$nuxt.$route.path.includes('ke')) {
          return `/ke${pathArr.join('/')}`
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
    scrollTo(id) {
      if (this.currentRoute === '') {
        scrollToApp(id, `homepage - Navbar`)
      } else if (this.currentRoute.includes('easy')) {
        this.scrollToSection('#eden-easy-form', 'Get Started')
      } else scrollToApp(id, `${this.currentRoute} - Navbar`)
    },
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
