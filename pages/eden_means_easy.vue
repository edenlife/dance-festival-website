<template>
  <div class="container--hero">
    <header class="hero">
      <div class="hero__title">
        <h1>
          <span>10 Reasons</span>
          <br />
          Why Eden Means Easy
        </h1>

        <p>
          We'll pick up and deliver your laundry 🎽. We'll have professional
          cleaners take care of your house 🏠. We'll cook and deliver quality
          meals to you 🥘. On Schedule.
        </p>

        <div>
          <button class="hero__button">
            <span class="share__icon">
              <img
                src="@/assets/images/share.svg"
                alt="share"
                class="share__icon__img"
              />
            </span>
            <span> Share page </span>
          </button>
        </div>
      </div>
    </header>

    <div class="values">
      <div class="value__grid">
        <value-card :content="valueReasons[0]" @show="setTestimonial(0)" />
      </div>
      <div class="value__grid">
        <value-card :content="valueReasons[1]" @show="setTestimonial(1)" />
        <value-card :content="valueReasons[2]" @show="setTestimonial(2)" />
      </div>
      <div class="value__grid">
        <value-card :content="valueReasons[3]" @show="setTestimonial(3)" />
        <value-card :content="valueReasons[4]" @show="setTestimonial(4)" />
      </div>
      <div class="value__grid">
        <value-card :content="valueReasons[5]" @show="setTestimonial(5)" />
      </div>
      <div class="value__grid">
        <value-card :content="valueReasons[6]" @show="setTestimonial(6)" />
        <value-card :content="valueReasons[7]" @show="setTestimonial(7)" />
      </div>
      <div class="value__grid">
        <value-card :content="valueReasons[8]" @show="setTestimonial(8)" />
        <value-card :content="valueReasons[9]" @show="setTestimonial(9)" />
      </div>
    </div>

    <div class="hero">
      <div class="hero__title">
        <h1>
          The best time to start your Eden life was yesterday, the second best
          time is <span>now</span>.
        </h1>

        <p>There's an Eden plan for you</p>

        <div>
          <button
            class="hero__button-solid"
            @click.prevent="scrollToFooter('#get-the-app', 'Eden means easy')"
          >
            <span>Start Your Eden Life </span>
          </button>
        </div>
      </div>
    </div>
    <modal
      v-if="showLeadModal"
      :show-modal="showLeadModal"
      class="modal modal-lead"
    >
      <div slot="header"></div>
      <div slot="body" class="modal__body">
        <div class="lead__modal">
          <div class="lead__modal-title">
            <h3 class="">{{ activeReason.text }}</h3>
            <button class="btn" @click="closeLeadModal()">
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

          <div class="lead__modal__testimony">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              fill="#03A84E"
              class="bi bi-chat-left-quote"
              viewBox="0 0 16 16"
            >
              <path
                d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"
              />
            </svg>
            <div class="testimonial__card">
              <a :href="activeReason.testimonial.tweetLink" target="_blank">
                <div class="testimonial__card__title">
                  <div class="testimonial__card__title-img">
                    <img
                      :src="
                        require(`~/assets/images/${activeReason.testimonial.image}.jpg`)
                      "
                      :alt="activeReason.testimonial.name"
                    />
                  </div>
                  <div class="">
                    <p class="testimonial__card__title-name">
                      {{ activeReason.testimonial.name }}
                    </p>
                    <p class="testimonial__card__title-handle">
                      @{{ activeReason.testimonial.handle }}
                    </p>
                  </div>
                </div>

                <p
                  class="testimonial__card__description"
                  v-html="activeReason.testimonial.description"
                ></p>
              </a>
            </div>
          </div>

          <div
            v-if="
              activeReason.showForm && activeReason.form_type === 'individual'
            "
            class="testimonial__form"
          >
            <div class="testimonial__form-body">
              <div class="testimonial__form-input">
                <label for="name">Full Name</label>
                <input
                  id=""
                  v-model="leadForm.name"
                  type="text"
                  name=""
                  placeholder="Full Name"
                  :class="{ 'has-error': $v.leadForm.name.$error }"
                />
              </div>
              <div class="testimonial__form-input">
                <label for="email">Email</label>
                <input
                  id=""
                  v-model="leadForm.email"
                  type="email"
                  name=""
                  placeholder="email@example.com"
                  :class="{ 'has-error': $v.leadForm.email.$error }"
                />
              </div>
              <div class="testimonial__form-input">
                <label for="phone number">Phone Number</label>
                <input
                  id=""
                  v-model.trim="$v.leadForm.phone_number.$model"
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                  type="text"
                  name=""
                  placeholder="Enter phone number"
                  :class="{ 'has-error': $v.leadForm.phone_number.$error }"
                />
              </div>
              <!-- <p v-if="responseMessage.length" class="error-message">
                {{ responseMessage }}
              </p> -->

              <button class="testimonial__form-btn">
                {{ activeReason.cta }}
              </button>
            </div>
          </div>
          <div
            v-if="activeReason.showForm && activeReason.form_type === 'company'"
            class="testimonial__form"
          >
            <div class="testimonial__form-body">
              <div class="testimonial__form-input">
                <label for="name">Full Name</label>
                <input
                  id=""
                  v-model="leadCompanyForm.name"
                  type="text"
                  name=""
                  placeholder="Company Name"
                  :class="{ 'has-error': $v.leadCompanyForm.company_name.$error }"
                />
              </div>
              <div class="testimonial__form-input">
                <label for="email">Email</label>
                <input
                  id=""
                  v-model="leadForm.email"
                  type="email"
                  name=""
                  placeholder="email@example.com"
                  :class="{ 'has-error': $v.leadForm.email.$error }"
                />
              </div>
              <div class="testimonial__form-input">
                <label for="phone number">Phone Number</label>
                <input
                  id=""
                  v-model.trim="$v.leadForm.phone_number.$model"
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                  type="text"
                  name=""
                  placeholder="Enter phone number"
                  :class="{ 'has-error': $v.leadForm.phone_number.$error }"
                />
              </div>
              <!-- <p v-if="responseMessage.length" class="error-message">
                {{ responseMessage }}
              </p> -->

              <button class="testimonial__form-btn">
                {{ activeReason.cta }}
              </button>
            </div>
          </div>
          <div v-if="!activeReason.showForm" class="download__app">
            <div class="download__app-title">
              <h3>Download the app!</h3>
              <p>It takes less than 5 minutes to sign up!</p>
            </div>
            <div class="download__app-link">
              <a
                href="https://play.google.com/store/apps/details?id=com.ouredenlife.app"
                target="_blank"
                @click.prevent="openPlayStore"
              >
                <img
                  src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611338471/eden-website-v2/playstore_n43eju.svg"
                  alt="playstore"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/eden-life/id1482373755?ls=1"
                target="_blank"
                @click.prevent="openAppleStore"
              >
                <img
                  src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611338469/eden-website-v2/appstore_o1bj6d.svg"
                  alt="appstore"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import getSiteMeta from '~/utils/getSiteMeta'
import { scrollToApp } from '~/static/functions'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import values from '~/static/values'
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
  components: {
    ValueCard: () => import('@/components/ValueCard.vue'),
    Modal: () => import('@/components/Modal.vue'),
  },
  mixins: [validationMixin],
  validations: {
    leadForm: {
      email: { required, email },
      name: { required },
      phone_number: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
    },
    leadCompanyForm: {
      company_name: { required },
      company_person: { required },
      company_email: { required, email },
     company_phonw: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
    },
  },
  data() {
    return {
      valueReasons: values,
      showLeadModal: false,
      activeReason: {
        text: '',
        testimonial: {},
        showForm: false,
        cta: '',
        form_type: '',
      },
      leadForm: {
        email: '',
        name: { required },
        name: '',
        phone_number: '',
      },
      leadCompanyForm: {
        company_name: '',
        company_person: '',
        company_email: '',
        company_phone: '',
        services: [],
        extra_message: '',
      },
    }
  },
  head() {
    return {
      title: 'Eden | Eden Means Easy',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://ouredenlifev2-staging.netlify.app/eden_means_easy`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        title: 'Eden | Eden Means Easy',
        description: '10 Reasons Why Eden Means Easy. ',
        url: `https://ouredenlifev2-staging.netlify.app/eden_means_easy`,
      }
      return getSiteMeta(metaData)
    },
  },
  methods: {
    scrollToFooter(id, label) {
      scrollToApp(id, label)
    },
    setTestimonial(index) {
      console.log('a')
      const {
        modal_text,
        modal_testimonial,
        modal_form,
        cta,
        form_type,
      } = this.valueReasons[index]

      this.activeReason = {
        text: modal_text,
        testimonial: modal_testimonial,
        showForm: modal_form,
        cta: cta,
        form_type: form_type,
      }

      this.showLeadModal = true
    },
    closeLeadModal() {
      this.showLeadModal = false
      this.activeReason = {
        text: '',
        testimonial: {},
        showForm: false,
        cta: '',
        form_type: '',
      }
    },
    openPlayStore() {
      window.open(
        ` https://play.google.com/store/apps/details?id=com.ouredenlife.app`,
        '_blank'
      )
      mixpanelTrackEvent('Get the app(playstore) clicked')
    },
    openAppleStore() {
      window.open(
        `https://apps.apple.com/us/app/eden-life/id1482373755?ls=1`,
        '_blank'
      )
      mixpanelTrackEvent('Get the app(applestore) clicked')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_eden_easy.scss';
</style>
