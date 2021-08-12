import dayjs from 'dayjs'

export default {
  data() {
    return {
      tabs: [],
      activeTabIndex: null,
      firstDateFormat: null,
      lastDateFormat: null,
      allMeal: [],
      mealsInCategory: [],
    }
  },
  mounted() {
    this.fetchMeal()
  },
  methods: {
    optimizeImage(imgUrl, index) {
      const imageUrlTrim = imgUrl.substring(0, imgUrl.indexOf('/upload'))
      const imageFormat = imgUrl.substring(imgUrl.indexOf('/upload') + 7)
      if (index % 4 === 0) {
        return (
          imageUrlTrim +
          '/upload/f_auto,q_auto,e_shadow:100,x_1,y_80,co_rgb:E4E1DD10' +
          imageFormat
        )
      }
      if (index % 3 === 0) {
        return (
          imageUrlTrim +
          '/upload/f_auto,q_auto,e_shadow:100,x_1,y_80,co_rgb:DDE0E410' +
          imageFormat
        )
      }
      if (index % 2 === 0) {
        return (
          imageUrlTrim +
          '/upload/f_auto,q_auto,e_shadow:100,x_1,y_80,co_rgb:D7E3E510' +
          imageFormat
        )
      } else {
        return (
          imageUrlTrim +
          '/upload/f_auto,q_auto,e_shadow:100,x_1,y_80,co_rgb:D7E3E510' +
          imageFormat
        )
      }
    },
    fetchMeal() {
      this.lastDateFormat = dayjs(new Date())
        .endOf('week')
        .format('DD MMM YYYY')
      this.firstDateFormat = dayjs(new Date())
        .startOf('week')
        .format('DD MMM YYYY')
      const dateData = dayjs(new Date()).format('DD-MM-YYYY')
      // TODO change to staging
      fetch(
        `https://api.edenlife.ng/api/v2/meal/items/all?current_date=${dateData}`
      )
        .then((res) => res.json())
        .then((meals) => {
          this.allMeal = meals.data
          const combo = []
          this.allMeal.map((item) => {
            return item.preset_combos_full.map((el) => {
              if (el.visible === true) {
                combo.push({
                  name: item.name,
                  class_category: item.class_category,
                  ...el,
                })
              }
              return combo
            })
          })
          this.allMeal.map((item) => {
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
          this.allMeal.map((item) => {
            if (item.class_category.includes('smoothies')) {
              combo.push({
                name: item.name,
                class_category: item.class_category,
                image: item.image_url,
              })
            }
            return combo
          })
          this.allMeal = combo
          this.getMealCategories(this.allMeal)
        })
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
      this.mealsInCategory = this.getMealsInEachCategory(this.allMeal, val)
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
