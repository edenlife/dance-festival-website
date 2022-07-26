<template>
  <div class="gh-container">
    <div class="home">
      <div class="home__banner">
        <h1>Download the Eden Life app to continue</h1>
        <div class="hidden-lg margin-top-14">
          <p>
            Scan the QR code with your phone’s camera to <br />
            download our app and start your easy life with Eden.
          </p>
          <div class="mt-2">
            <img
              src="@/assets/images/greenhouse/QR-code.svg"
              alt="Garden App qrcode"
              width="120px"
            />
          </div>
        </div>
        <div class="hidden-md margin-top-14">
          <p>Download our app and start your easy life with Eden.</p>
          <div class="mt-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.ouredenlife.app"
              @click="openPlayStore"
            >
              <img
                src="@/assets/images/greenhouse/Google Play Store.svg"
                alt="Garden garden store"
              />
            </a>
          </div>
          <div class="margin-top-14">
            <a
              href="https://apps.apple.com/us/app/eden-life/id1482373755?ls=1"
              @click="openAppleStore"
            >
              <img
                src="@/assets/images/greenhouse/App Store.svg"
                alt="Garden App store"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="home__services">
        <el-row :gutter="20">
          <el-col :md="12">
            <el-card shadow="never" class="home__services-card orange-bg">
              <h5>Manage your services</h5>
              <p>
                Start a food plan, a home cleaning plan, or a laundry plan.
                Pause when you leave town.
              </p>
              <div class="mt-2">
                <img
                  src="@/assets/images/greenhouse/manage_service.svg"
                  alt="Garden"
                />
              </div>
            </el-card>
          </el-col>
          <el-col :md="12">
            <el-card shadow="never" class="home__services-card purple-bg w-100">
              <h5>Track your service schedule</h5>
              <p>
                See your service delivery times, upcoming services and your
                service history.
              </p>
              <div class="mt-2">
                <img
                  src="@/assets/images/greenhouse/track_service.svg"
                  alt="Garden"
                />
              </div>
            </el-card>
          </el-col>
        </el-row>
        <div class="mt-2">
          <el-row :gutter="20">
            <el-col :md="12">
              <el-card shadow="never" class="home__services-card blue-bg">
                <h5>Talk to your Gardener</h5>
                <p>
                  Think of them like your Executive assistant at Eden. They'll
                  answer your questions and make sure Eden is working for you.
                </p>
                <div class="mt-2">
                  <img
                    src="@/assets/images/greenhouse/talk_to_gardener.svg"
                    alt="Garden"
                  />
                </div>
              </el-card>
            </el-col>
            <el-col :md="12">
              <el-card
                shadow="never"
                class="home__services-card green-bg w-100"
              >
                <h5>Pick your meals</h5>
                <p>
                  Pick your favourite meals from our dynamic menu and never have
                  to worry about market runs or meal prep..
                </p>
                <div class="mt-2">
                  <img
                    src="@/assets/images/greenhouse/meal_selection.svg"
                    alt="Garden"
                  />
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
      <div id="contactBtn" class="home__chat">
        <el-popover placement="bottom" width="200" trigger="click">
          <div class="home__chat-trigger">
            <p @click="launchIntercom()">
              <span class="margin-right-9"
                ><img
                  src="@/assets/images/greenhouse/message_chat.svg"
                  alt="icon"
              /></span>
              Live Chat with Us
            </p>
            <p>
              <a href="mailto:support@edenlife.ng">
                <span class="margin-right-9">
                  <img src="@/assets/images/greenhouse/Email.svg" alt="icon" />
                </span>
                Send Us Email
              </a>
            </p>
          </div>
          <el-button
            v-if="submitted"
            slot="reference"
            class="home__chat-icon"
            @click="showContact()"
          >
            <p>
              <img
                src="@/assets/images/greenhouse/question - help.svg"
                alt="icon"
                class="margin-right-9"
              />
              Contact Us
            </p>
          </el-button>
          <el-button
            v-else
            slot="reference"
            class="home__chat-icon"
            @click="closeIcon()"
          >
            <p>
              <span>
                <img
                  src="@/assets/images/greenhouse/close.svg"
                  alt="icon"
                  class="margin-right-9"
                />
              </span>
              Close
            </p>
          </el-button>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
import validations from '~/mixins/validations'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import getSiteMeta from '~/utils/getSiteMeta'

export default {
  name: 'Home',
  mixins: [validations],
  layout: 'greenhouse',
  middleware: ['user'],
  data() {
    return {
      submitted: true,
    }
  },
  head() {
    return {
      title: 'Eden | Home',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://ouredenlifev2-staging.netlify.app/home`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        title: 'Eden | Home',
        description:
          'Your chef-cooked meals, delivered to you. Daily or weekly.',
        url: `https://ouredenlifev2-staging.netlify.app/home`,
        mainImage: 'https://ouredenlifev2-staging.netlify.app/edencardfood.png',
      }
      return getSiteMeta(metaData)
    },
    location() {
      return this.$store.getters.getLocation
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    mixpanelTrackEvent('Greenhouse home page')
  },
  methods: {
    handleScroll() {
      const contactBtn = document.getElementById('contactBtn')
      if (window.onscroll > 20 || window.onscroll > 20) {
        contactBtn.style.display = 'block'
      }
    },
    openPlayStore() {
      mixpanelTrackEvent('Get the app(playstore) clicked')
    },
    openAppleStore() {
      mixpanelTrackEvent('Get the app(applestore) clicked')
    },
    showContact() {
      this.submitted = false
    },
    closeIcon() {
      this.submitted = true
    },
    launchIntercom() {
      this.$intercom('show')
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/greenhouse/main.scss';
</style>
