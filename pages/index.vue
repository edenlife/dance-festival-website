<template>
  <div class="">
    <div class="container--hero">
      <header class="hero">
        <div class="hero__title">
          <h1>
            Say goodbye to <br />
            <span :style="getServiceColor(services[0].value)">{{
              services[0].title
            }}</span>
            <br />forever
          </h1>
          <p>
            Chef-cooked meals: delivered fresh. Laundry: picked up and
            delivered. Home cleaning: executed by professional cleaners.
            Schedule them, and never worry about them again. Ever.
          </p>
          <div class="hero__button">
            <button
              type="button"
              class="hero__button-solid"
              @click.prevent="scrollTo('#get-the-app', 'homepage')"
            >
              I Want An Easy Life
            </button>
            <button
              type="button"
              class="hero__button-link"
              @click.prevent="scrollToVideo('watch-the-video')"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.1"
                  width="32"
                  height="32"
                  rx="16"
                  fill="#03A84E"
                />
                <path
                  d="M12.6667 11.8317C12.6667 11.0405 13.5419 10.5627 14.2074 10.9905L20.6915 15.1588C21.3038 15.5525 21.3038 16.4475 20.6915 16.8412L14.2074 21.0095C13.5419 21.4373 12.6667 20.9595 12.6667 20.1683V11.8317Z"
                  fill="#03A84E"
                />
              </svg>

              Watch the video
            </button>
          </div>
        </div>
        <div class="hero__img">
          <img
            src="https://res.cloudinary.com/eden-life-inc/image/upload/q_auto/v1611303384/eden-website-v2/hero-phone_hmfvpb.svg"
            alt="phone"
            class="hero__img-bg1"
          />
          <img
            :src="require(`~/assets/images/hero-${services[0].value}.svg`)"
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
          <p>Convenience you can depend on. Always.</p>
        </div>
        <div class="services__type">
          <div
            class="services__type-item services__type-food"
            @mouseenter.stop="exploreService = 'food'"
            @mouseleave.stop="exploreService = ''"
            @click="trackLink('Food')"
          >
            <h3>🥘</h3>
            <h5>Food</h5>
            <p>
              Chef-cooked meals you'll enjoy. Delivered fresh and on schedule.
            </p>
            <nuxt-link :to="{ path: '/food' }" class="btn">
              {{
                exploreService === 'food' || setExploreService ? 'Explore' : ''
              }}
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
            @click="trackLink('Laundry')"
          >
            <h3>🧺</h3>
            <h5>Laundry</h5>
            <p>Fresh laundry, carefully executed in 48 hours or less.</p>
            <nuxt-link :to="{ path: '/laundry' }" class="btn">
              {{
                exploreService === 'laundry' || setExploreService
                  ? 'Explore'
                  : ''
              }}
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
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611306544/eden-website-v2/laundry-img1_ijsx4k.png"
                alt="laundry"
              />
            </div>
          </div>
          <div
            class="services__type-item services__type-cleaning"
            @mouseenter.stop="exploreService = 'cleaning'"
            @mouseleave.stop="exploreService = ''"
            @click="trackLink('Cleaning')"
          >
            <h3>🏠</h3>
            <h5>Home Cleaning</h5>
            <p>Professional home cleaning you can trust.</p>
            <nuxt-link :to="{ path: '/cleaning' }" class="btn">
              {{
                exploreService === 'cleaning' || setExploreService
                  ? 'Explore'
                  : ''
              }}

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
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611318736/eden-website-v2/cleaning-img1_ldwcml.png"
                alt="cleaning"
              />
            </div>
          </div>
          <!-- <div
            class="services__type-item services__type-gifting"
            @mouseenter.stop="exploreService = 'gifting'"
            @mouseleave.stop="exploreService = ''"
            @click="trackLink('Gifting')"
          >
            <h3>🎁</h3>
            <h5>Gifts</h5>
            <p>
              Gift cards and gift boxes for every occasion, right at your
              fingertips.
            </p>
            <nuxt-link :to="{ path: '/gifts' }" class="btn">
              {{
                exploreService === 'gifting' || setExploreService
                  ? 'Explore'
                  : ''
              }}

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
                src="https://res.cloudinary.com/eden-life-inc/image/upload/q_auto/v1612286532/eden-website-v2/giftimage_xjioyo.jpg"
                alt="gifting"
              />
            </div>
          </div> -->
        </div>
      </section>
    </div>

    <div ref="watch-the-video" class="container--video">
      <section class="video">
        <div class="video__title">
          <h3>Why Eden?</h3>
        </div>
        <div class="video__item">
          <video
            src="https://res.cloudinary.com/eden-life-inc/video/upload/v1612616596/eden-website-v2/EDEN_LIFE__q1rgcz.mp4"
            poster="https://res.cloudinary.com/eden-life-inc/image/upload/v1611319513/eden-website-v2/video-thumbnail_crnwew.png"
            controls
            muted
            autoplay
          />
        </div>
      </section>
    </div>

    <div class="container--customers">
      <section class="customers">
        <div class="customers__title">
          <h3>The wall of 💚</h3>

          <div>
            <h3>We've served</h3>
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
        </div>

        <div class="customers__testimonials">
          <div v-for="(item, i) in testimonialsList" :key="i" class="card">
            <a :href="item.tweetLink" target="_blank">
              <div class="card__title">
                <div class="card__title-img">
                  <img
                    :src="require(`~/assets/images/customer-${item.image}.png`)"
                    :alt="item.name"
                  />
                </div>
                <div class="">
                  <p class="card__title-name">{{ item.name }}</p>
                  <p class="card__title-handle">@{{ item.handle }}</p>
                </div>
              </div>
              <p class="card__description" v-html="item.description"></p
            ></a>
          </div>
        </div>
      </section>
    </div>

    <div id="waiting-list" class="container--questions">
      <section class="questions">
        <div class="questions__title">
          <h3>You have questions?<br />We have answers.</h3>
          <div class="questions__title-form">
            <p>Not in Lagos?</p>
            <p>
              We're coming to your city. Be the first to know when we touch
              down.
            </p>
            <form class="form__input">
              <input
                id=""
                v-model="bound_fields.email"
                type="email"
                name=""
                placeholder="Enter your email"
                :class="{ 'has-error': $v.bound_fields.email.$error }"
              />
              <div class="form__input-item">
                <div
                  class="select"
                  :data-value="bound_fields.city"
                  :data-list="cities"
                >
                  <div class="selector" @click="toggle()">
                    <div class="label">
                      <span
                        :class="{
                          placeholder: cityName === 'Select your city',
                        }"
                        >{{ cityName }}</span
                      >
                    </div>
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
                        stroke="#93A29B"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <div :class="{ hidden: !visible, visible }">
                      <transition name="slide-fade">
                        <ul>
                          <li
                            v-for="city in cities"
                            :key="city.id"
                            :class="{ current: city.id === bound_fields.city }"
                            :value="city.name"
                            @click="select(city)"
                          >
                            {{ city.name }}
                          </li>
                        </ul>
                      </transition>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  class="form__input-btn"
                  :disabled="loading"
                  @click.prevent="submitForm"
                >
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
            </form>
          </div>
        </div>

        <div class="questions__description">
          <div class="questions__description-item">
            <div class="questions__description-title">
              <h5>What is Eden?</h5>
              <button
                type="button"
                class="expand"
                @click.prevent="expandQuestion('one')"
              >
                <svg
                  v-if="questions.includes('one')"
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
                <svg
                  v-else
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 8V16"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 12H16"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <transition name="slide-fade">
              <p v-if="questions.includes('one')">
                Easy. We're bringing the convenience of room service to homes
                across Africa – but starting with Lagos. Home tasks are routine
                activities that should be outsourced, so you can focus on the
                things with the most impact in your life. It could be making
                time for work that matters, or for enjoyment. You deserve to
                live well without the extra effort. <br />Some people call us
                the <strong> Concierge of Comfort</strong> – they're correct.
              </p>
            </transition>
          </div>
          <div class="questions__description-item">
            <div class="questions__description-title">
              <h5>A laundry service, cleaning service or food service?</h5>
              <button
                type="button"
                class="expand"
                @click.prevent="expandQuestion('two')"
              >
                <svg
                  v-if="questions.includes('two')"
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
                <svg
                  v-else
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 8V16"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 12H16"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <transition name="slide-fade">
              <p v-if="questions.includes('two')">
                We do all three. But you get to decide which works best for you.
                If you need food, we'll get you delicious meals everyday, once a
                week, or every two weeks. Dirty laundry? We'll pick them up and
                bring back your clothes, freshly washed folded/ironed. Does your
                home need cleaning? We'll get that done efficiently as well.<br />
                You can even subscribe for more than one service, and we'll run
                it. Perfectly.
              </p>
            </transition>
          </div>
          <div class="questions__description-item">
            <div class="questions__description-title">
              <h5>How does it work?</h5>
              <button
                type="button"
                class="expand"
                @click.prevent="expandQuestion('three')"
              >
                <svg
                  v-if="questions.includes('three')"
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
                <svg
                  v-else
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 8V16"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 12H16"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <transition name="slide-fade">
              <p v-if="questions.includes('three')">
                When you sign up on
                <a
                  href="#"
                  style="color: #03a84e"
                  @click.prevent="scrollTo('#get-the-app', 'homepage-faq')"
                  >Eden</a
                >, you can configure a plan that fits your needs, then you get
                assigned a Gardener to help you manage your home. The app takes
                your food, laundry, and home cleaning needs and turns them into
                tasks that our Gardeners attend to on schedule. The only finger
                you'll be lifting is the one scrolling through the app,
                monitoring progress.
              </p>
            </transition>
          </div>
          <div class="questions__description-item">
            <div class="questions__description-title">
              <h5>Who are Gardeners?</h5>
              <button
                type="button"
                class="expand"
                @click.prevent="expandQuestion('four')"
              >
                <svg
                  v-if="questions.includes('four')"
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
                <svg
                  v-else
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 8V16"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 12H16"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <transition name="slide-fade">
              <p v-if="questions.includes('four')">
                Your Home Managers. They’re the human side of Eden:
                carefully-screened people (we run full background checks on all
                Gardeners) who are trained to handle your home requests with
                ease and enthusiasm.
                <br />
                Our Gardeners fit a profile. They’re detail-oriented,
                responsive, responsible and friendly. They have one job, and
                that job is to understand what the perfect home means for you
                specifically, then work every day to provide you with exactly
                that.
                <br />

                When you sign up on Eden, you see a profile of your Gardener,
                and you can get an impression of them before they start handling
                your chores.
              </p>
            </transition>
          </div>
          <div class="questions__description-item">
            <div class="questions__description-title">
              <h5>How much are they good for?</h5>
              <button
                type="button"
                class="expand"
                @click.prevent="expandQuestion('five')"
              >
                <svg
                  v-if="questions.includes('five')"
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
                <svg
                  v-else
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 8V16"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 12H16"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <transition name="slide-fade">
              <p v-if="questions.includes('five')">
                A lot. Think of your Gardener as your link to an ever-expanding
                world of Eden services you can take advantage of. Your Gardener
                helps you access services like<strong>
                  meals, house cleaning (standard and deep cleaning), and
                  laundry services.</strong
                >
                And that's just the beginning.
                <br />
                If there’s ever a service you wish your Gardener provided (that
                they don’t, as yet), select the ‘Feedback’ option on the
                Gardener profile, and we’ll get the message!
              </p>
            </transition>
          </div>
          <div class="questions__description-item">
            <div class="questions__description-title">
              <h5>Does my Gardener handle just my Eden account?</h5>
              <button
                type="button"
                class="expand"
                @click.prevent="expandQuestion('six')"
              >
                <svg
                  v-if="questions.includes('six')"
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
                <svg
                  v-else
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 8V16"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 12H16"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <transition name="slide-fade">
              <p v-if="questions.includes('six')">
                Your Gardener’s schedule is designed to give the best attention
                to your chores, which gives them (based on our very trusty Eden
                math) enough time to attend to a few other customers in the same
                area as you. This means that our Gardeners attend to a handful
                of customers, but are never swamped with requests.
              </p>
            </transition>
          </div>
        </div>

        <div class="questions__title-form mobile">
          <p>Not in Lagos?</p>
          <p>
            We're coming to your city. Be the first to know when we touch down.
          </p>
          <form class="form__input">
            <input
              id=""
              v-model="bound_fields.email"
              type="email"
              name=""
              placeholder="Enter your email"
              :class="{ 'has-error': $v.bound_fields.email.$error }"
            />
            <div class="form__input-item">
              <div
                class="select"
                :data-value="bound_fields.city"
                :data-list="cities"
              >
                <div class="selector" @click="toggle()">
                  <div class="label">
                    <span
                      :class="{
                        placeholder: cityName === 'Select your city',
                      }"
                      >{{ cityName }}</span
                    >
                  </div>
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
                      stroke="#93A29B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div :class="{ hidden: !visible, visible }">
                    <transition name="slide-fade">
                      <ul>
                        <li
                          v-for="city in cities"
                          :key="city.id"
                          :class="{ current: city.id === bound_fields.city }"
                          :value="city.name"
                          @click="select(city)"
                        >
                          {{ city.name }}
                        </li>
                      </ul>
                    </transition>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                class="form__input-btn"
                :disabled="loading"
                @click="submitForm"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>

    <div class="container--press">
      <section class="press">
        <div class="press__title">
          <h3>Check us out in the press.</h3>
        </div>
        <div class="press__link">
          <a
            href="https://techcabal.com/2020/12/17/the-backend-eden-choplife/"
            target="_blank"
          >
            <img
              :src="require(`~/assets/images/techcabal.svg`)"
              alt="techcabal"
          /></a>
          <a
            href="https://www.benjamindada.com/eden-launch-andela/"
            target="_blank"
          >
            <img :src="require(`~/assets/images/press2.svg`)" alt="press2"
          /></a>
          <a href="https://www.future.africa/home/eden" target="_blank">
            <img
              :src="require(`~/assets/images/future-africa.svg`)"
              alt="future-africa"
          /></a>
          <a
            href="https://techpoint.africa/2019/09/17/eden-bettering-lives-in-african-cities/"
            target="_blank"
          >
            <img
              :src="require(`~/assets/images/techpoint.svg`)"
              alt="techpoint"
          /></a>
        </div>
      </section>
    </div>

    <modal v-if="showSuccessModal" :show-modal="showSuccessModal" class="modal">
      <div slot="header"></div>
      <div slot="body" class="modal__body">
        <div class="form__modal">
          <div class="form__modal-title">
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
          <div class="form__modal-body">
            <img
              :src="require(`~/assets/images/successful.svg`)"
              alt="failed"
            />
            <h5>Information Submitted</h5>
            <p>You have successfully submitted your information.</p>
            <button
              type="submit"
              class="btn--submit"
              :disabled="loading"
              @click="showSuccessModal = false"
            >
              Continue Browsing
            </button>
          </div>
        </div>
      </div>
      <div slot="footer"></div>
    </modal>

    <modal v-if="showFailedModal" :show-modal="showFailedModal" class="modal">
      <div slot="header"></div>
      <div slot="body" class="modal__body">
        <div class="form__modal">
          <div class="form__modal-title">
            <button class="btn btn--success" @click="showFailedModal = false">
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

          <div class="form__modal-body">
            <img :src="require(`~/assets/images/failed.svg`)" alt="failed" />
            <h5>Submission Failed</h5>
            <p>
              Your information was not successfully submitted. Please try again
              or reach us at <span>eve@edenlife.ng </span> or
              <span>+2348123456790</span>
            </p>
          </div>
        </div>
      </div>
      <div slot="footer"></div>
    </modal>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import testimonials from '~/static/testimonials'
import { scrollToApp } from '~/static/functions'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import { landingPageApi } from '~/request/all.api'

export default {
  mixins: [validationMixin],
  data() {
    return {
      showFailedModal: false,
      showSuccessModal: false,
      loading: false,
      services: [
        { title: 'housecleaning', value: 'cleaning' },
        { title: 'laundry day', value: 'laundry' },
        { title: 'long cooking hours', value: 'food' },
        { title: 'market runs', value: 'gift' },
      ],
      exploreService: '',
      testimonialsList: testimonials,
      questions: ['one'],
      cities: [
        {
          name: 'Abia',
          id: 'abia',
        },
        {
          name: 'Abuja',
          id: 'abuja',
        },
        {
          name: 'Adamawa',
          id: 'adamawa',
        },
        {
          name: 'Akwa Ibom',
          id: 'akwa-ibom',
        },
        {
          name: 'Bauchi',
          id: 'bauchi',
        },
        {
          name: 'Bayelsa',
          id: 'bayelsa',
        },
        {
          name: 'Benue',
          id: 'benue',
        },
        {
          name: 'Bornu',
          id: 'bornu',
        },
        {
          name: 'Cross River',
          id: 'cross-river',
        },
        {
          name: 'Delta',
          id: 'delta',
        },
        {
          name: 'Ebonyi',
          id: 'ebonyi',
        },
        {
          name: 'Edo',
          id: 'edo',
        },
        {
          name: 'Ekiti',
          id: 'ekiti',
        },
        {
          name: 'Enugu',
          id: 'enugu',
        },
        {
          name: 'Gombe',
          id: 'gombe',
        },
        {
          name: 'Imo',
          id: 'imo',
        },
        {
          name: 'Jigawa',
          id: 'jigawa',
        },
        {
          name: 'Kaduna',
          id: 'kaduna',
        },
        {
          name: 'Kano',
          id: 'kano',
        },
        {
          name: 'Kastina',
          id: 'kastina',
        },
        {
          name: 'Kebbi',
          id: 'kebbi',
        },
        {
          name: 'Kogi',
          id: 'kogi',
        },
        {
          name: 'Kwara',
          id: 'kwara',
        },
        {
          name: 'Nasarawa',
          id: 'nasarawa',
        },
        {
          name: 'Niger',
          id: 'niger',
        },
        {
          name: 'Ogun',
          id: 'ogun',
        },
        {
          name: 'Ondo',
          id: 'ondo',
        },
        {
          name: 'Osun',
          id: 'osun',
        },
        {
          name: 'Oyo',
          id: 'oyo',
        },
        {
          name: 'Plateau',
          id: 'plateau',
        },
        {
          name: 'Rivers',
          id: 'rivers',
        },
        {
          name: 'Sokoto',
          id: 'sokoto',
        },
        {
          name: 'Taraba',
          id: 'taraba',
        },
        {
          name: 'Yobe',
          id: 'yobe',
        },
        {
          name: 'Zamfara',
          id: 'zamfara',
        },
      ],
      visible: false,
      bound_fields: {
        email: null,
        city: null,
      },
      cityName: 'Select your city',
      setExploreService: false,
      window: {
        width: 0,
        height: 0,
      },
      autoPlayMute: '',
    }
  },
  validations: {
    bound_fields: {
      email: { required, email },
      city: { required },
    },
  },
  computed: {
    fromOrigin() {
      return this.$store.getters.getFromOrigin
    },
  },
  mounted() {
    window.setInterval(() => {
      this.changeService()
    }, 2300)

    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    mixpanelTrackEvent('Landing page')

    // scroll to questions
    const getRoute = this.$nuxt.$route.fullPath
    if (getRoute.includes('join-the-list')) {
      this.scrollToQuestions()
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    async submitForm() {
      this.$v.bound_fields.$touch()
      if (!this.$v.bound_fields.$error) {
        try {
          this.loading = true
          await landingPageApi(this.bound_fields)
          Object.keys(this.bound_fields).forEach(
            (key) => (this.bound_fields[key] = '')
          )
          this.$nextTick(() => {
            this.$v.bound_fields.$reset()
            this.bound_fields.city = null
            this.cityName = 'Select your city'
          })
          this.showSuccessModal = true
          this.loading = false
          mixpanelTrackEvent('Enlist form - homepage')
        } catch (error) {
          this.loading = false
          this.showFailedModal = true
        }
      }
    },
    scrollTo(id, label) {
      scrollToApp(id, label)
    },
    scrollToQuestions() {
      const scrollToElement = document.querySelector('#waiting-list')
      scrollToElement.scrollIntoView()
    },
    scrollToVideo(ref) {
      mixpanelTrackEvent('Watch the video clicked - homepage')
      this.$refs[ref].scrollIntoView()
    },
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
      if (this.window.width < '768') {
        this.setExploreService = true
      } else this.setExploreService = false
    },
    changeService() {
      const first = this.services.shift()
      this.services = this.services.concat(first)
    },
    toggle() {
      this.visible = !this.visible
    },
    select(option) {
      this.bound_fields.city = option.id
      this.cityName = option.name
    },
    getServiceColor(service) {
      switch (service) {
        case 'cleaning':
          return {
            color: '#FF9D00',
            'box-shadow': 'inset 0 -23px 0 #FFE6D6',
          }
        case 'food':
          return {
            color: '#03A84E',
            'box-shadow': 'inset 0 -23px 0 #C9F8DE',
          }
        case 'laundry':
          return {
            color: '#a0b0fe',
            'box-shadow': 'inset 0 -23px 0 #e5e9fc',
          }
        case 'gift':
          return {
            color: '#00C0EA',
            'box-shadow': 'inset 0 -23px 0 #D1F2FA',
          }
        default:
          return {
            color: '#03A84E',
            'box-shadow': 'inset 0 -23px 0 #C9F8DE',
          }
      }
    },
    expandQuestion(item) {
      if (this.questions.length && this.questions.includes(item)) {
        this.questions.pop()
      } else if (this.questions.length) {
        this.questions.pop()
        this.questions.push(item)
      } else {
        this.questions.push(item)
      }
    },
    trackLink(service) {
      mixpanelTrackEvent(`${service} clicked - homepage (services)`)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_index.scss';
</style>
