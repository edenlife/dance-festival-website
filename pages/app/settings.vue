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
              <el-menu-item index="1-2" @click="scrollTo('home-details', '')"
                >House Information</el-menu-item
              >
              <el-menu-item
                index="1-3"
                @click="scrollTo('password-details', '')"
                >Password</el-menu-item
              >
            </el-menu-item-group>
          </el-menu>
        </el-aside>

        <el-main>
          <h1 class="hidden-md margin-bottom-32">Profile Settings</h1>
          <div id="profile-details" class="settings__details">
            <el-header> Profile </el-header>
            <el-form
              ref="form_profile"
              v-loading="fetching"
              :model="form"
              label-position="top"
            >
              <el-row :gutter="20">
                <el-col :md="12">
                  <el-form-item
                    label="First name"
                    prop="first_name"
                    :rules="validateName()"
                  >
                    <el-input v-model="form.first_name" type="text"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :md="12">
                  <el-form-item
                    label="Last name"
                    prop="last_name"
                    :rules="validateName()"
                  >
                    <el-input v-model="form.last_name" type="text"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :md="12">
                  <el-form-item label="Email address" prop="email">
                    <el-input
                      v-model="form.email"
                      type="text"
                      :readonly="true"
                      disabled
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
              <el-row>
                <el-col :span="24">
                  <el-form-item label="Date of birth" prop="birthday">
                    <el-date-picker
                      v-model="form.birthday"
                      :clearable="false"
                      format="dd MMM, yyyy"
                      value-format="yyyy-MM-dd"
                      default-value="2004-12-31"
                      :picker-options="{
                        disabledDate: disabledDates,
                      }"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <div class="actions">
                <el-button
                  type="primary"
                  :loading="updating"
                  @click="updateProfile('Update profile clicked')"
                  >Save changes
                </el-button>
              </div>
            </el-form>
          </div>

          <div id="home-details" class="settings__details margin-top-24">
            <div class="el-header d-block">
              <h1>Home Information</h1>
              <p class="el-text">
                This is where your services will be delivered to.
              </p>
            </div>
            <el-form
              ref="form"
              v-loading="fetching"
              :model="form"
              label-position="top"
            >
              <el-form-item
                label="Address"
                :rules="validateField('Home Address')"
              >
                <el-input v-model="form.home_address" type="text"></el-input>
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
                <el-input v-model="form.landmark" type="text"></el-input>
              </el-form-item>
              <div class="actions">
                <el-button
                  type="primary"
                  :loading="loading"
                  :disabled="!form.home_address"
                  @click="updateHomeInfo('Update home info clicked')"
                  >Save changes
                </el-button>
              </div>
            </el-form>
          </div>

          <div id="password-details" class="settings__details margin-top-24">
            <el-header> Password </el-header>
            <el-form
              ref="form"
              v-loading="fetching"
              :model="form"
              label-position="top"
            >
              <el-form-item
                label="Old Password"
                prop="oldPassword"
                :rules="validateField('Password')"
              >
                <el-input v-model="form.oldPassword" :type="type" />
                <div class="show-password" @click="showPassword">
                  {{ btnText }}
                </div>
              </el-form-item>
              <el-form-item
                label="New Password"
                prop="newPassword"
                :rules="validateField('Password')"
              >
                <el-input v-model="form.newPassword" :type="type" />
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
              <div class="actions margin-top-14">
                <el-button
                  type="primary"
                  :loading="reloading"
                  :disabled="
                    !form.oldPassword ||
                    !form.newPassword ||
                    passwordChangeDisabled
                  "
                  @click="changePassword('Change passord clicked')"
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
// import * as actions from "@/store/action-types";

export default {
  name: 'Settings',
  components: { PasswordCriteria },
  mixins: [validations],
  layout: 'greenhouse',
  middleware: ['user'],
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
      fetching: true,
      loading: false,
      reloading: false,
      locationareas: [],
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
      return this.$auth.user.eden_location
        ? this.$auth.user.eden_location
        : 'NG'
    },
    countryCode() {
      return this.location === 'NG' ? '234' : '254'
    },
    greenhouseUserId() {
      return this.$auth.user.id
    },
  },
  created() {
    this.fetching = true
  },
  mounted() {
    mixpanelTrackEvent('Profile settings page')
    this.getUserProfile()
    this.getLocationAreas()
  },
  methods: {
    getUserProfile() {
      this.$axios
        .get(`customers/${this.greenhouseUserId}/profile`)
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
          this.fetching = false
        })
        .catch((error) => {
          if (error.response.status === 401) {
            this.logOut()
          }
          this.fetching = false
        })
    },
    updateProfile(label) {
      mixpanelTrackEvent(label)
      this.$refs.form_profile.validate((valid) => {
        if (!valid) {
          return
        }
        this.updating = true
        const profile_details = {
          profile_details: {
            name: this.form.first_name + ' ' + this.form.last_name,
            email: this.form.email,
            phone_number: this.countryCode + this.form.phone_number,
            birthday: this.form.birthday,
          },
        }
        const section = Object.keys(profile_details)[0]
        this.$axios
          .patch(
            `customers/${this.greenhouseUserId}/profile?section=${section}`,
            profile_details[section]
          )
          .then((response) => {
            if (response.data.status) {
              this.$message.success(response.data.message)
              this.updating = false
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
    updateHomeInfo(label) {
      mixpanelTrackEvent(label)
      this.loading = true
      const home_information = {
        home_information: {
          home_address: this.form.home_address,
          location_area_id: parseInt(this.form.location_area_id),
          landmark: this.form.landmark,
        },
      }
      const section = Object.keys(home_information)[0]
      this.$axios
        .patch(
          `customers/${this.greenhouseUserId}/profile?section=${section}`,
          home_information[section]
        )
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
    changePassword(label) {
      mixpanelTrackEvent(label)
      this.reloading = true
      const payload = {
        current_pwd: this.form.oldPassword,
        new_pwd: this.form.newPassword,
      }
      this.$axios
        .put(`customers/${this.greenhouseUserId}/change_password`, payload)
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
    getLocationAreas() {
      this.$axios
        .get('locationareas')
        .then((response) => {
          if (response.data.status) {
            this.locationareas = response.data.data
          }
        })
        .catch()
    },
    disabledDates(time) {
      return time.getTime() > new Date('2004-12-31').getTime()
    },
    logOut() {
      this.$message.success('You are logged out.')
      this.$router.push({ name: 'login' })
      this.$auth.setUser(null)
      this.$auth.setUserToken(null)
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/greenhouse/main.scss';
</style>
