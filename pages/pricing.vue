<template>
  <div class="container--pricing">
    <section ref="price-container" class="pricing">
      <div class="pricing__form-container">
        <div class="pricing__form">
          <div class="pricing__form-title">
            <h2>Pricing</h2>
            <p>You think Eden is expensive? Oya do am if e easy.</p>
          </div>
          <div
            v-show="!reconfigurePlan && !setCustom"
            class="pricing__form-slider"
          >
            <div class="pricing__form-slider--title">
              <p>What is your estimate monthly expense?</p>
              <h3>
                <span v-if="estimate === '5'">+</span>₦{{
                  formatNumber(estimatedPrice)
                }}
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
                :value="service.name"
                class="service"
                :class="{
                  selected: selectedService.includes(service.name),
                }"
              >
                <input
                  :id="service.name"
                  type="checkbox"
                  :name="service.name"
                  :value="service.name"
                  @change="changeService(service)"
                />
                <label
                  :for="service"
                  :class="{
                    checkmark: selectedService.includes(service.name),
                  }"
                >
                  {{ service.name }}</label
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
                v-model="form.email"
                type="email"
                name=""
                placeholder="Enter your email address"
                :class="{ 'has-error': $v.form.email.$error }"
              />
            </div>
            <div class="pricing__plan-input number">
              <label for="phone">Phone Number</label>
              <input
                id=""
                v-model.trim="$v.form.phone_number.$model"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                type="text"
                name=""
                placeholder="Enter your phone number"
                :class="{ 'has-error': $v.form.phone_number.$error }"
              />
            </div>
            <button
              class="pricing__plan-btn sales-btn"
              @click="sendUserInfoIntercom"
            >
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
              For <span>₦{{ formatNumber(estimatedPrice) }}</span> monthly, you
              can get:
            </p>
            <transition name="slide-fade">
              <ul v-if="selectedService.includes('Food')">
                <p>
                  <span>Food plan</span>
                  <span>₦{{ formatNumber(services[0].price) }}</span>
                </p>
                <li v-for="(item, i) in foodSummary" :key="i">{{ item }}</li>
              </ul>
            </transition>
            <transition name="slide-fade">
              <ul v-if="selectedService.includes('Laundry')">
                <p>
                  <span>Laundry plan</span>
                  <span>₦{{ formatNumber(services[1].price) }}</span>
                </p>
                <li v-for="(item, i) in laundrySummary" :key="i">{{ item }}</li>
              </ul>
            </transition>
            <transition name="slide-fade">
              <ul v-if="selectedService.includes('Cleaning')">
                <p>
                  <span>Cleaning plan</span>
                  <span>₦{{ formatNumber(services[2].price) }}</span>
                </p>
                <li v-for="(item, i) in cleaningSummary" :key="i">
                  {{ item }}
                </li>
              </ul>
            </transition>
            <p class="pricing__plan-subtotal">
              <span>Subtotal</span>
              <span>₦ {{ formatNumber(subtotalPrice) }}</span>
            </p>
            <p class="pricing__plan-discount">
              <span>Discount (20% discount off your first month)</span>
              <span>- ₦ {{ formatNumber(discountPrice) }}</span>
            </p>
            <p class="pricing__plan-total">
              <span>Total</span> <span>₦ {{ formatNumber(totalPrice) }}</span>
            </p>
            <div class="pricing__plan-reconfigure">
              <div class="reconfigure">
                <p>Not what you want?</p>
                <button
                  class="reconfigure-btn"
                  @click.prevent="setPlanConfig()"
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
            <transition name="slide-fade">
              <div v-if="selectedService.includes('Food')" class="calculator">
                <div class="calculator__header">
                  <p>Food plan</p>
                  <button
                    class="calculator__header-btn"
                    @click.prevent="removePlan('Food')"
                  >
                    Remove plan
                  </button>
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
                                <li
                                  v-for="(item, i) in mealTypeOption"
                                  :key="i"
                                >
                                  <span @click.prevent="getMealPrice(item)">{{
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
                      <label for="">Number of meals per day</label>
                      <div class="meal">
                        <input
                          id=""
                          v-model="mealQty"
                          type="number"
                          name=""
                          placeholder="0"
                          min="1"
                          max="20"
                          class="meal--input"
                        />
                        <span class="meal--label">meals </span>
                      </div>
                    </div>
                  </div>
                  <div class="calculator__footer">
                    <p>Food amount</p>
                    <p>₦{{ formatNumber(services[0].price) }}/month</p>
                  </div>
                </div>
              </div>
            </transition>
            <!-- laundry -->
            <transition name="slide-fade">
              <div
                v-if="selectedService.includes('Laundry')"
                class="calculator"
              >
                <div class="calculator__header">
                  <p>Laundry plan</p>
                  <button
                    class="calculator__header-btn"
                    @click.prevent="removePlan('Laundry')"
                  >
                    Remove plan
                  </button>
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
                            :class="{
                              expanded: visible.includes('laundryType'),
                            }"
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
                            :class="{
                              hidden: !visible.includes('laundryType'),
                            }"
                          >
                            <transition name="slide-fade">
                              <ul>
                                <li
                                  v-for="(item, i) in laundryTypeOption"
                                  :key="i"
                                >
                                  <span
                                    @click.prevent="getLaundryPrice(item)"
                                    >{{ item.name }}</span
                                  >
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
                            :class="{
                              expanded: visible.includes('laundryFreq'),
                            }"
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
                            :class="{
                              hidden: !visible.includes('laundryFreq'),
                            }"
                          >
                            <transition name="slide-fade">
                              <ul>
                                <li
                                  v-for="(item, i) in frequencyOption"
                                  :key="i"
                                >
                                  <span
                                    @click.prevent="getLaundryPrice(item)"
                                    >{{ item.name }}</span
                                  >
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
                      class="calculator__input-item calculator__input-laundry"
                    >
                      <label for="">Number of laundry bags</label>
                      <div class="btn--group">
                        <button
                          class="btn--item minus"
                          @click.prevent="decreaseLaundryOrder()"
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
                          v-model="laundryQty"
                          type="number"
                          name=""
                          readonly
                          placeholder="0"
                        />
                        <button
                          class="btn--item plus"
                          @click.prevent="increaseLaundryOrder()"
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
                    <p>₦{{ formatNumber(services[1].price) }}/month</p>
                  </div>
                </div>
              </div>
            </transition>
            <!-- cleaning -->
            <transition
              v-if="selectedService.includes('Cleaning')"
              name="slide-fade"
            >
              <div class="calculator">
                <div class="calculator__header">
                  <p>Cleaning plan</p>
                  <button
                    class="calculator__header-btn"
                    @click.prevent="removePlan('Cleaning')"
                  >
                    Remove plan
                  </button>
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
                            :class="{
                              hidden: !visible.includes('cleaningType'),
                            }"
                          >
                            <transition name="slide-fade">
                              <ul>
                                <li
                                  v-for="(item, i) in cleaningTypeOption"
                                  :key="i"
                                >
                                  <span
                                    @click.prevent="getCleaningPrice(item)"
                                    >{{ item.name }}</span
                                  >
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
                            :class="{
                              hidden: !visible.includes('cleaningFreq'),
                            }"
                          >
                            <transition name="slide-fade">
                              <ul>
                                <li
                                  v-for="(item, i) in frequencyOption"
                                  :key="i"
                                >
                                  <span
                                    @click.prevent="getCleaningPrice(item)"
                                    >{{ item.name }}</span
                                  >
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
                            <span>{{ roomTypes }}</span>
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
                            :class="{
                              hidden: !visible.includes('cleaningQty'),
                            }"
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
                                      @click.prevent="decreaseRoomQty(item, i)"
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
                                      @click.prevent="increaseRoomQty(item, i)"
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
                    <p>₦{{ formatNumber(services[2].price) }}/month</p>
                  </div>
                </div>
              </div>
            </transition>
            <p class="pricing__calculator-subtotal">
              <span>Subtotal</span>
              <span>₦ {{ formatNumber(subtotalPrice) }}</span>
            </p>
            <p class="pricing__calculator-discount">
              <span>Discount (20% discount off your first month)</span>
              <span>- ₦ {{ formatNumber(discountPrice) }}</span>
            </p>
            <p class="pricing__calculator-total">
              <span>Total</span> <span>₦ {{ formatNumber(totalPrice) }}</span>
            </p>
            <div class="pricing__calculator-footer">
              <button
                class="pricing__calculator-switch"
                @click.prevent="switchToEstimate()"
              >
                Use estimate
              </button>
              <button
                class="pricing__calculator-btn"
                @click.prevent="setReconfigureSummary()"
              >
                Break up with chores
              </button>
            </div>
          </div>
        </transition>
      </div>
    </section>

    <modal v-if="showSuccessModal" :show-modal="showSuccessModal" class="modal">
      <div slot="header"></div>
      <div slot="body" class="modal__body">
        <div class="pricing__modal">
          <div class="pricing__modal-title">
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
          <div class="pricing__modal-body">
            <img
              :src="require(`~/assets/images/successful.svg`)"
              alt="failed"
            />
            <h5>Information Submitted</h5>
            <p>
              You have successfully submitted your information. We will reach
              out to you within the next 48 hours.
            </p>
            <button
              type="submit"
              class="btn--submit"
              @click.prevent="showSuccessModal = !showSuccessModal"
            >
              Continue Browsing
            </button>
          </div>
        </div>
      </div>
      <div slot="footer"></div>
    </modal>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import { currencyFormat, formatNumber } from '~/static/functions'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import { pricing } from '~/static/pricing'

export default {
  components: {
    Modal: () => import('@/components/Modal.vue'),
  },
  mixins: [validationMixin],
  validations: {
    form: {
      email: { required, email },
      phone_number: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
    },
  },
  data() {
    return {
      showSuccessModal: false,
      selectedService: ['Food', 'Laundry', 'Cleaning'],
      services: [
        { name: 'Food', price: '' },
        { name: 'Laundry', price: '' },
        { name: 'Cleaning', price: '' },
      ],
      form: {
        email: '',
        phone_number: '',
      },
      estimate: 3,
      displayForm: false,
      setCustom: false,
      estimatedPrice: '50000',
      priceList: ['10000', '20000', '50000', '100000', '150000', '150000'],
      reconfigurePlan: false,
      visible: [],
      mealFrequency: 'Daily',
      mealQty: 1,
      laundryFrequency: 'Every two weeks',
      laundryType: 'Wash & Fold',
      frequencyOption: [
        {
          name: 'Once a week',
          value: 'weekly',
          label: 'weekly',
        },
        {
          name: 'Every two weeks',
          value: 'bi-weekly',
          label: 'every two weeks',
        },
        {
          name: 'Once a month',
          value: 'monthly',
          label: 'once a month',
        },
      ],
      mealTypeOption: [
        {
          name: 'Daily',
          value: 'daily',
        },
        {
          name: 'Weekly',
          value: 'weekly',
        },
        {
          name: 'Twice a week',
          value: 'weekly-twodays',
        },
      ],
      laundryTypeOption: [
        {
          name: 'Wash & Fold',
          value: 'wash-and-fold',
        },
        {
          name: 'Wash & Iron',
          value: 'wash-and-iron',
        },
      ],
      laundryQty: 1,
      cleaningFrequency: 'Every two weeks',
      cleaningType: 'Light cleaning',
      cleaningTypeOption: [
        {
          name: 'Light cleaning',
          value: 'light-cleaning',
          type: 'cleaning',
        },
        {
          name: 'Deep cleaning',
          value: 'deep-cleaning',
          type: 'cleaning',
        },
        {
          name: 'Fumigation',
          value: 'fumigation',
          type: 'cleaning',
        },
      ],
      roomTypes: null,
      cleaningQtyOption: [
        {
          name: 'Bedroom',
          value: 'bedrooms',
          label: 'bedroom',
          qty: 1,
        },
        {
          name: 'Bathroom',
          value: 'bathrooms',
          label: 'bathroom',
          qty: 1,
        },
        {
          name: 'Living and Dining room',
          value: 'living-rooms-dining-areas',
          label: 'living room',
          qty: 1,
        },
        {
          name: 'Kitchen',
          value: 'kitchen',
          label: 'kitchen',
          qty: 1,
        },
        {
          name: 'Study',
          value: 'study',
          label: 'study',
          qty: 0,
        },
        {
          name: 'Balcony',
          value: 'balcony',
          label: 'balcony',
          qty: 0,
        },
      ],
      foodSummary: [],
      laundrySummary: [],
      cleaningSummary: [],
      totalPrice: '',
      subtotalPrice: '',
      discountPrice: '',
      laundryTypeValue: 'wash-and-fold',
      laundryFreqValue: 'bi-weekly',
      laundryFreqName: 'every two weeks',
      cleaningTypeValue: 'light-cleaning',
      cleaningFrequencyValue: 'bi-weekly',
      cleaningServiceTypes: [],
      cleaningInfo: {
        item: 'light-cleaning',
        itemAreas: {},
        itemAreasPrice: {},
        frequency: 'bi-weekly',
        qty: 4,
      },
    }
  },
  watch: {
    mealQty(val) {
      if (this.mealFrequency.toLowerCase() === 'daily') {
        if (val > 5) {
          this.mealQty = 5
        } else {
          this.mealQty = val
        }
      }
      if (this.mealFrequency.toLowerCase() === 'weekly') {
        if (val > 4) {
          this.mealQty = 4
        } else {
          this.mealQty = val
        }
      }
      if (this.mealFrequency === 'Twice a week') {
        if (val > 2) {
          this.mealQty = 2
        } else {
          this.mealQty = val
        }
      }
      this.calculateFoodPrice()
    },
    laundryQty(val) {
      if (val > 5) {
        this.laundryQty = 5
      } else {
        this.laundryQty = val
      }
    },
  },
  mounted() {
    mixpanelTrackEvent('Pricing page')
    this.getCleaningServiceTypes()
  },
  methods: {
    currencyFormat,
    formatNumber,
    sendUserInfoIntercom() {
      mixpanelTrackEvent('Contact sales button clicked', 'pricing page')
      this.$v.form.$touch()
      if (!this.$v.form.$error) {
        this.$intercom('update', {
          email: this.form.email,
          phone: this.form.phone_number,
        })
        const metadata = {
          phone_number: this.form.phone_number,
          email: this.form.email,
        }
        this.$intercom('trackEvent', 'request-custom-pricing', metadata)
        this.$nextTick(() => {
          this.showSuccessModal = true
          this.form.email = ''
          this.form.phone_number = ''
        })
      }
    },
    switchToEstimate() {
      this.$refs['price-container'].scrollIntoView()
      this.reconfigurePlan = !this.reconfigurePlan
      this.setCustom = false
      this.displayForm = false
      this.estimate = 3
      this.selectedService = ['Food', 'Laundry', 'Cleaning']
      this.getEstimate()
    },
    setPlanConfig() {
      this.$refs['price-container'].scrollIntoView()
      this.reconfigurePlan = !this.reconfigurePlan
      this.estimate = 3
      this.selectedService = ['Food', 'Laundry', 'Cleaning']
      this.setCustom = true
      this.getEstimate()
    },
    setReconfigureSummary() {
      this.$refs['price-container'].scrollIntoView()
      this.reconfigurePlan = !this.reconfigurePlan
      this.displayForm = true
      this.estimatedPrice = this.subtotalPrice
      this.setBackgroundGradient()
    },
    removePlan(plan) {
      if (
        this.selectedService.length > 1 &&
        this.selectedService.includes(plan)
      ) {
        this.selectedService = this.selectedService.filter(
          (item) => item !== plan
        )
      } else if (
        this.selectedService.length >= 1 &&
        !this.selectedService.includes(plan)
      ) {
        this.selectedService.push(plan)
      }
      this.getTotalPrice(this.services, this.selectedService)
    },
    toggle(plan) {
      if (this.visible.includes(plan)) {
        this.visible = this.visible.filter((item) => item !== plan)
      } else {
        this.visible.push(plan)
      }
    },
    getTotalPrice(array1, array2) {
      const finalArray = []
      array1.forEach((e1) =>
        array2.forEach((e2) => {
          if (e1.name === e2) {
            finalArray.push(e1)
          }
        })
      )
      const subtotal = finalArray.reduce((acc, val) => {
        const valInt = parseInt(val.price)
        return acc + valInt
      }, 0)

      this.subtotalPrice = subtotal.toString()
      const discount = subtotal * 0.2
      this.discountPrice = discount.toString()
      this.totalPrice = (subtotal - discount).toString()
    },
    changeService(service) {
      // estimated price 10,000
      if (this.estimate === '0') {
        this.selectedService.pop()
        this.selectedService.push(service.name)
        this.mealQty = 0.2
        this.mealFrequency = 'Weekly'
        this.calculateFoodPrice()
        this.laundryFreqName = 'every two weeks'
        this.laundryType = 'Wash & Fold'
        this.laundryTypeValue = 'wash-and-fold'
        this.laundryFreqValue = 'bi-weekly'
        this.laundryQty = 1
        this.calculateLaundryPrice()
        this.cleaningType = 'Light cleaning'
        this.cleaningFrequency = 'Every two weeks'
        this.cleaningQtyOption[0].qty = 1
        this.cleaningQtyOption[1].qty = 1
        this.cleaningQtyOption[4].qty = 0
        this.cleaningQtyOption[5].qty = 0
        this.getEstimateRoomTypes()
        this.setCleaningArea('light cleaning')
        this.cleaningInfo.item = 'light-cleaning'
        this.cleaningInfo.frequency = 'bi-weekly'
        this.calculateCleaningPrice()
        return
      }

      // estimated price 20,000
      if (this.estimate === '1') {
        if (
          this.selectedService.length > 1 &&
          this.selectedService.includes(service.name)
        ) {
          this.selectedService = this.selectedService.filter(
            (item) => item !== service.name
          )
        } else if (
          this.selectedService.length >= 1 &&
          this.selectedService.length < 2 &&
          !this.selectedService.includes(service.name)
        ) {
          this.selectedService.push(service.name)
        }

        if (this.selectedService.length > 1) {
          this.mealQty = 0.2
          this.mealFrequency = 'Weekly'
          this.calculateFoodPrice()
          this.laundryFreqName = 'every two weeks'
          this.laundryType = 'Wash & Fold'
          this.laundryTypeValue = 'wash-and-fold'
          this.laundryFreqValue = 'bi-weekly'
          this.laundryQty = 1
          this.calculateLaundryPrice()
          this.cleaningType = 'Light cleaning'
          this.cleaningFrequency = 'Every two weeks'
          this.cleaningQtyOption[0].qty = 1
          this.cleaningQtyOption[1].qty = 1
          this.cleaningQtyOption[4].qty = 0
          this.cleaningQtyOption[5].qty = 0
          this.getEstimateRoomTypes()
          this.setCleaningArea('light cleaning')
          this.cleaningInfo.item = 'light-cleaning'
          this.cleaningInfo.frequency = 'bi-weekly'
          this.calculateCleaningPrice()
        } else {
          this.mealQty = 0.4
          this.mealFrequency = 'Weekly'
          this.calculateFoodPrice()
          this.laundryType = 'Wash & Iron'
          this.laundryFreqName = 'every two weeks'
          this.laundryTypeValue = 'wash-and-iron'
          this.laundryFreqValue = 'bi-weekly'
          this.laundryQty = 1
          this.calculateLaundryPrice()
          this.cleaningType = 'Light cleaning'
          this.cleaningFrequency = 'Once a week'
          this.setCleaningArea('light cleaning')
          this.cleaningInfo.item = 'light-cleaning'
          this.cleaningQtyOption[0].qty = 1
          this.cleaningQtyOption[1].qty = 1
          this.cleaningQtyOption[4].qty = 0
          this.cleaningQtyOption[5].qty = 0
          this.getEstimateRoomTypes()
          this.cleaningInfo.frequency = 'weekly'
          this.calculateCleaningPrice()
        }
        return
      }

      // add and remove service control for estimate 50,000 and above
      if (
        this.selectedService.length > 1 &&
        this.selectedService.includes(service.name)
      ) {
        this.selectedService = this.selectedService.filter(
          (item) => item !== service.name
        )
      } else if (
        this.selectedService.length >= 1 &&
        !this.selectedService.includes(service.name)
      ) {
        this.selectedService.push(service.name)
      }

      // estimated price 50,000
      if (this.estimate.toString() === '2') {
        if (this.selectedService.length === 3) {
          this.mealQty = 0.4
          this.mealFrequency = 'Weekly'
          this.calculateFoodPrice()
          this.laundryType = 'Wash & Iron'
          this.laundryFreqName = 'every two weeks'
          this.laundryTypeValue = 'wash-and-iron'
          this.laundryFreqValue = 'bi-weekly'
          this.laundryQty = 1
          this.calculateLaundryPrice()
          this.cleaningType = 'Light cleaning'
          this.cleaningFrequency = 'Every two weeks'
          this.cleaningQtyOption[0].qty = 2
          this.cleaningQtyOption[1].qty = 3
          this.cleaningQtyOption[4].qty = 0
          this.cleaningQtyOption[5].qty = 0
          this.getEstimateRoomTypes()
          this.setCleaningArea('light cleaning')
          this.cleaningInfo.item = 'light-cleaning'
          this.cleaningInfo.frequency = 'bi-weekly'
          this.calculateCleaningPrice()
        } else if (this.selectedService.length === 2) {
          if (
            this.selectedService.includes('Food') &&
            this.selectedService.includes('Laundry')
          ) {
            this.mealQty = 1
            this.mealFrequency = 'Weekly'
            this.calculateFoodPrice()
            this.laundryFreqName = 'every two weeks'
            this.laundryType = 'Wash & Fold'
            this.laundryTypeValue = 'wash-and-fold'
            this.laundryFreqValue = 'bi-weekly'
            this.laundryQty = 1
            this.calculateLaundryPrice()
          }
          if (
            this.selectedService.includes('Food') &&
            this.selectedService.includes('Cleaning')
          ) {
            this.mealQty = 1
            this.mealFrequency = 'Weekly'
            this.calculateFoodPrice()
            this.cleaningType = 'Light cleaning'
            this.cleaningFrequency = 'Every two weeks'
            this.cleaningQtyOption[0].qty = 2
            this.cleaningQtyOption[1].qty = 3
            this.cleaningQtyOption[4].qty = 0
            this.cleaningQtyOption[5].qty = 0
            this.getEstimateRoomTypes()
            this.setCleaningArea('light cleaning')
            this.cleaningInfo.item = 'light-cleaning'
            this.cleaningInfo.frequency = 'bi-weekly'
            this.calculateCleaningPrice()
          }
          if (
            this.selectedService.includes('Cleaning') &&
            this.selectedService.includes('Laundry')
          ) {
            this.laundryFreqName = 'weekly'
            this.laundryType = 'Wash & Iron'
            this.laundryTypeValue = 'wash-and-iron'
            this.laundryFreqValue = 'weekly'
            this.laundryQty = 1
            this.calculateLaundryPrice()
            this.cleaningType = 'Light cleaning'
            this.cleaningFrequency = 'Every two weeks'
            this.cleaningQtyOption[0].qty = 2
            this.cleaningQtyOption[1].qty = 3
            this.cleaningQtyOption[4].qty = 0
            this.cleaningQtyOption[5].qty = 0
            this.getEstimateRoomTypes()
            this.setCleaningArea('light cleaning')
            this.cleaningInfo.item = 'light-cleaning'
            this.cleaningInfo.frequency = 'bi-weekly'
            this.calculateCleaningPrice()
          }
        } else if (this.selectedService.length === 1) {
          this.mealQty = 0.4
          this.mealFrequency = 'Weekly'
          this.calculateFoodPrice()
          this.laundryFreqName = 'every two weeks'
          this.laundryType = 'Wash & Iron'
          this.laundryTypeValue = 'wash-and-iron'
          this.laundryFreqValue = 'bi-weekly'
          this.laundryQty = 1
          this.calculateLaundryPrice()
          this.cleaningType = 'Light cleaning'
          this.cleaningFrequency = 'Every two weeks'
          this.cleaningQtyOption[0].qty = 2
          this.cleaningQtyOption[1].qty = 3
          this.cleaningQtyOption[4].qty = 0
          this.cleaningQtyOption[5].qty = 0
          this.getEstimateRoomTypes()
          this.setCleaningArea('light cleaning')
          this.cleaningInfo.item = 'light-cleaning'
          this.cleaningInfo.frequency = 'bi-weekly'
          this.calculateCleaningPrice()
        }
      }
      // estimated price 100,000
      if (this.estimate.toString() === '3') {
        if (this.selectedService.length === 3) {
          this.mealQty = 1
          this.mealFrequency = 'Daily'
          this.calculateFoodPrice()
          this.laundryFreqName = 'every two weeks'
          this.laundryType = 'Wash & Iron'
          this.laundryTypeValue = 'wash-and-iron'
          this.laundryFreqValue = 'bi-weekly'
          this.laundryQty = 1
          this.calculateLaundryPrice()
          this.cleaningType = 'Deep cleaning'
          this.cleaningFrequency = 'Once a month'
          this.cleaningQtyOption[0].qty = 1
          this.cleaningQtyOption[1].qty = 1
          this.cleaningQtyOption[4].qty = 0
          this.cleaningQtyOption[5].qty = 0
          this.getEstimateRoomTypes()
          this.setCleaningArea('deep cleaning')
          this.cleaningInfo.item = 'deep-cleaning'
          this.cleaningInfo.frequency = 'monthly'
          this.calculateCleaningPrice()
        } else if (this.selectedService.length === 2) {
          if (
            this.selectedService.includes('Food') &&
            this.selectedService.includes('Laundry')
          ) {
            this.mealQty = 2
            this.mealFrequency = 'Twice a week'
            this.calculateFoodPrice()
            this.laundryFreqName = 'weekly'
            this.laundryType = 'Wash & Iron'
            this.laundryTypeValue = 'wash-and-iron'
            this.laundryFreqValue = 'weekly'
            this.laundryQty = 1
            this.calculateLaundryPrice()
          }
          if (
            this.selectedService.includes('Food') &&
            this.selectedService.includes('Cleaning')
          ) {
            this.mealQty = 2
            this.mealFrequency = 'Twice a week'
            this.calculateFoodPrice()
            this.cleaningType = 'Deep cleaning'
            this.cleaningFrequency = 'Once a month'
            this.setCleaningArea('deep cleaning')
            this.cleaningInfo.item = 'deep-cleaning'
            this.cleaningQtyOption[0].qty = 1
            this.cleaningQtyOption[1].qty = 1
            this.cleaningQtyOption[4].qty = 0
            this.cleaningQtyOption[5].qty = 0
            this.getEstimateRoomTypes()
            this.cleaningInfo.frequency = 'monthly'
            this.calculateCleaningPrice()
          }
          if (
            this.selectedService.includes('Cleaning') &&
            this.selectedService.includes('Laundry')
          ) {
            this.laundryFreqName = 'every two weeks'
            this.laundryType = 'Wash & Iron'
            this.laundryTypeValue = 'wash-and-iron'
            this.laundryFreqValue = 'bi-weekly'
            this.laundryQty = 3
            this.calculateLaundryPrice()
            this.cleaningType = 'Deep cleaning'
            this.cleaningFrequency = 'Every two weeks'
            this.setCleaningArea('deep cleaning')
            this.cleaningInfo.item = 'deep-cleaning'
            this.cleaningQtyOption[0].qty = 1
            this.cleaningQtyOption[1].qty = 1
            this.cleaningQtyOption[4].qty = 0
            this.cleaningQtyOption[5].qty = 0
            this.getEstimateRoomTypes()
            this.cleaningInfo.frequency = 'bi-weekly'
            this.calculateCleaningPrice()
          }
        } else if (this.selectedService.length === 1) {
          this.mealQty = 2
          this.mealFrequency = 'Twice a week'
          this.calculateFoodPrice()
          this.laundryFreqName = 'weekly'
          this.laundryType = 'Wash & Iron'
          this.laundryTypeValue = 'wash-and-iron'
          this.laundryFreqValue = 'weekly'
          this.laundryQty = 3
          this.calculateLaundryPrice()
          this.cleaningType = 'Deep cleaning'
          this.cleaningFrequency = 'Once a week'
          this.setCleaningArea('deep cleaning')
          this.cleaningInfo.item = 'deep-cleaning'
          this.cleaningQtyOption[0].qty = 1
          this.cleaningQtyOption[1].qty = 1
          this.cleaningQtyOption[4].qty = 0
          this.cleaningQtyOption[5].qty = 0
          this.getEstimateRoomTypes()
          this.cleaningInfo.frequency = 'weekly'
          this.calculateCleaningPrice()
        }
      }
      // estimated price 150,000
      if (this.estimate.toString() === '4') {
        if (this.selectedService.length === 3) {
          this.mealQty = 2
          this.mealFrequency = 'Daily'
          this.calculateFoodPrice()
          this.laundryFreqName = 'weekly'
          this.laundryType = 'Wash & Iron'
          this.laundryTypeValue = 'wash-and-iron'
          this.laundryFreqValue = 'weekly'
          this.laundryQty = 1
          this.calculateLaundryPrice()
          this.cleaningType = 'Light cleaning'
          this.cleaningFrequency = 'Once a week'
          this.cleaningQtyOption[0].qty = 3
          this.cleaningQtyOption[1].qty = 4
          this.cleaningQtyOption[4].qty = 0
          this.cleaningQtyOption[5].qty = 0
          this.getEstimateRoomTypes()
          this.setCleaningArea('light cleaning')
          this.cleaningInfo.item = 'light-cleaning'
          this.cleaningInfo.frequency = 'weekly'
          this.calculateCleaningPrice()
        } else if (this.selectedService.length === 2) {
          if (
            this.selectedService.includes('Food') &&
            this.selectedService.includes('Laundry')
          ) {
            this.mealQty = 2
            this.mealFrequency = 'Daily'
            this.calculateFoodPrice()
            this.laundryFreqName = 'every two weeks'
            this.laundryType = 'Wash & Iron'
            this.laundryTypeValue = 'wash-and-iron'
            this.laundryFreqValue = 'bi-weekly'
            this.laundryQty = 3
            this.calculateLaundryPrice()
          }
          if (
            this.selectedService.includes('Food') &&
            this.selectedService.includes('Cleaning')
          ) {
            this.mealQty = 2
            this.mealFrequency = 'Daily'
            this.calculateFoodPrice()
            this.cleaningType = 'Light cleaning'
            this.cleaningFrequency = 'Once a week'
            this.cleaningQtyOption[0].qty = 4
            this.cleaningQtyOption[1].qty = 5
            this.cleaningQtyOption[4].qty = 1
            this.cleaningQtyOption[5].qty = 1
            this.getEstimateRoomTypes()
            this.setCleaningArea('light cleaning')
            this.cleaningInfo.item = 'light-cleaning'
            this.cleaningInfo.frequency = 'weekly'
            this.calculateCleaningPrice()
          }
          if (
            this.selectedService.includes('Cleaning') &&
            this.selectedService.includes('Laundry')
          ) {
            this.laundryFreqName = 'weekly'
            this.laundryType = 'Wash & Iron'
            this.laundryTypeValue = 'wash-and-iron'
            this.laundryFreqValue = 'weekly'
            this.laundryQty = 3
            this.calculateLaundryPrice()
            this.cleaningType = 'Deep cleaning'
            this.cleaningFrequency = 'Once a month'
            this.cleaningQtyOption[0].qty = 4
            this.cleaningQtyOption[1].qty = 5
            this.cleaningQtyOption[4].qty = 1
            this.cleaningQtyOption[5].qty = 1
            this.getEstimateRoomTypes()
            this.setCleaningArea('deep cleaning')
            this.cleaningInfo.item = 'deep-cleaning'
            this.cleaningInfo.frequency = 'monthly'
            this.calculateCleaningPrice()
          }
        } else if (this.selectedService.length === 1) {
          this.mealQty = 3
          this.mealFrequency = 'Daily'
          this.calculateFoodPrice()
          this.laundryFreqName = 'weekly'
          this.laundryType = 'Wash & Iron'
          this.laundryTypeValue = 'wash-and-iron'
          this.laundryFreqValue = 'weekly'
          this.laundryQty = 4
          this.calculateLaundryPrice()
          this.cleaningType = 'Deep cleaning'
          this.cleaningFrequency = 'Every two weeks'
          this.cleaningQtyOption[0].qty = 4
          this.cleaningQtyOption[1].qty = 5
          this.cleaningQtyOption[4].qty = 2
          this.cleaningQtyOption[5].qty = 2
          this.getEstimateRoomTypes()
          this.setCleaningArea('deep cleaning')
          this.cleaningInfo.item = 'deep-cleaning'
          this.cleaningInfo.frequency = 'bi-weekly'
          this.calculateCleaningPrice()
        }
      }
    },
    getDefaultPrice(estimate) {
      switch (estimate.toString()) {
        case '0': {
          this.selectedService = []
          const defaultService = { name: 'Food', price: '8800' }
          this.changeService(defaultService)
          break
        }
        case '1': {
          this.selectedService = ['Food']
          const defaultService = { name: 'Laundry', price: '' }
          this.changeService(defaultService)
          break
        }
        case '2': {
          this.selectedService = ['Food', 'Laundry']
          const defaultService = { name: 'Cleaning', price: '' }
          this.changeService(defaultService)
          break
        }
        case '3': {
          this.selectedService = ['Food', 'Laundry']
          const defaultService = { name: 'Cleaning', price: '' }
          this.changeService(defaultService)
          break
        }
        case '4': {
          this.selectedService = ['Food', 'Laundry']
          const defaultService = { name: 'Cleaning', price: '' }
          this.changeService(defaultService)
          break
        }
        case '5':
          break
        default:
          console.log('default')
      }
    },
    getEstimate() {
      this.setBackgroundGradient()
      this.getDefaultPrice(this.estimate)
      this.estimatedPrice = this.priceList[this.estimate]
    },
    setBackgroundGradient() {
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

    // Food claculator
    calculateFoodPrice() {
      if (this.mealFrequency.toLowerCase() === 'daily') {
        const total = pricing({
          meal: { item: null, frequency: 'daily', qty: this.mealQty },
        })
        this.services[0].price = total.toString()
        this.getTotalPrice(this.services, this.selectedService)
        this.foodSummary = [
          `Daily delivery`,
          `${this.mealQty} meal${this.mealQty > 1 ? 's' : ''} per day`,
        ]
      }
      if (this.mealFrequency.toLowerCase() === 'weekly') {
        const total = pricing({
          meal: { item: null, frequency: 'weekly', qty: this.mealQty * 5 },
        })
        this.services[0].price = total.toString()
        this.getTotalPrice(this.services, this.selectedService)
        this.foodSummary = [
          `Weekly delivery`,
          `${this.mealQty * 5} meal${this.mealQty * 5 > 1 ? 's' : ''} per week`,
          'Delivered once a week',
        ]
      }
      if (this.mealFrequency === 'Twice a week') {
        const total = pricing({
          meal: {
            item: null,
            frequency: 'weekly-twodays',
            qty: this.mealQty * 5,
          },
        })
        this.services[0].price = total.toString()
        this.getTotalPrice(this.services, this.selectedService)
        this.foodSummary = [
          `Weekly delivery`,
          `${this.mealQty * 5} meals per week`,
          'Delivered twice a week',
        ]
      }
    },
    getMealPrice(plan) {
      this.mealFrequency = plan.name
      this.calculateFoodPrice()
      this.toggle('food')
    },

    // Laundry calculator
    getLaundryPrice(plan) {
      if (plan.value.includes('wash')) {
        this.laundryType = plan.name
        this.laundryTypeValue = plan.value
        this.calculateLaundryPrice()
        this.toggle('laundryType')
      } else {
        this.laundryFreqName = plan.label
        this.laundryFrequency = plan.name
        this.laundryFreqValue = plan.value
        this.calculateLaundryPrice()
        this.toggle('laundryFreq')
      }
    },
    calculateLaundryPrice() {
      const total = pricing({
        laundry: {
          item: this.laundryTypeValue,
          frequency: this.laundryFreqValue,
          qty: this.laundryQty,
        },
      })
      this.services[1].price = total.toString()
      this.getTotalPrice(this.services, this.selectedService)
      this.laundrySummary = [
        `${this.laundryType}`,
        `${this.laundryQty} bag${
          this.laundryQty > 1 ? 's' : ''
        } (max. 30 items per bag)`,
        `Picked up ${this.laundryFreqName}`,
      ]
    },
    increaseLaundryOrder() {
      if (this.laundryQty < 5) {
        this.laundryQty++
        this.calculateLaundryPrice()
      }
    },
    decreaseLaundryOrder() {
      if (this.laundryQty > 1) {
        this.laundryQty--
        this.calculateLaundryPrice()
      }
    },

    // Cleaning calculator
    getCleaningServiceTypes() {
      fetch(`https://api-staging.edenlife.ng/api/v3/website/cleaning/items/all`)
        .then((res) => res.json())
        .then((cleaningResponse) => {
          this.cleaningServiceTypes = cleaningResponse.data
          this.setCleaningArea('light cleaning')
          this.getEstimate()
        })
    },
    calculateCleaningPrice() {
      const {
        item,
        itemAreas,
        itemAreasPrice,
        frequency,
        qty,
      } = this.cleaningInfo
      const total = pricing({
        cleaning: {
          item,
          itemAreas,
          itemAreasPrice,
          frequency,
          qty,
        },
      })
      this.services[2].price = total.toString()
      this.getTotalPrice(this.services, this.selectedService)
      this.cleaningSummary = [
        `${this.cleaningType}`,
        `${this.roomTypes}`,
        `${this.cleaningFrequency}`,
      ]
    },
    setCleaningArea(area) {
      const selectedArea = this.cleaningServiceTypes.filter((item) => {
        return item.name.toLowerCase() === area.toLowerCase()
      })
      selectedArea[0].cleaning_areas.forEach((area) => {
        this.cleaningInfo.itemAreasPrice[area.slug] = area.price
      })
      selectedArea[0].cleaning_areas.forEach((e1) =>
        this.cleaningQtyOption.forEach((e2) => {
          if (e1.slug === e2.value) {
            this.cleaningInfo.itemAreas[e1.slug] = e2.qty
          }
        })
      )
    },
    getCleaningPrice(plan) {
      if (plan.type === 'cleaning') {
        this.cleaningType = plan.name
        this.cleaningTypeValue = plan.value
        if (plan.value === 'light-cleaning') {
          this.cleaningInfo.item = plan.value
          this.setCleaningArea('light cleaning')
        }
        if (plan.value === 'deep-cleaning') {
          this.cleaningInfo.item = plan.value
          this.setCleaningArea('deep cleaning')
        }
        if (plan.value === 'fumigation') {
          this.cleaningInfo.item = plan.value
          this.cleaningInfo.qty = this.cleaningQtyOption.reduce((acc, val) => {
            return acc + val.qty
          }, 0)
        }
        this.toggle('cleaningType')
        this.calculateCleaningPrice()
      } else {
        this.cleaningFrequencyValue = plan.value
        this.cleaningFrequency = plan.name
        this.cleaningInfo.frequency = plan.value
        this.calculateCleaningPrice()
        this.toggle('cleaningFreq')
      }
    },
    increaseRoomQty(item, index) {
      let qty = item.qty
      qty++
      const newQty = qty++
      this.cleaningQtyOption[index].qty = newQty
      this.cleaningInfo.qty = this.cleaningQtyOption.reduce((acc, val) => {
        return acc + val.qty
      }, 0)
      this.setCleaningArea(this.cleaningType)
      this.calculateCleaningPrice()
      this.getEstimateRoomTypes()
    },
    decreaseRoomQty(item, index) {
      let qty = item.qty
      if (qty >= 1) {
        qty--
        const newQty = qty--
        this.cleaningQtyOption[index].qty = newQty
        this.cleaningInfo.qty = this.cleaningQtyOption.reduce((acc, val) => {
          return acc + val.qty
        }, 0)
        this.setCleaningArea(this.cleaningType)
        this.calculateCleaningPrice()
        this.getEstimateRoomTypes()
      }
    },
    getEstimateRoomTypes() {
      const filterRoom = this.cleaningQtyOption.filter((item) => {
        return item.qty !== 0
      })
      const rooms = filterRoom.map((item) => {
        if (item.qty > 1) {
          return item.qty + ' ' + item.label + 's'
        } else {
          return item.qty + ' ' + item.label
        }
      })
      this.roomTypes = rooms.join(', ')
    },
    subscribe() {},
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_pricing.scss';
</style>
