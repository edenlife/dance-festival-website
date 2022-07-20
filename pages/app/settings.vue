<template>
  <div class="gh-container-settings">
    <div class="settings">
      <el-container>
        <el-aside class="hidden-lg">
          <el-menu :default-openeds="['1', '3']">
            <el-menu-item-group>
              <template slot="title">
                <h1>Profile Settings</h1>
              </template>
              <el-menu-item
                index="1-1"
                @click="scrollTo('profile-details', '')"
              >
                Profile Details
              </el-menu-item>
              <el-menu-item @click="scrollTo('home-details', '')" index="1-2"
                >House Information</el-menu-item
              >
              <el-menu-item
                @click="scrollTo('password-details', '')"
                index="1-3"
                >Password</el-menu-item
              >
            </el-menu-item-group>
          </el-menu>
        </el-aside>

        <el-main>
          <h1 class="hidden-md margin-bottom-32">Profile Settings</h1>
          <div class="settings__details" id="profile-details">
            <el-header> Profile </el-header>
            <el-form
              :model="form"
              label-position="top"
              ref="form_profile"
              v-loading="fetching"
            >
              <el-row :gutter="20">
                <el-col :md="12">
                  <el-form-item
                    label="First name"
                    prop="first_name"
                    :rules="validateName()"
                  >
                    <el-input type="text" v-model="form.first_name"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :md="12">
                  <el-form-item
                    label="Last name"
                    prop="last_name"
                    :rules="validateName()"
                  >
                    <el-input type="text" v-model="form.last_name"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row :gutter="20">
                <el-col :md="12">
                  <el-form-item label="Email address" prop="email">
                    <el-input
                      type="text"
                      :readonly="true"
                      disabled
                      v-model="form.email"
                    />
                  </el-form-item>
                </el-col>
                <el-col :md="12">
                  <el-form-item label="Phone Number" prop="phone">
                    <el-input
                      v-model="form.phone_number"
                      :maxlength="location === 'NG' ? 10 : 9"
                      oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                      :rules="location === validateField('Phone Number')"
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
                            :src="getCountryFlag(location)"
                            alt="code"
                          />
                          <span> +{{ countryCode }} </span>
                        </div>
                      </template>
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item label="Date of birth">
                <el-date-picker
                  v-model="form.birthday"
                  :clearable="false"
                  type="date"
                  format="dd MMM, yyyy"
                  value-format="yyyy-MM-dd"
                  prefix-icon="eden-icon--calendar"
                />
              </el-form-item>
              <div class="actions">
                <el-button
                  type="primary"
                  :loading="updating"
                  @click="updateProfile"
                  >Save changes
                </el-button>
              </div>
            </el-form>
          </div>

          <div class="settings__details margin-top-24" id="home-details">
            <div class="el-header d-block">
              <h1>Home Information</h1>
              <p class="el-text">
                This is where your services will be delivered to.
              </p>
            </div>
            <el-form
              :model="form"
              label-position="top"
              ref="form"
              v-loading="fetching"
            >
              <el-form-item
                label="Address"
                :rules="validateField('Home Address')"
              >
                <el-input type="text" v-model="form.home_address"></el-input>
              </el-form-item>

              <el-form-item label="Location area">
                <el-select
                  v-model="form.location_area_id"
                  filterable
                  placeholder="Select location areas"
                >
                  <el-option
                    v-for="(location, index) in locationareas"
                    :key="index"
                    :label="location.name"
                    :value="location.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="Landmark (optional)">
                <el-input type="text" v-model="form.landmark"></el-input>
              </el-form-item>
              <div class="actions">
                <el-button
                  type="primary"
                  :loading="loading"
                  @click="updateHomeInfo"
                  :disabled="!form.home_address"
                  >Save changes
                </el-button>
              </div>
            </el-form>
          </div>

          <div class="settings__details margin-top-24" id="password-details">
            <el-header> Password </el-header>
            <el-form
              :model="form"
              label-position="top"
              ref="form"
              v-loading="fetching"
            >
              <el-form-item
                label="Old Password"
                prop="oldPassword"
                :rules="validateField('Password')"
              >
                <el-input :type="type" v-model="form.oldPassword" />
                <div class="show-password" @click="showPassword">
                  {{ btnText }}
                </div>
              </el-form-item>
              <el-form-item
                label="New Password"
                prop="newPassword"
                :rules="validateField('Password')"
              >
                <el-input :type="type" v-model="form.newPassword" />
                <div class="show-password" @click="showPassword">
                  {{ btnText }}
                </div>
              </el-form-item>
              <div v-if="form.newPassword">
                <password-criteria
                  :password="form.newPassword"
                  @success="setDisablePasswordChange"
                />
              </div>
              <div class="actions">
                <el-button
                  type="primary"
                  :loading="reloading"
                  @click="changePassword"
                  :disabled="
                    !form.oldPassword ||
                    !form.newPassword ||
                    passwordChangeDisabled
                  "
                  >Save changes
                </el-button>
              </div>
            </el-form>
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import validations from '~/mixins/validations'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import getSiteMeta from '~/utils/getSiteMeta'
import PasswordCriteria from '~/components/Greenhouse/PasswordCriteria'
import * as greenhouse from '~/request/greenhouse.api'
// import * as actions from "@/store/action-types";

export default {
  name: 'Settings',
  components: { PasswordCriteria },
  mixins: [validations],
  layout: 'greenhouse',
  data() {
    return {
      dialogVisible: false,
      form: {
        first_name: '',
        last_name: '',
        email: '',
        newPassword: '',
        oldPassword: '',
        birthday: '',
        country: '',
        state: '',
        landmark: '',
        location_area_id: null,
        home_address: '',
        phone_number: '',
      },
      fetching: false,
      loading: false,
      reloading: false,
      updating: false,
      type: 'password',
      btnText: 'Show Password',
      passwordChangeDisabled: true,
    }
  },
  head() {
    return {
      title: 'Eden | Settings',
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
        title: 'Eden | Settings',
        description:
          'Your chef-cooked meals, delivered to you. Daily or weekly.',
        url: `https://ouredenlifev2-staging.netlify.app/food_leads`,
        mainImage: 'https://ouredenlifev2-staging.netlify.app/edencardfood.png',
      }
      return getSiteMeta(metaData)
    },
    location() {
      return this.$store.getters.user.eden_location
        ? this.$store.getters.user.eden_location
        : 'NG'
    },
    locationareas() {
      return this.$store.getters.location_areas
    },
    countryCode() {
      return this.location === 'NG' ? '234' : '254'
    },
    userId() {
      return this.$store.getters.user.customer.id
    },
  },
  created() {
    this.fetching = true
    this.getUserProfile()
    setTimeout(() => {
      this.fetching = false
    }, 1500)
    // if (!this.locationareas.length) {
    //   this.$store.dispatch(actions.GET_LOCATION_AREAS_LIST)
    // }
  },
  mounted() {
    mixpanelTrackEvent('profile settings')
  },
  methods: {
    getUserProfile() {
      greenhouse
        .userProfile(this.userId)
        .then((response) => {
          if (response.data.status) {
            const data = response.data.data
            const profile = data.profile_details
            const home_information = data.home_information
            Object.keys(this.form).forEach((key) => {
              this.form[key] = profile[key] || home_information[key]
            })
            this.form.phone_number = this.form.phone_number.substring(3)
          }
        })
        .catch()
    },
    updateProfile() {
      this.$refs.form_profile.validate((valid) => {
        if (!valid) {
          return
        }
        this.updating = true
        let profile_details = {
          profile_details: {
            name: this.form.first_name + ' ' + this.form.last_name,
            email: this.form.email,
            phone_number: this.countryCode + this.form.phone_number,
            birthday: this.form.birthday,
          },
        }
        const section = Object.keys(profile_details)[0]
        greenhouse
          .updateProfile(this.userId, profile_details, section)
          .then((response) => {
            if (response.data.status) {
              this.$message.success(response.data.message)
              this.updating = false
              const storedData = this.$store.getters.getGreenhouseUser
                storedData.customer.name =
                this.form.first_name + ' ' + this.form.last_name
              this.$store.commit('USER', storedData)
            }
          })
          .catch((error) => {
            this.updating = false
            const errorMessage = error.response.data
            if (errorMessage.errors) {
              this.$message.error(errorMessage.errors.join('\n'))
            } else {
              this.$message.error(errorMessage.message)
            }
          })
      })
    },
    updateHomeInfo() {
      this.loading = true
      let home_information = {
        home_information: {
          home_address: this.form.home_address,
          location_area_id: parseInt(this.form.location_area_id),
          landmark: this.form.landmark,
        },
      }
      const section = Object.keys(home_information)[0]
      greenhouse
        .updateProfile(this.userId, home_information, section)
        .then((response) => {
          if (response.data.status) {
            this.$message.success(response.data.message)
            this.loading = false
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
    changePassword() {
      this.reloading = true
      let payload = {
        current_pwd: this.form.oldPassword,
        new_pwd: this.form.newPassword,
      }
      greenhouse
        .changePassword(this.userId, payload)
        .then((response) => {
          this.reloading = false
          this.form.newPassword = ''
          this.form.oldPassword = ''
          const successMessage = response.data.message
          this.$message({
            message: successMessage,
            type: 'success',
          })
        })
        .catch((error) => {
          this.reloading = false
          const errorMessage = error.response.data
          if (errorMessage.errors) {
            this.$message.error(errorMessage.errors.join('\n'))
          } else {
            this.$message.error(errorMessage.message)
          }
        })
    },
    showPassword() {
      if (this.type === 'password') {
        this.type = 'text'
        this.btnText = 'Hide Password'
      } else {
        this.type = 'password'
        this.btnText = 'Show Password'
      }
    },
    setDisablePasswordChange(value) {
      this.passwordChangeDisabled = value
    },
    getCountryFlag(image) {
      if (!image) {
        return ''
      }
      return require(`../../assets/images/greenhouse/flags/${image}.svg`)
    },
    scrollTo(id) {
      document.getElementById(id).scrollIntoView()
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/greenhouse/main.scss';
</style>
