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
        <h2 class="header">Reset your password</h2>
        <div class="sub-head">
          <span>Enter your new password.</span>
        </div>
      </div>
      <div class="gh-container--form__content">
        <el-form ref="form" :model="form" label-position="top">
          <el-form-item
            label="Password"
            prop="password"
            :rules="validateField('Password')"
          >
            <el-input
              v-model="form.password"
              :type="type"
              @focus="showCriteria = true"
            />
            <div class="show-password" @click="showPassword">
              {{ btnText }}
            </div>
          </el-form-item>
        </el-form>
        <div v-if="showCriteria">
          <password-criteria
            :password="form.password"
            @success="setDisableStatus"
          />
        </div>
        <div class="actions">
          <el-button
            type="primary"
            :loading="loading"
            :disabled="disableReset"
            @click="reset"
            >Reset password and log in</el-button
          >
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
  name: 'ResetPassword',
  mixins: [validations],
  layout: 'greenhouse',
  middleware: ['guest'],
  data() {
    return {
      form: {
        password: '',
      },
      disableReset: true,
      loading: false,
      type: 'password',
      btnText: 'Show Password',
      showCriteria: false,
    }
  },
  head() {
    return {
      title: 'Eden | Forgot Password',
      meta: [...this.meta],
    }
  },
  computed: {
    meta() {
      const metaData = {
        title: 'Eden | Forgot Password',
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
    showPassword() {
      if (this.type === 'password') {
        this.type = 'text'
        this.btnText = 'Hide Password'
      } else {
        this.type = 'password'
        this.btnText = 'Show Password'
      }
    },
    reset() {
      this.$refs.form.validate((valid) => {
        if (!valid) {
          return
        }
        this.loading = true
        const payload = {
          code: this.$store.getters.getGreenhouseResetCode,
          password: this.form.password,
        }
        const loginPayload = {
          email: this.$store.getters.getGreenhouseResetEmail,
          password: this.form.password,
        }
        this.$axios
          .post('/forgot_password/reset', payload)
          .then((response) => {
            this.loading = false
            const successMessage = response.data.message
            this.$message({
              message: successMessage,
              type: 'success',
            })
            this.login(loginPayload)
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
    login(payload) {
      greenhouse
        .login(payload)
        .then((response) => {
          const { status, data, message } = response.data
          if (status) {
            const { access_token, eden_location } = data
            this.$store.commit('setGreenhouse', {
              token: access_token,
              authenticated: !!access_token,
              location: eden_location,
              user: data,
            })

            this.$router.push({ name: 'home' })
          }
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
    },
    setDisableStatus(value) {
      this.disableReset = value
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/greenhouse/main.scss';
</style>
