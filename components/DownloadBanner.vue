<template>
  <transition name="download-banner">
    <div class="download-banner-mask">
      <div class="download-banner-wrapper">
        <div class="download-banner-container">
          <div class="download-banner-header">
            <slot name="header"> </slot>
          </div>

          <div class="download-banner-body">
            <slot name="body"> </slot>
          </div>

          <div class="download-banner-footer">
            <slot name="footer">
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'DownloadBanner',
  props: {
    showDownloadBanner: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/_downloadbanner.scss';
</style>
