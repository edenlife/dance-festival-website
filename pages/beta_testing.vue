<template>
  <div>
    <div class="container--hero">
      <header class="hero">
        <div class="hero__title">
          <div class="title__text">
            <span> Eden Life</span>
            <span class="border__green">Beta</span>
          </div>

          <div class="description__text">
            <h1>Become a Beta Tester</h1>

            <p>
              Be an important part of Eden’s development. Your participation and
              feedback will help us release better versions of the app as we
              progress.
            </p>
          </div>
          <div class="cta__buttons">
            <div class="hero__button">
              <button
                type="button"
                class="hero__button-solid"
                @click="scrollTo('signup')"
              >
                Become a Tester
              </button>
            </div>

            <div class="faq__link" @click="scrollTo('faq')">
              <span>Frequently Asked Questions</span>
            </div>
          </div>

          <p>Requires having an iOS or Android device.</p>
        </div>

        <div class="hero__img">
          <img
            src="@/assets/images/beta-header.svg"
            alt="phone"
            class="hero__img-bg1"
          />
        </div>
      </header>
    </div>

    <div class="container--body">
      <div v-animate-onscroll="'animated  fadeInDown'" class="about">
        <img
          src="@/assets/images/message-cloud.svg"
          alt="message"
          class="hero__img-bg1"
        />
        <h3>About The Beta Program</h3>
        <p>
          The Eden Beta program offers you a simple way to try pre-release
          versions of our App, and test drive our new features. The feedback you
          provide will help us identify and fix issues, and make the platform
          even better. Enrolled devices will automatically receive updates for
          the latest beta version of Eden.
        </p>

        <div class="alert">
          <img
            src="@/assets/images/alert.svg"
            alt="alert"
            class="hero__img-bg1"
          />
          <span
            >We ask that you don’t publicize or share the features you’re
            testing until they’re publicly launched.</span
          >
        </div>
      </div>

      <section id="signup" class="signup">
        <div class="form">
          <h4>Become a Tester</h4>
          <p>
            Sign up to be a tester and we’ll contact you with further
            information when we have new features ready to test!
          </p>

          <form>
            <div class="form__input">
              <label for="name">
                First Name <span class="required">*</span>
              </label>
              <input
                id=""
                v-model="testerForm.first_name"
                type="text"
                name=""
                placeholder="Enter your first name"
                :class="{ 'has-error': $v.testerForm.first_name.$error }"
              />
            </div>
            <div class="form__input">
              <label for="last-name">
                Last Name <span class="required">*</span>
              </label>
              <input
                id=""
                v-model="testerForm.last_name"
                type="text"
                name=""
                placeholder="Enter your last name"
                :class="{ 'has-error': $v.testerForm.last_name.$error }"
              />
            </div>
            <div class="form__input">
              <label for="phone number"
                >Phone number <span class="required">*</span></label
              >
              <input
                id=""
                v-model.trim="$v.testerForm.phone_number.$model"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                type="text"
                name=""
                placeholder="Enter your phone number"
                :class="{
                  'has-error': $v.testerForm.phone_number.$error,
                }"
              />
            </div>

            <div class="form__input">
              <label for="device">
                What device will you be using to test?
                <span class="required">*</span>
              </label>

              <div class="form-select">
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      name="apple"
                      :value="'apple'"
                      @input="setItem('apple')"
                    />
                    <label
                      for="apple"
                      :class="{
                        checkmark: testerForm.device === 'apple',
                        'has-error': $v.testerForm.device.$error,
                      }"
                    >
                      iPhone/iPad
                    </label>
                  </li>
                  <li>
                    <input
                      :value="'android'"
                      type="checkbox"
                      name="android"
                      @input="setItem('android')"
                    />
                    <label
                      for="android"
                      :class="{
                        checkmark: testerForm.device === 'android',
                        'has-error': $v.testerForm.device.$error,
                      }"
                    >
                      Android
                    </label>
                  </li>
                  <li>
                    <input
                      v-model="testerForm.publicize"
                      type="checkbox"
                      name="publicize"
                      :value="true"
                    />
                    <label
                      for="publicize"
                      :class="{
                        checkmark: testerForm.publicize === true,
                        'has-error': $v.testerForm.publicize.$error,
                      }"
                    >
                      I won’t publicize or share the features I test until
                      they’re publicly launched.
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            <button
              type="submit"
              class="btn--submit"
              :class="{
                loading: loading,
              }"
              :disabled="loading"
            >
              Become a Tester
            </button>
          </form>
        </div>

        <div class="guide">
          <div class="guide-item apple">
            <h5>iOS Installation</h5>
            <p>
              You can install a beta iOS or iPadOS app via email or public link
              invitation.
            </p>

            <ul>
              <li>
                1. Install
                <a class="text-green"> TestFlight</a>
                on the iOS or iPadOS device that you’ll use for testing.
              </li>
              <li>
                2. Open your email invitation or tap the public link on your
                device.
              </li>
              <li>
                3. When installing via email invitation, tap “View in
                TestFlight” or “Start testing” then tap “Install” or “Update”
                for the app you want to test.
              </li>
              <li>
                4. When installing via public link, tap “Install” or “Update”.
              </li>
            </ul>
          </div>
          <div class="guide-item android">
            <h5>Android Installation</h5>
            <p>
              Android users will get a link to the installation of the latest
              Beta release.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" class="faq">
        <h3>FAQs</h3>
        <div class="faq__questions">
          <div v-for="(item, i) in faQs" :key="i" class="faq__questions-item">
            <div class="faq__questions-title">
              <h5>{{ item.title }}</h5>
              <button
                type="button"
                class="expand"
                @click.prevent="expandQuestion(item.index)"
              >
                <svg
                  v-if="questions.includes(item.index)"
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
              <p
                v-if="questions.includes(item.index)"
                :id="`faq-${item.index}`"
                @click="scrollItems(item.index)"
                v-html="item.description"
              ></p>
            </transition>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import { notUrl } from '~/utils/validators'
export default {
  mixins: [validationMixin],
  validations: {
    testerForm: {
      first_name: { required, notUrl },
      last_name: { required, email },
      phone_number: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },

      device: { required },
      publicize: { required },
    },
  },
  data() {
    return {
      showSuccessModal: false,
      showFailedModal: false,

      loading: false,

      faQs: [
        {
          description:
            'The Eden Life Beta Program is owned, managed, and operated solely by EdenLife Inc. Its purpose is to create a better, more reliable operating system and user experience (UX) for all, based on user feedback.<br/> <br/> As an Eden Life Beta Program participant, you can preview new features and UX for the latest iOS and  Android operating system version, and submit feedback about its performance, stability and usability.',
          title: 'What is the Eden Life Beta Program?',
          index: 'one',
        },
        {
          description:
            'There is no cost to participate in the Eden Life Beta Program. However, you are responsible for expenses related to using a data network connection to download the beta software or upload error logs.',
          title: 'What does it cost to participate in the program?',
          index: 'two',
        },
        {
          description:
            'The Eden Life Beta Program is an opt-in, voluntary program. Your reward for participation is swag items, product materials and an improved Eden App, because of your contribution.',
          title:
            'Is there any compensation for participation in the Eden Life beta program?',
          index: 'three',
        },
        {
          description: `To participate in the EdenLife Beta Program, you must register through the <span style="color:#03A84E">registration link</span>  on this website and we’d send you further information once we qualify you.`,
          title: 'How do I participate in the Eden life Beta Program?',
          index: 'four',
        },
        {
          description:
            "Your feedback is extremely valuable to us. Please share your thoughts through the following channels:<br/> <br/> <span> •  Once you've had a chance to explore the latest Builds via Testflight/Playstore, use the <span style='color:#03A84E'>Feedback button</span> to let us know what you think of the latest updates, report issues, or suggest new features. This feedback goes directly to our Product and Engineering team working to improve Eden. User feedback is submitted through the link here. We’d address all bug issues submitted and send a follow through so you can see as we proceed.</span> <br/> <br/> <span>  •  To provide feedback on bugs, or errors in beta software, you can also go to TestFlight, select 'Beta feedback > Send feedback'.</span> <br/> <br/> <span>  •  Post your comments on the Eden Life Beta Program <span style='color:#03A84E'>community slack</span>. We may not respond to posts individually, but we are actively monitoring the feedback there. We’ll reach out to you directly if we need additional information.</span>",
          title: 'How do I send feedback to Eden?',
          index: 'five',
        },
        {
          description:
            'To ask a question about the Eden Life Beta Program, send an email to silm@edenlife.ng',
          title:
            'I have more questions about the Beta program, where do I ask them?',
          index: 'six',
        },
      ],

      testerForm: {
        first_name: '',
        last_name: '',
        phone_number: '',
        publicize: true,
        device: 'apple',
      },
      questions: ['one'],
    }
  },
  mounted() {
    mixpanelTrackEvent('Beta Tester page')
  },
  methods: {
    setItem(item) {
      this.testerForm.device = item
      console.log(this.testerForm)
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
    scrollTo(id) {
      document.getElementById(id).scrollIntoView()
    },

    scrollItems(index) {
      switch (index) {
        case 'four':
          this.scrollTo('signup')
          break
        // case 'five':
        //   console.log('');
        //   let scrollDiv = this.registerSeparateScrollEvents('faq-five')
        //  scrollDiv.firstElementChild.addEventListener('click', function(e){
        //    this.scrollTo('scrollDiv')
        //  })
        // //  this.scrollTo(scrollDiv)
        // break;
        default:
          break
      }
    },
    registerSeparateScrollEvents(index) {
      const i = document.getElementById(index)
      return i
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_beta.scss';
</style>
