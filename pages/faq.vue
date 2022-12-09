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
            <h5>So, how does this “Skip The Line, Order Ahead” thing work?</h5>
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
              “Skip the line” allows you to have fun, and really enjoy the
              festival by ordering all your food ahead. <br /><br />
              Why struggle to find food on that day when you can be grooving to
              great music and meeting awesome people.<br /><br />
              To do this, you can click here and check out all the delicious
              food we’ll be serving on that day.<br /><br />
              Then, select your prefered meal which you can easily pick up at
              the festival venue.
            </p>
          </transition>
        </div>
        <div class="faq__questions-item">
          <div class="faq__questions-title">
            <h5>Why should I preorder my meal?</h5>
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
              When you pre-order your meal, you literally get to skip the long
              lines that’ll surely be present at the festival venue.<br /><br />
              Just walk in like a boss (that you are) and pick up your food
              immediately you get there. Leave all the stress for people that
              like <span style="font-style: italic">sufferhead.</span>
            </p>
          </transition>
        </div>
        <div class="faq__questions-item">
          <div class="faq__questions-title">
            <h5>How many meals can I select at once?</h5>
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
              Errr…there’s no limit to the amount of food you can order. 10,
              100, 1000, who’s stopping you? As long as you can eat it, we’ll
              make it.<br /><br />
              You can also pick one meal multiple times. Rice in the morning,
              afternoon and evening? That’s okay, we’ll run it.
            </p>
          </transition>
        </div>
        <div class="faq__questions-item">
          <div class="faq__questions-title">
            <h5>Can I order a meal for someone?</h5>
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
              Of course. You can pre order multiple meals for multiple people;
              friends, family, enemies, etc.<br /><br />
              If you’re feeling up to it, you can order meals for everyone at
              the festival. We’ll deliver everything at the event.
            </p>
          </transition>
        </div>

        <div class="faq__questions-item">
          <div class="faq__questions-title">
            <h5>WHow would I get the meals I ordered?</h5>
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
              We’re going to be live at the festival, feeding you and others as
              you have the time of your lives.<br /><br />
              You can walk up to our booth to pick up your food anytime you
              like.
            </p>
          </transition>
        </div>
        <div class="faq__questions-item">
          <div class="faq__questions-title">
            <h5>How can I make payment for my meals?</h5>
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
              Easy. We accept payments via transfer with your mobile bank,
              internet banking or USSD code (it’s up to you really). We would
              not be able to accept cash for obvious security reasons.
            </p>
          </transition>
        </div>
        <!--  -->
        <div class="faq__questions-item">
          <div class="faq__questions-title">
            <h5>
              Will I get a refund if I’m unable to pick up my meals at the
              event?
            </h5>
            <button
              type="button"
              class="expand"
              @click.prevent="expandQuestion('seven')"
            >
              <svg
                v-if="questions.includes('seven')"
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
            <p v-if="questions.includes('seven')">
              For every meal that you select and don’t pick-up, we’ll give you a
              full refund. However, you’d be missing a lot by not picking up
              your meals. Even with your refund, it’ll be a big loss, trust us.
            </p>
          </transition>
        </div>
        <div class="faq__questions-item">
          <div class="faq__questions-title">
            <h5>Can I get the meals delivered to my house?</h5>
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
              We understand that you’d love to eat Eden meals at home, but
              unfortunately, we can’t grant you that wish for this event. The
              meals will only be available at the festival venue.<br /><br />
              However, you can get our delicious food delivered to your house
              everyday when you start an Eden Life meal subscription.
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
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import getSiteMeta from '~/utils/getSiteMeta'
import { faqApi } from '~/request/all.api'

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
  head() {
    return {
      title: 'Eden | FAQ',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://ouredenlife.com/faq/`,
        },
        {
          rel: 'alternate',
          hreflang: 'en-ng',
          href: 'https://ouredenlife.com/faq/',
        },
        {
          rel: 'alternate',
          hreflang: 'en-ke',
          href: 'https://ouredenlife.com/ke/faq/',
        },
        {
          rel: 'alternate',
          hreflang: 'x-default',
          href: 'https://ouredenlife.com/faq/',
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        title: 'Eden | FAQ',
        description: `Say goodbye to chores forever. Eden is a tech-enabled service that puts your home's chores on autopilot. Check out how we work!`,
        url: `https://ouredenlife.com/faq/`,
        mainImage: 'https://ouredenlife.com/edencard.png',
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
      mixpanelTrackEvent('Feedback form - faq page')
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
