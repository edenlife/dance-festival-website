import { fetchWrapper } from './base'

export const requestCompanyCarebox = (requestDetails) => {
  return fetchWrapper(`company`).post(requestDetails)
}
