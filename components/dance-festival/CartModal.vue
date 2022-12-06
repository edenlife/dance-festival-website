<template>
  <el-dialog
    title="Your Cart"
    :visible="isOpen"
    width="30%"
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
        <div>Subtotal</div>
        <div>NGN 32,000.00</div>
      </div>
      <el-button type="primary" @click="$emit('close')">Checkout</el-button>
    </span>
  </el-dialog>
</template>

<script>
import EmptyCartIcon from './EmptyCartIcon.vue'

export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
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
::v-deep .el-dialog {
  margin: 50px 50px 50px auto !important;

  &__body {
    display: flex;
    min-height: 50vh;
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
