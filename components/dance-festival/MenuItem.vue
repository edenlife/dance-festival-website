<template>
  <div class="menu-item">
    <div class="menu-item__image img-hover-zoom">
      <img
        :src="
          mealItem.image_url ||
          'https://res.cloudinary.com/eden-life-inc/image/upload/v1611230252/eden-website-v2/eden-logo_lcepc6.svg'
        "
        alt="meal name"
      />
    </div>
    <div class="menu-item__name">{{ mealItem?.full_name }}</div>
    <div class="menu-item__price">
      {{ 'NGN ' + currencyFormat(mealItem.price) }}
    </div>
    <div class="actions">
      <div class="menu-item__counter" v-if="mealItem.available_quantity > 0">
        <el-button
          class="decrease"
          :type="'control'"
          icon="el-icon-minus"
          :disabled="form.qty === 0"
          @click="
            form.qty--
            added = false
          "
        />
        <el-input v-model="form.qty" v-number type="text" readonly />
        <el-button
          :disabled="
            mealItem.available_quantity === 0 ||
            form.qty >= mealItem.available_quantity
          "
          class="increase"
          :type="'control'"
          icon="el-icon-plus"
          @click="
            form.qty++
            added = false
          "
        />
      </div>
      <el-tag v-else :type="''" effect="plain" class="out-of-stock"
        >Out of stock</el-tag
      >
      <button
        @click="!added ? addToCart() : null"
        :disabled="form.qty < 1 || mealItem.available_quantity === 0"
        type="button"
        class="menu-item__action"
      >
        {{ added ? 'Added to Cart' : 'Add to Cart' }}
      </button>
    </div>
  </div>
</template>

<script>
import { currencyFormat } from '~/static/functions'

export default {
  props: {
    mealItem: Object,
  },
  data: () => ({
    form: {
      qty: 0,
    },
    added: false,
  }),

  methods: {
    currencyFormat,
    addToCart() {
      const cartItems = [...this.$store.state.cart]

      const itemInCart = cartItems.find((item) => item.id === this.mealItem.id)
      const itemInCartIndex = cartItems.findIndex(
        (item) => item.id === this.mealItem.id
      )

      let itemToAdd = {}

      if (itemInCart) {
        itemToAdd = {
          ...itemInCart,
          quantity: this.form.qty + itemInCart.quantity,
        }
        this.$store.commit('editItem', itemToAdd, itemInCartIndex)
      } else {
        itemToAdd = { ...this.mealItem, quantity: this.form.qty }
        this.$store.commit('addItem', itemToAdd)
      }

      this.added = true
      this.form.qty = 0
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';
@import '~/assets/scss/greenhouse/main.scss';

::v-deep .el-icon-plus {
  font-weight: 900;
}

::v-deep .el-icon-minus {
  font-weight: 900;
}

.out-of-stock {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 20px 30px;
  cursor: pointer;
  color: color(eden-red);
  background-color: color(eden-red-50);
  border: none;
}

.menu-item {
  margin-bottom: 60px;
  &__image {
    height: 250px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eeeeee;
    border-radius: 8px;
    img {
      height: 100%;
      width: 100%;
      border-radius: 8px;
      object-fit: cover;
    }
  }
  &__name {
    display: flex;
    margin-top: 10px;
    width: 100%;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 10px;
    color: color(eden-neutral-1);
    font-weight: 500;
    @include font-size(sm);
  }
  &__price {
    font-weight: 500;
    @include font-size(lg);
  }
  .actions {
    width: 65%;
  }
  &__counter {
    margin-top: 20px;
    margin-bottom: 10px;
    display: flex;
    width: 100%;

    .el-input {
      width: 100% !important;

      ::v-deep &__inner {
        height: 100% !important;
        padding: 0px 20px;
        width: 100% !important;
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

      &.increase {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        width: 15px;
        font-weight: 500;
      }

      &.decrease {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        width: 15px;
        font-weight: 500;
      }
    }
  }
  &__action {
    margin-top: 20px;
    line-height: 23px;
    width: 100%;
    @include font-size(xs);
    background-color: color(eden-green-primary);
    color: color(eden-neutral-7);
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
    padding: $gap * 1.8 * 0.5 $gap * 1.2;

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
      background-color: color(eden-neutral-6);
    }
  }
}
</style>
