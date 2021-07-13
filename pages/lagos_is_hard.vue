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
        <div class="hero__title">
          <h1>Lagos is Hard.</h1>
          <h3 class="primary">Let’s save you 20hrs/week.</h3>
          <div>
            <p class="bold">Pay once, and for a month, you get:</p>
            <ul>
              <li>
                <span class="icon">🥘</span
                ><span>Fresh, chef-cooked meals delivered</span>
              </li>
              <li>
                <span class="icon">🧺</span
                ><span>Your laundry picked up and delivered in 48 hours</span>
              </li>
              <li>
                <span class="icon">🏠</span
                ><span>Trained cleaners keeping your space clean</span>
              </li>
            </ul>
            <p class="highlight">
              You can pick one. You can pick all. No hidden delivery charges.
            </p>
          </div>
        </div>
        <div class="hero__img">
          <img
            :src="`https://res.cloudinary.com/eden-life-inc/image/upload/v1625727938/eden-website-v2/lead-hero-${servicesHero[0]}.png`"
            :alt="servicesHero[0]"
          />
        </div>
      </div>
    </div>

    <div ref="custom" class="container--pricing">
      <section class="pricing">
        <div class="pricing__left">
          <div class="pricing__form">
            <div class="pricing__form-title">
              <h3>
                Start your Eden Life today and get 20% of your first Month.
              </h3>
              <p>
                Enter your details and we’ll email you about the next steps.
                Let’s go!
              </p>
            </div>
            <div class="pricing__form-body">
              <div class="pricing__form-input">
                <label for="name">Full Name</label>
                <input
                  id=""
                  v-model="form.name"
                  type="text"
                  name=""
                  placeholder="First & Last Name"
                  :class="{ 'has-error': $v.form.name.$error }"
                />
              </div>
              <div class="pricing__form-input">
                <label for="email">Email</label>
                <input
                  id=""
                  v-model="form.email"
                  type="email"
                  name=""
                  placeholder="email@example.com"
                  :class="{ 'has-error': $v.form.email.$error }"
                />
              </div>
              <div class="pricing__form-input">
                <label for="phone number">Phone Number</label>
                <input
                  id=""
                  v-model.trim="$v.form.phone_number.$model"
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                  type="text"
                  name=""
                  placeholder="08123456789"
                  :class="{ 'has-error': $v.form.phone_number.$error }"
                />
              </div>
              <p v-if="responseMessage.length" class="error-message">
                {{ responseMessage }}
              </p>
              <!-- <div class="pricing__form-input">
                <label for="discount">Referral Code (if any)</label>
                <input
                  id=""
                  v-model="form.discount"
                  type="text"
                  name=""
                  placeholder="EDENX2019"
                />
              </div> -->
              <button class="pricing__form-btn" @click.prevent="getStarted()">
                Get Started at 20% Off Today
              </button>
            </div>
          </div>
          <div class="pricing__left--inner">
            <h3>Don’t just take our word for it...</h3>
            <div v-for="(testimonial, i) in testimonials" :key="i" class="card">
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
                <p
                  class="card__description"
                  v-html="testimonial.description"
                ></p>
              </a>
            </div>
          </div>
        </div>
        <div class="pricing__right">
          <div class="pricing__header">
            <div class="pricing__header-title">
              <h3>Our plans are flexible.</h3>
            </div>

            <div class="pricing__header-input">
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

            <div class="pricing__header-slider">
              <div class="pricing__header-slider--title">
                <p>Choose Your Monthly Budget</p>
                <h3>₦{{ formatNumber(estimatedPrice) }}</h3>
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
          </div>

          <div class="pricing__plan">
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
                  <span class="cleaning">Cleaning plan </span>
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
          </div>
        </div>
      </section>
    </div>

    <div class="container--description">
      <section class="description">
        <div class="description__title">
          <h3>Why you should let Eden <br />make Lagos easier.</h3>
        </div>
        <div class="description__inner">
          <div class="description__inner-left">
            <div class="description__details-item">
              <div class="description__details-item--icon">
                <img :src="require(`~/assets/images/emojis/time.png`)" alt="" />
              </div>

              <div class="description__details-item--text">
                <h5>You get back your time</h5>
                <p>
                  If you live in Lagos, chances are that you spend too much time
                  on things that don't matter. You deserve better. The more you
                  outsource, the less time you spend worrying.
                </p>
              </div>
            </div>
            <div class="description__inner-img">
              <img
                :src="`https://res.cloudinary.com/eden-life-inc/image/upload/v1625727926/eden-website-v2/lead-desc-${serviceOption}.png`"
                :alt="serviceOption"
              />
            </div>
            <div class="description__inner-control">
              <button @click.prevent="prevImg">
                <img :src="require(`~/assets/images/arrow-left.png`)" alt="" />
              </button>
              <button @click.prevent="nextImg">
                <img :src="require(`~/assets/images/arrow-right.png`)" alt="" />
              </button>
            </div>
          </div>
          <div class="description__details">
            <div class="description__details-item">
              <div class="description__details-item--icon">
                <img :src="require(`~/assets/images/emojis/wow.png`)" alt="" />
              </div>
              <div class="description__details-item--text">
                <h5>It's perfect for living in a hectic city</h5>
                <p>
                  We'll show up with your food. We'll pick up and deliver your
                  laundry. Our cleaners will show up with their own cleaning
                  materials and leave it squeaky clean. You won't have to do
                  anything.
                </p>
              </div>
            </div>

            <div class="description__details-item">
              <div class="description__details-item--icon">
                <img
                  :src="require(`~/assets/images/emojis/moneybag.png`)"
                  alt=""
                />
              </div>

              <div class="description__details-item--text">
                <h5>It's budget-friendly</h5>
                <p>
                  We asked around and crunched the numbers, and some of our
                  customers save up to 68% on their monthly food bill!
                </p>
              </div>
            </div>

            <div class="description__details-item">
              <div class="description__details-item--icon">
                <img
                  :src="require(`~/assets/images/emojis/rocket.png`)"
                  alt=""
                />
              </div>
              <div class="description__details-item--text">
                <h5>It's a monthly subscription</h5>
                <p>
                  You pay once, and come rain or shine, you'll get every service
                  delivered all month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="container--menu">
      <section class="menu">
        <div class="menu__title">
          <h3>Current menu</h3>
          <p>{{ firstDateFormat }} - {{ lastDateFormat }}</p>
        </div>
        <div v-if="!allMeal.length" class="menu__loader">
          <Loader />
          <p>Loading menu...</p>
        </div>
        <nav v-if="tabs.length" class="menu__nav">
          <carousel
            class="carousel-container"
            :nav="false"
            :dots="false"
            :loop="false"
            :responsive="{
              0: {
                items: 1,
              },
              600: {
                items: 8,
              },
            }"
          >
            <template slot="prev"
              ><span class="prev">
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L1 9"
                    stroke="#61DB98"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg> </span
            ></template>

            <div
              v-for="(tab, index) in tabs"
              :key="index"
              class="menu__nav-item"
              @click.prevent="changeCategory(tab)"
            >
              <p :class="`${activeTabIndex === tab ? 'active' : ''}`">
                {{ tab }}
              </p>
              <svg
                v-if="activeTabIndex === tab"
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3" r="3" fill="#61DB98" />
              </svg>
            </div>

            <template slot="next">
              <span class="next">
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L1 9"
                    stroke="#61DB98"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg> </span
            ></template>
          </carousel>
        </nav>
        <div class="menu__list">
          <figure v-for="(item, i) in mealsInCategory" :key="i">
            <div v-if="!item.image" class="menu__list-img fallback">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1612250107/eden-website-v2/food-fallback_gnwkhu.png"
                :alt="item.name"
              />
            </div>
            <div v-else class="menu__list-img" :style="placeholderColorMix(i)">
              <img :src="optimizeImage(item.image, i)" :alt="item.name" />
            </div>
            <figcaption>
              <p>
                {{
                  `${item.name}${
                    item.main_sides ? ', ' + item.main_sides : ''
                  }${item.protein_sides ? ', ' + item.protein_sides : ''}${
                    item.other_sides ? ', ' + item.other_sides : ''
                  }`
                }}
              </p>
            </figcaption>
          </figure>
        </div>
        <button class="menu-btn" @click.prevent="scrollToTop('custom')">
          Get Started at 20% Off
        </button>
      </section>
    </div>

    <div class="container--questions">
      <section class="questions">
        <div class="questions__title">
          <h3>You have questions?<br />We have answers.</h3>
        </div>

        <div class="questions__description">
          <div class="questions__description-item">
            <div class="questions__description-title">
              <h5>What is Eden?</h5>
              <button
                type="button"
                class="expand"
                @click.prevent="expandQuestion('one')"
              >
                <svg
                  v-if="questions.includes('one')"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 11H15"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  v-else
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 8V16"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 12H16"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <transition name="slide-fade">
              <p v-if="questions.includes('one')">
                Easy. We're bringing the convenience of room service to homes
                across Africa – but starting with Lagos. Home tasks are routine
                activities that should be outsourced, so you can focus on the
                things with the most impact in your life. It could be making
                time for work that matters, or for enjoyment. You deserve to
                live well without the extra effort. <br />Some people call us
                the <strong> Concierge of Comfort</strong> – they're correct.
              </p>
            </transition>
          </div>
          <div class="questions__description-item">
            <div class="questions__description-title">
              <h5>A laundry service, cleaning service or food service?</h5>
              <button
                type="button"
                class="expand"
                @click.prevent="expandQuestion('two')"
              >
                <svg
                  v-if="questions.includes('two')"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <path
                    d="M7 11H15"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  v-else
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 8V16"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 12H16"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <transition name="slide-fade">
              <p v-if="questions.includes('two')">
                We do all three. But you get to decide which works best for you.
                If you need food, we'll get you delicious meals everyday, once a
                week, or every two weeks. Dirty laundry? We'll pick them up and
                bring back your clothes, freshly washed folded/ironed. Does your
                home need cleaning? We'll get that done efficiently as well.<br />
                You can even subscribe for more than one service, and we'll run
                it. Perfectly.
              </p>
            </transition>
          </div>
          <div class="questions__description-item">
            <div class="questions__description-title">
              <h5>How does it work?</h5>
              <button
                type="button"
                class="expand"
                @click.prevent="expandQuestion('three')"
              >
                <svg
                  v-if="questions.includes('three')"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <path
                    d="M7 11H15"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  v-else
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 8V16"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 12H16"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <transition name="slide-fade">
              <p v-if="questions.includes('three')">
                When you sign up on
                <a
                  href="#"
                  style="color: #03a84e"
                  @click.prevent="scrollTo('#get-the-app', 'homepage-faq')"
                  >Eden</a
                >, you can configure a plan that fits your needs, then you get
                assigned a Gardener to help you manage your home. The app takes
                your food, laundry, and home cleaning needs and turns them into
                tasks that our Gardeners attend to on schedule. The only finger
                you'll be lifting is the one scrolling through the app,
                monitoring progress.
              </p>
            </transition>
          </div>
          <div class="questions__description-item">
            <div class="questions__description-title">
              <h5>Who are Gardeners?</h5>
              <button
                type="button"
                class="expand"
                @click.prevent="expandQuestion('four')"
              >
                <svg
                  v-if="questions.includes('four')"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <path
                    d="M7 11H15"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  v-else
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 8V16"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 12H16"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <transition name="slide-fade">
              <p v-if="questions.includes('four')">
                Your Home Managers. They’re the human side of Eden:
                carefully-screened people (we run full background checks on all
                Gardeners) who are trained to handle your home requests with
                ease and enthusiasm.
                <br />
                Our Gardeners fit a profile. They’re detail-oriented,
                responsive, responsible and friendly. They have one job, and
                that job is to understand what the perfect home means for you
                specifically, then work every day to provide you with exactly
                that.
                <br />

                When you sign up on Eden, you see a profile of your Gardener,
                and you can get an impression of them before they start handling
                your chores.
              </p>
            </transition>
          </div>
          <div class="questions__description-item">
            <div class="questions__description-title">
              <h5>How much are they good for?</h5>
              <button
                type="button"
                class="expand"
                @click.prevent="expandQuestion('five')"
              >
                <svg
                  v-if="questions.includes('five')"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <path
                    d="M7 11H15"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  v-else
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 8V16"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 12H16"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <transition name="slide-fade">
              <p v-if="questions.includes('five')">
                A lot. Think of your Gardener as your link to an ever-expanding
                world of Eden services you can take advantage of. Your Gardener
                helps you access services like<strong>
                  meals, house cleaning (light and deep cleaning), and laundry
                  services.</strong
                >
                And that's just the beginning.
                <br />
                If there’s ever a service you wish your Gardener provided (that
                they don’t, as yet), select the ‘Feedback’ option on the
                Gardener profile, and we’ll get the message!
              </p>
            </transition>
          </div>
          <div class="questions__description-item">
            <div class="questions__description-title">
              <h5>Does my Gardener service me alone?</h5>
              <button
                type="button"
                class="expand"
                @click.prevent="expandQuestion('six')"
              >
                <svg
                  v-if="questions.includes('six')"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <path
                    d="M7 11H15"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  v-else
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 8V16"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 12H16"
                    stroke="#21312A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <transition name="slide-fade">
              <p v-if="questions.includes('six')">
                Your Gardener’s schedule is designed to give the best attention
                to your chores, which gives them (based on our very trusty Eden
                math) enough time to attend to a few other customers in the same
                area as you. This means that our Gardeners attend to a handful
                of customers, but are never swamped with requests.
              </p>
            </transition>
          </div>
        </div>
      </section>
    </div>

    <div class="container--footer">
      <footer class="footer">
        <div class="footer__mission">
          <nuxt-link :to="{ path: '/' }" class="footer__logo">
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611230252/eden-website-v2/eden-logo_lcepc6.svg"
              alt="Eden logo"
            />
          </nuxt-link>
          <p>10x-ing the quality of life on the continent.</p>
        </div>
        <div>
          <div class="footer__social">
            <a
              href="https://twitter.com/ouredenlife"
              target="_blank"
              @click.prevent="
                openSocialMedia('Twitter', 'https://twitter.com/ouredenlife')
              "
            >
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611341806/eden-website-v2/twitter_pxdich.svg"
                alt="twitter"
              />
            </a>
            <a
              href="https://instagram.com/ouredenlife"
              target="_blank"
              @click.prevent="
                openSocialMedia(
                  'Instagram',
                  'https://instagram.com/ouredenlife'
                )
              "
            >
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611341806/eden-website-v2/instagram_erb6q6.svg"
                alt="instagram"
              />
            </a>
            <a
              href="https://facebook.com/ouredenlife"
              target="_blank"
              @click.prevent="
                openSocialMedia('Facebook', 'https://facebook.com/ouredenlife')
              "
            >
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0419 0C4.49595 0 0 4.49595 0 10.0419C0 15.0159 3.62029 19.1352 8.36708 19.9329V12.1369H5.94469V9.33139H8.36708V7.26274C8.36708 4.86251 9.83307 3.55453 11.9746 3.55453C13.0002 3.55453 13.8816 3.63095 14.1375 3.66461V6.17349L12.6522 6.17421C11.4879 6.17421 11.2634 6.7274 11.2634 7.53946V9.32996H14.0417L13.6793 12.1354H11.2634V20C16.2318 19.3953 20.0836 15.171 20.0836 10.039C20.0836 4.49595 15.5877 0 10.0419 0Z"
                  fill="#21312A"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/ouredenlife/"
              target="_blank"
              @click.prevent="
                openSocialMedia(
                  'LinkedIn',
                  'https://www.linkedin.com/company/ouredenlife/'
                )
              "
            >
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611341816/eden-website-v2/linkedin_utcbna.svg"
                alt="linkedin"
              />
            </a>
          </div>
          <p class="footer__copywright">
            {{ new Date().getFullYear() }} Eden Life Inc. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>

    <modal v-if="showEmailModal" :show-modal="showEmailModal" class="modal">
      <div slot="header"></div>
      <div slot="body" class="modal__body">
        <div class="lead__modal">
          <div class="lead__modal-title"></div>
          <div class="lead__modal-body">
            <img
              class="email-img"
              :src="require(`~/assets/images/email-modal.svg`)"
              alt="email"
            />
            <h5>You’ve got mail!</h5>
            <p>
              We’ve sent an email to <b> {{ form.email }}</b
              >. Please check your mail for next steps.
            </p>
            <button
              type="submit"
              class="btn--submit"
              @click.prevent="openApp()"
            >
              Got it!
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
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import {
  placeholderColorMix,
  currencyFormat,
  formatNumber,
} from '~/static/functions'
import customPricing from '~/mixins/customPricing'
import currentMeal from '~/mixins/currentMeal'
import { signupApi } from '~/request/all.api'

export default {
  Loader: () => import('@/components/Loader.vue'),
  mixins: [validationMixin, customPricing, currentMeal],
  layout: 'lead',
  validations: {
    form: {
      email: { required, email },
      name: { required },
      phone_number: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
    },
  },
  data() {
    return {
      showEmailModal: false,
      form: {
        email: '',
        name: '',
        phone_number: '',
        discount: '',
      },
      loading: false,
      questions: ['one'],
      testimonials: [
        {
          name: 'Eyitemi',
          image: 'eyitemi',
          description: `With all the chaos that is Lagos, EdenLife helps to improve your life expectancy and reduce your stress levels. <br/> 💯 Recommend.`,
          handle: 'eeyitemi',
          tweetLink:
            'https://twitter.com/eeyitemi/status/1293604745148534792?s=20](https://twitter.com/eeyitemi/status/1293604745148534792?s=20',
        },
        {
          name: 'HOE',
          image: 'hoe',
          description: `Got one win today and put a proposal for another project. It's safe to say it's been a blessed week. <span style="color:#03A84E"> @ouredenlife </span> been making my stay in Lagos worthwhile. Tonight we Netflix cause tomorrow is back to the streets.`,
          handle: 'OsasenagaEno',
          tweetLink:
            'https://twitter.com/OsasenagaEno/status/1316432226813390853?s=20',
        },
        {
          name: 'Kyane "Omowale" Kassiri',
          image: 'kassiri',
          description: `At this point, if you live in Lagos and you don't use <span style="color:#03A84E"> @ouredenlife </span>, you're really punishing yourself.`,
          handle: 'kyanekassiri',
          tweetLink:
            'https://twitter.com/kyanekassiri/status/1395010079439589376?s=20',
        },
      ],
      servicesHero: ['food', 'laundry', 'cleaning'],
      servicesOption: ['food', 'laundry', 'cleaning'],
      serviceOption: 'food',
      responseMessage: '',
    }
  },
  mounted() {
    mixpanelTrackEvent('Lead page v3')
    window.setInterval(() => {
      this.changeHeroImg()
    }, 2300)
  },
  methods: {
    placeholderColorMix,
    currencyFormat,
    formatNumber,
    scrollToTop(ref) {
      this.$refs[ref].scrollIntoView()
    },
    changeHeroImg() {
      const first = this.servicesHero.shift()
      this.servicesHero = this.servicesHero.concat(first)
    },
    prevImg() {
      this.serviceOption = this.servicesOption[1]
      const first = this.servicesOption.shift()
      this.servicesOption = this.servicesOption.concat(first)
    },
    nextImg() {
      const first = this.servicesOption.shift()
      this.serviceOption = this.servicesOption[0]
      this.servicesOption = this.servicesOption.concat(first)
    },
    async getStarted() {
      this.$v.form.$touch()
      if (!this.$v.form.$error) {
        try {
          mixpanelTrackEvent('Sign up button clicked', 'Lead page v3')
          this.loading = true
          this.$intercom('update', {
            email: this.form.email,
            name: this.form.name,
            phone: this.form.phone_number,
          })
          const metadata = {
            email: this.form.email,
            name: this.form.name,
            phone: this.form.phone_number,
          }
          this.$intercom('trackEvent', 'lead-generation-v3', metadata)

          const payload = {
            email: this.form.email,
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
            },
            discounted_amount: parseInt(this.totalPrice),
          }
          // console.log(payload)
          await signupApi(payload)
          this.showEmailModal = true
          this.loading = false
          this.responseMessage = ''
        } catch (error) {
          this.loading = false
          this.responseMessage = error.response.data.message
        }
      }
    },
    openApp() {
      this.form.email = ''
      this.form.name = ''
      this.form.phone_number = ''
      this.showEmailModal = !this.showEmailModal
      this.$v.$reset()
      this.goToApp()
    },
    goToApp() {
      mixpanelTrackEvent(`Get Started - Lead page v3`)
      const userAgent = navigator.userAgent || navigator.vendor || window.opera
      // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
        this.$router.push('/')
        return
      }

      if (/android/i.test(userAgent)) {
        window.open(
          ` https://play.google.com/store/apps/details?id=com.ouredenlife.app`
        )
        return
      }

      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.open(`https://apps.apple.com/us/app/eden-life/id1482373755?ls=1`)
        return
      }

      this.$router.push('/')
    },
    expandQuestion(item) {
      if (this.questions.length && this.questions.includes(item)) {
        this.questions.pop()
      } else if (this.questions.length) {
        this.questions.pop()
        this.questions.push(item)
      } else {
        this.questions.push(item)
      }
    },
    openSocialMedia(name, url) {
      mixpanelTrackEvent(`${name} icon clicked - Lead page v3`)
      window.open(url, '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_lagos_is_hard.scss';
</style>
