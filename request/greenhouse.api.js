import axios from 'axios'
// import { getters } from '~/store'
const baseURL = process.env.GREENHOUSE_API
const instance = axios.create({
  baseURL,
  crossdomain: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

// const token = getters.getGreenhouseToken
// if (token) {
//   instance.headers.common.Authorization = `Bearer ${token}`
// }

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

export const list = () => {
  return instance.get('locationareas')
}

export const userProfile = (userId) => {
  return instance.get(`customers/${userId}/profile`)
}

export const updateProfile = (userId, details, section) => {
  return axios.patch(
    `customers/${userId}/profile?section=${section}`,
    details[section]
  )
}

export const changePassword = (userId, payload) => {
  return axios.put(`customers/${userId}/change_password`, payload)
}
