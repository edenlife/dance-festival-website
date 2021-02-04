<template>
  <div class="cart">
    <transition name="backdrop-fade" mode="out-in">
      <div v-if="shouldShow" class="cart__backdrop" @click="close"></div>
    </transition>
    <div :class="['cart__drawer', { open: shouldShow }]">
      <div class="cart__drawer-header">
        <h5>Your bag</h5>
        <span @click="close">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 1L1 9"
              stroke="#798B83"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 1L9 9"
              stroke="#798B83"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
      <div class="cart__drawer-body">
        <transition name="slide-fade">
          <div v-if="cart.length">
            <div v-for="(item, index) in cart" :key="index" class="cart__item">
              <div class="cart__item-info">
                <img :src="item.image" alt="" />
                <div>
                  <p>{{ item.name }} ({{ item.type }})</p>
                  <span @click="removeItem(index)">Remove</span>
                </div>
              </div>
              <div class="cart__item-price">
                <p>NGN {{ currencyFormat(item.amount * item.quantity) }}</p>
                <div class="btn--group">
                  <button
                    class="btn--item minus"
                    @click.prevent="decreaseQuantity(index)"
                  >
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
                    v-model="item.quantity"
                    type="text"
                    name=""
                    placeholder="0"
                    readonly
                  />
                  <button
                    class="btn--item plus"
                    @click.prevent="increaseQuantity(index)"
                  >
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
            </div>
          </div>
        </transition>
        <transition name="slide-fade">
          <div v-if="!cart.length" class="cart__drawer-body--empty">
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1612297848/eden-website-v2/empty-cart_pczlxs.svg"
              alt
            />
            <h6>Your bag is empty</h6>
            <p>
              Go through our catalogue and
              <br />
              find the perfect gift.
            </p>
          </div>
        </transition>
      </div>
      <div v-if="cart.length" class="cart__drawer-footer">
        <div>
          <p>Subtotal</p>
          <p>NGN {{ currencyFormat(subTotal) }}</p>
        </div>
        <button type="button" class="btn" @click="checkout">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
import { currencyFormat } from '~/static/functions'

export default {
  name: 'Cart',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
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
    cart() {
      return this.$store.getters.cart
    },
    subTotal() {
      return this.cart.reduce((total, item) => {
        return total + item.amount * item.quantity
      }, 0)
    },
  },
  watch: {
    show() {
      if (this.show) {
        document.body.style.setProperty('overflow', 'hidden', 'important')
      }
    },
  },
  methods: {
    currencyFormat,
    close() {
      this.shouldShow = false
      document.body.style.setProperty('overflow', 'visible', 'important')
    },
    increaseQuantity(index) {
      this.$store.commit('increaseItemQuantity', index)
    },
    decreaseQuantity(index) {
      if (this.cart[index].quantity > 1) {
        this.$store.commit('decreaseItemQuantity', index)
      }
    },
    removeItem(index) {
      this.$store.commit('removeItem', index)
    },
    checkout() {
      this.close()
      this.$router.push('/gifting/checkout')
    },
  },
}
</script>

<style lang="scss" scoped>
@import './assets/scss/components/_cart.scss';
</style>
