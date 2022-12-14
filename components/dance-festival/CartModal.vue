<template>
  <el-dialog
    :title="`Your Cart (${cartItems.length})`"
    width="27%"
    :visible="isOpen"
    @close="$emit('close')"
  >
    <div v-if="cartItems.length === 0" class="empty-cart">
      <EmptyCartIcon />
      <div class="title">Your cart is empty.</div>
      <div class="subtitle">
        Go through our menu pick a <br />
        bowl of happiness, or two.
      </div>
    </div>
    <div v-else class="cart-list">
      <div v-for="(item, ix) in cartItems" :key="item.id" class="cart-item">
        <div class="cart-item__image">
          <img :src="item.image_url" alt="meal name" />
        </div>
        <div class="cart-item__details">
          <el-row type="flex" justify="between">
            <el-col :span="15">
              <div class="cart-item__name">{{ item.full_name }}</div>
            </el-col>
            <el-col :span="9">
              <div class="cart-item__price">
                {{ 'NGN ' + currencyFormat(item.price, 0) }}
              </div>
            </el-col>
          </el-row>
          <div class="flex-between actions">
            <div
              class="cart-item__remove"
              @click="$store.commit('removeItem', ix)"
            >
              <i class="el-icon-minus"></i>
              Remove
            </div>
            <div class="cart-item__counter">
              <el-button
                class="decrease"
                :type="'control'"
                icon="el-icon-minus"
                :disabled="item.quantity === 1"
                @click="$store.commit('decreaseItemQuantity', ix)"
              />
              <el-input v-model="item.quantity" v-number type="text" readonly />
              <el-button
                class="increase"
                :type="'control'"
                :disabled="item.quantity === item.available_quantity"
                icon="el-icon-plus"
                @click="$store.commit('increaseItemQuantity', ix)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <span v-if="cartItems.length > 0" slot="footer" class="dialog-footer">
      <div class="amount">
        <div>Total</div>
        <div>NGN {{ currencyFormat(totalPrice) }}</div>
      </div>
      <el-button
        type="primary"
        @click="
          $router.push('/checkout')
          $emit('close')
        "
        >Checkout</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
import EmptyCartIcon from './EmptyCartIcon.vue'
import { currencyFormat } from '~/static/functions'

export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  components: { EmptyCartIcon },
  data: () => ({}),
  computed: {
    cartItems() {
      return this.$store.state.cart
    },
    totalPrice() {
      return this.cartItems.reduce(
        (acc, val) => acc + val.price * val.quantity,
        0
      )
    },
  },
  methods: {
    currencyFormat,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';
@import '~/assets/scss/greenhouse/main.scss';

.empty-cart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 90px 0px;
  margin-top: auto;
  margin-bottom: auto;

  .title {
    margin-top: 30px;
    margin-bottom: 10px;
    @include font-size(lg);
    color: color(eden-neutral-1);
    font-weight: 500;
  }

  .subtitle {
    @include font-size(base);
    color: color(eden-neutral-1);
    text-align: center;
  }
}
::v-deep .el-dialog {
  margin: 50px 50px 50px auto !important;
  @include respond(md) {
    margin: 0px !important;
    width: 100% !important;
    max-height: 100vh;
  }

  &__title {
    font-weight: 500;
    color: color(eden-grey-primary);
  }

  &__body {
    display: flex;
    min-height: 50vh;
    @include respond(md) {
      min-height: 72vh;
      width: 100%;
    }
    width: 100%;
  }

  &__footer {
    padding: 0px !important;
  }

  .dialog-footer {
    display: flex;
    flex-direction: column;
    background: #f7f8f8;
    padding: 30px 20px !important;

    .amount {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      @include font-size(sm);
    }

    button {
      @include font-size(sm);
    }
  }
}

.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-list {
  width: 100%;
  display: flex;
  flex-direction: column;

  .cart-item {
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    &__image {
      height: 60px;
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #eeeeee;
      border-radius: 8px;
      margin-right: 10px;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 8px;
      }
    }

    &__details {
      flex: 1;

      .actions {
        margin-top: 20px;
        align-items: center;
      }
    }

    &__remove {
      @include font-size(xs);
      display: flex;
      align-items: center;

      border-radius: 8px;
      color: color(eden-red);
      cursor: pointer;

      i {
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 15px;
        width: 15px;
        border-radius: 50%;
        background-color: color(eden-red-50);
      }
    }

    &__name {
      color: color(eden-neutral-1);
      @include font-size(sm);
      word-break: normal;
    }
    &__price {
      color: color(eden-neutral-1);
      font-size: 700;
      @include font-size(sm);
      text-align: right;
    }
    &__counter {
      display: flex;
      .el-input {
        width: 35px !important;
        height: 100% !important;
        max-height: 100% !important;

        ::v-deep &__inner {
          @include font-size(xs);
          height: 100% !important;
          max-height: 100% !important;
          padding: 3px 5px;
          width: 35px !important;
          text-align: center;
          border-left: none;
          border-right: none;
          border-top: 1px solid color(eden-neutral-6);
          border-bottom: 1px solid color(eden-neutral-6);
          border-radius: 0;
        }
      }

      .el-button {
        background: color(eden-neutral-6);
        @include font-size(xs);
        padding: 10px !important;

        ::v-deep &.increase {
          border-top-left-radius: 0 !important;
          border-top-right-radius: 4px !important;
          border-bottom-right-radius: 4px !important;
          border-bottom-left-radius: 0 !important;
          width: 10px;
          height: 10px;
        }

        ::v-deep &.decrease {
          border-top-left-radius: 4px !important;
          border-bottom-left-radius: 4px !important;
          border-top-right-radius: 0 !important;
          border-bottom-right-radius: 0 !important;
          width: 10px;
          height: 10px;
        }
      }
    }
  }
}
</style>
