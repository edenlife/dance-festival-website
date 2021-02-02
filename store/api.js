import { fetchWrapper } from './base'

export const requestCompanyCarebox = (requestDetails) => {
  return fetchWrapper(`company`).post(requestDetails)
}

export const requestCustomiseCarebox = (requestDetails) => {
  return fetchWrapper(`customize`).post(requestDetails)
}

export const orderCarebox = (orderDetails) => {
  return fetchWrapper(`ordercarebox`).post(orderDetails)
}
