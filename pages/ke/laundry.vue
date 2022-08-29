<template>
  <div>
    <div class="container--hero">
      <header class="hero">
        <div class="hero__title">
          <h1>
            Save your <span> {{ headerText[0] }}</span>
          </h1>
          <p>
            Dirty clothes should never be your headache. Outsource the things
            that aren't serving you.
            <br />
            <br />
            We pick your dirty clothes up and deliver then back cleaned, folded
            or ironed for additional cost, all within 48 hours.
          </p>
          <div class="hero__button">
            <button
              type="button"
              class="hero__button-solid"
              @click.prevent="downloadAp('Download App - laundry hero')"
            >
              Download App
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
                  Sign-up on the Eden Life app. Then choose the cleaning service
                  you want, select how often you'd like your space and laundry
                  cleaned, and pay.
                </p>
              </div>
              <div class="two">
                <h5>We pickup</h5>
                <p>
                  We'll pick up your laundry up on your selected day, take it to
                  our laundromat, wash it, dry in then iron or fold it based on
                  your preference. All this within 48 hours.
                </p>
              </div>
              <div class="three">
                <h5>We deliver!</h5>
                <p>
                  We assign an Eden Gardner to your account. They oversee and
                  coordinate all laundry services to ensure spotless delivery
                  each time. It's like having your own assistant at your
                  fingertips!
                </p>
              </div>
              <button
                type="button"
                class="btn"
                @click.prevent="downloadAp('Download App - laundry')"
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
                class="plan__price-description light"
                :key="index"
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

    <div id="laundry-plan" class="container--plan">
      <section class="plan">
        <div class="plan__title">
          <h3>
            The Laundry Plans:<br />
            We handle the laundry.<br />
            You enjoy the leisure.
          </h3>
          <p>
            Don't fret about dirty clothes, we got you covered. Laundry at your
            door step. As simple as that.
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
                    <h5>What does the Wash and Fold Package include?</h5>
                    <button
                      type="button"
                      class="expand"
                      @click.prevent="
                        showWashFoldDescription = !showWashFoldDescription
                      "
                    >
                      <svg
                        v-if="showWashFoldDescription"
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

                  <div v-if="showWashFoldDescription">
                    <ul>
                      <li>Pick up from your location</li>
                      <li>Sort, wash and fold</li>
                      <li>Delivered back to you in 48 hours</li>
                      <li>Each laundry bag can hold 10KG</li>
                    </ul>

                    <h5>What's not included?</h5>

                    <ul>
                      <li>Ironing</li>
                      <li>Washing of pillows</li>
                    </ul>
                  </div>
                </div>
                <p>
                  <span class="number">Laundry Bag (10 KG)</span>
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
                  <span class="icon">👉 </span> KES
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
                    <h5>What does the Wash and Iron Package include?</h5>
                    <button
                      type="button"
                      class="expand"
                      @click.prevent="
                        showWashIronDescription = !showWashIronDescription
                      "
                    >
                      <svg
                        v-if="showWashIronDescription"
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

                  <div v-if="showWashIronDescription">
                    <ul>
                      <li>Pick up from your location</li>
                      <li>Sort, wash, iron then fold</li>
                      <li>Delivered back to you in 48 hours</li>
                      <li>Each laundry bag can hold 10KG</li>
                    </ul>

                    <h5>What's not included?</h5>

                    <ul>
                      <li>Washing of pillows</li>
                    </ul>
                  </div>
                </div>
                <p>
                  <span class="number">Laundry Bag (10 KG)</span>
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
                  KES {{ currencyFormat(totalWashIronPrice) }}
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
              Food: Curated meals prepared fresh at a fraction of the cost.
              Weekly.
            </p>
            <nuxt-link :to="{ path: '/ke/food/' }" class="btn">
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
              @click.prevent="downloadAp('Download App - laundry banner')"
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
import { pricing } from '~/static/ke/pricing'
import { currencyFormat, scrollToApp } from '~/static/functions'
import { mixpanelTrackEvent } from '~/plugins/ke/mixpanel'
import getSiteMeta from '~/utils/getSiteMeta'

export default {
  components: {
    Modal: () => import('@/components/Modal.vue'),
    WaitListForm: () => import('@/components/ke/WaitListForm.vue'),
  },
  layout: 'ke-default',
  data() {
    return {
      headerText: ['time', 'energy', 'money'],

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
      showWashFoldDescription: false,
      showWashIronDescription: false,
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
            'To ensure that we connect you with the right Service Partner (SP), we require up to 48 hours to find the best fit for you. Orders can only be scheduled between 7am - 5pm.		',
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
            'In order to guarantee quality, we require upfront payments. This allows us to ensure that the right materials and tools are stocked and that any changes or rescheduling can be allocated for. All Eden services are billed as subscriptions and are payable monthly during your billing cycle.',
        },
        {
          position: 'six',
          question: 'When should I expect to get my service?  ',
          answer:
            "Provided that your service fall's within our operation window (Monday - Monday between 7:00am - 7:00pm), we are more than happy to fulfil your request. After completing your subscription and paying for your first month of service, please reach out to your Gardener to confirm the specific date and times you want your services.",
        },
        {
          position: 'seven',
          question: 'How long will my service take? ',
          answer:
            'All laundry services are delivered back to you within 48 hours unless otherwise specified.',
        },
        {
          position: 'eight',
          question: 'What if I want to change or add on additional services? ',
          answer:
            'While our Service Partners (SP) are flexible and maybe able to provide more than one service, not all Service Partners (SP) are certified to do all services. Please reach out 24 hours before your service and confirm the changes with your Gardener.',
        },
        {
          position: 'nine',
          question:
            "There are items missing / I received someone else's laundry? ",
          answer:
            "We work diligently to ensure that you receive all your items. When we receive a laundry bag, our quality assurance team counts each item in your bag, takes a picture, and identifies any problematic areas e.g. missing buttons, rips etc. Before we begin your load, your Gardener sends you this log to counterconfirm. Please use this log to confirm your items when they are delivered to you fresh. In the event there is still an item missing or you received isomeone else's items, please notify your  Gardener within 24 hours.	",
        },

        {
          position: 'ten',
          question:
            'I am not happy with the quality of the service? Will I get compensated?',
          answer:
            'We are committed to ensuring the best of quality at the most affordable of prices. Should you be dissatisfied with your service we recommend that you provide feedback to our Customer Success team within 24 hours via your app or directly on our phone number. We deal with each complaint on a case by case basis and offer several options for resolution e.g. redoing of the service, or Eden credit.		',
        },
        {
          position: 'eleven',
          question:
            'I am no longer available for my laundry to be picked up or dropped off? ',
          answer:
            'In the event that you need to reschedule your service, please notify your Gardener 24 hours before your service or directly contact us on our business phone number. The earlier you are able to confirm, the better we are able to intervene, reschedule and inform the service partner assigned to your job. 		',
        },
        {
          position: 'twelve',
          question:
            'I want my laundry to be picked up or dropped off at a different location:',
          answer:
            ' In order to ensure that we can plan and guarantee delivery within 48 hours, we need at least 24 hours notice for changes in location. Please notify your Gardener within this window to ensure your laundry is dropped off at the correct location.		',
        },
      ],
      activeQuestion: 'one',
      modalText: 'information',
      showDownloadBanner: true,
      showWaitListForm: false,
      visible: false,
      showSuccessModal: false,
      loading: false,
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
          href: `https://ouredenlife.com/ke/laundry/`,
        },
        {
          rel: 'alternate',
          hreflang: 'en-ng',
          href: 'https://ouredenlife.com/laundry/',
        },
        {
          rel: 'alternate',
          hreflang: 'en-ke',
          href: 'https://ouredenlife.com/ke/laundry/',
        },
        {
          rel: 'alternate',
          hreflang: 'x-default',
          href: 'https://ouredenlife.com/laundry/',
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        title: 'Eden | Laundry',
        description:
          'Fresh, clean and crisp clothes at your doorstep. Whenever you need it .',
        url: `https://ouredenlife.com/ke/laundry/`,
        mainImage:
          'https://ouredenlife.com/ke/edencardlaundry.png',
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
      this.totalWashDryPrice = this.caculateLaundryPricing(
        'wash-and-fold',
        this.washDryFrequency,
        this.washDry
      )
      this.totalWashIronPrice = this.caculateLaundryPricing(
        'wash-and-iron',
        this.washIronFrequency,
        this.washIron
      )
    }, 2000)
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.isInViewport)
  },
  methods: {
    trackDevice() {
      if (navigator.userAgent.toLowerCase().indexOf('android') > -1) {
        window.location.href =
          'https://play.google.com/store/apps/details?id=com.ouredenlife.app'
      }
      if (navigator.userAgent.toLowerCase().indexOf('iphone') > -1) {
        window.location.href =
          'https://apps.apple.com/us/app/eden-life/id1482373755?ls=1'
      } else {
        this.scrollToFooter('#get-the-app', 'Download App')
      }
    },
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
    openQuestion(question) {
      if (this.activeQuestion === question) {
        this.activeQuestion = ''
      } else this.activeQuestion = question
    },
    caculateLaundryPricing(item, frequency, qty) {
      return pricing({
        laundry: {
          item,
          frequency,
          qty,
          service_day: ['thursday'],
        },
      })
    },
    increaseOrder(order) {
      mixpanelTrackEvent(`Increase ${order} order clicked - laundry page`)

      if (order === 'washDry') {
        this.washDry++
        this.totalWashDryPrice = this.caculateLaundryPricing(
          'wash-and-fold',
          this.washDryFrequency,
          this.washDry
        )
      }

      if (order === 'washIron') {
        this.washIron++
        this.totalWashIronPrice = this.caculateLaundryPricing(
          'wash-and-iron',
          this.washIronFrequency,
          this.washIron
        )
      }
    },
    decreaseOrder(order) {
      mixpanelTrackEvent(`Decrease ${order} order clicked - laundry page`)

      if (order === 'washDry' && this.washDry > 1) {
        this.washDry--
        this.totalWashDryPrice = this.caculateLaundryPricing(
          'wash-and-fold',
          this.washDryFrequency,
          this.washDry
        )
      }

      if (order === 'washIron' && this.washIron > 1) {
        this.washIron--
        this.totalWashIronPrice = this.caculateLaundryPricing(
          'wash-and-iron',
          this.washIronFrequency,
          this.washIron
        )
      }
    },
    laundryDryFrequency(freq) {
      mixpanelTrackEvent(` ${freq} wash&dry frequency clicked - laundry page`)
      this.washDryFrequency = freq
      this.totalWashDryPrice = this.caculateLaundryPricing(
        'wash-and-fold',
        this.washDryFrequency,
        this.washDry
      )
    },
    laundryIronFrequency(freq) {
      mixpanelTrackEvent(` ${freq} wash&iron frequency clicked - laundry page`)

      this.washIronFrequency = freq
      this.totalWashIronPrice = this.caculateLaundryPricing(
        'wash-and-iron',
        this.washIronFrequency,
        this.washIron
      )
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
    getEarlyAccess() {
      this.showWaitListForm = true
      this.modalText = 'information'
    },
    closeModal() {
      this.showSuccessModal = !this.showSuccessModal
    },
    downloadApp() {
      mixpanelTrackEvent('Download App - laundry banner')
      const userAgent = navigator.userAgent || navigator.vendor || window.opera
      if (/android/i.test(userAgent)) {
        window.location.href =
          'https://play.google.com/store/apps/details?id=com.ouredenlife.app'
      }
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href =
          'https://apps.apple.com/us/app/eden-life/id1482373755?ls=1'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/ke/_laundry.scss';
@import '@/assets/scss/components/_modal-body.scss';
@import '@/assets/scss/components/_downloadbanner.scss';
</style>
