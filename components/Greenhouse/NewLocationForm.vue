<template>
  <el-dialog :visible.sync="shouldShow" class="modal" @close="closeEvent">
    <div>
      <div class="gh-container--dialog__header">
        <div class="logo-border">
          <img
            src="~/assets/images/greenhouse/location_globe.svg"
            class="key-image"
            alt="Eden"
          />
        </div>
        <h2 class="header">We’re coming to your city!</h2>
        <div class="sub-head">
          <span
            >Fill in your location and you’ll be the first to <br />
            know when we touch down in your city.</span
          >
        </div>
      </div>
      <div class="gh-container--dialog__content">
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
            <el-select v-model="form.country" width="100%" value-key="isoCode">
              <el-option
                v-for="(country, index) in countries"
                :key="index"
                :label="country.name"
                :value="country"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-if="states.length" prop="state" label="State">
            <el-select v-model="form.state" width="100%">
              <el-option
                v-for="(state, index) in states"
                :key="index"
                :label="state.name"
                :value="state.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="Phone Number"
            prop="phone"
            :rules="location === 'NG' ? validatePhoneNG() : validatePhoneKE()"
          >
            <el-input
              v-model="form.phone"
              :maxlength="location === 'NG' ? 10 : 9"
              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
            >
              <template slot="prepend">
                <div>
                  <img
                    v-if="location"
                    slot="prefix"
                    :style="{
                      height: '15px',
                      borderRadius: '2px',
                      marginRight: '6px',
                    }"
                    :src="require(`~/assets/images/greenhouse/${location}.svg`)"
                    alt="flag"
                  />
                  <span v-else>{{ form.country.flag }}</span>
                  <span> {{ countryCode }} </span>
                </div>
              </template>
            </el-input>
          </el-form-item>
        </el-form>
        <div class="actions">
          <el-button
            type="primary"
            :loading="loading"
            :disabled="disableNotify"
            @click="notify"
            >Notify me</el-button
          >
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import { Country, State } from 'country-state-city'
import validations from '~/mixins/validations'

export default {
  name: 'NewLocationForm',
  mixins: [validations],
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      form: {
        firstname: '',
        lastname: '',
        email: '',
        country: {
          currency: 'NGN',
          flag: '🇳🇬',
          isoCode: 'NG',
          name: 'Nigeria',
          phonecode: '234',
        },
        state: '',
        phone: '',
      },
      loading: false,
      countries: [],
    }
  },
  computed: {
    disableNotify() {
      return (
        this.form.firstname === '' ||
        this.form.lastname === '' ||
        this.form.phone === '' ||
        this.form.email === '' ||
        this.form.country === ''
      )
    },
    location() {
      return this.form.country.name === 'Nigeria'
        ? 'NG'
        : this.form.country.name === 'Kenya'
        ? 'KE'
        : ''
    },
    countryCode() {
      return '+' + this.form.country.phonecode
    },
    countryName() {
      return this.form.country.name
    },
    shouldShow: {
      get() {
        return this.show
      },
      set(value) {
        this.$emit('update:show', value)
      },
    },
    states() {
      return State.getAllStates()
        .filter((stateInfo) => {
          if (stateInfo.countryCode === this.form.country.isoCode) {
            if (
              this.form.country.isoCode === 'NG' &&
              stateInfo.name.includes('State')
            ) {
              stateInfo.name = stateInfo.name.slice(0, -5)
              return stateInfo
            }
            return stateInfo
          }
        })
        .sort((a, b) => {
          const firstItem = a.name.toLowerCase()
          const nextItem = b.name.toLowerCase()

          if (firstItem < nextItem) {
            return -1
          }
          if (firstItem > nextItem) {
            return 1
          }
          return 0
        })
    },
  },
  watch: {
    countryName() {
      this.form.state = ''
    },
  },
  mounted() {
    this.countries = Country.getAllCountries()
  },
  methods: {
    closeEvent() {
      this.shouldShow = false
      this.form = {
        firstname: '',
        lastname: '',
        email: '',
        country: {
          currency: 'NGN',
          flag: '🇳🇬',
          isoCode: 'NG',
          name: 'Nigeria',
          phonecode: '234',
        },
        state: '',
        phone: '',
      }
    },
    notify() {
      this.$refs.form.validate((valid) => {
        if (!valid) {
          return
        }
        this.loading = true
        const payload = {
          name: this.form.firstname + ' ' + this.form.lastname,
          email: this.form.email,
          country: this.form.country.name,
          city: this.form.state,
          phone_number: this.form.phone,
        }
        this.$axios
          .post('/onboarding/customers/waiting_list', payload)
          .then(() => {
            this.loading = false
            this.$store.commit('setSuccessState', this.form.state)
            this.$emit('success')
            this.closeEvent()
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
<style lang="scss" scoped>
@import 'assets/scss/greenhouse/main.scss';
.el-dialog {
  width: 50%;
  height: 100vh !important;
  margin-top: 5vh !important;
  &__wrapper {
    margin-top: 1vh !important;
    top: 0;
  }
}
</style>
