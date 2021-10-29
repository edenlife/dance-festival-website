<template>
  <div
    :class="`value__card ${content.shadow && 'shadowed'} ${
      content.media.type === 'video' && 'video__content'
    }`"
    :style="setStyles(content)"
  >
    <div :class="`value__title ${content.layout === 'row' && 'extra-padding'}`">
      <h5 v-html="content.title"></h5>

      <div v-if="content.title === '3rd Reason'">
        <button class="btn-solid__app" @click="showModal">
          Download The App
        </button>
      </div>
    </div>

    <div :class="`value__content ${content.layout}`">
      <div class="value__text">
        <h3 v-html="content.header" class="value__header"></h3>
        <p class="value__description" v-html="content.description"></p>
        <button
          v-if="content.title === 'The 1st Reason'"
          class="btn__modal row"
          @click="showModal"
        >
          <div class="btn__modal-solid">
            <img
              src="@/assets/images/eden-logo.svg"
              alt="action-btn"
              class="image"
            />
          </div>

          <span> Read our CEO's Promise.</span>
        </button>
      </div>

      <div class="value__image">
        <img
          v-if="content.media.type === 'image'"
          :src="require(`~/assets/images/${content.media.src}.png`)"
          alt="value-image"
          :class="`image ${content.media.size}`"
        />
        <video
          :class="`image ${content.media.size}`"
          ref="videoRef"
          muted
          playsinline
          autoplay
          loop
          v-if="content.media.type === 'video'"
        >
          <source :src="content.media.src" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</template>

<script>
import { scrollToApp } from '~/static/functions'
export default {
  name: 'ValueCard',
  props: {
    content: {
      type: Object,
      default() {
        return {}
      },
    },
  },

  methods: {
    setStyles(content) {
      const { background } = content

      return `background: ${background};`
    },
    scrollToFooter(id, label) {
      scrollToApp(id, label)
    },
    showModal() {
      this.$emit('show')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/_value-card.scss';
</style>
