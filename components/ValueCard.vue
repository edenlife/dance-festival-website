<template>
  <div
    :class="`value__card ${content.shadow && 'shadowed'}`"
    :style="setStyles(content)"
  >
    <div :class="`value__title ${content.layout === 'row' && 'extra-padding'}`">
      <h5>{{ content.title }}</h5>

      <div v-if="content.layout.includes('column')">
        <button v-if="content.button === 'modal'" class="btn-solid__modal">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 8V16"
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 12H16"
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <button
          v-else
          class="btn-solid__app"
          @click.prevent="scrollToFooter('#get-the-app', 'Eden means easy')"
        >
          Download The App
        </button>
      </div>
    </div>

    <div :class="`value__content ${content.layout}`">
      <div class="value__text">
        <h3 class="value__header">{{ content.header }}</h3>
        <p class="value__description">{{ content.description }}</p>
        <button v-if="content.layout === 'row'" class="btn-solid__modal row">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 8V16"
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 12H16"
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <div class="value__image">
        <img
          :src="require(`~/assets/images/${content.image}.svg`)"
          alt="value-image"
          :class="`image ${content.img_size}`"
        />
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
      const { shadow, background, layout, textPosition } = content

      return `background: ${background};`
    },
    scrollToFooter(id, label) {
      scrollToApp(id, label)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/_value-card.scss';
</style>
