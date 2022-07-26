<template>
  <div class="gh-container">
    <div class="gh-container--form">
      <div class="gh-container--form__header">
        <h2 class="header">Log in to your Eden Life account</h2>
        <div class="sub-head">
          <span>Don’t have an account?</span>
          <router-link :to="{ name: 'signup' }">Create one here.</router-link>
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
          <el-form-item
            label="Password"
            prop="password"
            :rules="validateField('Password')"
          >
            <el-input v-model="form.password" :type="type" />
            <div class="show-password hidden-lg" @click="showPassword">
              {{ btnText }}
            </div>
            <div class="show-password hidden-md" @click="showPassword">
              {{ btnTextMobile }}
            </div>
          </el-form-item>
        </el-form>
        <div class="actions">
          <p>
            <span>Forgot your password?</span>
            <router-link :to="{ name: 'forgot-password' }"
              >Reset it here.</router-link
            >
          </p>
          <el-button
            type="primary"
            :loading="loading"
            :disabled="disableLogin"
            @click="login"
            >Log in</el-button
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
  name: 'Login',
  mixins: [validations],
  layout: 'greenhouse',
  middleware: ['guest'],
  data() {
    return {
      dialogVisible: false,
      form: {
        email: '',
        password: '',
      },
      loading: false,
      type: 'password',
      btnText: 'Show password',
      btnTextMobile: 'Show',
    }
  },
  head() {
    return {
      title: 'Eden | Login',
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
        title: 'Eden | Login',
        description:
          'Your chef-cooked meals, delivered to you. Daily or weekly.',
        url: `https://ouredenlifev2-staging.netlify.app/food_leads`,
        mainImage: 'https://ouredenlifev2-staging.netlify.app/edencardfood.png',
      }
      return getSiteMeta(metaData)
    },
    disableLogin() {
      return this.form.email === '' || this.form.password === ''
    },
  },
  mounted() {
    mixpanelTrackEvent('Login page')
  },
  methods: {
    showPassword() {
      if (this.type === 'password') {
        this.type = 'text'
        this.btnText = 'Hide Password'
        this.btnTextMobile = 'Hide'
      } else {
        this.type = 'password'
        this.btnText = 'Show Password'
        this.btnTextMobile = 'Show'
      }
    },
    login() {
      this.$refs.form.validate((valid) => {
        if (!valid) {
          return
        }
        this.loading = true
        this.$axios
          .post('login', this.form)
          .then((response) => {
            const { status, data, message } = response.data
            if (status) {
              this.$store.commit('setGreenhouseToken', data.access_token)
              this.$store.commit('setGreenhouseUser', {
                ...data.customer,
                location: data.eden_location,
              })
              this.$message({ message, type: 'success' })
              this.$router.push({ name: 'home' })
            }
            this.loading = false
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
