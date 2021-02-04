<template>
  <div :class="['gift-package', { reverse: orientation === 'reverse' }]">
    <div class="gift-package__box" :style="style">
      <div class="gift-package__box-content">
        <h4>In the box</h4>
        <ul>
          <li v-for="(item, index) in giftType.content" :key="index">
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="gift-package__description">
      <h3>{{ giftType.name }}</h3>
      <p v-html="giftType.description"></p>
      <div class="quantity">
        <h4>
          NGN
          {{ currencyFormat(giftType.amount) }}
        </h4>
        <div class="btn--group">
          <button class="btn--item minus" @click.prevent="decrease">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19"
                stroke="#21312A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <input
            id=""
            v-model="quantity"
            type="number"
            name=""
            placeholder="0"
            readonly
          />
          <button class="btn--item plus" @click.prevent="increase">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19"
                stroke="#21312A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 12H19"
                stroke="#21312A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <button
        type="button"
        class="btn"
        :disabled="itemInCart"
        @click="addToCart"
      >
        {{ itemInCart ? 'Added' : 'Add' }} to Cart
      </button>
    </div>
  </div>
</template>

<script>
import { mixpanelTrackEvent } from '@/plugins/mixpanel'
import { currencyFormat } from '~/static/functions'

export default {
  name: 'GiftPackage',
  props: {
    giftType: {
      type: Object,
      required: true,
    },
    orientation: {
      type: String,
      default: 'default',
    },
  },
  data() {
    return {
      quantity: 1,
    }
  },
  computed: {
    style() {
      return {
        backgroundImage: `url(${this.giftType.image})`,
      }
    },
    itemInCart() {
      const item = this.$store.getters.cart.filter(
        (item) => item.id === this.giftType.id
      )
      return !!item.length
    },
  },
  methods: {
    currencyFormat,
    increase() {
      this.quantity++
    },
    decrease() {
      this.quantity = this.quantity === 1 ? this.quantity : this.quantity - 1
    },
    addToCart() {
      const { id, type, image, name, amount } = this.giftType
      const payload = {
        id,
        type,
        image,
        name,
        amount,
        quantity: this.quantity,
      }
      this.$store.commit('addItem', payload)
      mixpanelTrackEvent(`Add to cart clicked - Gifting`)
    },
  },
}
</script>

<style lang="scss" scoped>
@import './assets/scss/components/_gift-package.scss';
</style>
