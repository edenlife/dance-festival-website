<template>
  <div class="">
    <div class="container--hero">
      <header class="hero">
        <div class="hero__title">
          <h1>
            Say Goodbye to <br /><span>{{ services }}</span> <br />forever
          </h1>
          <p>
            We take care of your chores, so you can get more out of life. It's
            what you've always dreamed of.
          </p>
          <div class="hero__button">
            <button type="button" class="hero__button-solid">
              Start Your Eden Life
            </button>
            <button type="button" class="hero__button-link">
              Watch the video
            </button>
          </div>
        </div>
        <div class="hero__img">
          <img
            src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611303384/eden-website-v2/hero-phone_hmfvpb.svg"
            alt="phone"
            class="hero__img-bg1"
          />
          <img
            :src="require(`~/assets/images/hero-${service}.svg`)"
            alt="laundry"
            class="hero__img-bg2"
          />
        </div>
      </header>
    </div>

    <div class="container--services">
      <section class="services">
        <div class="services__title">
          <h3>Services</h3>
          <p>Cancelling & Pausing any time is as easy as clicking a button.</p>
        </div>
        <div class="services__type">
          <div
            class="services__type-item services__type-food"
            @mouseenter.stop="exploreService = 'food'"
            @mouseleave.stop="exploreService = ''"
          >
            <h3>🥘</h3>
            <h5>Food</h5>
            <p>Your chef-cooked meals, delivered to you. Daily or weekly.</p>
            <nuxt-link :to="{ path: '/' }" class="btn">
              {{ exploreService === 'food' ? 'Explore' : '' }}
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.85625 0.673555C8.61719 0.90793 8.61719 1.29699 8.85156 1.53606L11.7016 4.39074H0.854688C0.521875 4.39074 0.25 4.66262 0.25 5.00012C0.25 5.33762 0.521875 5.60949 0.854688 5.60949H11.6969L8.84687 8.46418C8.6125 8.70324 8.61719 9.08762 8.85156 9.32668C9.09062 9.56106 9.47031 9.56106 9.70937 9.32199L13.5719 5.43137C13.6234 5.37512 13.6656 5.31418 13.6984 5.23918C13.7312 5.16418 13.7453 5.08449 13.7453 5.00481C13.7453 4.84543 13.6844 4.69543 13.5719 4.57824L9.70937 0.687618C9.47969 0.443868 9.09531 0.43918 8.85625 0.673555Z"
                  fill="#106A39"
                />
              </svg>
            </nuxt-link>
            <div class="services__type-bg">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611318743/eden-website-v2/food-img1_ls530a.png"
                alt="food"
              />
            </div>
          </div>
          <div
            class="services__type-item services__type-laundry"
            @mouseenter.stop="exploreService = 'laundry'"
            @mouseleave.stop="exploreService = ''"
          >
            <h3>🧺</h3>
            <h5>Laundry</h5>
            <p>
              Your clothes, picked up, laundered and delivered to you in 48
              hours or less.
            </p>
            <nuxt-link :to="{ path: '/' }" class="btn">
              {{ exploreService === 'laundry' ? 'Explore' : '' }}
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.85625 0.673311C8.61719 0.907686 8.61719 1.29675 8.85156 1.53581L11.7016 4.3905H0.854688C0.521875 4.3905 0.25 4.66237 0.25 4.99987C0.25 5.33737 0.521875 5.60925 0.854688 5.60925H11.6969L8.84687 8.46394C8.6125 8.703 8.61719 9.08737 8.85156 9.32644C9.09062 9.56081 9.47031 9.56081 9.70937 9.32175L13.5719 5.43112C13.6234 5.37487 13.6656 5.31394 13.6984 5.23894C13.7312 5.16394 13.7453 5.08425 13.7453 5.00456C13.7453 4.84519 13.6844 4.69519 13.5719 4.578L9.70937 0.687374C9.47969 0.443624 9.09531 0.438936 8.85625 0.673311Z"
                  fill="#B54700"
                />
              </svg>
            </nuxt-link>
            <div class="services__type-bg">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611306544/eden-website-v2/laundry-img1_ijsx4k.png"
                alt="laundry"
              />
            </div>
          </div>
          <div
            class="services__type-item services__type-cleaning"
            @mouseenter.stop="exploreService = 'cleaning'"
            @mouseleave.stop="exploreService = ''"
          >
            <h3>🏠</h3>
            <h5>Home Cleaning</h5>
            <p>Professional cleaning at your doorstep. Up to thrice a week.</p>
            <nuxt-link :to="{ path: '/' }" class="btn">
              {{ exploreService === 'cleaning' ? 'Explore' : '' }}
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.85625 0.673433C8.61719 0.907808 8.61719 1.29687 8.85156 1.53593L11.7016 4.39062H0.854688C0.521875 4.39062 0.25 4.6625 0.25 5C0.25 5.3375 0.521875 5.60937 0.854688 5.60937H11.6969L8.84687 8.46406C8.6125 8.70312 8.61719 9.0875 8.85156 9.32656C9.09062 9.56093 9.47031 9.56094 9.70937 9.32187L13.5719 5.43125C13.6234 5.375 13.6656 5.31406 13.6984 5.23906C13.7312 5.16406 13.7453 5.08437 13.7453 5.00468C13.7453 4.84531 13.6844 4.69531 13.5719 4.57812L9.70937 0.687496C9.47969 0.443746 9.09531 0.439058 8.85625 0.673433Z"
                  fill="#7189FF"
                />
              </svg>
            </nuxt-link>
            <div class="services__type-bg">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611318736/eden-website-v2/cleaning-img1_ldwcml.png"
                alt="cleaning"
              />
            </div>
          </div>
          <div
            class="services__type-item services__type-gifting"
            @mouseenter.stop="exploreService = 'gifting'"
            @mouseleave.stop="exploreService = ''"
          >
            <h3>🎁</h3>
            <h5>Gifting</h5>
            <p>Professional cleaning at your doorstep. Up to thrice a week.</p>
            <nuxt-link :to="{ path: '/' }" class="btn">
              {{ exploreService === 'gifting' ? 'Explore' : '' }}

              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.85625 0.673433C8.61719 0.907808 8.61719 1.29687 8.85156 1.53593L11.7016 4.39062H0.854688C0.521875 4.39062 0.25 4.6625 0.25 5C0.25 5.3375 0.521875 5.60937 0.854688 5.60937H11.6969L8.84687 8.46406C8.6125 8.70312 8.61719 9.0875 8.85156 9.32656C9.09062 9.56093 9.47031 9.56094 9.70937 9.32187L13.5719 5.43125C13.6234 5.375 13.6656 5.31406 13.6984 5.23906C13.7312 5.16406 13.7453 5.08437 13.7453 5.00468C13.7453 4.84531 13.6844 4.69531 13.5719 4.57812L9.70937 0.687496C9.47969 0.443746 9.09531 0.439058 8.85625 0.673433Z"
                  fill="#0099BB"
                />
              </svg>
            </nuxt-link>
            <div class="services__type-bg">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611318735/eden-website-v2/gift-img1_r9mjjh.png"
                alt="gifting"
              />
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="container--video">
      <section class="video">
        <div class="video__title">
          <h3>Why Eden?</h3>
        </div>
        <div class="video__item">
          <img
            src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611319513/eden-website-v2/video-thumbnail_crnwew.png"
            alt="why eden"
          />
        </div>
      </section>
    </div>

    <div class="container--customers">
      <section class="customers">
        <div class="customers__title">
          <h3>Your neighbours <br />💚 us.</h3>
          <div class="customers__title-image">
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611322645/eden-website-v2/cowrywise_wtcvv5.svg"
              alt="cowrywise"
            />
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611322645/eden-website-v2/flutterwave_cmhzbz.svg"
              alt="flutterwave"
            />
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611322645/eden-website-v2/paystack_zez4ir.svg"
              alt="paystack"
            />
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611322645/eden-website-v2/kuda_irz12h.svg"
              alt="kuda"
            />
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611322645/eden-website-v2/buycoins_bkcrvh.svg"
              alt="buycoins"
            />
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611322645/eden-website-v2/piggyvest_wyio8s.svg"
              alt="piggyvest"
            />
          </div>
        </div>

        <div class="customers__testimonials">
          <div v-for="(item, i) in testimonialsList" :key="i" class="card">
            <div class="card__title">
              <img
                :src="require(`~/assets/images/customer-${item.image}.png`)"
                :alt="item.name"
                class="card__title-img"
              />
              <div class="">
                <p class="card__title-name">{{ item.name }}</p>
                <p class="card__title-handle">@{{ item.handle }}</p>
              </div>
            </div>
            <p class="card__description" v-html="item.description"></p>
          </div>
        </div>
      </section>
    </div>

    <div class="container--questions">
      <section class="questions">
        <div class="questions__title">
          <h3>You have questions?<br />We have answers.</h3>
          <div class="questions__title-form">
            <p>Not in Lagos?</p>
            <p>
              We're coming to your city. Be the first to know when we touch
              down.
            </p>
            <div class="form__input">
              <input
                id=""
                type="email"
                name=""
                placeholder="Enter your email"
              />
              <div class="form__input-item">
                <input
                  id=""
                  type="email"
                  name=""
                  placeholder="Select your city"
                  class="select"
                />
                <button type="button" class="form__input-btn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="questions__description">
          <div class="questions__description-item">
            <div class="questions__description-title">
              <h5>What is Eden?</h5>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                  stroke="#21312A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 11H15"
                  stroke="#21312A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p>
              Easy. We're bringing the convenience of room service to homes
              across Africa – but starting with Lagos. Home tasks are routine
              activities that should be outsourced, so you can focus on the
              things with the most impact in your life. It could be making time
              for work that matters, or for enjoyment. You deserve to live well
              without the extra effort. Some people call us the Concierge of
              Comfort – they're correct.
            </p>
          </div>
          <div class="questions__description-item">
            <div class="questions__description-title">
              <h5>A laundry service, cleaning service or food service?</h5>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                  stroke="#21312A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <path
                  d="M7 11H15"
                  stroke="#21312A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div class="questions__description-item">
            <div class="questions__description-title">
              <h5>How does it work?</h5>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                  stroke="#21312A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 11H15"
                  stroke="#21312A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div class="questions__description-item">
            <div class="questions__description-title">
              <h5>Who are Gardeners?</h5>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                  stroke="#21312A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 11H15"
                  stroke="#21312A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div class="questions__description-item">
            <div class="questions__description-title">
              <h5>How much are they good for?</h5>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                  stroke="#21312A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 11H15"
                  stroke="#21312A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div class="questions__description-item">
            <div class="questions__description-title">
              <h5>Does my Gardener service me alone?</h5>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                  stroke="#21312A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 11H15"
                  stroke="#21312A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="container--press">
      <section class="press">
        <div class="press__title">
          <h3>Check us out in the press.</h3>
        </div>
        <div class="press__link">
          <a href="http://" target="_blank">
            <img
              :src="require(`~/assets/images/techcabal.svg`)"
              alt="techcabal"
          /></a>
          <a href="http://" target="_blank">
            <img :src="require(`~/assets/images/press2.svg`)" alt="press2"
          /></a>
          <a href="http://" target="_blank">
            <img
              :src="require(`~/assets/images/future-africa.svg`)"
              alt="future-africa"
          /></a>
          <a href="http://" target="_blank">
            <img
              :src="require(`~/assets/images/techpoint.svg`)"
              alt="techpoint"
          /></a>
        </div>
      </section>
    </div>

    <Footer />
  </div>
</template>

<script>
import testimonials from '~/static/testimonials'
export default {
  components: {
    Footer: () => import('~/components/Footer.vue'),
  },
  data() {
    return {
      services: 'Laundry day',
      service: 'laundry',
      exploreService: '',
      testimonialsList: testimonials,
    }
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_index.scss';
</style>
