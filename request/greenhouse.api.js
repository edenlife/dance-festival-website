import axios from 'axios'

const baseURL = process.env.GREENHOUSE_API
const instance = axios.create({
  baseURL,
  crossdomain: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export const login = (payload) => {
  return instance.post('login', payload)
}

export const register = (payload) => {
  return instance.post('onboarding/customers', payload)
}

export const waitingList = (payload) => {
  return instance.post('/onboarding/customers/waiting_list', payload)
}

export const sendResetCode = (payload) => {
  return instance.post('/forgot_password/createpasscode', payload)
}

export const resetPassword = (payload) => {
  return instance.post('/forgot_password/reset', payload)
}
