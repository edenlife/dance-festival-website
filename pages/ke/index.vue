<template>
  <div>
    <div class="container--hero">
      <div class="hero">
        <div class="hero__title">
          <div class="hero__title-status"></div>
          <h1>
            Say goodbye to <br />

            <span v-if="services[0].value === 'beauty'">
              {{ services[0].title }}

              and hello to

              <span :style="getServiceColor(services[0].value)">
                wellness
              </span>
            </span>

            <span v-else>
              <span :style="getServiceColor(services[0].value)">{{
                services[0].title
              }}</span>
              <br />

              <span>forever</span>
            </span>
          </h1>
          <p>
            We take care of you, so you can get more out of life. It's what
            you've always dreamed of.
          </p>
          <!-- <div class="hero__button">
            <button
              type="button"
              class="hero__button-solid"
              @click.prevent="showLeadListForm = true"
            >
              Download App
            </button>
          </div> -->
          <div class="hero__button">
            <button
              type="button"
              class="hero__button-solid"
              @click.prevent="trackDevice('Download btn')"
            >
              Download App
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
      </div>
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
          >
            <h3>🥘</h3>
            <h5>Food</h5>
            <p>
              Curated meals prepared fresh at a fraction of the cost. Weekly.
            </p>
            <nuxt-link :to="{ path: '/ke/food' }" class="btn">
              {{
                exploreService === 'food' || setExploreService ? 'Explore!' : ''
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
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1651163849/jollof_rice_BBQ_wings_fried_plantain_1_lxgnha.png"
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
            <div class="services__type-bg">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1652887949/eden-website-v2/Laundry_4_1_vnsh9q.png"
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
            <h5>Cleaning</h5>
            <p>
              Professional cleaning services at your doorstep. Up to three times
              a week.
            </p>
            <nuxt-link :to="{ path: '/ke/cleaning/' }" class="btn">
              {{
                exploreService === 'cleaning' || setExploreService
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

          <div
            class="services__type-item services__type-manicure"
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
            <div class="services__type-bg">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1630574158/eden-website-v2/spa_qwj4nq.jpg"
                alt="beauty"
              />
            </div>
          </div>
          <div class="services__type-item add--item">
            <h5>Want a service that’s not listed?</h5>
            <p>
              Send in your suggestions and we’ll take them into consideration.
            </p>
            <form class="form__input">
              <!-- <input
                id=""
                v-model="suggestion.email"
                type="email"
                name=""
                placeholder="Enter your email"
                :class="{ 'has-error': $v.suggestion.email.$error }"
              /> -->
              <div class="form__input-item">
                <input
                  id=""
                  v-model="suggestion.service"
                  type="text"
                  name="serv"
                  placeholder="Type your suggestion"
                  :class="{ 'has-error': $v.suggestion.service.$error }"
                />

                <button
                  type="submit"
                  class="form__input-btn"
                  :disabled="loading"
                  @click.prevent="submitSuggestion"
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
      </section>
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
                  Sign-up on the Eden Life app. Choose your desired service(s)
                  and tell us all the details we need to help you get started
                  with your Eden Life.
                </p>
              </div>
              <div class="two">
                <h5>Get a Gardener assigned to you</h5>
                <p>
                  These are your Home Managers - people who are trained to
                  handle your requests with ease and enthusiasm.
                </p>
              </div>
              <div class="three">
                <h5>Live the good life</h5>
                <p>
                  Sit back, watch and relax as all your home needs are taken
                  care of and delivered by the best team.
                </p>
              </div>
              <!-- <button
                type="button"
                class="btn"
              @click.prevent="showLeadListForm = true"
              >
                Download App
              </button> -->
              <button type="button" class="btn" @click.prevent="trackDevice('Download app - homepage')">
                Download App
              </button>
            </div>
          </div>

          <div id="cleaning-video" class="description__video">
            <div class="description__video-item">
              <video ref="videoRef" muted playsinline>
                <source
                  src="https://res.cloudinary.com/eden-life-inc/video/upload/v1612453847/eden-website-v2/032_Cleaning_fezstm.mp4"
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

    <div class="container--customers">
      <section class="customers">
        <div class="customers__title">
          <h3>The wall of 💚</h3>

          <div>
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
                  <p class="card__title-handle">{{ item.handle }}</p>
                </div>
              </div>
              <p class="card__description" v-html="item.description"></p
            ></a>
          </div>
        </div>
      </section>
    </div>

    <div class="container--questions">
      <section class="questions">
        <div class="questions__title">
          <h3>You have questions?<br />We have answers.</h3>
          <div class="questions__title-form">
            <p>Not in Nairobi?</p>
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
                Easy. We're bringing the convenience of room service to cities
                across Africa. We started with Lagos and have launched in
                Nairobi. With Eden, you can outsource all routine tasks to us,
                so you can focus on the things with the most impact. From work,
                to family time and relaxation, y ou deserve to live stress free
                and at your convenience with extra comfort. <br />Some people
                call us the <strong><i>Concierge of Comfort </i></strong>–
                they're correct.
              </p>
            </transition>
          </div>
          <div class="questions__description-item">
            <div class="questions__description-title">
              <h5>What services do you offer?</h5>
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
                Currently, we provide 4 main services, food, cleaning, laundry
                and beauty. As an Eden Life subscriber you get to choose between
                any or all of the services that work best for you. Need food? We
                got your week covered. Dirty laundry, send it our way and get it
                back within no timem freshly washed, folded and ironed. Home or
                office need a good clean? We do that as well. Need some
                pampering? Our nail technologists, massage therapists and waxers
                will deliver services at your convenience.
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
                  @click.prevent="
                    scrollToFooter('#get-the-app', 'homepage-faq')
                  "
                  >Eden</a
                >, you can configure a plan that fits your needs, then you get
                assigned a Gardener to help you manage your home or office. The
                app takes your food, cleaning, laundry, and beauty needs and
                turns them into tasks that our Gardeners attend to on schedule.
                The only finger you'll be lifting is the one scrolling through
                the app, monitoring progress.
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
                Gardeners are the human side of Eden. They manage all your
                requests to ensure that your life is hassle-free, always. Each
                gardener has been carefully screened and trained to handle all
                your requests with great attention to detail.
                <br />
                <br />
                They have one job - to understand all the things you need to
                live your best Eden life, and to ensure that we provide you with
                exactly that.
                <br />
                <br />
                When you sign up on Eden, you have access to your Gardener's
                profile that list information on who they are and what they do.
              </p>
            </transition>
          </div>
          <div class="questions__description-item">
            <div class="questions__description-title">
              <h5>Why is it important to have a gardener?</h5>
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
                Think of your Gardener as your link to an ever-expanding world
                of Eden services you can take advantage of. Your Gardener helps
                you access a variety of services from
                <strong>
                  food, to cleaning and laundry, beauty and more.</strong
                >
                And that's just the beginning.
                <br />
                <br />
                If there’s ever a service you wish your Gardener provided (that
                they don’t, as yet), select the ‘Feedback’ option on the
                Gardener profile, and we’ll get the message!
              </p>
            </transition>
          </div>
          <div class="questions__description-item">
            <div class="questions__description-title">
              <h5>Will my Gardener manage only my requests?</h5>
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
          <p>Not in Nairobi?</p>
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
                @click.prevent="submitForm"
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
            href="https://techcabal.com/2022/04/29/techcabal-daily-eden-is-in-kenya/"
            target="_blank"
          >
            <img
              :src="require(`~/assets/images/techcabal.svg`)"
              alt="techcabal"
          /></a>
          <a
            href="https://techpoint.africa/2022/04/29/techpoint-digest-313/eden-life-app/"
            target="_blank"
          >
            <img
              :src="require(`~/assets/images/techpoint.svg`)"
              alt="techpoint"
          /></a>
          <a
            href="https://businessday.ng/technology/article/eden-life-acquires-kenyan-lynk-in-push-for-east-african-market/"
            target="_blank"
          >
            <img
              :src="require(`~/assets/images/business-day.svg`)"
              alt="business day"
          /></a>
          <a href="https://africansbuildingafrica.co/?p=11811" target="_blank">
            <img :src="require(`~/assets/images/press2.svg`)" alt="press2"
          /></a>
          <a
            href="https://techtrendske.co.ke/nigerias-home-services-subscription-app-eden-life-acquires-kenyas-lynk/"
            target="_blank"
          >
            <img
              :src="require(`~/assets/images/Tech-trends.svg`)"
              alt="tech trends"
          /></a>
        </div>
        <div class="press__link-two">
          <a
            href="https://ceobusinessafrica.com/eden-life-acquires-technology-startup-lynk-for-strategic-partnership-in-kenya/"
            target="_blank"
          >
            <img
              :src="require(`~/assets/images/business-africa.svg`)"
              alt="business africa"
          /></a>
          <a
            href="https://hapakenya.com/2022/05/02/home-concierge-platform-eden-life-expands-to-kenya-acquires-lynk/"
            target="_blank"
          >
            <img
              :src="require(`~/assets/images/hapa-kenya.svg`)"
              alt="hapa kenya"
          /></a>
          <a
            href="https://innovation-village.com/eden-life-expands-to-kenya-and-acquires-lynk/"
            target="_blank"
          >
            <img
              :src="require(`~/assets/images/innovation-village.svg`)"
              alt="innovation villa"
          /></a>
          <a
            href="https://kenyandigest.com/home-services-subscription-app-eden-life-has-expanded-to-kenya/"
            target="_blank"
          >
            <img :src="require(`~/assets/images/kd.svg`)" alt="KD"
          /></a>
        </div>
      </section>
    </div>

    <LeadList
      v-if="showLeadListForm"
      :showLeadListForm="showLeadListForm"
      @hideform="showLeadListForm = false"
      @showsuccess="showSuccessModal = true"
    />

    <!-- <modal v-if="showSuccessModal" :show-modal="showSuccessModal" class="modal">
      <div slot="header"></div>
      <div slot="body" class="modal__body">
        <div class="company__modal">
          <div class="company__modal-title">
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
          <div class="company__modal-body">
            <img
              :src="require(`~/assets/images/congratulations.svg`)"
              alt="failed"
            />
            <h5>Check your phone!</h5>
            <p>
              We’ve sent you an SMS text to download the Eden app. Download it and start your easy life with Eden!.
            </p>
          </div>
        </div>
      </div>
      <div slot="footer"></div>
    </modal> -->

    <modal v-if="showSuccessModal" :show-modal="showSuccessModal" class="modal">
      <div slot="header"></div>
      <div slot="body" class="modal__body">
        <div class="company__modal">
          <div class="company__modal-title">
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
          <div class="company__modal-body">
            <img
              :src="require(`~/assets/images/successful.svg`)"
              alt="successful"
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

    <modal v-if="showFailedModal" :show-modal="showFailedModal" class="modal">
      <div slot="header"></div>
      <div slot="body" class="modal__body">
        <div class="company__modal">
          <div class="company__modal-title">
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

          <div class="company__modal-body">
            <img :src="require(`~/assets/images/failed.svg`)" alt="failed" />
            <h5>Submission Failed</h5>
            <p>
              Your comapny’s information was not successfully submitted. Please
              try again or reach us at <span>eve@edenlife.ng </span> or
              <span>+2348123456790</span>
            </p>
          </div>
        </div>
      </div>
      <div slot="footer"></div>
    </modal>
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
              @click.prevent="trackDevice('Download App - homepage banner')"
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
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import testimonials from '~/static/ke/testimonials'
import ClickOutside from 'vue-click-outside'
import { mixpanelTrackEvent } from '~/plugins/ke/mixpanel'
import { createCitySuggestion, createSuggestion } from '~/request/ke/airtable'
import getSiteMeta from '~/utils/getSiteMeta'
import { scrollToApp } from '~/static/functions'
import LeadList from '../../components/ke/LeadList'

export default {
  components: {
    Modal: () => import('@/components/Modal.vue'),
    LeadList,
  },
  directives: {
    ClickOutside,
  },
  mixins: [validationMixin],
  layout: 'ke-default',
  validations: {
    leadListForm: {
      phone_number: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(10),
      },
    },
    suggestion: {
      service: { required },
    },
    bound_fields: {
      email: { required, email },
      city: { required },
    },
  },
  data() {
    return {
      modalText: 'information',
      serviceList: [
        'Food',
        'Laundry',
        'Housecleaning',
        'Home Maintenance',
        'Beauty',
      ],
      services: [
        { title: 'stress', value: 'beauty' },
        { title: 'laundry', value: 'laundry' },
        { title: 'long cooking hours', value: 'food' },
        { title: 'Housecleaning', value: 'cleaning' },
      ],
      questions: ['one'],
      exploreService: '',
      setExploreService: false,
      showDownloadBanner: true,
      testimonialsList: testimonials,
      cityName: 'Select your city',
      loading: false,
      suggestion: {
        service: '',
      },
      leadListForm: {
        phone_number: '',
      },
      showLeadListForm: false,
      bound_fields: {
        email: null,
        city: null,
      },
      visible: false,
      showSuccessModal: false,
      showFailedModal: false,
      cities: [
        {
          name: 'Mombasa',
          id: 'mombasa',
        },
        {
          name: 'Kwale',
          id: 'kwale',
        },
        {
          name: 'Kilifi',
          id: 'kilifi',
        },
        {
          name: 'Tana River',
          id: 'tana River',
        },
        {
          name: 'Lamu',
          id: 'lamu',
        },
        {
          name: 'Taita Taveta',
          id: 'taita Taveta',
        },
        {
          name: 'Garissa',
          id: 'garissa',
        },
        {
          name: 'Wajir',
          id: 'wajir',
        },
        {
          name: 'Mandera',
          id: 'mandera',
        },
        {
          name: 'Marsabit',
          id: 'marsabit',
        },
        {
          name: 'Isiolo',
          id: 'isiolo',
        },
        {
          name: 'Meru',
          id: 'meru',
        },
        {
          name: 'Tharaka-Nithi',
          id: 'tharaka-Nithi',
        },
        {
          name: 'Embu',
          id: 'Embu',
        },
        {
          name: 'Kitui',
          id: 'kitui',
        },
        {
          name: 'Machakos',
          id: 'machakos',
        },
        {
          name: 'Makueni',
          id: 'makueni',
        },
        {
          name: 'Nyandarua',
          id: 'nyandarua',
        },
        {
          name: 'Nyeri',
          id: 'nyeri',
        },
        {
          name: 'Kirinyaga',
          id: 'kirinyaga',
        },
        {
          name: 'Murang’a',
          id: 'kurang’a',
        },
        {
          name: 'Kiambu The',
          id: 'kiambu The',
        },
        {
          name: 'Turkana',
          id: 'turkana',
        },
        {
          name: 'West Pokot',
          id: 'west Pokot',
        },
        {
          name: 'Samburu',
          id: 'samburu',
        },
        {
          name: 'Trans-Nzoia',
          id: 'trans-Nzoia',
        },
        {
          name: 'Uasin Gishu',
          id: 'uasin Gishu',
        },
        {
          name: 'Elgeyo-Marakwet',
          id: 'elgeyo-Marakwet',
        },
        {
          name: 'Nandi',
          id: 'nandi',
        },
        {
          name: 'Baringo',
          id: 'baringo',
        },
        {
          name: 'Laikipia',
          id: 'laikipia',
        },
        {
          name: 'Nakuru',
          id: 'nakuru',
        },
        {
          name: 'Narok',
          id: 'narok',
        },
        {
          name: 'Kajiado',
          id: 'kajiado',
        },
        {
          name: 'Kericho',
          id: 'kericho',
        },
        {
          name: 'Bomet',
          id: 'bomet',
        },
        {
          name: 'Kakamega',
          id: 'kakamega',
        },
        {
          name: 'Vihiga',
          id: 'vihiga',
        },
        {
          name: 'Bungoma',
          id: 'bungoma',
        },
        {
          name: 'Busia',
          id: 'busia',
        },
        {
          name: 'Siaya',
          id: 'siaya',
        },
        {
          name: 'Kisumu',
          id: 'kisumu',
        },
        {
          name: 'Homa Bay',
          id: 'homa Bay',
        },
        {
          name: 'Migori',
          id: 'migori',
        },
        {
          name: 'Kisii',
          id: 'kisii',
        },
        {
          name: 'Nyamira',
          id: 'nyamira',
        },
        {
          name: 'Nairobi',
          id: 'nairobi',
        },
      ],
    }
  },

  head() {
    return {
      title: 'Eden | Say Goodbye To Chores Forever',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://ouredenlife.com/ke/`,
        },
        {
          rel: 'alternate',
          hreflang: 'en-ng',
          href: 'https://ouredenlife.com/',
        },
        {
          rel: 'alternate',
          hreflang: 'en-ke',
          href: 'https://ouredenlife.com/ke/',
        },
        {
          rel: 'alternate',
          hreflang: 'x-default',
          href: 'https://ouredenlife.com/',
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        title: 'Eden | Say Goodbye To Chores Forever',
        description: `Say goodbye to chores forever. Eden is a tech-enabled service that puts your home's chores on autopilot. Check out how we work!`,
        url: `https://ouredenlife.com/ke/`,
        mainImage: 'https://ouredenlife.com/edencard.png',
      }
      return getSiteMeta(metaData)
    },
  },
  mounted() {
    window.addEventListener('scroll', this.isInViewport)
    mixpanelTrackEvent('Lead page nairobi')
    window.setInterval(() => {
      this.changeService()
    }, 2300)
    const self = this
    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        self.showLeadListForm = false
      }
    })
  },
  methods: {
    scrollToFooter(id, label) {
      scrollToApp(id, label)
    },
    scrollToTop(ref) {
      mixpanelTrackEvent(`Home Page - Eden Kenya`)
      this.$refs[ref].scrollIntoView()
    },
    closeModal() {
      this.showSuccessModal = !this.showSuccessModal
    },
    toggle() {
      this.visible = !this.visible
    },
    hide() {
      this.visible = false
    },
    getEarlyAccess() {
      this.showLeadListForm = true
    },
    submitSuggestion() {
      this.$v.suggestion.$touch()
      if (!this.$v.suggestion.$error) {
        this.loading = true
        const metadata = {
          Service: this.suggestion.service,
        }
        this.modalText = 'suggestion'
        createSuggestion(metadata)
        setTimeout(() => {
          this.$nextTick(() => {
            this.loading = false
            this.$v.suggestion.$reset()
            this.suggestion.service = ''
            this.showSuccessModal = true
            mixpanelTrackEvent('Service Suggestion form submitted')
          })
        }, 500)
      }
    },
    async submitForm() {
      this.$v.bound_fields.$touch()
      if (this.$v.bound_fields.$error) return
      if (!this.$v.bound_fields.$error) {
        try {
          this.loading = true
          const metaData = {
            Email: this.bound_fields.email,
            City: this.bound_fields.city,
          }
          this.modalText = 'city suggestion'
          createCitySuggestion(metaData).then(
            (res) => {
              this.loading = false
              mixpanelTrackEvent('City Suggestion form submitted')
              setTimeout(() => {
                Object.keys(this.bound_fields).forEach(
                  (key) => (this.bound_fields[key] = '')
                )
                this.$nextTick(() => {
                  this.$v.bound_fields.$reset()
                  this.cityName = 'Select your city'
                  this.showSuccessModal = true
                  mixpanelTrackEvent(
                    'City Suggestion form submitted - homepage'
                  )
                })
              }, 500)
            },
            (err) => {
              this.loading = false
              this.showFailedModal = true
            }
          )
        } catch (error) {
          this.loading = false
          this.showFailedModal = true
        }
      }
      mixpanelTrackEvent('Enlist form - homepage')
    },
    changeService() {
      const first = this.services.shift()
      this.services = this.services.concat(first)
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
        case 'beauty':
          return {
            color: '#FF9D00',
            'box-shadow': 'inset 0 -23px 0 #FFE6D6',
          }
        default:
          return {
            color: '#03A84E',
            'box-shadow': 'inset 0 -23px 0 #C9F8DE',
          }
      }
    },
    select(option) {
      this.bound_fields.city = option.id
      this.cityName = option.name
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
    // submitUserInfoIntercom() {
    //   mixpanelTrackEvent('Download App button clicked', 'Lead page nairobi')

    //   this.$v.leadListForm.$touch()
    //   if (!this.$v.leadListForm.$error) {
    //     this.loading = true

    //     const metadata = {
    //       Name: this.leadListForm.full_name,
    //       Email: this.leadListForm.email,
    //       Address: this.leadListForm.address,
    //       'Phone number': this.leadListForm.phone_number,
    //       Service: this.leadListForm.service,
    //     }

    //     createLead(metadata)

    //     setTimeout(() => {
    //       Object.keys(this.leadListForm).forEach(
    //         (key) => (this.leadListForm[key] = '')
    //       )
    //       this.$nextTick(() => {
    //         this.$v.leadListForm.$reset()
    //         this.leadListForm.service = []
    //         this.loading = false
    //         this.showleadListForm = false
    //         this.showSuccessModal = true
    //       })
    //     }, 500)
    //   }
    // },
    isInViewport() {
      const element = document.querySelector('#cleaning-video')
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
      mixpanelTrackEvent('How it works replay - Lead page nairobi')
      this.playVideo()
    },
    openSocialMedia(name, url) {
      mixpanelTrackEvent(`${name} icon clicked - Lead page nairobi`)
      window.open(url, '_blank')
    },
    
    trackLink(name, url) {
      mixpanelTrackEvent(`${name} link clicked (footer - Lead page nairobi)`)
      window.open(url, '_blank')
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
@import '@/assets/scss/pages/ke/_waitlist.scss';
@import '@/assets/scss/components/_downloadbanner.scss';
</style>
