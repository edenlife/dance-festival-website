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
            <button type="button" class="hero__button-solid">Get Eden</button>
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

        <button type="button" class="btn">Get the Perfect Perk</button>
      </section>
    </div>
  </div>
</template>

<script>
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
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_companies.scss';
</style>
