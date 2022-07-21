<template>
  <div class="gh-container">
    <div class="gh-container--form">
      <div class="gh-container--form__header">
        <div class="logo-border">
          <img
            src="~/assets/images/greenhouse/password_key.svg"
            class="logo-image"
            alt="Eden"
          />
        </div>
        <h2 class="header">Forgot your password?</h2>
        <div class="sub-head">
          <span
            >Enter the email address you signed up with below and we'll send you
            a code to help reset your password.</span
          >
        </div>
      </div>
      <div class="gh-container--form__content">
        <el-form ref="form" :model="form" label-position="top">
          <el-form-item
            label="Email address"
            prop="email"
            :rules="validateEmail('Email')"
          >
            <el-input v-model="form.email" type="text" />
          </el-form-item>
        </el-form>
        <div class="actions">
          <el-button
            type="primary"
            :loading="loading"
            :disabled="disableSend"
            @click="sendLink"
            >Send reset code</el-button
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
import * as greenhouse from '~/request/greenhouse.api'

export default {
  name: 'ForgotPassword',
  mixins: [validations],
  layout: 'greenhouse',
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
      title: 'Eden | Forgot Password',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://ouredenlifev2-staging.netlify.app/food_leads`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        title: 'Eden | Forgot Password',
        description:
          'Your chef-cooked meals, delivered to you. Daily or weekly.',
        url: `https://ouredenlifev2-staging.netlify.app/food_leads`,
        mainImage: 'https://ouredenlifev2-staging.netlify.app/edencardfood.png',
      }
      return getSiteMeta(metaData)
    },
    disableSend() {
      return this.form.email === ''
    },
  },
  mounted() {
    mixpanelTrackEvent('Forgot password')
  },
  methods: {
    sendLink() {
      this.$refs.form.validate((valid) => {
        if (!valid) {
          return
        }
        this.loading = true
        greenhouse
          .sendResetCode(this.form)
          .then((response) => {
            console.log("sending")
            this.loading = false
            const successMessage = response.data.message
            this.$message({
              message: successMessage,
              type: 'success',
            })
            console.log("sent")
            this.$store.commit('setGreenhouseResetEmail', this.form.email)
            this.$router.push({ name: 'reset-code' })
          })
          .catch((error) => {
            this.loading = false
            const errorMessage = error.response.data
            if (errorMessage.errors) {
              this.$message.error(errorMessage.errors.join('\n'))
            } else {
              this.$message.error(errorMessage.message)
            }
          })
      })
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/greenhouse/main.scss';
</style>
