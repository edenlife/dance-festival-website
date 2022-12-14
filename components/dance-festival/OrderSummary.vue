<template>
  <div class="order-summary">
    <p class="title p-main">Order Summary</p>
    <div class="cart-list p-main">
      <div class="cart-item__wrapper" v-for="item in cartItems" :key="item.id">
        <div class="cart-item">
          <div class="cart-item__image">
            <img :src="item.image_url" alt="meal name" />
          </div>
          <div class="cart-item__details">
            <el-row type="flex" justify="between">
              <el-col :span="15">
                <div>
                  <div class="cart-item__name">{{ item.full_name }}</div>
                  <div class="cart-item__quantity">
                    Quantity: {{ item.quantity }}
                  </div>
                </div>
              </el-col>
              <el-col :span="15">
                <div class="cart-item__price">
                  {{ 'NGN ' + currencyFormat(item.price, 0) }}
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <info-box>
          <span class="info__text">
            Pick up time:
            {{ categories.find((cat) => cat.id === item.category_id)?.from }}-{{
              categories.find((cat) => cat.id === item.category_id)?.to
            }}
          </span>
        </info-box>
      </div>
    </div>

    <div class="amount p-main">
      <div>Total</div>
      <div>NGN {{ currencyFormat(totalPrice) }}</div>
    </div>
  </div>
</template>

<script>
import InfoBox from '@/components/dance-festival/InfoBox.vue'
import { currencyFormat } from '~/static/functions'

export default {
  components: { InfoBox },
  data: () => ({
    categories: [
      {
        label: 'Brunch',
        date: 'Thur, Dec 20',
        from: '11:00am',
        to: '1:00pm',
        id: 1,
      },
      {
        label: 'Lunch',
        date: 'Thur, Dec 20',
        from: '3:00pm',
        to: '5:00pm',
        id: 2,
      },
      {
        label: 'Dinner',
        date: 'Thur, Dec 20',
        from: '7:00pm',
        to: '9:00pm',
        id: 3,
      },
    ],
  }),
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
  text-align: center;
  width: 100%;
  @include font-size(sm);
  @include respond(md) {
    text-align: left;
  }
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
        overflow: hidden;
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
        text-align: right;
      }
    }
  }
}
</style>
