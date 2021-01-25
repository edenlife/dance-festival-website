<template>
  <div>
    <div class="container--header">
      <header class="faq__header">
        <h1>FAQs</h1>
        <p>Your EdenLife questions, answered.</p>
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
              without the extra effort. Some people call us the Concierge of
              Comfort – they're correct.
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
              Easy. We're bringing the convenience of room service to homes
              across Africa – but starting with Lagos. Home tasks are routine
              activities that should be outsourced, so you can focus on the
              things with the most impact in your life. It could be making time
              for work that matters, or for enjoyment. You deserve to live well
              without the extra effort. Some people call us the Concierge of
              Comfort – they're correct.
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
              Easy. We're bringing the convenience of room service to homes
              across Africa – but starting with Lagos. Home tasks are routine
              activities that should be outsourced, so you can focus on the
              things with the most impact in your life. It could be making time
              for work that matters, or for enjoyment. You deserve to live well
              without the extra effort. Some people call us the Concierge of
              Comfort – they're correct.
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
              Easy. We're bringing the convenience of room service to homes
              across Africa – but starting with Lagos. Home tasks are routine
              activities that should be outsourced, so you can focus on the
              things with the most impact in your life. It could be making time
              for work that matters, or for enjoyment. You deserve to live well
              without the extra effort. Some people call us the Concierge of
              Comfort – they're correct.
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
              Easy. We're bringing the convenience of room service to homes
              across Africa – but starting with Lagos. Home tasks are routine
              activities that should be outsourced, so you can focus on the
              things with the most impact in your life. It could be making time
              for work that matters, or for enjoyment. You deserve to live well
              without the extra effort. Some people call us the Concierge of
              Comfort – they're correct.
            </p>
          </transition>
        </div>
        <div class="faq__questions-item">
          <div class="faq__questions-title">
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
              Easy. We're bringing the convenience of room service to homes
              across Africa – but starting with Lagos. Home tasks are routine
              activities that should be outsourced, so you can focus on the
              things with the most impact in your life. It could be making time
              for work that matters, or for enjoyment. You deserve to live well
              without the extra effort. Some people call us the Concierge of
              Comfort – they're correct.
            </p>
          </transition>
        </div>
      </section>
    </div>
    <div class="container--form">
      <section class="faq__form">
        <h3>Still have questions? Shoot.</h3>
        <div class="form">
          <div class="form__input">
            <label for="email">Email</label>
            <input id="" type="email" name="" />
          </div>
          <div class="form__input">
            <label for="email">Message</label>
            <textarea id="" name="" cols="30" rows="10"></textarea>
          </div>
          <button type="button" class="form__btn">Send Message</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: ['one'],
    }
  },
  methods: {
    expandQuestion(item) {
      this.questions.length && this.questions.includes(item)
        ? (this.questions = this.questions.filter((o1) => o1 !== item))
        : this.questions.push(item)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_faq.scss';
</style>
