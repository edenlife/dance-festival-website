export default [
  {
    image: 'lunch-bundle',
    title: 'Lunch on You',
    description:
      'Give the gift of delicious lunches, made with love by our chefs. Your <strong>special person</strong> can choose whatever they want for lunch from a menu of over 100 options, every week.',

    details: [
      '1 meal per day.',
      'Delivered Monday to Friday.',
      ' ₦55,000 per month.',
    ],
    plan: {
      meal: {
        frequency: 'daily',
        qty: 1,
        amount: 55000,
      },
    },
    amount: '55,000',

  },

  {
    image: 'food-bundle',
    title: 'Food for the Week',
    description:
      "Three chef-made meals delivered twice a week, every week, means you're giving the <strong>gift of a stocked fridge.</strong> <br /> <br/>  This present is thoughtful and practical. Every time the receiver opens their fridge, they'll think of you.",

    details: [
      '6 meals per week.',
      'Delivered  twice a week.',
      '₦58,000 per month',
    ],
    plan: {
      meal: {
        frequency: 'weekly-twodays',
        qty: 6,
        amount: 58000,
      },
    },
    amount: '58,000',

  },
  {
    image: 'lunch-bundle',
    title: 'Clean Clothes Club',
    description:
      "Nobody likes laundry day. It's wet, wastes time, and sometimes, you even have to iron. <br/> <br/> This gift will save someone from a month of laundry days. We pick up and deliver, so it works for everyone.",

    details: [
      'Wash and iron 1 laundry bag of 30 items.',
      'Picked up and delivered every 2 weeks.',
      ' ₦24,000 per month ',
    ],
    plan: {
      laundry: {
        frequency: 'bi-weekly',
        qty: 1,
        item: 'wash-and-iron',
        amount: 24000,
      },
    },
    amount: '24,000',

  },
  {
    image: 'lunch-bundle',
    title: 'Spruced Space',
    description:
      "This is the perfect present for the person who's always busy and overwhelmed. They deserve a clean space to unwind.<br/> <br/> 'Home Sweet Home,' that's how your gift feels as soon as they walk in the door.",

    details: [
      'Standard cleaning for a 2 bedroom apartment.',
      'Every week.',
      ' ₦26,000 per month.',
    ],
    plan: {
      cleaning: {
        frequency: 'weekly',
        qty: 7,
        item: 'wash-and-iron',
        amount: 26000,
        home_type: 'flat',
        item: 'light-cleaning',
        item_areas: {
          bedrooms: 2,
          'living-rooms-dining-areas': 1,
          bathrooms: 2,
          kitchen: 1,
          study: 1,
          balcony: 0,
        },
      },
    },
    amount: '26,000',

  },
  {
    image: 'food-bundle',
    title: 'Fed and Clothed',
    description:
      'Treat someone special to this convenient combo. <br/> <br/> One day free from struggling for food every week, and no more laundry worries. All month.',

    details: [
      '1 meal per week delivered once a week.',
      'Wash and fold 1 laundry bag of 30 items.',
      'Laundry picked up and delivered every 2 weeks.',
      ' ₦24,500 per month. ',
    ],
    plan: {
      meal: {
        frequency: 'weekly',
        qty: 1,
        amount: 11000,
      },
      laundry: {
        frequency: 'bi-weekly',
        qty: 1,
        item: 'wash-and-fold',
        amount: 13500,
      },
    },
    amount: '24,500',

  },
  {
    image: 'lunch-bundle',
    title: 'Clothed and Cleaned',
    description:
      "It's been a long long year. <br />  <br/> Gift your fave a bundle of well-deserved rest and relaxation. For a whole month, this present reserves their weekends for fun.",

    details: [
      'Wash and fold 1 bag of 30 items.',
      'Laundry picked up and delivered every ',
      'Standard cleaning for a 1 bedroom apartment, done every two weeks.',
      ' ₦23,500 per month. ',
    ],
    plan: {
      cleaning: {
        frequency: 'bi-weekly',
        qty: 0,
        amount: 10000,
        home_type: 'flat',
        item: 'light-cleaning',
        item_areas: {
          bedrooms: 1,
          'living-rooms-dining-areas': 0,
          bathrooms: 0,
          kitchen: 0,
          study: 0,
          balcony: 0,
        },
      },
      laundry: {
        frequency: 'bi-weekly',
        qty: 1,
        item: 'wash-and-fold',
        amount: 13500,
      },
    },
    amount: '23,500',

  },
]
