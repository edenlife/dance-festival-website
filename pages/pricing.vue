<template>
  <div class="container--pricing">
    <section class="pricing">
      <div class="pricing__form-container">
        <div class="pricing__form">
          <div class="pricing__form-title">
            <h2>Pricing</h2>
            <p>You think Eden is expensive? Oya do am if e easy.</p>
          </div>
          <div class="pricing__form-slider">
            <div class="pricing__form-slider--title">
              <p>What is your estimate monthly expense?</p>
              <h3>₦100,000+</h3>
            </div>
            <div class="range">
              <input
                id="range"
                v-model="estimate"
                type="range"
                min="1"
                max="4"
                steps="1"
                value="1"
                class="range-input"
                @input="getEstimate"
              />
              <ul id="range-labels" class="range-labels">
                <li class="selected">a</li>
                <li>b</li>
                <li>c</li>
                <li>d</li>
              </ul>
            </div>
          </div>

          <div class="pricing__form-input">
            <p>
              What service(s) are you interested in? <span>(optional)</span>
            </p>
            <ul>
              <li
                v-for="(service, index) in services"
                :key="index"
                :value="service"
                class="service"
                :class="{
                  selected: selectedService.includes(service),
                }"
              >
                <input
                  :id="service"
                  v-model="selectedService"
                  type="checkbox"
                  :name="service"
                  :value="service"
                />
                <label
                  :for="service"
                  :class="{
                    checkmark: selectedService.includes(service),
                  }"
                >
                  {{ service }}</label
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="pricing__summary">
        <div class="pricing__plan">
          <p class="pricing__plan-title">
            For <span>₦100,000</span> monthly, you can get:
          </p>
          <ul>
            <p><span>Food plan</span> <span>₦ 6,500</span></p>
            <li>Weekly delivery</li>
            <li>5 meals per week</li>
            <li>Delivered once a week</li>
          </ul>
          <ul>
            <p><span>Laundry plan</span> <span>₦ 6,500</span></p>
            <li>Weekly delivery</li>
            <li>5 meals per week</li>
            <li>Delivered once a week</li>
          </ul>
          <ul>
            <p><span>Cleaning plan</span> <span>₦ 6,500</span></p>
            <li>Weekly delivery</li>
            <li>5 meals per week</li>
            <li>Delivered once a week</li>
          </ul>
          <p class="pricing__plan-subtotal">
            <span>Subtotal</span> <span>₦ 99,800</span>
          </p>
          <p class="pricing__plan-discount">
            <span>Discount (20% discount off your first month)</span>
            <span>- ₦ 2,600</span>
          </p>
          <p class="pricing__plan-total">
            <span>Total</span> <span>₦ 97,200</span>
          </p>
          <div class="pricing__plan-reconfigure">
            <div class="reconfigure">
              <p>Not what you want?</p>
              <button class="reconfigure-btn">Reconfigure.</button>
            </div>
            <button class="pricing__plan-btn">Break up with chores</button>
          </div>
          <div class="pricing__plan-input">
            <label for="email"
              >What is your email address?
              <span>(you get 20% off your first month 💚)</span></label
            >
            <input
              id=""
              type="email"
              name=""
              placeholder="Enter your email address"
            />
            <p>
              We’ll take you to download the app. You don’t have to do anything.
              Just sit back, relax and enjoy your discount.
            </p>
            <button class="pricing__plan-btn">Start your Eden Life</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedService: [],
      services: ['Food', 'Laundry', 'Cleaning'],
      estimate: 1,
    }
  },
  mounted() {},
  methods: {
    getEstimate() {
      const labels = document.querySelectorAll('.range-labels li')
      labels.forEach((el, i) => {
        if (this.estimate > i) {
          el.classList.add('selected')
        } else {
          el.classList.remove('selected')
        }
      })

      // Change background gradient
      const prefs = [
        'webkit-slider-runnable-track',
        'moz-range-track',
        'ms-track',
      ]
      const curVal = this.estimate - 1
      const val = curVal * 34

      for (let i = 0; i < prefs.length; i++) {
        document
          .querySelector('.range-labels')
          .classList.add('range-labels-active')
        const root = document.querySelector(':root')
        const element = document.querySelector('.range-labels-active')
        getComputedStyle(element, '::before')
        root.style.setProperty('--pseudo-width', `${val}%`)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_pricing.scss';
</style>
