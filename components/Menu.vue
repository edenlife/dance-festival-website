<template>
  <div>
    <section class="menu">
      <div class="menu__title">
        <h3>{{ title }}</h3>
        <p>{{ firstDateFormat }} - {{ lastDateFormat }}</p>

        <small
          class="menu__action"
          v-if="
            (title.includes('Current') && nextMeals.length) ||
            title.includes('Next')
          "
          @click="toggleMenu"
        >
          {{
            title.includes('Current')
              ? "View Next week's Menu"
              : 'View Current Menu'
          }}
        </small>
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
            ><span class="prev" @click="previousCategory()">
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L1 9"
                  stroke="#03a84e"
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
            <span class="next" @click="nextCategory()">
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L1 9"
                  stroke="#03a84e"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg> </span
          ></template>
        </carousel>
      </nav>
      <div id="load-more" class="menu__list">
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
                `${item.name}${item.main_sides ? ', ' + item.main_sides : ''}
                ${item.protein_sides ? ', ' + item.protein_sides : ''}
                ${item.other_sides ? ', ' + item.other_sides : ''}
                ${item.sauce_sides ? ', ' + item.sauce_sides : ''}`
              }}
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  </div>
</template>
<script>
import { placeholderColorMix } from '~/static/functions'
export default {
  name: 'Menu',
  props: {
    meals: {
      type: Array,
      default() {
        return []
      },
    },
    nextMeals: {
      type: Array,
      default() {
        return []
      },
    },
    title: {
      type: String,
      default: '',
    },
    firstDateFormat: {
      type: String,
      default: '',
    },
    lastDateFormat: {
      type: String,
      default: '',
    },
  },

  mounted() {
    this.formatMeals()
  },

  data() {
    return {
      tabs: [],
      displayMeals: [],
      activeTabIndex: null,
      mealsInCategory: [],
    }
  },
  computed: {},
  methods: {
    placeholderColorMix,
    toggleMenu() {
      if (this.title.includes('Current')) {
        this.$emit('showNext')
      } else {
        this.$emit('showCurrent')
      }
    },
    optimizeImage(imgUrl, index) {
      const imageUrlTrim = imgUrl.substring(0, imgUrl.indexOf('/upload'))
      const imageFormat = imgUrl.substring(imgUrl.indexOf('/upload') + 7)
      if (index % 4 === 0) {
        return (
          imageUrlTrim +
          '/upload/f_auto,q_auto,e_shadow:100,x_1,y_60,co_rgb:E4E1DD10' +
          imageFormat
        )
      }
      if (index % 3 === 0) {
        return (
          imageUrlTrim +
          '/upload/f_auto,q_auto,e_shadow:100,x_1,y_60,co_rgb:DDE0E410' +
          imageFormat
        )
      }
      if (index % 2 === 0) {
        return (
          imageUrlTrim +
          '/upload/f_auto,q_auto,e_shadow:100,x_1,y_60,co_rgb:D7E3E510' +
          imageFormat
        )
      } else {
        return (
          imageUrlTrim +
          '/upload/f_auto,q_auto,e_shadow:100,x_1,y_60,co_rgb:D7E3E510' +
          imageFormat
        )
      }
    },
    formatMeals() {
      const combo = []
      this.meals.map((item) => {
        return item.preset_combos_full.map((el) => {
          combo.push({
            name: item.name,
            class_category: item.class_category,
            ...el,
          })
          return combo
        })
      })
      this.meals.map((item) => {
        if (
          item.class_category.includes('juice') &&
          item.combo_image_url !== null &&
          item.id !== 3864
        ) {
          combo.push({
            name: item.name,
            class_category: item.class_category,
            image: item.combo_image_url,
          })
        }
        return combo
      })
      this.meals.map((item) => {
        if (item.class_category.includes('smoothies')) {
          combo.push({
            name: item.name,
            class_category: item.class_category,
            image: item.image_url,
          })
        }
        return combo
      })
      this.displayMeals = combo
      this.getMealCategories(this.displayMeals)
    },
    getMealCategories(items) {
      const mapped = items.reduce((acc, { class_category }) => {
        if (class_category) {
          const classes = class_category.split(',')
          acc.push(...classes)
        }
        return acc
      }, [])
      this.tabs = [...new Set(mapped)]
      this.activeTabIndex = this.tabs[0]
      this.changeCategory(this.activeTabIndex)
    },
    changeCategory(val) {
      this.activeTabIndex = val
      this.mealsInCategory = this.getMealsInEachCategory(this.displayMeals, val)
    },

    previousCategory() {
      let activeIndex = this.tabs.indexOf(this.activeTabIndex)
      this.changeCategory(this.tabs[activeIndex - 1])
    },
    nextCategory() {
      let activeIndex = this.tabs.indexOf(this.activeTabIndex)
      this.changeCategory(this.tabs[activeIndex + 1])
    },
    getMealsInEachCategory(items, category) {
      return items.filter(
        ({ class_category }) =>
          class_category && class_category.includes(category)
      )
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/_menu.scss';
</style>
