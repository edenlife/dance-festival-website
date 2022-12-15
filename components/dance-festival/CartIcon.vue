<template>
  <div class="cart-icon">
    <div class="counter" v-if="count > 0">{{ count }}</div>
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_316_51348)">
        <path
          d="M15 15.9374H6.7325C6.43725 15.9375 6.1515 15.833 5.92583 15.6424C5.70025 15.4519 5.54942 15.1878 5.5 14.8966L3.3025 1.97994C3.25292 1.68898 3.102 1.42495 2.87642 1.23461C2.65083 1.04426 2.36517 0.939875 2.07 0.939941H1.25"
          stroke="#4B6358"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.4375 18.4375C13.6101 18.4375 13.75 18.2976 13.75 18.125C13.75 17.9524 13.6101 17.8125 13.4375 17.8125"
          stroke="#4B6358"
          stroke-width="1.3"
        />
        <path
          d="M13.4375 18.4375C13.2649 18.4375 13.125 18.2976 13.125 18.125C13.125 17.9524 13.2649 17.8125 13.4375 17.8125"
          stroke="#4B6358"
          stroke-width="1.3"
        />
        <path
          d="M7.1875 18.4375C7.36008 18.4375 7.5 18.2976 7.5 18.125C7.5 17.9524 7.36008 17.8125 7.1875 17.8125"
          stroke="#4B6358"
          stroke-width="1.3"
        />
        <path
          d="M7.1875 18.4375C7.01492 18.4375 6.875 18.2976 6.875 18.125C6.875 17.9524 7.01492 17.8125 7.1875 17.8125"
          stroke="#4B6358"
          stroke-width="1.3"
        />
        <path
          d="M5.03933 12.1875H15.0985C15.6559 12.1875 16.1973 12.0011 16.6367 11.658C17.0761 11.315 17.3882 10.835 17.5235 10.2942L18.7318 5.46087C18.7549 5.3687 18.7566 5.27248 18.7369 5.17953C18.7172 5.08658 18.6765 4.99935 18.618 4.92447C18.5595 4.84959 18.4848 4.78903 18.3993 4.7474C18.3139 4.70576 18.2202 4.68415 18.1251 4.6842H3.7635"
          stroke="#4B6358"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_316_51348">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="matrix(-1 0 0 1 20 0)"
          />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';

.cart-icon {
  position: relative;
  .counter {
    position: absolute;
    right: -5px;
    top: -5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: color('eden-red');
    color: white;
    height: 15px;
    width: 15px;
    @include font-size(xs);
    border-radius: 50%;
  }
}
</style>
