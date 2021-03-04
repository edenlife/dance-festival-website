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
              <h3>
                <span v-if="estimate === '5'">+</span>₦{{ estimatedPrice }}
              </h3>
            </div>
            <div class="range">
              <input
                id="range"
                v-model="estimate"
                type="range"
                min="0"
                max="5"
                steps="1"
                value="1"
                class="range-input"
                @input="getEstimate"
              />
              <ul id="range-labels" class="range-labels">
                <li class="selected">a</li>
                <li class="selected">b</li>
                <li class="selected">c</li>
                <li>d</li>
                <li>e</li>
                <li>f</li>
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
                  type="checkbox"
                  :name="service"
                  :value="service"
                  @change="changeService(service)"
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
        <transition name="slide-fade">
          <div
            v-if="estimate === '5' && !reconfigurePlan"
            class="pricing__plan"
          >
            <p class="pricing__plan-title">
              Yeah. You definitely deserve a custom plan from us. Please enter
              your information below.
            </p>
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
            </div>
            <div class="pricing__plan-input number">
              <label for="phone">Phone Number</label>
              <input
                id=""
                type="text"
                name=""
                placeholder="Enter your phone number"
              />
            </div>
            <button class="pricing__plan-btn sales-btn">
              Contact Sales Team
            </button>
          </div>
        </transition>
        <transition name="slide-fade">
          <div
            v-if="estimate !== '5' && !reconfigurePlan"
            class="pricing__plan"
          >
            <p class="pricing__plan-title">
              For <span>₦{{ estimatedPrice }}</span> monthly, you can get:
            </p>
            <transition name="slide-fade">
              <ul v-if="selectedService.includes('Food')">
                <p>
                  <span>Food plan</span> <span>₦{{ foodPrice }}</span>
                </p>
                <li v-for="(item, i) in foodSummary" :key="i">{{ item }}</li>
              </ul>
            </transition>
            <transition name="slide-fade">
              <ul v-if="selectedService.includes('Laundry')">
                <p>
                  <span>Laundry plan</span> <span>₦{{ laundryPrice }}</span>
                </p>
                <li v-for="(item, i) in laundrySummary" :key="i">{{ item }}</li>
              </ul>
            </transition>
            <transition name="slide-fade">
              <ul v-if="selectedService.includes('Cleaning')">
                <p>
                  <span>Cleaning plan</span> <span>₦{{ cleaningPrice }}</span>
                </p>
                <li v-for="(item, i) in cleaningSummary" :key="i">
                  {{ item }}
                </li>
              </ul>
            </transition>
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
                <button
                  class="reconfigure-btn"
                  @click.prevent="reconfigurePlan = !reconfigurePlan"
                >
                  Reconfigure.
                </button>
              </div>
              <button
                v-if="!displayForm"
                class="pricing__plan-btn"
                @click.prevent="displayForm = !displayForm"
              >
                Break up with chores
              </button>
            </div>
            <transition name="slide-fade">
              <div v-if="displayForm" class="pricing__plan-input">
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
                  We’ll take you to download the app. You don’t have to do
                  anything. Just sit back, relax and enjoy your discount.
                </p>
                <button class="pricing__plan-btn">Start your Eden Life</button>
              </div>
            </transition>
          </div>
        </transition>
        <transition name="slide-fade">
          <div v-if="reconfigurePlan" class="pricing__calculator">
            <p class="pricing__calculator-title">
              <span>Reconfigure your Eden Life</span>
            </p>
            <!-- meal -->
            <div class="calculator">
              <div class="calculator__header">
                <p>Food plan</p>
                <button class="calculator__header-btn">Remove plan</button>
              </div>
              <div class="calculator__container">
                <div class="calculator__input">
                  <div class="calculator__input-item">
                    <label for="">Frequency</label>
                    <div class="select">
                      <div class="selector">
                        <div class="label" @click="toggle('food')">
                          <span>{{ mealFrequency }}</span>
                        </div>
                        <svg
                          class="arrow"
                          :class="{ expanded: visible.includes('food') }"
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          @click="toggle('food')"
                        >
                          <path
                            d="M1 1L5 5L9 1"
                            stroke="#93A29B"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <div :class="{ hidden: !visible.includes('food') }">
                          <transition name="slide-fade">
                            <ul>
                              <li @click.prevent="getMealPrice('Daily')">
                                Daily
                              </li>
                              <li @click.prevent="getMealPrice('Weekly')">
                                Weekly
                              </li>
                            </ul>
                          </transition>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="calculator__input-item">
                    <label for="">Number of meals per day</label>
                    <div class="meal">
                      <input
                        id=""
                        v-model="mealQty"
                        type="number"
                        name=""
                        placeholder="0"
                        min="1"
                        class="meal--input"
                      />
                      <span class="meal--label">meals </span>
                    </div>
                  </div>
                </div>
                <div class="calculator__footer">
                  <p>Food amount</p>
                  <p>₦30,000/month</p>
                </div>
              </div>
            </div>
            <!-- laundry -->
            <div class="calculator">
              <div class="calculator__header">
                <p>Laundry plan</p>
                <button class="calculator__header-btn">Remove plan</button>
              </div>
              <div class="calculator__container">
                <div class="calculator__input">
                  <div class="calculator__input-item">
                    <label for="">Type</label>
                    <div class="select">
                      <div class="selector">
                        <div class="label" @click="toggle('laundryType')">
                          <span>{{ laundryType }}</span>
                        </div>
                        <svg
                          class="arrow"
                          :class="{ expanded: visible.includes('laundryType') }"
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          @click="toggle('laundryType')"
                        >
                          <path
                            d="M1 1L5 5L9 1"
                            stroke="#93A29B"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <div
                          :class="{ hidden: !visible.includes('laundryType') }"
                        >
                          <transition name="slide-fade">
                            <ul>
                              <li
                                v-for="(item, i) in laundryTypeOption"
                                :key="i"
                              >
                                <span @click.prevent="getLaundryPrice(item)">{{
                                  item.name
                                }}</span>
                              </li>
                            </ul>
                          </transition>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="calculator__input-item">
                    <label for="">Frequency</label>
                    <div class="select">
                      <div class="selector">
                        <div class="label" @click="toggle('laundryFreq')">
                          <span>{{ laundryFrequency }}</span>
                        </div>
                        <svg
                          class="arrow"
                          :class="{ expanded: visible.includes('laundryFreq') }"
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          @click="toggle('laundryFreq')"
                        >
                          <path
                            d="M1 1L5 5L9 1"
                            stroke="#93A29B"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <div
                          :class="{ hidden: !visible.includes('laundryFreq') }"
                        >
                          <transition name="slide-fade">
                            <ul>
                              <li v-for="(item, i) in frequencyOption" :key="i">
                                <span @click.prevent="getLaundryPrice(item)">{{
                                  item.name
                                }}</span>
                              </li>
                            </ul>
                          </transition>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="calculator__input">
                  <div class="calculator__input-item calculator__input-laundry">
                    <label for="">Number of laundry bags</label>
                    <div class="btn--group">
                      <button
                        class="btn--item minus"
                        @click.prevent="decreaseOrder('washDry')"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19"
                            stroke="#21312A"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <input
                        id=""
                        v-model="washDry"
                        type="number"
                        name=""
                        readonly
                        placeholder="0"
                      />
                      <button
                        class="btn--item plus"
                        @click.prevent="increaseOrder('washDry')"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 5V19"
                            stroke="#21312A"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5 12H19"
                            stroke="#21312A"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="calculator__footer">
                  <p>Laundry amount</p>
                  <p>₦30,000/month</p>
                </div>
              </div>
            </div>
            <!-- cleaning -->
            <div class="calculator">
              <div class="calculator__header">
                <p>Cleaning plan</p>
                <button class="calculator__header-btn">Remove plan</button>
              </div>
              <div class="calculator__container">
                <div class="calculator__input">
                  <div class="calculator__input-item">
                    <label for="">Type</label>
                    <div class="select">
                      <div class="selector">
                        <div class="label" @click="toggle('cleaningType')">
                          <span>{{ cleaningType }}</span>
                        </div>
                        <svg
                          class="arrow"
                          :class="{
                            expanded: visible.includes('cleaningType'),
                          }"
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          @click="toggle('cleaningType')"
                        >
                          <path
                            d="M1 1L5 5L9 1"
                            stroke="#93A29B"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <div
                          :class="{ hidden: !visible.includes('cleaningType') }"
                        >
                          <transition name="slide-fade">
                            <ul>
                              <li
                                v-for="(item, i) in cleaningTypeOption"
                                :key="i"
                              >
                                <span @click.prevent="getCleaningPrice(item)">{{
                                  item.name
                                }}</span>
                              </li>
                            </ul>
                          </transition>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="calculator__input-item">
                    <label for="">Frequency</label>
                    <div class="select">
                      <div class="selector">
                        <div class="label" @click="toggle('cleaningFreq')">
                          <span>{{ cleaningFrequency }}</span>
                        </div>
                        <svg
                          class="arrow"
                          :class="{
                            expanded: visible.includes('cleaningFreq'),
                          }"
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          @click="toggle('cleaningFreq')"
                        >
                          <path
                            d="M1 1L5 5L9 1"
                            stroke="#93A29B"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <div
                          :class="{ hidden: !visible.includes('cleaningFreq') }"
                        >
                          <transition name="slide-fade">
                            <ul>
                              <li v-for="(item, i) in frequencyOption" :key="i">
                                <span @click.prevent="getCleaningPrice(item)">{{
                                  item.name
                                }}</span>
                              </li>
                            </ul>
                          </transition>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="calculator__input">
                  <div
                    class="calculator__input-item calculator__input-cleaning"
                  >
                    <label for="">Tell us about your home</label>
                    <div class="select">
                      <div class="selector">
                        <div class="label" @click="toggle('cleaningQty')">
                          <span>{{ getRoomTypes(roomTypes) }}</span>
                        </div>
                        <svg
                          class="arrow"
                          :class="{
                            expanded: visible.includes('cleaningQty'),
                          }"
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          @click="toggle('cleaningQty')"
                        >
                          <path
                            d="M1 1L5 5L9 1"
                            stroke="#93A29B"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <div
                          :class="{ hidden: !visible.includes('cleaningQty') }"
                        >
                          <transition name="slide-fade">
                            <ul>
                              <li
                                v-for="(item, i) in cleaningQtyOption"
                                :key="i"
                                class="control"
                              >
                                <span>{{ item.name }}</span>
                                <span class="control__item">
                                  <button
                                    class="control__item-btn"
                                    @click.prevent="decreaseRoom(item, i)"
                                  >
                                    <svg
                                      width="12"
                                      height="2"
                                      viewBox="0 0 12 2"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.3335 1H10.6668"
                                        stroke="#21312A"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                    </svg>
                                  </button>
                                  <span class="control__item-qty">
                                    {{ item.qty }}
                                  </span>
                                  <button
                                    class="control__item-btn"
                                    @click.prevent="increaseRoom(item, i)"
                                  >
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8 3.33301V12.6663"
                                        stroke="#21312A"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                      <path
                                        d="M3.3335 8H12.6668"
                                        stroke="#21312A"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                    </svg>
                                  </button>
                                </span>
                              </li>
                            </ul>
                          </transition>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="calculator__footer">
                  <p>Cleaning amount</p>
                  <p>₦30,000/month</p>
                </div>
              </div>
            </div>
            <p class="pricing__calculator-subtotal">
              <span>Subtotal</span> <span>₦ 99,800</span>
            </p>
            <p class="pricing__calculator-discount">
              <span>Discount (20% discount off your first month)</span>
              <span>- ₦ 2,600</span>
            </p>
            <p class="pricing__calculator-total">
              <span>Total</span> <span>₦ 97,200</span>
            </p>
            <button class="pricing__calculator-btn">
              Break up with chores
            </button>
          </div>
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
import { currencyFormat } from '~/static/functions'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import { pricing } from '~/static/pricing'

export default {
  data() {
    return {
      selectedService: ['Food', 'Laundry', 'Cleaning'],
      services: ['Food', 'Laundry', 'Cleaning'],
      estimate: 2,
      displayForm: false,
      estimatedPrice: '50,000',
      priceList: [
        '10,000',
        '20,000',
        '50,000',
        '100,000',
        '150,000',
        '150,000',
      ],
      reconfigurePlan: false,
      visible: [],
      mealFrequency: 'Daily',
      mealQty: 1,
      laundryFrequency: 'Every 2 weeks',
      laundryType: 'Wash & Fold',
      frequencyOption: [
        {
          name: 'Once a week',
          value: 'weekly',
        },
        {
          name: 'Every 2 weeks',
          value: 'bi-weekly',
        },
        {
          name: 'Once a month',
          value: 'monthly',
        },
      ],
      laundryTypeOption: [
        {
          name: 'Wash & Fold',
          value: 'wash-fold',
        },
        {
          name: 'Wash & Iron',
          value: 'wash-iron',
        },
      ],
      washDry: 1,
      washIron: 1,
      cleaningFrequency: 'Every 2 weeks',
      cleaningType: 'Light cleaning',
      cleaningTypeOption: [
        {
          name: 'Light cleaning',
          value: 'light',
        },
        {
          name: 'Deep cleaning',
          value: 'deep',
        },
      ],
      roomTypes: ['1 bedroom', '1 bathroom', '1 living room'],
      cleaningQtyOption: [
        {
          name: 'Bedroom',
          value: 'bedroom',
          label: 'bedroom',
          qty: 1,
        },
        {
          name: 'Bathroom',
          value: 'bathroom',
          label: 'bathroom',
          qty: 1,
        },
        {
          name: 'Living and Dining room',
          value: 'living-room',
          label: 'living room',
          qty: 1,
        },
        {
          name: 'Kitchen',
          value: 'kitchen',
          label: 'kitchen',
          qty: 0,
        },
        {
          name: 'Study and Store',
          value: 'store',
          label: 'store',
          qty: 0,
        },
      ],
      foodPrice: '',
      laundryPrice: '',
      cleaningPrice: '',
      foodSummary: [],
      laundrySummary: [],
      cleaningSummary: [],
    }
  },
  mounted() {
    this.getEstimate()
  },
  methods: {
    currencyFormat,
    toggle(plan) {
      if (this.visible.includes(plan)) {
        this.visible = this.visible.filter((item) => item !== plan)
      } else {
        this.visible.push(plan)
      }
    },
    changeService(service) {
      if (this.estimate === '0') {
        this.selectedService.pop()
        this.selectedService.push(service)
        this.foodSummary = [
          'Weekly delivery',
          '1 meal per week',
          'Delivered once a week',
        ]
        this.laundrySummary = [
          'Wash and Fold',
          '1 bag (max. 30 items per bag)',
          'Picked up every two weeks',
        ]
        this.cleaningSummary = ['Light cleaning', '1 room', 'Every two weeks']
        return
      }
      //
      if (this.estimate === '1') {
        if (
          this.selectedService.length > 1 &&
          this.selectedService.includes(service)
        ) {
          this.selectedService = this.selectedService.filter(
            (item) => item !== service
          )
        } else if (
          this.selectedService.length >= 1 &&
          this.selectedService.length < 2 &&
          !this.selectedService.includes(service)
        ) {
          this.selectedService.push(service)
        }

        if (this.selectedService.length > 1) {
          this.foodPrice = '8,800'
          this.laundryPrice = '9,000'
          this.cleaningPrice = '8,000'
          this.foodSummary = [
            'Weekly delivery',
            '1 meal per week',
            'Delivered once a week',
          ]
          this.laundrySummary = [
            'Wash and Fold',
            '1 bag (max. 30 items per bag)',
            'Picked up every two weeks',
          ]
          this.cleaningSummary = ['Light cleaning', '1 room', 'Every two weeks']
        } else {
          this.foodPrice = '16,000'
          this.laundryPrice = '16,000'
          this.cleaningPrice = '14,000'
          this.foodSummary = [
            'Weekly delivery',
            '2 meals per week',
            'Delivered once a week',
          ]
          this.laundrySummary = [
            'Wash and Iron',
            '1 bag (max. 30 items per bag)',
            'Picked up every two weeks',
          ]
          this.cleaningSummary = [
            'Light cleaning',
            '3 rooms',
            'Every two weeks',
          ]
        }
        return
      }
      //
      if (
        this.selectedService.length > 1 &&
        this.selectedService.includes(service)
      ) {
        this.selectedService = this.selectedService.filter(
          (item) => item !== service
        )
      } else if (
        this.selectedService.length >= 1 &&
        !this.selectedService.includes(service)
      ) {
        this.selectedService.push(service)
      }
      //
      if (this.estimate.toString() === '2') {
        if (this.selectedService.length === 3) {
          this.foodPrice = '16,000'
          this.laundryPrice = '14,000'
          this.cleaningPrice = '14,000'
          this.foodSummary = [
            'Weekly delivery',
            '2 meals per week',
            'Delivered once a week',
          ]
          this.laundrySummary = [
            'Wash and Iron',
            '1 bag (max. 30 items per bag)',
            'Picked up every two weeks',
          ]
          this.cleaningSummary = [
            'Light cleaning',
            '3 rooms',
            'Every two weeks',
          ]
        } else if (this.selectedService.length === 2) {
          if (
            this.selectedService.includes('Food') &&
            this.selectedService.includes('Laundry')
          ) {
            this.foodPrice = '38,000'
            this.laundryPrice = '9,000'
            this.foodSummary = [
              'Weekly delivery',
              '5 meals per week',
              'Delivered once a week',
            ]
            this.laundrySummary = [
              'Wash and Fold',
              '1 bag (max. 30 items per bag)',
              'Picked up every two weeks',
            ]
          }
          if (
            this.selectedService.includes('Food') &&
            this.selectedService.includes('Cleaning')
          ) {
            this.foodPrice = '16,000'
            this.cleaningPrice = '28,000'
            this.foodSummary = [
              'Weekly delivery',
              '2 meals per week',
              'Delivered once a week',
            ]
            this.cleaningSummary = ['Light cleaning', '3 rooms', 'Once a week']
          }
          if (
            this.selectedService.includes('Cleaning') &&
            this.selectedService.includes('Laundry')
          ) {
            this.laundryPrice = '16,000'
            this.cleaningPrice = '28,000'

            this.laundrySummary = [
              'Wash and Iron',
              '1 bag (max. 30 items per bag)',
              'Picked up every two weeks',
            ]
            this.cleaningSummary = ['Light cleaning', '3 rooms', 'Every week']
          }
        } else if (this.selectedService.length === 1) {
          this.foodPrice = '44,000'
          this.laundryPrice = '48,000'
          this.cleaningPrice = '44,000'
          this.foodSummary = ['Daily delivery', '7 meals per week']
          this.laundrySummary = [
            'Wash and Iron',
            '3 bags (max. 30 items per bag)',
            'Picked up every two weeks',
          ]
          this.cleaningSummary = ['Light cleaning', '5 rooms', 'Every week']
        }
      }
      //
      if (this.estimate.toString() === '3') {
        if (this.selectedService.length === 3) {
          this.foodPrice = '44,000'
          this.laundryPrice = '16,000'
          this.cleaningPrice = '28,000'
          this.foodSummary = ['Daily delivery', '7 meals per week']
          this.laundrySummary = [
            'Wash and Iron',
            '1 bag (max. 30 items per bag)',
            'Picked up every two weeks',
          ]
          this.cleaningSummary = ['Light cleaning', '3 rooms', 'Every week']
        } else if (this.selectedService.length === 2) {
          if (
            this.selectedService.includes('Food') &&
            this.selectedService.includes('Laundry')
          ) {
            this.foodPrice = '68,000'
            this.laundryPrice = '32,000'
            this.foodSummary = ['Daily delivery', '10 meals per week']
            this.laundrySummary = [
              'Wash and Iron',
              '1 bag (max. 30 items per bag)',
              'Picked up every week',
            ]
          }
          if (
            this.selectedService.includes('Food') &&
            this.selectedService.includes('Cleaning')
          ) {
            this.foodPrice = '68,000'
            this.cleaningPrice = '28,000'
            this.foodSummary = ['Daily delivery', '10 meals per week']
            this.cleaningSummary = ['Light cleaning', '3 rooms', 'Every week']
          }
          if (
            this.selectedService.includes('Cleaning') &&
            this.selectedService.includes('Laundry')
          ) {
            this.laundryPrice = '48,000'
            this.cleaningPrice = '44,000'

            this.laundrySummary = [
              'Wash and Iron',
              '3 bags (max. 30 items per bag)',
              'Picked up every two weeks',
            ]
            this.cleaningSummary = ['Light cleaning', '5 rooms', 'Every week']
          }
        } else if (this.selectedService.length === 1) {
          this.foodPrice = '68,000'
          this.laundryPrice = '96,000'
          this.cleaningPrice = '60,000'
          this.foodSummary = ['Daily delivery', '10 meals per week']
          this.laundrySummary = [
            'Wash and Iron',
            '3 bags (max. 30 items per bag)',
            'Picked up weekly',
          ]
          this.cleaningSummary = ['Light cleaning', '8 rooms', 'Every week']
        }
      }
      //
      if (this.estimate.toString() === '4') {
        if (this.selectedService.length === 3) {
          this.foodPrice = '80,800'
          this.laundryPrice = '32,000'
          this.cleaningPrice = '44,000'
          this.foodSummary = ['Daily delivery', '14 meals per week']
          this.laundrySummary = [
            'Wash and Iron',
            '1 bag (max. 30 items per bag)',
            'Picked up every week',
          ]
          this.cleaningSummary = ['Light cleaning', '5 rooms', 'Every week']
        } else if (this.selectedService.length === 2) {
          if (
            this.selectedService.includes('Food') &&
            this.selectedService.includes('Laundry')
          ) {
            this.foodPrice = '80,800'
            this.laundryPrice = '48,000'
            this.foodSummary = ['Daily delivery', '14 meals per week']
            this.laundrySummary = [
              'Wash and Iron',
              '3 bags (max. 30 items per bag)',
              'Picked up every two weeks',
            ]
          }
          if (
            this.selectedService.includes('Food') &&
            this.selectedService.includes('Cleaning')
          ) {
            this.foodPrice = '80,800'
            this.cleaningPrice = '44,000'
            this.foodSummary = ['Daily delivery', '14 meals per week']
            this.cleaningSummary = ['Light cleaning', '5 rooms', 'Every week']
          }
          if (
            this.selectedService.includes('Cleaning') &&
            this.selectedService.includes('Laundry')
          ) {
            this.laundryPrice = '48,000'
            this.cleaningPrice = '100,000'

            this.laundrySummary = [
              'Wash and Iron',
              '3 bags (max. 30 items per bag)',
              'Picked up every two weeks',
            ]
            this.cleaningSummary = ['Deep cleaning', '10 rooms', 'Every month']
          }
        } else if (this.selectedService.length === 1) {
          this.foodPrice = '148,000'
          this.laundryPrice = '128,000'
          this.cleaningPrice = '100,000'
          this.foodSummary = ['Daily delivery', '24 meals per week']
          this.laundrySummary = [
            'Wash and Iron',
            '4 bags (max. 30 items per bag)',
            'Picked up every week',
          ]
          this.cleaningSummary = ['Deep cleaning', '10 rooms', 'Every month']
        }
      }
    },
    getDefaultPrice(estimate) {
      switch (estimate.toString()) {
        case '0': {
          this.selectedService = []
          this.changeService('Food')
          this.foodPrice = '8,800'
          this.laundryPrice = '9,000'
          this.cleaningPrice = '8,000'
          break
        }
        case '1': {
          this.selectedService = ['Food']
          this.changeService('Laundry')
          break
        }
        case '2': {
          this.selectedService = ['Food', 'Laundry']
          this.changeService('Cleaning')
          break
        }
        case '3':
          this.selectedService = ['Food', 'Laundry']
          this.changeService('Cleaning')
          break
        case '4':
          this.selectedService = ['Food', 'Laundry']
          this.changeService('Cleaning')
          break
        case '5':
          break
        default:
          console.log('default')
      }
    },
    getEstimate() {
      this.getDefaultPrice(this.estimate)
      this.estimatedPrice = this.priceList[this.estimate]
      const labels = document.querySelectorAll('.range-labels li')
      labels.forEach((el, i) => {
        if (this.estimate >= i) {
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
      const val = this.estimate * 20

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
    getMealPrice(plan) {
      this.mealFrequency = plan
      this.toggle('food')
    },
    getLaundryPrice(plan) {
      if (plan.value.includes('wash')) {
        this.laundryType = plan.name
        this.toggle('laundryType')
      } else {
        this.laundryFrequency = plan.name
        this.toggle('laundryFreq')
      }
    },
    increaseOrder(order) {
      mixpanelTrackEvent(`Increase ${order} order clicked - pricing page`)

      if (order === 'washDry') {
        this.washDry++
        this.totalWashDryPrice = pricing({
          laundry: {
            item: 'wash-and-fold',
            frequency: this.washDryFrequency,
            qty: this.washDry,
          },
        })
      }

      if (order === 'washIron') {
        this.washIron++
        this.totalWashIronPrice = pricing({
          laundry: {
            item: 'wash-and-iron',
            frequency: this.washIronFrequency,
            qty: this.washIron,
          },
        })
      }
    },
    decreaseOrder(order) {
      mixpanelTrackEvent(`Decrease ${order} order clicked - pricing page`)

      if (order === 'washDry' && this.washDry > 1) {
        this.washDry--
        this.totalWashDryPrice = pricing({
          laundry: {
            item: 'wash-and-fold',
            frequency: this.washDryFrequency,
            qty: this.washDry,
          },
        })
      }

      if (order === 'washIron' && this.washIron > 1) {
        this.washIron--
        this.totalWashIronPrice = pricing({
          laundry: {
            item: 'wash-and-iron',
            frequency: this.washIronFrequency,
            qty: this.washIron,
          },
        })
      }
    },
    getCleaningPrice(plan) {
      if (plan.name.includes('cleaning')) {
        this.cleaningType = plan.name
        this.toggle('cleaningType')
      } else {
        this.cleaningFrequency = plan.name
        this.toggle('cleaningFreq')
      }
    },
    increaseRoom(item, index) {
      let qty = item.qty
      qty++
      const newQty = qty++
      this.cleaningQtyOption[index].qty = newQty
      if (newQty > 1) {
        this.roomTypes[index] = `${newQty + ' ' + item.label}s`
      } else {
        this.roomTypes[index] = `${newQty + ' ' + item.label}`
      }
    },
    decreaseRoom(item, index) {
      let qty = item.qty
      if (qty >= 1) {
        qty--
        const newQty = qty--
        this.cleaningQtyOption[index].qty = newQty
        if (newQty === 1) {
          this.roomTypes[index] = `${newQty + ' ' + item.label}`
        } else {
          this.roomTypes[index] = `${newQty + ' ' + item.label}s`
        }
        if (newQty === 0) {
          delete this.roomTypes[index]
        }
      }
    },
    getRoomTypes(rooms) {
      const filterRoom = rooms.filter((item) => {
        return item !== null
      })
      return filterRoom.join(', ')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_pricing.scss';
</style>
