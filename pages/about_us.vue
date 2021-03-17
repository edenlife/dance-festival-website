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
            <button
              type="button"
              class="hero__button-solid"
              @click.prevent="scrollTo('join-eden')"
            >
              Become Humaan - Join Eden Life
            </button>
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

    <div ref="join-eden" class="container--opening">
      <section class="opening">
        <div class="opening__title">
          <h3>Join the Humaans</h3>
          <p>
            Interested in joining the team? Check out the available roles below.
          </p>
        </div>
        <div class="opening__role">
          <p>Sorry, we don’t have any open positions at the moment.</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mixpanelTrackEvent } from '~/plugins/mixpanel'

export default {
  data() {
    return {
      humaans: [
        {
          id: 1,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611838569/eden-website-v2/onyinye_ftdgpp.png',
          name: 'Onyinye Nnedolisa',
          role: 'Product',
        },
        {
          id: 2,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919036/eden-website-v2/fuad_rpmeic.png',
          name: 'Fu’ad Lawal',
          role: 'Growth',
        },
        {
          id: 3,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919034/eden-website-v2/teniola_shgscj.png',
          name: 'Teniola Popoola',
          role: 'Food Production',
        },
        {
          id: 4,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919037/eden-website-v2/adanna_exg8wr.png',
          name: 'Adanna Onuchukwu',
          role: 'Customer Success',
        },
        {
          id: 5,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919035/eden-website-v2/awazi_wef42h.png',
          name: 'Awazi Angbalaga',
          role: 'Happiness Engineering',
        },
        {
          id: 6,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919033/eden-website-v2/georgina_nsscpz.png',
          name: 'Georgina Nwauko',
          role: 'Supply',
        },
        {
          id: 7,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1615990303/eden-website-v2/PXL_20210305_093619807.PORTRAIT_va3nwd.jpg',
          name: 'Aderinsola Oluwafemi',
          role: 'Product',
        },
        {
          id: 8,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919034/eden-website-v2/Doyin_uxgyeh.png',
          name: 'Doyin Onifade',
          role: 'Food Production',
        },
        {
          id: 9,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919029/eden-website-v2/silm_hjpfqs.png',
          name: 'Silm Momoh',
          role: 'Cofounder, Product',
        },
        {
          id: 10,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919029/eden-website-v2/Ossai_jtukrn.png',
          name: 'Jennifer Ossai',
          role: 'Food Production',
        },
        {
          id: 11,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919032/eden-website-v2/janet_xdia2m.png',
          name: 'Janet Arisah',
          role: 'Engineering',
        },
        {
          id: 12,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919026/eden-website-v2/goke_pwdcwr.png',
          name: 'Adekanbi Adegoke',
          role: 'Customer Success',
        },
        {
          id: 13,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919024/eden-website-v2/ofafiri_xkh5ma.png',
          name: 'Orafiri Adoki',
          role: 'Food Production',
        },
        {
          id: 14,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919029/eden-website-v2/aisha_uwaq8c.png',
          name: 'Aisha Oyegunle',
          role: 'Engineering',
        },
        {
          id: 15,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919025/eden-website-v2/nad_bzu7la.png',
          name: 'Nadayar Enegesi',
          role: 'Cofounder, CEO',
        },
        {
          id: 16,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919020/eden-website-v2/mary_eqpyfe.png',
          name: 'Mary Jamgbadi',
          role: 'Customer Success',
        },
        {
          id: 17,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919024/eden-website-v2/bukola_c0lmjo.png',
          name: 'Olubukola Ajayi',
          role: 'Happiness Engineering (HR)',
        },
        {
          id: 18,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919020/eden-website-v2/Kabir_unsfyw.png',
          name: 'Kabir Olagunju',
          role: 'Food Production',
        },
        {
          id: 19,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919022/eden-website-v2/prosper_uqgnxw.png',
          name: 'Prosper Otemuyiwa',
          role: 'Cofounder, Engineering',
        },
        {
          id: 20,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919018/eden-website-v2/jennifer_a5e5fi.png',
          name: 'Jennifer Omage',
          role: 'Customer Success',
        },
        {
          id: 21,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919019/eden-website-v2/sonia_avedzq.png',
          name: 'Sonia Amadi',
          role: 'Growth',
        },
        {
          id: 22,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919021/eden-website-v2/olawore_ns5mzz.png',
          name: 'Olawore Temiloluwa',
          role: 'Customer Success',
        },
        {
          id: 23,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919025/eden-website-v2/olamide_tfmcyc.png',
          name: 'Olamide Akomolafe',
          role: 'Product',
        },
        {
          id: 24,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919015/eden-website-v2/anita_maxeye.png',
          name: 'Anita Agoha',
          role: 'Food Production',
        },
        {
          id: 25,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919011/eden-website-v2/Mosunmola_qqhkfk.png',
          name: 'Mosunmola Yusuf',
          role: 'Food Production',
        },
        {
          id: 26,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919014/eden-website-v2/damola_izfezi.png',
          name: 'Damola Adegoke',
          role: 'Product',
        },
        {
          id: 27,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919016/eden-website-v2/gbenga_bxailj.png',
          name: 'Gbenga Osowe',
          role: 'Supply',
        },
        {
          id: 28,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919013/eden-website-v2/chinwe_howvon.png',
          name: 'Chinwe Mmajieke',
          role: 'Customer Success',
        },
        {
          id: 29,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919013/eden-website-v2/miracle_q36pyk.png',
          name: 'Miracle Adoghe',
          role: 'Food Production',
        },
        {
          id: 30,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919010/eden-website-v2/perpetual_fcb9uf.png',
          name: 'Perpetual Egenti',
          role: 'Customer Success',
        },
        {
          id: 31,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919008/eden-website-v2/michael_ddqpot.png',
          name: 'Michael Obasesan',
          role: 'Supply',
        },
        {
          id: 32,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919008/eden-website-v2/owolabi_ucxwb1.png',
          name: 'Owolabi Abimbola',
          role: 'Customer Success',
        },
        {
          id: 33,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919010/eden-website-v2/opebello_vnqjps.png',
          name: 'Opeyemi Bello',
          role: 'Customer Success',
        },
        {
          id: 34,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919005/eden-website-v2/noah_ouy5f2.png',
          name: 'Noah Jolayemi',
          role: 'Customer Success',
        },
        {
          id: 35,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919004/eden-website-v2/ismail_geu8nl.png',
          name: 'Ismail Omodara',
          role: 'Engineering',
        },
        {
          id: 36,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919004/eden-website-v2/Courage_nrs2xq.png',
          name: 'Courage Echeka',
          role: 'Food Production',
        },
        {
          id: 37,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919004/eden-website-v2/orogun_amvia9.png',
          name: 'Opeyemi Orogun',
          role: 'Customer Success',
        },
        {
          id: 38,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919006/eden-website-v2/oluwatosin_lb1koa.png',
          name: 'Oluwatosin Adesola',
          role: 'Food Production',
        },
        {
          id: 39,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1611919004/eden-website-v2/olabowale_jaeb96.png',
          name: 'Olabowale Adetoye',
          role: 'Food Production',
        },
        {
          id: 40,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1615990273/eden-website-v2/Happiness_Etim_Udonya_Food_Production_v8axnt.jpg',
          name: 'Happiness Etim Udonya',
          role: 'Food Production',
        },
        {
          id: 41,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1615990279/eden-website-v2/Olude_Segun_Food_Production_m2hwig.jpg',
          name: 'Olude Segun',
          role: 'Food Production',
        },
        {
          id: 42,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1615990266/eden-website-v2/Collins_Uche_Finance_au9qxt.jpg',
          name: 'Collins Uche',
          role: 'Finance',
        },
        {
          id: 43,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1615990268/eden-website-v2/Fatimah_Ologbonori_Food_Production_w0xl4z.jpg',
          name: 'Fatimah Ologbonori',
          role: 'Food Production',
        },
        {
          id: 44,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1615990428/eden-website-v2/Adedeji_Abidoye_Happiness_Engineering_blrta5.jpg',
          name: 'Adedeji Abidoye',
          role: 'Happiness Engineering',
        },
        {
          id: 45,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1615990295/eden-website-v2/Oluwaseyi_Alitagba_Food_Production_lyoyaz.jpg',
          name: 'Oluwaseyi Alitaga',
          role: 'Food Production',
        },
        {
          id: 46,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1615990289/eden-website-v2/Oluwamayowa_Olatunji_Food_Production_l9cobs.jpg',
          name: 'Oluwamayowa Olatunji',
          role: 'Food Production',
        },
        {
          id: 47,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1615990439/eden-website-v2/Chiedozie_Ike_Growth_uc3kys.jpg',
          name: 'Chiedozie Ike',
          role: 'Growth',
        },
        {
          id: 48,
          image:
            'https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1615990312/eden-website-v2/Veronica_Emmanuel_Food_Production_zzvwka.jpg',
          name: 'Veronica Emmanuel',
          role: 'Food Production',
        },
      ],
    }
  },
  mounted() {
    mixpanelTrackEvent('About Us page')
  },
  methods: {
    scrollTo(ref) {
      mixpanelTrackEvent('Join Eden clicked - contact page')
      this.$refs[ref].scrollIntoView()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_about.scss';
</style>
