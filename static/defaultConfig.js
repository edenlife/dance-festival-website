export default {
  NG: {
    food: {
      frequency: 'weekly',
      qty: 1,
      service_day: ['Monday'],
      meal_per_delivery: {
        same_number_per_delivery: true,
        monday: 1,
      },
      amount: 15800,
    },
    laundry: {
      frequency: 'monthly',
      item: 'wash-and-fold',
      qty: 1,
      service_day: ['Saturday'],
      amount: 29000,
    },
    cleaning: {
      frequency: 'bi-weekly',
      home_type: 'flat',
      item: 'light-cleaning',
      qty: 5,
      service_day: ['Friday'],
      item_areas: {
        bedrooms: 1,
        'living-rooms-dining-areas': 1,
        bathrooms: 1,
        kitchen: 1,
        balcony: 1,
      },
      amount: 15000,
    },
  },

  KE: {
    food: {
      frequency: 'daily',
      qty: 5,
      meal_per_delivery: {
        same_number_per_delivery: true,
        monday: 1,
        tuesday: 1,
        wednesday: 1,
        thursday: 1,
        friday: 1,
      },
      service_day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      amount: 13000,
    },
    laundry: {
      item: 'wash-and-iron',
      frequency: 'weekly-twodays',
      qty: 1,
      amount: 12000,
      service_day: ['Monday', 'Tuesday'],
    },
    cleaning: {
      item: 'light-cleaning',
      frequency: 'weekly-fourdays',
      qty: 5,
      item_areas: {
        bedrooms: 1,
        kitchen: 1,
        bathrooms: 1,
        'living-rooms-dining-areas': 1,
        balcony: 1,
      },
      home_type: 'apartment',
      amount: 12800,
      service_day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    },
    beauty: {
      item: 'standard',
      frequency: 'weekly-twodays',
      qty: 1,
      amount: 12000,
      service_day: ['Monday', 'Tuesday'],
    },
  },
}
