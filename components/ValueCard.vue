<template>
  <div
    :class="`value__card ${content.shadow && 'shadowed'} ${
      content.media.type === 'video' && 'video__content'
    }`"
    :style="setStyles(content)"
  >
    <div
      :class="`value__title ${content.padding === 'pad' && 'extra-padding'}`"
    >
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
          :src="content.media.src"
          alt="value-image"
          :class="`image ${content.media.size} ${content.align_image}`"
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
        <div v-if="content.media.type === 'images'" :class="`image grid ${content.media.margin}`">
          <div class="child" v-for="(image, index) in content.media.src" :key="index">
              <span v-if="image.emoji" :class="`emoji ${content.media.emoji_bg} ${image.emoji.position}`"> {{image.emoji.src}} </span>
            <img :src="image.image" alt="value-image" />
          
          </div>
        </div>
      </div>
      <button
        v-if="content.title === 'The 1st Reason'"
        class="btn__modal row mobile"
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
