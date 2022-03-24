<template>
  <div>
    <div class="container--hero">
      <div id="stars"></div>
      <div id="stars_2"></div>
      <!-- <div id="stars_3"></div> -->

      <div class="moon">
        <img src="@/assets/images/moon.svg" alt="moon" />
      </div>
      <header class="hero">
        <div class="hero__title">
          <h1>
            <span class="header--text">{{ ramadanOffer[0] }}</span>
            ready to eat in 5 minutes
          </h1>

          <p>
            <img src="@/assets/images/praying.png" alt="pray" /> Never worry
            about Iftar or Sahur. Just focus on Ibadah. <br />
            <img src="@/assets/images/meal.png" alt="meal" /> Nourishing,
            chef-cooked meals delivered to you on schedule. <br /><img
              src="@/assets/images/man.png"
              alt="man"
            />Personalized Customer Support.
          </p>
        </div>

        <div class="hero__button">
          <button
            type="button"
            class="hero__button-solid"
            @click.prevent="scrollTo('step-one')"
          >
            I want Sahur & Iftar
          </button>
        </div>
      </header>
      <div class="bundle__title">
        <img src="@/assets/images/ramadan-bundle-header.svg" alt="header" />
      </div>
    </div>
    <div id="step-one" class="container--body">
      <h3>How it works</h3>

      <div class="info--list">
        <div
          v-for="info in infoList"
          :key="info.index"
          v-animate-onscroll.repeat="'animated  fadeInDown'"
          class="info--item"
        >
          <img
            :src="require(`~/assets/images/image_${info.index}.png`)"
            :alt="` image_${info.index}`"
          />

          <h4>{{ info.title }}</h4>

          <p>{{ info.description }}</p>
        </div>
      </div>
      <div class="hero__button">
        <button
          type="button"
          class="hero__button-solid"
          @click.prevent="scrollTo('bundle-form')"
        >
          I want Sahur & Iftar
        </button>
      </div>
    </div>
    <div id="bundle-form" class="container--bundles form__holder">
      <div class="bundle__title">
        <h3>Which applies to you?</h3>
        <div class="gift--options">
          <div
            v-for="item in planOptions"
            :key="item.value"
            v-animate-onscroll="'animated fadeInDown'"
            class="gift--option"
            :class="{
              active: selectedPlan.value === item.value,
            }"
            @click="setValue(item)"
          >
            <div
              v-if="selectedPlan.value === item.value"
              class="selected"
            ></div>

            <input
              v-if="!selectedPlan.value || selectedPlan.value !== item.value"
              id="select-gift"
              type="radio"
              name="gift"
              for="gift"
            />
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>

      <div v-if="selectedPlan.value === 'personal'" class="bundle--form cover">
        <div class="bundle__title">
          <h5>
            You're one step closer to not worrying about food this Ramadan.
          </h5>
          <p>
            Enter your details and we'll reach out to you on the next steps.
            Let's go!
          </p>
        </div>
        <form class="form">
          <div class="form__input">
            <label for=" name"> Name <span class="required">*</span> </label>
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
              placeholder="Enter your phone number"
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
              placeholder="Enter your email address"
              :class="{ 'has-error': $v.customForm.email.$error }"
            />
          </div>

          <button
            type="submit"
            class="btn--submit"
            :class="{
              loading: loading,
            }"
            :disabled="loading || !selectedPlan.value"
            @click.prevent="submit('personal')"
          >
            I want Sahur & Iftar
          </button>
        </form>
      </div>

      <div v-else class="bundle--form">
        <div class="bundle__title">
          <h5>Give the perfect Ramadan gift.</h5>
          <p>
            We need your information to process the gifts, don’t worry, you can
            stay anon. When you fill out this form, our customer success
            representative will reach out to you on the next steps to take.
          </p>
        </div>
        <form class="form">
          <div class="form__input">
            <label for=" name"> Name <span class="required">*</span> </label>
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
            <label for="anonymous">
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
                    type="checkbox"
                    name="date"
                    :value="true"
                    @click="setDate"
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
                      value-type="format"
                      format="DD-MM-YYYY"
                      placeholder="MM DD YYYY"
                      :disabled-date="disabledRange"
                      @change="dateChecked = false"
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
            <h4>Now, let's know this someone 💚</h4>
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
            :disabled="loading || !selectedPlan.value"
            @click.prevent="submit('gift')"
          >
            Gift the perfect Ramadan gift
          </button>
        </form>
      </div>
    </div>
    <div class="container--description">
      <section class="description">
        <div class="description__inner">
          <div class="description__inner-left">
            <div class="description__title">
              <h3>
                Why should Eden Life <br />
                worry about your food <br />
                this Ramadan?
              </h3>
            </div>
            <div class="description__inner-img">
              <img
                :src="require(`~/assets/images/okunade-testimony.png`)"
                alt=""
              />
            </div>
            <div
              v-animate-onscroll="'animated rollIn'"
              class="description__inner-name"
            >
              <p>Okunade Goodman</p>
              <span>@OkunadeGoodMan</span>
            </div>
          </div>
          <div class="description__details">
            <div class="description__details-item">
              <div class="description__details-item--icon">
                <img :src="require(`~/assets/images/praying.png`)" alt="" />
              </div>

              <div
                v-animate-onscroll.repeat="'animated fadeInDown'"
                class="description__details-item--text"
              >
                <h5>It saves you precious time</h5>
                <p>
                  By letting Eden worry about your Iftar or Sahur, you go from
                  worrying about food during this Ramadan to having more time to
                  get closer to Allah.
                </p>
              </div>
            </div>
            <div class="description__details-item">
              <div class="description__details-item--icon">
                <img
                  :src="require(`~/assets/images/emojis/rocket.png`)"
                  alt=""
                />
              </div>
              <div
                v-animate-onscroll.repeat="'animated fadeInUp'"
                class="description__details-item--text"
              >
                <h5>It's a monthly subscription</h5>
                <p>
                  You pay once and for four weeks, we take care of you, and your
                  meals.
                </p>
              </div>
            </div>
            <div class="description__details-item">
              <div class="description__details-item--icon">
                <img :src="require(`~/assets/images/emojis/wow.png`)" alt="" />
              </div>
              <div
                v-animate-onscroll.repeat="'animated fadeInDown'"
                class="description__details-item--text"
              >
                <h5>It's perfect for your busy lifestyle</h5>
                <p>
                  You pay once and for four weeks, we take care of you, and your
                  meals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <modal
      v-if="showSuccessModal"
      :show-modal="showSuccessModal"
      class="modal"
      @click="showSuccessModal = false"
    >
      <div slot="header"></div>
      <div slot="body" class="modal__body success">
        <div class="company__modal">
          <div class="company__modal-title">
            <button class="btn btn--success" @click="closeModal">
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
              src="@/assets/images/gift-confetti.svg"
              alt=""
              class="confetti"
            />

            <h3>Thank you!</h3>
            <p>
              A customer success representative will reach out to you on the
              next steps to take.
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
import { notUrl } from '~/utils/validators'
import { createGiftSahur, createPersonalSahur } from '~/request/airtable'

export default {
  mixins: [validationMixin],

  validations: {
    customForm: {
      name: { required, notUrl },
      email: { required, email },
      phone_number: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
    },
    bundleForm: {
      giver_name: { required, notUrl },
      giver_email: { required, email },
      giver_phone_number: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
      receiver_name: { required, notUrl },
      receiver_phone_number: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
      anonymous: { required },
      date: { required },
    },
  },
  data() {
    return {
      showSuccessModal: false,
      showFailedModal: false,
      disabledBefore: new Date(),

      loading: false,
      infoList: [
        {
          index: 1,
          title: 'Choose a plan',
          description:
            'Sign up in the form below and our Customer Support Champion will reach out to you. ',
        },
        {
          index: 2,
          title: 'We cook and deliver.',
          description:
            'We cook up your selections and deliver them to you as scheduled. At no extra cost. ',
        },
        {
          index: 3,
          title: 'You heat and eat.',
          description:
            'It’s ready to eat in five minutes. Or you can refrigerate for later! ',
        },
      ],
      planOptions: [
        {
          description: 'I want Iftar and Sahur',
          value: 'personal',
        },
        {
          description: 'I want to gift someone Iftar and Sahur',
          value: 'not-personal',
        },
      ],
      selectedPlan: {
        description: 'I want Iftar and Sahur',
        value: 'personal',
      },
      customForm: {
        name: '',
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
      },
      dateChecked: false,
      ramadanOffer: ['Sahur', 'Iftar'],
    }
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
  mounted() {
    mixpanelTrackEvent('Ramadan Lead page')
    window.setInterval(() => {
      this.changeText()
    }, 2300)
  },
  methods: {
    changeText() {
      const first = this.ramadanOffer.shift()
      this.ramadanOffer = this.ramadanOffer.concat(first)
    },
    disabledRange(date) {
      return date < new Date()
    },
    setValue(option) {
      this.selectedPlan = { ...option }
    },
    setDate() {
      this.dateChecked = true
      this.bundleForm.date = new Date()
        .toLocaleDateString()
        .replaceAll('/', '-')
    },
    scrollTo(id) {
      document.getElementById(id).scrollIntoView()
    },
    async submit(form) {
      switch (form) {
        case 'personal':
          this.submitPersonal()
          break
        case 'gift':
          this.submitGift()
          break
        default:
          break
      }
    },
    async submitPersonal() {
      this.$v.customForm.$touch()
      if (!this.$v.customForm.$error) {
        try {
          this.loading = true
          const metaData = {
            Name: this.customForm.name,
            Email: this.customForm.email,
            Phone: this.customForm.phone_number,
          }
          const leadData = {
            email: this.customForm.email,
            name: this.customForm.name,
            phone: this.customForm.phone_number,
            lead_gen_page: window.location.href,
            referrer: document.referrer,
          }
          this.$intercom('update', {
            email: this.customForm.email,
            name: this.customForm.name,
            phone: this.customForm.phone_number,
            lead_gen_page: window.location.href,
            referrer: document.referrer,
          })
          this.$intercom('trackEvent', 'lead-genaration-signup', leadData)
          createPersonalSahur(metaData).then(
            (res) => {
              this.loading = false
              setTimeout(() => {
                Object.keys(this.customForm).forEach(
                  (key) => (this.customForm[key] = '')
                )
                this.$nextTick(() => {
                  this.$v.customForm.$reset()
                  this.handleSubmitSuccess()
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
    async submitGift() {
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
          }
          const leadData = {
            email: this.bundleForm.giver_email,
            name: this.bundleForm.receiver_name,
            phone: this.bundleForm.receiver_phone_number,
            lead_gen_page: window.location.href,
            referrer: document.referrer,
          }
          this.$intercom('update', {
            email: this.bundleForm.giver_email,
            name: this.bundleForm.receiver_name,
            phone: this.bundleForm.receiver_phone_number,
            lead_gen_page: window.location.href,
            referrer: document.referrer,
          })
          this.$intercom('trackEvent', 'lead-genaration-signup', leadData)
          createGiftSahur(metaData).then(
            (res) => {
              this.loading = false
              setTimeout(() => {
                Object.keys(this.bundleForm).forEach(
                  (key) => (this.bundleForm[key] = '')
                )
                this.$nextTick(() => {
                  this.handleSubmitSuccess()
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
    closeModal() {
      this.showSuccessModal = !this.showSuccessModal
      this.showPayment = false
    },
    handleSubmitSuccess() {
      this.loading = false
      this.selectedPlan = this.planOptions[0]
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      this.showSuccessModal = true
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_ramadan.scss';
</style>
