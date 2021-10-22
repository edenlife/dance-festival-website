import dayjs from 'dayjs'

export default {
  data() {
    return {
      tabs: [],
      activeTabIndex: null,
      firstDateFormat: null,
      lastDateFormat: null,
      nextFirstDateFormat: null,
      nextLastDateFormat: null,
      currentDay: null,
      allMeal: [],
      currentMeals: [],
      nextWeekMeals: [],
      mealsInCategory: [],
      showCurrentMenu: true,
      showNextMenu: false,
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
    toggleMenu(menu) {
      if (menu === 'next') {
        this.showCurrentMenu = false
        this.showNextMenu = true
      } else {
        this.showNextMenu = false
        this.showCurrentMenu = true
      }
    },
    fetchMeal() {
      const dateData = dayjs(new Date()).format('DD-MM-YYYY')
      let nextDateData
      this.currentDay = dayjs().day()
      this.lastDateFormat = dayjs(new Date())
        .endOf('week')
        .format('DD MMM YYYY')
      this.firstDateFormat = dayjs(new Date())
        .startOf('week')
        .format('DD MMM YYYY')

      switch (this.currentDay) {
        case 4:
          this.nextLastDateFormat = dayjs(new Date())
            .add(9, 'day')
            .format('DD MMM YYYY')
          this.nextFirstDateFormat = dayjs(new Date())
            .add(3, 'day')
            .format('DD MMM YYYY')
          nextDateData = dayjs(new Date()).add(3, 'day').format('DD MMM YYYY')
          break
        case 5:
          this.nextLastDateFormat = dayjs(new Date())
            .add(8, 'day')
            .format('DD MMM YYYY')
          this.nextFirstDateFormat = dayjs(new Date())
            .add(2, 'day')
            .format('DD MMM YYYY')
          nextDateData = dayjs(new Date()).add(2, 'day').format('DD MMM YYYY')
          break
        case 6:
          this.nextLastDateFormat = dayjs(new Date())
            .add(7, 'day')
            .format('DD MMM YYYY')
          this.nextFirstDateFormat = dayjs(new Date())
            .add(1, 'day')
            .format('DD MMM YYYY')
          nextDateData = dayjs(new Date()).add(1, 'day').format('DD MMM YYYY')
          break

        default:
          break
      }

      fetch(
        `https://api.edenlife.ng/api/v2/meal/items/all?current_date=${dateData}`
      )
        .then((res) => res.json())
        .then((meals) => {
          this.currentMeals = meals.data
        })
      if (this.currentDay >= 4) {
        fetch(
          `https://api.edenlife.ng/api/v2/meal/items/all?current_date=${nextDateData}`
        )
          .then((res) => res.json())
          .then((meals) => {
            this.nextWeekMeals = meals.data
          })
      }
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
