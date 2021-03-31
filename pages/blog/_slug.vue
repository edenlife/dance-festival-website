<template>
  <div v-if="Object.keys(postDetails).length !== 0" class="container">
    <div
      class="container--hero"
      :style="getBgColor(postDetails._embedded['wp:term'][0][0].slug)"
    >
      <header class="hero">
        <div class="hero__date">
          <span
            :style="getColor(postDetails._embedded['wp:term'][0][0].slug)"
            class="hero__date-category"
            @click.prevent="
              getCategory(postDetails._embedded['wp:term'][0][0].id)
            "
          >
            {{ postDetails._embedded['wp:term'][0][0].name }}
          </span>
          <span class="dot">&#8226;</span>
          <span>{{ dateFormatter(postDetails.date) }}</span>
        </div>
        <h1 class="hero__title" v-html="postDetails.title.rendered"></h1>
        <div class="hero__author">
          <img :src="postDetails._embedded.author[0].description" alt="" />
          <p>{{ postDetails._embedded.author[0].name }}</p>
        </div>
        <div class="hero__featured">
          <img
            :src="postDetails._embedded['wp:featuredmedia'][0].source_url"
            alt=""
          />
        </div>
      </header>
    </div>
    <!--  -->
    <div class="container--content">
      <div class="content">
        <div class="content__social">
          <p class="content__social-title">Share</p>
          <ShareNetwork
            network="twitter"
            :url="`https://ouredenlife.com${singleUrl}`"
            title=""
            description=""
            class="link"
          >
            <svg
              class="link--twitter"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.1621 5.65593C21.3986 5.99362 20.589 6.2154 19.7601 6.31393C20.6338 5.79136 21.2878 4.96894 21.6001 3.99993C20.7801 4.48793 19.8811 4.82993 18.9441 5.01493C18.3147 4.34151 17.4804 3.89489 16.571 3.74451C15.6616 3.59413 14.728 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0772 6.14972C11.6979 6.98983 11.6068 7.93171 11.8181 8.82893C10.1552 8.74558 8.52838 8.31345 7.04334 7.56059C5.55829 6.80773 4.24818 5.75097 3.19805 4.45893C2.82634 5.09738 2.63101 5.82315 2.63205 6.56193C2.63205 8.01193 3.37005 9.29293 4.49205 10.0429C3.82806 10.022 3.17869 9.84271 2.59805 9.51993V9.57193C2.59825 10.5376 2.93242 11.4735 3.5439 12.221C4.15538 12.9684 5.00653 13.4814 5.95305 13.6729C5.33667 13.84 4.69036 13.8646 4.06305 13.7449C4.32992 14.5762 4.85006 15.3031 5.55064 15.824C6.25123 16.3449 7.09718 16.6337 7.97005 16.6499C7.10253 17.3313 6.10923 17.8349 5.04693 18.1321C3.98464 18.4293 2.87418 18.5142 1.77905 18.3819C3.69075 19.6114 5.91615 20.264 8.18905 20.2619C15.8821 20.2619 20.0891 13.8889 20.0891 8.36193C20.0891 8.18193 20.0841 7.99993 20.0761 7.82193C20.8949 7.23009 21.6017 6.49695 22.1631 5.65693L22.1621 5.65593Z"
                fill=""
              />
            </svg>
          </ShareNetwork>
          <a
            class="link"
            :href="`https://www.facebook.com/sharer/sharer.php?u=https://ouredenlife.com${singleUrl}`"
            target="_blank"
          >
            <svg
              class="link--facebook"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0419 2C6.49595 2 2 6.49595 2 12.0419C2 17.0159 5.62029 21.1352 10.3671 21.9329V14.1369H7.94469V11.3314H10.3671V9.26274C10.3671 6.86251 11.8331 5.55453 13.9746 5.55453C15.0002 5.55453 15.8816 5.63095 16.1375 5.66461V8.17349L14.6522 8.17421C13.4879 8.17421 13.2634 8.7274 13.2634 9.53946V11.33H16.0417L15.6793 14.1354H13.2634V22C18.2318 21.3953 22.0836 17.171 22.0836 12.039C22.0836 6.49595 17.5877 2 12.0419 2Z"
                fill=""
              />
            </svg>
          </a>
          <ShareNetwork
            network="LinkedIn"
            :url="`https://ouredenlife.com${singleUrl}`"
            title=""
            description=""
            class="link"
          >
            <svg
              class="link--linkedin"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.335 18.339H15.67V14.162C15.67 13.166 15.65 11.884 14.28 11.884C12.891 11.884 12.679 12.968 12.679 14.089V18.339H10.013V9.75H12.573V10.92H12.608C12.966 10.246 13.836 9.533 15.136 9.533C17.836 9.533 18.336 11.311 18.336 13.624V18.339H18.335ZM7.003 8.575C6.79956 8.57526 6.59806 8.53537 6.41006 8.45761C6.22207 8.37984 6.05127 8.26574 5.90746 8.12184C5.76365 7.97793 5.64965 7.80706 5.57201 7.61901C5.49437 7.43097 5.4546 7.22944 5.455 7.026C5.4552 6.71983 5.54618 6.4206 5.71644 6.16615C5.8867 5.91169 6.12859 5.71343 6.41153 5.59645C6.69447 5.47947 7.00574 5.44902 7.30598 5.50894C7.60622 5.56886 7.88196 5.71648 8.09831 5.93311C8.31466 6.14974 8.46191 6.42566 8.52145 6.72598C8.58099 7.0263 8.55013 7.33753 8.43278 7.62032C8.31543 7.9031 8.11687 8.14474 7.86219 8.31467C7.60751 8.4846 7.30817 8.5752 7.002 8.575H7.003ZM8.339 18.339H5.666V9.75H8.34V18.339H8.339ZM19.67 3H4.329C3.593 3 3 3.58 3 4.297V19.703C3 20.42 3.594 21 4.328 21H19.666C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3H19.669H19.67Z"
                fill=""
              />
            </svg>
          </ShareNetwork>
          <ShareNetwork
            network="whatsapp"
            :url="`https://ouredenlife.com/${singleUrl}`"
            title=""
            description=""
            class="link"
          >
            <svg
              class="link--whatsapp"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.00401 22L3.35601 17.032C2.46515 15.5049 1.99711 13.768 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.2328 22.0029 8.49667 21.5352 6.97001 20.645L2.00401 22ZM8.39101 7.308C8.26188 7.31602 8.13569 7.35003 8.02001 7.408C7.91153 7.46943 7.81251 7.54622 7.72601 7.636C7.60601 7.749 7.53801 7.847 7.46501 7.942C7.09542 8.423 6.89662 9.01342 6.90001 9.62C6.90201 10.11 7.03001 10.587 7.23001 11.033C7.63901 11.935 8.31201 12.89 9.20101 13.775C9.41501 13.988 9.62401 14.202 9.84901 14.401C10.9524 15.3725 12.2673 16.073 13.689 16.447L14.258 16.534C14.443 16.544 14.628 16.53 14.814 16.521C15.1053 16.506 15.3896 16.4271 15.647 16.29C15.813 16.202 15.891 16.158 16.03 16.07C16.03 16.07 16.073 16.042 16.155 15.98C16.29 15.88 16.373 15.809 16.485 15.692C16.568 15.606 16.64 15.505 16.695 15.39C16.773 15.227 16.851 14.916 16.883 14.657C16.907 14.459 16.9 14.351 16.897 14.284C16.893 14.177 16.804 14.066 16.707 14.019L16.125 13.758C16.125 13.758 15.255 13.379 14.724 13.137C14.668 13.1126 14.608 13.0987 14.547 13.096C14.4786 13.089 14.4095 13.0967 14.3443 13.1186C14.2791 13.1405 14.2193 13.1761 14.169 13.223V13.221C14.164 13.221 14.097 13.278 13.374 14.154C13.3325 14.2098 13.2754 14.2519 13.2098 14.2751C13.1443 14.2982 13.0733 14.3013 13.006 14.284C12.9409 14.2666 12.877 14.2445 12.815 14.218C12.691 14.166 12.648 14.146 12.563 14.109L12.558 14.107C11.9859 13.8572 11.4562 13.5198 10.988 13.107C10.862 12.997 10.745 12.877 10.625 12.761C10.2316 12.3842 9.88873 11.958 9.60501 11.493L9.54601 11.398C9.50364 11.3342 9.46937 11.2653 9.44401 11.193C9.40601 11.046 9.50501 10.928 9.50501 10.928C9.50501 10.928 9.74801 10.662 9.86101 10.518C9.9551 10.3983 10.0429 10.2738 10.124 10.145C10.242 9.955 10.279 9.76 10.217 9.609C9.93701 8.925 9.64701 8.244 9.34901 7.568C9.29001 7.434 9.11501 7.338 8.95601 7.319C8.90201 7.313 8.84801 7.307 8.79401 7.303C8.65972 7.29633 8.52515 7.29766 8.39101 7.307V7.308Z"
                fill=""
              />
            </svg>
          </ShareNetwork>
          <ShareNetwork
            network="Email"
            :url="`https://ouredenlife.com${singleUrl}`"
            title=""
            description=""
            class="link"
          >
            <svg
              class="link--email"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.4177 6.21703C5.16262 8.54168 9.9791 12.6314 11.3947 13.9066C11.5848 14.0788 11.7886 14.1663 12.0002 14.1663C12.2114 14.1663 12.4148 14.0796 12.6045 13.9083C14.0213 12.6318 18.8378 8.54168 21.5827 6.21703C21.7536 6.07258 21.7797 5.81867 21.6413 5.64207C21.3215 5.23398 20.8446 5 20.3335 5H3.66688C3.15582 5 2.67891 5.23398 2.3591 5.64211C2.22075 5.81867 2.2468 6.07258 2.4177 6.21703Z"
                fill=""
              />
              <path
                d="M21.7583 7.47635C21.6106 7.4076 21.4369 7.43158 21.314 7.53658C18.2699 10.1171 14.3848 13.4249 13.1625 14.5263C12.4764 15.1456 11.5243 15.1456 10.8366 14.5255C9.53375 13.3516 5.17094 9.64267 2.68602 7.53654C2.5623 7.43154 2.38816 7.40838 2.24168 7.47631C2.09441 7.5447 2 7.69201 2 7.85435V18.3329C2 19.2521 2.74746 19.9995 3.66668 19.9995H20.3334C21.2525 19.9995 22 19.2521 22 18.3329V7.85435C22 7.69201 21.9056 7.54431 21.7583 7.47635Z"
                fill=""
              />
            </svg>
          </ShareNetwork>
        </div>
        <div class="content__slug" v-html="postDetails.content.rendered"></div>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </div>
    </div>
    <!--  -->
    <div class="container--subscribe">
      <div v-if="!user_subscribed" class="subscribe">
        <h3>Subscribe to the Good Life</h3>
        <p>Get our latest posts straight in your inbox.</p>
        <mailchimp-subscribe
          url="https://ouredenlife.us1.list-manage.com/subscribe/post-json"
          :user-id="userId"
          :list-id="listId"
          @success="onSuccess"
        >
          <template #default="{ subscribe, setEmail, loading }">
            <form class="form" @submit.prevent="subscribe">
              <div class="form__input">
                <input
                  type="email"
                  placeholder="Email address"
                  @input="setEmail($event.target.value)"
                />
              </div>
              <button type="submit" class="form__btn" :disabled="loading">
                Subscribe
              </button>
            </form>
          </template>
        </mailchimp-subscribe>
      </div>
      <div v-else class="subscribe subscribe__success">
        <p class="subscribe__success-text">
          Thanks for subscribing to the Good Life 💚
        </p>
      </div>
    </div>
    <!--  -->
    <div class="container--related">
      <div class="related">
        <h3 class="related__title">Related posts</h3>
        <div class="related__box">
          <div v-for="(item, i) in relatedPosts" :key="i">
            <nuxt-link
              :to="{
                name: 'blog-slug',
                params: { slug: item.slug + '?' + item.id },
              }"
            >
              <figure class="related__item">
                <img
                  class="related__item-img"
                  :src="item._embedded['wp:featuredmedia'][0].source_url"
                  alt=""
                />
                <figcaption class="related__item-details">
                  <h5 v-html="truncate(item.title.rendered, 60)"></h5>
                  <p v-html="truncate(item.excerpt.rendered, 170)"></p>

                  <div class="related__item-date">
                    <span
                      :style="getColor(item._embedded['wp:term'][0][0].slug)"
                      @click.prevent="
                        getCategory(item._embedded['wp:term'][0][0].id)
                      "
                    >
                      {{ item._embedded['wp:term'][0][0].name }}
                    </span>
                    <span class="dot">&#8226;</span>
                    <span>{{ dateFormatter(item.date) }}</span>
                  </div>
                  <div class="related__item-author">
                    <img
                      :src="postDetails._embedded.author[0].description"
                      alt=""
                    />
                    <p>{{ item._embedded.author[0].name }}</p>
                  </div>
                </figcaption>
              </figure>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
  </div>

  <div v-else class="post__loading">
    <Loader />
    <p>Loading article...</p>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import dayjs from 'dayjs'
import MailchimpSubscribe from 'vue-mailchimp-subscribe'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import { getNavigationColor } from '~/static/functions'

export default {
  components: {
    Loader: () => import('@/components/Loader.vue'),
    MailchimpSubscribe,
  },
  mixins: [validationMixin],
  data() {
    return {
      userId: '',
      listId: '',
      user_subscribed: false,
      loading: false,
      form: {
        email: null,
      },
      postDetails: {},
      navbar: '',
      relatedPosts: [],
      blogId: null,
      singleUrl: '',
    }
  },
  validations: {
    form: {
      email: { required, email },
    },
  },
  async mounted() {
    this.singleUrl = this.$route.fullPath
    const slug = this.$route.params.slug
    this.blogId = slug.split('?')[1]
    await this.getSingleArticle(this.blogId)
    this.userId = process.env.MAILCHIMP_USERID
    this.listId = process.env.MAILCHIMP_LISTID
  },
  methods: {
    getNavigationColor,
    dateFormatter(date) {
      return dayjs(date).format('MMMM D, YYYY')
    },
    truncate(value, length) {
      if (!value) return ''
      value = value.toString()
      if (value.length > length) {
        return value.substring(0, length) + '...'
      } else {
        return value
      }
    },
    onSuccess() {
      // handle success
      this.user_subscribed = true
    },
    async getSingleArticle(id) {
      this.postDetails = await fetch(
        `https://wordpress.edenlife.ng/wp-json/wp/v2/posts/${id}?_embed=1`
      ).then((res) => res.json())
      console.log(this.postDetails)
      this.navbar = document.querySelector('#navigation-container')
      const category = this.postDetails.categories[0]
      this.getRelatedPost(category)
    },
    async getRelatedPost(category) {
      const posts = await fetch(
        `https://wordpress.edenlife.ng/wp-json/wp/v2/posts?categories=${category}&_embed=1`
      ).then((res) => res.json())
      const allRelatedPost = posts
        .filter(
          (el) => el.status === 'publish' && el.id !== parseInt(this.blogId)
        )
        .map(
          ({ id, slug, title, excerpt, date, tags, content, _embedded }) => ({
            id,
            slug,
            title,
            excerpt,
            date,
            tags,
            content,
            _embedded,
          })
        )
      this.relatedPosts = allRelatedPost.slice(0, 3)
      // TODO
      // N:B randomize related post and splice
    },
    openSocialMedia(name, url) {
      mixpanelTrackEvent(`${name} icon clicked - Blog`)
      window.open(url, '_blank')
    },
    getCategory(id) {
      this.$router.push('/blog')
      this.navbar.style.backgroundColor = '#F6FFFA'
      this.$store.commit('blogNavId', id)
    },
    getColor(slug) {
      switch (slug) {
        case 'food':
          return {
            color: '#03A84E',
          }
        case 'eden-101':
          return {
            color: '#00C0EA',
          }
        case 'home':
          return {
            color: '#FF9D00',
          }
        case 'life-is-good':
          return {
            color: '#5571FF',
          }
        default:
          console.log('default')
      }
    },
    getBgColor(category) {
      switch (category) {
        case 'food':
          this.navbar.style.backgroundColor = '#EBFFF5'
          return {
            'background-color': '#EBFFF5',
          }
        case 'home':
          this.navbar.style.backgroundColor = '#FFF9F5'
          return {
            'background-color': '#FFF9F5',
          }
        case 'life-is-good':
          this.navbar.style.backgroundColor = '#E5E9FC'
          return {
            'background-color': '#E5E9FC',
          }
        case 'eden-101':
          this.navbar.style.backgroundColor = '#EBFAFF'

          return {
            'background-color': '#EBFAFF',
          }
        default:
          this.navbar.style.backgroundColor = '#F6FFFA'
          return {
            'background-color': '#F6FFFA',
          }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_singleblog.scss';
</style>

<style lang="scss">
@import '@/assets/style.scss';

.content {
  &__slug {
    color: color(eden-neutral-1);
    h2,
    h3,
    h4,
    h5 {
      @include font-size(2xl);
      margin-bottom: $gap * 2.4;
      margin-top: $gap * 4;
      line-height: 31px;
    }
    p {
      @include font-size(lg);
      margin-bottom: $gap * 2.4;
      line-height: 29px;
    }
    figure {
      margin-top: $gap * 2;
      img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
      }
      video {
        width: 100%;
        height: 100%;
        border-radius: 8px;
      }
      margin-bottom: $gap * 4;
      margin-top: $gap * 2;
      figcaption {
        text-align: center;
        margin-top: $gap;
      }
    }
    ul,
    ol {
      li {
        @include font-size(lg);
        line-height: 29px;
      }
    }
    a {
      color: color(eden-green-primary);
      &:hover {
        text-decoration: underline;
        color: color(eden-green-primary);
      }
    }

    .mc4wp-form,
    .mc4wp-form-128 {
      background-color: color(eden-green-senary);
      border-radius: 8px;
      background-image: url('~@/assets/images/blog-bg5.svg');
      background-position: top 45% right 23%;
      background-repeat: no-repeat;
      .mc4wp-form-fields {
        h3 {
          text-align: center;
          padding-top: $gap * 5;
          margin-bottom: $gap + 2;
        }
        p {
          @include font-size(base);
          line-height: 26px;
          text-align: center;
          margin-bottom: $gap * 4.4;
        }
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-bottom: $gap * 5;
        }
        input[type='email'] {
          border: 1px solid #c9d0cd;
          border-radius: 4px;
          background-color: color(eden-neutral-7);
          color: color(eden-neutral-1);
          padding: $gap + 4 $gap + 6;
          @include font-size(lg);
          @include font-family(cerebri);
          width: 350px;
          height: 48px;
          &::placeholder {
            color: color(eden-neutral-4);
            @include font-weight(light);
          }
          &:focus {
            outline: none;
            border: 1px solid #21312a;
          }
          &.has-error {
            border: 1px solid color(eden-red);
          }
        }

        .slug--form--btn {
          margin-left: $gap + 2;
          align-self: center;
          line-height: 23px;
          @include font-size(lg);
          background-color: color(eden-green-primary);
          color: color(eden-neutral-7);
          border-radius: 4px;
          transition: all 0.4s ease-in-out;
          padding: $gap * 1.2 $gap * 2.2;
          outline: none;
          border: none;
          &:hover {
            box-shadow: 0px 2px 4px rgba(3, 168, 78, 0.239);
            background-color: color(eden-green-250);
            color: color(eden-neutral-7);
          }
          &:active {
            background-image: radial-gradient(
              circle at center right,
              rgba(0, 141, 64, 0.1) 50%,
              #008d40 50%
            );
          }
        }
      }
    }

    .cats,
    .tags {
      display: none;
    }
  }
  @include respond(md) {
    &__slug {
      h2,
      h3,
      h4,
      h5 {
        @include font-size(xl);
        margin-bottom: $gap + 6;
        margin-top: $gap * 4;
        line-height: 31px;
      }
      p {
        @include font-size(base);
        line-height: 26px;
        margin-bottom: $gap + 6;
      }
      figure {
        margin-bottom: $gap * 3.2;
        margin-top: $gap + 6;
      }
      ul,
      ol {
        width: 90%;
        margin: 0 auto;

        li {
          @include font-size(base);
          line-height: 26px;
          margin-bottom: $gap + 6;
        }
      }
      .mc4wp-form,
      .mc4wp-form-128 {
        padding: $gap * 3 $gap $gap * 2 $gap;
        background-position: top 10% center;
        h3 {
          padding-top: $gap * 13;
          @include font-size(xl);
          line-height: 20px;
        }

        .mc4wp-form-fields {
          div {
            flex-direction: column;
          }
          input[type='email'] {
            width: 100%;
          }
          .slug--form--btn {
            display: flex;
            justify-content: center;
            margin-left: 0px;
            margin-top: $gap + 6;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
