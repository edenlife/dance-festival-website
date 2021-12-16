<template>
  <div>
    <div class="container--hero">
      <header class="hero">
        <div class="hero__title">
          <h1>
            Time Is The
            <video ref="videoRef" muted playsinline autoplay loop>
              <source
                src="https://res.cloudinary.com/eden-life-inc/video/upload/v1638955063/gift-header-hero_a3qp7n.mp4"
                type="video/mp4"
              />
            </video>
            Greatest Gift Of All
          </h1>
          <h1 class="mobile">
            <span> Time is the </span>
            <video ref="videoRef" muted playsinline autoplay loop>
              <source
                src="https://res.cloudinary.com/eden-life-inc/video/upload/v1638955063/gift-header-hero_a3qp7n.mp4"
                type="video/mp4"
              />
            </video>

            <span> greatest gift of all </span>
          </h1>
          <p>
            An Eden plan buys back time for your loved ones. <br/> Time to chill, time
            to grow, and time for you. <br/>Everyone wants more time, so give the
            perfect gift today.
          </p>
        </div>

        <div class="hero__button">
          <button
            type="button"
            class="hero__button-solid"
            @click.prevent="scrollTo('step-one')"
          >
            <span> Gift an Eden Plan in 3 Steps </span>
            <img src="@/assets/images/value-gift.svg" alt="food" />
            <span>👇🏽</span>
          </button>
        </div>

        <div class="arrow"></div>
      </header>
      <div id="step-one" class="bundle__title">
        <h3>Step 1: Choose a Gift Bundle</h3>
      </div>
    </div>

    <div  class="container--bundles">
      <section class="bundle__types">
        <bundle
          v-for="(bundle, index) in gift_bundles"
          :key="index"
          :gift-plan="bundle"
          @plan="selectPlan"
        />
      </section>
      <div class="bundle__title">
        <a @click="showCustomPlan = true">
          <h3>I want a plan that's not here</h3></a
        >
      </div>
    </div>

    <div class="container--bundles form__holder" id="bundle-form">
      <div class="bundle--form">
        <div class="bundle__title">
          <h3>Step 2: Give the Perfect Gift</h3>
          <p>
            We need your information to process your gift. Don't worry, you can
            stay anonymous if you want.
          </p>

          <div v-if="selectedPlan" class="plan--card">
            {{ selectedPlan.title }} | {{ selectedPlan.plan_detail }} | ₦{{
              selectedPlan.amount
            }}
          </div>
          <div v-else class="plan--card">No plan selected</div>
        </div>
        <form class="form">
          <div class="form__input">
            <label for="company name">
              Name <span class="required">*</span>
            </label>
            <input
              id=""
              v-model="bundleForm.giver_name"
              type="text"
              name=""
              placeholder="Enter your name"
              :class="{ 'has-error': $v.bundleForm.giver_name.$error }"
            />
          </div>

          <div class="form__input">
            <label for="phone number"
              >Phone number <span class="required">*</span></label
            >
            <input
              id=""
              v-model.trim="$v.bundleForm.giver_phone_number.$model"
              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
              type="text"
              name=""
              placeholder="Enter your phone number"
              :class="{ 'has-error': $v.bundleForm.giver_phone_number.$error }"
            />
          </div>
          <div class="form__input">
            <label for="email"
              >Email address <span class="required">*</span></label
            >
            <input
              id=""
              v-model="bundleForm.giver_email"
              type="email"
              name=""
              placeholder="Enter your email address"
              :class="{ 'has-error': $v.bundleForm.giver_email.$error }"
            />
          </div>

          <div class="form__input">
            <label for="message">Message (optional)</label>
            <textarea
              id=""
              v-model="bundleForm.message"
              name=""
              cols="30"
              rows="10"
              placeholder="Extra message"
              :class="{ 'has-error': $v.bundleForm.message }"
            ></textarea>
          </div>

          <div class="form__input">
            <label for="message">
              Want to stay Anonymous? 👀 <span class="required">*</span>
            </label>

            <div class="form-select">
              <ul>
                <li>
                  <input
                    v-model="bundleForm.anonymous"
                    type="checkbox"
                    name="anonymous"
                    :value="true"
                  />
                  <label
                    for="anonymous"
                    :class="{
                      checkmark: bundleForm.anonymous === true,
                      'has-error': $v.bundleForm.anonymous.$error,
                    }"
                  >
                    Yes
                  </label>
                </li>
                <li>
                  <input
                    v-model="bundleForm.anonymous"
                    type="checkbox"
                    name="not-anonymous"
                    :value="false"
                  />
                  <label
                    for="not-anonymous"
                    :class="{
                      checkmark: bundleForm.anonymous === false,
                      'has-error': $v.bundleForm.anonymous.$error,
                    }"
                  >
                    No
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div class="form__input">
            <label for="message">
              When should they learn about the gift?
              <span class="required">*</span>
            </label>

            <div class="form-select">
              <ul>
                <li>
                  <input
                    @click="setDate"
                    type="checkbox"
                    name="date"
                    :value="true"
                  />
                  <label
                    for="date"
                    :class="{
                      checkmark: checkDate,
                      'has-error': $v.bundleForm.date.$error,
                    }"
                  >
                    Immediately
                  </label>
                </li>
                <li>
                  Later

                  <div class="dates">
                    <span
                      v-if="dateChecked"
                      class="date--texts"
                      :class="{
                        'has-error': $v.bundleForm.date.$error,
                      }"
                    >
                      <span> DD </span>
                      <span> MM </span>
                      <span> YYYY </span>
                    </span>
                    <span
                      v-else
                      class="date--texts"
                      :class="{
                        'has-error': $v.bundleForm.date.$error,
                      }"
                    >
                      <span> {{ bundleForm.date.split('-')[0] || 'DD' }} </span>
                      <span> {{ bundleForm.date.split('-')[1] || 'MM' }} </span>
                      <span>
                        {{ bundleForm.date.split('-')[2] || 'YYYY' }}
                      </span>
                    </span>
                    <date-picker
                      v-model="bundleForm.date"
                      @change="dateChecked = false"
                      valueType="format"
                      format="DD-MM-YYYY"
                      placeholder="MM DD YYYY"
                    >
                    </date-picker>
                  </div>

                  <!-- <input
                    v-model="bundleForm.date"
                    type="date"
                    name="not-anonymous"
                  /> -->
                </li>
              </ul>
            </div>
          </div>
          <div class="bundle__title">
            <h4>Now, let's meet this special person. 💚</h4>
          </div>

          <div class="form__input">
            <label for="company name">
              What’s the name you call them? <span class="required">*</span>
            </label>
            <input
              id=""
              v-model="bundleForm.receiver_name"
              type="text"
              name=""
              placeholder="E.g Sonia"
              :class="{ 'has-error': $v.bundleForm.receiver_name.$error }"
            />
          </div>

          <div class="form__input">
            <label for="phone number"
              >Phone number <span class="required">*</span></label
            >
            <input
              id=""
              v-model.trim="$v.bundleForm.receiver_phone_number.$model"
              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
              type="text"
              name=""
              placeholder="Enter their phone number"
              :class="{
                'has-error': $v.bundleForm.receiver_phone_number.$error,
              }"
            />
          </div>
          <div class="form__input">
            <label for="email"
              >Email address (it's okay if you don't know this)
            </label>
            <input
              id=""
              v-model="bundleForm.receiver_email"
              type="email"
              name=""
              placeholder="Enter  email address"
            />
          </div>

          <p class="info--text">
            Eden currently only serves people in Lagos, so we can only fulfill
            your gift request if the recipient is in Lagos.
          </p>

          <button
            type="submit"
            class="btn--submit"
            :class="{
              loading: loading,
            }"
            :disabled="loading || !selectedPlan"
            @click.prevent="submit('plan')"
          >
            Give the Gift of Time
          </button>
        </form>
      </div>
    </div>

    <div id="success-section" class="container--bundles">
      <div class="bundle__title">
        <img src="@/assets/images/gift-confetti.svg" alt="" class="confetti" />
        <h3 class="m-fit">Step 3: We'll Take It From Here</h3>

        <p>
          We'll reach out to the person you're gifting whenever you want us to,
          and start serving them as soon as they want us to.
        </p>
      </div>
    </div>

    <modal
      v-if="showCustomPlan"
      :show-modal="showCustomPlan"
      class="modal-lead"
    >
      <div slot="header"></div>
      <div slot="body" class="modal__body">
        <div class="company__modal">
          <button class="btn" @click="showCustomPlan = false">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="15.5" fill="white" stroke="#E4E8E6" />
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
          <div class="company__modal-title">
            <h3 class="">Gift a Custom Plan</h3>

            <p>
              We need your information to process your gift. Whatever Eden plan
              you want, we'll get it done. Just fill the form and we'll reach
              out to you.
            </p>
          </div>
          <form action="" class="form">
            <div class="form__input">
              <label for="company name">
                Name <span class="required">*</span>
              </label>
              <input
                id=""
                v-model="customForm.name"
                type="text"
                name=""
                placeholder="Enter your name"
                :class="{ 'has-error': $v.customForm.name.$error }"
              />
            </div>

            <div class="form__input">
              <label for="phone number"
                >Phone number <span class="required">*</span></label
              >
              <input
                id=""
                v-model.trim="$v.customForm.phone_number.$model"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                type="text"
                name=""
                placeholder="Enter phone number"
                :class="{ 'has-error': $v.customForm.phone_number.$error }"
              />
            </div>
            <div class="form__input">
              <label for="email"
                >Email address <span class="required">*</span></label
              >
              <input
                id=""
                v-model="customForm.email"
                type="email"
                name=""
                placeholder="Enter email address"
                :class="{ 'has-error': $v.customForm.email.$error }"
              />
            </div>

            <div class="form__input">
              <label for="services">Preferred Gift Plan (optional)</label>
              <div class="select">
                <div class="selector">
                  <div class="label" @click="toggle()">
                    <span v-if="!customForm.plan_name" class="placeholder">
                      Select plan
                    </span>
                    <span v-else class="label--text">{{
                      customForm.plan_name
                    }}</span>
                  </div>
                  <svg
                    class="arrow"
                    :class="{ expanded: visible }"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    @click="toggle()"
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
                      <div class="selection">
                        <ul>
                          <li
                            v-for="(service, index) in gift_bundles"
                            :key="index"
                            :value="service"
                          >
                            <input
                              :id="service.title"
                              @click="setCustomPlan(service)"
                              type="checkbox"
                              :name="service.title"
                              :value="service.title"
                            />
                            <label
                              :for="service.title"
                              :class="{
                                checkmark:
                                  customForm.plan_name === service.title,
                              }"
                            >
                              {{ service.title }}</label
                            >
                          </li>
                        </ul>
                        <button class="btn--submit" @click.prevent="toggle()">
                          Done
                        </button>
                      </div>
                    </transition>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              class="btn--submit"
              :disabled="loading"
              @click.prevent="submit('custom')"
            >
              Get my Gift
            </button>
          </form>
        </div>
      </div>
      <div slot="footer"></div>
    </modal>

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
              alt="failed"
            />
            <h5>Information Submitted</h5>
            <button
              type="submit"
              class="btn--submit"
              :disabled="loading"
              @click.prevent="closeModal"
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
        <div class="company__modal">
          <div class="company__modal-title">
            <button
              class="btn btn--success"
              @click="
                showFailedModal = false
                showCustomPlan = false
              "
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
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import { createGiftPlan, createCustomPlan } from '~/request/airtable'
import giftBundles from '~/static/giftBundles'

export default {
  components: {
    Modal: () => import('@/components/Modal.vue'),
    Bundle: () => import('@/components/Bundle.vue'),
  },
  mixins: [validationMixin],
  validations: {
    customForm: {
      name: { required },
      email: { required, email },
      phone_number: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
    },
    bundleForm: {
      giver_name: { required },
      giver_email: { required, email },
      giver_phone_number: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
      receiver_name: { required },
      receiver_phone_number: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
      anonymous: { required },
      date: { required },
      plan_description: { required },
      plan_name: { required },
    },
  },
  data() {
    return {
      showCustomPlan: false,
      showSuccessModal: false,
      showFailedModal: false,
      loading: false,
      customForm: {
        name: '',
        plan_description: '',
        plan_name: '',
        email: '',
        phone_number: '',
      },
      bundleForm: {
        giver_name: '',
        giver_email: '',
        message: '',
        giver_phone_number: '',
        anonymous: null,
        date: '',
        receiver_name: '',
        receiver_email: '',
        receiver_phone_number: '',
        plan_description: '',
        plan_name: '',
      },
      visible: false,

      gift_bundles: giftBundles,
      selectedPlan: null,
      dateChecked: false,
    }
  },
  mounted() {
    mixpanelTrackEvent('Gift Plans page')
  },

  computed: {
    checkDate() {
      const date = new Date()
      if (
        this.bundleForm.date &&
        this.bundleForm.date.replaceAll('-', '/') === date.toLocaleDateString()
      ) {
        return true
      }

      return false
    },
  },
  methods: {
    setDate() {
      this.dateChecked = true
      this.bundleForm.date = new Date()
        .toLocaleDateString()
        .replaceAll('/', '-')
    },
    selectPlan(val) {
      this.selectedPlan = val
      this.bundleForm.plan_description = this.selectedPlan.details.join(' ')
        this.bundleForm.plan_name = this.selectedPlan.title
    },
    setCustomPlan(plan) {
      this.customForm.plan_name = plan.title
      this.customForm.plan_description = plan.details.join(' ')
    },
    closeModal() {
      this.showSuccessModal = !this.showSuccessModal
    },
    toggle() {
      this.visible = !this.visible
    },
    async submit(form) {
      switch (form) {
        case 'custom':
          this.submitCustom()
          break
        case 'plan':
          this.submitPlan()
          break
        default:
          break
      }
    },
    async submitCustom() {
      this.$v.customForm.$touch()
      if (!this.$v.customForm.$error) {
        try {
          this.loading = true
          const metaData = {
            Name: this.customForm.name,
            Email: this.customForm.email,
            Phone: this.customForm.phone_number,
            'Plan Description': this.customForm.plan_description,
            'Plan Name': this.customForm.plan_name,
          }
          createCustomPlan(metaData).then(
            (res) => {
              this.loading = false
              setTimeout(() => {
                Object.keys(this.customForm).forEach(
                  (key) => (this.customForm[key] = '')
                )
                this.$nextTick(() => {
                  this.$v.customForm.$reset()
                  this.loading = false
                  this.scrollTo('success-section')
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
    async submitPlan() {
      this.$v.bundleForm.$touch()

      if (!this.$v.bundleForm.$error) {
        try {
          this.loading = true
          const metaData = {
            'Giver Name': this.bundleForm.giver_name,
            'Giver Email': this.bundleForm.giver_email,
            'Giver Phone': this.bundleForm.giver_phone_number,
            'Anonymous Giver': this.bundleForm.anonymous ? 'Yes' : 'No',
            Message: this.bundleForm.message,
            'Contact Receiver': this.dateChecked
              ? 'Immediately'
              : this.bundleForm.date,
            'Receiver Name': this.bundleForm.receiver_name,
            'Receiver Email': this.bundleForm.receiver_email,
            'Receiver Phone': this.bundleForm.receiver_phone_number,
            'Plan Description': this.bundleForm.plan_description,
            'Plan Name': this.bundleForm.plan_name,
          }
          createGiftPlan(metaData).then(
            (res) => {
              this.loading = false
              setTimeout(() => {
                Object.keys(this.bundleForm).forEach(
                  (key) => (this.bundleForm[key] = '')
                )
                this.$nextTick(() => {
                  this.$v.bundleForm.$reset()
                  this.selectedPlan = null
                  this.loading = false
                  this.showCustomPlan = false
                  this.showSuccessModal = true
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

    scrollTo(id) {
      document.getElementById(id).scrollIntoView()
    },

    scrollToFooter(label) {
      this.showModalCompany = !this.showModalCompany
      mixpanelTrackEvent(label)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_gift_plans.scss';
</style>
