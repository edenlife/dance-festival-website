<template>
  <div class="gh-container">
    <div class="gh-container--form">
      <div class="gh-container--form__header">
        <h2 class="header">Create your Eden Life account</h2>
        <div class="sub-head">
          <span>Already have an account?</span>
          <router-link :to="{ name: 'login' }">Login here.</router-link>
        </div>
      </div>
      <div class="gh-container--form__content">
        <el-form ref="form" :model="form" label-position="top">
          <el-row :gutter="20">
            <el-col :md="12">
              <el-form-item
                label="First name"
                prop="firstname"
                :rules="validateName()"
              >
                <el-input v-model="form.firstname" type="text"></el-input>
              </el-form-item>
            </el-col>
            <el-col :md="12">
              <el-form-item
                label="Last name"
                prop="lastname"
                :rules="validateName()"
              >
                <el-input v-model="form.lastname" type="text"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item
            label="Email address"
            prop="email"
            :rules="validateEmail()"
          >
            <el-input v-model="form.email" type="text" />
          </el-form-item>
          <el-form-item
            label="Country"
            prop="country"
            :rules="validateField('Country')"
          >
            <el-select v-model="form.country" width="100%">
              <el-option
                v-for="(country, index) in countries"
                :key="index"
                :label="country"
                :value="country"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-if="location === 'NG'" label="State" prop="state">
            <el-select v-model="form.state" width="100%">
              <el-option
                v-for="(state, index) in states"
                :key="index"
                :label="state"
                :value="state"
              ></el-option>
              <el-option value=""
                >Can’t find your location?
                <a @click="showNewLocationForm = true">Click here.</a>
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-else label="County" prop="state">
            <el-select v-model="form.state" width="100%">
              <el-option
                v-for="(state, index) in states"
                :key="index"
                :label="state"
                :value="state"
              ></el-option>
              <el-option value=""
                >Can’t find your location?
                <a @click="showNewLocationForm = true">Click here.</a>
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="Phone Number"
            prop="phone"
            :rules="location === 'NG' ? validatePhoneNG() : validatePhoneKE()"
          >
            <el-input
              v-model="form.phone"
              :placeholder="location === 'NG' ? 8123456785 : 712345678"
              :maxlength="location === 'NG' ? 10 : 9"
              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
            >
              <template slot="prepend">
                <div>
                  <img
                    slot="prefix"
                    :style="{
                      height: '15px',
                      borderRadius: '2px',
                      marginRight: '6px',
                    }"
                    :src="require(`~/assets/images/greenhouse/${location}.svg`)"
                    alt="code"
                  />
                  <span> +{{ countryCode }} </span>
                </div>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item
            label="Services you're interested in"
            prop="services"
            :rules="validateField('Services')"
          >
            <el-select
              v-model="form.services"
              width="100%"
              placeholder="Select services"
              multiple
            >
              <el-option
                v-for="(service, index) in services"
                :key="index"
                :label="service"
                :value="service.toLowerCase()"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="Password"
            prop="password"
            :rules="validateField('Password')"
          >
            <el-input v-model="form.password" :type="type" />
            <div class="show-password" @click="showPassword">
              {{ btnText }}
            </div>
          </el-form-item>
        </el-form>
        <div v-if="form.password">
          <password-criteria
            :password="form.password"
            @success="setDisableRegister"
          />
        </div>
        <div class="actions margin-bottom-40">
          <el-button
            type="primary"
            :loading="loading"
            :disabled="disableRegister || passwordDisabledRegister"
            @click="register"
            >Create an account</el-button
          >
        </div>
      </div>
    </div>
    <new-location-form
      :show.sync="showNewLocationForm"
      @success="showNewLocationSuccessDialog = true"
    />
    <new-location-success-dialog :show.sync="showNewLocationSuccessDialog" />
  </div>
</template>

<script>
import validations from '~/mixins/validations'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import getSiteMeta from '~/utils/getSiteMeta'
import defaultConfig from '~/static/defaultConfig'

import * as greenhouse from '~/request/greenhouse.api'

import PasswordCriteria from '~/components/Greenhouse/PasswordCriteria'
import NewLocationForm from '~/components/Greenhouse/NewLocationForm'
import NewLocationSuccessDialog from '~/components/Greenhouse/NewLocationSuccessDialog'

export default {
  name: 'Signup',
  components: { PasswordCriteria, NewLocationForm, NewLocationSuccessDialog },
  mixins: [validations],
  layout: 'greenhouse',
  data() {
    return {
      dialogVisible: false,
      form: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        country: 'Nigeria',
        state: '',
        phone: '',
        services: [],
      },
      countries: ['Nigeria', 'Kenya'],
      // states: ["Lagos"],
      loading: false,
      type: 'password',
      source: '',
      content: '',
      medium: '',
      btnText: 'Show Password',
      showNewLocationForm: false,
      showNewLocationSuccessDialog: false,
      passwordDisabledRegister: true,
    }
  },
  head() {
    return {
      title: 'Eden | Signup',
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
        title: 'Eden | Signup',
        description:
          'Your chef-cooked meals, delivered to you. Daily or weekly.',
        url: `https://ouredenlifev2-staging.netlify.app/food_leads`,
        mainImage: 'https://ouredenlifev2-staging.netlify.app/edencardfood.png',
      }
      return getSiteMeta(metaData)
    },
    disableRegister() {
      return this.form.email === '' || this.form.password === ''
    },
    location() {
      return this.form.country === 'Nigeria' ? 'NG' : 'KE'
    },
    countryCode() {
      return this.location === 'NG' ? '234' : '254'
    },
    states() {
      return this.location === 'NG' ? ['Lagos'] : ['Nairobi']
    },
    services() {
      return this.location === 'NG'
        ? ['Cleaning', 'Laundry', 'Food']
        : ['Cleaning', 'Laundry', 'Food', 'Beauty']
    },
  },
  mounted() {
    mixpanelTrackEvent('Create account')
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
    setDisableRegister(value) {
      this.passwordDisabledRegister = value
    },
    register() {
      mixpanelTrackEvent('Create account btn clicked')
      this.$refs.form.validate((valid) => {
        if (!valid) {
          return
        }
        this.loading = true
        const plan = {}
        this.form.services.map((service) => {
          if (service === 'food') {
            plan.meal = defaultConfig[this.location][service]
            return
          }
          plan[service] = defaultConfig[this.location][service]
        })
        let sortedPlan = this.sortObject(plan)
        console.log(sortedPlan, plan)
        const metadata = {
          name: this.form.firstname + ' ' + this.form.lastname,
          email: this.form.email,
          lead_gen_page: window.location.href,
          referrer: document.referrer,
        }
        if (window.location.href.includes('utm_source=')) {
          const indexLocation = window.location.href.indexOf('utm_source=')
          this.source = window.location.href.slice(
            indexLocation + 11,
            window.location.href.indexOf('&', indexLocation)
          )
        }
        if (window.location.href.includes('utm_content=')) {
          const indexLocation = window.location.href.indexOf('utm_content=')
          this.content = window.location.href.slice(
            indexLocation + 12,
            window.location.href.indexOf('&', indexLocation)
          )
        }
        if (window.location.href.includes('utm_medium=')) {
          const indexLocation = window.location.href.indexOf('utm_medium=')
          this.medium = window.location.href.slice(
            indexLocation + 11,
            window.location.href.indexOf('&', indexLocation)
          )
        }
        const payload = {
          name: this.form.firstname + ' ' + this.form.lastname,
          email: this.form.email,
          password: this.form.password,
          eden_location: this.location,
          phone_number: this.countryCode + this.form.phone,
          default_plan: JSON.stringify(sortedPlan),
          signup_meta: {
            lead_gen_page: window.location.href,
            referrer: document.referrer,
            medium: this.medium,
            source: this.source,
            content: this.content,
          },
        }
        const loginPayload = {
          email: this.form.email,
          password: this.form.password,
        }
        window.Intercom('update', metadata)
        window.Intercom('trackEvent', 'greenhouse-lead-gen-signup', metadata)
        greenhouse
          .register(payload)
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
            this.$message({
              message,
              type: 'success',
            })

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
    }
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/greenhouse/main.scss';
.el-select-dropdown__item.selected {
  color: #0f241b;
}
</style>
