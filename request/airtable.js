const Airtable = require('airtable')
const base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(
  'appMoikF7UFpTFiHy'
)

const giftingTable = base('Gifting - Specific Plan')
const customTable = base('Gifting - Custom Plan')
const personalSahurTable = base('Ramadan - Personal Sahur')
const giftSahurTable = base('Ramadan - Gift Sahur')
const BetaTestTable = base('Beta Testing')
const WorkersDayTable = base('Companies')
const LaundryLeadsTable = base('Laundry Leads')
const FoodLeadsTable = base('Food Leads')
const CleaningLeadsTable = base('Cleaning Leads')

export const createGiftPlan = async (fields) => {
  const submitEntry = await giftingTable.create(fields)
  return submitEntry
}

export const createCustomPlan = async (fields) => {
  const customEntry = await customTable.create(fields)
  return customEntry
}

export const createPersonalSahur = async (fields) => {
  const submitEntry = await personalSahurTable.create(fields)
  return submitEntry
}

export const createGiftSahur = async (fields) => {
  const customEntry = await giftSahurTable.create(fields)
  return customEntry
}
export const createBeta = async (fields) => {
  const customEntry = await BetaTestTable.create(fields)
  return customEntry
}

export const createWorkersDay = async (fields) => {
  const customEntry = await WorkersDayTable.create(fields)
  return customEntry
}

export const createLaundryLeads = async (fields) => {
  const customEntry = await LaundryLeadsTable.create(fields)
  return customEntry
}

export const createFoodLeads = async (fields) => {
  const customEntry = await FoodLeadsTable.create(fields)
  return customEntry
}

export const createCleaningLeads = async (fields) => {
  const customEntry = await CleaningLeadsTable.create(fields)
  return customEntry
}

//https://airtable.com/appMoikF7UFpTFiHy/tblSwImE3sIU4JIbV/viwqKyunDaYFE9M6G?blocks=hide airtable link
