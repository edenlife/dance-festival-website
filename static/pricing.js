const TIMES_PER_MONTH = {
  'one-off': 1,
  'bi-weekly': 2,
  'weekly-twodays': 8,
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
    'light-cleaning': 5000,
    fumigation: 20000,
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
      const itemUnitPrice = UNIT_PRICE_MAP.CLEANING[itemKey] || 5000
      const monthlyFrequency = TIMES_PER_MONTH[frequency]
      let additionalRoomsCharge
      switch (item) {
        case 'light-cleaning':
          additionalRoomsCharge = (parseInt(qty) - 1) * 500
          break
        case 'fumigation':
          additionalRoomsCharge = (parseInt(qty) - 1) * 2500
          break
        default:
          additionalRoomsCharge = (parseInt(qty) - 1) * 500
          break
      }
      return (itemUnitPrice + additionalRoomsCharge) * monthlyFrequency
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
      return unitPrice * parseInt(qty) * monthlyFrequency
    },
  }
  const total = Object.keys(services).reduce((totalPrice, serviceName) => {
    const servicePreferences = services[serviceName]
    const serviceFunc = PRICING_FUNCTIONS[serviceName]
    return totalPrice + serviceFunc(servicePreferences)
  }, 0)
  return total
}
