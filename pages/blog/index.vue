<template>
  <div class="container">
    <div class="container--hero">
      <header class="hero">
        <div class="hero__title">
          <h1>The Good Life</h1>
          <p>by Eden.</p>
        </div>
        <div class="hero__social">
          <a
            href="https://twitter.com/ouredenlife"
            target="_blank"
            @click.prevent="
              openSocialMedia('Twitter', 'https://twitter.com/ouredenlife')
            "
          >
            <img :src="require(`~/assets/images/twitter.svg`)" alt="twitter" />
          </a>
          <a
            href="https://instagram.com/ouredenlife"
            target="_blank"
            @click.prevent="
              openSocialMedia('Instagram', 'https://instagram.com/ouredenlife')
            "
          >
            <img
              :src="require(`~/assets/images/instagram.svg`)"
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
            <img
              :src="require(`~/assets/images/facebook.svg`)"
              alt="facebook"
            />
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
              :src="require(`~/assets/images/linkedin.svg`)"
              alt="linkedin"
            />
          </a>
        </div>
      </header>
    </div>
    <!--  -->
    <div class="container--nav">
      <nav class="nav">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          class="nav__item"
          @click.prevent="activeTabIndex = index"
        >
          <p :class="`${activeTabIndex === index ? 'active' : ''}`">
            {{ tab.title }}
          </p>
          <svg
            v-if="activeTabIndex === index"
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="3" cy="3" r="3" fill="#61DB98" />
          </svg>
        </div>
        <div class="nav__search">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.81019 11.7371C3.51629 13.3986 4.85347 14.7115 6.52757 15.387C8.20167 16.0625 10.0756 16.0453 11.737 15.3393C13.3984 14.6332 14.7113 13.296 15.3869 11.6219C16.0624 9.94778 16.0452 8.07389 15.3391 6.41245C14.633 4.75101 13.2958 3.43812 11.6217 2.76259C9.94765 2.08706 8.07376 2.10423 6.41232 2.81032C4.75088 3.51642 3.43799 4.8536 2.76246 6.5277C2.08693 8.2018 2.1041 10.0757 2.81019 11.7371V11.7371Z"
              stroke="#798B83"
              stroke-width="1.3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.1666 14.167L18.3333 18.3337"
              stroke="#798B83"
              stroke-width="1.3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <input id="" type="search" name="" placeholder="Search this blog" />
        </div>
      </nav>
    </div>
    <!--  -->
    <div class="container--posts">
      <div class="posts">
        <div class="posts__upper">
          <div class="posts__featured">
            <h3 class="posts__featured-title">Featured Post</h3>
            <figure class="posts__item">
              <img
                class="posts__featured-img posts__item-img"
                src="https://res-2.cloudinary.com/hstxdo55f/image/upload/q_auto/v1/ghost-blog-images/Meet-Garden-v3.0.png"
                alt=""
              />
              <figcaption class="posts__item-details posts__featured-details">
                <h5>Your 5 Senses' Easy Guide to Home Decor</h5>
                <p>
                  Learn home decor tips from your senses, that'll transform your
                  apartment into a true home.
                </p>
                <div class="posts__item-date">
                  <span>July 27, 2020</span>
                </div>
                <div class="posts__item-author">
                  <img
                    :src="require(`~/assets/images/customer-kofo.jpg`)"
                    alt=""
                  />
                  <p>Sonia Amadi</p>
                </div>
              </figcaption>
            </figure>
          </div>
          <div class="posts__recommended">
            <h3 class="posts__side-title">Highly Recommended</h3>
            <div v-for="(item, i) in 4" :key="i">
              <figure class="posts__side-item">
                <img
                  src="https://res-2.cloudinary.com/hstxdo55f/image/upload/q_auto/v1/ghost-blog-images/Meet-Garden-v3.0.png"
                  alt=""
                />
                <figcaption>
                  <p class="title">
                    WTAH?!: All the fees you need to know when house-...
                  </p>
                  <p class="date">June 30, 2020</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="posts__lower">
          <div class="posts__latest">
            <h3 class="posts__latest-title">Latest Posts</h3>
          </div>
          <div v-for="(item, i) in 5" :key="i">
            <figure class="posts__item">
              <img
                class="posts__featured-img posts__item-img"
                src="https://res-2.cloudinary.com/hstxdo55f/image/upload/q_auto/v1/ghost-blog-images/Meet-Garden-v3.0.png"
                alt=""
              />
              <figcaption class="posts__item-details">
                <h5>Your 5 Senses' Easy Guide to Home Decor</h5>
                <p>
                  Learn home decor tips from your senses, that'll transform your
                  apartment into a true home.
                </p>
                <div class="posts__item-date">
                  <nuxt-link to="/"> HOME </nuxt-link>
                  <span class="dot">&#8226;</span>
                  <span>July 27, 2020</span>
                </div>
                <div class="posts__item-author">
                  <img
                    :src="require(`~/assets/images/customer-kofo.jpg`)"
                    alt=""
                  />
                  <p>Sonia Amadi</p>
                </div>
              </figcaption>
            </figure>
          </div>
          <div class="posts__popular">
            <h3 class="posts__side-title">Popular</h3>
            <div v-for="(item, i) in 4" :key="i">
              <figure class="posts__side-item">
                <img
                  src="https://res-2.cloudinary.com/hstxdo55f/image/upload/q_auto/v1/ghost-blog-images/Meet-Garden-v3.0.png"
                  alt=""
                />
                <figcaption>
                  <p class="title">
                    WTAH?!: All the fees you need to know when house-...
                  </p>
                  <p class="date">June 30, 2020</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="container--subscibe">
      <div class="subscribe">
        <h3>Subscribe to the Good Life</h3>
        <p>
          Enter your email address below and we’ll update you when new articles
          are up!
        </p>
        <form class="form">
          <div class="form__input">
            <input
              id=""
              v-model="form.email"
              type="email"
              name=""
              placeholder="Email address"
              :class="{ 'has-error': $v.form.email.$error }"
            />
          </div>
          <button
            type="submit"
            class="form__btn"
            :disabled="loading"
            @click.prevent="subscribe"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'

export default {
  mixins: [validationMixin],
  beforeRouteEnter(to, from, next) {
    const tab = to.hash.replace('#', '')
    next((vm) => {
      vm.activeTabIndex = 0
      vm.tabs.forEach((item, index) => {
        if (item.id === tab) {
          vm.activeTabIndex = index
        }
      })
    })
  },
  beforeRouteUpdate(to, from, next) {
    const tab = to.hash.replace('#', '')
    this.activeTabIndex = 0
    this.tabs.forEach((item, index) => {
      if (item.id === tab) {
        this.activeTabIndex = index
      }
    })
    next()
  },
  data() {
    return {
      activeTabIndex: null,
      tabs: [
        { id: 1, title: 'All' },
        { id: 2, title: 'Home' },
        { id: 3, title: 'Food' },
        { id: 4, title: 'Eden 101' },
        { id: 5, title: 'Life is Good' },
      ],
      loading: false,
      form: {
        email: null,
      },
      showSuccessModal: false,
      showFailedModal: false,
    }
  },
  validations: {
    form: {
      email: { required, email },
    },
  },
  methods: {
    openSocialMedia(name, url) {
      mixpanelTrackEvent(`${name} icon clicked - Blog`)
      window.open(url, '_blank')
    },
    subscribe() {
      this.$v.form.$touch()
      // if (!this.$v.form.$error) {
      //   this.loading = true
      //   fetch('https://api-staging.edenlife.ng/api/v3/website/faqpage', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(this.form),
      //   })
      //     .then((response) => response.json())
      //     .then((data) => {
      //       console.log('Success:', data)
      //       Object.keys(this.form).forEach((key) => (this.form[key] = ''))
      //       this.$nextTick(() => {
      //         this.$v.form.$reset()
      //       })
      //       this.showSuccessModal = true
      //       this.loading = false
      //       mixpanelTrackEvent('subscribe form - blog page')
      //     })
      //     .catch((error) => {
      //       console.error('Error:', error)
      //       this.loading = false
      //       this.showFailedModal = true
      //     })
      // }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_blog.scss';
</style>
