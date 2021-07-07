import { pricing } from '~/static/pricing'
import { getCleaningServiceTypes } from '~/request/all.api'

export default {
  data() {
    return {
      estimate: 1,
      estimatedPrice: '20000',
      priceList: ['10000', '20000', '50000', '100000', '150000'],
      foodSummary: [],
      laundrySummary: [],
      cleaningSummary: [],
      totalFoodSummary: {},
      totalLaundrySummary: {},
      totalCleaningSummary: {},
      totalPrice: '',
      subtotalPrice: '',
      discountPrice: '',
      services: [
        { name: 'Food', price: '' },
        { name: 'Laundry', price: '' },
        { name: 'Cleaning', price: '' },
      ],
      selectedService: ['Food', 'Laundry', 'Cleaning'],
      mealFrequency: 'Daily',
      dailyDeliveryDays: ['monday-friday', 'monday-saturday'],
      selectedDays: ['monday-friday'],
      deliveryDays: [
        { name: 'monday', value: 'mon' },
        { name: 'tuesday', value: 'tue' },
        { name: 'wednesday', value: 'wed' },
        { name: 'thursday', value: 'thu' },
        { name: 'friday', value: 'fri' },
        { name: 'saturday', value: 'sat' },
      ],
      mealQty: 1,
      laundryFrequency: 'Every two weeks',
      laundryType: 'Wash & Fold',
      cleaningPlanType: 'light-cleaning',
      frequencyOption: [
        {
          name: 'Once a week',
          value: 'weekly',
          label: 'weekly',
        },
        {
          name: 'Every two weeks',
          value: 'bi-weekly',
          label: 'every two weeks',
        },
        {
          name: 'Once a month',
          value: 'monthly',
          label: 'once a month',
        },
      ],
      mealTypeOption: [
        {
          name: 'Daily',
          value: 'daily',
        },
        {
          name: 'Weekly',
          value: 'weekly',
        },
        {
          name: 'Twice a week',
          value: 'weekly-twodays',
        },
      ],
      laundryTypeOption: [
        {
          name: 'Wash & Fold',
          value: 'wash-and-fold',
        },
        {
          name: 'Wash & Iron',
          value: 'wash-and-iron',
        },
      ],
      laundryQty: 1,
      cleaningFrequency: 'Every two weeks',
      cleaningType: 'Light cleaning',
      cleaningOptions: [
        {
          name: 'Light Cleaning',
          value: 'light-cleaning',
          type: 'cleaning',
        },
        {
          name: 'Deep Cleaning',
          value: 'deep-cleaning',
          type: 'cleaning',
        },
        {
          name: 'Fumigation',
          value: 'fumigation',
          type: 'cleaning',
        },
      ],
      laundryTypeValue: 'wash-and-fold',
      laundryFreqValue: 'bi-weekly',
      laundryFreqName: 'every two weeks',
      cleaningTypeValue: 'light-cleaning',
      cleaningFrequencyValue: 'bi-weekly',
      cleaningServiceTypes: [],
      cleaningInfo: {
        item: 'light-cleaning',
        itemAreas: {},
        itemAreasPrice: {},
        frequency: 'bi-weekly',
        qty: 2,
      },
      roomTypes: null,
      cleaningQtyOption: [],
      displayForm: false,
      reconfigurePlan: false,
    }
  },
  watch: {
    mealQty(val) {
      if (this.mealFrequency.toLowerCase() === 'daily') {
        if (val > 5) {
          this.mealQty = 5
        } else {
          this.mealQty = val
        }
      }
      if (this.mealFrequency.toLowerCase() === 'weekly') {
        if (val > 20) {
          this.mealQty = 20
        } else {
          this.mealQty = val
        }
      }
      if (this.mealFrequency === 'Twice a week') {
        if (val > 10) {
          this.mealQty = 10
        } else {
          this.mealQty = val
        }
      }
      this.calculateFoodPrice()
    },
    laundryQty(val) {
      if (val > 5) {
        this.laundryQty = 5
      } else {
        this.laundryQty = val
      }
    },
  },
  mounted() {
    this.fetchCleaningServiceTypes()
  },
  methods: {
    switchToEstimate() {
      this.$refs['price-container'].scrollIntoView()
      this.reconfigurePlan = !this.reconfigurePlan
      this.displayForm = false
      this.estimate = 1
      this.selectedService = ['Food', 'Laundry']
      this.cleaningQtyOption[0].qty = 1
      this.cleaningQtyOption[1].qty = 1
      this.cleaningQtyOption[2].qty = 1
      this.cleaningQtyOption[3].qty = 1
      this.getEstimate()
    },
    setPlanConfig() {
      this.$refs['price-container'].scrollIntoView()
      this.reconfigurePlan = !this.reconfigurePlan
      this.estimate = 3
      this.selectedService = ['Food', 'Laundry', 'Cleaning']
      this.selectedDays = ['monday-friday']
      this.getEstimate()
    },
    setReconfigureSummary() {
      this.$refs['price-container'].scrollIntoView()
      this.reconfigurePlan = !this.reconfigurePlan
      this.displayForm = true
      this.estimatedPrice = this.subtotalPrice
      this.setBackgroundGradient()
    },
    getTotalPrice(array1, array2) {
      const finalArray = []
      array1.forEach((e1) =>
        array2.forEach((e2) => {
          if (e1.name === e2) {
            finalArray.push(e1)
          }
        })
      )
      const subtotal = finalArray.reduce((acc, val) => {
        const valInt = parseInt(val.price)
        return acc + valInt
      }, 0)

      this.subtotalPrice = subtotal.toString()
      const discount = subtotal * 0.2
      this.discountPrice = discount.toString()
      this.totalPrice = (subtotal - discount).toString()
    },
    changeService(service) {
      // estimated price 10,000
      if (this.estimate.toString() === '0') {
        if (service.name === 'Food') {
          return
        }
        this.selectedService.pop()
        this.selectedService.push(service.name)
        this.laundryFreqName = 'every two weeks'
        this.laundryType = 'Wash & Fold'
        this.laundryTypeValue = 'wash-and-fold'
        this.laundryFreqValue = 'bi-weekly'
        this.laundryQty = 1
        this.calculateLaundryPrice()
        this.cleaningType = 'Light cleaning'
        this.cleaningFrequency = 'Every two weeks'
        this.cleaningQtyOption[0].qty = 1
        this.cleaningQtyOption[1].qty = 1
        this.cleaningQtyOption[4].qty = 0
        this.cleaningQtyOption[5].qty = 0
        this.getEstimateRoomTypes()
        this.setCleaningArea('light cleaning')
        this.cleaningInfo.item = 'light-cleaning'
        this.cleaningInfo.frequency = 'bi-weekly'
        this.calculateCleaningPrice()
        return
      }

      // estimated price 20,000
      if (this.estimate.toString() === '1') {
        if (
          this.selectedService.length > 1 &&
          this.selectedService.includes(service.name)
        ) {
          this.selectedService = this.selectedService.filter(
            (item) => item !== service.name
          )
        } else if (
          this.selectedService.length >= 1 &&
          this.selectedService.length < 2 &&
          !this.selectedService.includes(service.name)
        ) {
          this.selectedService.push(service.name)
        }

        if (this.selectedService.length > 1) {
          this.mealQty = 1
          this.mealFrequency = 'Weekly'
          this.selectedDays = ['monday']
          this.calculateFoodPrice()
          this.laundryFreqName = 'every two weeks'
          this.laundryType = 'Wash & Fold'
          this.laundryTypeValue = 'wash-and-fold'
          this.laundryFreqValue = 'bi-weekly'
          this.laundryQty = 1
          this.calculateLaundryPrice()
          this.cleaningType = 'Light cleaning'
          this.cleaningFrequency = 'Every two weeks'
          this.cleaningQtyOption[0].qty = 1
          this.cleaningQtyOption[1].qty = 1
          this.cleaningQtyOption[4].qty = 0
          this.cleaningQtyOption[5].qty = 0
          this.getEstimateRoomTypes()
          this.setCleaningArea('light cleaning')
          this.cleaningInfo.item = 'light-cleaning'
          this.cleaningInfo.frequency = 'bi-weekly'
          this.calculateCleaningPrice()
        } else {
          this.mealQty = 2
          this.mealFrequency = 'Weekly'
          this.selectedDays = ['monday']
          this.calculateFoodPrice()
          this.laundryType = 'Wash & Iron'
          this.laundryFreqName = 'every two weeks'
          this.laundryTypeValue = 'wash-and-iron'
          this.laundryFreqValue = 'bi-weekly'
          this.laundryQty = 1
          this.calculateLaundryPrice()
          this.cleaningType = 'Light cleaning'
          this.cleaningFrequency = 'Once a week'
          this.setCleaningArea('light cleaning')
          this.cleaningInfo.item = 'light-cleaning'
          this.cleaningQtyOption[0].qty = 1
          this.cleaningQtyOption[1].qty = 1
          this.cleaningQtyOption[4].qty = 0
          this.cleaningQtyOption[5].qty = 0
          this.getEstimateRoomTypes()
          this.cleaningInfo.frequency = 'weekly'
          this.calculateCleaningPrice()
        }
        return
      }

      // add and remove service control for estimate 50,000 and above
      if (
        this.selectedService.length > 1 &&
        this.selectedService.includes(service.name)
      ) {
        this.selectedService = this.selectedService.filter(
          (item) => item !== service.name
        )
      } else if (
        this.selectedService.length >= 1 &&
        !this.selectedService.includes(service.name)
      ) {
        this.selectedService.push(service.name)
      }

      // estimated price 50,000
      if (this.estimate.toString() === '2') {
        if (this.selectedService.length === 3) {
          this.mealQty = 2
          this.mealFrequency = 'Weekly'
          this.selectedDays = ['monday']
          this.calculateFoodPrice()
          this.laundryType = 'Wash & Iron'
          this.laundryFreqName = 'every two weeks'
          this.laundryTypeValue = 'wash-and-iron'
          this.laundryFreqValue = 'bi-weekly'
          this.laundryQty = 1
          this.calculateLaundryPrice()
          this.cleaningType = 'Light cleaning'
          this.cleaningFrequency = 'Every two weeks'
          this.cleaningQtyOption[0].qty = 2
          this.cleaningQtyOption[1].qty = 3
          this.cleaningQtyOption[4].qty = 0
          this.cleaningQtyOption[5].qty = 0
          this.getEstimateRoomTypes()
          this.setCleaningArea('light cleaning')
          this.cleaningInfo.item = 'light-cleaning'
          this.cleaningInfo.frequency = 'bi-weekly'
          this.calculateCleaningPrice()
        } else if (this.selectedService.length === 2) {
          if (
            this.selectedService.includes('Food') &&
            this.selectedService.includes('Laundry')
          ) {
            this.mealQty = 5
            this.mealFrequency = 'Weekly'
            this.selectedDays = ['monday']
            this.calculateFoodPrice()
            this.laundryFreqName = 'every two weeks'
            this.laundryType = 'Wash & Fold'
            this.laundryTypeValue = 'wash-and-fold'
            this.laundryFreqValue = 'bi-weekly'
            this.laundryQty = 1
            this.calculateLaundryPrice()
          }
          if (
            this.selectedService.includes('Food') &&
            this.selectedService.includes('Cleaning')
          ) {
            this.mealQty = 5
            this.mealFrequency = 'Weekly'
            this.selectedDays = ['monday']
            this.calculateFoodPrice()
            this.cleaningType = 'Light cleaning'
            this.cleaningFrequency = 'Every two weeks'
            this.cleaningQtyOption[0].qty = 2
            this.cleaningQtyOption[1].qty = 3
            this.cleaningQtyOption[4].qty = 0
            this.cleaningQtyOption[5].qty = 0
            this.getEstimateRoomTypes()
            this.setCleaningArea('light cleaning')
            this.cleaningInfo.item = 'light-cleaning'
            this.cleaningInfo.frequency = 'bi-weekly'
            this.calculateCleaningPrice()
          }
          if (
            this.selectedService.includes('Cleaning') &&
            this.selectedService.includes('Laundry')
          ) {
            this.laundryFreqName = 'weekly'
            this.laundryType = 'Wash & Iron'
            this.laundryTypeValue = 'wash-and-iron'
            this.laundryFreqValue = 'weekly'
            this.laundryQty = 1
            this.calculateLaundryPrice()
            this.cleaningType = 'Light cleaning'
            this.cleaningFrequency = 'Every two weeks'
            this.cleaningQtyOption[0].qty = 2
            this.cleaningQtyOption[1].qty = 3
            this.cleaningQtyOption[4].qty = 0
            this.cleaningQtyOption[5].qty = 0
            this.getEstimateRoomTypes()
            this.setCleaningArea('light cleaning')
            this.cleaningInfo.item = 'light-cleaning'
            this.cleaningInfo.frequency = 'bi-weekly'
            this.calculateCleaningPrice()
          }
        } else if (this.selectedService.length === 1) {
          this.mealQty = 1
          this.mealFrequency = 'Daily'
          this.selectedDays = ['monday-friday']
          this.calculateFoodPrice()
          this.laundryFreqName = 'every two weeks'
          this.laundryType = 'Wash & Iron'
          this.laundryTypeValue = 'wash-and-iron'
          this.laundryFreqValue = 'bi-weekly'
          this.laundryQty = 3
          this.calculateLaundryPrice()
          this.cleaningType = 'Deep cleaning'
          this.cleaningFrequency = 'Every two weeks'
          this.cleaningQtyOption[0].qty = 2
          this.cleaningQtyOption[1].qty = 3
          this.cleaningQtyOption[4].qty = 0
          this.cleaningQtyOption[5].qty = 0
          this.getEstimateRoomTypes()
          this.setCleaningArea('deep cleaning')
          this.cleaningInfo.item = 'deep-cleaning'
          this.cleaningInfo.frequency = 'bi-weekly'
          this.calculateCleaningPrice()
        }
      }
      // estimated price 100,000
      if (this.estimate.toString() === '3') {
        if (this.selectedService.length === 3) {
          this.mealQty = 1
          this.mealFrequency = 'Daily'
          this.selectedDays = ['monday-friday']
          this.calculateFoodPrice()
          this.laundryFreqName = 'every two weeks'
          this.laundryType = 'Wash & Iron'
          this.laundryTypeValue = 'wash-and-iron'
          this.laundryFreqValue = 'bi-weekly'
          this.laundryQty = 1
          this.calculateLaundryPrice()
          this.cleaningType = 'Deep cleaning'
          this.cleaningFrequency = 'Once a month'
          this.cleaningQtyOption[0].qty = 1
          this.cleaningQtyOption[1].qty = 1
          this.cleaningQtyOption[4].qty = 0
          this.cleaningQtyOption[5].qty = 0
          this.getEstimateRoomTypes()
          this.setCleaningArea('deep cleaning')
          this.cleaningInfo.item = 'deep-cleaning'
          this.cleaningInfo.frequency = 'monthly'
          this.calculateCleaningPrice()
        } else if (this.selectedService.length === 2) {
          if (
            this.selectedService.includes('Food') &&
            this.selectedService.includes('Laundry')
          ) {
            this.mealQty = 5
            this.mealFrequency = 'Twice a week'
            this.selectedDays = ['monday', 'thursday']
            this.calculateFoodPrice()
            this.laundryFreqName = 'weekly'
            this.laundryType = 'Wash & Iron'
            this.laundryTypeValue = 'wash-and-iron'
            this.laundryFreqValue = 'weekly'
            this.laundryQty = 1
            this.calculateLaundryPrice()
          }
          if (
            this.selectedService.includes('Food') &&
            this.selectedService.includes('Cleaning')
          ) {
            this.mealQty = 5
            this.mealFrequency = 'Twice a week'
            this.selectedDays = ['monday', 'thursday']
            this.calculateFoodPrice()
            this.cleaningType = 'Deep cleaning'
            this.cleaningFrequency = 'Once a month'
            this.setCleaningArea('deep cleaning')
            this.cleaningInfo.item = 'deep-cleaning'
            this.cleaningQtyOption[0].qty = 1
            this.cleaningQtyOption[1].qty = 1
            this.cleaningQtyOption[4].qty = 0
            this.cleaningQtyOption[5].qty = 0
            this.getEstimateRoomTypes()
            this.cleaningInfo.frequency = 'monthly'
            this.calculateCleaningPrice()
          }
          if (
            this.selectedService.includes('Cleaning') &&
            this.selectedService.includes('Laundry')
          ) {
            this.laundryFreqName = 'every two weeks'
            this.laundryType = 'Wash & Iron'
            this.laundryTypeValue = 'wash-and-iron'
            this.laundryFreqValue = 'bi-weekly'
            this.laundryQty = 3
            this.calculateLaundryPrice()
            this.cleaningType = 'Deep cleaning'
            this.cleaningFrequency = 'Every two weeks'
            this.setCleaningArea('deep cleaning')
            this.cleaningInfo.item = 'deep-cleaning'
            this.cleaningQtyOption[0].qty = 1
            this.cleaningQtyOption[1].qty = 1
            this.cleaningQtyOption[4].qty = 0
            this.cleaningQtyOption[5].qty = 0
            this.getEstimateRoomTypes()
            this.cleaningInfo.frequency = 'bi-weekly'
            this.calculateCleaningPrice()
          }
        } else if (this.selectedService.length === 1) {
          this.mealQty = 5
          this.mealFrequency = 'Twice a week'
          this.selectedDays = ['monday', 'thursday']
          this.calculateFoodPrice()
          this.laundryFreqName = 'weekly'
          this.laundryType = 'Wash & Iron'
          this.laundryTypeValue = 'wash-and-iron'
          this.laundryFreqValue = 'weekly'
          this.laundryQty = 3
          this.calculateLaundryPrice()
          this.cleaningType = 'Deep cleaning'
          this.cleaningFrequency = 'Once a week'
          this.setCleaningArea('deep cleaning')
          this.cleaningInfo.item = 'deep-cleaning'
          this.cleaningQtyOption[0].qty = 1
          this.cleaningQtyOption[1].qty = 1
          this.cleaningQtyOption[4].qty = 0
          this.cleaningQtyOption[5].qty = 0
          this.getEstimateRoomTypes()
          this.cleaningInfo.frequency = 'weekly'
          this.calculateCleaningPrice()
        }
      }
      // estimated price 150,000
      if (this.estimate.toString() === '4') {
        if (this.selectedService.length === 3) {
          this.mealQty = 2
          this.mealFrequency = 'Daily'
          this.selectedDays = ['monday-friday']
          this.calculateFoodPrice()
          this.laundryFreqName = 'weekly'
          this.laundryType = 'Wash & Iron'
          this.laundryTypeValue = 'wash-and-iron'
          this.laundryFreqValue = 'weekly'
          this.laundryQty = 1
          this.calculateLaundryPrice()
          this.cleaningType = 'Light cleaning'
          this.cleaningFrequency = 'Once a week'
          this.cleaningQtyOption[0].qty = 3
          this.cleaningQtyOption[1].qty = 4
          this.cleaningQtyOption[4].qty = 0
          this.cleaningQtyOption[5].qty = 0
          this.getEstimateRoomTypes()
          this.setCleaningArea('light cleaning')
          this.cleaningInfo.item = 'light-cleaning'
          this.cleaningInfo.frequency = 'weekly'
          this.calculateCleaningPrice()
        } else if (this.selectedService.length === 2) {
          if (
            this.selectedService.includes('Food') &&
            this.selectedService.includes('Laundry')
          ) {
            this.mealQty = 2
            this.mealFrequency = 'Daily'
            this.selectedDays = ['monday-friday']
            this.calculateFoodPrice()
            this.laundryFreqName = 'every two weeks'
            this.laundryType = 'Wash & Iron'
            this.laundryTypeValue = 'wash-and-iron'
            this.laundryFreqValue = 'bi-weekly'
            this.laundryQty = 3
            this.calculateLaundryPrice()
          }
          if (
            this.selectedService.includes('Food') &&
            this.selectedService.includes('Cleaning')
          ) {
            this.mealQty = 2
            this.mealFrequency = 'Daily'
            this.calculateFoodPrice()
            this.cleaningType = 'Light cleaning'
            this.cleaningFrequency = 'Once a week'
            this.cleaningQtyOption[0].qty = 4
            this.cleaningQtyOption[1].qty = 5
            this.cleaningQtyOption[4].qty = 1
            this.cleaningQtyOption[5].qty = 1
            this.getEstimateRoomTypes()
            this.setCleaningArea('light cleaning')
            this.cleaningInfo.item = 'light-cleaning'
            this.cleaningInfo.frequency = 'weekly'
            this.calculateCleaningPrice()
          }
          if (
            this.selectedService.includes('Cleaning') &&
            this.selectedService.includes('Laundry')
          ) {
            this.laundryFreqName = 'weekly'
            this.laundryType = 'Wash & Iron'
            this.laundryTypeValue = 'wash-and-iron'
            this.laundryFreqValue = 'weekly'
            this.laundryQty = 3
            this.calculateLaundryPrice()
            this.cleaningType = 'Deep cleaning'
            this.cleaningFrequency = 'Once a month'
            this.cleaningQtyOption[0].qty = 4
            this.cleaningQtyOption[1].qty = 5
            this.cleaningQtyOption[4].qty = 1
            this.cleaningQtyOption[5].qty = 1
            this.getEstimateRoomTypes()
            this.setCleaningArea('deep cleaning')
            this.cleaningInfo.item = 'deep-cleaning'
            this.cleaningInfo.frequency = 'monthly'
            this.calculateCleaningPrice()
          }
        } else if (this.selectedService.length === 1) {
          this.mealQty = 3
          this.mealFrequency = 'Daily'
          this.selectedDays = ['monday-friday']
          this.calculateFoodPrice()
          this.laundryFreqName = 'weekly'
          this.laundryType = 'Wash & Iron'
          this.laundryTypeValue = 'wash-and-iron'
          this.laundryFreqValue = 'weekly'
          this.laundryQty = 4
          this.calculateLaundryPrice()
          this.cleaningType = 'Deep cleaning'
          this.cleaningFrequency = 'Every two weeks'
          this.cleaningQtyOption[0].qty = 4
          this.cleaningQtyOption[1].qty = 5
          this.cleaningQtyOption[4].qty = 2
          this.cleaningQtyOption[5].qty = 2
          this.getEstimateRoomTypes()
          this.setCleaningArea('deep cleaning')
          this.cleaningInfo.item = 'deep-cleaning'
          this.cleaningInfo.frequency = 'bi-weekly'
          this.calculateCleaningPrice()
        }
      }
    },
    getDefaultPrice(estimate) {
      switch (estimate.toString()) {
        case '0': {
          this.selectedService = []
          const defaultService = { name: 'Laundry', price: '9000' }
          this.changeService(defaultService)
          break
        }
        case '1': {
          this.selectedService = ['Food']
          const defaultService = { name: 'Laundry', price: '' }
          this.changeService(defaultService)
          break
        }
        case '2': {
          this.selectedService = ['Food', 'Laundry']
          const defaultService = { name: 'Cleaning', price: '' }
          this.changeService(defaultService)
          break
        }
        case '3': {
          this.selectedService = ['Food', 'Laundry']
          const defaultService = { name: 'Cleaning', price: '' }
          this.changeService(defaultService)
          break
        }
        case '4': {
          this.selectedService = ['Food', 'Laundry']
          const defaultService = { name: 'Cleaning', price: '' }
          this.changeService(defaultService)
          break
        }
        case '5':
          break
        default:
          console.log('default')
      }
    },
    getEstimate() {
      this.setBackgroundGradient()
      this.getDefaultPrice(this.estimate)
      this.estimatedPrice = this.priceList[this.estimate]
    },
    setBackgroundGradient() {
      const labels = document.querySelectorAll('.range-labels li')
      labels.forEach((el, i) => {
        if (this.estimate >= i) {
          el.classList.add('selected')
        } else {
          el.classList.remove('selected')
        }
      })
      // Change background gradient
      const prefs = [
        'webkit-slider-runnable-track',
        'moz-range-track',
        'ms-track',
      ]
      const val = this.estimate * 25

      for (let i = 0; i < prefs.length; i++) {
        document
          .querySelector('.range-labels')
          .classList.add('range-labels-active')
        const root = document.querySelector(':root')
        const element = document.querySelector('.range-labels-active')
        getComputedStyle(element, '::before')
        root.style.setProperty('--pseudo-width', `${val}%`)
      }
    },
    // Food claculator
    calculateFoodPrice() {
      if (this.mealFrequency.toLowerCase() === 'daily') {
        if (this.mealQty > 5) {
          this.mealQty = 5
        }
        const total = pricing({
          meal: {
            item: null,
            frequency: 'daily',
            qty: this.mealQty,
            serviceDay: this.selectedDays[0],
          },
        })
        this.services[0].price = isNaN(total) ? 0 : total.toString()
        this.getTotalPrice(this.services, this.selectedService)
        this.foodSummary = [
          `Daily delivery`,
          `${this.mealQty} meal${this.mealQty > 1 ? 's' : ''} per day`,
        ]
        this.totalFoodSummary = {
          frequency: 'daily',
          item: null,
          qty: this.mealQty,
          service_day: this.selectedDays,
          amount: total,
        }
      }
      if (this.mealFrequency.toLowerCase() === 'weekly') {
        if (this.mealQty > 20) {
          this.mealQty = 20
        }
        const total = pricing({
          meal: { item: null, frequency: 'weekly', qty: this.mealQty },
        })
        this.services[0].price = total.toString()
        this.getTotalPrice(this.services, this.selectedService)
        this.foodSummary = [
          `Weekly delivery`,
          `${this.mealQty} meal${this.mealQty > 1 ? 's' : ''} per week`,
          'Delivered once a week',
        ]
        this.totalFoodSummary = {
          frequency: 'weekly',
          item: null,
          qty: this.mealQty,
          service_day: this.selectedDays,
          amount: total,
        }
      }
      if (this.mealFrequency === 'Twice a week') {
        if (this.mealQty > 10) {
          this.mealQty = 10
        }
        const total = pricing({
          meal: {
            item: null,
            frequency: 'weekly-twodays',
            qty: this.mealQty * 2,
          },
        })
        this.services[0].price = total.toString()
        this.getTotalPrice(this.services, this.selectedService)
        this.foodSummary = [
          `Weekly delivery`,
          `${this.mealQty * 2} meals per week`,
          'Delivered twice a week',
        ]

        this.totalFoodSummary = {
          frequency: 'weekly-twodays',
          item: null,
          qty: this.mealQty * 2,
          service_day: this.selectedDays,
          amount: total,
        }
      }
    },
    getMealPrice(plan) {
      if (plan.name.toLowerCase() === 'daily') {
        this.selectedDays = ['monday-friday']
      }
      if (plan.name.toLowerCase() === 'weekly') {
        this.selectedDays = ['monday']
      }
      if (plan.name === 'Twice a week') {
        this.selectedDays = ['monday', 'thursday']
      }

      this.mealFrequency = plan.name
      this.calculateFoodPrice()
    },

    // Laundry calculator
    getLaundryPrice(plan) {
      if (plan.value.includes('wash')) {
        this.laundryType = plan.name
        this.laundryTypeValue = plan.value
        this.calculateLaundryPrice()
        this.toggle('laundryType')
      } else {
        this.laundryFreqName = plan.label
        this.laundryFrequency = plan.name
        this.laundryFreqValue = plan.value
        this.calculateLaundryPrice()
        this.toggle('laundryFreq')
      }
    },
    calculateLaundryPrice() {
      const total = pricing({
        laundry: {
          item: this.laundryTypeValue,
          frequency: this.laundryFreqValue,
          qty: this.laundryQty,
        },
      })
      this.services[1].price = total.toString()
      this.getTotalPrice(this.services, this.selectedService)
      this.laundrySummary = [
        `${this.laundryType}`,
        `${this.laundryQty} bag${
          this.laundryQty > 1 ? 's' : ''
        } (max. 30 items per bag)`,
        `Picked up ${this.laundryFreqName}`,
      ]
      this.totalLaundrySummary = {
        frequency: this.laundryFreqValue,
        item: this.laundryTypeValue,
        qty: this.laundryQty,
        service_day: [],
        amount: total,
      }
    },

    // Cleaning calculator
    async fetchCleaningServiceTypes() {
      this.loading = true
      const cleaningResponse = await getCleaningServiceTypes()
      this.cleaningServiceTypes = cleaningResponse.data.data
      const [{ name: optionName }] = this.cleaningOptions.filter(
        ({ value }) => value === 'light-cleaning'
      )
      const [{ cleaning_areas = [] }] = this.cleaningServiceTypes.filter(
        ({ name }) => name === optionName
      )
      this.cleaningQtyOption = cleaning_areas.map((obj) => ({
        ...obj,
        qty: 0,
      }))
      this.cleaningQtyOption[0].qty = 1
      this.cleaningQtyOption[1].qty = 1
      this.cleaningQtyOption[2].qty = 1
      this.cleaningQtyOption[3].qty = 1
      this.setCleaningArea('light cleaning')
      this.getEstimate()
      this.loading = false
    },
    calculateCleaningPrice() {
      const {
        item,
        itemAreas,
        itemAreasPrice,
        frequency,
        qty,
      } = this.cleaningInfo
      const total = pricing({
        cleaning: {
          item,
          itemAreas,
          itemAreasPrice,
          frequency,
          qty,
        },
      })
      const newItemAreas = Object.keys(itemAreas).reduce((accumulator, key) => {
        if (itemAreas[key] !== 0) {
          accumulator[key] = itemAreas[key]
        }
        return accumulator
      }, {})

      this.services[2].price = total.toString()
      this.getTotalPrice(this.services, this.selectedService)
      this.cleaningSummary = [
        `${this.cleaningType}`,
        `${this.roomTypes}`,
        `${this.cleaningFrequency}`,
      ]
      this.totalCleaningSummary = {
        frequency: this.cleaningInfo.frequency,
        item: this.cleaningInfo.item,
        item_areas: newItemAreas,
        qty: this.cleaningInfo.qty,
        service_day: [],
        amount: total,
      }
    },
    setCleaningArea(area) {
      const [{ cleaning_areas = [] }] = this.cleaningServiceTypes.filter(
        ({ name }) => name.toLowerCase() === area.toLowerCase()
      )
      cleaning_areas.forEach((e1) =>
        this.cleaningQtyOption.forEach((e2) => {
          if (e1.slug === e2.slug) {
            this.cleaningInfo.itemAreas[e1.slug] = e2.qty
            this.cleaningInfo.itemAreasPrice[e1.slug] = e1.price
          }
        })
      )
    },
    getCleaningPrice(plan) {
      if (plan.type === 'cleaning') {
        this.cleaningType = plan.name
        this.cleaningTypeValue = plan.value
        if (plan.value === 'light-cleaning') {
          this.cleaningInfo.item = plan.value
          this.setCleaningArea('light cleaning')
        }
        if (plan.value === 'deep-cleaning') {
          this.cleaningInfo.item = plan.value
          this.setCleaningArea('deep cleaning')
        }
        if (plan.value === 'fumigation') {
          this.cleaningInfo.item = plan.value
          this.cleaningInfo.qty = this.cleaningQtyOption.reduce((acc, val) => {
            return acc + val.qty
          }, 0)
        }
        this.toggle('cleaningType')
        this.calculateCleaningPrice()
      } else {
        this.cleaningFrequencyValue = plan.value
        this.cleaningFrequency = plan.name
        this.cleaningInfo.frequency = plan.value
        this.calculateCleaningPrice()
        this.toggle('cleaningFreq')
      }
    },
    getEstimateRoomTypes() {
      const filterRoom = this.cleaningQtyOption.filter((item) => {
        return item.qty !== 0
      })
      const rooms = filterRoom.map((item) => {
        return item.qty + ' ' + item.cleaning_area_name
      })
      this.roomTypes = rooms.join(', ')
    },
  },
}
