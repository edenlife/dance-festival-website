<template>
  <div>
    <div class="container--hero">
      <header class="hero">
        <div class="hero__title">
          <h1>
            Spend your energy on
            <span> {{ headerText[0] }}</span>
          </h1>
          <h1 class="mobile">
            Spend your energy on

            <span> {{ headerText[0] }}</span>
          </h1>
          <p>
            Your self-care routine, just got simpler with Eden.
            <br />
            <br />
            With access to dozens of professional spa-quality services, you
            never have to leave your home. Simple, personalized and affordable.
          </p>
          <div class="hero__button">
            <button
              type="button"
              class="hero__button-solid"
              @click.prevent="trackDevice"
            >
              Download App
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

    <div class="container--description">
      <section class="description">
        <div class="description__title">
          <h3>How it works</h3>
        </div>

        <div class="description__body">
          <div class="description__slider">
            <div class="description__slider-vertical slider">
              <div class="timeline">
                <svg
                  class="timeline--a"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#03A84E" />
                </svg>
                <svg
                  class="bee"
                  width="3"
                  height="175"
                  viewBox="0 0 2 190"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0H2V190H0V0Z" fill="#E4E8E6" />
                </svg>
                <svg
                  class="cee"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" />
                </svg>
                <svg
                  class="dee"
                  width="3"
                  height="205"
                  viewBox="0 0 2 190"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0H2V190H0V0Z" fill="#E4E8E6" />
                </svg>
                <svg
                  class="eee"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" />
                </svg>
              </div>
              <!-- <span class="slide-y"></span> -->
            </div>
            <div class="description__slider-horizontal slider">
              <!-- <span class="slide-x"></span> -->
              <div class="timeline">
                <svg
                  class="timeline--a"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#03A84E" />
                </svg>
                <svg
                  class="bee"
                  width="160"
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
                  class="cee"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" />
                </svg>
                <svg
                  class="dee"
                  width="160"
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
                  class="eee"
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
                <h5>Choose your plan</h5>
                <p>
                  Sign-up on the Eden Life app. Then choose the beauty service
                  you want, select how often you'd like your treatments, and
                  pay.
                </p>
              </div>
              <div class="two">
                <h5>We match</h5>
                <p>
                  Our gardeners match you to a certified beautician in your
                  area.
                </p>
              </div>
              <div class="three">
                <h5>We deliver</h5>
                <p>
                  Sit back, relax, and enjoy your at-home spa treatment within
                  24 hours of your order.
                </p>
              </div>
              <button type="button" class="btn" @click.prevent="trackDevice">
                Download App
              </button>
            </div>
          </div>
          <wait-list-form
            v-if="showWaitListForm"
            :showWaitListForm="showWaitListForm"
            @hideform="showWaitListForm = false"
            @showsuccess="showSuccessModal = true"
          />
          <modal
            v-if="showSuccessModal"
            :show-modal="showSuccessModal"
            class="modal"
          >
            <div slot="header"></div>
            <div slot="body" class="modal__body">
              <div class="company__modal">
                <div class="company__modal-title">
                  <button
                    class="btn btn--success"
                    @click="showSuccessModal = false"
                  >
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
                  <h5>{{ modalText }} Submitted</h5>
                  <p>
                    You have successfully submitted your {{ modalText }}.
                    <button
                      type="submit"
                      class="btn--submit"
                      :disabled="loading"
                      @click.prevent="closeModal"
                    >
                      Okay, got it!
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div slot="footer"></div>
          </modal>

          <div id="cleaning-video" class="description__video">
            <div class="description__video-item">
              <video ref="videoRef" muted playsinline>
                <source
                  src="https://res.cloudinary.com/eden-life-inc/video/upload/v1612453847/eden-website-v2/032_Cleaning_fezstm.mp4"
                  type="video/mp4"
                />
              </video>
              <button
                type="button"
                class="btn--replay"
                @click.prevent="playButtonClicked"
              >
                <svg
                  width="14"
                  height="17"
                  viewBox="0 0 14 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.49872 3.18516C7.22334 3.16476 6.9987 2.94285 6.9987 2.66671V1.04048C6.9987 0.595027 6.46013 0.371945 6.14514 0.686928L3.18558 3.64649C2.99032 3.84175 2.99032 4.15833 3.18558 4.35359L6.14514 7.31315C6.46013 7.62814 6.9987 7.40505 6.9987 6.9596V5.33337C6.9987 5.05723 7.2232 4.83074 7.49799 4.85807C10.0225 5.10916 11.9987 7.24353 11.9987 9.83337C11.9987 12.5917 9.75703 14.8334 6.9987 14.8334C4.40885 14.8334 2.27448 12.8572 2.0234 10.3327C1.99607 10.0579 1.77484 9.83337 1.4987 9.83337H0.832031C0.555888 9.83337 0.330082 10.058 0.350479 10.3334C0.605973 13.783 3.48357 16.5 6.9987 16.5C10.682 16.5 13.6654 13.5167 13.6654 9.83337C13.6654 6.31825 10.9483 3.44065 7.49872 3.18516Z"
                    fill="#03A84E"
                  />
                </svg>
                <span> Replay video</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="container--plan">
      <section class="plan">
        <div class="plan__title">
          <h3>You have questions?<br />We have answers.</h3>
          <p>
            We've Got You Covered: We'll match and connect you with the closest
            and most qualified professional. All you have to do is sit back,
            wait for your confirmation booking and let us know if you need
            anything else before your service. We guarantee you'll enjoy!
          </p>
        </div>

        <div class="plan__price light">
          <div>
            <div class="plan__price-item">
              <div
                v-for="(item, index) in questions"
                class="plan__price-description light"
                :key="index"
              >
                <div class="plan__price-description-title light">
                  <h5>{{ item.question }}</h5>
                  <button
                    type="button"
                    class="expand"
                    @click.prevent="openQuestion(item.position)"
                  >
                    <svg
                      v-if="activeQuestion === item.position"
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
                  <p v-if="activeQuestion === item.position">
                    {{ item.answer }}
                  </p>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="container--wall">
      <section class="plan" id="beauty-services">
        <div class="plan__title">
          <h3>Beauty Services</h3>
          <p>
            Being better means feeling better. Treat your mind and body in just
            a few clicks!
          </p>
        </div>
        <div class="plan__price">
          <div class="plan__price-item">
            <div class="plan__price-description light">
              <div class="plan__price-description-title light">
                <h5>Manicure - Pedicure</h5>
                <button
                  type="button"
                  class="expand"
                  @click.prevent="setBeautyService('manicure')"
                >
                  <svg
                    v-if="beautyServices.includes('manicure')"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                      stroke="#21312A"
                      fill-rule="even-odd"
                    />
                  </svg>
                  <svg
                    v-else
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708
                    0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0
                    1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      stroke="#21312A"
                    />
                  </svg>
                </button>
              </div>

              <transition name="slide-fade">
                <div v-if="beautyServices.includes('manicure')">
                  <br />
                  <h5>
                    Professional nail services with our experienced nail
                    technicians.
                    <br />
                    <br />
                    Change up your look with a selection of high-quality brands
                    and colours. All tools, materials, and products included.
                  </h5>
                  <ul>
                    <li>
                      Wide selection of high quality varnish, gel polishes,
                      acrylic powder, overlays and tips
                    </li>
                    <li>
                      All mani-pedi tools and equipment including wash basin and
                      towels provided
                    </li>
                    <li>Services performed by certified nail technicians</li>
                    <li>Delivered to you, in the comfort of your home</li>
                  </ul>

                  <h5>Additional Information</h5>

                  <ul>
                    <li>
                      <strong>Preparing for your service: </strong> Safety and
                      hygiene are our number onepriority. Please ensure you do
                      not have serious cuts on your feet, legs or hands - if you
                      do, please reschedule your appointment.
                    </li>
                    <li>
                      <strong>How to setup for your home service: </strong> Your
                      Gardener will notify you when the Service Partner (SP) is
                      on their way. Please prepare for their arrival by having;
                      i) selected a private and good lighting (additional floor
                      lamp bonus) and access to an electric plug; ii) carpets
                      and rugs rolled away; iii) wearing light clothing that is
                      easily rollable and sandals if getting a pedicure.
                    </li>
                    <li>
                      <strong>Changing your order: </strong> In the event that
                      you want to change your service during your session,
                      please notify your Gardener of the changes you want to be
                      made. If the Service Partner is certified and has the
                      necessary materials and tools to accommodate you they will
                      proceed with the change in order. Please note that these
                      changes will be reflected in your monthly billing cycle
                      and invoice.
                    </li>
                  </ul>
                  <h5>Terms & Conditions</h5>

                  <ul>
                    <li>
                      Should you choose to use your own products, any
                      liabilities shall be incurred at your own risk
                    </li>
                    <li>
                      Do not order the service if you have serious cuts on your
                      feet, legs or hands - please reschedule for another time
                    </li>
                    <li>
                      Avoid trimming or cutting your nails or cuticles before
                      the service
                    </li>
                    <li>
                      Picking your old nail application destroys your tips and
                      could result in weakening or brittling your nail. Eden is
                      not responsible for any damages caused to your nail bed
                      before your service
                    </li>
                    <li>
                      Regular varnish last 3-5 days depending on your
                      maintenance. Eden is not responsible for any chipping that
                      isn't reported 24 hours after service
                    </li>
                    <li>
                      If you change your order or include add ons you will be
                      reinvoiced by Eden
                    </li>
                    <li>
                      All payments MUST come through our platform. We don't
                      accept cash
                    </li>
                  </ul>
                </div>
              </transition>
            </div>
            <div class="plan__price-description light">
              <div class="plan__price-description-title light">
                <h5>Massage</h5>
                <button
                  type="button"
                  class="expand"
                  @click.prevent="setBeautyService('massage')"
                >
                  <svg
                    v-if="beautyServices.includes('massage')"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                      stroke="#21312A"
                      fill-rule="even-odd"
                    />
                  </svg>
                  <svg
                    v-else
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708
                    0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0
                    1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      stroke="#21312A"
                    />
                  </svg>
                </button>
              </div>

              <transition name="slide-fade">
                <div v-if="beautyServices.includes('massage')">
                  <br />
                  <h5>
                    A 60 min spa-quality experience with a certified massage
                    therapist for deep relaxation, muscle tension release or
                    sports recovery.
                    <br />
                    <br />
                    All tools, materials, and products included.
                  </h5>
                  <ul>
                    <li>Massage oils included</li>
                    <li>Services performed by a licensed massage therapist</li>
                    <li>Delivered to you, in the comfort of your home</li>
                  </ul>
                  <h5>Additional Information</h5>

                  <ul>
                    <li>
                      <strong>Preparing for your service: </strong> If you
                      ordered the standard massage, please ensure all blankets,
                      duvets and comforters are stripped away from your bed. We
                      will only need a loose fitting sheet and access to any
                      personal massage products (e.g. oils) you want to use for
                      this service. Please ensure that you do not eat a heavy
                      meal before your massage. Communicate and speak up when
                      you need more attention or want to give feedback.
                    </li>
                    <li>
                      <strong
                        >Do I have to remove my clothes for a full-body massage?
                      </strong>
                      We are committed to ensuring that your massage session is
                      relaxing and comfortable. Our certified Service
                      Partners(SP) all have a deep understanding of the human
                      anatomy and are trained in various techniques for
                      relaxation, muscle tension release and much more. For
                      maximum effectiveness, the Service Partner will require
                      you to undress (they will either step out or cover you up
                      as you undress and lay covered). If you do not feel
                      comfortable, our SP's will adjust and accomodate the
                      service to fit your needs.
                    </li>
                    <li>
                      <strong>How to setup for your home service: </strong> Your
                      Gardener will notify you when the Service Partner (SP) is
                      on their way. Please prepare for their arrival by having;
                      i) selected a private room with low lighting; ii) your
                      personal massage products laid out should you prefer your
                      own selection; iii) all clothes removed and covering up
                      with a robe, leso, or a kanga - your Service Partner will
                      set up first, then step out or shield you as you lay on
                      the massage service before covering you up before
                      beginning the massage
                    </li>
                    <li>
                      <strong>Changing your order:</strong> In the event that
                      you want to change your service during your session,
                      please notify your Gardener of the changes you want to be
                      made. If the Service Partner is certified and has the
                      necessary materials and tools to accommodate you they will
                      proceed with the change in order. Please note that these
                      changes will be reflected in your monthly billing cycle
                      and invoice.
                    </li>
                  </ul>
                  <h5>Terms & Conditions</h5>

                  <ul>
                    <li>
                      I understand that massage is entirely therapeutic and
                      non-sexual in nature.
                    </li>
                    <li>
                      I understand that the services offered are not a
                      substitute for medical care and that my therapist is not
                      qualified to perform spinal or skeletal adjustments,
                      diagnose, prescribe, or treat physical or mental illness.
                    </li>
                    <li>
                      I affirm that I have notified my therapist of all known
                      medical conditions and injuries.
                    </li>
                    <li>
                      I will not hold my therapist responsible for any pain or
                      discomfort experienced and undisclosed during or after the
                      session.
                    </li>
                    <li>
                      Follow up sessions may be needed to remove tension built
                      up over time.
                    </li>
                    <li>
                      I agree to inform the therapist of any changes in my
                      health and medical condition. I understand that there
                      shall be no liability on the therapist’s part should I
                      forget to do so.
                    </li>
                    <li>
                      By accessing the service, I hereby waive and release my
                      therapist from any and all liability, past, present, and
                      future relating to massage therapy and bodywork.
                    </li>
                    <li>
                      To maximize benefits, I will choose an area for the
                      Service Partner to setup that is easily accessible and
                      free from noise and clutter.
                    </li>
                    <li>
                      If you change your order or include add ons you will be
                      reinvoiced by Eden
                    </li>
                    <li>
                      All payments MUST come through our platform. We don't
                      accept cash or money exchanged to the Service Partner for
                      additional services on your behalf
                    </li>
                  </ul>
                </div>
              </transition>
            </div>
            <div class="plan__price-description light">
              <div class="plan__price-description-title light">
                <h5>Waxing & Threading</h5>
                <button
                  type="button"
                  class="expand"
                  @click.prevent="setBeautyService('waxing')"
                >
                  <svg
                    v-if="beautyServices.includes('waxing')"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                      stroke="#21312A"
                      fill-rule="even-odd"
                    />
                  </svg>
                  <svg
                    v-else
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708
                    0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0
                    1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      stroke="#21312A"
                    />
                  </svg>
                </button>
              </div>

              <transition name="slide-fade">
                <div v-if="beautyServices.includes('waxing')">
                  <br />
                  <h5>
                    Hassle free sugar waxing and threading for men and women at
                    great prices.
                    <br />
                    <br />
                    Choose from a variety of services in the comfort of your
                    home. All tools, materials, and products included.
                  </h5>
                  <ul>
                    <li>
                      Waxing and/or threading materials: we use organic sugar
                      wax
                    </li>
                    <li>Services performed by certified beauticians</li>
                    <li>Delivered to you, in the comfort of your home</li>
                  </ul>
                  <h5>Additional Information</h5>

                  <ul>
                    <li>
                      <strong>Preparing for your service: </strong> Safety and
                      hygiene are our number 1 priority. Please ensure you do
                      not shave 1.5 weeks - 2 weeks before your appointment.
                      Kindly ensure that your skin is also fresh and clean
                      before your appointment.
                    </li>
                    <li>
                      <strong>How to setup for your home service: </strong>
                      Your Service Partner will notify you when they are on
                      their way. Please prepare for their arrival by having; i)
                      selected a private and good lighting (additional floor
                      lamp bonus) and access to an electric plug; ii) carpets
                      and rugs rolled away.
                    </li>
                    <li>
                      <strong>Disclaimer: </strong> The experience may be
                      somewhat painful (but only during treatment) for
                      first-timers, client’s with longer and/or coarser body
                      hair, clients with sensitive skin (due to injury,
                      menstruation, scarring etc)
                    </li>
                    <li>
                      <strong>Changing your order:</strong>In the event that you
                      want to change your service during your session, please
                      notify your Gardener immediately. If the Service Partner
                      is certified and has the necessary materials and tools to
                      accommodate they will proceed with the change in order.
                      Please note that these changes will be reflected in your
                      monthly billing cyle and invoice.
                    </li>
                  </ul>
                  <h5>Terms & Conditions</h5>
                  <ul>
                    <li>
                      Should you choose to use your own products, any
                      liabilities shall be incurred at your own cost and risk.
                    </li>
                    <li>
                      Do not shave before your appointment (1.5 - 2 weeks prior)
                      as this will likely result in an uneven wax and a higher
                      level of discomfort The experience may be somewhat painful
                      (but only during treatment) for first-timers, client’s
                      with longer and/or coarser body hair, clients with
                      sensitive skin (due to injury, menstruation, scarring etc)
                    </li>
                    <li>
                      If you want another service (e.g. an additional underarm
                      waxing), please book that directly through the Eden
                      website. If you would like to amend an order (e.g. change
                      from a bikini to a Brazilian wax), please discuss with the
                      Service Partner and/or communicate with your Gardener
                      directly via the app.
                    </li>

                    <li>
                      All changes made to your order will be reflected in an
                      updateed invoice sent to you once the service has been
                      completed. In the event that you must cancel or reschedule
                      your appointment, please contact our Job Satisfaction Team
                      in advance of the service, while you receive a full refund
                      in form of Eden credit
                    </li>
                    <li>
                      If you are happy with your service and would like to thank
                      your Service Partner in the form of a tip, please do so
                      directly with the Service Partner. Please be aware that
                      any additional money exchanged is at your complete
                      discretion and not to be considered as a payment to Eden
                      for deductions on any item or service delivered.
                    </li>

                    <li>
                      All payments MUST come through our platform. We don't
                      accept cash or money exchanged to the Service Partner for
                      additional services on your behalf
                    </li>
                  </ul>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div id="cleaning-plan" class="container--plan">
      <section class="plan">
        <div class="plan__title">
          <h3>
            The Beauty Plans:<br />
            Zero stress.
          </h3>
          <p>
            Being better means feeling better. Treat your mind and body in just
            a few clicks!
          </p>
          <ul>
            <li>
              <h5 class="icon icon--one">👀</h5>
              <div class="icon--text">
                <h5>No hidden payments.</h5>
                <p>Yessir.</p>
              </div>
            </li>
            <li>
              <h5 class="icon icon--two">🚛</h5>
              <div class="icon--text">
                <h5>No hidden delivery fees.</h5>
                <p>100%</p>
              </div>
            </li>
            <li>
              <h5 class="icon icon--three">👼</h5>
              <div class="icon--text">
                <h5>Pause anytime.</h5>
                <p>On God!</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="plan__price">
          <ul class="plan__price-option">
            <li
              :class="{ active: plan === 'standard' }"
              @click.prevent="setBeautyType('standard')"
            >
              <span> Standard Beauty</span>
              <svg
                v-if="plan === 'standard'"
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
              :class="{ active: plan === 'premium' }"
              @click.prevent="setBeautyType('premium')"
            >
              <span> Premium Beauty </span>
              <svg
                v-if="plan === 'premium'"
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
          <!--  -->
          <transition name="slide-fade">
            <div v-if="plan === 'standard'" class="plan__price-light">
              <div class="plan__price-item">
                <div class="plan__price-description">
                  <div class="plan__price-description-title">
                    <h5>What does a standard beauty package include?</h5>
                    <button
                      type="button"
                      class="expand"
                      @click.prevent="
                        showBeautyDescription = !showBeautyDescription
                      "
                    >
                      <svg
                        v-if="showBeautyDescription"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                          stroke="#FFAC76"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />

                        <path
                          d="M7 11H15"
                          stroke="#FFAC76"
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
                          stroke="#FFAC76"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 8V16"
                          stroke="#FFAC76"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 12H16"
                          stroke="#FFAC76"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  <div v-if="showBeautyDescription">
                    <ul>
                      <li>All materials and tools included</li>
                      <li>
                        Services performed by a certified beautician or
                        therapist
                      </li>
                      <li>
                        All services delivered in the comfort of your home
                      </li>
                      <li>
                        Your choice of 2 services per month at KES 1,500 each
                      </li>
                      <li>Free removals for any mani-pedi services selected</li>
                      <li>
                        Free 15 min-foot massages for any pedicure services
                        selected
                      </li>
                    </ul>

                    <h5>What services are available?</h5>

                    <ul>
                      <li>Mani-Pedis: Varnish, Gel, French</li>
                      <li>
                        Waxing & Threading: Facial Grooming (Eyebrow Threading,
                        Lip Waxing, Chin Waxing), Underarm Waxing, Eyebrow
                        Threading
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  <span class="number"> Quantity </span>
                </p>
                <div class="btn--group">
                  <button
                    class="btn--item minus"
                    @click.prevent="decreaseQty()"
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
                    v-model="qty"
                    type="number"
                    name=""
                    readonly
                    placeholder="0"
                  />
                  <button class="btn--item plus" @click.prevent="increaseQty()">
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
                <p><span class="number">Frequency</span></p>
                <div class="btn--group">
                  <button
                    class="btn--freq"
                    :class="{ active: frequency === 'weekly' }"
                    @click.prevent="calculateFrequency('weekly')"
                  >
                    Once a week
                  </button>
                  <button
                    class="btn--freq"
                    :class="{ active: frequency === 'bi-weekly' }"
                    @click.prevent="calculateFrequency('bi-weekly')"
                  >
                    Every 2 weeks
                  </button>
                  <button
                    class="btn--freq"
                    :class="{ active: frequency === 'monthly' }"
                    @click.prevent="calculateFrequency('monthly')"
                  >
                    Once a month
                  </button>
                </div>
              </div>
              <div class="plan__price-bottom">
                <h5>
                  <span class="price">Price </span>
                  <span class="icon">👉 </span> KES
                  {{ currencyFormat(totalPrice) }}
                </h5>
                <p>Monthly</p>
              </div>
            </div>
          </transition>
          <transition name="slide-fade">
            <div v-if="plan === 'premium'" class="plan__price-light">
              <div class="plan__price-item">
                <div class="plan__price-description">
                  <div class="plan__price-description-title">
                    <h5>What does a premium beauty package include?</h5>
                    <button
                      type="button"
                      class="expand"
                      @click.prevent="
                        showBeautyDescription = !showBeautyDescription
                      "
                    >
                      <svg
                        v-if="showBeautyDescription"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                          stroke="#FFAC76"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />

                        <path
                          d="M7 11H15"
                          stroke="#FFAC76"
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
                          stroke="#FFAC76"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 8V16"
                          stroke="#FFAC76"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 12H16"
                          stroke="#FFAC76"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  <div v-if="showBeautyDescription">
                    <ul>
                      <li>All materials and tools included</li>
                      <li>
                        Services performed by a certified beautician or
                        therapist
                      </li>
                      <li>
                        All services delivered in the comfort of your home
                      </li>
                      <li>
                        Your choice of 2 premium services at KES 3,200 each and
                        2 basic services at KES 1,500 per month
                      </li>
                      <li>Free removals for any mani-pedi services selected</li>
                      <li>
                        Free 15 min-foot massages for any pedicure services
                        selected
                      </li>
                    </ul>

                    <h5>What services are available?</h5>

                    <ul>
                      <li>Mani-Pedis: Varnish, Gel, French, Acrylics</li>
                      <li>
                        Waxing & Threading: Facial Grooming (Eyebrow Threading,
                        Lip Waxing, Chin Waxing), Underarm Waxing, Eyebrow
                        Threading, Pick-n-Mix Full Body Waxing
                      </li>
                      <li>
                        Massage:Standard Massage (without bed), Swedish Massage
                        with Bed, Deluxe Massage
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  <span class="number"> Quantity </span>
                </p>
                <div class="btn--group">
                  <button
                    class="btn--item minus"
                    @click.prevent="decreaseQty()"
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
                    v-model="qty"
                    type="number"
                    name=""
                    readonly
                    placeholder="0"
                  />
                  <button class="btn--item plus" @click.prevent="increaseQty()">
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
                <p><span class="number">Frequency</span></p>
                <div class="btn--group">
                  <button
                    class="btn--freq"
                    :class="{ active: frequency === 'weekly' }"
                    @click.prevent="calculateFrequency('weekly')"
                  >
                    Once a week
                  </button>
                  <button
                    class="btn--freq"
                    :class="{ active: frequency === 'bi-weekly' }"
                    @click.prevent="calculateFrequency('bi-weekly')"
                  >
                    Every 2 weeks
                  </button>
                  <button
                    class="btn--freq"
                    :class="{ active: frequency === 'monthly' }"
                    @click.prevent="calculateFrequency('monthly')"
                  >
                    Once a month
                  </button>
                </div>
              </div>
              <div class="plan__price-bottom">
                <h5>
                  <span class="price">Price </span>
                  <span class="icon">👉 </span> KES
                  {{ currencyFormat(totalPrice) }}
                </h5>
                <p>Monthly</p>
              </div>
            </div>
          </transition>
        </div>
      </section>
    </div>

    <div class="container--options">
      <section class="options">
        <div class="options__title">
          <h3>Want more?</h3>
          <p>Take a look at our other services</p>
        </div>
        <div class="options__service">
          <div
            class="options__service-item options__service-food"
            @mouseenter.stop="exploreService = 'food'"
            @mouseleave.stop="exploreService = ''"
            @click="trackLink('Food')"
          >
            <h3>🧺</h3>
            <h5>Food</h5>
            <p>
              Food: Curated meals prepared fresh at a fraction of the cost.
              Weekly. .
            </p>
            <nuxt-link :to="{ path: '/food' }" class="btn">
              {{
                exploreService === 'food' || setExploreService ? 'Explore' : ''
              }}
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.85625 0.673555C8.61719 0.90793 8.61719 1.29699 8.85156 1.53606L11.7016 4.39074H0.854688C0.521875 4.39074 0.25 4.66262 0.25 5.00012C0.25 5.33762 0.521875 5.60949 0.854688 5.60949H11.6969L8.84687 8.46418C8.6125 8.70324 8.61719 9.08762 8.85156 9.32668C9.09062 9.56106 9.47031 9.56106 9.70937 9.32199L13.5719 5.43137C13.6234 5.37512 13.6656 5.31418 13.6984 5.23918C13.7312 5.16418 13.7453 5.08449 13.7453 5.00481C13.7453 4.84543 13.6844 4.69543 13.5719 4.57824L9.70937 0.687618C9.47969 0.443868 9.09531 0.43918 8.85625 0.673555Z"
                  fill="#106A39"
                />
              </svg>
            </nuxt-link>
            <div class="options__service-bg">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611318743/eden-website-v2/food-img1_ls530a.png"
                alt="food"
              />
            </div>
          </div>
          <div
            class="options__service-item options__service-cleaning"
            @mouseenter.stop="exploreService = 'cleaning'"
            @mouseleave.stop="exploreService = ''"
            @click="trackLink('Cleaning')"
          >
            <h3>🏠</h3>
            <h5>Cleaning</h5>
            <p>Professional cleaning at your doorstep. Up to thrice a week.</p>
            <nuxt-link :to="{ path: '/cleaning' }" class="btn">
              {{
                exploreService === 'cleaning' || setExploreService
                  ? 'Explore'
                  : ''
              }}
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.85625 0.673311C8.61719 0.907686 8.61719 1.29675 8.85156 1.53581L11.7016 4.3905H0.854688C0.521875 4.3905 0.25 4.66237 0.25 4.99987C0.25 5.33737 0.521875 5.60925 0.854688 5.60925H11.6969L8.84687 8.46394C8.6125 8.703 8.61719 9.08737 8.85156 9.32644C9.09062 9.56081 9.47031 9.56081 9.70937 9.32175L13.5719 5.43112C13.6234 5.37487 13.6656 5.31394 13.6984 5.23894C13.7312 5.16394 13.7453 5.08425 13.7453 5.00456C13.7453 4.84519 13.6844 4.69519 13.5719 4.578L9.70937 0.687374C9.47969 0.443624 9.09531 0.438936 8.85625 0.673311Z"
                  fill="#B54700"
                />
              </svg>
            </nuxt-link>
            <div class="options__service-bg">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611318736/eden-website-v2/cleaning-img1_ldwcml.png"
                alt="cleaning"
              />
            </div>
          </div>
          <div
            class="options__service-item options__service-laundry"
            @mouseenter.stop="exploreService = 'laundry'"
            @mouseleave.stop="exploreService = ''"
            @click="trackLink('Laundry')"
          >
            <h3>🧺</h3>
            <h5>Laundry</h5>
            <p>
              Fresh, clean and crisp clothes at your doorstep. Whenever you need
              it .
            </p>
            <nuxt-link :to="{ path: '/laundry' }" class="btn">
              {{
                exploreService === 'laundry' || setExploreService
                  ? 'Explore'
                  : ''
              }}
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.85625 0.673433C8.61719 0.907808 8.61719 1.29687 8.85156 1.53593L11.7016 4.39062H0.854688C0.521875 4.39062 0.25 4.6625 0.25 5C0.25 5.3375 0.521875 5.60937 0.854688 5.60937H11.6969L8.84687 8.46406C8.6125 8.70312 8.61719 9.0875 8.85156 9.32656C9.09062 9.56093 9.47031 9.56094 9.70937 9.32187L13.5719 5.43125C13.6234 5.375 13.6656 5.31406 13.6984 5.23906C13.7312 5.16406 13.7453 5.08437 13.7453 5.00468C13.7453 4.84531 13.6844 4.69531 13.5719 4.57812L9.70937 0.687496C9.47969 0.443746 9.09531 0.439058 8.85625 0.673433Z"
                  fill="#7189FF"
                />
              </svg>
            </nuxt-link>
            <div class="options__service-bg">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611306544/eden-website-v2/laundry-img1_ijsx4k.png"
                alt="laundry"
              />
            </div>
          </div>
        </div>
      </section>
    </div>

    <download-banner
      v-if="showDownloadBanner"
      :show-download-banner="showDownloadBanner"
      class="download-banner"
    >
      <div slot="header"></div>
      <div slot="body" class="content">
        <div class="banner">
          <div>
            <button
              class="btn btn--success"
              @click="showDownloadBanner = false"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 12.25L12.25 1"
                  stroke="#4B6358"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 1L12.25 12.25"
                  stroke="#4B6358"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611230252/eden-website-v2/eden-logo_lcepc6.svg"
              alt="Eden logo"
              width="42"
            />
          </div>
          <div>
            <p class="font-text">Enjoy the good life.</p>
            <p>Say goodbye to chores forever.</p>
          </div>
          <div>
            <button
              type="button"
              class="hero__button-solid banner-btn"
              @click.prevent="downloadApp('Download App - beauty banner')"
            >
              Install
            </button>
          </div>
        </div>
      </div>
      <div slot="footer"></div>
    </download-banner>
  </div>
</template>

<script>
import { pricing } from '~/static/ke/pricing'
import { currencyFormat, scrollToApp } from '~/static/functions'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import getSiteMeta from '~/utils/getSiteMeta'

export default {
  components: {
    Modal: () => import('@/components/Modal.vue'),
    WaitListForm: () => import('@/components/ke/WaitListForm.vue'),
  },
  layout: 'ke-default',
  data() {
    return {
      headerText: ['self love', 'relaxing', 'being better'],
      showBeautyDescription: false,
      showDownloadBanner: true,
      cleaningMessage: [
        {
          name: 'kofo',
          image: 'kofo',
          description: `The way my house sparkles after the
<span style="color:#03A84E"> @ouredenlife </span>
 cleaners are done with their magic dey always give me endorphins`,
          handle: `yoruba_dev
`,
          tweetLink:
            'https://twitter.com/yoruba_dev/status/1334066072878772225?s=20',
        },
        {
          name: 'Enogieru Osasenaga',
          image: 'enogieru',
          description: ` Got one win today and put a proposal for another project. It’s safe to say it’s been a blessed week.
<span style="color:#03A84E"> @ouredenlife </span>
 been making my stay in Lagos worthwhile.
Tonight we Netflix cause tomorrow is back to the streets.`,
          handle: `OsasenagaEno
`,
          tweetLink:
            'https://twitter.com/OsasenagaEno/status/1316432226813390853?s=20',
        },
        {
          name: 'ifeanyi',
          image: 'ifeanyi',
          description: ` A friend recently told me about
<span style="color:#03A84E"> @ouredenlife </span>
 and basically they help you automate your chores(laundry,meals, cleaning etc). If you’re the type too busy(or lazy) to do it yourself then check them out.`,
          handle: `ifeanyi_uu`,
          tweetLink:
            'https://twitter.com/ifeanyi_uu/status/1299012714644283393',
        },
        {
          name: 'Olaniyan Ibukunoluwa',
          image: 'olaniyan',
          description: ` Have you checked out
<span style="color:#03A84E"> @ouredenlife </span>
 . They do this and are professionals. You can tailor it to suit you.`,
          handle: `fohrin2`,
          tweetLink: 'https://twitter.com/fohrin2/status/1303295606102937600',
        },
      ],
      exploreService: '',
      setExploreService: false,
      window: {
        width: 0,
        height: 0,
      },
      plan: 'standard',
      frequency: 'weekly',
      qty: 1,
      totalPrice: null,
      visible: [],
      beautyServices: ['manicure'],
      questions: [
        {
          position: 'one',
          question: 'Where does the service take place?',
          answer:
            "All services are delivered directly to you in the comfort of your home or any other place you would like the  service to be delivered e.g. your office, a friend's house etc. Simply drop the pin on your specific location when ordering the service.",
        },
        {
          position: 'two',
          question:
            'How fast will my order be processed and/or how long should I expect to wait before I am matched with a Service Partner?',
          answer:
            'We require up to 24 hours to find the right fit. Orders can only be scheduled between 7am - 7pm. 		',
        },
        {
          position: 'three',
          question: 'Why can I trust Eden and who will you be sending? ',
          answer:
            'We established our first branch in Lagos in 2019 and have grown our customer base to 5000+ customers. Having delivered 50,000+ services in Lagos alone, we have a deep understanding of how to deliver quality services at an affordable price. We have a rigourous vetting and onboarding process and select only the best Service Partners (SPs) to work with us. SPs review a comprehensive onboarding and trainings while engaged on our platform. Eden serves as a neutral intermediary to ensure all work delivered to you is hassle free. This means ensuring that the Service Partners we connect you with have a breadth of experience, are professional, trained, an/or  certified in their craft. Once we find the right match, we will notify you of the details of your SP before the service. 		',
        },
        {
          position: 'four',
          question: 'What locations do you service?',
          answer:
            'We currently only service the following locations, but will be expanding to other locations within Nairobi soon: Brookside,Kileleshwa, Kilimani, Langata,Lavington, Madaraka, Nairobi West, Ngumo, Parklands, Riara Road, South C ,South B, Upperhill, Westlands ',
        },
        {
          position: 'five',
          question: 'Can I pay after?',
          answer:
            'All Eden services are billed as subscriptions and are payable monthly during your billing cycle. This means that we require upfront payments before we deliver your services. This not only helps us guarantee quality, but ensure that all Service Partners have the materials needed to deliver your services. 		',
        },
        {
          position: 'six',
          question: 'When should I expect to get my service?',
          answer:
            "Provided that your service fall's within our operation window (Monday - Monday between 7:00am - 7:00pm), we are more than happy to fulfil your request. After completing your subscription and paying for your first month of service, please reach out to your Gardener to confirm the specific date and times you want your beauty services. 		",
        },
        {
          position: 'seven',
          question: 'How long will my service take? ',
          answer:
            'The length of your service is depends on how many beauty services you ordered and the complexity of each service. On average Mani-Pedi services take 150 mins, Massage Services 60 mins, and Waxing 20 mins.',
        },
        {
          position: 'eight',
          question: 'What if I want to change or add on additional services? ',
          answer:
            'While our Service Partners (SP) are flexible and maybe able to provide more than one service, not all Service Partners (SP) are certified to do all services. Please reach out 24 hours before your service and confirm the changes with your Gardener. 		',
        },
        {
          position: 'nine',
          question:
            "What if I don't like the selection of materials the Service Partner (SP) brings? ",
          answer:
            'If you have a preference for a specific brand of product to be used during your service, please have these laid out before your Service Partner (SP) arrives and inform them that you would like to use your own materials. Should you choose to use your own products, any liabilities shall be incurred at your own cost and risk.',
        },

        {
          position: 'ten',
          question:
            'I am not happy with the quality of the service? Will I get compensated? ',
          answer:
            'We are committed to ensuring the best of quality at the most affordable of prices. Should you be dissatisfied with your service we recommend that you provide feedback to our Customer Success team within 24 hours via your app or directly on our phone number. We deal with each complaint on a case by case basis and offer several options for resolution e.g. redoing of the service, or Eden credit.		',
        },
        {
          position: 'eleven',
          question: 'I am no longer available for my service, what do I do? ',
          answer:
            'In the event that you need to reschedule your service, please notify your Gardener 24 hours before your service or directly contact us on our business phone number. The earlier you are able to confirm, the better we are able to intervene, reschedule and inform the service partner assigned to your job.		',
        },
        {
          position: 'twelve',
          question: 'How many people do I get if order more than one thing?',
          answer:
            "While a number of our Service Partners (SP) are certified to provide multiple services, it isn't a standard. In instances you order more than one service we will send more than 1 SP to your home. If this is an issue please let your Gardener know via the app.		",
        },
        {
          position: 'thirteen',
          question: 'Can I tip my Service Partner?',
          answer:
            'If you are satisfied with the service that you received and would like to thank the service partner, we encourage that you rate and review them at the end of the service. If you additionally choose to add an monetary tip, any money exchanged is at your discretion. Please note that any tips paid directly to the service partner will not be considered as payment for any add on services or product changes during your service. You will still receive another invoice from Eden for any pending and outstanding charges.		',
        },
        {
          position: 'fourteen',
          question:
            'I want a different service from what is listed, how do I order? ',
          answer:
            'As we continue to grow, we will be adding newer products to this category. Anytime a new product or category is launched, we will send a newsletter about the new offering. Follow our social media handles to find out about promotions and vouchers in the meantime.		',
        },
      ],
      beautyServiceQuestions: [
        {
          manicure: [],
        },
      ],
      activeQuestion: 'one',
      modalText: 'information',
      showWaitListForm: false,
      visible: false,
      showSuccessModal: false,
      loading: false,
    }
  },
  head() {
    return {
      title: 'Eden | Beauty',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://ouredenlifev2-staging.netlify.app/ke/beauty/`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        title: 'Eden | Beauty',
        description: 'Personalized self-care, your place, your time.',
        url: `https://ouredenlifev2-staging.netlify.app/ke/beauty/`,
        mainImage: 'https://ouredenlifev2-staging.netlify.app/ke/edencardbeauty.png',
      }
      return getSiteMeta(metaData)
    },
  },
  mounted() {
    window.addEventListener('scroll', this.isInViewport)
    mixpanelTrackEvent('Beauty page')
    window.setInterval(() => {
      this.changeText()
    }, 2300)
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    setTimeout(() => {
      this.calculateBeautyPrice()
    }, 2000)
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.isInViewport)
  },
  methods: {
    trackDevice() {
      if (navigator.userAgent.toLowerCase().indexOf('android') > -1) {
        window.location.href =
          'https://play.google.com/store/apps/details?id=com.ouredenlife.app'
      }
      if (navigator.userAgent.toLowerCase().indexOf('iphone') > -1) {
        window.location.href =
          'https://apps.apple.com/us/app/eden-life/id1482373755?ls=1'
      } else {
        this.scrollToFooter('#get-the-app', 'Download App')
      }
    },
    currencyFormat,
    setBeautyService(service) {
      if (this.beautyServices.includes(service)) {
        this.beautyServices = this.beautyServices.filter(
          (item) => item !== service
        )
      } else {
        this.beautyServices.pop()
        this.beautyServices.push(service)
      }
      this.scrollToFooter('#beauty-services', 'beauty - hero')
    },
    openQuestion(question) {
      if (this.activeQuestion === question) {
        this.activeQuestion = ''
      } else this.activeQuestion = question
    },
    toggle(plan) {
      if (this.visible.includes(plan)) {
        this.visible = this.visible.filter((item) => item !== plan)
      } else {
        this.visible.push(plan)
      }
    },
    setBeautyType(plan) {
      this.plan = plan
      console.log(this.plan)
      this.calculateBeautyPrice()
    },
    isInViewport() {
      const element = document.querySelector('#cleaning-video')
      const { top, bottom } = element.getBoundingClientRect()
      const vHeight =
        window.innerHeight || document.documentElement.clientHeight
      const isInView = (top > 0 || bottom > 0) && top < vHeight
      if (isInView) {
        this.playVideo()
        document.querySelector('svg.bee').setAttribute('class', 'timeline--b')
        document.querySelector('svg.cee').setAttribute('class', 'timeline--c')
        document.querySelector('svg.dee').setAttribute('class', 'timeline--d')
        document.querySelector('svg.eee').setAttribute('class', 'timeline--e')
      }
    },
    scrollToFooter(id, label) {
      scrollToApp(id, label)
    },
    changeText() {
      const first = this.headerText.shift()
      this.headerText = this.headerText.concat(first)
    },
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
      if (this.window.width < '768') {
        this.setExploreService = true
      } else this.setExploreService = false
    },

    // calculateBeautyPrice() {
    //   console.log("Test")
    //   console.log(this.plan, this.frequency, this.qty)
    //   this.totalPrice = pricing({
    //     beauty: {
    //       item: this.plan,
    //       frequency: this.frequency,
    //       qty: this.qty,
    //       service_day: ['thursday'],
    //     },
    //   })
    //   console.log(this.totalPrice, this.plan, this.frequency, this.qty)
    // },

    calculateBeautyPrice() {
      this.totalPrice = pricing({
        beauty: {
          item: this.plan,
          frequency: this.frequency,
          qty: this.qty,
          service_day: ['thursday'],
        },
      })
    },

    calculateFrequency(plan) {
      this.frequency = plan
      this.calculateBeautyPrice()
    },
    increaseQty() {
      this.qty++
      if (this.frequency) {
        this.calculateBeautyPrice()
      }
    },

    decreaseQty() {
      if (this.qty === 1) {
        this.calculateBeautyPrice()
      } else this.qty--
      if (this.frequency) {
        this.calculateBeautyPrice()
      }
    },

    videoControl() {
      const video = document.querySelector('video')
      // const slideY = document.querySelector('.slide-y')
      // const slideX = document.querySelector('.slide-x')
      const slider = document.querySelector('.slider')
      const scrollToElement = document.querySelector(
        '.description__slider-text'
      )
      // control timeline with video play
      video.addEventListener('timeupdate', function () {
        // const parcentagePlayed = (this.currentTime / this.duration) * 100
        // slideY.style.height = parcentagePlayed.toFixed(2) + '%'
        // slideX.style.width = parcentagePlayed.toFixed(2) + '%'

        if (this.currentTime < 8) {
          document.querySelector('.one').className = 'one view'
          document.querySelector('.two').className = 'two'
          document.querySelector('.three').className = 'three'
          document.querySelector('.btn--replay').className = 'btn--replay'
        } else if (this.currentTime > 11 && this.currentTime < 19) {
          scrollToElement.scrollLeft = 350
          document.querySelector('.two').className = 'two view'
          document.querySelector('.btn--replay').className = 'btn--replay'
        } else if (this.currentTime > 21) {
          scrollToElement.scrollLeft = 750
          document.querySelector('.three').className = 'three view'
          document.querySelector('.btn--replay').className = 'btn--replay show'
        }
      })

      // control video play with timeline clicks
      slider.addEventListener('click', function (e) {
        const clickedHeight = e.offsetY
        const percentageCovered = clickedHeight / this.offsetHeight
        const currentTime = percentageCovered * video.duration

        // can't get the video duration until it is playing
        if (video.currentTime > 0) {
          video.pause()
          video.currentTime = Math.round(currentTime)
          video.play()
          // slideY.style.height = percentageCovered.toFixed(2) + '%'
          // slideX.style.width = percentageCovered.toFixed(2) + '%'
        }
      })
    },
    playVideo() {
      const vid = document.querySelector('video')
      vid.play()
      this.videoControl()
    },
    playButtonClicked() {
      mixpanelTrackEvent('How it works replay - cleaning')
      this.playVideo()
    },
    trackLink(service) {
      mixpanelTrackEvent(`${service} clicked - Beauty (more options)`)
    },
    getEarlyAccess() {
      this.showWaitListForm = true
      this.modalText = 'information'
    },
    closeModal() {
      this.showSuccessModal = !this.showSuccessModal
    },
    downloadApp() {
      mixpanelTrackEvent('Download App - beauty banner')
      const userAgent = navigator.userAgent || navigator.vendor || window.opera
      if (/android/i.test(userAgent)) {
        window.location.href =
          'https://play.google.com/store/apps/details?id=com.ouredenlife.app'
      }
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href =
          'https://apps.apple.com/us/app/eden-life/id1482373755?ls=1'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/ke/_beauty.scss';
@import '@/assets/scss/components/_modal-body.scss';
@import '@/assets/scss/components/_downloadbanner.scss';
</style>
