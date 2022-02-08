<template>
  <div class="container--hero">
    <header class="hero hero__head">
      <div class="hero__title mid__title">
        <h1>
          <span>10 Reasons</span>
          Why<br />
          Eden Means Easy.
        </h1>

        <ul>
          <li>Your laundry picked up and dropped off within 48 hours. 👔</li>
          <li>Professional cleaners scrubbing and sweeping your home. 🏡</li>
          <li>
            Chef-made meals delivered from a menu of over 100 delicious meal
            choices. 🥘
          </li>
        </ul>

        <div></div>
      </div>

      <div class="hero__video">
        <video ref="videoRef" muted playsinline autoplay loop>
          <source
            src="https://res.cloudinary.com/eden-life-inc/video/upload/f_auto,q_auto/v1635963609/hero-video_oxx01k.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </header>
    <h1 class="values__head">All on schedule too. But there's more. 👇🏽</h1>

    <div class="values">
      <div class="value__grid">
        <value-card :content="valueReasons[0]" @show="setTestimonial(0)" />
      </div>
      <div class="value__grid">
        <value-card :content="valueReasons[1]" @show="setTestimonial(1)" />
        <value-card :content="valueReasons[2]" @show="setTestimonial(2)" />
      </div>
      <div class="value__grid">
        <value-card :content="valueReasons[3]" @show="setTestimonial(3)" />
        <value-card :content="valueReasons[4]" @show="setTestimonial(4)" />
      </div>
      <div class="value__grid">
        <value-card :content="valueReasons[5]" @show="setTestimonial(5)" />
      </div>
      <div class="value__grid">
        <value-card :content="valueReasons[6]" @show="setTestimonial(6)" />
        <value-card :content="valueReasons[7]" @show="setTestimonial(7)" />
      </div>
      <div class="value__grid">
        <value-card :content="valueReasons[8]" @show="setTestimonial(8)" />
        <value-card :content="valueReasons[9]" @show="setTestimonial(9)" />
      </div>
    </div>
    <div class="container--wall">
      <section class="wall">
        <div class="wall__title">
          <h3>What Our Customers Say 💚</h3>
        </div>
        <div class="wall__messages">
          <div
            v-for="(item, i) in valueReasons"
            :key="i"
            :class="`card ${i === 0 ? 'hide' : 'show'}`"
          >
            <a
              v-if="i !== 0"
              :href="item.modal_testimonial.tweetLink"
              target="_blank"
            >
              <div class="card__title">
                <div class="card__title-img">
                  <img
                    :src="
                      require(`~/assets/images/${item.modal_testimonial.image}.jpg`)
                    "
                    :alt="item.modal_testimonial.name"
                  />
                </div>

                <div class="">
                  <p class="card__title-name">
                    {{ item.modal_testimonial.name }}
                  </p>
                  <p class="card__title-handle">
                    {{ item.modal_testimonial.handle }}
                  </p>
                </div>
              </div>
              <p
                class="card__description"
                v-html="item.modal_testimonial.description"
              ></p>
            </a>
          </div>
        </div>
      </section>
    </div>
    <div id="eden-easy-form" class="hero hero__bottom">
      <div class="hero__title">
        <h1>
          The best time to start your Eden life was yesterday, the second best
          time is <span>now</span>.
        </h1>

        <p>There's an Eden plan for you</p>

        <div class="hero__form">
          <ul class="hero__form-option">
            <li
              :class="{ active: activeForm === 'individual' }"
              @click.prevent="activeForm = 'individual'"
            >
              Individual
            </li>
            <li
              :class="{ active: activeForm === 'team' }"
              @click.prevent="activeForm = 'team'"
            >
              Team
            </li>
          </ul>

          <transition name="slide-fade">
            <div v-if="activeForm === 'individual'" class="testimonial__form">
              <div class="testimonial__form-body">
                <div class="testimonial__form-input">
                  <label for="name">Full Name</label>
                  <input
                    id=""
                    v-model="leadForm.name"
                    type="text"
                    name=""
                    placeholder="Full Name"
                    :class="{ 'has-error': $v.leadForm.name.$error }"
                  />
                </div>
                <div class="testimonial__form-input">
                  <label for="email">Email</label>
                  <input
                    id=""
                    v-model="leadForm.email"
                    type="email"
                    name=""
                    placeholder="email@example.com"
                    :class="{ 'has-error': $v.leadForm.email.$error }"
                  />
                </div>
                <div class="testimonial__form-input">
                  <label for="phone number">Phone Number</label>
                  <input
                    id=""
                    v-model.trim="$v.leadForm.phone_number.$model"
                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                    type="text"
                    name=""
                    placeholder="Enter phone number"
                    :class="{ 'has-error': $v.leadForm.phone_number.$error }"
                  />
                </div>

                <button class="testimonial__form-btn" @click="individualSubmit">
                  Enjoy Quality Service
                </button>
              </div>
            </div>
          </transition>

          <transition name="slide-fade">
            <div v-if="activeForm === 'team'" class="testimonial__form">
              <div class="testimonial__form-body">
                <div class="testimonial__form-input">
                  <label for="name">Company Name</label>
                  <input
                    id=""
                    v-model="leadCompanyForm.company_name"
                    type="text"
                    name=""
                    placeholder="Company Name"
                    :class="{
                      'has-error': $v.leadCompanyForm.company_name.$error,
                    }"
                  />
                </div>
                <div class="testimonial__form-input">
                  <label for="name">Contact Person</label>
                  <input
                    id=""
                    v-model="leadCompanyForm.contact_name"
                    type="text"
                    name=""
                    placeholder="Enter Name"
                    :class="{
                      'has-error': $v.leadCompanyForm.contact_name.$error,
                    }"
                  />
                </div>
                <div class="testimonial__form-input">
                  <label for="email">Contact person email address</label>
                  <input
                    id=""
                    v-model="leadCompanyForm.email"
                    type="email"
                    name=""
                    placeholder="email@example.com"
                    :class="{
                      'has-error': $v.leadCompanyForm.email.$error,
                    }"
                  />
                </div>
                <div class="testimonial__form-input">
                  <label for="phone number">Phone Number</label>
                  <input
                    id=""
                    v-model.trim="$v.leadCompanyForm.phone_number.$model"
                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                    type="text"
                    name=""
                    placeholder="Enter phone number"
                    :class="{
                      'has-error': $v.leadCompanyForm.phone_number.$error,
                    }"
                  />
                </div>
                <div class="testimonial__form-input">
                  <label for="services"
                    >What plans would you like for your team?</label
                  >
                  <div
                    class="select"
                    :class="{ 'has-error': $v.leadCompanyForm.service.$error }"
                  >
                    <div class="selector">
                      <div class="label" @click="toggle()">
                        <span
                          v-if="
                            leadCompanyForm.service &&
                            !leadCompanyForm.service.length
                          "
                          class="placeholder"
                        >
                          Select services
                        </span>
                        <span
                          v-for="(item, i) in leadCompanyForm.service"
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
                          <div class="selection">
                            <ul>
                              <li
                                v-for="(service, index) in services"
                                :key="index"
                                :value="service"
                              >
                                <input
                                  :id="service"
                                  v-model="leadCompanyForm.service"
                                  type="checkbox"
                                  :name="service"
                                  :value="service"
                                />
                                <label
                                  :for="service"
                                  :class="{
                                    checkmark: leadCompanyForm.service.includes(
                                      service
                                    ),
                                  }"
                                >
                                  {{ service }}</label
                                >
                              </li>
                            </ul>
                            <button
                              class="btn--submit"
                              @click.prevent="toggle()"
                            >
                              Done
                            </button>
                          </div>
                        </transition>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonial__form-input">
                  <label for="message"
                    >Anything else you’d like us to know?</label
                  >
                  <textarea
                    id=""
                    v-model="leadCompanyForm.message"
                    name=""
                    cols="30"
                    rows="10"
                    placeholder="Extra message"
                    :class="{ 'has-error': $v.leadCompanyForm.message.$error }"
                  ></textarea>
                </div>

                <button @click="companySubmit" class="testimonial__form-btn">
                  Enjoy Quality Service
                </button>
              </div>
            </div>
          </transition>
        </div>
        <div class="hero__button share hide" id="social-content">
          <span>Share </span>

          <ShareNetwork
            class="share__icon"
            network="whatsapp"
            :url="`https://ouredenlifev2-staging.netlify.app${pageUrl}`"
            title=""
            description=""
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              @click.prevent="openSocialMedia('Whatsapp')"
            >
              <path
                d="M2.00401 22L3.35601 17.032C2.46515 15.5049 1.99711 13.768 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.2328 22.0029 8.49667 21.5352 6.97001 20.645L2.00401 22ZM8.39101 7.308C8.26188 7.31602 8.13569 7.35003 8.02001 7.408C7.91153 7.46943 7.81251 7.54622 7.72601 7.636C7.60601 7.749 7.53801 7.847 7.46501 7.942C7.09542 8.423 6.89662 9.01342 6.90001 9.62C6.90201 10.11 7.03001 10.587 7.23001 11.033C7.63901 11.935 8.31201 12.89 9.20101 13.775C9.41501 13.988 9.62401 14.202 9.84901 14.401C10.9524 15.3725 12.2673 16.073 13.689 16.447L14.258 16.534C14.443 16.544 14.628 16.53 14.814 16.521C15.1053 16.506 15.3896 16.4271 15.647 16.29C15.813 16.202 15.891 16.158 16.03 16.07C16.03 16.07 16.073 16.042 16.155 15.98C16.29 15.88 16.373 15.809 16.485 15.692C16.568 15.606 16.64 15.505 16.695 15.39C16.773 15.227 16.851 14.916 16.883 14.657C16.907 14.459 16.9 14.351 16.897 14.284C16.893 14.177 16.804 14.066 16.707 14.019L16.125 13.758C16.125 13.758 15.255 13.379 14.724 13.137C14.668 13.1126 14.608 13.0987 14.547 13.096C14.4786 13.089 14.4095 13.0967 14.3443 13.1186C14.2791 13.1405 14.2193 13.1761 14.169 13.223V13.221C14.164 13.221 14.097 13.278 13.374 14.154C13.3325 14.2098 13.2754 14.2519 13.2098 14.2751C13.1443 14.2982 13.0733 14.3013 13.006 14.284C12.9409 14.2666 12.877 14.2445 12.815 14.218C12.691 14.166 12.648 14.146 12.563 14.109L12.558 14.107C11.9859 13.8572 11.4562 13.5198 10.988 13.107C10.862 12.997 10.745 12.877 10.625 12.761C10.2316 12.3842 9.88873 11.958 9.60501 11.493L9.54601 11.398C9.50364 11.3342 9.46937 11.2653 9.44401 11.193C9.40601 11.046 9.50501 10.928 9.50501 10.928C9.50501 10.928 9.74801 10.662 9.86101 10.518C9.9551 10.3983 10.0429 10.2738 10.124 10.145C10.242 9.955 10.279 9.76 10.217 9.609C9.93701 8.925 9.64701 8.244 9.34901 7.568C9.29001 7.434 9.11501 7.338 8.95601 7.319C8.90201 7.313 8.84801 7.307 8.79401 7.303C8.65972 7.29633 8.52515 7.29766 8.39101 7.307V7.308Z"
                fill=""
              />
            </svg>
          </ShareNetwork>
          <ShareNetwork
            class="share__icon"
            network="twitter"
            :url="`https://ouredenlifev2-staging.netlify.app${pageUrl}`"
            title=""
            description=""
          >
            <img
              @click.prevent="openSocialMedia('Twitter')"
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611341806/eden-website-v2/twitter_pxdich.svg"
              alt="twitter"
              class="share__icon__img"
            />
          </ShareNetwork>
          <a
            class="share__icon"
            :href="`https://www.facebook.com/sharer/sharer.php?u=https://ouredenlifev2-staging.netlify.app${pageUrl}`"
            target="_blank"
          >
            <img
              @click="openSocialMedia('facebook')"
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611341806/eden-website-v2/facebook_cqsjdf.svg"
              alt="facebook"
              class="share__icon__img"
            />
          </a>
          <a
            class="share__icon"
            :href="`https://www.linkedin.com/sharing/share-offsite/?url=https://ouredenlifev2-staging.netlify.app${pageUrl}`"
            target="_blank"
          >
            <img
              @click="openSocialMedia('LinkedIn')"
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611341816/eden-website-v2/linkedin_utcbna.svg"
              alt="linkedin"
              class="share__icon__img"
            />
          </a>
        </div>
      </div>
    </div>
    <modal
      v-if="showLeadModal"
      :show-modal="showLeadModal"
      class="modal modal-lead"
    >
      <div slot="header"></div>
      <div slot="body" class="modal__body">
        <div class="lead__modal">
          <div class="lead__modal-title">
            <h3 class="">{{ activeReason.text }}</h3>
            <button class="btn" @click="closeLeadModal()">
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

          <div
            :class="`lead__modal__testimony ${
              activeReason.testimonial.name === 'Nadayar'
                ? 'shadow'
                : 'noshadow'
            }`"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              fill="#03A84E"
              class="bi bi-chat-left-quote"
              viewBox="0 0 16 16"
            >
              <path
                d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"
              />
            </svg>
            <div
              v-if="activeReason.testimonial.name === 'Nadayar'"
              class="testimonial__card no__shadow"
            >
              <p
                class="testimonial__card__description"
                v-html="activeReason.testimonial.description"
              ></p>

              <p class="testimonial__card__description handle">
                - {{ activeReason.testimonial.handle }}
              </p>

              <div class="hero__button">
                <span> Share Nad's Promise: </span>

                <div class="hero__socials">
                  <ShareNetwork
                    class="share__icon"
                    network="whatsapp"
                    :url="`https://ouredenlifev2-staging.netlify.app${pageUrl}`"
                    title=""
                    description=""
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      @click.prevent="openSocialMedia('Whatsapp')"
                    >
                      <path
                        d="M2.00401 22L3.35601 17.032C2.46515 15.5049 1.99711 13.768 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.2328 22.0029 8.49667 21.5352 6.97001 20.645L2.00401 22ZM8.39101 7.308C8.26188 7.31602 8.13569 7.35003 8.02001 7.408C7.91153 7.46943 7.81251 7.54622 7.72601 7.636C7.60601 7.749 7.53801 7.847 7.46501 7.942C7.09542 8.423 6.89662 9.01342 6.90001 9.62C6.90201 10.11 7.03001 10.587 7.23001 11.033C7.63901 11.935 8.31201 12.89 9.20101 13.775C9.41501 13.988 9.62401 14.202 9.84901 14.401C10.9524 15.3725 12.2673 16.073 13.689 16.447L14.258 16.534C14.443 16.544 14.628 16.53 14.814 16.521C15.1053 16.506 15.3896 16.4271 15.647 16.29C15.813 16.202 15.891 16.158 16.03 16.07C16.03 16.07 16.073 16.042 16.155 15.98C16.29 15.88 16.373 15.809 16.485 15.692C16.568 15.606 16.64 15.505 16.695 15.39C16.773 15.227 16.851 14.916 16.883 14.657C16.907 14.459 16.9 14.351 16.897 14.284C16.893 14.177 16.804 14.066 16.707 14.019L16.125 13.758C16.125 13.758 15.255 13.379 14.724 13.137C14.668 13.1126 14.608 13.0987 14.547 13.096C14.4786 13.089 14.4095 13.0967 14.3443 13.1186C14.2791 13.1405 14.2193 13.1761 14.169 13.223V13.221C14.164 13.221 14.097 13.278 13.374 14.154C13.3325 14.2098 13.2754 14.2519 13.2098 14.2751C13.1443 14.2982 13.0733 14.3013 13.006 14.284C12.9409 14.2666 12.877 14.2445 12.815 14.218C12.691 14.166 12.648 14.146 12.563 14.109L12.558 14.107C11.9859 13.8572 11.4562 13.5198 10.988 13.107C10.862 12.997 10.745 12.877 10.625 12.761C10.2316 12.3842 9.88873 11.958 9.60501 11.493L9.54601 11.398C9.50364 11.3342 9.46937 11.2653 9.44401 11.193C9.40601 11.046 9.50501 10.928 9.50501 10.928C9.50501 10.928 9.74801 10.662 9.86101 10.518C9.9551 10.3983 10.0429 10.2738 10.124 10.145C10.242 9.955 10.279 9.76 10.217 9.609C9.93701 8.925 9.64701 8.244 9.34901 7.568C9.29001 7.434 9.11501 7.338 8.95601 7.319C8.90201 7.313 8.84801 7.307 8.79401 7.303C8.65972 7.29633 8.52515 7.29766 8.39101 7.307V7.308Z"
                        fill=""
                      />
                    </svg>
                  </ShareNetwork>
                  <ShareNetwork
                    class="share__icon"
                    network="twitter"
                    :url="`https://ouredenlifev2-staging.netlify.app${pageUrl}`"
                    title=""
                    description=""
                  >
                    <img
                      @click.prevent="openSocialMedia('Twitter')"
                      src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611341806/eden-website-v2/twitter_pxdich.svg"
                      alt="twitter"
                      class="share__icon__img"
                    />
                  </ShareNetwork>
                  <a
                    class="share__icon"
                    :href="`https://www.facebook.com/sharer/sharer.php?u=https://ouredenlifev2-staging.netlify.app${pageUrl}`"
                    target="_blank"
                  >
                    <img
                      @click="openSocialMedia('facebook')"
                      src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611341806/eden-website-v2/facebook_cqsjdf.svg"
                      alt="facebook"
                      class="share__icon__img"
                    />
                  </a>
                  <a
                    class="share__icon"
                    :href="`https://www.linkedin.com/sharing/share-offsite/?url=https://ouredenlifev2-staging.netlify.app${pageUrl}`"
                    target="_blank"
                  >
                    <img
                      @click="openSocialMedia('LinkedIn')"
                      src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611341816/eden-website-v2/linkedin_utcbna.svg"
                      alt="linkedin"
                      class="share__icon__img"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div v-else class="testimonial__card">
              <a :href="activeReason.testimonial.tweetLink" target="_blank">
                <div class="testimonial__card__title">
                  <div class="testimonial__card__title-img">
                    <img
                      :src="
                        require(`~/assets/images/${activeReason.testimonial.image}.jpg`)
                      "
                      :alt="activeReason.testimonial.name"
                    />
                  </div>
                  <div class="">
                    <p class="testimonial__card__title-name">
                      {{ activeReason.testimonial.name }}
                    </p>
                    <p class="testimonial__card__title-handle">
                      @{{ activeReason.testimonial.handle }}
                    </p>
                  </div>
                </div>

                <p
                  class="testimonial__card__description"
                  v-html="activeReason.testimonial.description"
                ></p>
              </a>
            </div>
          </div>

          <div
            v-if="
              activeReason.showForm && activeReason.form_type === 'individual'
            "
            class="testimonial__form"
          >
            <div class="testimonial__form-body">
              <div class="testimonial__form-input">
                <label for="name">Full Name</label>
                <input
                  id=""
                  v-model="leadForm.name"
                  type="text"
                  name=""
                  placeholder="Full Name"
                  :class="{ 'has-error': $v.leadForm.name.$error }"
                />
              </div>
              <div class="testimonial__form-input">
                <label for="email">Email</label>
                <input
                  id=""
                  v-model="leadForm.email"
                  type="email"
                  name=""
                  placeholder="email@example.com"
                  :class="{ 'has-error': $v.leadForm.email.$error }"
                />
              </div>
              <div class="testimonial__form-input">
                <label for="phone number">Phone Number</label>
                <input
                  id=""
                  v-model.trim="$v.leadForm.phone_number.$model"
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                  type="text"
                  name=""
                  placeholder="Enter phone number"
                  :class="{ 'has-error': $v.leadForm.phone_number.$error }"
                />
              </div>

              <button class="testimonial__form-btn" @click="individualSubmit">
                {{ activeReason.cta }}
              </button>
            </div>
          </div>
          <div
            v-if="activeReason.showForm && activeReason.form_type === 'company'"
            class="testimonial__form"
          >
            <div class="testimonial__form-body">
              <div class="testimonial__form-input">
                <label for="name">Company Name</label>
                <input
                  id=""
                  v-model="leadCompanyForm.company_name"
                  type="text"
                  name=""
                  placeholder="Company Name"
                  :class="{
                    'has-error': $v.leadCompanyForm.company_name.$error,
                  }"
                />
              </div>
              <div class="testimonial__form-input">
                <label for="name">Contact Person</label>
                <input
                  id=""
                  v-model="leadCompanyForm.contact_name"
                  type="text"
                  name=""
                  placeholder="Enter Name"
                  :class="{
                    'has-error': $v.leadCompanyForm.contact_name.$error,
                  }"
                />
              </div>
              <div class="testimonial__form-input">
                <label for="email">Contact person email address</label>
                <input
                  id=""
                  v-model="leadCompanyForm.email"
                  type="email"
                  name=""
                  placeholder="email@example.com"
                  :class="{
                    'has-error': $v.leadCompanyForm.email.$error,
                  }"
                />
              </div>
              <div class="testimonial__form-input">
                <label for="phone number">Phone Number</label>
                <input
                  id=""
                  v-model.trim="$v.leadCompanyForm.phone_number.$model"
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                  type="text"
                  name=""
                  placeholder="Enter phone number"
                  :class="{
                    'has-error': $v.leadCompanyForm.phone_number.$error,
                  }"
                />
              </div>
              <div class="testimonial__form-input">
                <label for="services"
                  >What plans would you like for your team?</label
                >
                <div
                  class="select"
                  :class="{ 'has-error': $v.leadCompanyForm.service.$error }"
                >
                  <div class="selector">
                    <div class="label" @click="toggle()">
                      <span
                        v-if="
                          leadCompanyForm.service &&
                          !leadCompanyForm.service.length
                        "
                        class="placeholder"
                      >
                        Select services
                      </span>
                      <span
                        v-for="(item, i) in leadCompanyForm.service"
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
                        <div class="selection">
                          <ul>
                            <li
                              v-for="(service, index) in services"
                              :key="index"
                              :value="service"
                            >
                              <input
                                :id="service"
                                v-model="leadCompanyForm.service"
                                type="checkbox"
                                :name="service"
                                :value="service"
                              />
                              <label
                                :for="service"
                                :class="{
                                  checkmark: leadCompanyForm.service.includes(
                                    service
                                  ),
                                }"
                              >
                                {{ service }}</label
                              >
                            </li>
                          </ul>
                          <button class="btn--submit" @click.prevent="toggle()">
                            Done
                          </button>
                        </div>
                      </transition>
                    </div>
                  </div>
                </div>
              </div>
              <div class="testimonial__form-input">
                <label for="message"
                  >Anything else you’d like us to know?</label
                >
                <textarea
                  id=""
                  v-model="leadCompanyForm.message"
                  name=""
                  cols="30"
                  rows="10"
                  placeholder="Extra message"
                  :class="{ 'has-error': $v.leadCompanyForm.message.$error }"
                ></textarea>
              </div>

              <button @click="companySubmit" class="testimonial__form-btn">
                {{ activeReason.cta }}
              </button>
            </div>
          </div>
          <div
            v-if="
              !activeReason.showForm &&
              activeReason.testimonial.name !== 'Nadayar'
            "
            class="download__app"
          >
            <div class="download__app-title">
              <h3>Download the app!</h3>
              <p>It takes less than 5 minutes to sign up!</p>
            </div>
            <div class="download__app-link">
              <a
                href="https://play.google.com/store/apps/details?id=com.ouredenlife.app"
                target="_blank"
                @click.prevent="openPlayStore"
              >
                <img
                  src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611338471/eden-website-v2/playstore_n43eju.svg"
                  alt="playstore"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/eden-life/id1482373755?ls=1"
                target="_blank"
                @click.prevent="openAppleStore"
              >
                <img
                  src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611338469/eden-website-v2/appstore_o1bj6d.svg"
                  alt="appstore"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </modal>
    <modal v-if="showSuccessModal" :show-modal="showSuccessModal" class="modal">
      <div slot="header"></div>
      <div slot="body" class="modal__body">
        <div class="lead__modal">
          <div class="lead__modal-title">
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
          <div class="lead__modal-body">
            <img
              :src="require(`~/assets/images/successful.svg`)"
              alt="failed"
            />
            <h5>Information Submitted</h5>
            <p>
              {{ successModalText }}
            </p>
            <button
              type="submit"
              class="btn--submit"
              :disabled="loading"
              @click="showSuccessModal = false"
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
        <div class="lead__modal">
          <div class="lead__modal-title">
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

          <div class="lead__modal-body">
            <img :src="require(`~/assets/images/failed.svg`)" alt="failed" />
            <h5>Submission Failed</h5>
            <p v-html="failModalText"></p>
          </div>
        </div>
      </div>
      <div slot="footer"></div>
    </modal>
  </div>
</template>

<script>
import getSiteMeta from '~/utils/getSiteMeta'
import { scrollToApp } from '~/static/functions'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import values from '~/static/values'
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength, alpha } from 'vuelidate/lib/validators'
import { companiesApi } from '~/request/all.api'

export default {
  components: {
    ValueCard: () => import('@/components/ValueCard.vue'),
    Modal: () => import('@/components/Modal.vue'),
  },
  mixins: [validationMixin],
  validations: {
    leadForm: {
      email: { required, email },
      name: { required, alpha },
      phone_number: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
    },
    leadCompanyForm: {
      company_name: { required, alpha },
      contact_name: { required, alpha },
      email: { required, email },
      phone_number: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
      service: { required },
      message: { required },
    },
  },
  data() {
    return {
      valueReasons: values,
      pageUrl: '',
      showLeadModal: false,
      activeReason: {
        text: '',
        testimonial: {},
        showForm: false,
        cta: '',
        form_type: '',
      },
      leadForm: {
        email: '',
        name: { required },
        name: '',
        phone_number: '',
      },
      leadCompanyForm: {
        company_name: '',
        contact_name: '',
        email: '',
        phone_number: '',
        service: [],
        extra_message: '',
      },
      serviceName: 'Select services',
      services: [
        'Team Lunch',
        'Team Careboxes',
        'Team Laundry',
        'Team Housecleaning',
      ],
      activeForm: 'individual',
      visible: false,
      loading: false,
      showFailedModal: false,
      showSuccessModal: false,
      successModalText: '',
      failModalText: '',
      header: 'one',
    }
  },
  head() {
    return {
      title: 'Eden | Eden Means Easy',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://ouredenlifev2-staging.netlify.app/eden_means_easy`,
        },
      ],
    }
  },
  mounted() {
    this.pageUrl = this.$route.fullPath
    window.addEventListener('scroll', this.handleScroll)

    this.animateHeader()
  },
  computed: {
    meta() {
      const metaData = {
        title: 'Eden | Eden Means Easy',
        description: '10 Reasons Why Eden Means Easy. ',
        url: `https://ouredenlifev2-staging.netlify.app/eden_means_easy`,
      }
      return getSiteMeta(metaData)
    },
  },
  methods: {
    animateHeader() {
      setInterval(() => {
        if (this.header === 'one') {
          setTimeout(() => {
            this.header = 'two'
          }, 1500)
        }
        if (this.header === 'two') {
          setTimeout(() => {
            this.header = 'three'
          }, 1500)
        }
        if (this.header === 'three') {
          setTimeout(() => {
            this.header = 'one'
          }, 1500)
        }
      }, 3000)
    },
    handleScroll() {
      const socialContent = document.querySelector('#social-content')
      const minBreakpoint = 400
      if (
        window.scrollY <= minBreakpoint &&
        !socialContent.classList.contains('hide')
      ) {
        socialContent.classList.add('hide')
      } else if (
        window.scrollY > minBreakpoint &&
        socialContent.classList.contains('hide')
      ) {
        socialContent.classList.remove('hide')
      }
    },
    scrollToFooter(id, label) {
      scrollToApp(id, label)
    },
    openSocialMedia(name) {
      mixpanelTrackEvent(`${name} share icon clicked`)
    },
    toggle() {
      this.visible = !this.visible
    },
    setTestimonial(index) {
      const {
        modal_text,
        modal_testimonial,
        modal_form,
        cta,
        form_type,
      } = this.valueReasons[index]

      this.activeReason = {
        text: modal_text,
        testimonial: modal_testimonial,
        showForm: modal_form,
        cta: cta,
        form_type: form_type,
      }

      this.showLeadModal = true
    },
    closeLeadModal() {
      this.showLeadModal = false
      this.activeReason = {
        text: '',
        testimonial: {},
        showForm: false,
        cta: '',
        form_type: '',
      }
    },
    openPlayStore() {
      window.open(
        ` https://play.google.com/store/apps/details?id=com.ouredenlife.app`,
        '_blank'
      )
      mixpanelTrackEvent('Get the app(playstore) clicked')
    },
    openAppleStore() {
      window.open(
        `https://apps.apple.com/us/app/eden-life/id1482373755?ls=1`,
        '_blank'
      )
      mixpanelTrackEvent('Get the app(applestore) clicked')
    },

    async companySubmit() {
      this.$v.leadCompanyForm.$touch()
      if (!this.$v.leadCompanyForm.$error) {
        this.leadCompanyForm.service = JSON.stringify(
          this.leadCompanyForm.service
        )
        try {
          mixpanelTrackEvent('Company form - Eden Means Easy page')

          this.loading = true
          await companiesApi(this.leadCompanyForm)
          Object.keys(this.leadCompanyForm).forEach(
            (key) => (this.leadCompanyForm[key] = '')
          )
          this.$nextTick(() => {
            this.$v.leadCompanyForm.$reset()
            this.leadCompanyForm.service = []
          })
          this.successModalText =
            'You have successfully submitted your company’s information. We will reach out to you within the next 48 hours.'
          this.showSuccessModal = true
          this.closeLeadModal()
          this.loading = false
        } catch (error) {
          this.leadCompanyForm.service = JSON.parse(
            this.leadCompanyForm.service
          )
          this.failModalText =
            "Your company’s information was not successfully submitted. Please try again or reach us at <span style='color:#03A84E'>eve@edenlife.ng </span> or <span style='color:#03A84E'>+2348123456790</span>"
          this.loading = false
          this.showFailedModal = true
        }
      }
    },
    async individualSubmit() {
      this.$v.leadForm.$touch()
      if (!this.$v.leadForm.$error) {
        try {
          mixpanelTrackEvent(
            `${this.activeReason.cta} button clicked`,
            'Eden Means Easy Page'
          )
          this.loading = true
          const metadata = {
            email: this.leadForm.email,
            name: this.leadForm.name,
            phone: this.leadForm.phone_number,
            lead_gen_page: window.location.href,
            referrer: document.referrer,
          }
          this.$intercom('update', metadata)
          this.$intercom('trackEvent', 'lead-generation-signup', metadata)
          this.$nextTick(() => {
            this.$v.leadForm.$reset()
          })
          this.successModalText =
            'You have successfully submitted your information. We will reach out to you within the next 48 hours.'
          this.showSuccessModal = true
          this.closeLeadModal()
          this.loading = false
        } catch (error) {
          this.failModalText =
            "Your information was not successfully submitted. Please try again or reach us at <span style='color:#03A84E'>eve@edenlife.ng </span> or <span style='color:#03A84E'>+2348123456790</span>"
          this.loading = false
          this.showFailedModal = true
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_eden_easy.scss';
</style>
