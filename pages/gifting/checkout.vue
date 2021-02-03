<template>
  <div>
    <div class="container--checkout">
      <section class="checkout">
        <div class="checkout__form">
          <ul>
            <li
              :class="{ active: formStep === 1 }"
              @click.prevent="formStep = 1"
            >
              <span> Your Info </span>
              <svg
                v-if="formStep === 1"
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
              :class="{ active: formStep === 2 }"
              @click.prevent="formStep = 2"
            >
              <span> Recipient Info </span>
              <svg
                v-if="formStep === 2"
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
              :class="{ active: formStep === 3 }"
              @click.prevent="formStep = 3"
            >
              <span> Payment </span>
              <svg
                v-if="formStep === 3"
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
          <transition name="slide-fade">
            <div v-if="formStep === 1">
              <div class="checkout__form__title">
                <h5>Your Information</h5>
                <p>Please enter your information so we can reach out to you</p>
              </div>
              <form action="" class="form">
                <div class="form__group">
                  <div class="form__group-input">
                    <label for="customerFirstName"> First name</label>
                    <input
                      id="customerFirstName"
                      v-model.trim="$v.customer.firstName.$model"
                      type="text"
                      name=""
                      placeholder="Enter first name"
                      :class="{ 'has-error': $v.customer.firstName.$error }"
                    />
                    <span v-if="$v.customer.firstName.$error"
                      >First name is required</span
                    >
                  </div>
                  <div class="form__group-input">
                    <label for="customerLastName"> Last name</label>
                    <input
                      id="customerLastName"
                      v-model.trim="$v.customer.lastName.$model"
                      type="text"
                      name=""
                      placeholder="Enter last name"
                      :class="{ 'has-error': $v.customer.lastName.$error }"
                    />
                    <span v-if="$v.customer.lastName.$error"
                      >Last name is required</span
                    >
                  </div>
                </div>
                <div class="form__group">
                  <div class="form__group-input">
                    <label for="customerEmail">Email address</label>
                    <input
                      id="customerEmail"
                      v-model.trim="$v.customer.email.$model"
                      type="email"
                      name=""
                      placeholder="Enter email address"
                      :class="{ 'has-error': $v.customer.email.$error }"
                    />
                    <span v-if="$v.customer.email.$error"
                      >Email is not valid</span
                    >
                  </div>
                </div>
                <div class="form__group">
                  <div class="form__group-input">
                    <label for="customerPhoneNumber">Phone number</label>
                    <input
                      id="customerPhoneNumber"
                      v-model.trim="$v.customer.phoneNumber.$model"
                      type="text"
                      name=""
                      placeholder="Enter phone number"
                      :class="{ 'has-error': $v.customer.phoneNumber.$error }"
                    />
                    <span v-if="$v.customer.phoneNumber.$error"
                      >Phone number is required</span
                    >
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn--submit"
                  :disabled="validateCustomerInfo"
                  @click.prevent="formStep = 2"
                >
                  Proceed to Recipient Information
                </button>
              </form>
            </div>
          </transition>
          <transition name="slide-fade">
            <div v-if="formStep === 2">
              <div>
                <div class="checkout__form__title">
                  <h5>Recipient Information</h5>
                  <p>Information on who would be receiving this item</p>
                </div>
                <form action="" class="form">
                  <div class="form__group">
                    <div class="form__group-radio">
                      <input
                        id="deliverToMe"
                        v-model="delivery.to"
                        type="radio"
                        name="recipient"
                        value="me"
                        @change="updateRecipientInfo"
                      />
                      <label for="deliverToMe">
                        <span></span>
                        Me
                      </label>
                    </div>
                    <div class="form__group-radio">
                      <input
                        id="deliverToSomeone"
                        v-model="delivery.to"
                        type="radio"
                        name="recipient"
                        value="someone-else"
                        @change="updateRecipientInfo"
                      />
                      <label for="deliverToSomeone">
                        <span></span>
                        Someone Else
                      </label>
                    </div>
                  </div>
                  <transition name="slide-fade">
                    <div v-if="delivery.to === 'someone-else'">
                      <div class="form__group">
                        <div class="form__group-input">
                          <label for="recipientFirstName"> First name</label>
                          <input
                            id="recipientFirstName"
                            v-model.trim="$v.recipient.firstName.$model"
                            type="text"
                            name=""
                            placeholder="Enter first name"
                            :class="{
                              'has-error': $v.recipient.firstName.$error,
                            }"
                          />
                          <span v-if="$v.recipient.firstName.$error"
                            >First name is required</span
                          >
                        </div>
                        <div class="form__group-input">
                          <label for="recipientLastName"> Last name</label>
                          <input
                            id="recipientLastName"
                            v-model.trim="$v.recipient.lastName.$model"
                            type="text"
                            name=""
                            placeholder="Enter last name"
                            :class="{
                              'has-error': $v.recipient.lastName.$error,
                            }"
                          />
                          <span v-if="$v.recipient.lastName.$error"
                            >Last name is required</span
                          >
                        </div>
                      </div>
                      <div class="form__group">
                        <div class="form__group-input">
                          <label for="recipientEmail">Email address</label>
                          <input
                            id="recipientEmail"
                            v-model.trim="$v.recipient.email.$model"
                            type="email"
                            name=""
                            placeholder="Enter email address"
                            :class="{ 'has-error': $v.recipient.email.$error }"
                          />
                          <span v-if="$v.recipient.email.$error"
                            >Email is not valid</span
                          >
                        </div>
                      </div>
                      <div class="form__group">
                        <div class="form__group-input">
                          <label for="recipientPhoneNumber">Phone number</label>
                          <input
                            id="recipientPhoneNumber"
                            v-model.trim="$v.recipient.phoneNumber.$model"
                            type="text"
                            placeholder="Enter phone number"
                            :class="{
                              'has-error': $v.recipient.phoneNumber.$error,
                            }"
                          />
                          <span v-if="$v.recipient.phoneNumber.$error"
                            >Phone number is required</span
                          >
                        </div>
                      </div>
                    </div>
                  </transition>
                  <div class="form__alert">
                    <p v-if="delivery.to === 'me'">
                      Since you’re receiving this delivery by yourself, we will
                      deliver it to you 2 - 3 days before Valentine’s day.
                    </p>
                    <p v-else>
                      Since we are delivering straight to the recipient, we will
                      deliver on Valentine’s day. Sit back and relax.
                    </p>
                  </div>
                </form>
              </div>
              <div>
                <div class="checkout__form__title">
                  <h5>Delivery Address</h5>
                  <p>Address and location of recipient</p>
                </div>
                <form action="" class="form">
                  <div class="form__group">
                    <div class="form__group-input">
                      <label for="address">Address</label>
                      <textarea
                        id="address"
                        v-model.trim="$v.delivery.address.$model"
                        rows="10"
                        placeholder="Enter recipient's address"
                        :class="{
                          'has-error': $v.delivery.address.$error,
                        }"
                      ></textarea>
                      <span v-if="$v.delivery.address.$error"
                        >Address is required</span
                      >
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="btn--submit"
                    :disabled="validateRecipientInfo && validateDeliveryInfo"
                    @click.prevent="formStep = 3"
                  >
                    Proceed to Payment
                  </button>
                </form>
              </div>
            </div>
          </transition>
          <transition name="slide-fade">
            <div v-if="formStep === 3">
              <div>
                <div class="checkout__form__title">
                  <h5>Payment Information</h5>
                  <p>How do you want to pay?</p>
                </div>
                <form action="" class="form">
                  <div class="form__group">
                    <div class="form__group-radio">
                      <input
                        id="paystack"
                        v-model="gateway"
                        type="radio"
                        name="paystack"
                        value="paystack"
                      />
                      <label for="paystack">
                        <img
                          src="https://res.cloudinary.com/eden-life-inc/image/upload/v1612345868/eden-website-v2/paystack_mexf4h.svg"
                          alt="Paystack"
                        />
                      </label>
                    </div>
                    <div class="form__group-radio">
                      <input
                        id="flutterwave"
                        v-model="gateway"
                        type="radio"
                        name="flutterwave"
                        value="flutterwave"
                      />
                      <label for="flutterwave">
                        <img
                          src="https://res.cloudinary.com/eden-life-inc/image/upload/v1612345867/eden-website-v2/flutterwave_yy3jfc.svg"
                          alt="Flutterwave"
                        />
                      </label>
                    </div>
                  </div>
                  <div class="form__alert">
                    <p>
                      Please select your preferred payment gateway. We use third
                      party payment gateways to process payment. These payment
                      providers are licensed by CBN.
                    </p>
                  </div>
                  <button
                    type="submit"
                    class="btn--submit"
                    :disabled="gateway === ''"
                  >
                    Proceed to Payment
                  </button>
                </form>
              </div>
            </div>
          </transition>
        </div>
        <div class="checkout__summary">
          <div class="checkout__summary-title">
            <h5>Order Summary</h5>
          </div>
          <div class="checkout__summary-items">
            <div v-for="(item, index) in cart" :key="index" class="item">
              <div>
                <img :src="item.image" alt="" />
                <div>
                  <p>{{ item.name }} ({{ item.type }})</p>
                  <span>Quantity: {{ item.quantity }}</span>
                </div>
              </div>
              <p>NGN {{ currencyFormat(item.amount * item.quantity) }}</p>
            </div>
          </div>
          <div class="checkout__summary-footer">
            <p>Subtotal</p>
            <p>NGN {{ currencyFormat(subTotal) }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import { mixpanelTrackEvent } from '@/plugins/mixpanel'
import { currencyFormat } from '~/static/functions'

export default {
  mixins: [validationMixin],
  validations: {
    customer: {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      phoneNumber: { required },
    },
    delivery: {
      city: { required },
      address: { required },
    },
    recipient: {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      phoneNumber: { required },
    },
  },
  beforeRouteEnter(to, from, next) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    if (cart.length) {
      next()
    } else {
      next('gifting')
    }
  },
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
      formStep: 1,
      customer: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
      },
      delivery: {
        to: 'someone-else',
        city: '',
        address: '',
      },
      recipient: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
      },
      gateway: '',
    }
  },
  computed: {
    validateCustomerInfo() {
      return !!this.$v.customer.$invalid
    },
    validateRecipientInfo() {
      return !!this.$v.recipient.$invalid
    },
    validateDeliveryInfo() {
      return !!this.$v.delivery.$invalid
    },
    cart() {
      return this.$store.getters.cart
    },
    subTotal() {
      return this.cart.reduce((total, item) => {
        return total + item.amount * item.quantity
      }, 0)
    },
  },
  mounted() {
    mixpanelTrackEvent('Checkout page')
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    currencyFormat,
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
      this.setExploreService = this.window.width < '768'
    },
    updateRecipientInfo() {
      if (this.delivery.to === 'me') {
        this.recipient = JSON.parse(JSON.stringify(this.customer))
      } else {
        this.recipient.firstName = ''
        this.recipient.lastName = ''
        this.recipient.email = ''
        this.recipient.phoneNumber = ''
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_checkout.scss';
</style>
