<template>
  <div class="container">
    <div class="container--hero">
      <header class="hero">
        <div class="hero__title">
          <h1>We Make The <br />Good Life Happen</h1>
          <p>
            Excellent customer service, top-notch service providers, and
            easy-to-use technology. That's our recipe for brewing you a
            stress-free life.
          </p>
          <div class="hero__button">
            <button type="button" class="hero__button-solid">
              Become Humaan - Join Eden Life
            </button>
          </div>
        </div>
        <div class="hero__img">
          <img
            src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611837115/eden-website-v2/our-story_bppb7m.png"
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
        <div class="humaans__gallery">
          <figure v-for="item in humaans" :key="item.id">
            <div class="humaans__gallery-img">
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
      </section>
    </div>

    <div class="container--opening">
      <section class="opening">
        <div class="opening__title">
          <h3>Join the Humaans</h3>
          <p>
            Interested in joining the team? Check out the available roles below.
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      humaans: [
        {
          id: 1,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/v1611838569/eden-website-v2/onyinye_ftdgpp.png',
          name: 'Onyinye Nnedolisa',
          role: 'Product',
        },
        {
          id: 2,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/v1611838569/eden-website-v2/onyinye_ftdgpp.png',
          name: 'Onyinye Nnedolisa',
          role: 'Product',
        },
        {
          id: 3,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/v1611838569/eden-website-v2/onyinye_ftdgpp.png',
          name: 'Onyinye Nnedolisa',
          role: 'Product',
        },
        {
          id: 4,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/v1611838569/eden-website-v2/onyinye_ftdgpp.png',
          name: 'Onyinye Nnedolisa',
          role: 'Product',
        },
        {
          id: 5,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/v1611838569/eden-website-v2/onyinye_ftdgpp.png',
          name: 'Onyinye Nnedolisa',
          role: 'Product',
        },
        {
          id: 6,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/v1611838569/eden-website-v2/onyinye_ftdgpp.png',
          name: 'Onyinye Nnedolisa',
          role: 'Product',
        },
        {
          id: 7,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/v1611838569/eden-website-v2/onyinye_ftdgpp.png',
          name: 'Onyinye Nnedolisa',
          role: 'Product',
        },
        {
          id: 8,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/v1611838569/eden-website-v2/onyinye_ftdgpp.png',
          name: 'Onyinye Nnedolisa',
          role: 'Product',
        },
        {
          id: 9,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/v1611838569/eden-website-v2/onyinye_ftdgpp.png',
          name: 'Onyinye Nnedolisa',
          role: 'Product',
        },
        {
          id: 10,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/v1611838569/eden-website-v2/onyinye_ftdgpp.png',
          name: 'Onyinye Nnedolisa',
          role: 'Product',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_about.scss';
</style>
