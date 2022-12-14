<template>
  <div class="container--error" :class="{ 'bg-transparent': adaptation }">
    <section class="error__message">
      <div class="error__message--description">
        <div class="error__message--icon">
          <img :src="require(`~/assets/images/emojis/pleading.png`)" alt="" />
        </div>
        <div class="error__message--text">
          <div class="error__message--text--arrow"></div>
          <p>{{ text }}</p>
        </div>
      </div>
      <button
        class="error__message--btn"
        @click.prevent="inModal ? $emit('close') : gotoHome()"
      >
        Back to homepage
      </button>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'You seem to be lost. Let’s help you find your way back.',
    },
    adaptation: {
      type: Boolean,
      default: false,
    },
    inModal: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    gotoHome() {
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_error.scss';

.container--error {
  &.bg-transparent {
    background-color: transparent !important ;
    background: transparent !important ;

    .error__message {
      padding: 90px;

      @include respond(md) {
        width: 100%;
      }
    }
  }
}
</style>
