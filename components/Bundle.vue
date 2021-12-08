<template>
  <div class="gift--bundle">
    <div>
      <img
        :src="require(`~/assets/images/${giftPlan.image}.png`)"
        :alt="giftPlan.image"
        class="bundle--image"
      />
    </div>

    <div class="gift--info">
      <h4 v-html="giftPlan.title"></h4>

      <p v-html="giftPlan.description"></p>
      <span class="gift--tag"> Details </span>

      <ul>
        <li
          v-for="(detail, index) in giftPlan.details"
          :key="index"
          v-html="detail"
        ></li>
      </ul>

      <button
        type="button"
        class="gift--bundle-button"
        @click.prevent="scrollTo('bundle-form')"
      >
        <span> Gift this! </span>
        <img src="@/assets/images/value-gift.svg" alt="food" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bundle',
  props: {
    giftPlan: {
      type: Object,
      required: true,
    },
  },
  methods: {
    scrollTo(id) {
      this.$emit('plan', this.giftPlan)
      document.getElementById(id).scrollIntoView()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/_bundle.scss';
</style>
