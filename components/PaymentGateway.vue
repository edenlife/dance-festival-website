<template>
  <Paystack
    v-if="gateway === 'paystack'"
    ref="paystack"
    :amount="amountInKobo"
    :email="customer.email"
    :firstname="customer.firstName"
    :lastname="customer.lastName"
    :metadata="paystackMeta"
    :paystackkey="paystackKey"
    :reference="reference"
    :callback="callback"
    :close="close"
    :embed="false"
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
  },
  data() {
    return {
      reference: '',
      paystackKey: process.env.NUXT_ENV_PAYSTACK_KEY_TEST,
      raveKey: process.env.NUXT_ENV_RAVE_KEY_TEST,
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
        custom_fields: [
          {
            display_name: '',
            service: '',
          },
        ],
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
          ? this.$refs.paystack.$el.click()
          : this.$refs.rave.$el.click()
      }
    },
  },
  created() {
    this.generateReference()
  },
  methods: {
    generateReference() {
      const date = new Date()
      const fullDate = `${date.getDate()}${
        date.getMonth() + 1
      }${date.getHours()}${date.getMinutes()}`
      this.reference = `EDEN-GIFTING-PAYMENT-${fullDate}`
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
    async saveInformation() {
      const payload = {
        customer: this.customer,
        recipient: this.recipient,
        delivery: this.delivery,
        items: JSON.stringify(this.$store.getters.cart),
        total_amount: this.amount,
      }

      const dataResponse = await fetch(
        'https://api-staging.edenlife.ng/api/v3/website/giftingpage',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      )
      if (dataResponse.status === 200) {
        this.$emit('success')
        this.$store.commit('clearCart')
        this.shouldShow = false
      }
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
