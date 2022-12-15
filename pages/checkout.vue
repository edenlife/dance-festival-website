<template>
  <div class="checkout">
    <div class="is-flex">
      <div class="pointer" @click="handleBack">
        <i class="el-icon-arrow-left" /> Back
      </div>
    </div>
    <el-row class="sections" justify="center" :gutter="70">
      <el-col :md="12" :lg="12" :sm="24" class="sections__item">
        <el-tabs v-model="tab" @tab-click="updateRouteQuery">
          <el-tab-pane
            :disabled="tab === 'payment'"
            label="Your Info"
            name="info"
          >
            <p class="title">Your Information</p>
            <p class="description">
              Please enter your information to create an account in other to
              complete your order.
            </p>
            <info-box>
              <span class="info__text">
                Note that information provided here can be used to login on the
                app for a more robust experience.
              </span>
            </info-box>
            <el-form
              ref="form_profile"
              v-loading="fetching"
              :model="form"
              label-position="top"
            >
              <el-row>
                <el-col :md="24">
                  <el-form-item
                    label="Email address"
                    prop="email"
                    :rules="validateEmail()"
                  >
                    <el-input
                      v-model="form.email"
                      @change="handleEmail"
                      type="text"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :md="12">
                  <el-form-item
                    label="First name"
                    prop="first_name"
                    :rules="validateName()"
                  >
                    <el-input v-model="form.first_name" type="text"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :md="12">
                  <el-form-item
                    label="Last name"
                    prop="last_name"
                    :rules="validateName()"
                  >
                    <el-input v-model="form.last_name" type="text"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :md="24">
                  <el-form-item
                    label="Phone Number"
                    prop="phone_number"
                    :rules="validatePhone()"
                  >
                    <el-input
                      v-model="form.phone_number"
                      type="number"
                      max="11"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row v-if="!hasUser">
                <el-col :md="24">
                  <el-form-item
                    label="Password"
                    prop="password"
                    :rules="validatePassword()"
                  >
                    <el-input v-model="form.password" type="password" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-button
                    :disabled="proceedDisabled"
                    @click="tab = 'payment'"
                    class="w-100"
                    type="primary"
                    >{{
                      !checkingUser ? 'Proceed to payment' : 'Checking...'
                    }}</el-button
                  >
                </el-col>
              </el-row>
            </el-form>
          </el-tab-pane>
          <el-tab-pane
            :disabled="tab === 'info'"
            label="Payment"
            name="payment"
          >
            <transition name="slide-fade">
              <div>
                <div class="checkout-list__form__title">
                  <h5 class="title">Payment</h5>
                  <p class="description">How do you want to pay?</p>
                </div>
                <form action="" class="form">
                  <div class="form__group radios">
                    <div class="form__group-radio" v-if="false">
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
                  </div>
                  <div class="form__alert">
                    <p>
                      Please select your preferred payment gateway. We use third
                      party payment gateways to process payment. These payment
                      providers are licensed by CBN.
                    </p>
                  </div>
                  <el-button
                    class="w-100 mt-2"
                    type="primary"
                    :disabled="gateway === ''"
                    @click.prevent="pay"
                  >
                    Pay
                  </el-button>
                </form>
              </div>
            </transition>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :md="12" :lg="12" :sm="24" class="sections__item">
        <OrderSummary />
      </el-col>
    </el-row>

    <payment-success-modal
      :show.sync="paymentCompleted"
      :order="completedOrder"
      @close="$router.go(-1)"
    />

    <payment-gateway
      :show.sync="openPaymentGateway"
      :amount="totalPrice"
      :customer="form"
      :recipient="recipient"
      :delivery="delivery"
      :gateway="gateway"
      :order="cartItems"
      @success="
        paymentCompleted = true
        completedOrder = $event
      "
    />
  </div>
</template>

<script>
import axios from 'axios'
import OrderSummary from '@/components/dance-festival/OrderSummary.vue'
import PaymentSuccessModal from '@/components/dance-festival/PaymentSuccessModal.vue'
import InfoBox from '@/components/dance-festival/InfoBox.vue'
import validations from '~/mixins/validations'
import PaymentGateway from '@/components/PaymentGateway'

export default {
  components: {
    OrderSummary,
    PaymentSuccessModal,
    InfoBox,
    PaymentGateway,
  },
  mixins: [validations],

  data: () => ({
    tab: 'info',
    form: {
      email: '',
      first_name: '',
      last_name: '',
      phone_number: '',
      password: '',
    },
    gateway: 'paystack',
    openPaymentGateway: false,
    paymentCompleted: false,
    completedOrder: [],
    delivery: {
      to: 'me',
      city: '',
      address: '',
    },
    formValid: false,
    hasUser: false,
    checkingUser: false,
  }),
  computed: {
    proceedDisabled() {
      return this.hasUser
        ? !this.form.first_name ||
            !this.form.last_name ||
            !this.form.email ||
            !this.form.phone_number ||
            this.form.phone_number.length !== 11 ||
            !this.form.email.match(/^[\w-\.+]+@([\w-]+\.)+[\w-]{2,4}$/g)
        : !this.form.password ||
            this.form.password.length < 6 ||
            !this.form.first_name ||
            !this.form.last_name ||
            !this.form.email ||
            !this.form.phone_number ||
            this.form.phone_number.length !== 11 ||
            !this.form.email.match(/^[\w-\.+]+@([\w-]+\.)+[\w-]{2,4}$/g)
    },
    cartItems() {
      return this.$store.state.cart
    },
    totalPrice() {
      return this.cartItems.reduce(
        (acc, val) => acc + val.price * val.quantity,
        0
      )
    },
    recipient() {
      return {
        firstName: this.form.first_name,
        lastName: this.form.last_name,
        email: this.form.email,
        phoneNumber: this.form.phone_number,
      }
    },
    customer() {
      return {
        firstName: this.form.first_name,
        lastName: this.form.last_name,
        email: this.form.email,
        phoneNumber: this.form.phone_number,
      }
    },
  },
  mounted() {
    const currentTab = this.$route.query.tab

    if (currentTab) {
      this.tab = currentTab
    }
  },
  //   watch: {
  //     form: {
  //       handler() {
  //         this.checkForm()
  //       },
  //       deep: true,
  //     },
  //   },
  methods: {
    handleEmail() {
      if (this.form.email.match(/^[\w-\.+]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
        this.checkIfUserExist()
      }
    },
    checkForm() {
      const fields = this.$refs.form_profile.fields
      if (fields.find((f) => f.validateState === 'validating')) {
        setTimeout(() => {
          this.checkForm()
        }, 100)
      } else {
        this.formValid = fields.every((f) => {
          const valid = f.required && f.validateState === 'success'
          const notErroring = !f.required && f.validateState !== 'error'
          console.log(f, valid, notErroring)
          return valid || notErroring
        }, true)
      }
      console.log('valid:', this.formValid)
    },
    async checkIfUserExist() {
      try {
        this.checkingUser = true
        const res = await axios.get(
          `${process.env.DANCE_FESTIVAL_API}/festival/customer/email`,
          {
            params: {
              email: this.form.email,
            },
          }
        )

        if (typeof res.data === 'object') {
          this.hasUser = true
          this.form.first_name = res.data?.first_name
          this.form.last_name = res.data?.last_name
          this.form.email = res.data?.email
        } else {
          this.hasUser = false
        }

        this.checkingUser = false
      } catch (error) {
        console.log(error)
      } finally {
        this.checkingUser = false
      }
    },
    updateRouteQuery(tab) {
      const currentTab = this.$route.query.tab

      if (currentTab === this.tab) {
        return false
      }
      this.$router.replace({
        path: '/checkout',
        query: { tab: tab.name },
      })
    },
    updateRecipientInfo() {
      if (this.delivery.to === 'me') {
        this.recipient = JSON.parse(
          JSON.stringify({
            firstName: this.form.first_name,
            lastName: this.form.last_name,
            email: this.form.email,
            phoneNumber: this.form.phone_number,
          })
        )
      } else {
        this.recipient.firstName = ''
        this.recipient.lastName = ''
        this.recipient.email = ''
        this.recipient.phoneNumber = ''
      }
    },
    pay() {
      this.openPaymentGateway = true
      console.log(this.gateway)
    },
    handleBack() {
      if (this.tab === 'info') {
        this.$router.go(-1)
      } else if (this.tab === 'payment') {
        this.tab = 'info'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';
@import '~/assets/scss/greenhouse/main.scss';
@import '~/assets/scss/pages/_checkout.scss';

.w-100 {
  width: 100%;
}

.is-flex {
  display: flex;
}

.checkout {
  padding: 130px 130px;
  max-width: 100%;
  @include respond(md) {
    padding: 150px 10px 80px 10px;
  }

  .pointer {
    cursor: pointer;
  }

  .sections {
    margin-top: 30px;
    @include respond(md) {
      margin-right: 0px !important;
      margin-left: 0px !important;
      padding-right: 10px;
      padding-left: 10px;
    }

    &__item {
      @include respond(md) {
        padding-right: 0px !important;
        padding-left: 0px !important;
      }
    }
  }

  .title {
    @include font-size(lg);
    color: color(eden-neutral-1);
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .description {
    font-style: italic;
    color: color(eden-neutral-1);
    margin-bottom: 30px;
  }

  .info__text {
    @include font-size(sm);
  }

  .form {
    display: flex;
    flex-direction: column;

    &__group {
      display: flex;
      align-items: center;
      width: 100%;

      &:not(:last-child) {
        margin-bottom: $gap * 3;
      }

      &-input {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;

        label {
          @include font-size(sm);
          line-height: 19px;
          @include font-weight(light);
          color: color(eden-neutral-4);
          margin-bottom: 4px;
        }
        input,
        textarea {
          height: 56px;
          padding: $gap + 4 $gap + 6;
          @include font-family(cerebri);
          border: 1px solid #e4e8e6;
          @include font-size(lg);
          border-radius: 4px;
          background-color: color(eden-neutral-7);
          color: color(eden-neutral-1);

          &::placeholder {
            color: color(eden-neutral-4);
            @include font-weight(light);
          }
          &:focus {
            outline: none;
            border: 1px solid #21312a;
          }
          &.has-error {
            border-color: color(eden-red);
          }
        }
        textarea {
          height: 140px;
        }
        span {
          position: absolute;
          bottom: -20px;
          left: 0;
          color: color(eden-red);
          font-size: 12px;
        }

        &:nth-child(2) {
          margin-left: $gap * 2;
        }
      }

      &-select {
        border: 1px solid #e4e8e6;
        @include font-size(lg);
        width: 100%;
        border-radius: 0 4px 4px 4px;
        @include font-family(cerebri);
        background-color: color(eden-neutral-7);
        color: color(eden-neutral-1);
        height: 56px;
        padding: $gap + 4 $gap + 6;

        &:focus,
        &:active,
        &:hover {
          border: 1px solid #e4e8e6;
        }
        .selector {
          position: relative;
          .arrow {
            position: absolute;
            right: 0;
            top: 30%;
            cursor: pointer;
            transform: rotateZ(0deg) translateY(0px);
            transition-duration: 0.5s;
            transition-timing-function: cubic-bezier(0.59, 1.39, 0.37, 1.01);
          }
          .expanded {
            transform: rotateZ(180deg) translateY(2px);
          }
          .label {
            display: block;
            @include font-size(base);
            .placeholder {
              // color: rgba(147, 162, 155, 0.5);
              color: color(eden-neutral-4);
              @include font-size(lg);
              @include font-weight(light);
            }
          }
        }
        ul {
          width: 100%;
          list-style-type: none;
          @include font-size(base);
          color: color(eden-neutral-2);
          border: 0.5px solid #e4e8e6;
          position: absolute;
          left: -15px;
          top: 48px;
          z-index: 1;
          background: color(eden-neutral-7);
          border-radius: 4px;
          height: 195px;
          overflow: auto;
          box-shadow: 0px 4px 8px rgba(121, 139, 131, 0.161);
        }
        li {
          cursor: pointer;
          padding: $gap + 1 $gap + 2;
          color: color(eden-neutral-2);
          @include font-size(base);
          &:hover {
            background: rgba(228, 232, 230, 0.4);
          }
        }
        .current {
          background: rgba(228, 232, 230, 0.4);
        }
        .hidden {
          visibility: hidden;
        }
        .visible {
          visibility: visible;
        }
      }

      &-radio {
        height: 100%;
        width: 100%;
        position: relative;

        &:not(:last-child) {
          margin-right: 20px;
        }

        label {
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          background: transparent;
          border: 1px solid #e4e8e6;
          border-radius: 4px;
          cursor: pointer;
          line-height: 1;
          transition: all 0.25s ease-out;

          span {
            height: 18px;
            width: 18px;
            border: 1px solid #93a29b;
            border-radius: 100px;
            margin-right: 5px;
            transition: border 0.25s ease-in;
          }

          img {
            height: 24px;
          }
        }

        input {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          opacity: 0;
          padding: 0;
          margin: 0;
          cursor: pointer;

          &:checked + label {
            background: #deffef;
            border-color: #03a84e;
            transition: all 0.25s ease-in;

            span {
              border: 5px solid color(eden-green-primary);
              transition: border 0.25s ease-in;
            }
          }
        }
      }
    }

    &__alert {
      text-align: center;
      margin-top: $gap * 3;
      border-radius: 4px;
      padding: $gap * 2;
      background: rgba(228, 232, 230, 0.3);

      p {
        color: color(eden-neutral-2);
        width: 90%;
        line-height: 1.8;
        margin: auto;
      }
    }

    .btn--submit {
      line-height: 23px;
      @include font-size(lg);
      background-color: color(eden-green-primary);
      color: color(eden-neutral-7);
      border-radius: 4px;
      transition: all 0.4s ease-in-out;
      padding: $gap * 1.6 $gap * 2.9;
      margin-top: $gap * 2.4;
      &:hover {
        box-shadow: 0px 2px 4px rgba(3, 168, 78, 0.239);
        background-color: color(eden-green-250);
        color: color(eden-neutral-7);
      }
      &:active {
        background-image: radial-gradient(
          circle at center right,
          rgba(0, 141, 64, 0.1) 50%,
          #008d40 50%
        );
      }
      &:disabled {
        background: #57645e !important;
        border-color: #57645e;
        opacity: 0.44;
        cursor: not-allowed;
        pointer-events: all !important;
      }
    }
  }
}
</style>
