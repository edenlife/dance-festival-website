<template>
  <div class="container">
    <div class="container--hero">
      <header class="hero">
        <div class="hero__title">
          <h1>We make the <br />good life happen</h1>
          <p>
            Excellent customer service, top-notch service providers, and
            easy-to-use technology. That's our recipe for brewing you a
            stress-free life.
          </p>
          <div class="hero__button">
            <a
              href="https://edenlife.notion.site/Careers-at-Eden-Life-d11c387e84a043fca66001dcf67c70e3"
              target="_blank"
              class="hero__button-solid"
              @click="trackLink('Careers')"
            >
              Become Humaan - Join Eden Life
            </a>
          </div>
        </div>
        <div class="hero__img">
          <img
            src="https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611837115/eden-website-v2/our-story_bppb7m.png"
            alt="our story"
            class="hero__img-bg1"
          />
        </div>
      </header>
    </div>

    <div class="container--description">
      <section class="description">
        <div class="description__card cause">
          <h3>❓</h3>
          <h5>The Cause</h5>
          <p>
            We believe that the service industry in Nigeria is broken, and that
            many people resignedly accept bad services from barely trained
            artisans because...well, what can they do?
          </p>
        </div>
        <div class="description__card effect">
          <h3>🤔</h3>
          <h5>The Effect</h5>
          <p>
            This state of the market allows customers to pay less, as many
            service providers offer the most mediocre experience they can get
            away with. And so, a kakonomy is established. Everyone - customer,
            service provider alike - suffer for it.
          </p>
        </div>
        <div class="description__card change">
          <h3>🚀</h3>
          <h5>The Change</h5>
          <p>
            Eden is our redesign of the service industry. We're building an
            efficient world where customers get food, laundry, and home cleaning
            done, with no friction, by our highly trained service providers.
          </p>
        </div>
      </section>
    </div>

    <div class="container--humaans">
      <section class="humaans">
        <div class="humaans__title">
          <h3>Meet the <span>Humaans 💚</span></h3>
        </div>
        <div ref="latest-container" class="humaans__gallery">
          <figure v-for="item in paginatedHumaans" :key="item.id">
            <div
              class="humaans__gallery-img"
              :class="{ empty: item.image.includes('empty') }"
            >
              <img :src="item.image" :alt="item.name" />
            </div>
            <figcaption>
              <p>
                {{ item.name }}
              </p>
              <p>{{ item.role }}</p>
            </figcaption>
          </figure>
        </div>
        <!-- <div class="posts__pagination">
          <Pagination :pagination="pagination" @paginate="controlPage" />
        </div> --><client-only>
          <Pagination :pagination="pagination" @paginate="controlPage" />
        </client-only>
      </section>
    </div>

    <div ref="join-eden" class="container--opening">
      <section class="opening">
        <div class="opening__title">
          <h3>Join the Humaans</h3>
          <p>
            Interested in joining the team? Check out the available roles
            <a
              href="https://edenlife.notion.site/Careers-at-Eden-Life-d11c387e84a043fca66001dcf67c70e3"
              target="_blank"
              @click="trackLink('Careers')"
            >
              here
            </a>
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import humaans from '@/static/humaans'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
export default {
  components: {
    Pagination: () => import('@/components/Pagination.vue'),
  },
  data() {
    return {
      humaans: humaans.humaans,
      paginatedHumaans: [],
      pagination: {},
    }
  },
  mounted() {
    mixpanelTrackEvent('About Us page')
    this.setData()
  },
  methods: {
    scrollTo(ref) {
      mixpanelTrackEvent('Join Eden clicked - contact page')
      this.$refs[ref].scrollIntoView()
    },
    trackLink(name) {
      mixpanelTrackEvent(`${name} link clicked (footer - ${this.currentRoute})`)
    },
    setData() {
      if (this.humaans.length) {
        console.log(this.humaans.length);
        const quotient = Math.floor(this.humaans.length / 12)
        const remainder = this.humaans.length % 12
        remainder > 0
          ? (this.pageCount = quotient + 1)
          : (this.pageCount = quotient)
        this.pagination = {
          last_page: this.pageCount,
          current_page: 1,
        }
        this.paginatedHumaans = this.humaans.slice(0, 12)
      }
    },
    controlPage(pageNum) {
      const min = pageNum * 12 - 12
      this.paginatedHumaans = this.humaans.slice(min, pageNum * 12)
      this.pagination.current_page = pageNum
      this.$refs['latest-container'].scrollIntoView()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_about.scss';
</style>
