<template>
  <div class="cart-card">
    <div v-if="cartItems.length === 0" class="empty-cart">
      <EmptyCartIcon />
      <div class="title">Your cart is empty.</div>
      <div class="subtitle">
        Go through our menu pick a <br />
        bowl of happiness, or two.
      </div>
    </div>
    <div v-else class="cart-list">
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <div class="cart-item__image">
          <img :src="item.image" alt="meal name" />
        </div>
        <div class="cart-item__details">
          <div class="flex-between">
            <div class="cart-item__name">{{ item.name }}</div>
            <div class="cart-item__price">{{ item.price }}</div>
          </div>
          <div class="flex-between actions">
            <div class="cart-item__remove">Remove</div>
            <div class="cart-item__counter">
              <el-button
                class="decrease"
                :type="'control'"
                icon="el-icon-minus"
                :disabled="item.quantity === 1"
                @click="item.quantity--"
              />
              <el-input v-model="item.quantity" v-number type="text" readonly />
              <el-button
                class="increase"
                :type="'control'"
                icon="el-icon-plus"
                @click="item.quantity++"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <span v-if="cartItems.length > 0" slot="footer" class="dialog-footer">
      <div class="amount">
        <div>Total</div>
        <div>NGN 32,000.00</div>
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
  </div>
</template>

<script>
import EmptyCartIcon from './EmptyCartIcon.vue'

export default {
  components: { EmptyCartIcon },
  data: () => ({
    cartItems: [
      {
        id: 1,
        name: 'Vegetable Salad',
        quantity: 4,
        image:
          'https://res.cloudinary.com/eden-life-inc/image/upload/v1670297362/dance-festival/coleslaw_gtez2c.png',
        price: 'NGN 3,500.00',
      },
      {
        id: 2,
        name: 'Vegetable Salad',
        quantity: 2,
        image:
          'https://res.cloudinary.com/eden-life-inc/image/upload/v1670297362/dance-festival/coleslaw_gtez2c.png',
        price: 'NGN 3,500.00',
      },
    ],
  }),
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

.cart-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
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
        height: 50px;
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
      font-style: italic;
      text-decoration: underline;
      color: color(eden-neutral-1);
      cursor: pointer;
    }

    &__name {
      color: color(eden-neutral-1);
      @include font-size(sm);
    }
    &__price {
      color: color(eden-neutral-1);
      font-size: 700;
      @include font-size(sm);
    }
    &__counter {
      display: flex;
      .el-input {
        width: 30px !important;

        ::v-deep &__inner {
          @include font-size(xs);
          height: 100% !important;
          padding: 0px 5px;
          width: 30px !important;
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

        &.increase {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          width: 10px;
          height: 10px;
        }

        &.decrease {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          width: 10px;
          height: 10px;
        }
      }
    }
  }
}
</style>
