<template>
  <div>
    <section class="footer__top">
      <div class="footer__top-title">
        <h3>Get the app!</h3>
        <p>Sign up on the Eden Life app. Be happy.</p>
        <div class="footer__top-link">
          <a
            href="https://play.google.com/store/apps/details?id=com.ouredenlife.app"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611338471/eden-website-v2/playstore_n43eju.svg"
              alt="playstore"
            />
          </a>
          <a
            href="https://apps.apple.com/us/app/eden-life/id1482373755?ls=1"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611338469/eden-website-v2/appstore_o1bj6d.svg"
              alt="appstore"
            />
          </a>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/eden-life-inc/image/upload/q_auto/v1611337863/eden-website-v2/footer-phone_xeixqy.svg"
        alt="phone"
        class="footer__top-image"
      />
    </section>
    <div class="container--footer">
      <footer class="footer__bottom">
        <div class="footer__bottom-title">
          <nuxt-link :to="{ path: '/' }" class="footer__bottom-logo">
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611230252/eden-website-v2/eden-logo_lcepc6.svg"
              alt="Eden logo"
            />
          </nuxt-link>
          <p class="footer__bottom-mission">
            10x-ing the quality of life<br />
            on the continent.
          </p>
          <div class="footer__bottom-nav mobile">
            <ul>
              <li>
                <p>Services</p>
              </li>
              <li>
                <nuxt-link :to="{ path: '/' }" class="footer__bottom-logo">
                  Food
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{ path: '/' }" class="footer__bottom-logo">
                  Cleaning
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{ path: '/' }" class="footer__bottom-logo">
                  Laundry
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{ path: '/' }" class="footer__bottom-logo">
                  Gifting
                </nuxt-link>
              </li>
            </ul>

            <ul>
              <li>
                <p>Company</p>
              </li>
              <li>
                <nuxt-link :to="{ path: '/' }" class="footer__bottom-logo">
                  About Us
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{ path: '/' }" class="footer__bottom-logo">
                  Companies
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{ path: '/' }" class="footer__bottom-logo">
                  Pricing
                </nuxt-link>
              </li>
            </ul>

            <ul>
              <li>
                <p>Other</p>
              </li>
              <li>
                <nuxt-link :to="{ path: '/' }" class="footer__bottom-logo">
                  FAQs
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{ path: '/' }" class="footer__bottom-logo">
                  Blog
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{ path: '/' }" class="footer__bottom-logo">
                  Contact us
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{ path: '/' }" class="footer__bottom-logo">
                  Terms & Conditions
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="footer__bottom-social">
            <a href="https://" target="_blank">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611341806/eden-website-v2/twitter_pxdich.svg"
                alt="twitter"
              />
            </a>
            <a href="https://" target="_blank">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611341806/eden-website-v2/instagram_erb6q6.svg"
                alt="instagram"
              />
            </a>
            <a href="https://" target="_blank">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611341806/eden-website-v2/facebook_cqsjdf.svg"
                alt="facebook"
              />
            </a>
            <a href="https://" target="_blank">
              <img
                src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611341816/eden-website-v2/linkedin_utcbna.svg"
                alt="linkedin"
              />
            </a>
          </div>
          <p class="footer__bottom-copywright">
            {{ new Date().getFullYear() }} Eden Life Inc. All Rights Reserved.
          </p>
        </div>

        <div class="footer__bottom-nav">
          <ul>
            <li>
              <nuxt-link :to="{ path: '/' }" class="footer__bottom-logo">
                About Us
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{ path: '/' }" class="footer__bottom-logo">
                Companies
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{ path: '/' }" class="footer__bottom-logo">
                Pricing
              </nuxt-link>
            </li>
          </ul>

          <ul>
            <li>
              <nuxt-link :to="{ path: '/' }" class="footer__bottom-logo">
                Food
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{ path: '/' }" class="footer__bottom-logo">
                Cleaning
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{ path: '/' }" class="footer__bottom-logo">
                Laundry
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{ path: '/' }" class="footer__bottom-logo">
                Gifting
              </nuxt-link>
            </li>
          </ul>

          <ul>
            <li>
              <nuxt-link :to="{ path: '/' }" class="footer__bottom-logo">
                FAQs
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{ path: '/' }" class="footer__bottom-logo">
                Blog
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{ path: '/' }" class="footer__bottom-logo">
                Contact us
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{ path: '/' }" class="footer__bottom-logo">
                Terms & Conditions
              </nuxt-link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/_footer.scss';
</style>
