<template>
  <div class="container--hero">
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
          Save valuable time and get your home cleaned
          <span> {{ headerText[0] }}</span>
        </h1>
        <div>
          <p class="bold">Pay once a month and get:</p>
          <ul>
            <li>
              <span class="icon"> 🏠 </span>
              Free-time back while we take care of all the cleaning needs.
            </li>
            <li>
              <span class="icon"> 🧑‍💼 </span>
              A dedicated Customer Support representative.
            </li>
            <li>
              <span class="icon"> 🤌 </span>
              Flexible plan to fit your needs (weekly, bi-weekly, or monthly).
            </li>
          </ul>
        </div>
        <div class="hero__button">
          <button
            type="button"
            class="hero__button-solid"
            @click.prevent="
              greenhouseSignUp('getEden', 'cleaning-leads - hero')
            "
          >
            Clean for me
          </button>
        </div>
      </div>
      <div class="hero__img-laundry">
        <img
          src="https://res.cloudinary.com/eden-life-inc/image/upload/v1654267602/eden-website-v2/Cleaning_4_pemevm.png"
          alt="laundry tag"
          class="hero__img-bg1"
        />
      </div>
    </div>
    <div class="hero__img"></div>

    <div class="container--description">
      <section class="description">
        <div class="description__title">
          <h3>Here’s how it works:</h3>
        </div>
        <div class="description__inner">
          <div class="description__details">
            <div class="description__details-item">
              <div class="description__details-item--icon">
                <img :src="require(`~/assets/images/emojis/one.png`)" alt="" />
              </div>
              <div
                v-animate-onscroll.repeat="'animated fadeInDown'"
                class="description__details-item--text"
              >
                <h5>You choose a plan that works for you.</h5>
                <p>
                  Sign up on the Eden app. Choose the type of cleaning you want.
                  Select a schedule that works for you. It takes less than 5
                  minutes!
                </p>
              </div>
            </div>
            <div class="description__details-item">
              <div class="description__details-item--icon">
                <img :src="require(`~/assets/images/emojis/two.png`)" alt="" />
              </div>
              <div
                v-animate-onscroll.repeat="'animated fadeInLeft'"
                class="description__details-item--text"
              >
                <h5>We get scrubbin'.</h5>
                <p>
                  Our team of trained cleaners visit your home, polishing
                  surfaces, mopping floors, scrubbing dishes, and making sure
                  your home looks spotless. You don’t have to provide any
                  cleaning materials except water.
                </p>
              </div>
            </div>
            <div class="description__details-item">
              <div class="description__details-item--icon">
                <img
                  :src="require(`~/assets/images/emojis/three.png`)"
                  alt=""
                />
              </div>
              <div
                v-animate-onscroll.repeat="'animated fadeInDown'"
                class="description__details-item--text"
              >
                <h5>You relax.</h5>
                <p>
                  In no time, our cleaners are done and you can relax in your
                  clean home. Your weekends are now free for whatever your idea
                  of fun is.
                </p>
              </div>
            </div>
          </div>
          <div class="description__inner-left">
            <div class="description__inner-left-img1">
              <img
                v-animate-onscroll="'animated fadeInDown'"
                src="@/assets/images/Cleaning 1.png"
                alt="cleaning-image"
              />
            </div>
            <div class="description__inner-left-img2">
              <img
                v-animate-onscroll="'animated fadeInUp'"
                src="@/assets/images/Cleaning 2.png"
                alt="cleaning-image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>

    <div id="cleaning-plan" class="container--plan">
      <section class="plan">
        <div class="plan__title">
          <h3>The Cleaning Plans:<br /></h3>
          <p>
            You deserve a home where you just sit back and relax.<br />
            No cleaning. No stress.
          </p>
          <ul>
            <li>
              <h5 class="icon icon--one">🧑‍💼</h5>
              <div class="icon--text">
                <h5>Our cleaners are professionals.</h5>
                <p>Thoroughly trained.</p>
              </div>
            </li>
            <li>
              <h5 class="icon icon--two">👌</h5>
              <div class="icon--text">
                <h5>You can trust them.</h5>
                <p>We guarantee it.</p>
              </div>
            </li>
            <li>
              <h5 class="icon icon--three">⏸</h5>
              <div class="icon--text">
                <h5>Pause your subscription anytime.</h5>
                <p>Out of town? You can skip a service.</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="plan__price">
          <ul class="plan__price-option">
            <li
              :class="{ active: plan === 'standard-cleaning' }"
              @click.prevent="setCleaningConfig('standard-cleaning')"
            >
              <span> Standard Cleaning</span>
              <svg
                v-if="plan === 'standard-cleaning'"
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
              :class="{ active: plan === 'deep-cleaning' }"
              @click.prevent="setCleaningConfig('deep-cleaning')"
            >
              <span> Deep Cleaning </span>
              <svg
                v-if="plan === 'deep-cleaning'"
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
              :class="{ active: plan === 'post-construction-cleaning' }"
              @click.prevent="setCleaningConfig('post-construction-cleaning')"
            >
              <span> Post Construction Cleaning </span>
              <svg
                v-if="plan === 'post-construction-cleaning'"
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
            <div v-if="plan === 'standard-cleaning'" class="plan__price-light">
              <div class="plan__price-item">
                <div class="plan__price-description">
                  <div class="plan__price-description-title">
                    <h5>What will Standard Cleaning entail?</h5>
                    <button
                      type="button"
                      class="expand"
                      @click.prevent="
                        showCleaningDescription = !showCleaningDescription
                      "
                    >
                      <svg
                        v-if="showCleaningDescription"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                          stroke="#FFAC76"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />

                        <path
                          d="M7 11H15"
                          stroke="#FFAC76"
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
                          stroke="#FFAC76"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 8V16"
                          stroke="#FFAC76"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 12H16"
                          stroke="#FFAC76"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <ul v-if="showCleaningDescription">
                    <li>Sweeping and mopping of all floors</li>
                    <li>Dust and wipe all surfaces</li>
                    <li>Cobweb removal from all surfaces</li>
                    <li>Wash dirty dishes</li>
                    <li>Arrange furniture, lay beds and fold clothes</li>
                    <li>Polish all wood and glass surfaces</li>
                    <li>Disinfect and wash toilet and urinals</li>
                    <li>Empty and clean trash can</li>
                  </ul>
                </div>
                <div class="calculator__input">
                  <label for="">Tell us about your home</label>
                  <div class="select">
                    <div class="selector">
                      <div class="label" @click="toggle('light')">
                        <span>{{ roomTypes }}</span>
                      </div>
                      <svg
                        class="arrow"
                        :class="{
                          expanded: visible.includes('light'),
                        }"
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        @click="toggle('light')"
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="#93A29B"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div
                        :class="{
                          hidden: !visible.includes('light'),
                        }"
                      >
                        <transition name="slide-fade">
                          <div class="selector--room">
                            <ul>
                              <li
                                v-for="(item, i) in cleaningQtyOption"
                                :key="i"
                                class="control"
                              >
                                <span>{{ item.cleaning_area_name }}</span>
                                <span class="control__item">
                                  <button
                                    class="control__item-btn"
                                    @click.prevent="decreaseRoomQty(item, i)"
                                  >
                                    <svg
                                      width="12"
                                      height="2"
                                      viewBox="0 0 12 2"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.3335 1H10.6668"
                                        stroke="#21312A"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                    </svg>
                                  </button>
                                  <span class="control__item-qty">
                                    {{ item.qty }}
                                  </span>
                                  <button
                                    class="control__item-btn"
                                    @click.prevent="increaseRoomQty(item, i)"
                                  >
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8 3.33301V12.6663"
                                        stroke="#21312A"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                      <path
                                        d="M3.3335 8H12.6668"
                                        stroke="#21312A"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                    </svg>
                                  </button>
                                </span>
                              </li>
                            </ul>
                            <button
                              class="pricing__calculator-btn btn-sm"
                              @click="toggle('light')"
                            >
                              Done
                            </button>
                          </div>
                        </transition>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="plan__price-item">
                <p><span class="number">Frequency</span></p>
                <div class="btn--group">
                  <button
                    class="btn--freq"
                    :class="{ active: frequency === 'weekly' }"
                    @click.prevent="calculateFrequency('weekly')"
                  >
                    Once a week
                  </button>
                  <button
                    class="btn--freq"
                    :class="{ active: frequency === 'bi-weekly' }"
                    @click.prevent="calculateFrequency('bi-weekly')"
                  >
                    Every 2 weeks
                  </button>
                  <button
                    class="btn--freq"
                    :class="{ active: frequency === 'monthly' }"
                    @click.prevent="calculateFrequency('monthly')"
                  >
                    Once a month
                  </button>
                </div>
              </div>
              <div class="plan__price-bottom">
                <h5>
                  <span class="price">Price </span>
                  <span class="icon">👉 </span> NGN
                  {{ currencyFormat(totalPrice) }}
                </h5>
                <p>per 4 weeks</p>
              </div>
              <div class="hero__button">
                <button
                  type="button"
                  class="hero__button-solid"
                  @click.prevent="greenhouseSignUp('Cleaning-leads - plan')"
                >
                  Clean for me
                </button>
              </div>
            </div>
          </transition>
          <transition name="slide-fade">
            <div v-if="plan === 'deep-cleaning'" class="plan__price-light">
              <div class="plan__price-item">
                <div class="plan__price-description">
                  <div class="plan__price-description-title">
                    <h5>What will Deep Cleaning entail?</h5>
                    <button
                      type="button"
                      class="expand"
                      @click.prevent="
                        showCleaningDescription = !showCleaningDescription
                      "
                    >
                      <svg
                        v-if="showCleaningDescription"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                          stroke="#FFAC76"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />

                        <path
                          d="M7 11H15"
                          stroke="#FFAC76"
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
                          stroke="#FFAC76"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 8V16"
                          stroke="#FFAC76"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 12H16"
                          stroke="#FFAC76"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <ul v-if="showCleaningDescription">
                    <li>Sweeping and mopping of all floors</li>
                    <li>Dust and wipe all surfaces</li>
                    <li>Cobweb removal from all surfaces</li>
                    <li>Wash dirty dishes</li>
                    <li>Arrange furniture, lay beds and fold clothes</li>
                    <li>Polish all wood and glass surfaces</li>
                    <li>Disinfect and wash toilet and urinals</li>
                    <li>Empty and clean trash can</li>
                    <li>Scrape floors, walls and clean all surfaces</li>
                    <li>
                      Clean internal and external parts of home appliances (Gas
                      cooker, refrigerators etc)
                    </li>
                    <li>Clean cupboards and cabinets</li>
                    <li>AC vents cleaned</li>
                  </ul>
                </div>
                <div class="calculator__input">
                  <label for="">Tell us about your home</label>
                  <div class="select">
                    <div class="selector">
                      <div class="label" @click="toggle('deep')">
                        <span>{{ roomTypes }}</span>
                      </div>
                      <svg
                        class="arrow"
                        :class="{
                          expanded: visible.includes('deep'),
                        }"
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        @click="toggle('deep')"
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="#93A29B"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div
                        :class="{
                          hidden: !visible.includes('deep'),
                        }"
                      >
                        <transition name="slide-fade">
                          <div class="selector--room">
                            <ul>
                              <li
                                v-for="(item, i) in cleaningQtyOption"
                                :key="i"
                                class="control"
                              >
                                <span>{{ item.cleaning_area_name }}</span>
                                <span class="control__item">
                                  <button
                                    class="control__item-btn"
                                    @click.prevent="decreaseRoomQty(item, i)"
                                  >
                                    <svg
                                      width="12"
                                      height="2"
                                      viewBox="0 0 12 2"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.3335 1H10.6668"
                                        stroke="#21312A"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                    </svg>
                                  </button>
                                  <span class="control__item-qty">
                                    {{ item.qty }}
                                  </span>
                                  <button
                                    class="control__item-btn"
                                    @click.prevent="increaseRoomQty(item, i)"
                                  >
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8 3.33301V12.6663"
                                        stroke="#21312A"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                      <path
                                        d="M3.3335 8H12.6668"
                                        stroke="#21312A"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                    </svg>
                                  </button>
                                </span>
                              </li>
                            </ul>
                            <button
                              class="pricing__calculator-btn btn-sm"
                              @click="toggle('deep')"
                            >
                              Done
                            </button>
                          </div>
                        </transition>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="plan__price-item">
                <p><span class="number">Frequency</span></p>
                <div class="btn--group">
                  <button
                    class="btn--freq"
                    :class="{ active: frequency === 'weekly' }"
                    @click.prevent="calculateFrequency('weekly')"
                  >
                    Once a week
                  </button>
                  <button
                    class="btn--freq"
                    :class="{ active: frequency === 'bi-weekly' }"
                    @click.prevent="calculateFrequency('bi-weekly')"
                  >
                    Every 2 weeks
                  </button>
                  <button
                    class="btn--freq"
                    :class="{ active: frequency === 'monthly' }"
                    @click.prevent="calculateFrequency('monthly')"
                  >
                    Once a month
                  </button>
                </div>
              </div>
              <div class="plan__price-bottom">
                <h5>
                  <span class="price">Price </span>
                  <span class="icon">👉 </span> NGN
                  {{ currencyFormat(totalPrice) }}
                </h5>
                <p>per 4 weeks</p>
              </div>
              <div class="hero__button">
                <button
                  type="button"
                  class="hero__button-solid"
                  @click.prevent="greenhouseSignUp('Cleaning-leads - plan')"
                >
                  Clean for me
                </button>
              </div>
            </div>
          </transition>
          <transition name="slide-fade">
            <div
              v-if="plan === 'post-construction-cleaning'"
              class="plan__price-light"
            >
              <div class="plan__price-item">
                <div class="plan__price-description">
                  <div class="plan__price-description-title">
                    <h5>What will Post-Construction entail?</h5>
                    <button
                      type="button"
                      class="expand"
                      @click.prevent="
                        showCleaningDescription = !showCleaningDescription
                      "
                    >
                      <svg
                        v-if="showCleaningDescription"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                          stroke="#FFAC76"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />

                        <path
                          d="M7 11H15"
                          stroke="#FFAC76"
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
                          stroke="#FFAC76"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 8V16"
                          stroke="#FFAC76"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 12H16"
                          stroke="#FFAC76"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  <div
                    v-if="showCleaningDescription"
                    class="plan__price-description-extra"
                  >
                    Post construction is the cleaning done to new or renovated
                    buildings. This kind of cleaning is done to the whole house
                    or facility from top to bottom.
                  </div>
                  <ul v-if="showCleaningDescription">
                    <li>
                      Scraping of cements and paint stains on the floor, windows
                      and doors
                    </li>
                    <li>Washing of windows and doors</li>
                    <li>Scraping of POP from wall tiles</li>
                    <li>Washing of the walls</li>
                    <li>Dusting and wiping of all surfaces</li>
                    <li>Sweeping and mopping of the floor</li>
                    <li>Cobweb removal from all surfaces</li>
                    <li>Resurfacing of the tiles to maintain quality</li>
                    <li>Polishing of all wooden surfaces</li>
                  </ul>
                </div>
                <div class="calculator__input">
                  <label for="">Tell us about your home</label>
                  <div class="select">
                    <div class="selector">
                      <div class="label" @click="toggle('post')">
                        <span>{{ roomTypes }}</span>
                      </div>
                      <svg
                        class="arrow"
                        :class="{
                          expanded: visible.includes('post'),
                        }"
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        @click="toggle('deep')"
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="#93A29B"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div
                        :class="{
                          hidden: !visible.includes('post'),
                        }"
                      >
                        <transition name="slide-fade">
                          <div class="selector--room">
                            <ul>
                              <li
                                v-for="(item, i) in cleaningQtyOption"
                                :key="i"
                                class="control"
                              >
                                <span>{{ item.cleaning_area_name }}</span>
                                <span class="control__item">
                                  <button
                                    class="control__item-btn"
                                    @click.prevent="decreaseRoomQty(item, i)"
                                  >
                                    <svg
                                      width="12"
                                      height="2"
                                      viewBox="0 0 12 2"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.3335 1H10.6668"
                                        stroke="#21312A"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                    </svg>
                                  </button>
                                  <span class="control__item-qty">
                                    {{ item.qty }}
                                  </span>
                                  <button
                                    class="control__item-btn"
                                    @click.prevent="increaseRoomQty(item, i)"
                                  >
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8 3.33301V12.6663"
                                        stroke="#21312A"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                      <path
                                        d="M3.3335 8H12.6668"
                                        stroke="#21312A"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                    </svg>
                                  </button>
                                </span>
                              </li>
                            </ul>
                            <button
                              class="pricing__calculator-btn btn-sm"
                              @click="toggle('post')"
                            >
                              Done
                            </button>
                          </div>
                        </transition>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="plan__price-item">
                <p><span class="number">Frequency</span></p>
                <div class="btn--group">
                  <button
                    class="btn--freq"
                    :class="{ active: frequency === 'weekly' }"
                    @click.prevent="calculateFrequency('weekly')"
                  >
                    Once a week
                  </button>
                  <button
                    class="btn--freq"
                    :class="{ active: frequency === 'bi-weekly' }"
                    @click.prevent="calculateFrequency('bi-weekly')"
                  >
                    Every 2 weeks
                  </button>
                  <button
                    class="btn--freq"
                    :class="{ active: frequency === 'monthly' }"
                    @click.prevent="calculateFrequency('monthly')"
                  >
                    Once a month
                  </button>
                </div>
              </div>
              <div class="plan__price-bottom">
                <h5>
                  <span class="price">Price </span>
                  <span class="icon">👉 </span> NGN
                  {{ currencyFormat(totalPrice) }}
                </h5>
                <p>per 4 weeks</p>
              </div>
              <div class="hero__button">
                <button
                  type="button"
                  class="hero__button-solid"
                  @click.prevent="greenhouseSignUp('Cleaning-leads - plan')"
                >
                  Clean for me
                </button>
              </div>
            </div>
          </transition>
        </div>
      </section>
    </div>

    <div class="container--wall">
      <section class="wall">
        <div class="wall__title">
          <h3>Why should I let Eden Life do my cleaning?</h3>
        </div>
        <div class="wall__messages">
          <div class="wall__messages-first-box">
            <div class="wall__messages-title">
              <h3>Our job is to make sure your house is spotless.</h3>
            </div>
            <p class="card__description">
              We will do anything to make sure your house or space is spotless.
            </p>
            <div class="card">
              <a
                href="https://twitter.com/Anagazo/status/1514576172864221191?s=20&t=i_QLeckfJVf7cjje-ME7Zg"
                target="_blank"
              >
                <div class="card__title">
                  <div class="card__title-img">
                    <img
                      :src="require(`~/assets/images/customer-anagazo.png`)"
                      alt="customer-anagazo"
                    />
                  </div>
                  <div class="">
                    <p class="card__title-name">Anagazo</p>
                    <p class="card__title-handle">@Anagazo</p>
                  </div>
                </div>
                <p class="card__description">
                  I’m always excited when
                  <span style="color: #03a84e"> @ouredenlife </span> sends male
                  cleaners. Them dey always do like say them get something to
                  prove. <br />
                  <br />
                  “Sir can I sweep the ceiling?”<br />
                  “Sir is the sun too hot, can I reduce it”<br />
                  “I will mop the excess oxygen shortly”<br />
                  😂 it’s always an experience.
                </p>
              </a>
            </div>
          </div>

          <div class="wall__messages-second_card">
            <div class="wall__messages-first-box">
              <div class="wall__messages-title">
                <h3>We take cleaning to another special level.</h3>
              </div>
              <p class="card__description">
                Sparkle and glow with Eden Life’s cleaners. We’ll shine up your
                homes and items. That’s what we do.
              </p>
              <div class="card">
                <a
                  href="https://twitter.com/TheVunderkind/status/1527384189821079552?s=20&t=i_QLeckfJVf7cjje-ME7Zg"
                  target="_blank"
                >
                  <div class="card__title">
                    <div class="card__title-img">
                      <img
                        :src="
                          require(`~/assets/images/customer-vunderkind.png`)
                        "
                        alt="customer-vunderkind"
                      />
                    </div>

                    <div class="">
                      <p class="card__title-name">mogwai.</p>
                      <p class="card__title-handle">@TheVunderkind</p>
                    </div>
                  </div>
                  <p class="card__description">
                    My Eden cleaner cleaned one ancient kettle in the kitchen
                    and this shit is gleaming like Aladdin’s lamp
                  </p>
                </a>
              </div>
            </div>
            <div class="wall__messages-first-box">
              <div class="wall__messages-title">
                <h3>It's perfect for your busy lifestyle.</h3>
              </div>
              <p class="card__description">
                You just let our cleaners do the job, so you attend to other
                important things.
              </p>
              <div class="card">
                <a
                  href="https://twitter.com/KingRohv/status/1382790202045923331?s=20&t=i_QLeckfJVf7cjje-ME7Zg"
                  target="_blank"
                >
                  <div class="card__title">
                    <div class="card__title-img">
                      <img
                        :src="require(`~/assets/images/customer-philip.png`)"
                        alt="customer-philip"
                      />
                    </div>

                    <div class="">
                      <p class="card__title-name">Philip Ese</p>
                      <p class="card__title-handle">@KingRohv</p>
                    </div>
                  </div>
                  <p class="card__description">
                    I have to say
                    <span style="color: #03a84e"> @ouredenlife </span> has
                    simplified my life sha. From food to laundry and house
                    cleaning. And I have the best gardener. Will gladly invest
                    if I see the opportunity..<br /><br />
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- <div class="container--form">
       <section class="cleaning" id="getEden">
          <div class="cleaning__form">
             <div class="cleaning__form-title">
               <h3>You're one step closer to not worrying <br/> about cleaning.
               </h3>
               <p>Enter your details and we’ll reach out to you about the next steps. <br/>
                    Let's go!
                </p>
             </div>

            <div class="form">
            <div class="form__input">
              <label for="company name"> Full Name</label>
              <input
                id=""
                v-model="cleaningForm.full_name"
                type="text"
                name=""
                placeholder="Your first & last name"
                :class="{ 'has-error': $v.cleaningForm.full_name.$error }"
              />
            </div>

            <div class="form__input">
              <label for="email">Email Address </label>
              <input
                id=""
                v-model="cleaningForm.email"
                type="email"
                name=""
                placeholder="email@example.com"
                :class="{ 'has-error': $v.cleaningForm.email.$error }"
              />
            </div>

           <div class="form__input">
              <label for="phone number">Contact Person’s Phone Number</label>
              <input
                id=""
                v-model.trim="$v.cleaningForm.phone_number.$model"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                type="text"
                name=""
                placeholder="08123456789"
                :class="{ 'has-error': $v.cleaningForm.phone_number.$error }"
              />
            </div>
            <button
              type="submit"
              class="btn--submit"
              :class="{
                loading: loading,
              }"
              :disabled="loading"
              @click.prevent="submit()"
            >
               I want an Eden Life Cleaning plan
            </button>
          </div>
        </div>
       </section>
    </div> -->

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
              Please try again or reach us at <span>eve@edenlife.ng </span> or
              <span>+2348123456790</span>
            </p>
          </div>
        </div>
      </div>
      <div slot="footer"></div>
    </modal>

    <lead-gen-footer />
  </div>
</template>

<script>
import { pricing } from '~/static/pricing'
import { currencyFormat } from '~/static/functions'
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import { createCleaningLeads } from '~/request/airtable'
import { notUrl } from '~/utils/validators'
import { getCleaningServiceTypes } from '~/request/all.api'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import getSiteMeta from '~/utils/getSiteMeta'
import LeadGenFooter from '~/components/LeadGenFooter.vue'

export default {
  components: { LeadGenFooter },
  mixins: [validationMixin],
  layout: 'lead',
  validations: {
    cleaningForm: {
      full_name: { required, notUrl },
      email: { required, email },
      phone_number: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
    },
  },
  data() {
    return {
      headerText: ['weekly', 'monthly'],
      showSuccessModal: false,
      showFailedModal: false,
      setExploreService: false,
      window: {
        width: 0,
        height: 0,
      },
      hasError: false,
      showCleaningDescription: false,
      full_name: '',
      email: '',
      phone_number: '',
      loading: false,
      exploreService: '',
      light: 1,
      deep: 1,
      plan: 'standard-cleaning',
      frequency: 'weekly',
      totalPrice: null,
      visible: [],
      roomTypes: null,
      cleaningQtyOption: [],
      cleaningServiceTypes: [],
      cleaningInfo: {
        item: 'standard-cleaning',
        itemAreas: {},
        frequency: 'weekly',
        qty: 4,
      },
      cleaningForm: {
        full_name: '',
        email: '',
        phone_number: '',
      },
    }
  },
  head() {
    return {
      title: 'Eden | Cleaning Leads',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://ouredenlifev2-staging.netlify.app/cleaning_leads`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        title: 'Eden | Cleaning Leads',
        description:
          'Professional cleaning at your doorstep. Up to thrice a week.',
        url: `https://ouredenlifev2-staging.netlify.app/cleaning_leads`,
        mainImage:
          'https://ouredenlifev2-staging.netlify.app/edencardcleaning.png',
      }
      return getSiteMeta(metaData)
    },
  },
  mounted() {
    mixpanelTrackEvent('Cleaning Leads page')
    window.setInterval(() => {
      this.changeText()
    }, 2300)
    this.fetchCleaningServiceTypes()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.isInViewport)
  },
  methods: {
    currencyFormat,
    toggle(plan) {
      if (this.visible.includes(plan)) {
        this.visible = this.visible.filter((item) => item !== plan)
      } else {
        this.visible.push(plan)
      }
    },
    changeText() {
      const first = this.headerText.shift()
      this.headerText = this.headerText.concat(first)
    },
    setCleaningType(plan) {
      this.plan = plan
      this.cleaningInfo.item = plan
      const planType = plan.replaceAll('-', ' ')
      this.setCleaningArea(planType)
      this.calculateCleaningPrice()
    },
    scrollToFooter(id) {
      document.getElementById(id).scrollIntoView()
    },
    greenhouseSignUp(label) {
      mixpanelTrackEvent(label)
      this.$router.push({ name: 'signup', query: this.$route.query })
    },
    trackLink(service) {
      mixpanelTrackEvent(`${service} clicked - Cleaning Leads (more options)`)
    },
    closeModal() {
      this.showSuccessModal = !this.showSuccessModal
    },
    async submit() {
      this.$v.cleaningForm.$touch()
      if (this.$v.cleaningForm.$error) return
      if (!this.$v.cleaningForm.$error) {
        try {
          this.loading = true
          const metaData = {
            'Full Name': this.cleaningForm.full_name,
            'Email Address': this.cleaningForm.email,
            'Phone Number': this.cleaningForm.phone_number,
          }
          const leadMetaData = {
            name: this.cleaningForm.full_name,
            email: this.cleaningForm.email,
            phone: this.cleaningForm.phone_number,
            lead_gen_page: window.location.href,
            referrer: document.referrer,
          }
          this.$intercom('update', {
            name: this.cleaningForm.full_name,
            email: this.cleaningForm.email,
            phone: this.cleaningForm.phone_number,
            lead_gen_page: window.location.href,
            referrer: document.referrer,
          })
          this.$intercom('trackEvent', 'lead-genaration-signup', leadMetaData)
          createCleaningLeads(metaData).then(
            (res) => {
              this.loading = false
              mixpanelTrackEvent('Laundry Leads form submitted')
              setTimeout(() => {
                Object.keys(this.cleaningForm).forEach(
                  (key) => (this.cleaningForm[key] = '')
                )
                this.$nextTick(() => {
                  this.$v.cleaningForm.$reset()
                  this.$router.push('/success_page')
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
    },
    // Cleaning calculator
    async fetchCleaningServiceTypes() {
      const cleaningResponse = await getCleaningServiceTypes()
      this.cleaningServiceTypes = cleaningResponse.data.data
      const [{ cleaning_areas = [] }] = this.cleaningServiceTypes.filter(
        ({ name }) => name.toLowerCase() === 'standard cleaning'
      )
      this.cleaningQtyOption = cleaning_areas.map((obj) => ({
        ...obj,
        qty: 0,
      }))
      this.cleaningQtyOption[0].qty = 1
      this.cleaningQtyOption[1].qty = 1
      this.cleaningQtyOption[2].qty = 1
      this.cleaningQtyOption[3].qty = 1
      this.setCleaningArea('standard cleaning')
      this.calculateCleaningPrice()
    },
    setCleaningConfig(plan) {
      this.plan = plan
      this.cleaningInfo.item = plan
      this.cleaningInfo.itemAreas = {}
      const planType = plan.replaceAll('-', ' ')
      const [{ cleaning_areas = [] }] = this.cleaningServiceTypes.filter(
        ({ name }) => name.toLowerCase() === planType
      )
      this.cleaningQtyOption = this.cleaningQtyOption
      this.setCleaningArea(planType)
      this.calculateCleaningPrice()
      return cleaning_areas
    },
    calculateCleaningPrice() {
      const { item, itemAreas, frequency, qty } = this.cleaningInfo
      this.totalPrice = pricing({
        cleaning: {
          item,
          item_areas: itemAreas,
          frequency,
          qty,
          service_day: ['saturday'],
        },
      })
      this.getEstimateRoomTypes()
    },
    setCleaningArea(area) {
      const [{ cleaning_areas = [] }] = this.cleaningServiceTypes.filter(
        ({ name }) => name.toLowerCase() === area.toLowerCase()
      )
      cleaning_areas.forEach((e1) =>
        this.cleaningQtyOption.forEach((e2) => {
          if (e1.slug === e2.slug) {
            this.cleaningInfo.itemAreas[e1.slug] = e2.qty
          }
        })
      )
    },
    calculateFrequency(plan) {
      this.frequency = plan
      this.cleaningInfo.frequency = plan
      this.calculateCleaningPrice()
    },
    increaseRoomQty(item, index) {
      let qty = item.qty
      qty++
      const newQty = qty++
      this.cleaningQtyOption[index].qty = newQty
      this.cleaningInfo.qty = this.cleaningQtyOption.reduce((acc, val) => {
        return acc + val.qty
      }, 0)
      this.setCleaningType(this.plan)
      this.calculateCleaningPrice()
    },
    decreaseRoomQty(item, index) {
      let qty = item.qty
      if (qty >= 1) {
        qty--
        const newQty = qty--
        this.cleaningQtyOption[index].qty = newQty
        this.cleaningInfo.qty = this.cleaningQtyOption.reduce((acc, val) => {
          return acc + val.qty
        }, 0)
        this.setCleaningType(this.plan)
        this.calculateCleaningPrice()
      }
    },
    getEstimateRoomTypes() {
      const filterRoom = this.cleaningQtyOption.filter((item) => {
        return item.qty !== 0
      })
      const rooms = filterRoom.map((item) => {
        return item.qty + ' ' + item.cleaning_area_name
      })
      this.roomTypes = rooms.join(', ')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_cleaning_leads.scss';

.mt-4 {
  margin-top: 25px;
}
</style>
