const Airtable = require('airtable')
const base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(
  'appMoikF7UFpTFiHy'
)

const giftingTable = base('Gifting - Specific Plan')
const customTable = base('Gifting - Custom Plan')

export const createGiftPlan = async (fields) => {
  const submitEntry = await giftingTable.create(fields)
  return submitEntry
}

export const createCustomPlan = async (fields) => {
  const customEntry = await customTable.create(fields)
  return customEntry
}
