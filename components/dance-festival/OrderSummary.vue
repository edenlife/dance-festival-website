<template>
  <div class="order-summary">
    <p class="title p-main">Order Summary</p>
    <div class="cart-list p-main">
      <div class="cart-item__wrapper" v-for="item in cartItems" :key="item.id">
        <div class="cart-item">
          <div class="cart-item__image">
            <img :src="item.image" alt="meal name" />
          </div>
          <div class="cart-item__details">
            <div class="is-flex flex-between is-align-center">
              <div>
                <div class="cart-item__name">{{ item.name }}</div>
                <div class="cart-item__quantity">
                  Quantity: {{ item.quantity }}
                </div>
              </div>
              <div class="cart-item__price">{{ item.price }}</div>
            </div>
          </div>
        </div>
        <info-box>
          <span class="info__text"> Pick up time: 11:00am-1:00pm </span>
        </info-box>
      </div>
    </div>
    <div class="amount p-main">
      <div>Subtotal</div>
      <div>NGN 32,000.00</div>
    </div>
    <div class="amount p-main">
      <div>Total</div>
      <div>NGN 32,000.00</div>
    </div>
  </div>
</template>

<script>
import InfoBox from '@/components/dance-festival/InfoBox.vue'

export default {
  components: { InfoBox },
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

.p-main {
  padding: 20px 30px;
}

.is-flex {
  display: flex;
}

.is-align-center {
  align-items: center;
}

.flex-between {
  justify-content: space-between;
}

.info__text {
  @include font-size(sm);
}

.order-summary {
  border-radius: 8px;
  border: 1px solid color(eden-neutral-6);
  @include respond(md) {
    margin-top: 30px;
  }
  .title {
    @include font-size(lg);
    border-bottom: 1px solid color(eden-neutral-6);
  }

  .amount {
    display: flex;
    background: #f7f8f8;
    justify-content: space-between;
    @include font-size(sm);
    &:first-of-type {
      border-bottom: 1px solid color(eden-neutral-6);
    }
  }

  .cart-list {
    width: 100%;
    display: flex;
    flex-direction: column;

    .cart-item {
      width: 100%;
      margin-bottom: 30px;
      display: flex;

      &__wrapper {
        margin-bottom: 20px;
      }
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
      &__quantity {
        color: color(eden-neutral-1);
        @include font-size(xs);
        margin-top: 20px;
        font-style: italic;
      }
      &__price {
        color: color(eden-neutral-1);
        font-size: 700;
        @include font-size(sm);
      }
    }
  }
}
</style>
