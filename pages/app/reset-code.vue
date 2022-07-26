<template>
  <div class="gh-container">
    <div class="gh-container--form">
      <div class="gh-container--form__header">
        <div class="logo-border">
          <img
            src="~/assets/images/greenhouse/reset_lock.svg"
            class="key-image"
            alt="Eden"
          />
        </div>
        <h2 class="header">Enter the reset code sent to your email</h2>
        <div class="sub-head">
          <span
            >A code has been sent to your email address. Enter the code below or
            <router-link :to="{ name: 'forgot-password' }"
              >resend the code.</router-link
            ></span
          >
        </div>
      </div>
      <div class="gh-container--form__content">
        <el-form ref="form" :model="form" label-position="top">
          <el-form-item
            label="Reset code"
            prop="code"
            :rules="validateField('Code')"
          >
            <el-input v-model="form.code" type="text" />
          </el-form-item>
        </el-form>
        <div class="actions">
          <el-button
            type="primary"
            :loading="loading"
            :disabled="disableNext"
            @click="next"
            >Next</el-button
          >
          <p class="mt-20">
            <router-link :to="{ name: 'login' }"
              >Back to login page.</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import validations from '~/mixins/validations'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import getSiteMeta from '~/utils/getSiteMeta'

export default {
  name: 'ResetCode',
  mixins: [validations],
  layout: 'greenhouse',
  middleware: ['guest'],
  data() {
    return {
      form: {
        email: '',
      },
      loading: false,
    }
  },
  head() {
    return {
      title: 'Eden | Reset Code',
      meta: [...this.meta],
    }
  },
  computed: {
    meta() {
      const metaData = {
        title: 'Eden | Reset Code',
        description:
          'Your chef-cooked meals, delivered to you. Daily or weekly.',
      }
      return getSiteMeta(metaData)
    },
    disableNext() {
      return this.form.code === ''
    },
  },
  mounted() {
    mixpanelTrackEvent('Forgot password')
  },
  methods: {
    next() {
      this.$refs.form.validate((valid) => {
        if (!valid) {
          return
        }
        this.loading = true
        this.$store.commit('setGreenhouseResetCode', this.form.code)
        this.$router.push({ name: 'reset-password' })
      })
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/greenhouse/main.scss';
</style>
