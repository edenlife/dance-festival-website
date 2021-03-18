<template>
  <div class="container">
    <div class="container--hero">
      <header :style="getColor()" class="hero">
        <div class="hero__date">
          <nuxt-link to="/"> HOME </nuxt-link>
          <span class="dot">&#8226;</span>
          <span>July 27, 2020</span>
        </div>
        <h1 class="hero__title">
          Essential First-Date Questions You Need to Ask Your Landlord
        </h1>
        <div class="hero__author">
          <img :src="require(`~/assets/images/customer-kofo.jpg`)" alt="" />
          <p>Sonia Amadi</p>
        </div>
        <div class="hero__featured">
          <img
            src="https://res-2.cloudinary.com/hstxdo55f/image/upload/q_auto/v1/ghost-blog-images/Meet-Garden-v3.0.png"
            alt=""
          />
        </div>
      </header>
    </div>
    <!--  -->
    <div class="container--content">
      <div class="content">
        <div class="content__social">
          <p class="content__social-title">Share</p>
          <a
            class="link"
            href="https://twitter.com/ouredenlife"
            target="_blank"
            @click.prevent="
              openSocialMedia('Twitter', 'https://twitter.com/ouredenlife')
            "
          >
            <svg
              class="link--twitter"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.1621 5.65593C21.3986 5.99362 20.589 6.2154 19.7601 6.31393C20.6338 5.79136 21.2878 4.96894 21.6001 3.99993C20.7801 4.48793 19.8811 4.82993 18.9441 5.01493C18.3147 4.34151 17.4804 3.89489 16.571 3.74451C15.6616 3.59413 14.728 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0772 6.14972C11.6979 6.98983 11.6068 7.93171 11.8181 8.82893C10.1552 8.74558 8.52838 8.31345 7.04334 7.56059C5.55829 6.80773 4.24818 5.75097 3.19805 4.45893C2.82634 5.09738 2.63101 5.82315 2.63205 6.56193C2.63205 8.01193 3.37005 9.29293 4.49205 10.0429C3.82806 10.022 3.17869 9.84271 2.59805 9.51993V9.57193C2.59825 10.5376 2.93242 11.4735 3.5439 12.221C4.15538 12.9684 5.00653 13.4814 5.95305 13.6729C5.33667 13.84 4.69036 13.8646 4.06305 13.7449C4.32992 14.5762 4.85006 15.3031 5.55064 15.824C6.25123 16.3449 7.09718 16.6337 7.97005 16.6499C7.10253 17.3313 6.10923 17.8349 5.04693 18.1321C3.98464 18.4293 2.87418 18.5142 1.77905 18.3819C3.69075 19.6114 5.91615 20.264 8.18905 20.2619C15.8821 20.2619 20.0891 13.8889 20.0891 8.36193C20.0891 8.18193 20.0841 7.99993 20.0761 7.82193C20.8949 7.23009 21.6017 6.49695 22.1631 5.65693L22.1621 5.65593Z"
                fill=""
              />
            </svg>
          </a>
          <a
            href="https://instagram.com/ouredenlife"
            target="_blank"
            class="link"
            @click.prevent="
              openSocialMedia('Instagram', 'https://instagram.com/ouredenlife')
            "
          >
            <svg
              class="link--instagram"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7957 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7957 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
                fill=""
              />
            </svg>
          </a>
          <a
            href="https://facebook.com/ouredenlife"
            target="_blank"
            class="link"
            @click.prevent="
              openSocialMedia('Facebook', 'https://facebook.com/ouredenlife')
            "
          >
            <svg
              class="link--facebook"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0419 2C6.49595 2 2 6.49595 2 12.0419C2 17.0159 5.62029 21.1352 10.3671 21.9329V14.1369H7.94469V11.3314H10.3671V9.26274C10.3671 6.86251 11.8331 5.55453 13.9746 5.55453C15.0002 5.55453 15.8816 5.63095 16.1375 5.66461V8.17349L14.6522 8.17421C13.4879 8.17421 13.2634 8.7274 13.2634 9.53946V11.33H16.0417L15.6793 14.1354H13.2634V22C18.2318 21.3953 22.0836 17.171 22.0836 12.039C22.0836 6.49595 17.5877 2 12.0419 2Z"
                fill=""
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/ouredenlife/"
            target="_blank"
            class="link"
            @click.prevent="
              openSocialMedia(
                'LinkedIn',
                'https://www.linkedin.com/company/ouredenlife/'
              )
            "
          >
            <svg
              class="link--linkedin"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.335 18.339H15.67V14.162C15.67 13.166 15.65 11.884 14.28 11.884C12.891 11.884 12.679 12.968 12.679 14.089V18.339H10.013V9.75H12.573V10.92H12.608C12.966 10.246 13.836 9.533 15.136 9.533C17.836 9.533 18.336 11.311 18.336 13.624V18.339H18.335ZM7.003 8.575C6.79956 8.57526 6.59806 8.53537 6.41006 8.45761C6.22207 8.37984 6.05127 8.26574 5.90746 8.12184C5.76365 7.97793 5.64965 7.80706 5.57201 7.61901C5.49437 7.43097 5.4546 7.22944 5.455 7.026C5.4552 6.71983 5.54618 6.4206 5.71644 6.16615C5.8867 5.91169 6.12859 5.71343 6.41153 5.59645C6.69447 5.47947 7.00574 5.44902 7.30598 5.50894C7.60622 5.56886 7.88196 5.71648 8.09831 5.93311C8.31466 6.14974 8.46191 6.42566 8.52145 6.72598C8.58099 7.0263 8.55013 7.33753 8.43278 7.62032C8.31543 7.9031 8.11687 8.14474 7.86219 8.31467C7.60751 8.4846 7.30817 8.5752 7.002 8.575H7.003ZM8.339 18.339H5.666V9.75H8.34V18.339H8.339ZM19.67 3H4.329C3.593 3 3 3.58 3 4.297V19.703C3 20.42 3.594 21 4.328 21H19.666C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3H19.669H19.67Z"
                fill=""
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/ouredenlife/"
            target="_blank"
            class="link"
            @click.prevent="
              openSocialMedia(
                'WhatsApp',
                'https://www.linkedin.com/company/ouredenlife/'
              )
            "
          >
            <svg
              class="link--whatsapp"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.00401 22L3.35601 17.032C2.46515 15.5049 1.99711 13.768 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.2328 22.0029 8.49667 21.5352 6.97001 20.645L2.00401 22ZM8.39101 7.308C8.26188 7.31602 8.13569 7.35003 8.02001 7.408C7.91153 7.46943 7.81251 7.54622 7.72601 7.636C7.60601 7.749 7.53801 7.847 7.46501 7.942C7.09542 8.423 6.89662 9.01342 6.90001 9.62C6.90201 10.11 7.03001 10.587 7.23001 11.033C7.63901 11.935 8.31201 12.89 9.20101 13.775C9.41501 13.988 9.62401 14.202 9.84901 14.401C10.9524 15.3725 12.2673 16.073 13.689 16.447L14.258 16.534C14.443 16.544 14.628 16.53 14.814 16.521C15.1053 16.506 15.3896 16.4271 15.647 16.29C15.813 16.202 15.891 16.158 16.03 16.07C16.03 16.07 16.073 16.042 16.155 15.98C16.29 15.88 16.373 15.809 16.485 15.692C16.568 15.606 16.64 15.505 16.695 15.39C16.773 15.227 16.851 14.916 16.883 14.657C16.907 14.459 16.9 14.351 16.897 14.284C16.893 14.177 16.804 14.066 16.707 14.019L16.125 13.758C16.125 13.758 15.255 13.379 14.724 13.137C14.668 13.1126 14.608 13.0987 14.547 13.096C14.4786 13.089 14.4095 13.0967 14.3443 13.1186C14.2791 13.1405 14.2193 13.1761 14.169 13.223V13.221C14.164 13.221 14.097 13.278 13.374 14.154C13.3325 14.2098 13.2754 14.2519 13.2098 14.2751C13.1443 14.2982 13.0733 14.3013 13.006 14.284C12.9409 14.2666 12.877 14.2445 12.815 14.218C12.691 14.166 12.648 14.146 12.563 14.109L12.558 14.107C11.9859 13.8572 11.4562 13.5198 10.988 13.107C10.862 12.997 10.745 12.877 10.625 12.761C10.2316 12.3842 9.88873 11.958 9.60501 11.493L9.54601 11.398C9.50364 11.3342 9.46937 11.2653 9.44401 11.193C9.40601 11.046 9.50501 10.928 9.50501 10.928C9.50501 10.928 9.74801 10.662 9.86101 10.518C9.9551 10.3983 10.0429 10.2738 10.124 10.145C10.242 9.955 10.279 9.76 10.217 9.609C9.93701 8.925 9.64701 8.244 9.34901 7.568C9.29001 7.434 9.11501 7.338 8.95601 7.319C8.90201 7.313 8.84801 7.307 8.79401 7.303C8.65972 7.29633 8.52515 7.29766 8.39101 7.307V7.308Z"
                fill=""
              />
            </svg>
          </a>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quasi
          repellat a atque nesciunt cum asperiores. Commodi officiis cum
          tempore, culpa fugiat illo natus nostrum eligendi veniam
          exercitationem ducimus rem?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatum ipsa quam, illo aspernatur id quibusdam
          fugit ipsum quisquam iure tempora ducimus quae facilis non autem
          deserunt fuga dolorem? Corrupti, mollitia!
        </p>
      </div>
    </div>
    <!--  -->
    <div class="container--subscribe">
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
    <!--  -->
    <div class="container--related">
      <div class="related">
        <h3 class="related__title">Related posts</h3>
        <div class="related__box">
          <div v-for="(item, i) in 3" :key="i">
            <figure class="related__item">
              <img
                class="related__item-img"
                src="https://res-2.cloudinary.com/hstxdo55f/image/upload/q_auto/v1/ghost-blog-images/Meet-Garden-v3.0.png"
                alt=""
              />
              <figcaption class="related__item-details">
                <h5>Your 5 Senses' Easy Guide to Home Decor</h5>
                <p>
                  Learn home decor tips from your senses, that'll transform your
                  apartment into a true home.
                </p>
                <div class="related__item-date">
                  <nuxt-link to="/"> HOME </nuxt-link>
                  <span class="dot">&#8226;</span>
                  <span>July 27, 2020</span>
                </div>
                <div class="related__item-author">
                  <img
                    :src="require(`~/assets/images/customer-kofo.jpg`)"
                    alt=""
                  />
                  <p>Sonia Amadi</p>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'

export default {
  mixins: [validationMixin],
  data() {
    return {
      loading: false,
      form: {
        email: null,
      },
    }
  },
  validations: {
    form: {
      email: { required, email },
    },
  },
  async fetch() {
    console.log(this.$route)
    const slug = this.$route.params.single_slug
    await this.getSingleArticle(slug)
  },
  //   asyncData({ params }, callback) {
  //   setTimeout(() => {
  //      callback(null,{product: data.find(v => v.id === parseInt(params.id))})
  //   }, 2000)
  // },
  methods: {
    async getSingleArticle(slug) {},
    openSocialMedia(name, url) {
      mixpanelTrackEvent(`${name} icon clicked - Blog`)
      window.open(url, '_blank')
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
      }
    },
    subscribe() {},
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_singleblog.scss';
</style>
