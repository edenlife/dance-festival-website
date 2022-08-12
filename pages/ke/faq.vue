<template>
  <div>
    <div class="container--header">
      <header class="faq__header">
        <h1>FAQs</h1>
        <p>Your Eden questions, answered.</p>
      </header>
      <section class="faq__questions">
        <div class="faq__questions-item">
          <div class="faq__questions-title">
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
              across Africa. We started with Lagos, and now we're headed to
              Nairobi.

              <br />
              <br />
              With Eden, you can outsource all routine tasks to us, so you can
              focus on the things with the most impact. From work, to family
              time and relaxation, you deserve to live stress free and at your
              convenience with extra comfort. <br />Some people call us the
              <strong>Concierge of Comfort </strong>– they're correct.
            </p>
          </transition>
        </div>
        <div class="faq__questions-item">
          <div class="faq__questions-title">
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
              Currently, we provide 4 main services, food, cleaning, laundry and
              beauty. As an Eden Life subscriber you get to choose between any
              or all of the services that work best for you. Need food? We got
              your week covered. Dirty laundry, send it our way and get it back
              within no timem freshly washed, folded and ironed. Home or office
              need a good clean? We do that as well. Need some pampering? Our
              nail technologists, massage therapists and waxers will deliver
              services at your convenience.
            </p>
          </transition>
        </div>
        <div class="faq__questions-item">
          <div class="faq__questions-title">
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
                @click.prevent="scrollTo('#get-the-app', 'faq')"
                >Eden</a
              >, you can configure a plan that fits your needs, then you get
              assigned a Gardener to help you manage your home or office. The
              app takes your food, cleaning, laundry, and beauty needs and turns
              them into tasks that our Gardeners attend to on schedule. The only
              finger you'll be lifting is the one scrolling through the app,
              monitoring progress.
            </p>
          </transition>
        </div>
        <div class="faq__questions-item">
          <div class="faq__questions-title">
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
              They have one job - to understand all the things you need to live
              your best Eden life, and to ensure that we provide you with
              exactly that.
              <br />
              <br />
              When you sign up on Eden, you have access to your Gardener's
              profile that list information on who they are and what they do.
            </p>
          </transition>
        </div>
        <div class="faq__questions-item">
          <div class="faq__questions-title">
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
              Think of your Gardener as your link to an ever-expanding world of
              Eden services you can take advantage of. Your Gardener helps you
              access a variety of services from
              <strong> food, to cleaning and laundry, beauty and more.</strong>
              And that's just the beginning.
              <br />
              <br />
              If there’s ever a service you wish your Gardener provided (that
              they don’t, as yet), select the ‘Feedback’ option on the Gardener
              profile, and we’ll get the message!
            </p>
          </transition>
        </div>
        <!--  -->
        <div class="faq__questions-item">
          <div class="faq__questions-title">
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
              Your Gardener’s schedule is designed to give the best attention to
              your chores, which gives them (based on our very trusty Eden math)
              enough time to attend to a few other customers in the same area as
              you. This means that our Gardeners attend to a handful of
              customers, but are never swamped with requests.
            </p>
          </transition>
        </div>

        <div class="faq__questions-item">
          <div class="faq__questions-title">
            <h5>How do I download the Eden app?</h5>
            <button
              type="button"
              class="expand"
              @click.prevent="expandQuestion('eight')"
            >
              <svg
                v-if="questions.includes('eight')"
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
            <p v-if="questions.includes('eight')">
              Get Started
              <a
                href="#"
                style="color: #03a84e"
                @click.prevent="scrollTo('#get-the-app', 'faq')"
                >here</a
              >. It takes 5 minutes to set up.
            </p>
          </transition>
        </div>
        <div class="faq__questions-item">
          <div class="faq__questions-title">
            <h5>What if I want a service that’s not yet on Eden?</h5>
            <button
              type="button"
              class="expand"
              @click.prevent="expandQuestion('nine')"
            >
              <svg
                v-if="questions.includes('nine')"
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
            <p v-if="questions.includes('nine')">
              I want a different service from what is listed, how do I order? As
              we continue to grow, we will be adding newer products. Anytime a
              new product or category is launched, we will send a newsletter
              about the new offering. Follow our social media handles to find
              out about promotions and vouchers in the meantime.
            </p>
          </transition>
        </div>
      </section>
    </div>
    <div class="container--form">
      <section class="faq__form">
        <h3>Still have questions? Shoot.</h3>
        <form class="form">
          <div class="form__input">
            <label for="email">Email</label>
            <input
              id=""
              v-model="bound_fields.email"
              type="email"
              name=""
              :class="{ 'has-error': $v.bound_fields.email.$error }"
            />
          </div>
          <div class="form__input">
            <label for="message">Message</label>
            <textarea
              id=""
              v-model="bound_fields.message"
              cols="30"
              rows="10"
              name=""
              :class="{ 'has-error': $v.bound_fields.message.$error }"
            ></textarea>
          </div>
          <button
            type="submit"
            class="form__btn"
            :disabled="loading"
            @click.prevent="submitForm"
          >
            Send Message
          </button>
        </form>
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
            <h5>Question Submitted</h5>
            <p>You have successfully submitted your question.</p>
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
              Your question was not successfully submitted. Please try again or
              reach us at <span>eve@edenlife.ng </span> or
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
import { scrollToApp } from '~/static/functions'
import { mixpanelTrackEvent } from '~/plugins/ke/mixpanel'
import { faqApi } from '~/request/all.api'
import getSiteMeta from '~/utils/getSiteMeta'

export default {
  mixins: [validationMixin],
  data() {
    return {
      questions: ['one'],
      loading: false,
      showFailedModal: false,
      showSuccessModal: false,
      bound_fields: {
        email: null,
        message: null,
      },
    }
  },
  layout: 'ke-default',
  head() {
    return {
      title: 'Eden | FAQ',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://ouredenlifev2-staging.netlify.app/ke/faq/`,
        },
        {
          rel: 'alternate',
          hreflang: 'en-ng',
          href: 'https://ouredenlifev2-staging.netlify.app/faq/',
        },
        {
          rel: 'alternate',
          hreflang: 'en-ke',
          href: 'https://ouredenlifev2-staging.netlify.app/ke/faq/',
        },
        {
          rel: 'alternate',
          hreflang: 'x-default',
          href: 'https://ouredenlifev2-staging.netlify.app/faq/',
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        title: 'Eden | FAQ',
        description: `Say goodbye to chores forever. Eden is a tech-enabled service that puts your home's chores on autopilot. Check out how we work!`,
        url: `https://ouredenlifev2-staging.netlify.app/ke/faq/`,
        mainImage: 'https://ouredenlifev2-staging.netlify.app/edencard.png',
      }
      return getSiteMeta(metaData)
    },
  },
  mounted() {
    mixpanelTrackEvent('FAQs page')
  },
  validations: {
    bound_fields: {
      email: { required, email },
      message: { required },
    },
  },
  methods: {
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
    async submitForm() {
      this.$v.bound_fields.$touch()
      if (!this.$v.bound_fields.$error) {
        try {
          this.loading = true
          await faqApi(this.bound_fields)
          Object.keys(this.bound_fields).forEach(
            (key) => (this.bound_fields[key] = '')
          )
          this.$nextTick(() => {
            this.$v.bound_fields.$reset()
          })
          this.showSuccessModal = true
          this.loading = false
          mixpanelTrackEvent('Feedback form - faq page')
        } catch (error) {
          this.loading = false
          this.showFailedModal = true
        }
      }
    },
    scrollTo(id, label) {
      scrollToApp(id, label)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_faq.scss';
</style>
