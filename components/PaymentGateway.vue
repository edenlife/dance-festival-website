<template>
  <Paystack
    v-if="gateway === 'paystack'"
    ref="paystack"
    :amount="amountInKobo"
    :email="customer.email"
    :firstname="customer.first_name"
    :lastname="customer.last_name"
    :metadata="paystackMeta"
    :paystackkey="paystackKey"
    :reference="reference"
    :callback="callback"
    :close="close"
    :embed="false"
    :channels="['card', 'bank', 'bank_transfer']"
  />
  <flutterwave-pay-button
    v-else-if="gateway === 'flutterwave'"
    ref="rave"
    :amount="amount"
    :customer="{
      email: customer.email,
      name: `${customer.firstName} ${customer.lastName}`,
    }"
    :meta="raveMeta"
    :public-key="raveKey"
    :tx_ref="reference"
    :callback="callback"
    :onclose="close"
  />
</template>

<script type="text/javascript">
import Paystack from 'vue-paystack'

export default {
  name: 'PaymentGateway',
  components: {
    Paystack,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    amount: {
      type: Number,
      required: true,
    },
    customer: {
      type: Object,
      required: true,
    },
    recipient: {
      type: Object,
      required: true,
    },
    delivery: {
      type: Object,
      required: true,
    },
    gateway: {
      type: String,
      required: true,
    },
    order: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      reference: '',
      paystackKey: process.env.PAYSTACK_KEY_TEST,
      raveKey: process.env.RAVE_KEY_TEST,
    }
  },
  computed: {
    shouldShow: {
      get() {
        return this.show
      },
      set(value) {
        this.$emit('update:show', value)
      },
    },
    amountInKobo() {
      return this.amount * 100
    },
    paystackMeta() {
      return {
        user_name: this.customer.first_name + ' ' + this.customer.last_name,
        user_email: this.customer.email,
        password: this.customer.password,
        service: 'electronic-festival',
        custom_fields: [
          {
            host_url: process.env.DANCE_FESTIVAL_SHORT_API,
          },
        ],
        order_items: this.order.map((item) => {
          return {
            id: item.id,
            price: item.price,
            quantity: item.quantity,
          }
        }),
      }
    },
    raveMeta() {
      return {
        service: '',
        payment_type: '',
      }
    },
  },
  watch: {
    show() {
      if (this.show) {
        this.gateway === 'paystack'
          ? this.$refs.paystack.$el?.click()
          : this.$refs.rave.$el?.click()
      }
    },
  },
  created() {
    this.generateReference()
    console.log(this.order)
  },
  methods: {
    generateReference() {
      const date = new Date()
      const fullDate = `${date.getDate()}${
        date.getMonth() + 1
      }${date.getHours()}${date.getMinutes()}`
      this.reference = `EDEN-DANCE-FESTIVAL-PAYMENT-${fullDate}-${Math.floor(
        100000 + Math.random() * 900000
      )}`
    },
    callback(response) {
      if (response.status.includes('success')) {
        this.$emit('success')
        this.saveInformation()
      }
    },
    close() {
      this.shouldShow = false
    },
    saveInformation() {
      try {
        // const payload = {
        //   customer: this.customer,
        //   recipient: this.recipient,
        //   delivery: this.delivery,
        //   items: JSON.stringify(this.$store.getters.cart),
        //   total_amount: this.amount,
        // }
        // await giftingApi(payload)
        this.$emit('success', this.order)
        this.$store.commit('clearCart')
        this.shouldShow = false
      } catch (error) {}
    },
  },
}
</script>
<style scoped>
.payButton,
button {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
</style>
