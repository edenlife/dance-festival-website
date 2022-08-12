<template>
  <div class="container--pricing">
    <section ref="price-container" class="pricing">
      <div class="pricing__form-container">
        <div class="pricing__form">
          <div class="pricing__form-title">
            <h2>Convenience and Quality on your Budget</h2>
            <p>
              Whatever plan you choose, our expert team is ready to lighten your
              load.
            </p>
          </div>
          <div
            v-show="!reconfigurePlan && !setCustom"
            class="pricing__form-slider"
          >
            <div class="pricing__form-slider--title">
              <p>Choose Your Monthly Budget.</p>
              <h3>
                ₦{{ formatNumber(estimatedPrice) }}
                <span v-if="estimate === '5'">+</span>
              </h3>
            </div>
            <div v-show="!loading" class="range">
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
            <p>What service(s) are you interested in?</p>
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
              <label for="email">What is your email address?</label>
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
                  <span class="cleaning"
                    >Cleaning plan
                    <span @click="showCleaningModal = true">
                      What will each cleaning entail?
                    </span>
                  </span>
                  <span>₦{{ formatNumber(services[2].price) }}</span>
                </p>
                <li v-for="(item, i) in cleaningSummary" :key="i">
                  {{ item }}
                </li>
              </ul>
            </transition>
            <!-- <p class="pricing__plan-subtotal">
              <span>Subtotal</span>
              <span>₦ {{ formatNumber(subtotalPrice) }}</span>
            </p>
            <p class="pricing__plan-discount">
              <span>Discount (20% discount off your first month)</span>
              <span>- ₦ {{ formatNumber(discountPrice) }}</span>
            </p> -->
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
                  Customise.
                </button>
              </div>
              <button
                v-if="!displayForm"
                class="pricing__plan-btn"
                @click.prevent="displayForm = !displayForm"
              >
                I Want an Easy Life
              </button>
            </div>
            <transition name="slide-fade">
              <div v-if="displayForm" class="pricing__plan-input">
                <label for="email">What is your email address?</label>
                <input
                  id=""
                  v-model="subscribeEmail"
                  type="email"
                  name=""
                  placeholder="Enter your email address"
                  :class="{
                    'has-error': $v.subscribeEmail.$error || custumerStatus,
                  }"
                />
                <p v-if="responseMessage.length">
                  {{ responseMessage }}
                </p>
                <p v-else>
                  We’ll take you to download the app. You don’t have to do
                  anything. Just sit back, relax and enjoy your discount.
                </p>

                <button
                  class="pricing__plan-btn"
                  :disabled="isLoading"
                  @click.prevent="getStarted()"
                >
                  <svg v-if="isLoading">
                    <use
                      xlink:href="@/assets/images/loading-icon.svg#loading-icon"
                    ></use>
                  </svg>
                  <span v-else> I Want an Easy Life</span>
                </button>
              </div>
            </transition>
          </div>
        </transition>
        <transition name="slide-fade">
          <div v-if="reconfigurePlan" class="pricing__calculator">
            <p class="pricing__calculator-title">
              <span>Customise your Eden Life</span>
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
                            <span class="label--text">{{ mealFrequency }}</span>
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
                              <div class="selector-drop">
                                <ul>
                                  <li
                                    v-for="(item, i) in mealTypeOption"
                                    :key="i"
                                  >
                                    <span
                                      class="select--item"
                                      @click.prevent="getMealPrice(item)"
                                      >{{ item.name }}</span
                                    >
                                  </li>
                                </ul>
                              </div>
                            </transition>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="calculator__input-item calculator__input-meal">
                      <label for="">Number of meals per delivery</label>
                      <div class="btn--group">
                        <button
                          class="btn--item minus"
                          @click.prevent="decreaseFoodOrder()"
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
                          v-model="mealQty"
                          min="1"
                          max="20"
                          type="number"
                          name=""
                          readonly
                          placeholder="0"
                        />
                        <button
                          class="btn--item plus"
                          @click.prevent="increaseFoodOrder()"
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
                  <div class="calculator__input">
                    <div
                      class="calculator__input-item calculator__input-delivery"
                    >
                      <label for="">Delivery days</label>
                      <div v-if="mealFrequency === 'Daily'" class="delivery">
                        <div
                          v-for="(item, i) in dailyDeliveryDays"
                          :key="i"
                          class="delivery__days daily"
                        >
                          <div
                            class="delivery__days-item"
                            :class="{ checked: selectedDays.includes(item) }"
                          >
                            <input
                              :id="item"
                              v-model="selectedDays"
                              type="checkbox"
                              :value="item"
                              @change="updateDeliveyDay(item)"
                            />
                            <label :for="item">{{ item }}</label>
                          </div>
                        </div>
                      </div>
                      <div v-else class="delivery">
                        <div
                          v-for="(item, i) in deliveryDays"
                          :key="i"
                          class="delivery__days"
                        >
                          <div
                            class="delivery__days-item"
                            :class="{
                              checked: selectedDays.includes(item.name),
                            }"
                          >
                            <input
                              :id="item.value"
                              type="checkbox"
                              :value="item.value"
                              @change="updateDeliveyDay(item.name)"
                            />
                            <label :for="item.value">{{ item.value }}</label>
                          </div>
                        </div>
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
                            <span class="label--text">{{ laundryType }}</span>
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
                              <div class="selector-drop">
                                <ul>
                                  <li
                                    v-for="(item, i) in laundryTypeOption"
                                    :key="i"
                                  >
                                    <span
                                      class="select--item"
                                      @click.prevent="getLaundryPrice(item)"
                                      >{{ item.name }}</span
                                    >
                                  </li>
                                </ul>
                              </div>
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
                            <span class="label--text">{{
                              laundryFrequency
                            }}</span>
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
                              <div class="selector-drop">
                                <ul>
                                  <li
                                    v-for="(item, i) in frequencyOption"
                                    :key="i"
                                  >
                                    <span
                                      class="select--item"
                                      @click.prevent="getLaundryPrice(item)"
                                      >{{ item.name }}</span
                                    >
                                  </li>
                                </ul>
                              </div>
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
                  <p>
                    Cleaning plan
                    <span @click="showCleaningModal = true">
                      What will each cleaning entail?</span
                    >
                  </p>
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
                      <label for=""
                        ><span>Type</span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          @click="showCleaningModal = true"
                        >
                          <path
                            d="M7.00017 0.333008C5.68162 0.333008 4.39269 0.724001 3.29636 1.45654C2.20004 2.18909 1.34555 3.23028 0.840969 4.44845C0.336385 5.66663 0.204362 7.00707 0.461597 8.30028C0.718832 9.59348 1.35377 10.7814 2.28612 11.7137C3.21847 12.6461 4.40636 13.281 5.69956 13.5382C6.99277 13.7955 8.33322 13.6635 9.55139 13.1589C10.7696 12.6543 11.8108 11.7998 12.5433 10.7035C13.2758 9.60715 13.6668 8.31822 13.6668 6.99967C13.6649 5.23217 12.9619 3.53762 11.712 2.2878C10.4622 1.03798 8.76767 0.334974 7.00017 0.333008ZM7.00017 12.333C5.94533 12.333 4.91419 12.0202 4.03712 11.4342C3.16006 10.8481 2.47648 10.0152 2.07281 9.04065C1.66914 8.06611 1.56352 6.99376 1.76931 5.95919C1.9751 4.92463 2.48305 3.97432 3.22893 3.22844C3.97481 2.48256 4.92512 1.97461 5.95968 1.76882C6.99425 1.56303 8.06661 1.66865 9.04114 2.07232C10.0157 2.47598 10.8486 3.15957 11.4347 4.03663C12.0207 4.9137 12.3335 5.94484 12.3335 6.99967C12.3319 8.41367 11.7695 9.76928 10.7696 10.7691C9.76977 11.769 8.41416 12.3314 7.00017 12.333ZM7.00017 6.66634C6.82336 6.66634 6.65379 6.73658 6.52876 6.8616C6.40374 6.98663 6.3335 7.1562 6.3335 7.33301V9.33301C6.3335 9.50982 6.40374 9.67939 6.52876 9.80441C6.65379 9.92944 6.82336 9.99967 7.00017 9.99967C7.17698 9.99967 7.34655 9.92944 7.47157 9.80441C7.59659 9.67939 7.66683 9.50982 7.66683 9.33301V7.33301C7.66683 7.1562 7.59659 6.98663 7.47157 6.8616C7.34655 6.73658 7.17698 6.66634 7.00017 6.66634ZM7.00017 3.99967C6.83535 3.99967 6.67423 4.04855 6.53719 4.14012C6.40015 4.23168 6.29334 4.36183 6.23027 4.5141C6.16719 4.66638 6.15069 4.83393 6.18285 4.99558C6.215 5.15723 6.29437 5.30572 6.41091 5.42226C6.52745 5.53881 6.67594 5.61817 6.83759 5.65033C6.99924 5.68248 7.1668 5.66598 7.31907 5.60291C7.47134 5.53983 7.60149 5.43302 7.69306 5.29598C7.78463 5.15894 7.8335 4.99783 7.8335 4.83301C7.8335 4.61199 7.7457 4.40003 7.58942 4.24375C7.43314 4.08747 7.22118 3.99967 7.00017 3.99967Z"
                            fill="#03A84E"
                          />
                        </svg>
                      </label>
                      <div class="select">
                        <div class="selector">
                          <div class="label" @click="toggle('cleaningType')">
                            <span class="label--text">{{
                              cleaningType.includes('Light')
                                ? 'Standard Cleaning'
                                : cleaningType
                            }}</span>
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
                              <div class="selector-drop">
                                <ul>
                                  <li
                                    v-for="(item, i) in cleaningOptions"
                                    :key="i"
                                  >
                                    <span
                                      class="select--item"
                                      @click.prevent="getCleaningPrice(item)"
                                      >{{ item.name }}</span
                                    >
                                  </li>
                                </ul>
                              </div>
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
                            <span class="label--text">{{
                              cleaningFrequency
                            }}</span>
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
                              <div class="selector-drop">
                                <ul>
                                  <li
                                    v-for="(item, i) in frequencyOption"
                                    :key="i"
                                  >
                                    <span
                                      class="select--item"
                                      @click.prevent="getCleaningPrice(item)"
                                      >{{ item.name }}</span
                                    >
                                  </li>
                                </ul>
                              </div>
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
                            <span class="label--text">{{ roomTypes }}</span>
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
                              <div class="selector-drop">
                                <ul>
                                  <li
                                    v-for="(item, i) in cleaningQtyOption"
                                    :key="i"
                                    class="control"
                                  >
                                    <span>{{ item.cleaning_area_name }}</span>
                                    <span class="control__item">
                                      <button
                                        class="control__item-btn"
                                        @click.prevent="
                                          decreaseRoomQty(item, i)
                                        "
                                      >
                                        <svg
                                          class="control__item-icon"
                                          width="12"
                                          height="2"
                                          viewBox="0 0 12 2"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            class="control__item-icon"
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
                                        @click.prevent="
                                          increaseRoomQty(item, i)
                                        "
                                      >
                                        <svg
                                          class="control__item-icon"
                                          width="16"
                                          height="16"
                                          viewBox="0 0 16 16"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            class="control__item-icon"
                                            d="M8 3.33301V12.6663"
                                            stroke="#21312A"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            class="control__item-icon"
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

                                <button class="pricing__calculator-btn btn-sm">
                                  Done
                                </button>
                              </div>
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
                I Want an Easy Life
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
              alt="successful"
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

    <modal v-if="showEmailModal" :show-modal="showEmailModal" class="modal">
      <div slot="header"></div>
      <div slot="body" class="modal__body">
        <div class="pricing__modal">
          <div class="pricing__modal-title"></div>
          <div class="pricing__modal-body">
            <img
              class="email-img"
              :src="require(`~/assets/images/email-modal.svg`)"
              alt="email"
            />
            <h5>We’ve sent a mail</h5>
            <p>
              We’ve sent an email to <b> {{ subscribeEmail }}</b
              >. Please check your mail for next steps.
            </p>
            <button
              type="submit"
              class="btn--submit"
              @click.prevent="openApp()"
            >
              Okay. Got it !!
            </button>
          </div>
        </div>
      </div>
      <div slot="footer"></div>
    </modal>

    <modal
      v-if="showCleaningModal"
      :show-modal="showCleaningModal"
      class="modal"
    >
      <div slot="header"></div>
      <div slot="body" class="modal__body">
        <div class="pricing__modal">
          <div class="pricing__modal-title">
            <h5>What will each cleaning entail?</h5>
            <button class="btn btn--success" @click="showCleaningModal = false">
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
            <ul class="pricing__modal-option">
              <li
                :class="{ active: cleaningPlanType === 'standard-cleaning' }"
                @click.prevent="cleaningPlanType = 'standard-cleaning'"
              >
                <span> Standard Cleaning</span>
                <svg
                  v-if="cleaningPlanType === 'standard-cleaning'"
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="3" cy="3" r="3" fill="#61DB98" />
                </svg>
              </li>
              <li
                :class="{ active: cleaningPlanType === 'deep-cleaning' }"
                @click.prevent="cleaningPlanType = 'deep-cleaning'"
              >
                <span> Deep Cleaning </span>
                <svg
                  v-if="cleaningPlanType === 'deep-cleaning'"
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="3" cy="3" r="3" fill="#61DB98" />
                </svg>
              </li>
            </ul>
            <ul
              v-if="cleaningPlanType === 'standard-cleaning'"
              class="pricing__modal-option--cleaning"
            >
              <li>Sweeping and mopping of all floors</li>
              <li>Dust and wipe all surfaces</li>
              <li>Cobweb removal from all surfaces</li>
              <li>Wash dirty dishes</li>
              <li>Arrange furniture, lay beds and fold clothes</li>
              <li>Polish all wood and glass surfaces</li>
              <li>Disinfect and wash toilet and urinals</li>
              <li>Empty and clean trash can</li>
            </ul>
            <ul v-else class="pricing__modal-option--cleaning">
              <li>Sweeping and mopping of all floors</li>
              <li>Dust and wipe all surfaces</li>
              <li>Cobweb removal from all surfaces</li>
              <li>Wash dirty dishes</li>
              <li>Arrange furniture, lay beds and fold clothes</li>
              <li>Polish all wood and glass surfaces</li>
              <li>Disinfect and wash toilet and urinals</li>
              <li>Empty and clean trash can</li>
              <li>Scrape floors, walls and clean all surfaces</li>
              <li>
                Clean internal and external parts of home appliances (Gas
                cooker, refrigerators etc)
              </li>
              <li>Clean cupboards and cabinets</li>            
            </ul>
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
import { currencyFormat, formatNumber, scrollToApp } from '~/static/functions'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import { pricing } from '~/static/pricing'
import getSiteMeta from '~/utils/getSiteMeta'
import { getCleaningServiceTypes, signupApi } from '~/request/all.api'

export default {
  components: {
    Modal: () => import('@/components/Modal.vue'),
  },
  mixins: [validationMixin],
  validations: {
    subscribeEmail: { required, email },
    form: {
      email: { required, email },
      phone_number: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
    },
  },
  head() {
    return {
      title: 'Eden | Pricing',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://ouredenlife.com/pricing/`,
        },
        {
          rel: 'alternate',
          hreflang: 'en-ng',
          href: 'https://ouredenlife.com/pricing/',
        },
        {
          rel: 'alternate',
          hreflang: 'en-ke',
          href: 'https://ouredenlife.com/ke/pricing/',
        },
        {
          rel: 'alternate',
          hreflang: 'x-default',
          href: 'https://ouredenlife.com/pricing/',
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        title: 'Eden | Pricing',
        description: `Say goodbye to chores forever. Eden is a tech-enabled service that puts your home's chores on autopilot. Check out how we work!`,
        url: `https://ouredenlife.com/pricing/`,
        mainImage: 'https://ouredenlife.com/edencard.png',
      }
      return getSiteMeta(metaData)
    },
  },
  data() {
    return {
      content:
        "Pick a food, laundry or cleaning plan and find out how much it'll cost. With our price calculator, you can see the total cost of your preferred service before you pay",
      cleaningPlanType: 'standard-cleaning',
      showCleaningModal: false,
      showSuccessModal: false,
      showEmailModal: false,
      custumerStatus: false,
      subscribeEmail: '',
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
      estimate: 1,
      displayForm: false,
      setCustom: false,
      estimatedPrice: '30000',
      priceList: ['15000', '30000', '60000', '100000', '150000', '150000'],
      reconfigurePlan: false,
      visible: [],
      mealFrequency: 'Daily',
      dailyDeliveryDays: ['monday-friday', 'monday-saturday'],
      selectedDays: ['monday-friday'],
      deliveryDays: [
        { name: 'monday', value: 'mon' },
        { name: 'tuesday', value: 'tue' },
        { name: 'wednesday', value: 'wed' },
        { name: 'thursday', value: 'thu' },
        { name: 'friday', value: 'fri' },
        { name: 'saturday', value: 'sat' },
      ],
      mealQty: 1,
      mealSavedTime: '',
      laundryFrequency: 'Every two weeks',
      laundryType: 'Wash & Fold',
      laundrySavedTime: '',
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
      cleaningType: 'Standard cleaning',
      cleaningOptions: [
        {
          name: 'Standard Cleaning',
          value: 'standard-cleaning',
          type: 'cleaning',
        },
        {
          name: 'Deep Cleaning',
          value: 'deep-cleaning',
          type: 'cleaning',
        },
      ],
      roomTypes:
        '1 Bedrooms, 1 Living Rooms / Dining Areas, 1 Bathrooms, 1 Kitchen',
      cleaningQtyOption: [],
      foodSummary: [],
      laundrySummary: [],
      cleaningSummary: [],
      totalPrice: '',
      subtotalPrice: '',
      discountPrice: '',
      laundryTypeValue: 'wash-and-fold',
      laundryFreqValue: 'bi-weekly',
      laundryFreqName: 'every two weeks',
      cleaningTypeValue: 'standard-cleaning',
      cleaningFrequencyValue: 'bi-weekly',
      cleaningSavedTime: '',
      cleaningServiceTypes: [],
      cleaningInfo: {
        item: 'standard-cleaning',
        itemAreas: {},
        frequency: 'bi-weekly',
        qty: 2,
      },
      loading: false,
      totalFoodSummary: {},
      foodPayload: {},
      totalLaundrySummary: {},
      laundryPayload: {},
      totalCleaningSummary: {},
      cleaningPayload: {},
      isLoading: false,
      responseMessage: '',
    }
  },
  head() {
    return {
      title: 'Eden | Pricing',
      meta: [
        { name: 'description', content: [this.content] },
        { name: 'twitter:description', content: [this.content] },
        { property: 'og:description', content: [this.content] },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://ouredenlife.ke/pricing`,
        },
        {
          rel: 'alternate',
          hreflang: 'en-ng',
          href: 'https://ouredenlife.com/pricing'
        },
        {
          rel: 'alternate',
          hreflang: 'en-ke',
          href: 'https://ouredenlife.ke/pricing'
        },
        {
          rel: 'alternate',
          hreflang: 'x-default',
          href: 'https://ouredenlife.com/pricing'
        },
      ],
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
        if (val > 20) {
          this.mealQty = 20
        } else {
          this.mealQty = val
        }
      }
      if (this.mealFrequency === 'Twice a week') {
        if (val > 10) {
          this.mealQty = 10
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
    document.addEventListener('click', this.toggleSelect)
    mixpanelTrackEvent('Pricing page')
    this.fetchCleaningServiceTypes()
    // this.calculateLaundryPrice()
  },
  destroyed() {
    document.removeEventListener('click', this.toggleSelect)
  },
  methods: {
    currencyFormat,
    formatNumber,
    async getStarted() {
      this.$v.subscribeEmail.$touch()
      if (!this.$v.subscribeEmail.$error) {
        try {
          this.isLoading = true
          const payload = {
            email: this.subscribeEmail,
            plan_details: {
              ...(this.selectedService.includes('Food') && {
                meal: this.foodPayload,
              }),
              ...(this.selectedService.includes('Laundry') && {
                laundry: this.totalLaundrySummary,
              }),
              ...(this.selectedService.includes('Cleaning') && {
                cleaning: this.totalCleaningSummary,
              }),
            },
          }

          await signupApi(payload)
          const metadata = {
            email: this.subscribeEmail,
            lead_gen_page: window.location.href,
            referrer: document.referrer,
          }
          this.$intercom('update', {
            email: this.subscribeEmail,
            lead_gen_page: window.location.href,
            referrer: document.referrer,
          })
          this.$intercom('trackEvent', 'lead-genaration-signup', metadata)
          this.$intercom('trackEvent', 'pricing-page-onboarding', metadata)
          this.responseMessage = ''
          this.custumerStatus = false
          this.showEmailModal = true
          this.isLoading = false
          mixpanelTrackEvent('get started button clicked', 'pricing page')
        } catch (error) {
          this.responseMessage = error.response.data.message
          this.isLoading = false
          this.custumerStatus = true
        }
      }
    },
    openApp() {
      this.subscribeEmail = ''
      this.showEmailModal = !this.showEmailModal
      this.$v.$reset()
      scrollToApp('#get-the-app', 'Pricing-page')
    },
    updateDeliveyDay(item) {
      if (this.mealFrequency.toLowerCase() === 'daily') {
        this.selectedDays = []
        this.selectedDays.push(item)
        this.calculateFoodPrice()
      }
      if (this.mealFrequency.toLowerCase() === 'weekly') {
        this.selectedDays = []
        this.selectedDays[0] = item
        this.calculateFoodPrice()
      }
      if (this.mealFrequency === 'Twice a week') {
        if (this.selectedDays.length > 1 && this.selectedDays.includes(item)) {
          this.selectedDays = this.selectedDays.filter((el) => el !== item)
        } else if (
          this.selectedDays.length >= 1 &&
          this.selectedDays.length < 2 &&
          !this.selectedDays.includes(item)
        ) {
          this.selectedDays.push(item)
        }
        this.calculateFoodPrice()
      }
    },
    toggleSelect(event) {
      const label = document.getElementsByClassName('label')
      const labelLength = label.length
      const newArray = []
      const labelItem = document.getElementsByClassName('label--text')
      const labelItemLength = labelItem.length
      const arrow = document.getElementsByClassName('arrow')
      const arrowLength = arrow.length
      const btn = document.getElementsByClassName('control__item-btn')
      const btnLength = btn.length
      const icon = document.getElementsByClassName('control__item-icon')
      const iconLength = icon.length
      for (let i = 0; i < labelLength; i++) {
        newArray.push(label[i])
      }
      for (let i = 0; i < labelItemLength; i++) {
        newArray.push(labelItem[i])
      }
      for (let i = 0; i < arrowLength; i++) {
        newArray.push(arrow[i])
      }
      for (let i = 0; i < btnLength; i++) {
        newArray.push(btn[i])
      }
      for (let i = 0; i < iconLength; i++) {
        newArray.push(icon[i])
      }
      if (!newArray.includes(event.target)) {
        this.visible = []
      }
    },
    sendUserInfoIntercom() {
      mixpanelTrackEvent('Contact sales button clicked', 'pricing page')
      this.$v.form.$touch()
      if (!this.$v.form.$error) {
        this.$intercom('update', {
          email: this.form.email,
          phone: this.form.phone_number,
          lead_gen_page: window.location.href,
          referrer: document.referrer,
        })
        const metadata = {
          phone_number: this.form.phone_number,
          email: this.form.email,
          lead_gen_page: window.location.href,
          referrer: document.referrer,
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
      this.estimate = 1
      this.selectedService = ['Food', 'Cleaning']
      this.cleaningQtyOption[0].qty = 1
      this.cleaningQtyOption[1].qty = 0
      this.cleaningQtyOption[2].qty = 0
      this.cleaningQtyOption[3].qty = 0
      this.getEstimate()
    },
    setPlanConfig() {
      this.$refs['price-container'].scrollIntoView()
      this.reconfigurePlan = !this.reconfigurePlan
      this.estimate = 3
      this.selectedService = ['Food', 'Laundry', 'Cleaning']
      this.selectedDays = ['monday-friday']
      this.setCustom = true
      this.setCleaningConfig('deep cleaning')
      this.getEstimate()
      mixpanelTrackEvent('Customise plan clicked', 'pricing page')
    },
    setReconfigureSummary() {
      this.$refs['price-container'].scrollIntoView()
      this.reconfigurePlan = !this.reconfigurePlan
      this.displayForm = true
      this.estimatedPrice = this.subtotalPrice
      this.setBackgroundGradient()
      mixpanelTrackEvent('Subscribe button clicked', 'pricing page')
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
        const valInt = val.price ? parseInt(val.price) : 0
        return acc + valInt
      }, 0)
      this.subtotalPrice = subtotal.toString()
      const discount = subtotal * 0.2
      this.discountPrice = discount.toString()
      this.totalPrice = this.subtotalPrice
    },
    changeService(service) {
      // estimated price 10,000
      if (this.estimate.toString() === '0') {
        if (service.name === 'Food') {
          return
        }
        this.selectedService.pop()
        this.selectedService.push(service.name)
        this.laundryFreqName = 'every two weeks'
        this.laundryType = 'Wash & Fold'
        this.laundryTypeValue = 'wash-and-fold'
        this.laundryFreqValue = 'bi-weekly'
        this.laundrySavedTime = '2 hrs 15 mins'
        this.laundryQty = 1
        this.calculateLaundryPrice()
        this.cleaningType = 'Standard cleaning'
        this.cleaningFrequency = 'Every two weeks'
        this.cleaningQtyOption[0].qty = 1
        this.cleaningQtyOption[2].qty = 1
        this.cleaningQtyOption[4].qty = 0
        this.cleaningQtyOption[5].qty = 0
        this.cleaningSavedTime = '45 mins'
        this.getEstimateRoomTypes()
        this.setCleaningArea('standard cleaning')
        this.cleaningInfo.item = 'standard-cleaning'
        this.cleaningInfo.frequency = 'bi-weekly'
        this.calculateCleaningPrice()
        return
      }

      // estimated price 30,000
      if (this.estimate.toString() === '1') {
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
          this.mealQty = 1
          this.mealFrequency = 'Weekly'
          this.selectedDays = ['monday']
          this.mealSavedTime = '40 mins'
          this.calculateFoodPrice()
          this.cleaningType = 'Standard cleaning'
          this.cleaningFrequency = 'Every two weeks'
          this.cleaningQtyOption[0].qty = 1
          this.cleaningQtyOption[1].qty = 1
          this.cleaningQtyOption[4].qty = 0
          this.cleaningQtyOption[5].qty = 0
          this.cleaningSavedTime = '45 mins'
          this.getEstimateRoomTypes()
          this.setCleaningArea('standard cleaning')
          this.cleaningInfo.item = 'standard-cleaning'
          this.cleaningInfo.frequency = 'bi-weekly'
          this.calculateCleaningPrice()
          return
        } else {
          this.laundryFreqName = 'once a month'
          this.laundryType = 'Wash & Fold'
          this.laundryTypeValue = 'wash-and-fold'
          this.laundryFreqValue = 'monthly'
          this.laundryQty = 1
          this.laundrySavedTime = '2 hrs 15 mins'
          this.calculateLaundryPrice()
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

      // estimated price 60,000
      if (this.estimate.toString() === '2') {
        if (this.selectedService.length === 3) {
          this.mealQty = 1
          this.mealFrequency = 'Weekly'
          this.selectedDays = ['monday']
          this.mealSavedTime = '40 mins'
          this.calculateFoodPrice()
          this.laundryFreqName = 'once a month'
          this.laundryType = 'Wash & Fold'
          this.laundryTypeValue = 'wash-and-fold'
          this.laundryFreqValue = 'monthly'
          this.laundryQty = 1
          this.laundrySavedTime = '2 hrs 15 mins'
          this.calculateLaundryPrice()
          this.cleaningType = 'Standard cleaning'
          this.cleaningFrequency = 'Every two weeks'
          this.cleaningQtyOption[0].qty = 1
          this.cleaningQtyOption[1].qty = 1
          this.cleaningQtyOption[4].qty = 0
          this.cleaningQtyOption[5].qty = 0
          this.cleaningSavedTime = '45 mins'
          this.getEstimateRoomTypes()
          this.setCleaningArea('standard cleaning')
          this.cleaningInfo.item = 'standard-cleaning'
          this.cleaningInfo.frequency = 'bi-weekly'
          this.calculateCleaningPrice()
        } else if (this.selectedService.length === 2) {
          if (
            this.selectedService.includes('Cleaning') &&
            this.selectedService.includes('Laundry')
          ) {
            this.cleaningType = 'Standard cleaning'
            this.cleaningFrequency = 'weekly'
            this.cleaningQtyOption[0].qty = 1
            this.cleaningQtyOption[1].qty = 0
            this.cleaningQtyOption[4].qty = 0
            this.cleaningQtyOption[5].qty = 0
            this.cleaningSavedTime = '30 mins'
            this.getEstimateRoomTypes()
            this.setCleaningArea('standard cleaning')
            this.cleaningInfo.item = 'standard-cleaning'
            this.cleaningInfo.frequency = 'Every two weeks'
            this.calculateCleaningPrice()
            this.laundryFreqName = 'once a month'
            this.laundryType = 'Wash & Iron'
            this.laundryTypeValue = 'wash-and-iron'
            this.laundryFreqValue = 'monthly'
            this.laundryQty = 1
            this.laundrySavedTime = '1 hrs 20 mins'
            this.calculateLaundryPrice()
          }
          if (
            this.selectedService.includes('Food') &&
            this.selectedService.includes('Cleaning')
          ) {
            this.mealQty = 3
            this.mealFrequency = 'Weekly'
            this.selectedDays = ['monday']
            this.mealSavedTime = '2 hrs'
            this.calculateFoodPrice()
            this.cleaningType = 'Standard cleaning'
            this.cleaningFrequency = 'Every two weeks'
            this.cleaningQtyOption[0].qty = 1
            this.cleaningQtyOption[1].qty = 1
            this.cleaningQtyOption[4].qty = 0
            this.cleaningQtyOption[5].qty = 0
            this.cleaningSavedTime = '45 mins'
            this.getEstimateRoomTypes()
            this.setCleaningArea('standard cleaning')
            this.cleaningInfo.item = 'standard-cleaning'
            this.cleaningInfo.frequency = 'bi-weekly'
            this.calculateCleaningPrice()
          }
        } else if (this.selectedService.length === 1) {
          this.mealQty = 3
          this.mealFrequency = 'Weekly'
          this.selectedDays = ['monday']
          this.mealSavedTime = '2 hrs'
          this.calculateFoodPrice()
          this.laundryFreqName = 'every two weeks'
          this.laundryType = 'Wash & Iron'
          this.laundryTypeValue = 'wash-and-iron'
          this.laundryFreqValue = 'bi-weekly'
          this.laundryQty = 2
          this.laundrySavedTime = '4 hrs 20 mins'

          this.calculateLaundryPrice()
          this.cleaningType = 'Standard cleaning'
          this.cleaningFrequency = 'Once a week'
          this.cleaningQtyOption[0].qty = 1
          this.cleaningQtyOption[1].qty = 1
          this.cleaningQtyOption[2].qty = 1
          this.cleaningQtyOption[3].qty = 1
          this.cleaningQtyOption[5].qty = 1
          this.getEstimateRoomTypes()
          this.setCleaningArea('standard cleaning')
          this.cleaningInfo.item = 'standard-cleaning'
          this.cleaningInfo.frequency = 'weekly'
          this.cleaningSavedTime = '5 hrs 30 mins'

          this.calculateCleaningPrice()
        }
      }
      // estimated price 100,000
      if (this.estimate.toString() === '3') {
        if (this.selectedService.length === 3) {
          this.mealQty = 2
          this.mealFrequency = 'Once a week'
          this.selectedDays = ['monday']
          this.mealSavedTime = '1 hrs 20 mins'
          this.mealFrequency = 'Weekly'
          this.calculateFoodPrice()

          this.laundryFreqName = 'once a month'
          this.laundryType = 'Wash & Iron'
          this.laundryTypeValue = 'wash-and-iron'
          this.laundryFreqValue = 'monthly'
          this.laundryQty = 1
          this.laundrySavedTime = '1 hrs 20 mins'
          this.calculateLaundryPrice()

          this.cleaningType = 'Standard cleaning'
          this.cleaningFrequency = 'Once a week'
          this.cleaningQtyOption[0].qty = 1
          this.cleaningQtyOption[1].qty = 1
          this.cleaningQtyOption[2].qty = 1
          this.cleaningQtyOption[4].qty = 0
          this.cleaningQtyOption[5].qty = 0
          this.getEstimateRoomTypes()
          this.setCleaningArea('standard cleaning')
          this.cleaningInfo.item = 'standard-cleaning'
          this.cleaningInfo.frequency = 'weekly'
          this.cleaningSavedTime = '45 mins'

          this.calculateCleaningPrice()
        } else if (this.selectedService.length === 2) {
          if (
            this.selectedService.includes('Food') &&
            this.selectedService.includes('Cleaning')
          ) {
            this.mealQty = 5
            this.mealFrequency = 'Weekly'
            this.selectedDays = ['monday-friday']
            this.mealSavedTime = '3 hrs 40 mins'
            this.calculateFoodPrice()

            this.cleaningType = 'Standard cleaning'
            this.cleaningFrequency = 'Once a week'
            this.setCleaningArea('standard cleaning')
            this.cleaningInfo.item = 'standard-cleaning'
            this.cleaningQtyOption[0].qty = 1
            this.cleaningQtyOption[1].qty = 1
            this.cleaningQtyOption[2].qty = 0
            this.cleaningQtyOption[3].qty = 0
            this.getEstimateRoomTypes()
            this.cleaningInfo.frequency = 'weekly'
            this.cleaningSavedTime = '45 mins'

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
            this.laundrySavedTime = '6 hrs 10 mins'
            this.calculateLaundryPrice()
            this.cleaningType = 'Standard cleaning'
            this.cleaningFrequency = 'Once a week'
            this.setCleaningArea('standard cleaning')
            this.cleaningInfo.item = 'deep-cleaning'
            this.cleaningQtyOption[0].qty = 2
            this.cleaningQtyOption[1].qty = 1
            this.cleaningQtyOption[2].qty = 1
            this.cleaningQtyOption[3].qty = 1
            this.getEstimateRoomTypes()
            this.cleaningInfo.frequency = 'weekly'
            this.cleaningSavedTime = '5 hrs 30 mins'
            this.calculateCleaningPrice()
          }
        } else if (this.selectedService.length === 1) {
          this.mealQty = 3
          this.mealFrequency = 'Twice a week'
          this.selectedDays = ['monday', 'thursday']
          this.mealSavedTime = '3 hrs 20 mins'

          this.calculateFoodPrice()
          this.laundryFreqName = 'every two weeks'
          this.laundryType = 'Wash & Iron'
          this.laundryTypeValue = 'wash-and-iron'
          this.laundryFreqValue = 'bi-weekly'
          this.laundryQty = 1
          this.laundrySavedTime = '4 hrs 10 mins'

          this.calculateLaundryPrice()
          this.cleaningType = 'Deep cleaning'
          this.setCleaningArea('deep cleaning')
          this.cleaningInfo.item = 'deep-cleaning'
          this.cleaningQtyOption[0].qty = 1
          this.cleaningQtyOption[1].qty = 1
          this.cleaningQtyOption[2].qty = 0
          this.cleaningQtyOption[4].qty = 0
          this.cleaningQtyOption[5].qty = 0
          this.getEstimateRoomTypes()
          this.cleaningInfo.frequency = 'weekly'
          this.cleaningSavedTime = '8 hrs 30 mins'
          this.calculateCleaningPrice()
        }
      }
      // estimated price 150,000
      if (this.estimate.toString() === '4') {
        if (this.selectedService.length === 3) {
          this.mealQty = 6
          this.mealFrequency = 'Weekly'
          this.selectedDays = ['monday-saturday']
          this.mealSavedTime = '3 hrs 20 mins'
          this.calculateFoodPrice()

          this.laundryFreqName = 'once a month'
          this.laundryType = 'Wash & Iron'
          this.laundryTypeValue = 'wash-and-iron'
          this.laundryFreqValue = 'monthly'
          this.laundryQty = 1
          this.laundrySavedTime = '1 hrs 20 mins'
          this.calculateLaundryPrice()

          this.cleaningType = 'Standard cleaning'
          this.cleaningFrequency = 'Every two weeks'
          this.cleaningQtyOption[0].qty = 1
          this.cleaningQtyOption[1].qty = 1
          this.cleaningQtyOption[2].qty = 1
          this.cleaningQtyOption[3].qty = 1
          this.cleaningQtyOption[5].qty = 0
          this.getEstimateRoomTypes()
          this.setCleaningArea('standard cleaning')
          this.cleaningInfo.item = 'standard-cleaning'
          this.cleaningInfo.frequency = 'bi-weekly'
          this.cleaningSavedTime = '45 mins'

          this.calculateCleaningPrice()
        } else if (this.selectedService.length === 2) {
          if (
            this.selectedService.includes('Food') &&
            this.selectedService.includes('Laundry')
          ) {
            this.mealQty = 2
            this.mealFrequency = 'Daily'
            this.selectedDays = ['monday-friday']
            this.mealSavedTime = '7 hrs 10 mins'

            this.calculateFoodPrice()
            this.laundryFreqName = 'every two weeks'
            this.laundryType = 'Wash & Iron'
            this.laundryTypeValue = 'wash-and-iron'
            this.laundryFreqValue = 'bi-weekly'
            this.laundryQty = 2
            this.laundrySavedTime = '4 hrs 20 mins'

            this.calculateLaundryPrice()
          }
          if (
            this.selectedService.includes('Food') &&
            this.selectedService.includes('Cleaning')
          ) {
            this.mealQty = 2
            this.mealFrequency = 'Daily'
            this.selectedDays = ['monday-friday']
            this.mealSavedTime = '7 hrs 10 mins'
            this.calculateFoodPrice()
            this.cleaningType = 'Standard cleaning'
            this.cleaningFrequency = 'Once a week'
            this.cleaningQtyOption[0].qty = 2
            this.cleaningQtyOption[1].qty = 1
            this.cleaningQtyOption[2].qty = 1
            this.cleaningQtyOption[3].qty = 1
            this.cleaningQtyOption[4].qty = 0
            this.cleaningQtyOption[5].qty = 0
            this.getEstimateRoomTypes()
            this.setCleaningArea('standard cleaning')
            this.cleaningInfo.item = 'standard-cleaning'
            this.cleaningInfo.frequency = 'weekly'
            this.cleaningSavedTime = '5 hrs 30 mins'
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

            this.laundrySavedTime = '6 hrs 10 mins'
            this.calculateLaundryPrice()
            this.cleaningType = 'Standard cleaning'
            this.cleaningFrequency = 'Once a week'
            this.cleaningQtyOption[0].qty = 2
            this.cleaningQtyOption[1].qty = 2
            this.cleaningQtyOption[2].qty = 1
            this.cleaningQtyOption[3].qty = 1
            this.cleaningQtyOption[4].qty = 1
            this.cleaningQtyOption[5].qty = 1
            this.getEstimateRoomTypes()
            this.setCleaningArea('standard cleaning')
            this.cleaningInfo.item = 'standard-cleaning'
            this.cleaningInfo.frequency = 'weekly'
            this.cleaningSavedTime = '8 hrs 30 mins'

            this.calculateCleaningPrice()
          }
        } else if (this.selectedService.length === 1) {
          this.mealQty = 2
          this.mealFrequency = 'Daily'
          this.selectedDays = ['monday-friday']
          this.mealSavedTime = '7 hrs 10 mins'

          this.calculateFoodPrice()
          this.laundryFreqName = 'weekly'
          this.laundryType = 'Wash & Iron'
          this.laundryTypeValue = 'wash-and-iron'
          this.laundryFreqValue = 'weekly'
          this.laundryQty = 3
          this.laundrySavedTime = '11 hrs 30 mins'

          this.calculateLaundryPrice()
          this.cleaningType = 'Deep cleaning'
          this.cleaningFrequency = 'Once a month'
          this.cleaningQtyOption[0].qty = 3
          this.cleaningQtyOption[1].qty = 3
          this.cleaningQtyOption[2].qty = 2
          this.cleaningQtyOption[3].qty = 2
          this.cleaningQtyOption[4].qty = 0
          this.cleaningQtyOption[5].qty = 0
          this.getEstimateRoomTypes()
          this.setCleaningArea('deep cleaning')
          this.cleaningInfo.item = 'deep-cleaning'
          this.cleaningInfo.frequency = 'monthly'
          this.cleaningSavedTime = '20 hrs 30 mins'
          this.calculateCleaningPrice()
        }
      }
    },
    getDefaultPrice(estimate) {
      switch (estimate.toString()) {
        case '0': {
          this.selectedService = []
          const defaultService = { name: 'Cleaning', price: '13500' }
          this.changeService(defaultService)
          break
        }
        case '1': {
          this.selectedService = ['Food']
          const defaultService = { name: 'Cleaning', price: '' }
          this.changeService(defaultService)
          break
        }
        case '2': {
          this.selectedService = ['Cleaning', 'Laundry']
          const defaultService = { name: 'Food', price: '' }
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
      let days = []
      let deliveryDays = {
        same_number_per_delivery: true,
      }
      let frequency
      let totalAmount

      if (this.mealFrequency.toLowerCase() === 'daily') {
        const dailyDays = [
          'monday',
          'tuesday',
          'wednesday',
          'thursday',
          'friday',
          'saturday',
        ]
        frequency = 'daily'
        days =
          this.selectedDays[0] === 'monday-friday'
            ? dailyDays.slice(0, 5)
            : dailyDays
        if (this.mealQty > 5) {
          this.mealQty = 5
        }
        days.forEach((day) => {
          deliveryDays[day] = this.mealQty
        })
        const config = {
          meal: {
            item: null,
            frequency: 'daily',
            qty: this.mealQty * 5,
            service_day: days,
            meal_per_delivery: deliveryDays,
          },
        }
        const total = pricing(config)
        totalAmount = total
        this.services[0].price = isNaN(total) ? 0 : total.toString()
        this.getTotalPrice(this.services, this.selectedService)
        this.foodSummary = [
          `Daily delivery`,
          `${this.mealQty} meal${this.mealQty > 1 ? 's' : ''} per day`,
          `Saves ${this.mealSavedTime} per week`,
        ]
        this.totalFoodSummary = {
          ...config.meal,
          amount: total,
        }
      }
      if (this.mealFrequency.toLowerCase() === 'weekly') {
        frequency = 'weekly'
        if (this.mealQty > 20) {
          this.mealQty = 20
        }
        deliveryDays[this.selectedDays[0]] = this.mealQty
        const config = {
          meal: {
            item: null,
            frequency: 'weekly',
            qty: this.mealQty,
            service_day: this.selectedDays,
            meal_per_delivery: deliveryDays,
          },
        }
        const total = pricing(config)
        totalAmount = total
        this.services[0].price = total.toString()
        this.getTotalPrice(this.services, this.selectedService)
        this.foodSummary = [
          `Weekly delivery`,
          `${this.mealQty} meal${this.mealQty > 1 ? 's' : ''} per week`,
          'Delivered once a week',
          `Saves ${this.mealSavedTime} per week`,
        ]
        this.totalFoodSummary = {
          ...config.meal,
          amount: total,
        }
      }
      if (this.mealFrequency === 'Twice a week') {
        frequency = 'weekly-twodays'

        if (this.mealQty > 10) {
          this.mealQty = 10
        }
        deliveryDays[this.selectedDays[0]] = this.mealQty
        deliveryDays[this.selectedDays[1]] = this.mealQty
        const config = {
          meal: {
            item: null,
            frequency: 'weekly-twodays',
            qty: this.mealQty * 2,
            service_day: this.selectedDays,
            meal_per_delivery: deliveryDays,
          },
        }
        const total = pricing(config)
        totalAmount = total
        this.services[0].price = total.toString()
        this.getTotalPrice(this.services, this.selectedService)
        this.foodSummary = [
          `Weekly delivery`,
          `${this.mealQty * 2} meals per week`,
          'Delivered twice a week',
          `Saves ${this.mealSavedTime} per week`,
        ]

        this.totalFoodSummary = {
          ...config.meal,
          amount: total,
        }
      }

      this.foodPayload = {
        frequency: frequency,
        item: null,
        qty: days.length > 0 ? this.mealQty * days.length : days.length > 0,
        service_day: days,
        meal_per_delivery: deliveryDays,
        amount: totalAmount,
      }
    },
    increaseFoodOrder() {
      if (this.mealQty < 20) {
        this.mealQty++
        this.calculateFoodPrice()
      }
    },
    decreaseFoodOrder() {
      if (this.mealQty > 1) {
        this.mealQty--
        this.calculateFoodPrice()
      }
    },
    getMealPrice(plan) {
      if (plan.name.toLowerCase() === 'daily') {
        this.selectedDays = ['monday-friday']
      }
      if (plan.name.toLowerCase() === 'weekly') {
        this.selectedDays = ['monday']
      }
      if (plan.name === 'Twice a week') {
        this.selectedDays = ['monday', 'thursday']
      }

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
          service_day: ['thursday'],
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
        `Saves ${this.laundrySavedTime} per week`,
      ]
      this.totalLaundrySummary = {
        frequency: this.laundryFreqValue,
        item: this.laundryTypeValue,
        qty: this.laundryQty,
        service_day: ['monday'],
        amount: total,
      }
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
    async fetchCleaningServiceTypes() {
      const cleaningResponse = await getCleaningServiceTypes()
      this.cleaningServiceTypes = cleaningResponse.data.data
      const [{ cleaning_areas = [] }] = this.cleaningServiceTypes.filter(
        ({ name }) => name.toLowerCase() === 'standard cleaning'
      )
      this.cleaningQtyOption = cleaning_areas.map((obj) => ({
        ...obj,
        qty: 0,
      }))
      this.cleaningQtyOption[0].qty = 1
      this.cleaningQtyOption[1].qty = 1
      this.cleaningQtyOption[2].qty = 1
      this.cleaningQtyOption[3].qty = 1
      this.setCleaningArea('standard cleaning')
      this.calculateCleaningPrice()
    },
    calculateCleaningPrice() {
      const { item, itemAreas, frequency, qty } = this.cleaningInfo
      const total = pricing({
        cleaning: {
          item,
          item_areas: itemAreas,
          frequency,
          qty,
          service_day: ['saturday'],
        },
      })
      const newItemAreas = Object.keys(itemAreas).reduce((accumulator, key) => {
        if (itemAreas[key] !== 0) {
          accumulator[key] = itemAreas[key]
        }
        return accumulator
      }, {})

      this.services[2].price = total.toString()
      this.getTotalPrice(this.services, this.selectedService)
      this.cleaningSummary = [
        `${
          this.cleaningType.includes('Deep')
            ? this.cleaningType
            : 'Standard Cleaning'
        }`,
        `${this.roomTypes}`,
        `${this.cleaningFrequency}`,
        `Saves ${this.cleaningSavedTime} per week`,
      ]
      this.totalCleaningSummary = {
        frequency: this.cleaningInfo.frequency,
        item: this.cleaningInfo.item,
        item_areas: newItemAreas,
        qty: this.cleaningInfo.qty,
        service_day: ['monday'],
        amount: total,
      }
    },
    setCleaningArea(area) {
      const [{ cleaning_areas = [] }] = this.cleaningServiceTypes.filter(
        ({ name }) => name.toLowerCase() === area.toLowerCase()
      )
      cleaning_areas.forEach((e1) =>
        this.cleaningQtyOption.forEach((e2) => {
          if (e1.slug === e2.slug) {
            this.cleaningInfo.itemAreas[e1.slug] = e2.qty
          }
        })
      )
    },
    getCleaningPrice(plan) {
      if (plan.type === 'cleaning') {
        plan.name.includes('Standard')
          ? (this.cleaningType = 'Standard Cleaning')
          : (this.cleaningType = plan.name)

        this.cleaningTypeValue = plan.value
        if (plan.value === 'standard-cleaning') {
          this.cleaningInfo.item = plan.value
          this.setCleaningConfig('standard cleaning')
        }
        if (plan.value === 'deep-cleaning') {
          this.cleaningInfo.item = plan.value
          this.setCleaningConfig('deep cleaning')
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
        return item.qty + ' ' + item.cleaning_area_name
      })
      this.roomTypes = rooms.join(', ')
    },
    setCleaningConfig(plan) {
      this.cleaningInfo.itemAreas = {}
      const [{ cleaning_areas = [] }] = this.cleaningServiceTypes.filter(
        ({ name }) => name.toLowerCase() === plan
      )

      this.setCleaningArea(plan)
      this.calculateCleaningPrice()
      this.getEstimateRoomTypes()
      return cleaning_areas
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_pricing.scss';
</style>
