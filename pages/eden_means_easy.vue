<template>
  <div class="container--hero">
    <header class="hero">
      <div class="hero__title">
        <h1>
          <span>10 Reasons</span>
          <br />
          Why Eden Means Easy
        </h1>

        <p>
          We'll pick up and deliver your laundry 🎽. We'll have professional
          cleaners take care of your house 🏠. We'll cook and deliver quality
          meals to you 🥘. On Schedule.
        </p>

        <div>
          <button class="hero__button">
            <span class="share__icon">
              <img
                src="@/assets/images/share.svg"
                alt="share"
                class="share__icon__img"
              />
            </span>
            <span> Share page </span>
          </button>
        </div>
      </div>
    </header>

    <div class="values">
      <div class="value__grid">
        <value-card :content="valueReasons[0]" />
      </div>
      <div class="value__grid">
        <value-card :content="valueReasons[1]" />
        <value-card :content="valueReasons[2]" />
      </div>
      <div class="value__grid">
        <value-card :content="valueReasons[3]" />
        <value-card :content="valueReasons[4]" />
      </div>
      <div class="value__grid">
        <value-card :content="valueReasons[5]" />
      </div>
      <div class="value__grid">
        <value-card :content="valueReasons[6]" />
        <value-card :content="valueReasons[7]" />
      </div>
      <div class="value__grid">
        <value-card :content="valueReasons[8]" />
        <value-card :content="valueReasons[9]" />
      </div>
    </div>

    <div class="hero">
      <div class="hero__title">
        <h1>
          The best time to start your Eden life was yesterday, the second best
          time is <span>now</span>.
        </h1>

        <p>There's an Eden plan for you</p>

        <div>
          <button
            class="hero__button-solid"
            @click.prevent="scrollToFooter('#get-the-app', 'Eden means easy')"
          >
            <span>Start Your Eden Life </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getSiteMeta from '~/utils/getSiteMeta'
import { scrollToApp } from '~/static/functions'
export default {
  components: {
    ValueCard: () => import('@/components/ValueCard.vue'),
  },
  data() {
    return {
      valueReasons: [
        {
          title: '1st Reason',
          header: "Service Delivery You Can Trust  (We're promise keepers).",
          description:
            "When you trust us with a service, we deliver. Whether it's food, laundry, or cleaning, there are no buts, no ifs. Just done. Damaged items get replaced.",
          shadow: true,
          background: '#FFFFFF',
          layout: 'row',
          button: 'modal',
          size: 'full',
          img_size: 'large',
          image: 'value-delivery',
        },
        {
          title: '2nd Reason',
          header: 'Eden Saves You Time.',
          description:
            "With a monthly subscription saving you up to 30 hours a week, every service you've chosen runs efficiently, and frees up your time to do the things that matter.",
          shadow: true,
          background: '#D1F2FA',
          layout: 'column-reverse',
          button: 'modal',
          size: 'half',
          textPosition: 'bottom',
          img_size: 'small',
          image: 'value-watch',
        },
        {
          title: '3rd Reason',
          header: 'One App To Run Them All.',
          description:
            'One app to select a service, schedule, pause, add extra stuff, get help, leave feedback, and so much more. One App.',
          shadow: true,
          background: '#D4F7E5',
          layout: 'column',
          button: 'app',
          size: 'half',
          textPosition: 'top',
          img_size: 'medium',
          image: 'value-selection',
        },
        {
          title: '4th Reason',
          header: 'You Get Your Own Personal Person.',
          description:
            'Every customer is assigned a manager who is proactive and effective. They are your champions inside Eden who make ensure you get the best experience. We call them Gardeners.',
          shadow: true,
          background: '#FFF3CC',
          layout: 'column',
          button: 'modal',
          size: 'half',
          textPosition: 'top',
          image: 'value-gardener',
          img_size: 'medium',
        },
        {
          title: '5th Reason',
          header: 'One Payment, All Month.',
          description:
            "For a monthly subscription, you never have to worry about getting these things done when the mid-month sapa hits. You're covered.",
          shadow: true,
          background: '#CCD5FF;',
          layout: 'column-reverse',
          button: 'modal',
          size: 'half',
          textPosition: 'top',
          img_size: 'small',
          image: 'value-payment',
        },
        {
          title: '6th Reason',
          header: "Eden Works When You're Working.",
          description:
            'Your food is delivered, your clean laundry is ironed and folded, and the your bathroom is scrubbed. Dedicate your active hours to solving actual problems.',
          shadow: true,
          background: '#FFFFFF',
          layout: 'row',
          button: 'modal',
          size: 'full',
          img_size: 'large',
          image: 'value-work',
        },
        {
          title: '7th Reason',
          header: "Eden Works When You Feel 'Lazy'.",
          description:
            "On days when you don't feel like doing anything, Eden will still work for you to keep your clothes and space clean, and your body nourished.",
          shadow: true,
          background: '#D4F7E5',
          layout: 'column',
          button: 'modal',
          size: 'half',
          textPosition: 'top',
          img_size: 'large',
          image: 'value-works',
        },
        {
          title: '8th Reason',
          header: "It's The Perfect Gift For People You Love.",
          description:
            'Few actions say "I care for you" like gifting an Eden plan to a person you love. With one gift, you save them time, give them relief, grant them access to quality service delivered at their own pace.',
          shadow: true,
          background: '#D1F2FA',
          layout: 'column-reverse',
          button: 'modal',
          size: 'half',
          textPosition: 'top',
          img_size: 'small',
          image: 'gift',
        },
        {
          title: '9th Reason',
          header: 'Conscious Eaters Choose Eden.',
          description:
            'With a diverse menu to choose from and a calorie counter on meals, you can now measure what goes into your body, and build your lifestyle around it.',
          shadow: true,
          background: '#FFF3CC',
          layout: 'column',
          button: 'modal',
          size: 'half',
          textPosition: 'top',
          img_size: 'large',
          image: 'value-meal',
        },

        {
          title: '10th Reason',
          header: 'Happy and Productive Teams Use Eden.',
          description:
            "For a monthly subscription, you never have to worry about getting these things done when the mid-month sapa hits. You're covered.",
          shadow: true,
          background: '#CCD5FF',
          layout: 'column',
          button: 'modal',
          size: 'quarter',
          textPosition: 'bottom',
          img_size: 'large',
          image: 'work-group',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Eden | Eden Means Easy',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://ouredenlifev2-staging.netlify.app/eden_means_easy`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        title: 'Eden | Eden Means Easy',
        description: '10 Reasons Why Eden Means Easy. ',
        url: `https://ouredenlifev2-staging.netlify.app/eden_means_easy`,
      }
      return getSiteMeta(metaData)
    },
  },
  methods: {
    scrollToFooter(id, label) {
      scrollToApp(id, label)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_eden_easy.scss';
</style>
