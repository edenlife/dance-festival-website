<template>
  <div>
    <div class="container--hero">
      <header class="hero">
        <div class="hero__title">
          <h1>
            Spend your energy on<br />
            <span> {{ headerText[0] }}</span>
          </h1>
          <h1 class="mobile">
            Spend your energy on
            <span> {{ headerText[0] }}</span>
          </h1>

          <p> Our team of professional cleaners: </p>
          <ul>
            <li>
              Are thoroughly vetted by us to keep you and your home safe ✔️
            </li>
            <li>Scrub, mop, wipe, and keep your home clean all month ✔️</li>
            <li>
              Save you hours of backbreaking work. ✔️
            </li>
          </ul>

          <div class="hero__button">
            <button
              type="button"
              class="hero__button-solid"
              @click.prevent="scrollToFooter('#get-the-app', 'cleaning - hero')"
            >
              I Want a Clean Home
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
                  Sign up on the Eden app. Choose the type of cleaning you want;
                  standard or deep cleaning. Select a schedule that works for
                  you. It takes less than 5 minutes!
                </p>
              </div>
              <div class="two">
                <h5>We get scrubbin'</h5>
                <p>
                  Our team of trained cleaners visit your home, polishing
                  surfaces, mopping floors, scrubbing dishes, and making sure
                  your home looks pristine.
                </p>
              </div>
              <div class="three">
                <h5>You relax</h5>
                <p>
                  In no time, our cleaners are done and you can relax in your
                  clean home. Your weekends are now free for whatever your idea
                  of fun is.
                </p>
              </div>
              <button
                type="button"
                class="btn"
                @click.prevent="
                  scrollToFooter('#get-the-app', 'cleaning - how it works')
                "
              >
                Get the app
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

    <div class="container--wall">
      <section class="wall">
        <div class="wall__title">
          <h3>The wall of 💚</h3>
        </div>
        <div class="wall__messages">
          <div v-for="(item, i) in cleaningMessage" :key="i" class="card">
            <a :href="item.tweetLink" target="_blank">
              <div class="card__title">
                <div class="card__title-img">
                  <img
                    :src="require(`~/assets/images/customer-${item.image}.jpg`)"
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

    <div id="cleaning-plan" class="container--plan">
      <section class="plan">
        <div class="plan__title">
          <h3>
            The Cleaning Plans:<br />
            
          </h3>
          <p>
            You deserve a home where you just sit back and relax.<br />
            No cleaning. No stress.
          </p>
          <ul>
            <li>
              <h5 class="icon icon--one">👀</h5>
              <div class="icon--text">
                <h5>Our cleaners are professionals</h5>
                <p>Thoroughly trained.</p>
              </div>
            </li>
            <li>
              <h5 class="icon icon--two">🚛</h5>
              <div class="icon--text">
                <h5>You can trust them</h5>
                <p>We guarantee it.</p>
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
                <p>Monthly</p>
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
                <p>Monthly</p>
              </div>
            </div>
          </transition>
             <transition name="slide-fade">
            <div v-if="plan === 'post-construction-cleaning'" class="plan__price-light">
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

                  <div  v-if="showCleaningDescription" class="plan__price-description-extra">

                    Post construction is the cleaning done to new or renovated buildings. This kind of cleaning is done to the whole house or facility from top to bottom.
                  </div>
                  <ul v-if="showCleaningDescription">
                    <li>Scraping of cements and paint stains on the floor, windows and doors</li>
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
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { pricing } from '~/static/pricing'
import { currencyFormat, scrollToApp } from '~/static/functions'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import getSiteMeta from '~/utils/getSiteMeta'
import { getCleaningServiceTypes } from '~/request/all.api'

export default {
  data() {
    return {
      headerText: [
        'love',
        'family',
        'having fun',
        'working out',
        'being better',
      ],
      showCleaningDescription: false,
      cleaningMessage: [
        {
          name: 'kofo',
          image: 'kofo',
          description: `The way my house sparkles after the 
<span style="color:#03A84E"> @ouredenlife </span>
 cleaners are done with their magic dey always give me endorphins`,
          handle: `yoruba_dev
`,
          tweetLink:
            'https://twitter.com/yoruba_dev/status/1334066072878772225?s=20',
        },
        {
          name: 'Enogieru Osasenaga',
          image: 'enogieru',
          description: `You see that household cleaning, it helped me score major points from madam when we moved from Abuja. Got the liberty to work on weekends 😩
`,
          handle: `OsasenagaEno
`,
          tweetLink:
            'https://twitter.com/OsasenagaEno/status/1404883417590865921?s=20',
        },
        {
          name: 'Fola',
          image: 'fola',
          description: `Tolu. Sign up with <span style="color:#03A84E"> @ouredenlife </span>. They have changed my life. They not just deliver food, they clean and do chores.`,
          handle: `TheFavoredWoman`,
          tweetLink:
            'https://twitter.com/TheFavoredWoman/status/1239876707542167555?s=20',
        },
        {
          name: 'Nengi Adoki',
          image: 'adoki',
          description: `This deep cleaning 
<span style="color:#03A84E"> @ouredenlife </span>
 did at my house is….I have no words 😭 😭 😭 
 
 🤌 🤌 🤌 🤌`,
          handle: `TheNengers`,
          tweetLink:
            'https://twitter.com/TheNengers/status/1423042588165251075?s=20',
        },
      ],
      exploreService: '',
      setExploreService: false,
      window: {
        width: 0,
        height: 0,
      },
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
        itemAreasPrice: {},
        frequency: 'weekly',
        qty: 4,
      },
    }
  },
  head() {
    return {
      title: 'Eden | Cleaning',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://ouredenlifev2-staging.netlify.app/cleaning`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        title: 'Eden | Cleaning',
        description:
          'Professional cleaning at your doorstep. Up to thrice a week.',
        url: `https://ouredenlifev2-staging.netlify.app/cleaning`,
        mainImage:
          'https://ouredenlifev2-staging.netlify.app/edencardcleaning.png',
      }
      return getSiteMeta(metaData)
    },
  },
  mounted() {
    window.addEventListener('scroll', this.isInViewport)
    mixpanelTrackEvent('Cleaning page')
    window.setInterval(() => {
      this.changeText()
    }, 2300)
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
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
    setCleaningType(plan) {
      this.plan = plan
      this.cleaningInfo.item = plan
      const planType = plan.replaceAll('-', ' ')
      this.setCleaningArea(planType)
      this.calculateCleaningPrice()
    },
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
    scrollToFooter(id, label) {
      scrollToApp(id, label)
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
      this.cleaningInfo.itemAreasPrice = {}
      const planType = plan.replaceAll('-', ' ')
       const [{ cleaning_areas = [] }] = this.cleaningServiceTypes.filter(
        ({ name }) => name.toLowerCase() === planType
      )
      this.cleaningQtyOption = this.cleaningQtyOption
      this.setCleaningArea(planType)
      this.calculateCleaningPrice()
       return cleaning_areas;
    },
    calculateCleaningPrice() {
      const {
        item,
        itemAreas,
        itemAreasPrice,
        frequency,
        qty,
      } = this.cleaningInfo
      this.totalPrice = pricing({
        cleaning: {
          item,
          itemAreas,
          itemAreasPrice,
          frequency,
          qty,
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
            this.cleaningInfo.itemAreasPrice[e1.slug] = e1.price
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
    videoControl() {
      const video = document.querySelector('video')
      // const slideY = document.querySelector('.slide-y')
      // const slideX = document.querySelector('.slide-x')
      const slider = document.querySelector('.slider')
      const scrollToElement = document.querySelector(
        '.description__slider-text'
      )
      // control timeline with video play
      video.addEventListener('timeupdate', function () {
        // const parcentagePlayed = (this.currentTime / this.duration) * 100
        // slideY.style.height = parcentagePlayed.toFixed(2) + '%'
        // slideX.style.width = parcentagePlayed.toFixed(2) + '%'

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
          // slideY.style.height = percentageCovered.toFixed(2) + '%'
          // slideX.style.width = percentageCovered.toFixed(2) + '%'
        }
      })
    },
    playVideo() {
      const vid = document.querySelector('video')
      vid.play()
      this.videoControl()
    },
    playButtonClicked() {
      mixpanelTrackEvent('How it works replay - cleaning')
      this.playVideo()
    },
    trackLink(service) {
      mixpanelTrackEvent(`${service} clicked - Cleaning (more options)`)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_cleaning.scss';
</style>
