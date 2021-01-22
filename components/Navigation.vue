<template>
  <div class="container">
    <nav id="navigation-top" class="navigation">
      <nuxt-link :to="{ path: '/' }" class="navigation__logo">
        <img
          src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611230252/eden-website-v2/eden-logo_lcepc6.svg"
          alt="Eden logo"
        />
      </nuxt-link>
      <ul class="navigation__menu">
        <li>
          <nuxt-link :to="{ path: '/about' }" class="navigation__menu-item">
            About Us
          </nuxt-link>
        </li>
        <li>
          <div class="navigation__menu-item navigation__menu-service">
            <button type="button" class="btn">Services</button>
            <div class="service">
              <div>Eden Services</div>
              <ul class="service__list">
                <li>
                  <nuxt-link
                    :to="{ path: '/service/food' }"
                    class="service__list-item"
                  >
                    Food
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    :to="{ path: '/service/food' }"
                    class="service__list-item"
                  >
                    Laundry
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    :to="{ path: '/service/food' }"
                    class="service__list-item"
                  >
                    Cleaning
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    :to="{ path: '/service/food' }"
                    class="service__list-item"
                  >
                    Gifting
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <nuxt-link :to="{ path: '/pricing' }" class="navigation__menu-item">
            Pricing
          </nuxt-link>
        </li>
        <li>
          <a href="https://" class="navigation__menu-item navigation__menu-link"
            >Get Started</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/_navigation.scss';
</style>
