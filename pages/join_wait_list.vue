<template>
  <div>
    <div ref="hero" class="container--hero">
      <header class="header">
        <nuxt-link :to="{ path: '/' }" class="header__logo">
          <img
            src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611230252/eden-website-v2/eden-logo_lcepc6.svg"
            alt="Eden logo"
          />
        </nuxt-link>
      </header>
      <div class="hero">
        <div class="hero__title">
          <h1>
            <span class="pay"> *Pay Once.</span> <br />
            Get Lunch.<br />
            All Month.
          </h1>
          <p>
            Subscribe to our lunch plan and get chef-cooked meals delivered.
            <span class="bold">Monday to Friday. </span> You work so hard and
            deserve better.
            <br />
            <br />
            Start your Eden lunch plan today
            <span class="bold"> and get 20% off your first month.</span>
          </p>
          <img
            src="https://res.cloudinary.com/eden-life-inc/image/upload/v1619608257/eden-website-v2/Food_IMG_ptb5mk.png"
            alt=""
          />
        </div>
        <div class="hero__form">
          <div class="hero__form-title">
            <h3>Start Your Eden Life</h3>
            <p>
              Enter your details and we'll email you about the next steps. Let's
              go!
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
            <div class="hero__form-input">
              <label for="address">Address</label>
              <input
                id=""
                v-model="form.address"
                type="text"
                name=""
                placeholder="Where you’ll receive your meals"
                :class="{ 'has-error': $v.form.address.$error }"
              />
            </div>
            <button
              class="hero__form-btn"
              @click.prevent="sendUserInfoIntercom"
            >
              Get Started at 20% Off
            </button>
          </div>
          <p class="note">
            *₦1,760 per meal on our first month. (Delivery costs included)
          </p>
        </div>
      </div>
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
          Get Started at 20% Off
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
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import dayjs from 'dayjs'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import { placeholderColorMix } from '~/static/functions'
import { createLead } from '~/request/airtable'
export default {
  Loader: () => import('@/components/Loader.vue'),
  mixins: [validationMixin],
  layout: 'lead',
  validations: {
    form: {
      email: { required, email },
      name: { required },
      address: { required },
      phone_number: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
    },
  },
  data() {
    return {
      form: {
        email: '',
        name: '',
        address: '',
        phone_number: '',
      },
      tabs: [],
      activeTabIndex: null,
      firstDateFormat: null,
      lastDateFormat: null,
      allMeal: [],
      mealsInCategory: [],
      loading: false,
    }
  },
  mounted() {
    mixpanelTrackEvent('Lead page v1')
    this.fetchMeal()
  },
  methods: {
    placeholderColorMix,
    scrollToTop(ref) {
      this.$refs[ref].scrollIntoView()
    },
    optimizeImage(imgUrl, index) {
      const imageUrlTrim = imgUrl.substring(0, imgUrl.indexOf('/upload'))
      const imageFormat = imgUrl.substring(imgUrl.indexOf('/upload') + 7)
      if (index % 4 === 0) {
        return (
          imageUrlTrim +
          '/upload/f_auto,q_auto,e_shadow:100,x_1,y_80,co_rgb:E4E1DD10' +
          imageFormat
        )
      }
      if (index % 3 === 0) {
        return (
          imageUrlTrim +
          '/upload/f_auto,q_auto,e_shadow:100,x_1,y_80,co_rgb:DDE0E410' +
          imageFormat
        )
      }
      if (index % 2 === 0) {
        return (
          imageUrlTrim +
          '/upload/f_auto,q_auto,e_shadow:100,x_1,y_80,co_rgb:D7E3E510' +
          imageFormat
        )
      } else {
        return (
          imageUrlTrim +
          '/upload/f_auto,q_auto,e_shadow:100,x_1,y_80,co_rgb:D7E3E510' +
          imageFormat
        )
      }
    },
    fetchMeal() {
      this.lastDateFormat = dayjs(new Date())
        .endOf('week')
        .format('DD MMM YYYY')
      this.firstDateFormat = dayjs(new Date())
        .startOf('week')
        .format('DD MMM YYYY')
      const dateData = dayjs(new Date()).format('DD-MM-YYYY')
      // TODO change to staging
      fetch(
        `https://api.edenlife.ng/api/v2/meal/items/all?current_date=${dateData}`
      )
        .then((res) => res.json())
        .then((meals) => {
          this.allMeal = meals.data
          const combo = []
          this.allMeal.map((item) => {
            return item.preset_combos_full.map((el) => {
              if (el.visible === true) {
                combo.push({
                  name: item.name,
                  class_category: item.class_category,
                  ...el,
                })
              }
              return combo
            })
          })
          this.allMeal.map((item) => {
            if (
              item.class_category.includes('juice') &&
              item.combo_image_url !== null &&
              item.id !== 3864
            ) {
              combo.push({
                name: item.name,
                class_category: item.class_category,
                image: item.combo_image_url,
              })
            }
            return combo
          })
          this.allMeal.map((item) => {
            if (item.class_category.includes('smoothies')) {
              combo.push({
                name: item.name,
                class_category: item.class_category,
                image: item.image_url,
              })
            }
            return combo
          })
          this.allMeal = combo
          this.getMealCategories(this.allMeal)
        })
    },
    getMealCategories(items) {
      const mapped = items.reduce((acc, { class_category }) => {
        if (class_category) {
          const classes = class_category.split(',')
          acc.push(...classes)
        }
        return acc
      }, [])
      this.tabs = [...new Set(mapped)]
      this.activeTabIndex = this.tabs[0]
      this.changeCategory(this.activeTabIndex)
    },
    changeCategory(val) {
      this.activeTabIndex = val
      this.mealsInCategory = this.getMealsInEachCategory(this.allMeal, val)
    },
    getMealsInEachCategory(items, category) {
      return items.filter(
        ({ class_category }) =>
          class_category && class_category.includes(category)
      )
    },
    sendUserInfoIntercom() {
      // mixpanelTrackEvent('Sign up button clicked', 'Lead page v1')
      this.loading = true

      this.$v.form.$touch()
      if (!this.$v.form.$error) {
        const metadata = {
          Name: this.form.name,
          Email: this.form.email,
          Address: this.form.address,
          'Phone number': this.form.phone_number,
          Service: ['meal'],
        }

        createLead(metadata)

        setTimeout(() => {
          this.$nextTick(() => {
            this.$v.form.$reset()
            this.form.email = ''
            this.form.name = ''
            this.form.address = ''
            this.form.phone_number = ''
            this.loading = false
            // this.$router.push('/')
          })
        }, 500)
      }
    },

    openSocialMedia(name, url) {
      mixpanelTrackEvent(`${name} icon clicked - Lead page v1`)
      window.open(url, '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_edenlunch.scss';
</style>
