<template>
  <div class="container--pricing">
    <section ref="price-container" class="pricing">
      <div class="pricing__form-container">
        <div class="pricing__form">
          <div class="pricing__form-title">
            <h2>Find A Plan. Made For You.</h2>
            <p>Flexible. Straightforward. No hidden costs.</p>
          </div>
          <div
            v-show="!reconfigurePlan && !setCustom"
            class="pricing__form-slider"
          >
            <div class="pricing__form-slider--title">
              <p>Choose Your Monthly Budget.</p>
              <h3>
                KES {{ formatNumber(estimatedPrice) }}
                <span v-if="estimate === '5'">+</span>
              </h3>
            </div>
            <div v-show="!loading" class="range">
              <input
                id="range"
                v-model="estimate"
                type="range"
                min="0"
                max="4"
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
              </ul>
            </div>
          </div>

          <div class="pricing__form-input">
            <p v-if="reconfigurePlan === false">
              Services available for this budget
            </p>
            <p v-else>What service(s) are you interested in?</p>

            <ul>
              <li
                v-for="(service, index) in services"
                :key="index"
                :value="service.name"
                class="service"
                :class="{
                  selected: selectedService.includes(service.name),
                }"
                :disabled="!setCustom"
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
            v-if="estimate !== '5' && !reconfigurePlan"
            class="pricing__plan"
          >
            <p class="pricing__plan-title">
              For <span>KES {{ formatNumber(estimatedPrice) }}</span> monthly,
              you can get:
            </p>
            <transition name="slide-fade">
              <ul v-if="selectedService.includes('Food')">
                <p>
                  <span>Food plan</span>
                  <span> KES {{ formatNumber(services[0].price) }}</span>
                </p>
                <li v-for="(item, i) in foodSummary" :key="i">{{ item }}</li>
              </ul>
            </transition>
            <transition name="slide-fade">
              <ul v-if="selectedService.includes('Laundry')">
                <p>
                  <span>Laundry plan</span>
                  <span>KES {{ formatNumber(services[1].price) }}</span>
                </p>
                <li v-for="(item, i) in laundrySummary" :key="i">{{ item }}</li>
              </ul>
            </transition>
            <transition name="slide-fade">
              <ul v-if="selectedService.includes('Beauty')">
                <p>
                  <span>Beauty plan</span>
                  <span>KES {{ formatNumber(services[2].price) }}</span>
                </p>
                <li v-for="(item, i) in beautySummary" :key="i">
                  {{ item }}
                </li>
              </ul>
            </transition>
            <transition name="slide-fade">
              <ul v-if="selectedService.includes('Cleaning')">
                <p>
                  <span class="cleaning">Cleaning plan </span>
                  <span>KES {{ formatNumber(services[3].price) }}</span>
                </p>
                <li v-for="(item, i) in cleaningSummary" :key="i">
                  {{ item }}
                </li>
              </ul>
            </transition>

            <p class="pricing__plan-total">
              <span>Total</span>
              <span>KES {{ formatNumber(totalPrice) }}/month</span>
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
            </div>
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

                  <div class="calculator__footer">
                    <p>Food amount</p>
                    <p>KES {{ formatNumber(services[0].price) }}/month</p>
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
                      <label for=""> Laundry Bag (10 KG) </label>
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
                          min="1"
                          max="5"
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
                    <p>KES {{ formatNumber(services[1].price) }}/month</p>
                  </div>
                </div>
              </div>
            </transition>

            <!-- beauty -->
            <transition name="slide-fade">
              <div v-if="selectedService.includes('Beauty')" class="calculator">
                <div class="calculator__header">
                  <p>Beauty plan</p>
                  <button
                    class="calculator__header-btn"
                    @click.prevent="removePlan('Beauty')"
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
                          <div class="label" @click="toggle('beautyType')">
                            <span class="label--text">{{ beautyType }}</span>
                          </div>
                          <svg
                            class="arrow"
                            :class="{
                              expanded: visible.includes('beautyType'),
                            }"
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            @click="toggle('beautyType')"
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
                              hidden: !visible.includes('beautyType'),
                            }"
                          >
                            <transition name="slide-fade">
                              <ul>
                                <li
                                  v-for="(item, i) in beautyTypeOption"
                                  :key="i"
                                >
                                  <span
                                    class="select--item"
                                    @click.prevent="getBeautyPrice(item)"
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
                          <div class="label" @click="toggle('beautyFreq')">
                            <span class="label--text">{{
                              beautyFrequency
                            }}</span>
                          </div>
                          <svg
                            class="arrow"
                            :class="{
                              expanded: visible.includes('beautyFreq'),
                            }"
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            @click="toggle('beautyFreq')"
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
                              hidden: !visible.includes('beautyFreq'),
                            }"
                          >
                            <transition name="slide-fade">
                              <ul>
                                <li
                                  v-for="(item, i) in frequencyOption"
                                  :key="i"
                                >
                                  <span
                                    class="select--item"
                                    @click.prevent="getBeautyPrice(item)"
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
                      <label for=""> Quantity </label>
                      <div class="btn--group">
                        <button
                          class="btn--item minus"
                          @click.prevent="decreaseBeautyOrder()"
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
                          v-model="beautyQty"
                          min="1"
                          max="5"
                          type="number"
                          name=""
                          readonly
                          placeholder="0"
                        />
                        <button
                          class="btn--item plus"
                          @click.prevent="increaseBeautyOrder()"
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
                    <p>Beauty amount</p>
                    <p>KES {{ formatNumber(services[2].price) }}/month</p>
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
                      <label for=""><span>Type</span> </label>
                      <div class="select">
                        <div class="selector">
                          <div class="label" @click="toggle('cleaningType')">
                            <span class="label--text">{{ cleaningType }}</span>
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
                      <label for="">Number of Bedrooms</label>
                      <div class="btn--group">
                        <button
                          class="btn--item minus"
                          @click.prevent="decreaseRoomQty()"
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
                          v-model="cleaningInfo.qty"
                          min="1"
                          max="10"
                          type="number"
                          name=""
                          readonly
                          placeholder="0"
                        />
                        <button
                          class="btn--item plus"
                          @click.prevent="increaseRoomQty()"
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
                    <p>Cleaning amount</p>
                    <p>KES {{ formatNumber(services[3].price) }}/month</p>
                  </div>
                </div>
              </div>
            </transition>

            <p class="pricing__calculator-total">
              <span>Total</span>
              <span>KES {{ formatNumber(totalPrice) }}/month</span>
            </p>
            <div class="pricing__calculator-footer">
              <button
                class="pricing__calculator-switch"
                @click.prevent="switchToEstimate()"
              >
                Use estimate
              </button>
            </div>
          </div>
        </transition>
      </div>
    </section>

    <modal
      v-if="showCleaningModal"
      :show-modal="showCleaningModal"
      class="modal"
    >
      <div slot="header"></div>
      <div slot="body" class="modal__body">
        <div class="pricing__modal">
          <div class="pricing__modal-title">
            <h5>What do I get from Cleaning?</h5>
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
              <li>AC vents cleaned</li>
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
import { mixpanelTrackEvent } from '~/plugins/ke/mixpanel'
import { pricing } from '~/static/ke/pricing'
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
  layout: 'ke-default',
  head() {
    return {
      title: 'Eden | Pricing',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://ouredenlifev2-staging.netlify.app/ke/pricing/`,
        },
        {
          rel: 'alternate',
          hreflang: 'en-ng',
          href: 'https://ouredenlifev2-staging.netlify.app/pricing/',
        },
        {
          rel: 'alternate',
          hreflang: 'en-ke',
          href: 'https://ouredenlifev2-staging.netlify.app/ke/pricing/',
        },
        {
          rel: 'alternate',
          hreflang: 'x-default',
          href: 'https://ouredenlifev2-staging.netlify.app/pricing/',
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        title: 'Eden | Pricing',
        description: `Say goodbye to chores forever. Eden is a tech-enabled service that puts your home's chores on autopilot. Check out how we work!`,
        url: `https://ouredenlifev2-staging.netlify.app/ke/pricing/`,
        mainImage: 'https://ouredenlifev2-staging.netlify.app/edencard.png',
      }
      return getSiteMeta(metaData)
    },
  },
  data() {
    return {
      cleaningPlanType: 'standard-cleaning',
      showCleaningModal: false,
      showSuccessModal: false,
      showEmailModal: false,
      custumerStatus: false,
      subscribeEmail: '',
      selectedService: ['Food', 'Laundry', 'Beauty', 'Cleaning'],
      services: [
        { name: 'Food', price: '' },
        { name: 'Laundry', price: '' },
        { name: 'Beauty', price: '' },
        { name: 'Cleaning', price: '' },
      ],
      form: {
        email: '',
        phone_number: '',
      },
      estimate: 1,
      displayForm: false,
      setCustom: false,
      estimatedPrice: '15000',
      priceList: ['8000', '15000', '20000', '27000', '31000'],
      reconfigurePlan: true,
      visible: [],
      mealFrequency: 'Weekly',
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
          name: 'Weekly',
          value: 'weekly',
        },
        {
          name: 'Twice a week',
          value: 'weekly-twodays',
        },
        {
          name: 'Thrice a week',
          value: 'weekly-threedays',
        },
        {
          name: 'Four days a week',
          value: 'weekly-fourdays',
        },

        {
          name: 'Daily',
          value: 'daily',
        },
      ],
      beautyTypeOption: [
        {
          name: 'Standard',
          value: 'basic',
          count: 2,
        },
        {
          name: 'Premium',
          value: 'basic+essentail',
          count: 4,
        },
      ],
      beautyQty: 1,
      beautyType: 'Standard',
      beautyFrequency: 'Every two weeks',
      beautyFreqName: 'every two weeks',
      beautyTypeValue: 'standard',
      beautyFreqValue: 'bi-weekly',
      beautyServices: ['Manicure', 'Pedicure', 'Massage'],
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
      cleaningQty: 1,
      cleaningFrequency: 'Every two weeks',
      cleaningType: 'Standard cleaning',
      cleaningOptions: [
        {
          name: 'Standard Cleaning',
          value: 'standard-cleaning',
          type: 'cleaning',
        },
        // {
        //   name: 'Deep Cleaning',
        //   value: 'deep-cleaning',
        //   type: 'cleaning',
        // },
      ],
      roomTypes: null,
      cleaningQtyOption: [],
      foodSummary: [],
      laundrySummary: [],
      beautySummary: [],
      cleaningSummary: [],
      totalPrice: '',
      subtotalPrice: '',
      discountPrice: '',
      laundryTypeValue: 'wash-and-fold',
      laundryFreqValue: 'bi-weekly',
      laundryFreqName: 'every two weeks',
      cleaningTypeValue: 'standard-cleaning',
      cleaningFrequencyValue: 'bi-weekly',
      cleaningServiceTypes: [],
      cleaningInfo: {
        item: 'standard-cleaning',
        itemAreas: {},
        itemAreasPrice: {},
        frequency: 'bi-weekly',
        qty: 2,
      },
      loading: false,
      totalFoodSummary: {},
      totalLaundrySummary: {},
      totalCleaningSummary: {},
      totalBeautySummary: {},
      isLoading: false,
      responseMessage: '',
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
          this.mealQty = 40
        } else {
          this.mealQty = val
        }
      }
      this.calculateFoodPrice()
    },
    laundryQty(val) {
      if (val < 1) {
        this.laundryQty = 1
      }
    },

    beautyTypeValue(val) {
      val === 'standard'
        ? (this.beautyServices = ['Manicure', 'Pedicure', 'Massage'])
        : (this.beautyServices = ['Manicure', 'Pedicure', 'Massage'])
    },
  },
  mounted() {
    document.addEventListener('click', this.toggleSelect)
    mixpanelTrackEvent('Pricing page')
    this.fetchCleaningServiceTypes()
    // this.changeService({ name: 'Cleaning' })
    this.switchToEstimate()
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
                meal: this.totalFoodSummary,
              }),
              ...(this.selectedService.includes('Laundry') && {
                laundry: this.totalLaundrySummary,
              }),
              ...(this.selectedService.includes('Cleaning') && {
                cleaning: this.totalCleaningSummary,
              }),
              ...(this.selectedService.includes('Beauty') && {
                beauty: this.totalBeautySummary,
              }),
            },
            discounted_amount: parseInt(this.totalPrice),
          }

          await signupApi(payload)

          this.responseMessage = ''
          this.custumerStatus = false
          this.showEmailModal = true
          this.isLoading = false
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
      this.estimate = 1
      this.selectedService = ['Food', 'Cleaning', 'Laundry']
      this.getEstimate()
    },
    setPlanConfig() {
      this.$refs['price-container'].scrollIntoView()
      this.reconfigurePlan = !this.reconfigurePlan
      this.estimate = 3
      this.selectedService = ['Food', 'Laundry', 'Beauty']
      this.setCustom = true
      this.changeService({ name: 'Cleaning' })

      //  this.getEstimate()
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

      this.totalPrice = subtotal.toString()
    },

    changeService(service) {
      if (this.setCustom) {
        if (!this.selectedService.includes(service.name)) {
          this.selectedService.push(service.name)
        } else if (this.selectedService.length > 1) {
          this.selectedService = this.selectedService.filter(
            (item) => item !== service.name
          )
        }
        this.mealQty = 1
        this.mealFrequency = 'Weekly'
        this.laundryFreqName = 'every two weeks'
        this.laundryType = 'Wash & Fold'
        this.laundryTypeValue = 'wash-and-fold'
        this.laundryFreqValue = 'bi-weekly'
        this.laundryQty = 1

        this.beautyQty = 1
        this.beautyFreqName = 'every two weeks'
        this.beautyType = 'Standard'
        this.beautyTypeValue = 'standard'
        this.beautyFreqValue = 'bi-weekly'

        this.cleaningType = 'Standard cleaning'
        this.cleaningFrequency = 'Every two weeks'
        this.cleaningInfo.item = 'standard-cleaning'
        this.cleaningInfo.frequency = 'bi-weekly'
        this.calculateFoodPrice()
        this.calculateLaundryPrice()
        this.calculateBeautyPrice()
        this.calculateCleaningPrice()
      }
    },

    getDefaultPrice(estimate) {
      switch (estimate.toString()) {
        case '0': {
          this.selectedService = ['Food', 'Laundry', 'Cleaning']
          this.estimatedPrice = this.priceList[0]
          this.services[0].price = String((42.5 / 100) * this.estimatedPrice)
          this.services[1].price = String((25.0 / 100) * this.estimatedPrice)
          this.services[3].price = String((32.5 / 100) * this.estimatedPrice)
          this.totalPrice = this.getTotalEstimate([
            Number(this.services[0].price),
            Number(this.services[1].price),
            Number(this.services[3].price),
          ])
          this.foodSummary = ['Weekly', '1 meal per week']
          this.cleaningSummary = ['Standard Cleaning', '3 Bedrooms, 1 Living Room / Dining Area, 1 Bathroom, 1 Kitchen, 1 balcony, 1 Study', 'Weekly']
          this.laundrySummary = [
            'Wash & Fold',
            'One 10KG Bag',
            'Picked up every two weeks',
            'Additional KES 1,000 for Wash & Iron',
          ]
          break
        }
        case '1': {
          this.selectedService = ['Food', 'Laundry', 'Cleaning']
          this.estimatedPrice = this.priceList[1]
          this.services[0].price = String(
            this.getSinglePrice((72.33 / 100) * this.estimatedPrice)
          )

          this.services[1].price = String(
            this.getSinglePrice((13.33 / 100) * this.estimatedPrice)
          )
          this.services[3].price = String(
            this.getSinglePrice((10.50 / 100) * this.estimatedPrice)
          )
          this.totalPrice = this.getTotalEstimate([
            Number(this.services[0].price),
            Number(this.services[1].price),
            Number(this.services[3].price),
          ])
          this.foodSummary = [
            'Weekly',
            '4 meals per week',
            'Delivered twice a week',
          ]
          this.cleaningSummary = ['Light Cleaning', '2 Bedrooms', 'Weekly', 'Twice a week']
          this.laundrySummary = [
            'Wash & Fold',
            'One 10KG Bag',
            'Picked up every two weeks',
            'Additional KES 1,000 for Wash & Iron',
          ]
          break
        }
        case '2': {
          this.selectedService = ['Food', 'Laundry', 'Beauty', 'Cleaning']
          this.estimatedPrice = this.priceList[2]
          this.services[0].price = String(
            Math.round((65.0 / 100) * this.estimatedPrice)
          )
          this.services[1].price = String(
            Math.round((10.0 / 100) * this.estimatedPrice)
          )
          this.services[2].price = String(
            Math.round((15.0 / 100) * this.estimatedPrice)
          )
          this.services[3].price = String(
            Math.round((8.0 / 100) * this.estimatedPrice)
          )
          this.totalPrice = this.getTotalEstimate([
            Number(this.services[0].price),
            Number(this.services[1].price),
            Number(this.services[2].price),
            Number(this.services[3].price),
          ])
          this.foodSummary = [
            'Weekly',
            '5 meals per week',
            'Delivered once a week',
          ]
          this.cleaningSummary = ['Standard Cleaning', '2 Bedrooms', 'Weekly', 'Twice a week']
          this.beautySummary = [
            '1 basic service',
            'Every two weeks',
            'Additional KES 3,200 for premium beauty services',
          ]
          this.laundrySummary = [
            'Wash & Fold',
            'One 10KG Bag',
            'Picked up every two weeks',
            'Additional KES 1000 for Wash & Iron',
          ]
          break
        }
        case '3': {
          this.selectedService = ['Food', 'Laundry', 'Beauty', 'Cleaning']
          this.estimatedPrice = this.priceList[3]
          this.services[0].price = String(
            this.getSinglePrice((64.90 / 100) * this.estimatedPrice)
          )

          this.services[1].price = String(
            this.getSinglePrice((7.41 / 100) * this.estimatedPrice)
          )
          this.services[2].price = String(
            Math.round((11.11 / 100) * this.estimatedPrice)
          )
          this.services[3].price = String(
            Math.round((8.89 / 100) * this.estimatedPrice)
          )
          this.totalPrice = this.getTotalEstimate([
            Number(this.services[0].price),
            Number(this.services[1].price),
            Number(this.services[2].price),
            Number(this.services[3].price),
          ])
          this.foodSummary = [
            'Weekly',
            '7 meals per week',
            'Delivered once a week',
          ]
          this.cleaningSummary = ['Standard Cleaning', '2 Bedrooms, 1 Living Room / Dining Area, 1 Bathroom, 1 Kitchen, 1 balcony, 1 Study', 'Weekly']
          this.beautySummary = [
            '1 basic service',
            'Every two weeks',
            'Additional KES 3,200 for premium beauty services',
          ]
          this.laundrySummary = [
            'Wash & Fold',
            'One 10KG Bag',
            'Picked up every two weeks',
            'Additional KES 1000 for Wash & Iron',
          ]
          break
        }
        case '4': {
          this.selectedService = ['Food', 'Laundry', 'Beauty', 'Cleaning']
          this.estimatedPrice = this.priceList[4]
          this.services[0].price = String(
            this.getSinglePrice((78.60 / 100) * this.estimatedPrice)
          )

          this.services[1].price = String(
            this.getSinglePrice((3.2 / 100) * this.estimatedPrice)
          )
          this.services[2].price = String(
            this.getSinglePrice((9.70 / 100) * this.estimatedPrice)
          )
          this.services[3].price = String(
            this.getSinglePrice((8.50 / 100) * this.estimatedPrice)
          )
          this.totalPrice = this.getTotalEstimate([
            Number(this.services[0].price),
            Number(this.services[1].price),
            Number(this.services[2].price),
            Number(this.services[3].price),
          ])
          this.foodSummary = [
            'Weekly',
            '10 meals per week',
            'Delivered twice a week',
          ]
          this.cleaningSummary = ['Standard Cleaning', '2 Bedrooms, 1 Living Room / Dining Area, 1 Bathroom, 1 Kitchen, 1 balcony, 1 Study', 'Weekly']
          this.beautySummary = [
            '1 basic service',
            'Every two weeks',
            'Additional KES 5,200 for premium beauty services',
          ]
          this.laundrySummary = [
            'Wash & Fold',
            'One 10KG Bag',
            'Picked up monthly',
            'Additional KES 1000 for Wash & Iron',
          ]
          break
        }
        case '5':
          break
        default:
          console.log('default')
      }
    },

    getSinglePrice(price) {
      return Math.round(price / 100) * 100
    },

    getTotalEstimate(item) {
      return String(item.reduce((acc, val) => acc + val, 0))
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

      const prefs = [
        'webkit-slider-runnable-track',
        'moz-range-track',
        'ms-track',
      ]
      const val = this.estimate * 25

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
      if (plan.name === 'Thrice a week') {
        this.selectedDays = ['monday', 'thursday', 'friday']
      }
      if (plan.name === 'Four days a week') {
        this.selectedDays = ['monday', 'tuesday', 'thursday', 'friday']
      }

      this.mealFrequency = plan.name
      this.calculateFoodPrice()
      this.toggle('food')
    },

    // beauty calculator
    getBeautyPrice(plan) {
      if (plan.value.includes('basic')) {
        this.beautyType = plan.name
        this.beautyTypeValue = plan.value
        this.beautyQty = plan.count
        this.calculateBeautyPrice()
        this.toggle('beautyType')
      } else {
        this.beautyFreqName = plan.label
        this.beautyFrequency = plan.name
        this.beautyFreqValue = plan.value

        this.calculateBeautyPrice()
        this.toggle('beautyFreq')
      }
    },
    calculateBeautyPrice() {
      if (this.beautyTypeValue === 'basic+essentail') {
        return (this.beautyTypeValue = 'premium')
      } else if (this.beautyTypeValue === 'basic') {
        return (this.beautyTypeValue = 'standard')
      }
      const total = pricing({
        beauty: {
          item: this.beautyTypeValue,
          frequency: this.beautyFreqValue,
          qty: this.beautyQty,
          service_day: ['thursday'],
        },
      })
      this.services[2].price = total.toString()
      this.getTotalPrice(this.services, this.selectedService)
      this.totalBeautySummary = {
        item: this.beautyTypeValue,
        frequency: this.beautyFreqValue,
        qty: this.beautyQty,
        service_day: ['thursday'],
        amount: total,
      }
    },
    decreaseBeautyOrder() {
      if (this.beautyQty > 1) {
        this.beautyQty--
        this.calculateBeautyPrice()
      }
    },
    increaseBeautyOrder() {
      if (this.beautyQty < 5) {
        this.beautyQty++
        this.calculateBeautyPrice()
      }
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

      this.services[3].price = total.toString()
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
      console.log(this.totalCleaningSummary)
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
    increaseRoomQty() {
      console.log(this.cleaningQty, this.cleaningInfo.qty)
      if (this.cleaningInfo.qty < 5) {
        this.cleaningInfo.qty++
        this.calculateCleaningPrice()
        console.log
      }
    },
    decreaseRoomQty() {
      this.cleaningInfo.qty > 1
        ? this.cleaningInfo.qty--
        : (this.cleaningInfo.qty = 1)
      this.calculateCleaningPrice()
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
@import '@/assets/scss/pages/ke/_pricing.scss';
</style>
