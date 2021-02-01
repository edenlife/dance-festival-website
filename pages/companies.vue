<template>
  <div>
    <div class="container--hero">
      <header class="hero">
        <div class="hero__title">
          <h1 class="">
            The Perfect Perk <br />for <span> {{ headerText[0] }}</span>
          </h1>
          <h1 class="mobile">
            The Perfect Perk for <span> {{ headerText[0] }}</span>
          </h1>
          <p>
            CEO, Hiring manager or Team Lead? Eden is the best way to reward
            your team's good work while staying on budget.
          </p>
          <div class="hero__button">
            <button
              type="button"
              class="hero__button-solid"
              @click.prevent="scrollToFooter('#get-the-app')"
            >
              Get Eden
            </button>
          </div>
        </div>
        <div class="hero__img">
          <img
            src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611742061/eden-website-v2/hero-food-bg1_yjfvcb.svg"
            alt="phone"
            class="hero__img-bg1"
          />
        </div>
      </header>
    </div>

    <div class="container--team">
      <section class="team">
        <div class="team__title">
          <h3>Your Team Needs Eden</h3>
          <p>
            With Eden, your team gets increased productivity, better retention,
            and reduced welfare workload. How?
          </p>
        </div>
        <div class="team__card">
          <div class="team__card-item efficiency">
            <h3>💯</h3>
            <h5>Increased Efficiency</h5>
            <p>
              Less time and energy spent on chores = more time and energy
              invested in work and leisure.
            </p>
          </div>
          <div class="team__card-item experience">
            <h3>🤝</h3>
            <h5>Seamless Experience</h5>
            <p>
              We handle the bulk of your gifting needs, end-to-end. From
              creating the perfect plan, to delivering excellently.
            </p>
          </div>
          <div class="team__card-item sport">
            <h3>💚</h3>
            <h5>Team Sport</h5>
            <p>
              And with a subscription to any of our plans, your team members can
              see that they're highly valued by your organization.
            </p>
          </div>
        </div>
      </section>
    </div>

    <div class="container--service">
      <section class="services">
        <div class="services__title">
          <h3>Team Perks</h3>
          <p>Cancelling & Pausing any time is as easy as clicking a button.</p>
        </div>
        <div class="services__type">
          <div class="services__type-item services__type-food">
            <h3>🥘</h3>
            <h5>Food</h5>
            <p>Chef-cooked meals, delivered to the team.</p>

            <div class="services__type-bg">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611318743/eden-website-v2/food-img1_ls530a.png"
                alt="food"
              />
            </div>
          </div>
          <div class="services__type-item services__type-laundry">
            <h3>🧺</h3>
            <h5>Laundry</h5>
            <p>Picked up & delivered in 48 hours or less.</p>
            <div class="services__type-bg">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611306544/eden-website-v2/laundry-img1_ijsx4k.png"
                alt="laundry"
              />
            </div>
          </div>
          <div class="services__type-item services__type-cleaning">
            <h3>🏠</h3>
            <h5>Home Cleaning</h5>
            <p>Professional cleaning at your doorstep.</p>

            <div class="services__type-bg">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611318736/eden-website-v2/cleaning-img1_ldwcml.png"
                alt="cleaning"
              />
            </div>
          </div>
          <div class="services__type-item services__type-gifting">
            <h3>🎁</h3>
            <h5>Gifting</h5>
            <p>A giftbox full of love & everything else.</p>

            <div class="services__type-bg">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611318735/eden-website-v2/gift-img1_r9mjjh.png"
                alt="gifting"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="container--description">
      <section class="description">
        <div class="description__title">
          <h3>How it works</h3>
        </div>

        <div class="description__body">
          <div class="description__slider">
            <div class="description__slider-timeline">
              <div class="vertical">
                <svg
                  class="one"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#03A84E" />
                </svg>
                <svg
                  class="two"
                  width="2"
                  height="90"
                  viewBox="0 0 2 190"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0H2V190H0V0Z" fill="#E4E8E6" />
                </svg>
                <svg
                  class="three"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#03A84E" />
                </svg>
                <svg
                  class="four"
                  width="2"
                  height="90"
                  viewBox="0 0 2 190"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0H2V190H0V0Z" fill="#E4E8E6" />
                </svg>
                <svg
                  class="five"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#03A84E" />
                </svg>
                <svg
                  class="six"
                  width="2"
                  height="90"
                  viewBox="0 0 2 190"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0H2V190H0V0Z" fill="#E4E8E6" />
                </svg>
                <svg
                  class="seven"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#03A84E" />
                </svg>
                <svg
                  class="eight"
                  width="2"
                  height="90"
                  viewBox="0 0 2 190"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0H2V190H0V0Z" fill="#E4E8E6" />
                </svg>
                <svg
                  class="nine"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#03A84E" />
                </svg>
              </div>
              <!-- <span class="vertical"></span> -->
              <!-- <svg
                class="vertical"
                width="28"
                height="370"
                viewBox="0 0 28 370"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
              
                <rect
                  class="path"
                  x="13"
                  y="4"
                  width="2"
                  height="361"
                  fill="red"
                  stroke="#000000"
                  stroke-width="3"
                />
                <path d="M13 4H15V194H13V4Z" />
                <circle cx="14" cy="4" r="4" />
                <circle cx="14" cy="99" r="4" />
                <circle cx="14" cy="191" r="4" />
                <circle cx="14" cy="278" r="4" />
                <circle cx="14" cy="365" r="4" />
              </svg> -->

              <svg
                class="horizontal"
                width="329"
                height="28"
                viewBox="0 0 329 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.999512"
                  y="15.3431"
                  width="1.9977"
                  height="325"
                  transform="rotate(-90 0.999512 15.3431)"
                  fill="#E4E8E6"
                />
                <ellipse
                  cx="324"
                  cy="14.3443"
                  rx="4"
                  ry="3.9954"
                  fill="#E4E8E6"
                  stroke="#FFFCFA"
                />
                <ellipse
                  cx="244"
                  cy="14.3443"
                  rx="4"
                  ry="3.9954"
                  fill="#E4E8E6"
                  stroke="#FFFCFA"
                />
                <path
                  d="M4.99951 15.22V13.2223H165V15.22H4.99951Z"
                  fill="#61DB98"
                />
                <ellipse
                  rx="3.9954"
                  ry="4"
                  transform="matrix(-0.00115437 -0.999999 0.999999 -0.00115172 4.9949 14.3396)"
                  fill="#03A84E"
                />
                <ellipse
                  rx="3.9954"
                  ry="4"
                  transform="matrix(-0.00115437 -0.999999 0.999999 -0.00115172 84.9954 14.3397)"
                  fill="#03A84E"
                />
                <ellipse
                  opacity="0.1"
                  rx="13.9839"
                  ry="14"
                  transform="matrix(-0.00115437 -0.999999 0.999999 -0.00115172 164.026 14)"
                  fill="#03A84E"
                />
                <ellipse
                  opacity="0.1"
                  rx="8.98964"
                  ry="9"
                  transform="matrix(-0.00115437 -0.999999 0.999999 -0.00115172 164.026 14)"
                  fill="#03A84E"
                />
                <ellipse
                  rx="3.9954"
                  ry="4"
                  transform="matrix(-0.00115437 -0.999999 0.999999 -0.00115172 163.995 14)"
                  fill="#03A84E"
                />
              </svg>

              <!--<span class="slide">  </span> -->
            </div>
            <div class="description__slider-text">
              <div class="one">
                <h5>Fill the form on this page</h5>
              </div>
              <div class="two">
                <h5>You get an Eden plan for your team</h5>
              </div>
              <div class="three">
                <h5>We'll set up your team's accounts</h5>
              </div>
              <div class="four">
                <h5>Every team member gets personalized service</h5>
              </div>
              <div class="five">
                <h5>You monitor/evaluate team satisfaction. (Coming soon)</h5>
              </div>
              <button
                type="button"
                class="btn"
                @click.prevent="scrollToFooter('#get-the-app')"
              >
                Get Eden
              </button>
            </div>
            <button
              type="button"
              class="btn--mobile"
              @click.prevent="scrollToFooter('#get-the-app')"
            >
              Get Eden
            </button>
          </div>

          <div class="description__video">
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/q_auto/v1612102569/eden-website-v2/phone5_tmmyjw.svg"
              alt="phone"
              class="description__video-item"
            />
          </div>
        </div>
      </section>
    </div>

    <div class="container--customers">
      <section class="customers">
        <div class="customers__title">
          <h3>Companies <br />💚 us.</h3>
          <div class="customers__title-image">
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611859999/eden-website-v2/cocreations_k8zyc1.svg"
              alt="co-creation"
            />
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611322645/eden-website-v2/cowrywise_wtcvv5.svg"
              alt="cowrywise"
            />
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611322645/eden-website-v2/flutterwave_cmhzbz.svg"
              alt="flutterwave"
            />
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611322645/eden-website-v2/paystack_zez4ir.svg"
              alt="paystack"
            />
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611859999/eden-website-v2/microsoft_alkv1a.svg"
              alt="microsoft"
            />
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611322645/eden-website-v2/kuda_irz12h.svg"
              alt="kuda"
            />
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611322645/eden-website-v2/buycoins_bkcrvh.svg"
              alt="buycoins"
            />
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611322645/eden-website-v2/piggyvest_wyio8s.svg"
              alt="piggyvest"
            />
          </div>
        </div>

        <div class="customers__testimonials">
          <div v-for="(item, i) in TeamMessageList" :key="i" class="card">
            <a :href="item.tweetLink" target="_blank">
              <div class="card__title">
                <div class="card__title-img">
                  <img
                    :src="require(`~/assets/images/customer-${item.image}.png`)"
                    :alt="item.name"
                  />
                </div>
                <div class="">
                  <p class="card__title-name">{{ item.name }}</p>
                  <p class="card__title-handle">@{{ item.handle }}</p>
                </div>
              </div>

              <p class="card__description" v-html="item.description"></p>
            </a>
          </div>
        </div>

        <button
          type="button"
          class="btn"
          @click.prevent="scrollToFooter('#get-the-app')"
        >
          Get the Perfect Perk
        </button>
      </section>
    </div>
  </div>
</template>

<script>
import { scrollToApp } from '~/static/functions'

export default {
  data() {
    return {
      headerText: ['Rockstar Companies', 'Thoughtful Teams'],
      TeamMessageList: [
        {
          name: 'Oyechukwu 😎',
          image: 'oyechukwu',
          description: `It’s amazing how <span style="color:#03A84E"> @ouredenlife </span> delivered the careboxes to everyone at Cowrywise, at different location, around the same time, so efficient!
Cowrywise, thank you! Thank you 🤗💙 @cowrywise
God bless you 🤧`,
          handle: '_Oyeyinka',
          tweetLink:
            'https://twitter.com/delectable_Oye/status/1260187344893808640?s=20',
        },
        {
          name: 'Timi Ajiboye',
          image: 'timi',
          description: `Thanks to <span style="color:#03A84E"> @ouredenlife </span>, we’re now delivering our (free) work lunch to all BuyCoins employees’ homes during this period.`,
          handle: 'timigod',
          tweetLink:
            'https://twitter.com/timigod/status/1240248485632409601?s=20',
        },
        {
          name: 'Michael Awonowo',
          image: 'michael',
          description: `<span style="color:#03A84E"> @ouredenlife </span> is probably the most reliable vendor we worked with in 2020 @MicdeeDesigns
 <br>
 <br>
One of the few companies that my people didn’t come back to complain about their service. And we work with a lot of vendors.
 <br>
 <br>
They really have something good going and I’m rooting for them.`,
          handle: 'MAwonowo',
          tweetLink:
            'https://twitter.com/MAwonowo/status/1341345849390055424?s=20',
        },
        {
          name: 'Tech Bro',
          image: 'odun',
          description: `Someone can’t even sneeze in that Piggyvest office, we’ve already sent them an <span style="color:#03A84E"> @ouredenlife </span> carebox.
That box has everything 😩😂`,
          handle: 'OdunEweniyi',
          tweetLink:
            'https://twitter.com/OdunEweniyi/status/1320851789206425600?s=20',
        },
        {
          name: 'Tejúmádé',
          image: 'teju',
          description: `<span style="color:#03A84E"> @ouredenlife </span> meals >>>>
Eden meals funded by @buycoins_africa >>>>>>>>>>>`,
          handle: 'TejuAdeyinka',
          tweetLink:
            'https://twitter.com/TejuAdeyinka/status/1255504942447591426?s=20',
        },
      ],
    }
  },
  mounted() {
    window.setInterval(() => {
      this.changeText()
    }, 2300)
  },
  methods: {
    changeText() {
      const first = this.headerText.shift()
      this.headerText = this.headerText.concat(first)
    },
    scrollToFooter(id) {
      scrollToApp(id)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_companies.scss';
</style>
