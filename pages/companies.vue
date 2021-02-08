<template>
  <div>
    <div class="container--hero">
      <header class="hero">
        <div class="hero__title">
          <h1 class="">
            The perfect perk <br />for <span> {{ headerText[0] }}</span>
          </h1>
          <h1 class="mobile">
            The perfect perk for <span> {{ headerText[0] }}</span>
          </h1>
          <p>
            CEO, Hiring Manager or Team Lead? Eden is the best way to reward
            your team's good work while staying on budget.
          </p>
          <div class="hero__button">
            <button
              type="button"
              class="hero__button-solid"
              @click.prevent="
                scrollToFooter(
                  'Get the Perfect Perk clicked',
                  'companies - hero'
                )
              "
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
            <h5>Appreciate Value</h5>
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
          <p>A happy team is a productive team</p>
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
            <h5>Gifts</h5>
            <p>A giftbox full of love & everything else.</p>

            <div class="services__type-bg">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/q_auto/v1612286532/eden-website-v2/giftimage_xjioyo.jpg"
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
                  height="85"
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
                  <circle cx="4" cy="4" r="4" />
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
                  <circle cx="4" cy="4" r="4" />
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
                  <circle cx="4" cy="4" r="4" />
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
                  <circle cx="4" cy="4" r="4" />
                </svg>
              </div>

              <div class="horizontal">
                <svg
                  class="horizontal--a"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#03A84E" />
                </svg>
                <svg
                  class="horizontal--b"
                  width="70"
                  height="3"
                  viewBox="0 0 160 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-0.000488281 2.23755V0.237549H160V2.23755H-0.000488281Z"
                    fill="#E4E8E6"
                  />
                </svg>
                <svg
                  class="horizontal--c"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" />
                </svg>
                <svg
                  class="horizontal--d"
                  width="70"
                  height="3"
                  viewBox="0 0 160 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-0.000488281 2.23755V0.237549H160V2.23755H-0.000488281Z"
                    fill="#E4E8E6"
                  />
                </svg>
                <svg
                  class="horizontal--e"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" />
                </svg>
                <svg
                  class="horizontal--f"
                  width="70"
                  height="3"
                  viewBox="0 0 160 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-0.000488281 2.23755V0.237549H160V2.23755H-0.000488281Z"
                    fill="#E4E8E6"
                  />
                </svg>
                <svg
                  class="horizontal--g"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" />
                </svg>
                <svg
                  class="horizontal--h"
                  width="70"
                  height="3"
                  viewBox="0 0 160 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-0.000488281 2.23755V0.237549H160V2.23755H-0.000488281Z"
                    fill="#E4E8E6"
                  />
                </svg>
                <svg
                  class="horizontal--i"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" />
                </svg>
              </div>
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
                <h5>You monitor/evaluate team satisfaction.</h5>
              </div>
              <button
                type="button"
                class="btn"
                @click.prevent="
                  scrollToFooter(
                    'Get the Perfect Perk clicked',
                    'companies - how it works'
                  )
                "
              >
                Get Eden
              </button>
            </div>
            <button
              type="button"
              class="btn--mobile"
              @click.prevent="
                scrollToFooter(
                  'Get the Perfect Perk clicked',
                  'companies - how it works'
                )
              "
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
          <h3>The wall of 💚</h3>
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
          @click.prevent="
            scrollToFooter(
              'Get the Perfect Perk clicked',
              'companies - testimonial'
            )
          "
        >
          Get the Perfect Perk
        </button>
      </section>
    </div>

    <modal v-if="showModalCompany" :show-modal="showModalCompany" class="modal">
      <div slot="header"></div>
      <div slot="body" class="modal__body">
        <div class="company__modal">
          <div class="company__modal-title">
            <h3 class="">Become a Rockstar Company</h3>
            <button class="btn" @click="showModalCompany = false">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="15.5"
                  fill="white"
                  stroke="#E4E8E6"
                />
                <path
                  d="M20 12L12 20"
                  stroke="#798B83"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 12L20 20"
                  stroke="#798B83"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <form action="" class="form">
            <div class="form__input">
              <label for="company name"> Company name</label>
              <input
                id=""
                v-model="companyForm.company_name"
                type="text"
                name=""
                placeholder="Enter company name"
                :class="{ 'has-error': $v.companyForm.company_name.$error }"
              />
            </div>

            <div class="form__input">
              <label for="contact name"> Contact person</label>
              <input
                id=""
                v-model="companyForm.contact_name"
                type="text"
                name=""
                placeholder="Enter name"
                :class="{ 'has-error': $v.companyForm.contact_name.$error }"
              />
            </div>
            <div class="form__input">
              <label for="email">Contact person email address</label>
              <input
                id=""
                v-model="companyForm.email"
                type="email"
                name=""
                placeholder="Enter email address"
                :class="{ 'has-error': $v.companyForm.email.$error }"
              />
            </div>
            <div class="form__input">
              <label for="phone number">Phone number</label>
              <input
                id=""
                v-model.trim="$v.companyForm.phone_number.$model"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                type="text"
                name=""
                placeholder="Enter phone number"
                :class="{ 'has-error': $v.companyForm.phone_number.$error }"
              />
            </div>
            <div class="form__input">
              <label for="services"
                >What plans would you like for your team?</label
              >
              <div class="select">
                <div class="selector">
                  <div class="label" @click="toggle()">
                    <span
                      v-if="companyForm.service && !companyForm.service.length"
                      class="placeholder"
                    >
                      Select services
                    </span>
                    <span
                      v-for="(item, i) in companyForm.service"
                      :key="i"
                      class="label--text"
                      >{{ item }}</span
                    >
                  </div>
                  <svg
                    class="arrow"
                    :class="{ expanded: visible }"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    @click="toggle()"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#93A29B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div :class="{ hidden: !visible, visible }">
                    <transition name="slide-fade">
                      <ul>
                        <li
                          v-for="(service, index) in services"
                          :key="index"
                          :value="service"
                        >
                          <input
                            :id="service"
                            v-model="companyForm.service"
                            type="checkbox"
                            :name="service"
                            :value="service"
                          />
                          <label
                            :for="service"
                            :class="{
                              checkmark: companyForm.service.includes(service),
                            }"
                          >
                            {{ service }}</label
                          >
                        </li>
                      </ul>
                    </transition>
                  </div>
                </div>
              </div>
            </div>
            <div class="form__input">
              <label for="message">Anything else you’d like us to know?</label>
              <textarea
                id=""
                v-model="companyForm.message"
                name=""
                cols="30"
                rows="10"
                placeholder="Extra message"
              ></textarea>
            </div>
            <button
              type="submit"
              class="btn--submit"
              :disabled="loading"
              @click.prevent="submit()"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div slot="footer"></div>
    </modal>

    <modal v-if="showSuccessModal" :show-modal="showSuccessModal" class="modal">
      <div slot="header"></div>
      <div slot="body" class="modal__body">
        <div class="company__modal">
          <div class="company__modal-title">
            <button class="btn btn--success" @click="showSuccessModal = false">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="15.5"
                  fill="white"
                  stroke="#E4E8E6"
                />
                <path
                  d="M20 12L12 20"
                  stroke="#798B83"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 12L20 20"
                  stroke="#798B83"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div class="company__modal-body">
            <img
              :src="require(`~/assets/images/successful.svg`)"
              alt="failed"
            />
            <h5>Information Submitted</h5>
            <p>
              You have successfully submitted your company’s information. We
              will reach out to you within the next 48 hours.
            </p>
            <button
              type="submit"
              class="btn--submit"
              :disabled="loading"
              @click.prevent="closeModal"
            >
              Continue Browsing
            </button>
          </div>
        </div>
      </div>
      <div slot="footer"></div>
    </modal>

    <modal v-if="showFailedModal" :show-modal="showFailedModal" class="modal">
      <div slot="header"></div>
      <div slot="body" class="modal__body">
        <div class="company__modal">
          <div class="company__modal-title">
            <button class="btn btn--success" @click="showFailedModal = false">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="15.5"
                  fill="white"
                  stroke="#E4E8E6"
                />
                <path
                  d="M20 12L12 20"
                  stroke="#798B83"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 12L20 20"
                  stroke="#798B83"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <div class="company__modal-body">
            <img :src="require(`~/assets/images/failed.svg`)" alt="failed" />
            <h5>Submission Failed</h5>
            <p>
              Your comapny’s information was not successfully submitted. Please
              try again or reach us at <span>eve@edenlife.ng </span> or
              <span>+2348123456790</span>
            </p>
          </div>
        </div>
      </div>
      <div slot="footer"></div>
    </modal>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'

export default {
  components: {
    Modal: () => import('@/components/Modal.vue'),
  },
  mixins: [validationMixin],
  validations: {
    companyForm: {
      contact_name: { required },
      email: { required, email },
      company_name: { required },
      service: { required },
      phone_number: { required },
    },
  },
  data() {
    return {
      showModalCompany: false,
      showSuccessModal: false,
      showFailedModal: false,
      loading: false,
      serviceName: 'Select services',
      headerText: ['rockstar companies', 'thoughtful teams'],
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
      services: [
        'Team Lunch',
        'Team Careboxes',
        'Team Laundry',
        'Team Housecleaning',
      ],
      companyForm: {
        company_name: '',
        contact_name: '',
        service: [],
        email: '',
        message: '',
        phone_number: '',
      },
      visible: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.descriptionControl()
    }, 10)
    mixpanelTrackEvent('Companies page')
    window.setInterval(() => {
      this.changeText()
    }, 2300)
  },
  methods: {
    closeModal() {
      this.showSuccessModal = !this.showSuccessModal
    },
    toggle() {
      this.visible = !this.visible
    },
    submit() {
      this.$v.companyForm.$touch()
      this.companyForm.service = JSON.stringify(this.companyForm.service)
      if (!this.$v.companyForm.$error) {
        this.loading = true
        fetch('https://api-staging.edenlife.ng/api/v3/website/companypage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.companyForm),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data)
            Object.keys(this.companyForm).forEach(
              (key) => (this.companyForm[key] = '')
            )
            this.$nextTick(() => {
              this.$v.companyForm.$reset()
              this.companyForm.service = []
            })
            this.showSuccessModal = true
            this.showModalCompany = !this.showModalCompany
            this.loading = false
          })
          .catch((error) => {
            console.error('Error:', error)
            this.loading = false
            this.showFailedModal = true
          })
      }
    },
    changeText() {
      const first = this.headerText.shift()
      this.headerText = this.headerText.concat(first)
    },
    scrollToFooter(label) {
      this.showModalCompany = !this.showModalCompany
      mixpanelTrackEvent(label)
    },
    descriptionControl() {
      let count = 0
      // If condition to set repeat
      if (count < 2) {
        const scrollToElement = document.querySelector(
          '.description__slider-text'
        )
        scrollToElement.scrollLeft = scrollToElement.scrollLeft + 1
        if (scrollToElement.scrollLeft === scrollToElement.scrollWidth - 61) {
          setTimeout(function () {
            scrollToElement.scrollLeft = 0
            count++
          }, 1200)
        }
        // set scrolling time start
        // const my_time = setTimeout('pageScroll()', 10)
        // set scrolling time end
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_companies.scss';
</style>
