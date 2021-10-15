<template>
  <div>
    <div class="container--hero">
      <header class="hero">
        <div class="hero__title">
          <h1>
            Enjoy <span> {{ headerText[0] }}</span> <br />
            ready in 5 minutes
          </h1>
          <h1 class="mobile">
            Enjoy <span> {{ headerText[0] }}</span> <br />
            ready in <br />5 minutes
          </h1>
          <ul>
            <li>Fresh chef-cooked meals delivered to you ✔️</li>
            <li>No market runs. No prep-time. No extra delivery fees ✔️</li>
            <li>Just heat and eat ✔️</li>
          </ul>

          <div class="hero__button">
            <button
              type="button"
              class="hero__button-solid"
              @click.prevent="
                scrollToFooter('#get-the-app', 'I want a meal plan')
              "
            >
              I Want a Meal Plan
            </button>
          </div>
        </div>
        <div class="hero__img">
          <img
            src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611742061/eden-website-v2/hero-food-bg1_yjfvcb.svg"
            alt="phone"
            class="hero__img-bg1"
          />
        </div>
      </header>
    </div>

    <div class="container--description">
      <section class="description">
        <div class="description__title">
          <h3>How it works</h3>
        </div>

        <div class="description__body">
          <div class="description__slider">
            <div class="description__slider-vertical slider">
              <div class="timeline">
                <svg
                  class="timeline--a"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#03A84E" />
                </svg>
                <svg
                  class="bee"
                  width="3"
                  height="175"
                  viewBox="0 0 2 190"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0H2V190H0V0Z" fill="#E4E8E6" />
                </svg>
                <svg
                  class="cee"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" />
                </svg>
                <svg
                  class="dee"
                  width="3"
                  height="205"
                  viewBox="0 0 2 190"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0H2V190H0V0Z" fill="#E4E8E6" />
                </svg>
                <svg
                  class="eee"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" />
                </svg>
              </div>
              <!-- <span class="slide-y"></span> -->
            </div>
            <div class="description__slider-horizontal slider">
              <!-- <span class="slide-x"></span> -->
              <div class="timeline">
                <svg
                  class="timeline--a"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#03A84E" />
                </svg>
                <svg
                  class="bee"
                  width="160"
                  height="3"
                  viewBox="0 0 160 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-0.000488281 2.23755V0.237549H160V2.23755H-0.000488281Z"
                    fill="#E4E8E6"
                  />
                </svg>
                <svg
                  class="cee"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" />
                </svg>
                <svg
                  class="dee"
                  width="160"
                  height="3"
                  viewBox="0 0 160 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-0.000488281 2.23755V0.237549H160V2.23755H-0.000488281Z"
                    fill="#E4E8E6"
                  />
                </svg>
                <svg
                  class="eee"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" />
                </svg>
              </div>
            </div>
            <div class="description__slider-text">
              <div class="one">
                <h5>Choose your plan</h5>
                <p>
                  Sign up on the Eden app. Choose a meal schedule that works for
                  you; when you want it, how you want it. It takes less than 5
                  minutes.
                </p>
              </div>
              <div class="two">
                <h5>We Cook and Deliver</h5>
                <p>
                  We cook up your picks from our rich menu and deliver them to
                  you on schedule. At no extra delivery costs.
                </p>
              </div>
              <div class="three">
                <h5>You Heat and Eat</h5>
                <p>
                  It's ready to eat in 5 minutes. Or you can refrigerate for
                  later!
                </p>
              </div>
              <button
                type="button"
                class="btn"
                @click.prevent="
                  scrollToFooter('#get-the-app', 'food - how it works')
                "
              >
                Get the app
              </button>
            </div>
          </div>

          <div id="food-video" class="description__video">
            <div class="description__video-item">
              <video ref="videoRef" muted playsinline>
                <source
                  src="https://res.cloudinary.com/eden-life-inc/video/upload/v1612445751/eden-website-v2/031_Food_cvtiw7.mp4"
                  type="video/mp4"
                />
              </video>
              <button
                type="button"
                class="btn--replay"
                @click.prevent="playButtonClicked"
              >
                <svg
                  width="14"
                  height="17"
                  viewBox="0 0 14 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.49872 3.18516C7.22334 3.16476 6.9987 2.94285 6.9987 2.66671V1.04048C6.9987 0.595027 6.46013 0.371945 6.14514 0.686928L3.18558 3.64649C2.99032 3.84175 2.99032 4.15833 3.18558 4.35359L6.14514 7.31315C6.46013 7.62814 6.9987 7.40505 6.9987 6.9596V5.33337C6.9987 5.05723 7.2232 4.83074 7.49799 4.85807C10.0225 5.10916 11.9987 7.24353 11.9987 9.83337C11.9987 12.5917 9.75703 14.8334 6.9987 14.8334C4.40885 14.8334 2.27448 12.8572 2.0234 10.3327C1.99607 10.0579 1.77484 9.83337 1.4987 9.83337H0.832031C0.555888 9.83337 0.330082 10.058 0.350479 10.3334C0.605973 13.783 3.48357 16.5 6.9987 16.5C10.682 16.5 13.6654 13.5167 13.6654 9.83337C13.6654 6.31825 10.9483 3.44065 7.49872 3.18516Z"
                    fill="#03A84E"
                  />
                </svg>
                <span> Replay video</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div id="menu-options" ref="menu-options" class="container--menu">
      <section class="menu">
        <div class="menu__title">
          <h3>Next weeks menu</h3>

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
              ><span class="prev" @click="previousCategory()">
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L1 9"
                    stroke="#03a84e"
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
              <span class="next" @click="nextCategory()">
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L1 9"
                    stroke="#03a84e"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg> </span
            ></template>
          </carousel>
        </nav>

        <div id="load-more" class="menu__list">
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
        <button
          v-if="tabs.length"
          type="button"
          class="hero__button-solid"
          @click.prevent="scrollToFooter('#get-the-app', 'I want a meal plan')"
        >
          I Want a Meal Plan
        </button>
      </section>
    </div>

    <div class="container--wall">
      <section class="wall">
        <div class="wall__title">
          <h3>The wall of 💚</h3>
        </div>
        <div class="wall__messages">
          <div v-for="(item, i) in messageList" :key="i" class="card">
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
              <p class="card__description" v-html="item.description"></p>
            </a>
          </div>
        </div>
      </section>
    </div>

    <div class="container--plan">
      <section class="plan">
        <div class="plan__title">
          <h3>The Food Plans:<br /></h3>
          <p>
            Enjoy all the deliciousness of healthy food, right on time, with
            none of the stress.
          </p>
          <ul>
            <li>
              <h5 class="icon icon--one">👀</h5>
              <div class="icon--text">
                <h5>Save Time</h5>
                <p>Up to 14 hours every week</p>
              </div>
            </li>
            <li>
              <h5 class="icon icon--two">🚛</h5>
              <div class="icon--text">
                <h5>One Monthly Payment.</h5>
                <p>No hidden delivery fees</p>
              </div>
            </li>
            <li>
              <h5 class="icon icon--three">👼</h5>
              <div class="icon--text">
                <h5>Pause Anytime.</h5>
                <p>Out of town? You can skip a service</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="plan__price">
          <ul>
            <li
              :class="{ active: period === 'weekly' }"
              @click.prevent="period = 'weekly'"
            >
              <span> Daily Delivery </span>
              <svg
                v-if="period === 'weekly'"
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3" r="3" fill="#61DB98" />
              </svg>
            </li>
            <li
              :class="{ active: period === 'monthly' }"
              @click.prevent="period = 'monthly'"
            >
              <span> Weekly delivery </span>
              <svg
                v-if="period === 'monthly'"
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3" r="3" fill="#61DB98" />
              </svg>
            </li>
          </ul>
          <transition name="slide-fade">
            <div v-if="period === 'weekly'" class="plan__price-weekly">
              <!-- <div>
                <img
                  src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611757237/eden-website-v2/food-image1_cppzzn.png"
                  alt="Meal"
                />
              </div> -->
              <div class="plan__price-item one">
                <p>How many meals do you want daily?</p>
                <div class="btn--group">
                  <button
                    class="btn--item minus"
                    @click.prevent="decreaseOrder('weekly')"
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
                        stroke="#21312A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <input
                    id=""
                    v-model="mealsPerDay"
                    type="number"
                    name=""
                    placeholder="0"
                    readonly
                  />
                  <button
                    class="btn--item plus"
                    @click.prevent="increaseOrder('weekly')"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5V19"
                        stroke="#21312A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5 12H19"
                        stroke="#21312A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="plan__price-bottom">
                <h5>
                  <span class="price">Price </span>
                  <span class="icon">👉 </span> NGN
                  {{ currencyFormat(totalDailyPrice) }}
                </h5>
                <p>Monthly</p>
              </div>
            </div>
          </transition>
          <transition name="slide-fade">
            <div v-if="period === 'monthly'" class="plan__price-monthly">
              <div class="plan__price-item">
                <p>Number of meals per delivery?</p>
                <div class="btn--group">
                  <button
                    class="btn--item minus"
                    @click.prevent="decreaseOrder('monthly')"
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
                        stroke="#21312A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <input
                    id=""
                    v-model="mealsPerWeek"
                    type="number"
                    name=""
                    placeholder="0"
                    readonly
                  />
                  <button
                    class="btn--item plus"
                    @click.prevent="increaseOrder('monthly')"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5V19"
                        stroke="#21312A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5 12H19"
                        stroke="#21312A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="plan__price-item">
                <p class="desktop">
                  Should all your food delivered be once or twice in a week?
                </p>
                <p class="mobile">
                  Should we deliver all once or twice weekly?
                </p>
                <div class="btn--group">
                  <button
                    class="btn--item minus"
                    @click.prevent="decreaseFrequency()"
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
                        stroke="#21312A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <input
                    id=""
                    v-model="deliveryPerWeek"
                    type="number"
                    name=""
                    placeholder="0"
                    readonly
                    max="2"
                  />
                  <button
                    class="btn--item plus"
                    @click.prevent="increaseFrequency()"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5V19"
                        stroke="#21312A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5 12H19"
                        stroke="#21312A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="plan__price-bottom">
                <h5>
                  <span class="price">Price </span>
                  <span class="icon">👉 </span> NGN
                  {{ currencyFormat(totalWeeklyPrice) }}
                </h5>
                <p>Monthly</p>
              </div>
            </div>
          </transition>
        </div>
      </section>
    </div>

    <div class="container--options">
      <section class="options">
        <div class="options__title">
          <h3>Want more?</h3>
          <p>Take a look at our other services</p>
        </div>
        <div class="options__service">
          <div
            class="options__service-item options__service-laundry"
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
            <div class="options__service-bg">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611306544/eden-website-v2/laundry-img1_ijsx4k.png"
                alt="laundry"
              />
            </div>
          </div>
          <div
            class="options__service-item options__service-cleaning"
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
            <div class="options__service-bg">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611318736/eden-website-v2/cleaning-img1_ldwcml.png"
                alt="cleaning"
              />
            </div>
          </div>
          <!-- <div
            class="options__service-item options__service-gifting"
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
            <div class="options__service-bg">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/q_auto/v1612286532/eden-website-v2/giftimage_xjioyo.jpg"
                alt="gifting"
              />
            </div>
          </div> -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import foodMessages from '~/static/foodMessages'
import { pricing } from '~/static/pricing'
import {
  currencyFormat,
  scrollToApp,
  placeholderColorMix,
} from '~/static/functions'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import getSiteMeta from '~/utils/getSiteMeta'

export default {
  components: {
    Loader: () => import('@/components/Loader.vue'),
  },
  data() {
    return {
      headerText: [
        'perfect pasta',
        'spicy soups',
        'gorgeous gizdodo',
        'peng porridge',
        'savory seafood',
      ],
      tabs: [],
      activeTabIndex: null,
      setExploreService: false,
      exploreService: '',
      messageList: foodMessages,
      mealsPerDay: 1,
      mealsPerWeek: 5,
      deliveryPerWeek: 1,
      totalDailyPrice: null,
      totalWeeklyPrice: null,
      period: 'monthly',
      window: {
        width: 0,
        height: 0,
      },
      firstDateFormat: null,
      lastDateFormat: null,
      allMeal: [],
      mealsInCategory: [],
    }
  },
  head() {
    return {
      title: 'Eden | Food',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://ouredenlife.com/food`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        title: 'Eden | Food',
        description:
          'Your chef-cooked meals, delivered to you. Daily or weekly.',
        url: `https://ouredenlife.com/food`,
        mainImage: 'https://ouredenlife.com/edencardfood.png',
      }
      return getSiteMeta(metaData)
    },
  },

  mounted() {
    window.addEventListener('scroll', this.isInViewport)
    mixpanelTrackEvent('Food page')
    window.setInterval(() => {
      this.changeText()
    }, 2300)
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    this.totalDailyPrice = pricing({
      meal: { item: null, frequency: 'daily', qty: this.mealsPerDay },
    })
    this.totalWeeklyPrice = pricing({
      meal: { item: null, frequency: 'weekly', qty: this.mealsPerWeek },
    })
    this.fetchMeal()

    // scroll to menu
    const getRoute = this.$nuxt.$route.fullPath
    if (getRoute.includes('current-menu')) {
      this.scrollToMenu()
    }
  },

  destroyed() {
    window.removeEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.isInViewport)
  },
  methods: {
    currencyFormat,
    placeholderColorMix,
    optimizeImage(imgUrl, index) {
      const imageUrlTrim = imgUrl.substring(0, imgUrl.indexOf('/upload'))
      const imageFormat = imgUrl.substring(imgUrl.indexOf('/upload') + 7)
      if (index % 4 === 0) {
        return (
          imageUrlTrim +
          '/upload/f_auto,q_auto,e_shadow:100,x_1,y_60,co_rgb:E4E1DD10' +
          imageFormat
        )
      }
      if (index % 3 === 0) {
        return (
          imageUrlTrim +
          '/upload/f_auto,q_auto,e_shadow:100,x_1,y_60,co_rgb:DDE0E410' +
          imageFormat
        )
      }
      if (index % 2 === 0) {
        return (
          imageUrlTrim +
          '/upload/f_auto,q_auto,e_shadow:100,x_1,y_60,co_rgb:D7E3E510' +
          imageFormat
        )
      } else {
        return (
          imageUrlTrim +
          '/upload/f_auto,q_auto,e_shadow:100,x_1,y_60,co_rgb:D7E3E510' +
          imageFormat
        )
      }
    },
    isInViewport() {
      const element = document.querySelector('#food-video')
      const { top, bottom } = element.getBoundingClientRect()
      const vHeight =
        window.innerHeight || document.documentElement.clientHeight
      const isInView = (top > 0 || bottom > 0) && top < vHeight
      if (isInView) {
        this.playVideo()
        document.querySelector('svg.bee').setAttribute('class', 'timeline--b')
        document.querySelector('svg.cee').setAttribute('class', 'timeline--c')
        document.querySelector('svg.dee').setAttribute('class', 'timeline--d')
        document.querySelector('svg.eee').setAttribute('class', 'timeline--e')
      }
    },
    fetchMeal() {
      this.lastDateFormat = dayjs(new Date())
        .add(9, 'day')
        .format('DD MMM YYYY')
      this.firstDateFormat = dayjs(new Date())
        .add(2, 'day')
        .format('DD MMM YYYY')
      const dateData = dayjs(new Date()).add(2, 'day')
      // const dateData = dayjs(new Date()).format('DD-MM-YYYY')
      // TODO change to staging
      //   const dateData = dayjs(new Date()).add(2, 'day')
      // fetch(
      //   `https://api.edenlife.ng/api/v2/meal/items/all?current_date=02-05-2021`
      // )
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

    previousCategory() {
      let activeIndex = this.tabs.indexOf(this.activeTabIndex)
      this.changeCategory(this.tabs[activeIndex - 1])
    },
    nextCategory() {
      let activeIndex = this.tabs.indexOf(this.activeTabIndex)
      this.changeCategory(this.tabs[activeIndex + 1])
    },
    getMealsInEachCategory(items, category) {
      return items.filter(
        ({ class_category }) =>
          class_category && class_category.includes(category)
      )
    },
    changeText() {
      const first = this.headerText.shift()
      this.headerText = this.headerText.concat(first)
    },
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
      if (this.window.width < '768') {
        this.setExploreService = true
      } else this.setExploreService = false
    },
    scrollToMenu() {
      const scrollToElement = document.querySelector('#menu-options')
      scrollToElement.scrollIntoView()
    },
    scrollTo(ref) {
      mixpanelTrackEvent(`See our menu clicked - food page`)
      this.$refs[ref].scrollIntoView()
    },
    scrollToFooter(id, label) {
      scrollToApp(id, label)
    },
    increaseOrder(order) {
      mixpanelTrackEvent(`Increase ${order} order clicked - food page`)

      if (order === 'weekly') {
        this.mealsPerDay++
        this.totalDailyPrice = pricing({
          meal: { item: null, frequency: 'daily', qty: this.mealsPerDay },
        })
      }
      if (order === 'monthly') {
        this.mealsPerWeek++
        const freq = this.deliveryPerWeek === 1 ? 'weekly' : 'weekly-twodays'
        this.checkWeeklyFreq(freq)
      }
    },
    decreaseOrder(order) {
      mixpanelTrackEvent(`Decrease ${order} order clicked - food page`)

      if (order === 'weekly' && this.mealsPerDay > 1) {
        this.mealsPerDay--
        this.totalDailyPrice = pricing({
          meal: { item: null, frequency: 'daily', qty: this.mealsPerDay },
        })
      }
      if (order === 'monthly' && this.mealsPerWeek > 1) {
        this.mealsPerWeek--
        if (this.mealsPerWeek === 1) {
          this.deliveryPerWeek = 1
        }
        const freq = this.deliveryPerWeek === 1 ? 'weekly' : 'weekly-twodays'
        this.checkWeeklyFreq(freq)
      }
    },
    increaseFrequency() {
      mixpanelTrackEvent(`Increase order frequency clicked - food page`)

      if (this.deliveryPerWeek < 2 && this.mealsPerWeek > 1) {
        this.deliveryPerWeek++
        const freq = this.deliveryPerWeek === 1 ? 'weekly' : 'weekly-twodays'
        this.checkWeeklyFreq(freq)
      }
    },
    decreaseFrequency() {
      mixpanelTrackEvent(`Decrease order frequency clicked - food page`)

      if (this.deliveryPerWeek > 1) {
        this.deliveryPerWeek--
        const freq = this.deliveryPerWeek === 1 ? 'weekly' : 'weekly-twodays'
        this.checkWeeklyFreq(freq)
      }
    },
    checkWeeklyFreq(freq) {
      if (freq === 'weekly') {
        this.totalWeeklyPrice = pricing({
          meal: { item: null, frequency: freq, qty: this.mealsPerWeek },
        })
      } else {
        this.totalWeeklyPrice = pricing({
          meal: { item: null, frequency: freq, qty: this.mealsPerWeek * 2 },
        })
      }
    },
    trackLink(service) {
      mixpanelTrackEvent(`${service} clicked - Food (more options)`)
    },
    videoControl() {
      const video = document.querySelector('video')
      const slider = document.querySelector('.slider')
      const scrollToElement = document.querySelector(
        '.description__slider-text'
      )
      // control timeline with video play
      video.addEventListener('timeupdate', function () {
        if (this.currentTime < 8) {
          document.querySelector('.one').className = 'one view'
          document.querySelector('.two').className = 'two'
          document.querySelector('.three').className = 'three'
          document.querySelector('.btn--replay').className = 'btn--replay'
        } else if (this.currentTime > 11 && this.currentTime < 23) {
          scrollToElement.scrollLeft = 350
          document.querySelector('.two').className = 'two view'
          document.querySelector('.btn--replay').className = 'btn--replay'
        } else if (this.currentTime > 25) {
          scrollToElement.scrollLeft = 750
          document.querySelector('.three').className = 'three view'
          document.querySelector('.btn--replay').className = 'btn--replay show'
        }
      })

      // control video play with timeline clicks
      slider.addEventListener('click', function (e) {
        const clickedHeight = e.offsetY
        const percentageCovered = clickedHeight / this.offsetHeight
        const currentTime = percentageCovered * video.duration

        // can't get the video duration until it is playing
        if (video.currentTime > 0) {
          video.pause()
          video.currentTime = Math.round(currentTime)
          video.play()
        }
      })
    },
    playVideo() {
      const vid = document.querySelector('video')
      vid.play()
      this.videoControl()
    },
    playButtonClicked() {
      mixpanelTrackEvent('How it works replay - food')
      this.playVideo()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_food.scss';
</style>
