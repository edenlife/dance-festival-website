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
    'light-cleaning': {
      1: 4000,
      2: 6000,
      3: 7000,
      4: 10000,
      5: 11000,
      6: 13000,
      7: 14000,
      8: 15000,
      9: 16000,
      10: 17000,
    },
    'deep-cleaning': {
      1: 20000,
      2: 25000,
      3: 35000,
      4: 45000,
      5: 55000,
      6: 65000,
      7: 70000,
      8: 80000,
      9: 90000,
      10: 100000,
    },
    fumigation: {
      1: 15000,
      2: 25000,
      3: 35000,
      4: 55000,
      5: 60000,
      6: 70000,
    },
  },
  LAUNDRY: {
    'wash-and-iron': 8000,
    'wash-and-fold': 4500,
  },
  MEAL: {
    1: 2200,
    2: 2000,
    4: 1900,
    6: 1800,
    10: 1600,
    14: 1550,
    20: 1500,
  },
}

export const pricing = (services) => {
  const PRICING_FUNCTIONS = {
    carebox: ({ item, frequency, qty }) => {
      const unitPrice = UNIT_PRICE_MAP.CAREBOX[item] || 24500
      const monthlyFrequency = TIMES_PER_MONTH[frequency]
      return unitPrice * parseInt(qty) * monthlyFrequency
    },
    cleaning: ({ item, frequency, qty }) => {
      const itemKey = item.toLowerCase().split(' ').join('-')
      if (qty > 10 && item === 'light-cleaning') {
        const monthlyFrequency = TIMES_PER_MONTH[frequency]
        const addition = (qty - 10) * 1000
        const unitPrice = 17000 + addition
        return unitPrice * monthlyFrequency
      } else if (qty > 10 && item === 'deep-cleaning') {
        const monthlyFrequency = TIMES_PER_MONTH[frequency]
        const addition = (qty - 10) * 10000
        const unitPrice = 100000 + addition
        return unitPrice * monthlyFrequency
      } else {
        const unitPrice = UNIT_PRICE_MAP.CLEANING[itemKey][qty]
        const monthlyFrequency = TIMES_PER_MONTH[frequency]
        return unitPrice * monthlyFrequency
      }
    },
    laundry: ({ item, frequency, qty }) => {
      const itemKey = item.toLowerCase().split(' ').join('-')
      const itemUnitPrice = UNIT_PRICE_MAP.LAUNDRY[itemKey] || 4500
      const monthlyFrequency = TIMES_PER_MONTH[frequency]
      return itemUnitPrice * parseInt(qty) * monthlyFrequency
    },
    meal: ({ frequency, qty, serviceDay }) => {
      let quantity = parseInt(qty)
      if (!UNIT_PRICE_MAP.MEAL[parseInt(qty)]) {
        const nearestUnitPrice = Object.keys(UNIT_PRICE_MAP.MEAL).filter(
          (key) => quantity > key
        )
        quantity = nearestUnitPrice.pop()
      }
      const unitPrice = UNIT_PRICE_MAP.MEAL[quantity]
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
