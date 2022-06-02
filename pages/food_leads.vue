<template>
  <div>
    <div class="container--hero">
      <header class="header">
        <nuxt-link :to="{ path: '/' }" class="header__logo">
          <img
            src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611230252/eden-website-v2/eden-logo_lcepc6.svg"
            alt="Eden logo"
          />
        </nuxt-link>
      </header>
      <div class="hero">
        <div class="hero__header">
          <div class="hero__header-title">
            <h1>
                Spend less time worrying about <span>what to eat</span> and more time enjoying life.
            </h1>  
            <p>Pay once a month and get:</p>
            <ul>
              <li>
                 <span class="icon"> 🥘 </span>
                Delicious meals delivered to your doorstep where and how you want it.
             </li>
              <li>
                 <span class="icon"> 👩🏽‍🦰 </span>
                 A dedicated Customer Support representative.
              </li>
              <li>
                 <span class="icon"> 🍝 </span>
                Over 100 meal combos to pick from weekly. 
            </li>
            </ul>

            <button @click.prevent="scrollToFooter('getEden')" class="hero__form-btn">
              Give me a food plan
            </button>
          </div>
          <div class="hero__header--img">
            <div ref="center-image-mobile" class="center"></div>
            <div class="hero__header--img-container">
              <!-- <div
                v-for="(item, i) in 8"
                :ref="'mobilespin-' + item"
                :key="i"
                :class="`dial dial-${i + 1}`"
                @click.prevent="changeCenterMobile(i)"
              ></div> -->
              <div
                class="dial dial-1"
                @click.prevent="changeCenterMobile(1)"
              ></div>
              <div
                class="dial dial-2"
                @click.prevent="changeCenterMobile(2)"
              ></div>
              <div
                class="dial dial-3"
                @click.prevent="changeCenterMobile(3)"
              ></div>
              <div
                class="dial dial-4"
                @click.prevent="changeCenterMobile(4)"
              ></div>
              <div
                class="dial dial-5"
                @click.prevent="changeCenterMobile(5)"
              ></div>
              <div
                class="dial dial-6"
                @click.prevent="changeCenterMobile(6)"
              ></div>
              <div
                class="dial dial-7"
                @click.prevent="changeCenterMobile(7)"
              ></div>
              <div
                class="dial dial-8"
                @click.prevent="changeCenterMobile(8)"
              ></div>
            </div>
          </div>
        </div>
        <div class="hero__img">
          <div ref="center-image" class="center"></div>
          <div class="hero__img-container">
            <!-- <div
              v-for="(item, i) in 9"
              :ref="'spin-' + item"
              :key="i"
              :class="`dial dial-${i + 1}`"
              @click.prevent="changeCenter(i)"
            ></div> -->
            <div class="dial dial-1" @click.prevent="changeCenter(1)"></div>
            <div class="dial dial-2" @click.prevent="changeCenter(2)"></div>
            <div class="dial dial-3" @click.prevent="changeCenter(3)"></div>
            <div class="dial dial-4" @click.prevent="changeCenter(4)"></div>
            <div class="dial dial-5" @click.prevent="changeCenter(5)"></div>
            <div class="dial dial-6" @click.prevent="changeCenter(6)"></div>
            <div class="dial dial-7" @click.prevent="changeCenter(7)"></div>
            <div class="dial dial-8" @click.prevent="changeCenter(8)"></div>
          </div>
        </div>
      </div>
    </div>

        <div class="container--description">
      <section class="description">
         <div class="description__title">
            <h3>Here’s how it works:</h3>
          </div>
        <div class="description__inner">
          <div class="description__details">
            <div class="description__details-item">
              <div class="description__details-item--icon">
                <img src="@/assets/images/emojis/one.png" alt="number emoji" />
              </div>
              <div
                v-animate-onscroll.repeat="'animated fadeInDown'"
                class="description__details-item--text"
              >
                <h5>You choose a plan that works for you.</h5>
                <p>
                  Sign up on the Eden app. Choose a meal schedule that works for you. It takes less than 5 minutes!
                </p>
              </div>
            </div>
            <div class="description__details-item">
              <div class="description__details-item--icon">
                <img
                  src="@/assets/images/emojis/two.png"
                  alt="number emoji"
                />
              </div>
              <div
                v-animate-onscroll.repeat="'animated fadeInLeft'"
                class="description__details-item--text"
              >
                <h5>We cook and deliver.</h5>
                <p>
                  We cook up your picks from our rich menu and deliver them to you on schedule. At no extra delivery costs.
                </p>
              </div>
            </div>
            <div class="description__details-item">
              <div class="description__details-item--icon">
                <img src="@/assets/images/emojis/three.png" alt="emoji" />
              </div>
              <div
                v-animate-onscroll.repeat="'animated fadeInDown'"
                class="description__details-item--text"
              >
                <h5>You heat and eat.</h5>
                <p>
                  It's ready to eat in 5 minutes or you can refrigerate for later!
                </p>
              </div>
            </div>
          </div>
          <div class="description__inner-left">
            <div
              class="description__inner-left-img1"
            >
              <img
               v-animate-onscroll="'animated fadeInDown'"
                src="@/assets/images/food-img-1.png"
                alt="food-image"
              />
            </div>
            <div
              class="description__inner-left-img2"
            >
              <img
               v-animate-onscroll="'animated fadeInUp'"
                src="@/assets/images/food-img-2.png"
                alt="food-image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>

        <div class="container--plan">
      <section class="plan">
        <div class="plan__title">
          <h3>The Food Plans:<br /></h3>
          <p>
            Enjoy all the deliciousness of healthy food, right on time, with none of the stress.
          </p>
          <ul>
            <li>
              <h5 class="icon">⏰</h5>
              <div class="icon--text">
                <h5>Save Time</h5>
                <p>Up to 14 hours every week</p>
              </div>
            </li>
            <li>
              <h5 class="icon">💰</h5>
              <div class="icon--text">
                <h5>One Monthly Payment.</h5>
                <p>No hidden delivery fees</p>
              </div>
            </li>
            <li>
              <h5 class="icon">⏸</h5>
              <div class="icon--text">
                <h5>Pause Anytime.</h5>
                <p>Out of town? You can skip a service</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="plan__price">
          <ul>
            <li
              :class="{ active: period === 'weekly' }"
              @click.prevent="period = 'weekly'"
            >
              <span> Daily Delivery </span>
              <svg
                v-if="period === 'weekly'"
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
              :class="{ active: period === 'monthly' }"
              @click.prevent="period = 'monthly'"
            >
              <span> Weekly delivery </span>
              <svg
                v-if="period === 'monthly'"
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
          <transition name="slide-fade">
            <div v-if="period === 'weekly'" class="plan__price-weekly">
              <div class="plan__price-item one">
                <p>How many meals do you want daily?</p>
                <div class="btn--group">
                  <button
                    class="btn--item minus"
                    @click.prevent="decreaseOrder('weekly')"
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
                    v-model="mealsPerDay"
                    type="number"
                    name=""
                    placeholder="0"
                    readonly
                  />
                  <button
                    class="btn--item plus"
                    @click.prevent="increaseOrder('weekly')"
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
                <div class="plan__price-bottom">
                  <h5>
                    <span class="price">Price </span>
                    <span class="icon">👉 </span> NGN
                    {{ currencyFormat(totalDailyPrice) }}
                  </h5>
                  <p>per 4 weeks</p>
                </div>
                <div class="plan__price-alert">
                  <p>You will get 5 meals delivered once a week for 4 weeks.</p>
                </div>
                <button @click.prevent="scrollToFooter('getEden')" class="hero__form-btn">
                  Give me a food plan
                </button>
              </div>
          </transition>
          <transition name="slide-fade">
            <div v-if="period === 'monthly'" class="plan__price-monthly">
              <div class="plan__price-item">
                <p>Number of meals per delivery?</p>
                <div class="btn--group">
                  <button
                    class="btn--item minus"
                    @click.prevent="decreaseOrder('monthly')"
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
                    v-model="mealsPerWeek"
                    type="number"
                    name=""
                    placeholder="0"
                    readonly
                  />
                  <button
                    class="btn--item plus"
                    @click.prevent="increaseOrder('monthly')"
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
              <div class="plan__price-item">
                <p class="desktop">
                  Should all your food delivered be once or twice in a week?
                </p>
                <p class="mobile">
                  Should we deliver all once or twice weekly?
                </p>
                <div class="btn--group">
                  <button
                    class="btn--item minus"
                    @click.prevent="decreaseFrequency()"
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
                    v-model="deliveryPerWeek"
                    type="number"
                    name=""
                    placeholder="0"
                    readonly
                    max="2"
                  />
                  <button
                    class="btn--item plus"
                    @click.prevent="increaseFrequency()"
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
              <div class="plan__price-bottom">
                <h5>
                  <span class="price">Price </span>
                  <span class="icon">👉 </span> NGN
                  {{ currencyFormat(totalWeeklyPrice) }}
                </h5>
                <p>per 4 weeks</p>
              </div>
                 <div class="plan__price-alert">
                    <p>You will get 5 meals delivered once a week for 4 weeks.</p>
                 </div>
                  <button @click.prevent="scrollToFooter('getEden')" class="hero__form-btn">
                    Give me a food plan
                  </button>
            </div>
          </transition>
        </div>
      </section>
    </div>

    <div class="container--wall">
      <section class="wall">
        <div class="wall__title">
          <h3>Why should I let Eden Life take care of my food?</h3>
        </div>
        <div class="wall__messages">
         <div class="s">
            <div class="wall__messages-first-box">
             <div class="wall__messages-title">
               <h3>You will not have to worry about cooking because we will cook for you, and you just... eat. </h3>
             </div>
             <p class="card__description">Just select your weekly meals and they come to you where, and how you want it. </p>
              <div class="card">
                <a href="https://twitter.com/IB_DAVIES/status/1379455244468387845?s=20&t=FNzOEiLQCMhXnymldIm6LQ" target="_blank">
                  <div class="card__title">
                    <div class="card__title-img">
                      <img
                        :src="require(`~/assets/images/customer-davies.png`)"
                        alt="customer-davies"
                      />
                    </div>
                    <div class="">
                      <p class="card__title-name">YT: IBIFUBARA</p>
                      <p class="card__title-handle">@IB_DAVIES</p>
                    </div>
                  </div>
                  <p class="card__description">
                    Finally here 😍
                    <br/>
                    Goodbye to cooking 😌
                  </p>
                </a>
                <div class="mt-4">
                   <img
                      :src="require(`~/assets/images/customer-food.png`)"
                      alt="customer-food"
                    />
                  <img
                        :src="require(`~/assets/images/customer-food-2.png`)"
                        alt="customer-food"
                  />
                </div>
              </div>
          </div>
            <div class="wall__messages-first-box">
                <div class="wall__messages-title">
                  <h3>It's perfect for your busy lifestyle.</h3>    
                </div> 
                <p class="card__description">Choose a plan, let us know where you'd like your meals delivered, and we'll take care of the rest.</p>
                  <div class="card">
                    <a href="https://twitter.com/adakanma/status/1304074750952714241?s=20&t=FNzOEiLQCMhXnymldIm6LQ" target="_blank">
                      <div class="card__title">
                        <div class="card__title-img">
                          <img
                            :src="require(`~/assets/images/customer-adaku.png`)"
                            alt="customer-adaku"
                          />
                        </div>

                        <div class="">
                          <p class="card__title-name">Adaku</p>
                          <p class="card__title-handle">@adakanma</p>
                        </div>
                      </div>
                      <p class="card__description">
                        Got my first meal delivery from <span style="color:#03A84E"> @ouredenlife </span> today and I'm sold. I was made for this lifestyle, please.<br><br>
                      </p>
                    </a>
                  </div>
            </div>
         </div>
          
          <div class="wall__messages-second_card">
             <div class="wall__messages-first-box">
                <div class="wall__messages-title">
                  <h3>We will take off the stress of worrying about what to eat off your shoulders. .</h3>    
                </div> 
                <p class="card__description">By choosing an Eden food plan, you go from spending up to 10 hours weekly worrying about what to eat to spending only 5 minutes picking your meals.</p>
                  <div class="card">
                    <a href="https://twitter.com/_blakdave/status/1374680001841405953?s=20&t=FNzOEiLQCMhXnymldIm6LQ" target="_blank">
                      <div class="card__title">
                        <div class="card__title-img">
                          <img
                            :src="require(`~/assets/images/customer-dave.png`)"
                            alt="customer-dave"
                          />
                        </div>

                        <div class="">
                          <p class="card__title-name">Dave</p>
                          <p class="card__title-handle">@_blakdave</p>
                        </div>
                      </div>
                      <p class="card__description">
                        I've decided to let <span style="color:#03A84E"> Eden Life</span> take the wheel abeg.  <br/>
                        I'm tired of this stress of thinking of what to eat and getting the food every time. 😩
                      </p>
                    </a>
                  </div>
              </div>
              <div class="wall__messages-first-box">
                <div class="wall__messages-title">
                  <h3>We will do whatever it takes to deliver your meals on time.</h3>
                  </div>
                  <p class="card__description">We're committed to providing you with delicious meals, so we make them fresh and deliver them on time.</p>
                    <div class="card">
                      <a href="https://twitter.com/DavidAbu_/status/1433837237469433857?s=20&t=FNzOEiLQCMhXnymldIm6LQ" target="_blank">
                        <div class="card__title">
                          <div class="card__title-img">
                            <img
                              :src="require(`~/assets/images/customer-david.png`)"
                              alt="customer-david"
                            />
                          </div>

                          <div class="">
                            <p class="card__title-name">David Abu</p>
                            <p class="card__title-handle">@DavidAbu_</p>
                          </div>
                        </div>
                        <p class="card__description">
                          My <span style="color:#03A84E"> Eden Life</span> rider entered the rain to get me my food😔😩, and as I was leaving he said enjoy the meal.
                          <br/>
                          Ahhh you are inside rain Oga, you are still doing customer service.
                          <br/>
                          I am sold sha.<br><br>
                        </p>
                      </a>
                    </div>
              </div>
          </div>
        </div>
      </section>
    </div>
         <div class="container--form">
       <section class="food" id="getEden">
          <div class="food__form">
             <div class="food__form-title">
               <h3>You're one step closer to not worrying <br/> about what to eat.
               </h3>
               <p>Enter your details and we’ll reach out to you about the next steps. <br/>
                    Let's go!
                </p>
             </div>

            <div class="form">
            <div class="form__input">
              <label for="company name"> Full Name</label>
              <input
                id=""
                v-model="foodForm.full_name"
                type="text"
                name=""
                placeholder="Your first & last name"
                :class="{ 'has-error': $v.foodForm.full_name.$error }"
              />
            </div>

            <div class="form__input">
              <label for="email">Email Address </label>
              <input
                id=""
                v-model="foodForm.email"
                type="email"
                name=""
                placeholder="email@example.com"
                :class="{ 'has-error': $v.foodForm.email.$error }"
              />
            </div>

           <div class="form__input">
              <label for="phone number">Contact Person’s Phone Number</label>
              <input
                id=""
                v-model.trim="$v.foodForm.phone_number.$model"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                type="text"
                name=""
                placeholder="08123456789"
                :class="{ 'has-error': $v.foodForm.phone_number.$error }"
              />
            </div>
            <button
              type="submit"
              class="btn--submit"
              :class="{
                loading: loading,
              }"
              :disabled="loading"
              @click.prevent="submit()"
            >
               I want an Eden Life Food plan
            </button>
          </div>
        </div>
       </section>
    </div>

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
              Please try again or reach us at <span>eve@edenlife.ng </span> or
              <span>+2348123456790</span>
            </p>
          </div>
        </div>
      </div>
      <div slot="footer"></div>
    </modal>

    <!-- <div class="container--description">
      <section class="description">
        <div class="description__title">
          <h3>Why let Eden worry about lunchtime?</h3>
          <div class="card">
            <a :href="testimonial.tweetLink" target="_blank">
              <div class="card__title">
                <div class="card__title-img">
                  <img
                    :src="
                      require(`~/assets/images/customer-${testimonial.image}.png`)
                    "
                    :alt="testimonial.name"
                  />
                </div>

                <div class="">
                  <p class="card__title-name">{{ testimonial.name }}</p>
                  <p class="card__title-handle">@{{ testimonial.handle }}</p>
                </div>
              </div>
              <p class="card__description" v-html="testimonial.description"></p>
              <img
                class="card__description__image"
                v-if="testimonial.food_img"
                :src="require(`~/assets/images/${testimonial.food_img}.jpeg`)"
                :alt="testimonial.name"
              />
            </a>
          </div>
        </div>
        <div class="description__details">
          <div class="description__details-item">
            <div class="description__details-item--icon">
              <img
                :src="require(`~/assets/images/emojis/moneybag.png`)"
                alt=""
              />
            </div>

            <div class="description__details-item--text">
              <h5>It saves you precious time</h5>
              <p>
                By choosing an Eden lunch plan, you go from spending up to 15
                hours weekly worrying about lunch to spending only 5 minutes
                picking your meals.
              </p>
            </div>
          </div>
          <div class="description__details-item">
            <div class="description__details-item--icon">
              <img :src="require(`~/assets/images/emojis/rocket.png`)" alt="" />
            </div>
            <div class="description__details-item--text">
              <h5>It's a monthly subscription</h5>
              <p>
                You pay once and get fresh food all through the month. Once you
                subscribe, you're good for the whole month.
              </p>
            </div>
          </div>
          <div class="description__details-item">
            <div class="description__details-item--icon">
              <img :src="require(`~/assets/images/emojis/wow.png`)" alt="" />
            </div>
            <div class="description__details-item--text">
              <h5>It's perfect for your busy lifestyle</h5>
              <p>
                You don't have to do anything at all. We'll handle everything
                from shopping to cooking to delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div> -->
    <div class="container--menu">
      <div v-if="!currentMeals.length" class="menu__loader">
        <Loader />
        <p>Loading menu...</p>
      </div>
      <transition name="slide-fade">
        <Menu
          v-if="currentMeals.length && showCurrentMenu"
          :meals="currentMeals"
          :nextMeals="nextWeekMeals"
          :title="'Current Menu'"
          :firstDateFormat="firstDateFormat"
          :lastDateFormat="lastDateFormat"
          @showNext="toggleMenu('next')"
        />
      </transition>
      <transition name="slide-fade">
        <Menu
          v-if="showNextMenu"
          :meals="nextWeekMeals"
          :title="'Next weeks Menu'"
          :firstDateFormat="nextFirstDateFormat"
          :lastDateFormat="nextLastDateFormat"
          @showCurrent="toggleMenu('current')"
        />
      </transition>
      <section v-if="currentMeals.length" class="menu">
        <button class="menu-btn" @click.prevent="scrollToFooter('getEden')">
          Give me a food plan
        </button>
      </section>
    </div>
      <footer>
         <lead-gen-footer />
      </footer>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import { notUrl } from '~/utils/validators'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import { createFoodLeads } from '~/request/airtable'
import { pricing } from '~/static/pricing'
import {
  currencyFormat,
  placeholderColorMix,
} from '~/static/functions'
import currentMeal from '~/mixins/currentMeal'
import getSiteMeta from '~/utils/getSiteMeta'
import LeadGenFooter from '~/components/LeadGenFooter.vue'

export default {
  components: {
    LeadGenFooter,
    Loader: () => import('@/components/Loader.vue'),
    Menu: () => import('@/components/Menu.vue'),
  },
  mixins: [validationMixin, currentMeal],
  layout: 'lead',
    validations: {
    foodForm: {
      full_name: { required, notUrl },
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
      form: {
        email: '',
        name: '',
        phone_number: '',
      },
      loading: false,
      showFailedModal: false,
      mealsPerDay: 1,
      mealsPerWeek: 5,
      deliveryPerWeek: 1,
      totalDailyPrice: null,
      totalWeeklyPrice: null,
      period: 'monthly',
      defaultImage: 9,
      setInitialImage: null,
      setLastIndex: null,
      responseMessage: '',
      foodForm: {
        full_name: '',
        email: '',
        phone_number: '',
      },
    }
  },
    head() {
    return {
      title: 'Eden | Food Leads',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://ouredenlifev2-staging.netlify.app/food_leads`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        title: 'Eden | Food Leads',
        description:
          'Your chef-cooked meals, delivered to you. Daily or weekly.',
        url: `https://ouredenlifev2-staging.netlify.app/food_leads`,
        mainImage: 'https://ouredenlifev2-staging.netlify.app/edencardfood.png',
      }
      return getSiteMeta(metaData)
    },
  },
  mounted() {
    this.totalDailyPrice = pricing({
      meal: { item: null, frequency: 'daily', qty: this.mealsPerDay },
    })
    this.totalWeeklyPrice = pricing({
      meal: { item: null, frequency: 'weekly', qty: this.mealsPerWeek },
    })
    mixpanelTrackEvent('Food Lead page')
  },
  methods: {
        currencyFormat,
    placeholderColorMix,
    toggleMenu(menu) {
      if (menu === 'next') {
        this.showCurrentMenu = false
        this.showNextMenu = true
      } else {
        this.showNextMenu = false
        this.showCurrentMenu = true
      }
    },
    placeholderColorMix,
    scrollToTop(ref) {
      this.$refs[ref].scrollIntoView()
    },
    increaseOrder(order) {
      mixpanelTrackEvent(`Increase ${order} order clicked - food leads page`)

      if (order === 'weekly') {
        this.mealsPerDay++
        this.totalDailyPrice = pricing({
          meal: { item: null, frequency: 'daily', qty: this.mealsPerDay },
        })
      }
      if (order === 'monthly') {
        this.mealsPerWeek++
        const freq = this.deliveryPerWeek === 1 ? 'weekly' : 'weekly-twodays'
        this.checkWeeklyFreq(freq)
      }
    },
    decreaseOrder(order) {
      mixpanelTrackEvent(`Decrease ${order} order clicked - food leads page`)

      if (order === 'weekly' && this.mealsPerDay > 1) {
        this.mealsPerDay--
        this.totalDailyPrice = pricing({
          meal: { item: null, frequency: 'daily', qty: this.mealsPerDay },
        })
      }
      if (order === 'monthly' && this.mealsPerWeek > 1) {
        this.mealsPerWeek--
        if (this.mealsPerWeek === 1) {
          this.deliveryPerWeek = 1
        }
        const freq = this.deliveryPerWeek === 1 ? 'weekly' : 'weekly-twodays'
        this.checkWeeklyFreq(freq)
      }
    },
    increaseFrequency() {
      mixpanelTrackEvent(`Increase order frequency clicked - food leads page`)

      if (this.deliveryPerWeek < 2 && this.mealsPerWeek > 1) {
        this.deliveryPerWeek++
        const freq = this.deliveryPerWeek === 1 ? 'weekly' : 'weekly-twodays'
        this.checkWeeklyFreq(freq)
      }
    },
    decreaseFrequency() {
      mixpanelTrackEvent(`Decrease order frequency clicked - food leads page`)

      if (this.deliveryPerWeek > 1) {
        this.deliveryPerWeek--
        const freq = this.deliveryPerWeek === 1 ? 'weekly' : 'weekly-twodays'
        this.checkWeeklyFreq(freq)
      }
    },
    checkWeeklyFreq(freq) {
      if (freq === 'weekly') {
        this.totalWeeklyPrice = pricing({
          meal: { item: null, frequency: freq, qty: this.mealsPerWeek },
        })
      } else {
        this.totalWeeklyPrice = pricing({
          meal: { item: null, frequency: freq, qty: this.mealsPerWeek * 2 },
        })
      }
    },
    scrollToFooter(id) {
      document.getElementById(id).scrollIntoView()
    },
    async submit() {
      this.$v.foodForm.$touch()
      if (this.$v.foodForm.$error) return
      if (!this.$v.foodForm.$error) {
        try {
          this.loading = true
          const metaData = {
            'Full Name': this.foodForm.full_name,
            'Email Address': this.foodForm.email,
            'Phone Number': this.foodForm.phone_number,
          }
          const leadMetaData = {
           name: this.foodForm.full_name,
           email: this.foodForm.email,
           phone: this.foodForm.phone_number,
            lead_gen_page: window.location.href,
            referrer: document.referrer,
          }
          this.$intercom('update', {
            name: this.foodForm.full_name,
            email: this.foodForm.email,
            phone: this.foodForm.phone_number,
            lead_gen_page: window.location.href,
            referrer: document.referrer,
          })
          this.$intercom('trackEvent', 'lead-genaration-signup', leadMetaData)
          createFoodLeads(metaData).then(
            (res) => {
              this.loading = false
              mixpanelTrackEvent('Food Leads form submitted')
              setTimeout(() => {
                Object.keys(this.foodForm).forEach(
                  (key) => (this.foodForm[key] = '')
                )
                this.$nextTick(() => {
                  this.$v.foodForm.$reset()
                   this.$router.push('/success_page')
                })
              }, 500)
            },
            (err) => {
              this.loading = false
              this.showFailedModal = true
            }
          )
        } catch (error) {
          this.loading = false
          this.showFailedModal = true
        }
      }
    },
    openSocialMedia(name, url) {
      mixpanelTrackEvent(`${name} icon clicked - Lead page`)
      window.open(url, '_blank')
    },
    changeCenter(i) {
      const root = document.querySelector(':root')
      const element = document.querySelector(`.dial-${i}`)
      getComputedStyle(element, '::before')
      const centerImage = getComputedStyle(element, '::before')[
        'background-image'
      ]
      const getIndex = centerImage.substring(
        centerImage.indexOf('signuphero-') + 11
      )[0]
      const imageIndex = parseInt(getIndex)

      if (imageIndex === 9) {
        root.style.setProperty(
          `--psuedo-image-${i}`,
          `url('https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1622192212/eden-website-v2/signuphero-${this.defaultImage}.png')`
        )
        this.$refs[
          'center-image'
        ].style.backgroundImage = `url('https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1622192212/eden-website-v2/signuphero-${imageIndex}.png')`

        this.defaultImage = imageIndex
        return
      }

      root.style.setProperty(
        `--psuedo-image-${i}`,
        `url('https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1622192212/eden-website-v2/signuphero-${this.defaultImage}.png')`
      )

      this.$refs[
        'center-image'
      ].style.backgroundImage = `url('https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1622192212/eden-website-v2/signuphero-${imageIndex}.png')`

      this.defaultImage = imageIndex
    },
    changeCenterMobile(i) {
      const root = document.querySelector(':root')
      const element = document.querySelector(`.dial-${i}`)
      getComputedStyle(element, '::before')
      const centerImage = getComputedStyle(element, '::before')[
        'background-image'
      ]
      const getIndex = centerImage.substring(
        centerImage.indexOf('signuphero-') + 11
      )[0]
      const imageIndex = parseInt(getIndex)

      if (imageIndex === 9) {
        root.style.setProperty(
          `--psuedo-image-${i}`,
          `url('https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1622192212/eden-website-v2/signuphero-${this.defaultImage}.png')`
        )
        this.$refs[
          'center-image-mobile'
        ].style.backgroundImage = `url('https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1622192212/eden-website-v2/signuphero-${imageIndex}.png')`

        this.defaultImage = imageIndex
        return
      }

      root.style.setProperty(
        `--psuedo-image-${i}`,
        `url('https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1622192212/eden-website-v2/signuphero-${this.defaultImage}.png')`
      )

      this.$refs[
        'center-image-mobile'
      ].style.backgroundImage = `url('https://res.cloudinary.com/eden-life-inc/image/upload/f_auto,q_auto/v1622192212/eden-website-v2/signuphero-${imageIndex}.png')`

      this.defaultImage = imageIndex
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_signup.scss';
@import '@/assets/scss/pages/_food_leads.scss';
</style>

<style>
:root {
  --psuedo-image-1: url('https://res.cloudinary.com/eden-life-inc/image/upload/v1654169103/eden-website-v2/Roasted_plantain_tomato_pepper_beef_sauce_dmtase.png');
  --psuedo-image-2: url('https://res.cloudinary.com/eden-life-inc/image/upload/v1654169103/eden-website-v2/Jollof_spagetti_spicy_BBQ_wings_fried_plantain_po5jrp.png');
  --psuedo-image-3: url('https://res.cloudinary.com/eden-life-inc/image/upload/v1654169103/eden-website-v2/chicken_egg_fried_rice_grilled_peppered_croaker_fried_plantain_fnxa4y.png');
  --psuedo-image-4: url('https://res.cloudinary.com/eden-life-inc/image/upload/v1654169103/eden-website-v2/ewa_agonyin_fried_chilli_barracuda_fried_plantain_plrayh.png');
  --psuedo-image-5: url('https://res.cloudinary.com/eden-life-inc/image/upload/v1654169104/eden-website-v2/stir_fry_vegetable_pasta_peppered_beef_fried_plantain_xlgwyl.png');
  --psuedo-image-6: url('https://res.cloudinary.com/eden-life-inc/image/upload/v1654169103/eden-website-v2/Poundo_Egusi_soup_Cowlegg_snnwa5.png');
  --psuedo-image-7: url('https://res.cloudinary.com/eden-life-inc/image/upload/v1654169103/eden-website-v2/pancake_scrambled_eggs_baked_beans_mkf3ek.png');
  --psuedo-image-8: url('https://res.cloudinary.com/eden-life-inc/image/upload/v1654169104/eden-website-v2/Teriyaki_Chicken_salad_2_emvrkc.png');
}

.dial-1:before {
  background: var(--psuedo-image-1) center / 92px;
  width: 92px;
  height: 92px;
  background-size: contain;
  content: '';
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: all 0.5s ease-in-out;
}

.dial-2:before {
  background: var(--psuedo-image-2) center / 92px;
  width: 92px;
  height: 92px;
  background-size: contain;
  content: '';
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: all 0.5s ease-in-out;
}

.dial-3:before {
  background: var(--psuedo-image-3) center / 92px;
  width: 92px;
  height: 92px;
  background-size: contain;
  content: '';
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: all 0.5s ease-in-out;
}

.dial-4:before {
  background: var(--psuedo-image-4) center / 92px;
  width: 92px;
  height: 92px;
  background-size: contain;
  content: '';
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: all 0.5s ease-in-out;
}
.dial-5:before {
  background: var(--psuedo-image-5) center / 92px;
  width: 92px;
  height: 92px;
  background-size: contain;
  content: '';
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: all 0.5s ease-in-out;
}
.dial-6:before {
  background: var(--psuedo-image-6) center / 92px;
  width: 92px;
  height: 92px;
  background-size: contain;
  content: '';
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: all 0.5s ease-in-out;
}
.dial-7:before {
  background: var(--psuedo-image-7) center / 92px;
  width: 92px;
  height: 92px;
  background-size: contain;
  content: '';
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: all 0.5s ease-in-out;
}
.dial-8:before {
  background: var(--psuedo-image-8) center / 92px;
  width: 92px;
  height: 92px;
  background-size: contain;
  content: '';
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: all 0.5s ease-in-out;
}

@media only screen and (max-width: 48em) {
  .dial-1:before {
    background: var(--psuedo-image-1) center / 46px;
    width: 46px;
    height: 46px;
  }

  .dial-2:before {
    background: var(--psuedo-image-2) center / 46px;
    width: 46px;
    height: 46px;
  }

  .dial-3:before {
    background: var(--psuedo-image-3) center / 46px;
    width: 46px;
    height: 46px;
  }

  .dial-4:before {
    background: var(--psuedo-image-4) center / 46px;
    width: 46px;
    height: 46px;
  }
  .dial-5:before {
    background: var(--psuedo-image-5) center / 46px;
    width: 46px;
    height: 46px;
  }
  .dial-6:before {
    background: var(--psuedo-image-6) center / 46px;
    width: 46px;
    height: 46px;
  }
  .dial-7:before {
    background: var(--psuedo-image-7) center / 46px;
    width: 46px;
    height: 46px;
  }
  .dial-8:before {
    background: var(--psuedo-image-8) center / 46px;
    width: 46px;
    height: 46px;
  }
  .menu__list-img {
     height: 150px;
  }
}

.mt-4 {
  margin-top: 25px;
}

</style>
