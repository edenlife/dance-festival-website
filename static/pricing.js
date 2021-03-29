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
    'wash-and-iron': 8000,
    'wash-and-fold': 4500,
  },
  WEEKLYMEAL: {
    1: 2200,
    2: 2000,
    4: 1900,
    6: 1800,
    10: 1600,
    14: 1550,
    20: 1500,
  },
  DAILYMEAL: {
    1: 2200,
    2: 2000,
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
          if (areasTotalPrice >= 7000 && areasTotalPrice < 8000) {
            discount = 1000
          } else if (areasTotalPrice >= 8000 && areasTotalPrice < 13000) {
            discount = 2000
          } else if (areasTotalPrice >= 13000) {
            discount = 3000
          }
          break
        case 'deep-cleaning':
          if (areasTotalPrice >= 25000 && areasTotalPrice < 30000) {
            discount = 5000
          } else if (areasTotalPrice >= 30000 && areasTotalPrice < 35000) {
            discount = 10000
          } else if (areasTotalPrice >= 35000) {
            discount = 15000
          }
          break
        case 'fumigation':
          break
        default:
          break
      }

      const monthlyFrequency = TIMES_PER_MONTH[frequency]
      return (areasTotalPrice - discount) * monthlyFrequency
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
