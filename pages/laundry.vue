<template>
  <div>
    <div class="container--hero">
      <header class="hero">
        <div class="hero__title">
          <h1>
            Save your <span> {{ headerText[0] }}</span> <br />
            Fresh laundry, in 48 hrs.
          </h1>

          <ul>
             <li>We pick up your dirty laundry ✔️</li>
            <li>We launder, iron, and QC ✔️</li>
            <li>We deliver your clean clothes, within 48 hours. ✔️</li>
          </ul>
          <div class="hero__button">
            <button
              type="button"
              class="hero__button-solid"
              @click.prevent="scrollToFooter('#get-the-app', 'laundry - hero')"
            >
              Pick Up My Laundry
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
                <h5>You Choose Your Plan</h5>
                <p>
                  Sign up on the Eden app. Choose a laundry schedule that works
                  for you; when you want it, how you want it. It takes less than
                  5 minutes!
                </p>
              </div>
              <div class="two">
                <h5>We Pickup and Execute</h5>
                <p>
                  We pick up your dirty clothes and beddings. Our professional
                  laundry partners wash, dry-clean, and iron all your clothing
                  items.
                </p>
              </div>
              <div class="three">
                <h5>We Deliver</h5>
                <p>
                  We QC and make sure all your clothes are intact and perfectly
                  laundered. And that's it! Your clothes are on their way to
                  you. All within 48 hours.
                </p>
              </div>
              <button
                type="button"
                class="btn"
                @click.prevent="
                  scrollToFooter('#get-the-app', 'laundry - how it works')
                "
              >
                Get the app
              </button>
            </div>
          </div>

          <div id="laundry-video" class="description__video">
            <div class="description__video-item">
              <video ref="videoRef" muted playsinline>
                <source
                  src="https://res.cloudinary.com/eden-life-inc/video/upload/v1612453848/eden-website-v2/033_Laundry_jalxqc.mp4"
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

    <div class="container--wall">
      <section class="wall">
        <div class="wall__title">
          <h3>The wall of 💚</h3>
        </div>
        <div class="wall__messages">
          <div v-for="(item, i) in LaundryMessage" :key="i" class="card">
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

    <div id="laundry-plan" class="container--plan">
      <section class="plan">
        <div class="plan__title">
          <h3>The Laundry Plans:<br /></h3>
          <p>
            Each laundry bag contains up to 30 clothing items, and you can track
            your order on the app.
          </p>
          <ul>
            <li>
              <h5 class="icon icon--one">👀</h5>
              <div class="icon--text">
                <h5>We'll pick up and deliver</h5>
                <p>in 48 hours.</p>
              </div>
            </li>
            <li>
              <h5 class="icon icon--two">🚛</h5>
              <div class="icon--text">
                <h5>We'll replace damaged items.</h5>
                <p>No questions asked.</p>
              </div>
            </li>
            <li>
              <h5 class="icon icon--three">👼</h5>
              <div class="icon--text">
                <h5>Pause Anytime.</h5>
                <p>On God!</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="plan__price">
          <ul class="plan__price--list">
            <li
              :class="{ active: plan === 'washDry' }"
              @click.prevent="plan = 'washDry'"
            >
              <span> Wash & Fold</span>
              <svg
                v-if="plan === 'washDry'"
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
              :class="{ active: plan === 'washIron' }"
              @click.prevent="plan = 'washIron'"
            >
              <span> Wash & Iron </span>
              <svg
                v-if="plan === 'washIron'"
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
          <!--  -->
          <transition name="slide-fade">
            <div v-if="plan === 'washDry'" class="plan__price-washDry">
              <div class="plan__price-item">
                <div class="plan__price-description">
                  <div class="plan__price-description-title">
                    <h5>Items that will cost you extra</h5>
                    <button
                      type="button"
                      class="expand"
                      @click.prevent="
                        showAdditionalLaundryCost = !showAdditionalLaundryCost
                      "
                    >
                      <svg
                        v-if="showAdditionalLaundryCost"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                          stroke="#7189ff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />

                        <path
                          d="M7 11H15"
                          stroke="#7189ff"
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
                          stroke="#7189ff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 8V16"
                          stroke="#7189ff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 12H16"
                          stroke="#7189ff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <ul
                    v-if="showAdditionalLaundryCost"
                    class="plan__price-description--list"
                  >
                    <li v-for="desc in extraLaundryCostWashDry" :key="desc">
                      <span>{{ desc.item }}</span>
                      <span>&#8358; {{ desc.cost }}</span>
                    </li>
                  </ul>
                </div>
                <p>
                  <span class="number">Number of laundry bags</span>
                  <span class="bag">Approx 30 items per bag</span>
                </p>
                <div class="btn--group">
                  <button
                    class="btn--item minus"
                    @click.prevent="decreaseOrder('washDry')"
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
                    v-model="washDry"
                    type="number"
                    name=""
                    readonly
                    placeholder="0"
                  />
                  <button
                    class="btn--item plus"
                    @click.prevent="increaseOrder('washDry')"
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
                <p><span class="number">Frequency</span></p>
                <div class="btn--group">
                  <button
                    class="btn--freq"
                    :class="{ active: washDryFrequency === 'weekly' }"
                    @click.prevent="laundryDryFrequency('weekly')"
                  >
                    Once a week
                  </button>
                  <button
                    class="btn--freq"
                    :class="{ active: washDryFrequency === 'bi-weekly' }"
                    @click.prevent="laundryDryFrequency('bi-weekly')"
                  >
                    Every 2 weeks
                  </button>
                  <button
                    class="btn--freq"
                    :class="{ active: washDryFrequency === 'monthly' }"
                    @click.prevent="laundryDryFrequency('monthly')"
                  >
                    Once a month
                  </button>
                </div>
              </div>
              <div class="plan__price-bottom">
                <h5>
                  <span class="price">Price </span>
                  <span class="icon">👉 </span> NGN
                  {{ currencyFormat(totalWashDryPrice) }}
                </h5>
                <p>Monthly</p>
              </div>
            </div>
          </transition>
          <transition name="slide-fade">
            <div v-if="plan === 'washIron'" class="plan__price-washDry">
              <div class="plan__price-item">
                <div class="plan__price-description">
                  <div class="plan__price-description-title">
                    <h5>Items that will cost you extra</h5>
                    <button
                      type="button"
                      class="expand"
                      @click.prevent="
                        showAdditionalLaundryCost = !showAdditionalLaundryCost
                      "
                    >
                      <svg
                        v-if="showAdditionalLaundryCost"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                          stroke="#7189ff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />

                        <path
                          d="M7 11H15"
                          stroke="#7189ff"
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
                          stroke="#7189ff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 8V16"
                          stroke="#7189ff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 12H16"
                          stroke="#7189ff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <ul
                    v-if="showAdditionalLaundryCost"
                    class="plan__price-description--list"
                  >
                    <li v-for="desc in extraLaundryCost" :key="desc">
                      <span>{{ desc.item }}</span>
                      <span>&#8358; {{ desc.cost }}</span>
                    </li>
                  </ul>
                </div>
                <p>
                  <span class="number">Number of laundry bags</span>
                  <span class="bag">Approx 30 items per bag</span>
                </p>
                <div class="btn--group">
                  <button
                    class="btn--item minus"
                    @click.prevent="decreaseOrder('washIron')"
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
                    v-model="washIron"
                    type="number"
                    name=""
                    placeholder="0"
                    readonly
                  />
                  <button
                    class="btn--item plus"
                    @click.prevent="increaseOrder('washIron')"
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
                <p><span class="number">Frequency</span></p>
                <div class="btn--group">
                  <button
                    :class="{ active: washIronFrequency === 'weekly' }"
                    class="btn--freq"
                    @click.prevent="laundryIronFrequency('weekly')"
                  >
                    Once a week
                  </button>
                  <button
                    class="btn--freq"
                    :class="{ active: washIronFrequency === 'bi-weekly' }"
                    @click.prevent="laundryIronFrequency('bi-weekly')"
                  >
                    Every 2 weeks
                  </button>
                  <button
                    class="btn--freq"
                    :class="{ active: washIronFrequency === 'monthly' }"
                    @click.prevent="laundryIronFrequency('monthly')"
                  >
                    Once a month
                  </button>
                </div>
              </div>
              <div class="plan__price-bottom">
                <h5>
                  <span class="price">Price </span>
                  <span class="icon">👉 </span>
                  {{ currencyFormat(totalWashIronPrice) }}
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
            class="options__service-item options__service-food"
            @mouseenter.stop="exploreService = 'food'"
            @mouseleave.stop="exploreService = ''"
            @click="trackLink('Food')"
          >
            <h3>🧺</h3>
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
            <div class="options__service-bg">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611318743/eden-website-v2/food-img1_ls530a.png"
                alt="food"
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
  <download-banner v-if="showDownloadBanner" :show-download-banner="showDownloadBanner" class="download-banner">
      <div slot="header"></div>
      <div slot="body" class="content">
        <div class="banner">
          <div>
            <button class="btn btn--success" @click="showDownloadBanner = false">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 12.25L12.25 1" stroke="#4B6358" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1 1L12.25 12.25" stroke="#4B6358" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611230252/eden-website-v2/eden-logo_lcepc6.svg"
              alt="Eden logo"
              width="42"
            />
          </div>
          <div>
            <p class="font-text">
              Enjoy the good life.
            </p>
            <p>Say goodbye to chores forever.</p>
          </div>
          <div>
            <button
              type="button"
              class="hero__button-solid banner-btn"
              @click.prevent="downloadApp('Download App - laundry banner')"
            >
              Install
            </button>
          </div>
        </div>
      </div>
      <div slot="footer"></div>
  </download-banner>
  </div>
</template>

<script>
import { pricing } from '~/static/pricing'
import { currencyFormat, scrollToApp } from '~/static/functions'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import getSiteMeta from '~/utils/getSiteMeta'

export default {
  data() {
    return {
      headerText: ['time', 'energy'],
      LaundryMessage: [
        {
          name: 'justin irabor',
          image: 'justin',
          description: `Under normal circumstances (since I'm always at home), it would make sense for me to wear as few clothes as possible and change them as sparingly as possible.<br><br>
          But I don't live under normal circumstances. I have an
          <span style="color:#03A84E"> @ouredenlife </span>laundry subscription.`,
          handle: 'LifeOfMogwai',
          tweetLink:
            'https://twitter.com/LifeOfMogwai/status/1274748508269154308?s=20',
        },
        {
          name: 'Tolu Ajiboye',
          image: 'tolu',
          description: `Bruh the actual worst. I haven’t done my own laundry in years. It’s even so stress-free now that I use <span style="color:#03A84E"> @ouredenlife </span>. I literally just put every single item into my laundry bag and they come pick it up and drop it back.`,
          handle: 'Yesmina_T',
          tweetLink:
            'https://twitter.com/Yesmina_T/status/1309270002722365441?s=20',
        },
        {
          name: 'Timi Ajiboye',
          image: 'timi',
          description: `Things “just working” with little input from me, makes me happy. I really like my laundry process now (<span style="color:#03A84E"> @ouredenlife </span> is a big part of that)`,
          handle: 'timigod',
          tweetLink:
            'https://twitter.com/timigod/status/1190320551837020165?s=20',
        },
        {
          name: 'Ash.',
          image: 'ash',
          description: `<span style="color:#03A84E"> @ouredenlife </span>'s laundry service is excellent! 👏🏾👏🏾👏🏾 10/10 will recommend.`,
          handle: 'hey_ashiwel',
          tweetLink:
            'https://twitter.com/hey_ashiwel/status/1210502785592102913?s=20',
        },
      ],
      showDownloadBanner: true,
      setExploreService: false,
      window: {
        width: 0,
        height: 0,
      },
      exploreService: '',
      washDry: 1,
      washIron: 1,
      washDryFrequency: 'weekly',
      washIronFrequency: 'weekly',
      plan: 'washDry',
      totalWashDryPrice: null,
      totalWashIronPrice: null,
      showAdditionalLaundryCost: false,
      extraLaundryCost: [
        { item: 'Extra item', cost: '1233' },
        { item: 'Jacket (2 items)', cost: '2466' },
        { item: 'Bedsheet (2 items)', cost: '2466' },
        { item: 'Trouser (Dry cleaning - 2 items)', cost: '2466' },
        { item: 'Stubborn Stain Removal', cost: '3000' },
        { item: 'Logistics charge for items on hanger', cost: '3500' },
        { item: 'Fancy dress/delicate dinner gown', cost: '3699' },
        { item: '2pcs Kaftan / Senator (Dry cleaning - 3 items)', cost: '3699' },
        { item: 'Blanket (3 items)', cost: '3699' },
        { item: 'Curtain (Per unit - 3 items)', cost: '3699' },
        { item: '3 piece Agbada (3 items) ', cost: '3699' },
        { item: 'Duvet (3 items)', cost: '3699' },
        { item: 'A pair of suit (3 items)', cost: '3699' },
        { item: '3 piece suit (4 items)', cost: '4930' }
      ],
      extraLaundryCostWashDry: [
        { item: 'Extra item', cost: '967' },
        { item: 'Jacket (2 items)', cost: '1935' },
        { item: 'Bedsheet (2 items)', cost: '1935' },
        { item: 'Trouser (Dry cleaning - 2 items)', cost: '1935' },
        { item: '2pcs Kaftan / Senator (Dry cleaning - 3 items)', cost: '2900' },
        { item: 'Blanket (3 items)', cost: '2900' },
        { item: 'Curtain (Per unit - 3 items)', cost: '2900' },
        { item: '3 piece Agbada (3 items) ', cost: '2900' },
        { item: 'Fancy dress/delicate dinner gown ', cost: '2900' },
        { item: 'Stubborn Stain Removal', cost: '3000' },
        { item: 'Logistics charge for items on hanger', cost: '3500' },
        { item: 'Duvet (4 items)', cost: '3868' },
        { item: 'A pair of suit (4 items)', cost: '3868' },
      ],
    }
  },
  head() {
    return {
      title: 'Eden | Laundry',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://ouredenlifev2-staging.netlify.app/laundry`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        title: 'Eden | Laundry',
        description:
          'Your clothes, picked up, laundered and delivered to you in 48 hours or less.',
        url: `https://ouredenlifev2-staging.netlify.app/laundry`,
        mainImage:
          'https://ouredenlifev2-staging.netlify.app/edencardlaundry.png',
      }
      return getSiteMeta(metaData)
    },
  },
  mounted() {
    window.addEventListener('scroll', this.isInViewport)
    mixpanelTrackEvent('Laundry page')
    window.setInterval(() => {
      this.changeText()
    }, 2300)
    window.addEventListener('resize', this.handleResize)
    this.handleResize()

    setTimeout(() => {
      this.totalWashDryPrice = this.caculateLaundryPricing('wash-and-fold', this.washDryFrequency, this.washDry )
      this.totalWashIronPrice = this.caculateLaundryPricing('wash-and-iron', this.washIronFrequency, this.washIron )
    }, 2000)
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.isInViewport)
  },
  methods: {
    currencyFormat,
    isInViewport() {
      const element = document.querySelector('#laundry-video')
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
    caculateLaundryPricing(item, frequency, qty) {
      return pricing({
      laundry: {
        item,
        frequency,
        qty,
        service_day: ['thursday']
      },
    })
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
    scrollToFooter(id, label) {
      scrollToApp(id, label)
    },
    increaseOrder(order) {
      mixpanelTrackEvent(`Increase ${order} order clicked - laundry page`)

      if (order === 'washDry') {
        this.washDry++
        this.totalWashDryPrice = this.caculateLaundryPricing('wash-and-fold', this.washDryFrequency, this.washDry )
      }

      if (order === 'washIron') {
        this.washIron++
        this.totalWashIronPrice = this.caculateLaundryPricing('wash-and-iron', this.washIronFrequency, this.washIron )
      }
    },
    decreaseOrder(order) {
      mixpanelTrackEvent(`Decrease ${order} order clicked - laundry page`)

      if (order === 'washDry' && this.washDry > 1) {
        this.washDry--
        this.totalWashDryPrice = this.caculateLaundryPricing('wash-and-fold', this.washDryFrequency, this.washDry )
      }

      if (order === 'washIron' && this.washIron > 1) {
        this.washIron--
        this.totalWashIronPrice = this.caculateLaundryPricing('wash-and-iron', this.washIronFrequency, this.washIron )
      }
    },
    laundryDryFrequency(freq) {
      mixpanelTrackEvent(` ${freq} wash&dry frequency clicked - laundry page`)

      this.washDryFrequency = freq
      this.totalWashDryPrice = this.caculateLaundryPricing('wash-and-fold', this.washDryFrequency, this.washDry )
    },
    laundryIronFrequency(freq) {
      mixpanelTrackEvent(` ${freq} wash&iron frequency clicked - laundry page`)

      this.washIronFrequency = freq
      this.totalWashIronPrice = this.caculateLaundryPricing('wash-and-iron', this.washIronFrequency, this.washIron )
    },
    trackLink(service) {
      mixpanelTrackEvent(`${service} clicked - Laundry (more options)`)
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
        } else if (this.currentTime > 11 && this.currentTime < 19) {
          scrollToElement.scrollLeft = 350
          document.querySelector('.two').className = 'two view'
          document.querySelector('.btn--replay').className = 'btn--replay'
        } else if (this.currentTime > 21) {
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
      mixpanelTrackEvent('How it works replay - laundry')
      this.playVideo()
    },
    downloadApp() {
       mixpanelTrackEvent('Download App - laundry banner')
      const userAgent = navigator.userAgent || navigator.vendor || window.opera
      if(/android/i.test(userAgent)){
            window.location.href =
           'https://play.google.com/store/apps/details?id=com.ouredenlife.app';
      }
      if(/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream){
          window.location.href =
         'https://apps.apple.com/us/app/eden-life/id1482373755?ls=1';
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_laundry.scss';
@import '@/assets/scss/components/_downloadbanner.scss';
</style>
