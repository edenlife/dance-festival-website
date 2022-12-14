<template>
  <el-dialog :title="``" width="25%" :visible="isOpen" @close="$emit('close')">
    <el-input
      @change="$store.commit('updateSearch', $event)"
      v-model="search"
      prefix-icon="el-icon-search"
      type="text"
    ></el-input>

    <div style="min-height: 89vh; margin-top: -130px">
      <Search is-modal @close="$emit('close')" />
    </div>
  </el-dialog>
</template>

<script>
import Search from '~/pages/search.vue'

export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    search: '',
  }),
  components: { Search },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';

::v-deep .el-dialog {
  margin: 50px 50px 50px auto !important;
  @include respond(md) {
    margin: 0px !important;
    width: 100% !important;
    max-height: 100vh;
    overflow: scroll;
  }
}
</style>
