<template>
  <div class="menu-item">
    <div class="menu-item__image img-hover-zoom">
      <img
        src="https://res.cloudinary.com/eden-life-inc/image/upload/v1670551664/dance-festival/coleslaw-min_ajtkka.png"
        alt="meal name"
      />
    </div>
    <div class="menu-item__name">Vegetable Salad</div>
    <div class="menu-item__price">NGN 3,500.00</div>
    <div class="menu-item__counter">
      <el-button
        class="decrease"
        :type="'control'"
        icon="el-icon-minus"
        :disabled="form.qty === 0"
        @click="form.qty--"
      />
      <el-input v-model="form.qty" v-number type="text" readonly />
      <el-button
        class="increase"
        :type="'control'"
        icon="el-icon-plus"
        @click="form.qty++"
      />
    </div>
    <button :disabled="form.qty < 1" type="button" class="menu-item__action">
      Add to Cart
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
      qty: 0,
    },
  }),
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';
@import '~/assets/scss/greenhouse/main.scss';

.menu-item {
  margin-bottom: 60px;
  &__image {
    height: 250px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eeeeee;
    border-radius: 8px;
    img {
      height: 150px;
    }
  }
  &__name {
    margin-top: 10px;
    margin-bottom: 10px;
    color: color(eden-neutral-1);
    font-weight: 500;
    @include font-size(sm);
  }
  &__price {
    font-weight: 500;
    @include font-size(lg);
  }
  &__counter {
    margin-top: 20px;
    margin-bottom: 10px;
    display: flex;
    width: 80%;

    .el-input {
      width: 80px !important;

      ::v-deep &__inner {
        height: 100% !important;
        padding: 0px 20px;
        width: 80px !important;
        text-align: center;
        border-left: none;
        border-right: none;
        border-top: 1px solid color(eden-neutral-6);
        border-bottom: 1px solid color(eden-neutral-6);
        border-radius: 0;
      }
    }

    .el-button {
      background: color(eden-neutral-6);

      &.increase {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        width: 15px;
      }

      &.decrease {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        width: 15px;
      }
    }
  }
  &__action {
    margin-top: 20px;
    line-height: 23px;
    width: 80%;
    @include font-size(xs);
    background-color: color(eden-green-primary);
    color: color(eden-neutral-7);
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
    padding: $gap * 1.8 * 0.5 $gap * 1.2;

    &:hover {
      box-shadow: 0px 2px 4px rgba(3, 168, 78, 0.239);
      background-color: color(eden-green-250);
      color: color(eden-neutral-7);
    }
    &:active {
      background-image: radial-gradient(
        circle at center right,
        rgba(0, 141, 64, 0.1) 50%,
        #008d40 50%
      );
    }
    &:disabled {
      background-color: color(eden-neutral-6);
    }
  }
}
</style>
