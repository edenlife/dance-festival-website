const TIMES_PER_MONTH = {
  'one-off': 1,
  'bi-weekly': 2,
  'weekly-twodays': 4,
  weekly: 4,
  daily: {
    'monday-friday': 20,
    'monday-saturday': 24,
  },
  monthly: 1,
}
const UNIT_PRICE_MAP = {
  CAREBOX: {
    complete: 24500,
    essentials: 13000,
  },
  CLEANING: {
    0: 0,
    1: 15000,
    2: 25000,
    3: 35000,
    4: 55000,
    5: 60000,
    6: 70000,
  },
  LAUNDRY: {
    'wash-and-iron': 12000,
    'wash-and-fold': 6750,
  },
  WEEKLYMEAL: {
    1: 2750,
    2: 2500,
    4: 2375,
    6: 2250,
    10: 2000,
    14: 1940,
    20: 1875,
  },
  DAILYMEAL: {
    1: 2750,
    2: 2500,
  },
}

export const pricing = (services) => {
  const PRICING_FUNCTIONS = {
    carebox: ({ item, frequency, qty }) => {
      const unitPrice = UNIT_PRICE_MAP.CAREBOX[item] || 24500
      const monthlyFrequency = TIMES_PER_MONTH[frequency]
      return unitPrice * parseInt(qty) * monthlyFrequency
    },
    cleaning: ({ item, itemAreas, itemAreasPrice, frequency, qty }) => {
      let areasTotalPrice = 0
      let discount = 0
      console.log(item)

      if (item !== 'fumigation') {
        areasTotalPrice = Object.keys(itemAreas).reduce((total, area) => {
          const areaQuantity = itemAreas[area]
          const areaUnitPrice = itemAreasPrice[area]
          return total + areaQuantity * areaUnitPrice
        }, 0)
      } else {
        areasTotalPrice = UNIT_PRICE_MAP.CLEANING[parseInt(qty)]
      }
      switch (item) {
        case 'light-cleaning':
          if (areasTotalPrice >= 15000) {
            discount = 3000
          } else if (areasTotalPrice >= 9000) {
            discount = 2000
          } else if (areasTotalPrice >= 7000) {
            discount = 1000
          }
          break
        case 'deep-cleaning':
          if (areasTotalPrice >= 90000) {
            discount = 20000
          } else if (areasTotalPrice >= 50000) {
            discount = 15000
          } else if (areasTotalPrice >= 40000) {
            discount = 10000
          } else if (areasTotalPrice >= 30000) {
            discount = 5000
          }
          break
          case 'post-construction-cleaning':
             if (areasTotalPrice >= 106000) {
              discount = 20000
            } else if (areasTotalPrice >= 75000) {
              discount = 15000
            } else if (areasTotalPrice >= 46000) {
              discount = 10000
            } else if (areasTotalPrice >= 44000) {
              discount = 5000
            }
            break
        case 'fumigation':
          break
        default:
          break
      }

      const monthlyFrequency = TIMES_PER_MONTH[frequency]
      const unitPrice = areasTotalPrice  - discount
      if (unitPrice === 0) {
        return 0
      }
      return (unitPrice < 5000 ? 5000 : unitPrice) * monthlyFrequency
    },
    laundry: ({ item, frequency, qty }) => {
      const itemKey = item.toLowerCase().split(' ').join('-')
      const itemUnitPrice = UNIT_PRICE_MAP.LAUNDRY[itemKey] || 4500
      const monthlyFrequency = TIMES_PER_MONTH[frequency]
      return itemUnitPrice * parseInt(qty) * monthlyFrequency
    },
    meal: ({ frequency, qty, serviceDay }) => {
      let quantity = parseInt(qty)
      let unitPrice = null
      if (frequency === 'daily') {
        if (!UNIT_PRICE_MAP.DAILYMEAL[parseInt(qty)]) {
          const nearestUnitPrice = Object.keys(UNIT_PRICE_MAP.DAILYMEAL).filter(
            (key) => quantity > key
          )
          quantity = nearestUnitPrice.pop()
        }
        unitPrice = UNIT_PRICE_MAP.DAILYMEAL[quantity]
      } else if (frequency !== 'daily') {
        if (!UNIT_PRICE_MAP.WEEKLYMEAL[parseInt(qty)]) {
          const nearestUnitPrice = Object.keys(
            UNIT_PRICE_MAP.WEEKLYMEAL
          ).filter((key) => quantity > key)
          quantity = nearestUnitPrice.pop()
        }
        unitPrice = UNIT_PRICE_MAP.WEEKLYMEAL[quantity]
      }
      const monthlyFrequency =
        frequency === 'daily'
          ? TIMES_PER_MONTH[frequency][serviceDay || 'monday-friday']
          : TIMES_PER_MONTH[frequency]

      return frequency === 'weekly-twodays'
        ? unitPrice * parseInt(qty) * monthlyFrequency + 4000
        : unitPrice * parseInt(qty) * monthlyFrequency
    },
  }
  const total = Object.keys(services).reduce((totalPrice, serviceName) => {
    const servicePreferences = services[serviceName]
    const serviceFunc = PRICING_FUNCTIONS[serviceName]
    return totalPrice + serviceFunc(servicePreferences)
  }, 0)
  return total
}
