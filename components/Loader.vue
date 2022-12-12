<template>
  <div class="loading-square-container">
    <div class="loading-square" :style="{ background: backgroundColor }"></div>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: '#00C267',
    },
  },
}
</script>

<style lang="scss" scoped>
@keyframes semi-eratic-loading {
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: scaleX(0.1) rotate(90deg);
  }
  75% {
    transform: rotate(0deg) scaleY(0.1);
  }
  100% {
    transform: scaleX(1);
  }
}

.loading-square {
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #03a84e;
  animation-name: semi-eratic-loading;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;

  &-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
  }
}
</style>
