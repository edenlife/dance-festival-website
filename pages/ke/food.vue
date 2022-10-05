<template>
  <div>
    <div class="container--hero">
      <header class="hero">
        <div class="hero__title">
          <h1>
            Enjoy <span> {{ headerText[0] }}</span> <br />
            without the fuss
          </h1>
          <h1 class="mobile">
            Enjoy <span> {{ headerText[0] }}</span> <br />
            without the <br />fuss
          </h1>
          <p>
            A food subscription on Eden Life gets you delicious meals prepared
            by our team of chefs.
            <br />
            <br />
            No prep-time. No delivery fees. Just heat and eat.
          </p>
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
                  Sign-up on the Eden Life app. Then choose the meals you want
                  from our weekly menu, select how meals you'd like, and pay.
                </p>
              </div>
              <div class="two">
                <h5>We match</h5>
                <p>
                  Our team of expert chefs take it from here, preparing your
                  culinary fantasies with the freshest ingredients.
                </p>
              </div>
              <div class="three">
                <h5>We deliver!</h5>
                <p>
                  Your meals are ready and on their way. Eat immediately, or
                  freeze for later. Oh...and no extra delivery charge!
                </p>
              </div>
              <button
                type="button"
                class="btn"
                @click.prevent="trackDevice('Download App')"
              >
                Download App
              </button>
            </div>
          </div>
          <wait-list-form
            v-if="showWaitListForm"
            :showWaitListForm="showWaitListForm"
            @hideform="showWaitListForm = false"
            @showsuccess="showSuccessModal = true"
          />
          <modal
            v-if="showSuccessModal"
            :show-modal="showSuccessModal"
            class="modal"
          >
            <div slot="header"></div>
            <div slot="body" class="modal__body">
              <div class="company__modal">
                <div class="company__modal-title">
                  <button
                    class="btn btn--success"
                    @click="showSuccessModal = false"
                  >
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
                <div class="company__modal-body">
                  <img
                    :src="require(`~/assets/images/successful.svg`)"
                    alt="failed"
                  />
                  <h5>{{ modalText }} Submitted</h5>
                  <p>
                    You have successfully submitted your {{ modalText }}.
                    <button
                      type="submit"
                      class="btn--submit"
                      :disabled="loading"
                      @click.prevent="closeModal"
                    >
                      Okay, got it!
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div slot="footer"></div>
          </modal>

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
      <div v-if="!currentMeals.length" class="menu__loader">
        <Loader />
        <p>Loading menu...</p>
      </div>
      <transition name="slide-fade">
        <Menu
          v-if="currentMeals.length && showCurrentMenu"
          :meals="currentMeals"
          :nextMeals="nextWeekMeals"
          :title="'Current Menu'"
          :firstDateFormat="firstDateFormat"
          :lastDateFormat="lastDateFormat"
          @showNext="toggleMenu('next')"
        />
      </transition>

      <transition name="slide-fade">
        <Menu
          v-if="showNextMenu"
          :meals="nextWeekMeals"
          :title="`Next week's Menu`"
          :firstDateFormat="nextFirstDateFormat"
          :lastDateFormat="nextLastDateFormat"
          @showCurrent="toggleMenu('current')"
        />
      </transition>
      <section v-if="currentMeals.length" class="menu">
        <button
          v-if="currentMeals.length"
          type="button"
          class="btn"
          @click.prevent="trackDevice('I want a meal plan - KE')"
        >
          I Want a Meal Plan
        </button>
      </section>
    </div>
    <div class="container--plan">
      <section class="plan">
        <div class="plan__title">
          <h3>You have questions?<br />We have answers.</h3>
          <p>
            We've Got You Covered: We'll match and connect you with the closest
            and most qualified service partners. All you have to do is sit back,
            wait for your confirmation booking and let us know if you need
            anything else before your service. We guarantee you'll enjoy!
          </p>
        </div>

        <div class="plan__price light">
          <div>
            <div class="plan__price-item">
              <div
                v-for="(item, index) in questions"
                :key="index"
                class="plan__price-description light"
              >
                <div class="plan__price-description-title light">
                  <h5>{{ item.question }}</h5>
                  <button
                    type="button"
                    class="expand"
                    @click.prevent="openQuestion(item.position)"
                  >
                    <svg
                      v-if="activeQuestion === item.position"
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
                  <p v-if="activeQuestion === item.position">
                    {{ item.answer }}
                  </p>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="container--plan">
      <section class="plan">
        <div class="plan__title">
          <h3>
            The Food Plans:<br />
            Don't Stress.<br />
            Just Eat.
          </h3>
          <p>
            Enjoy all the deliciousness of healthy food, right on time, with
            none of the stress.
          </p>
          <ul>
            <li>
              <h5 class="icon icon--one">👀</h5>
              <div class="icon--text">
                <h5>No hidden payments.</h5>
                <p>Yessir.</p>
              </div>
            </li>
            <li>
              <h5 class="icon icon--two">🚛</h5>
              <div class="icon--text">
                <h5>No hidden delivery fees.</h5>
                <p>100%</p>
              </div>
            </li>
            <li>
              <h5 class="icon icon--three">👼</h5>
              <div class="icon--text">
                <h5>Pause anytime.</h5>
                <p>On God!</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="plan__price">
          <ul>
            <li
              :class="{ active: period === 'daily' }"
              @click.prevent="period = 'daily'"
            >
              <span> Daily Delivery </span>
              <svg
                v-if="period === 'daily'"
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
              :class="{ active: period === 'weekly' }"
              @click.prevent="period = 'weekly'"
            >
              <span> Weekly delivery </span>
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
          </ul>
          <transition name="slide-fade">
            <div v-if="period === 'daily'" class="plan__price-weekly">
              <div class="plan__price-item one">
                <p>How many meals do you want daily?</p>
                <div class="btn--group">
                  <button
                    class="btn--item minus"
                    @click.prevent="decreaseOrder('daily')"
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
                    @click.prevent="increaseOrder('daily')"
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
                <div class="calculator__input">
                  <div
                    class="calculator__input-item calculator__input-delivery"
                  >
                    <div class="plan__price-item">
                      <p>Delivery days</p>
                    </div>
                    <div class="delivery">
                      <div
                        v-for="(item, i) in dailyDeliveryDays"
                        :key="i"
                        class="delivery__days daily"
                      >
                        <div
                          class="delivery__days-item"
                          :class="{ checked: selectedDays.includes(item) }"
                        >
                          <input
                            :id="item"
                            v-model="selectedDays"
                            type="checkbox"
                            :value="item"
                            @change="updateDeliveyDay(item)"
                          />
                          <label :for="item">{{ item }}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="plan__price-bottom">
                <h5>
                  <span class="price">Price </span>
                  <span class="icon">👉 </span> KES
                  {{ currencyFormat(totalDailyPrice) }}
                </h5>
                <p>Monthly</p>
              </div>
            </div>
          </transition>
          <transition name="slide-fade">
            <div v-if="period === 'weekly'" class="plan__price-monthly">
              <div class="plan__price-item">
                <p>How many meals do you want every week?</p>
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
                    v-model="mealsPerWeek"
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
                  <span class="icon">👉 </span> KES
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
            <p>
              Fresh, clean and crisp clothes at your doorstep. Whenever you need
              it .
            </p>
            <nuxt-link :to="{ path: '/ke/laundry/' }" class="btn">
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
            <h5>Cleaning</h5>
            <p>Professional cleaning at your doorstep. Up to thrice a week.</p>
            <nuxt-link :to="{ path: '/ke/cleaning/' }" class="btn">
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
          <div
            class="options__service-item options__service-manicure"
            @mouseenter.stop="exploreService = 'beauty'"
            @mouseleave.stop="exploreService = ''"
          >
            <h3>💅</h3>
            <h5>Beauty</h5>
            <p>Spa quality treatments at your fingertips. Weekly or monthly.</p>
            <nuxt-link :to="{ path: '/ke/beauty/' }" class="btn">
              {{
                exploreService === 'beauty' || setExploreService
                  ? 'Explore!'
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
                  fill="#E558A3"
                />
              </svg>
            </nuxt-link>
            <div class="options__service-bg">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1630574158/eden-website-v2/spa_qwj4nq.jpg"
                alt="beauty"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    <download-banner
      v-if="showDownloadBanner"
      :show-download-banner="showDownloadBanner"
      class="download-banner"
    >
      <div slot="header"></div>
      <div slot="body" class="content">
        <div class="banner">
          <div>
            <button
              class="btn btn--success"
              @click="showDownloadBanner = false"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 12.25L12.25 1"
                  stroke="#4B6358"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 1L12.25 12.25"
                  stroke="#4B6358"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
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
            <p class="font-text">Enjoy the good life.</p>
            <p>Say goodbye to chores forever.</p>
          </div>
          <div>
            <button
              type="button"
              class="hero__button-solid banner-btn"
              @click.prevent="trackDevice('Download App - food banner')"
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
import dayjs from 'dayjs'
import { pricing } from '~/static/ke/pricing'
import {
  currencyFormat,
  scrollToApp,
  placeholderColorMix,
} from '~/static/functions'
import { mixpanelTrackEvent } from '~/plugins/ke/mixpanel'
import getSiteMeta from '~/utils/getSiteMeta'

export default {
  components: {
    Loader: () => import('@/components/Loader.vue'),
    Modal: () => import('@/components/Modal.vue'),
    WaitListForm: () => import('@/components/ke/WaitListForm.vue'),
    Menu: () => import('@/components/Menu.vue'),
  },
  layout: 'ke-default',
  data() {
    return {
      headerText: [
        'sumptuous rice bowls',
        'special curries',
        'healthy salads',
        'perfect pastas',
      ],
      tabs: [],
      mealFrequency: '',
      dailyDeliveryDays: ['monday-friday', 'monday-saturday'],
      selectedDays: ['monday-friday'],
      showDownloadBanner: true,
      activeTabIndex: null,
      setExploreService: false,
      exploreService: '',
      mealsPerDay: 1,
      mealsPerWeek: 10,
      deliveryPerWeek: 1,
      totalDailyPrice: null,
      totalWeeklyPrice: null,
      period: 'weekly',
      window: {
        width: 0,
        height: 0,
      },
      firstDateFormat: null,
      lastDateFormat: null,
      nextFirstDateFormat: null,
      nextLastDateFormat: null,
      currentDay: null,
      allMeal: [],
      currentMeals: [],
      nextWeekMeals: [],
      mealsInCategory: [],
      showCurrentMenu: true,
      showNextMenu: false,
      questions: [
        {
          position: 'one',
          question: 'Where does the service take place?',
          answer:
            " All services ordered through Eden are delivered directly to you in the comfort of your home or any other place you'd like the service to be delivered e.g. your office, a friend's house etc. Simply drop the pin on your specific location when ordering the service.		",
        },
        {
          position: 'two',
          question:
            'How fast will my order be processed and/or how long should I expect to wait before I am matched with a Service Partner?',
          answer:
            ' To ensure that we connect you with the right Service Partner (SP), we require up to 48 hours to find the best fit for you. Orders can only be scheduled between 7am - 5pm.		',
        },
        {
          position: 'three',
          question: 'Why can I trust Eden and who will you be sending? ',
          answer:
            'We established our first branch in Lagos in 2019 and have grown our customer base to 5000+ customers. Having delivered 50,000+ services in Lagos alone, we have a deep understanding of how to deliver quality services at an affordable price. We have a rigourous vetting and onboarding process and select only the best Service Partners (SPs) to work with us. SPs review a comprehensive onboarding and trainings while engaged on our platform. Eden serves as a neutral intermediary to ensure all work delivered to you is hassle free. This means ensuring that the Service Partners we connect you with have a breadth of experience, are professional, trained, an/or  certified in their craft. Once we find the right match, we will notify you of the details of your SP before the service. 		',
        },
        {
          position: 'four',
          question: 'What locations do you service?',
          answer:
            'We currently only service the following locations, but will be expanding to other locations within Nairobi soon: Brookside,Kileleshwa, Kilimani, Langata,Lavington, Madaraka, Nairobi West, Ngumo, Parklands, Riara Road, South C ,South B, Upperhill, Westlands ',
        },
        {
          position: 'five',
          question: 'Can I pay after?',
          answer:
            ' In order to guarantee quality, we require upfront payments. This allows us to ensure that the right materials and tools are stocked and that any changes or rescheduling can be allocated for. All Eden services are billed as subscriptions and are payable monthly during your billing cycle. 		',
        },
        {
          position: 'six',
          question: 'How do food subscriptions at Eden work?',
          answer:
            " It's pretty simple. Browse our menu, select what items you want, select the days you want them and pay for those meals. To ensure that you don't get bored, each Wedensday at 5pm we'll publish a new menu for you to select meals for the following week. Your Gardener is on standby to help answer any questions you have, and to ensure you lock in your meals before Friday at 8:00pm when the window closes.		",
        },
        {
          position: 'seven',
          question: 'What kind of food do you serve?  ',
          answer:
            "As part of our promise to 10x the quality of life across African cities, we're commited to ensuring that Eden subscribers have access to the best of the best. In food, this means providing a variety of meal options across our menu to ensure that you have the relief of know that we've selected a diverse set of food to keep you excited and covered. Thanks to our talented team, each month, you'll be introduced to 2 different menus featuring a variety of meals from around the world!",
        },
        {
          position: 'eight',
          question: 'Who makes my meals and where are they made? ',
          answer:
            'Unlike other Eden services, all meals are curated in our Safari Kitchen by our inhoused team of chefs, cooks and service staff. The location your meals are made is uniquely designed and controlled to ensure that all meals packed and deliver are healthy, safe and delicious. Our rigorous and standardized process makes it possible for our Eden Safari Kitchen to deliver a consistent experience of scrumptous food to our customers. 		',
        },
        {
          position: 'nine',
          question: 'How do I know my food is fresh?',
          answer:
            " In order to ensure that you receive fresh food, our kitchen operates on a tight shift Monday-Monday between 6:00 am - 6:00pm. This enables us to make all meals the day they're delivered. Eden meals are packed to be frozen or microwaved on delivery. Each meal is carefully sealed and labelled with information that also guides you on the shelf life of each item. 		",
        },

        {
          position: 'ten',
          question: 'When should I expect to get my service?',
          answer:
            "All Eden's meals are delivered between 11:00am - 1:00pm. Your meals can be delivered daily (at an extra cost) or during our bi-weekly deliveries on Mondays and Thursdays for customers subscribed to weekly meals (5 or more meals). Your Gardener will inform you when your meals are on the way and have arrived at your location.",
        },
        {
          position: 'eleven',
          question: 'What if I want to change or add on additional services? ',
          answer:
            'Everyday our kitchen works alongside our finance, procurement, operations and logistics team to ensure we have the right ingredients to make magic happen. Given that we need sufficient time to source, prep and cook each meal, we need at least 48 hours advanced notifce to change your order e.g. if you want to change your meals on Sunday, this will only be reflected for delivery on Wednesday. Please notify your Gardener of any changes to your menu items. 		',
        },
        {
          position: 'twelve',
          question:
            'I am not happy with the quality of the service? Will I get compensated? ',
          answer:
            'We are committed to ensuring the best of quality at the most affordable of prices. Should you be dissatisfied with your service we recommend that you provide feedback to our Customer Success team within 24 hours via your app or directly on our phone number. We deal with each complaint on a case by case basis and offer several options for resolution e.g. redoing of the service, or Eden credit.		',
        },
        {
          position: 'thirteen',
          question: "There are items missing / I received someone else's food?",
          answer:
            "We work diligently to ensure that you your meals are delivered without any mixups. We've created a comprehensive internal tracking system to monitor each part of the food production process from the time your food started cooking, to when it was ready, when it was plated, packed, sealed and dispatched. This allows us to cut down the risk of getting your meals mixed up. In the event that we get the wrong meals to you or there are items missing from your meal, please notify your Gardener immediately and we will work diligently to resolve the matter.",
        },
        {
          position: 'fourteen',
          question: 'I am no longer available for my food to be dropped off? ',
          answer:
            'Given the scale of our food operations, we require advance notice of any cancellations. Please notify your Gardener 24 hours ahead of time if you will not be available or directly contact us on our business phone number. The earlier you are able to confirm, the better we are able to intervene and cancel your order without additional charges.		',
        },
        {
          position: 'fifteen',
          question:
            'I want my food to be dropped off at a different location: ',
          answer:
            'In order to ensure that we deliver your meals to you on your selected date and within the 11:00am - 1:00pm window, we need at least 24 hours notice for changes in location. Please notify your Gardener within this window to ensure your food is dropped off at the correct location.		',
        },
      ],
      activeQuestion: 'one',
      modalText: 'information',
      showWaitListForm: false,
      visible: false,
      showSuccessModal: false,
      loading: false,
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
          href: `https://ouredenlife.com/ke/food/`,
        },
        {
          rel: 'alternate',
          hreflang: 'en-ng',
          href: 'https://ouredenlife.com/food/',
        },
        {
          rel: 'alternate',
          hreflang: 'en-ke',
          href: 'https://ouredenlife.com/ke/food/',
        },
        {
          rel: 'alternate',
          hreflang: 'x-default',
          href: 'https://ouredenlife.com/food/',
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
        url: `https://ouredenlife.com/ke/food/`,
        mainImage: 'https://ouredenlife.com/ke/edencardfood.png',
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
    setTimeout(() => {
      this.totalDailyPrice = this.calculatePrice('daily', this.mealsPerDay)
      this.totalWeeklyPrice = this.calculatePrice('weekly', this.mealsPerWeek)
    }, 2000)
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
    toggleMenu(menu) {
      if (menu === 'next') {
        this.showCurrentMenu = false
        this.showNextMenu = true
      } else {
        this.showNextMenu = false
        this.showCurrentMenu = true
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
    async fetchMeal() {
      const dateData = dayjs(new Date()).format('DD-MM-YYYY')
      let nextDateData
      this.currentDay = dayjs().day()
      this.lastDateFormat = dayjs(new Date())
        .endOf('week')
        .format('DD MMM YYYY')
      this.firstDateFormat = dayjs(new Date())
        .startOf('week')
        .format('DD MMM YYYY')

      switch (this.currentDay) {
        case 4:
          this.nextLastDateFormat = dayjs(new Date())
            .add(9, 'day')
            .format('DD MMM YYYY')
          this.nextFirstDateFormat = dayjs(new Date())
            .add(3, 'day')
            .format('DD MMM YYYY')
          nextDateData = dayjs(new Date()).add(3, 'day').format('DD MMM YYYY')
          break
        case 5:
          this.nextLastDateFormat = dayjs(new Date())
            .add(8, 'day')
            .format('DD MMM YYYY')
          this.nextFirstDateFormat = dayjs(new Date())
            .add(2, 'day')
            .format('DD MMM YYYY')
          nextDateData = dayjs(new Date()).add(2, 'day').format('DD MMM YYYY')
          break
        case 6:
          this.nextLastDateFormat = dayjs(new Date())
            .add(7, 'day')
            .format('DD MMM YYYY')
          this.nextFirstDateFormat = dayjs(new Date())
            .add(1, 'day')
            .format('DD MMM YYYY')
          nextDateData = dayjs(new Date()).add(1, 'day').format('DD MMM YYYY')
          break

        default:
          break
      }

      fetch(
        `https://api.edenlife.ng/api/v2/meal/items/all?current_date=${dateData}`,
        {
          headers: { 'x-eden-location': 'KE' },
        }
      )
        .then((res) => res.json())
        .then((meals) => {
          this.currentMeals = meals.data
        })

      if (this.currentDay >= 4) {
        fetch(
          `https://api.edenlife.ng/api/v2/meal/items/all?current_date=${nextDateData}`,
          {
            headers: { 'x-eden-location': 'KE' },
          }
        )
          .then((res) => res.json())
          .then((meals) => {
            this.nextWeekMeals = meals.data
          })
      }
    },

    openQuestion(question) {
      if (this.activeQuestion === question) {
        this.activeQuestion = ''
      } else this.activeQuestion = question
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
    updateDeliveyDay(item) {
      this.selectedDays = []
      this.selectedDays.push(item)
      this.totalDailyPrice = this.calculatePrice('daily', this.mealsPerDay)
    },
    increaseOrder(order) {
      mixpanelTrackEvent(`Increase ${order} order clicked - food page`)

      if (order === 'daily') {
        this.mealsPerDay++
        this.totalDailyPrice = this.calculatePrice('daily', this.mealsPerDay)
      }
      if (order === 'weekly') {
        this.mealsPerWeek++
        const freq = this.deliveryPerWeek === 1 ? 'weekly' : 'weekly-twodays'
        this.totalWeeklyPrice = this.calculatePrice('weekly', this.mealsPerWeek)
      }
    },
    decreaseOrder(order) {
      mixpanelTrackEvent(`Decrease ${order} order clicked - food page`)

      if (order === 'daily' && this.mealsPerDay > 1) {
        this.mealsPerDay--
        this.totalDailyPrice = this.calculatePrice('daily', this.mealsPerDay)
      }
      if (order === 'weekly' && this.mealsPerWeek > 1) {
        this.mealsPerWeek--
        if (this.mealsPerWeek === 1) {
          this.deliveryPerWeek = 1
        }

        const freq = this.deliveryPerWeek === 1 ? 'weekly' : 'weekly-twodays'
        this.totalWeeklyPrice = this.calculatePrice('weekly', this.mealsPerWeek)
      }
    },
    increaseFrequency() {
      mixpanelTrackEvent(`Increase order frequency clicked - food page`)

      if (this.deliveryPerWeek < 2 && this.mealsPerWeek > 1) {
        this.deliveryPerWeek++
        const freq = this.deliveryPerWeek === 1 ? 'weekly' : 'weekly-twodays'
        this.totalWeeklyPrice = this.calculatePrice('weekly', this.mealsPerWeek)
      }
    },
    decreaseFrequency() {
      mixpanelTrackEvent(`Decrease order frequency clicked - food page`)

      if (this.deliveryPerWeek > 1) {
        this.deliveryPerWeek--
        const freq = this.deliveryPerWeek === 1 ? 'weekly' : 'weekly-twodays'
        this.totalWeeklyPrice = this.calculatePrice('weekly', this.mealsPerWeek)
      }
    },
    calculatePrice(frequency, quantity) {
      const days = [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
      ]
      const service_day = {
        daily:
          this.selectedDays[0] === 'monday-friday' ? days.slice(0, 5) : days,
        weekly: days.slice(0, 1),
        'weekly-twodays': days.slice(0, 2),
      }
      if (frequency === 'daily') {
        this.mealsPerDay = this.mealsPerDay > 5 ? 5 : this.mealsPerDay
      }
      const qty = frequency === 'daily' ? this.mealsPerDay : this.mealsPerWeek
      const qtyPerWeek =
        frequency === 'daily'
          ? this.mealsPerDay * service_day[frequency].length
          : this.mealsPerWeek
      const mealPrice = pricing({
        meal: {
          item: null,
          frequency: frequency,
          qty: qtyPerWeek,
          service_day: service_day[frequency],
          meal_per_delivery: service_day[frequency].reduce((days, day) => {
            return {
              same_number_per_delivery: true,
              ...days,
              [day]: qty,
            }
          }, {}),
        },
      })
      return mealPrice
    },
    checkWeeklyFreq(freq) {
      if (freq === 'daily') {
        this.totalWeeklyPrice = this.calculatePrice('weekly', this.mealsPerWeek)
      } else {
        this.totalWeeklyPrice = this.calculatePrice(
          'weekly-twodays',
          this.mealsPerWeek * 2
        )
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
    trackDevice(label) {
      mixpanelTrackEvent(label)
      const userAgent = navigator.userAgent || navigator.vendor || window.opera
      if (/android/i.test(userAgent)) {
        window.location.href =
          'https://play.google.com/store/apps/details?id=com.ouredenlife.app'
      }
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href =
          'https://apps.apple.com/us/app/eden-life/id1482373755?ls=1'
      } else {
        this.scrollToFooter('#get-the-app', 'Download App')
      }
    },
    playButtonClicked() {
      mixpanelTrackEvent('How it works replay - food')
      this.playVideo()
    },
    getEarlyAccess() {
      this.showWaitListForm = true
      this.modalText = 'information'
    },
    closeModal() {
      this.showSuccessModal = !this.showSuccessModal
    },
    trackDevice(label) {
      mixpanelTrackEvent(label)
      const userAgent = navigator.userAgent || navigator.vendor || window.opera
      if (/android/i.test(userAgent)) {
        window.location.href =
          'https://play.google.com/store/apps/details?id=com.ouredenlife.app'
      }
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href =
          'https://apps.apple.com/us/app/eden-life/id1482373755?ls=1'
      } else {
        this.scrollToFooter('#get-the-app', 'Download App')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/ke/_food.scss';
@import '@/assets/scss/components/_modal-body.scss';
@import '@/assets/scss/components/_downloadbanner.scss';
</style>
