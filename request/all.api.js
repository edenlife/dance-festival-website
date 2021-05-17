import api from './api'

export const faqApi = (payload) => {
  return api.post('faqpage', payload)
}

export const landingPageApi = (payload) => {
  return api.post('landingpage', payload)
}

export const giftingApi = (payload) => {
  return api.post('giftingpage', payload)
}

export const companiesApi = (payload) => {
  return api.post('companypage', payload)
}

export const signupApi = (payload) => {
  return api.post('pricing/signup', payload)
}

export const getCleaningServiceTypes = () => {
  return api.get(`cleaning/items/all`)
}
