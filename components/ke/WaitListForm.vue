<template>
  <modal v-if="showWaitListForm" :show-modal="showWaitListForm" class="modal">
    <div slot="header"></div>
    <div slot="body" class="modal__body">
      <div class="company__modal">
        <div class="company__modal-title">
          <h3 class="">Get Early Access to Eden</h3>
          <button class="btn" @click="$emit('hideform')">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 2L2 14"
                stroke="#798B83"
                stroke-width="2.25"
                stroke-linecap="round"
              />
              <path
                d="M2 2L14 14"
                stroke="#798B83"
                stroke-width="2.25"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
        <p class="company__modal-title-sub">
          Enter your details and you’ll be one of the first to know when we’re
          ready to launch!
        </p>
        <form action="" class="form">
          <div class="form__input">
            <label for="full name"> Full Name</label>
            <input
              id=""
              v-model="waitListForm.full_name"
              type="text"
              name=""
              placeholder="First & Last Name"
              :class="{ 'has-error': $v.waitListForm.full_name.$error }"
            />
          </div>

          <div class="form__input">
            <label for="email">Email</label>
            <input
              id=""
              v-model="waitListForm.email"
              type="email"
              name=""
              placeholder="email@example.com"
              :class="{ 'has-error': $v.waitListForm.email.$error }"
            />
          </div>
          <div class="form__input country">
            <label for="phone number">Phone number</label>

            <div class="country__input">
              <div class="country__input-code">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 14.6206H24V19.4482C24 19.6767 23.8147 19.862 23.5861 19.862H0.413812C0.185297 19.862 0 19.6767 0 19.4482V14.6206Z"
                    fill="#496E2D"
                  />
                  <path
                    d="M0.413812 4.13794H23.5862C23.8147 4.13794 24 4.32324 24 4.55175V9.3793H0V4.5517C0 4.32319 0.185297 4.13794 0.413812 4.13794Z"
                    fill="black"
                  />
                  <path d="M24 9.37927H0V14.6204H24V9.37927Z" fill="#A2001D" />
                  <path d="M24 9.10364H0V9.93121H24V9.10364Z" fill="#F5F5F5" />
                  <path d="M24 14.0691H0V14.8967H24V14.0691Z" fill="#F5F5F5" />
                  <path
                    d="M14.2157 8.51333C14.5488 7.82628 14.8965 6.23474 14.8965 6.23474C14.8965 6.23474 13.8619 7.4931 13.5286 8.1801C13.4588 8.3241 13.4884 8.48971 13.5893 8.60174L9.79395 16.4268L10.0516 16.5517L13.8469 8.7267C13.9974 8.7366 14.1459 8.65733 14.2157 8.51333Z"
                    fill="#F5F5F5"
                  />
                  <path
                    d="M9.78437 8.51333C9.45119 7.82628 9.10352 6.23474 9.10352 6.23474C9.10352 6.23474 10.1381 7.4931 10.4714 8.1801C10.5413 8.3241 10.5116 8.48971 10.4108 8.60174L14.2061 16.4268L13.9485 16.5517L10.1531 8.7267C10.0026 8.7366 9.85417 8.65733 9.78437 8.51333Z"
                    fill="#F5F5F5"
                  />
                  <path
                    d="M14.0691 12C14.0691 14.2853 12.381 16.1379 12.0001 16.1379C11.6192 16.1379 9.93115 14.2853 9.93115 12C9.93115 9.71465 11.6192 7.86206 12.0001 7.86206C12.381 7.86206 14.0691 9.71465 14.0691 12Z"
                    fill="#A2001D"
                  />
                  <path
                    d="M13.655 13.9963C13.8987 13.4042 14.0688 12.7241 14.0688 11.9999C14.0688 11.2756 13.8988 10.5955 13.655 10.0034C13.4113 10.5955 13.2412 11.2756 13.2412 11.9999C13.2412 12.7241 13.4113 13.4042 13.655 13.9963Z"
                    fill="black"
                  />
                  <path
                    d="M10.345 10.0034C10.1013 10.5955 9.93115 11.2756 9.93115 11.9999C9.93115 12.7241 10.1012 13.4042 10.345 13.9963C10.5887 13.4042 10.7588 12.7241 10.7588 11.9999C10.7588 11.2756 10.5887 10.5955 10.345 10.0034Z"
                    fill="black"
                  />
                  <path
                    d="M12.0002 12.6206C12.2288 12.6206 12.414 12.3427 12.414 11.9999C12.414 11.6572 12.2288 11.3793 12.0002 11.3793C11.7717 11.3793 11.5864 11.6572 11.5864 11.9999C11.5864 12.3427 11.7717 12.6206 12.0002 12.6206Z"
                    fill="#F5F5F5"
                  />
                  <path
                    d="M12.062 7.86206V11.3793C12.1748 11.1444 12.375 10.4504 12.375 9.62067C12.375 8.79084 12.1748 8.0969 12.062 7.86206Z"
                    fill="#F5F5F5"
                  />
                  <path
                    d="M11.9379 7.86206C11.8251 8.0969 11.625 8.79084 11.625 9.62067C11.625 10.4505 11.8251 11.1445 11.9379 11.3793V7.86206Z"
                    fill="#F5F5F5"
                  />
                  <path
                    d="M12.062 12.6206V16.1378C12.1748 15.903 12.375 15.209 12.375 14.3792C12.375 13.5494 12.1748 12.8554 12.062 12.6206Z"
                    fill="#F5F5F5"
                  />
                  <path
                    d="M11.9379 12.6206C11.8251 12.8554 11.625 13.5494 11.625 14.3792C11.625 15.209 11.8251 15.903 11.9379 16.1378V12.6206Z"
                    fill="#F5F5F5"
                  />
                </svg>
              </div>
              <input
                id=""
                v-model.trim="$v.waitListForm.phone_number.$model"
                class="country__input-number"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                type="text"
                name=""
                placeholder="0712 345 678"
                :class="{ 'has-error': $v.waitListForm.phone_number.$error }"
              />
            </div>
          </div>
          <div class="form__input">
            <label for="address">Full Address</label>
            <input
              id=""
              v-model="waitListForm.address"
              type="text"
              name=""
              placeholder=""
              :class="{ 'has-error': $v.waitListForm.address.$error }"
            />
          </div>
          <div class="form__input">
            <label for="services">Service(s) interested in</label>
            <div class="select">
              <div v-click-outside="hide" class="selector">
                <div class="label" @click="toggle()">
                  <span
                    v-if="waitListForm.service && !waitListForm.service.length"
                    class="placeholder"
                  >
                    Select service(s)
                  </span>
                  <span
                    v-for="(item, i) in waitListForm.service"
                    :key="i"
                    class="label--text"
                    >{{ item }}</span
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
                          v-for="(service, index) in serviceList"
                          :key="index"
                          :value="service"
                        >
                          <input
                            :id="service"
                            v-model="waitListForm.service"
                            type="checkbox"
                            :name="service"
                            :value="service"
                          />
                          <label
                            :for="service"
                            :class="{
                              checkmark: waitListForm.service.includes(service),
                            }"
                          >
                            {{ service }}</label
                          >
                        </li>
                      </ul>
                      <button
                        class="btn--submit"
                        :disabled="loading"
                        @click.prevent="toggle()"
                      >
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
            @click.prevent="submitUserInfoIntercom()"
          >
            Download App
          </button>
        </form>
      </div>
    </div>
    <div slot="footer"></div>
  </modal>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import ClickOutside from 'vue-click-outside'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import { createLead } from '~/request/ke/airtable'

export default {
  name: 'WaitListForm',
  props: {
    showWaitListForm: {
      type: Boolean,
      default: false,
    },
    showSuccessModal: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Modal: () => import('@/components/Modal.vue'),
  },
  directives: {
    ClickOutside,
  },
  mixins: [validationMixin],
  validations: {
    waitListForm: {
      address: { required },
      email: { required, email },
      full_name: { required },
      service: { required },
      phone_number: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(10),
      },
    },
  },

  data() {
    return {
      modalText: 'information',
      serviceList: ['Food', 'Cleaning', 'Laundry', 'Beauty'],
      services: [
        { title: 'housecleaning', value: 'cleaning' },
        { title: 'laundry day', value: 'laundry' },
        { title: 'long cooking hours', value: 'food' },
      ],
      questions: ['one'],
      exploreService: '',
      setExploreService: false,
      loading: false,

      waitListForm: {
        full_name: '',
        address: '',
        service: [],
        email: '',
        phone_number: '',
      },
      visible: false,
    }
  },

  methods: {
    hide() {
      this.visible = false
    },
    toggle() {
      this.visible = !this.visible
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
    submitUserInfoIntercom() {
      mixpanelTrackEvent('Get early access button clicked', 'Lead page nairobi')

      this.$v.waitListForm.$touch()
      if (!this.$v.waitListForm.$error) {
        this.loading = true

        const metadata = {
          Name: this.waitListForm.full_name,
          Email: this.waitListForm.email,
          Address: this.waitListForm.address,
          'Phone number': this.waitListForm.phone_number,
          Service: this.waitListForm.service,
        }

        createLead(metadata)

        setTimeout(() => {
          Object.keys(this.waitListForm).forEach(
            (key) => (this.waitListForm[key] = '')
          )
          this.$nextTick(() => {
            this.$v.waitListForm.$reset()
            this.waitListForm.service = []
            this.loading = false
            this.$emit('hideform')
            this.$emit('showsuccess')
          })
        }, 500)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/ke/_waitlist.scss';
</style>
