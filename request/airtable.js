const Airtable = require('airtable')
const base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(
  'appC8Jqi3O7tK5lBy'
)

const table = base('Lead page')

export const createLead = async (fields) => {
  const lead = await table.create(fields)
  return lead
}
