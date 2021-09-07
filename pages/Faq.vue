<template>
  <div>
    <div class="container--header">
      <header class="faq__header">
        <h1>FAQs</h1>
        <p>Your Eden questions, answered.</p>
      </header>
      <section class="faq__questions">
        <div class="faq__questions-item">
          <div class="faq__questions-title">
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
              things with the most impact in your life. It could be making time
              for work that matters, or for enjoyment. You deserve to live well
              without the extra effort. <br />Some people call us the
              <strong>Concierge of Comfort </strong>– they're correct.
            </p>
          </transition>
        </div>
        <div class="faq__questions-item">
          <div class="faq__questions-title">
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
              home need cleaning? We'll get that done efficiently as well.
              <br />You can even subscribe for more than one service, and we'll
              run it. Perfectly.
            </p>
          </transition>
        </div>
        <div class="faq__questions-item">
          <div class="faq__questions-title">
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
                @click.prevent="scrollTo('#get-the-app', 'faq')"
                >Eden</a
              >, you can configure a plan that fits your needs, then you get
              assigned a Gardener to help you manage your home. The app takes
              your food, laundry, and home cleaning needs and turns them into
              tasks that our Gardeners attend to on schedule. The only finger
              you'll be lifting is the one scrolling through the app, monitoring
              progress.
            </p>
          </transition>
        </div>
        <div class="faq__questions-item">
          <div class="faq__questions-title">
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
              Gardeners) who are trained to handle your home requests with ease
              and enthusiasm.
              <br />
              Our Gardeners fit a profile. They’re detail-oriented, responsive,
              responsible and friendly. They have one job, and that job is to
              understand what the perfect home means for you specifically, then
              work every day to provide you with exactly that.
              <br />

              When you sign up on Eden, you see a profile of your Gardener, and
              you can get an impression of them before they start handling your
              chores.
            </p>
          </transition>
        </div>
        <div class="faq__questions-item">
          <div class="faq__questions-title">
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
                meals, house cleaning (standard and deep cleaning), and laundry
                services.</strong
              >
              And that's just the beginning.
              <br />
              If there’s ever a service you wish your Gardener provided (that
              they don’t, as yet), select the ‘Feedback’ option on the Gardener
              profile, and we’ll get the message!
            </p>
          </transition>
        </div>
        <!--  -->
        <div class="faq__questions-item">
          <div class="faq__questions-title">
            <h5>I’d like to talk to my Gardener. How do I do that?</h5>
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
              There is a chat option in the Eden app that allows you to discuss
              with your gardener. Leave them messages, add further instructions
              or make a one-off modification to your schedule. If, however, you
              want to give feedback on your gardener or services, use the
              ‘feedback’ button, which gives us feedback and opens a customer
              support ticket.
            </p>
          </transition>
        </div>
        <div class="faq__questions-item">
          <div class="faq__questions-title">
            <h5>Does my Gardener handle just my Eden account?</h5>
            <button
              type="button"
              class="expand"
              @click.prevent="expandQuestion('seven')"
            >
              <svg
                v-if="questions.includes('seven')"
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
            <p v-if="questions.includes('seven')">
              Your Gardener’s schedule is designed to give the best attention to
              your chores, which gives them (based on our very trusty Eden math)
              enough time to attend to a few other customers in the same area as
              you. This means that our Gardeners attend to a handful of
              customers, but are never swamped with requests.
            </p>
          </transition>
        </div>
        <div class="faq__questions-item">
          <div class="faq__questions-title">
            <h5>How do I download the Eden app?</h5>
            <button
              type="button"
              class="expand"
              @click.prevent="expandQuestion('eight')"
            >
              <svg
                v-if="questions.includes('eight')"
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
            <p v-if="questions.includes('eight')">
              Get Started
              <a
                href="#"
                style="color: #03a84e"
                @click.prevent="scrollTo('#get-the-app', 'faq')"
                >here</a
              >. It takes 5 minutes to set up.
            </p>
          </transition>
        </div>
        <div class="faq__questions-item">
          <div class="faq__questions-title">
            <h5>What if I want a service that’s not yet on Eden?</h5>
            <button
              type="button"
              class="expand"
              @click.prevent="expandQuestion('nine')"
            >
              <svg
                v-if="questions.includes('nine')"
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
            <p v-if="questions.includes('nine')">
              We don't want to keep you waiting for long. If there's a service
              you want that Eden doesn't currently provide, hit us up with the
              <strong>‘Feedback’</strong>option on your Gardener’s profile, and
              we’ll log your request!
            </p>
          </transition>
        </div>
      </section>
    </div>
    <div class="container--form">
      <section class="faq__form">
        <h3>Still have questions? Shoot.</h3>
        <form class="form">
          <div class="form__input">
            <label for="email">Email</label>
            <input
              id=""
              v-model="bound_fields.email"
              type="email"
              name=""
              :class="{ 'has-error': $v.bound_fields.email.$error }"
            />
          </div>
          <div class="form__input">
            <label for="message">Message</label>
            <textarea
              id=""
              v-model="bound_fields.message"
              cols="30"
              rows="10"
              name=""
              :class="{ 'has-error': $v.bound_fields.message.$error }"
            ></textarea>
          </div>
          <button
            type="submit"
            class="form__btn"
            :disabled="loading"
            @click.prevent="submitForm"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>

    <modal v-if="showSuccessModal" :show-modal="showSuccessModal" class="modal">
      <div slot="header"></div>
      <div slot="body" class="modal__body">
        <div class="form__modal">
          <div class="form__modal-title">
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
          <div class="form__modal-body">
            <img
              :src="require(`~/assets/images/successful.svg`)"
              alt="failed"
            />
            <h5>Question Submitted</h5>
            <p>You have successfully submitted your question.</p>
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
        <div class="form__modal">
          <div class="form__modal-title">
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

          <div class="form__modal-body">
            <img :src="require(`~/assets/images/failed.svg`)" alt="failed" />
            <h5>Submission Failed</h5>
            <p>
              Your question was not successfully submitted. Please try again or
              reach us at <span>eve@edenlife.ng </span> or
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
import { scrollToApp } from '~/static/functions'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'
import { faqApi } from '~/request/all.api'

export default {
  mixins: [validationMixin],
  data() {
    return {
      questions: ['one'],
      loading: false,
      showFailedModal: false,
      showSuccessModal: false,
      bound_fields: {
        email: null,
        message: null,
      },
    }
  },
  mounted() {
    mixpanelTrackEvent('FAQs page')
  },
  validations: {
    bound_fields: {
      email: { required, email },
      message: { required },
    },
  },
  methods: {
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
    async submitForm() {
      this.$v.bound_fields.$touch()
      if (!this.$v.bound_fields.$error) {
        try {
          this.loading = true
          await faqApi(this.bound_fields)
          Object.keys(this.bound_fields).forEach(
            (key) => (this.bound_fields[key] = '')
          )
          this.$nextTick(() => {
            this.$v.bound_fields.$reset()
          })
          this.showSuccessModal = true
          this.loading = false
          mixpanelTrackEvent('Feedback form - faq page')
        } catch (error) {
          this.loading = false
          this.showFailedModal = true
        }
      }
    },
    scrollTo(id, label) {
      scrollToApp(id, label)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_faq.scss';
</style>
