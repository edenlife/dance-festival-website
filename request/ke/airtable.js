const Airtable = require('airtable')
const base = new Airtable({ apiKey: process.env.AIRTABLE_KEY_KE }).base(
  'appC8Jqi3O7tK5lBy'
)

const leadTable = base('Lead page')
const suggestionTable = base('Suggestions')
const citySuggestionTable = base('City Suggestion')
const createLeadListTable = base('Lead List')

export const createLead = async (fields) => {
  const submitEntry = await leadTable.create(fields)
  return submitEntry
}

export const createSuggestion = async (fields) => {
  const suggestionEntry = await suggestionTable.create(fields)
  return suggestionEntry
}

export const createCitySuggestion = async (fields) => {
  const citySuggestionEntry = await citySuggestionTable.create(fields)
  return citySuggestionEntry
}

export const createLeadList = async (fields) => {
  const leadListEntry = await createLeadListTable.create(fields)
  return leadListEntry
}