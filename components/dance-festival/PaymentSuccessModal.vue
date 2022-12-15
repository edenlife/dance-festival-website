<template>
  <el-dialog width="35%" :visible="show" @close="$emit('close')">
    <div class="text-center" style="padding: 10px">
      <img
        src="https://res.cloudinary.com/eden-life-inc/image/upload/v1670918890/email-template/thumbs-up-emoji_fg40o2.png"
        style="width: 80px; height: 80px; margin: auto; margin-bottom: 10px"
      />
      <p class="title">Payment successful!</p>
      <p class="body-text">
        Your order will be ready for pick up at our booth at the Electronic
        Dance Festival, on
        <span class="text-primary">20th of December 2021.</span> <br />
        Look out for updates in your email.
      </p>
      <div class="bordered-box">
        <div class="spaced" v-if="brunch.length">
          <span class="period-text">Brunch pickup period:</span>
          <span class="time-text"
            >Thur, Dec 20 at 11:00am <i class="el-icon-right"></i> 1:00pm</span
          >
        </div>
        <div class="top-border spaced" v-if="lunch.length">
          <span class="period-text">Lunch pickup period:</span>
          <span class="time-text"
            >Thur, Dec 20 at 3:00pm <i class="el-icon-right"></i> 5:00pm</span
          >
        </div>
        <div class="top-border spaced" v-if="dinner.length">
          <span class="period-text">Dinner pickup period:</span>
          <span class="time-text"
            >Thur, Dec 20 at 7:00pm <i class="el-icon-right"></i> 9:00pm</span
          >
        </div>
      </div>
      <p class="sub-title">Share menu with friends:</p>
      <span
        style="font-weight: 500"
        class="body-text flex-between dash-bordered"
      >
        <span>{{ link }}</span>
        <span class="text-cursor" @click="copy"
          ><i
            class="el-icon-copy-document text-primary"
            style="margin-right: 5px"
          ></i
          >Copy</span
        >
      </span>
      <br />
      <div class="footer__bottom-social space-social">
        <a
          href="https://twitter.com/ouredenlife"
          target="_blank"
          @click.prevent="
            openSocialMedia('Twitter', 'https://twitter.com/ouredenlife')
          "
        >
          <img
            src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611341806/eden-website-v2/twitter_pxdich.svg"
            alt="twitter"
          />
        </a>
        <a
          href="https://instagram.com/ouredenlife"
          target="_blank"
          @click.prevent="
            openSocialMedia('Instagram', 'https://instagram.com/ouredenlife')
          "
        >
          <img
            src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611341806/eden-website-v2/instagram_erb6q6.svg"
            alt="instagram"
          />
        </a>
        <a
          href="https://facebook.com/ouredenlife"
          target="_blank"
          @click.prevent="
            openSocialMedia('Facebook', 'https://facebook.com/ouredenlife')
          "
        >
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0419 0C4.49595 0 0 4.49595 0 10.0419C0 15.0159 3.62029 19.1352 8.36708 19.9329V12.1369H5.94469V9.33139H8.36708V7.26274C8.36708 4.86251 9.83307 3.55453 11.9746 3.55453C13.0002 3.55453 13.8816 3.63095 14.1375 3.66461V6.17349L12.6522 6.17421C11.4879 6.17421 11.2634 6.7274 11.2634 7.53946V9.32996H14.0417L13.6793 12.1354H11.2634V20C16.2318 19.3953 20.0836 15.171 20.0836 10.039C20.0836 4.49595 15.5877 0 10.0419 0Z"
              fill="#21312A"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/company/ouredenlife/"
          target="_blank"
          @click.prevent="
            openSocialMedia(
              'LinkedIn',
              'https://www.linkedin.com/company/ouredenlife/'
            )
          "
        >
          <img
            src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611341816/eden-website-v2/linkedin_utcbna.svg"
            alt="linkedin"
          />
        </a>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    currentRoute: 'Payment Success Modal',
    link: 'http://activityfest.edenlife.com/',
  }),
  computed: {
    cartItems() {
      return this.$store.state.cart
    },
    brunch() {
      return this.order.filter((item) => item.category_id === 1)
    },
    lunch() {
      return this.order.filter((item) => item.category_id === 2)
    },
    dinner() {
      return this.order.filter((item) => item.category_id === 3)
    },
  },
  methods: {
    unsecuredCopyToClipboard() {
      // Creating textarea element
      let textarea = document.createElement('textarea')
      // Settings its value to the thing you want to copy
      textarea.value = this.link
      // Appending the textarea to body
      document.body.appendChild(textarea)
      // Selecting its content
      textarea.focus()
      textarea.select()
      // Copying the selected content to clipboard
      document.execCommand('copy')
      // Removing the textarea
      document.body.removeChild(textarea)
      this.$message.success('Link copied!')
    },
    openSocialMedia(name, url) {
      mixpanelTrackEvent(`${name} icon clicked - ${this.currentRoute}`)
      window.open(url, '_blank')
    },
    copy() {
      if (window.isSecureContext && navigator.clipboard) {
        navigator.clipboard.writeText(this.link)
        this.$message.success('Link copied!')
      } else {
        this.unsecuredCopyToClipboard()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';
@import '~/assets/scss/greenhouse/main.scss';

::v-deep .el-dialog {
  @include respond(md) {
    width: 95% !important;
  }
}
.bordered-box {
  width: 100%;
  border: 1px solid #e2e9e6;
  border-radius: 8px;
  margin-bottom: 10px;
  @include respond(md) {
    width: 100%;
  }
}
.top-border {
  border-top: 1px solid #f0f4f2;
}
.body-text {
  font-family: 'Cerebri Sans', Times, serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #0f241b;
  padding: 0px 10px 5px;
  word-break: break-word;
}
.period-text {
  font-family: 'Cerebri Sans', Times, serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #4b6358;
}
.time-text {
  font-family: 'Cerebri Sans', Times, serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #1d352a;
}
.sub-title {
  font-family: 'Cerebri Sans', Times, serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 25.6px;
  color: #21312a;
  padding-top: 15px;
  padding-bottom: 5px;
}
.title {
  font-family: 'PT Serif', serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  color: #0f241b;
  margin-bottom: 5px;
}
.text-primary {
  color: #03a84e;
}
.spaced {
  padding: 15px 0px;
  @include respond(md) {
    padding: 15px 10px;
    margin: 0;
    text-align: left;
  }
}
.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dash-bordered {
  border: 1px dashed #6ece8a;
  border-radius: 8px;
  padding: 12px;
}
.space-social {
  a {
    margin-left: 5px;
    margin-right: 5px;
  }
}
.text-cursor {
  cursor: pointer;
}
.d-md-block {
  display: block;
  @include respond(md) {
    display: none;
  }
}
.d-sm-block {
  display: none;
  @include respond(md) {
    display: block;
  }
}
</style>
